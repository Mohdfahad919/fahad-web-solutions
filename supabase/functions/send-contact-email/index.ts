import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  honeypot?: string; // Honeypot field - should be empty
}

const RATE_LIMIT_MAX = 5; // Max 5 requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

// Persistent rate limiting backed by the contact_rate_limits table.
// Survives cold starts and is shared across function instances.
async function checkRateLimit(ip: string): Promise<boolean> {
  try {
    const now = Date.now();
    const { data, error } = await supabaseAdmin
      .from("contact_rate_limits")
      .select("request_count, window_start")
      .eq("ip_address", ip)
      .maybeSingle();

    if (error) {
      console.error("Rate-limit read error:", error);
      // Fail-closed on read errors would block legitimate users during a DB
      // hiccup; fail-open but log so spikes are still visible.
      return true;
    }

    const windowStartMs = data ? new Date(data.window_start).getTime() : 0;
    const withinWindow = data && now - windowStartMs < RATE_LIMIT_WINDOW_MS;

    if (!data || !withinWindow) {
      const { error: upsertErr } = await supabaseAdmin
        .from("contact_rate_limits")
        .upsert({
          ip_address: ip,
          request_count: 1,
          window_start: new Date(now).toISOString(),
          updated_at: new Date(now).toISOString(),
        });
      if (upsertErr) console.error("Rate-limit upsert error:", upsertErr);
      return true;
    }

    if (data.request_count >= RATE_LIMIT_MAX) {
      return false;
    }

    const { error: updErr } = await supabaseAdmin
      .from("contact_rate_limits")
      .update({
        request_count: data.request_count + 1,
        updated_at: new Date(now).toISOString(),
      })
      .eq("ip_address", ip);
    if (updErr) console.error("Rate-limit update error:", updErr);
    return true;
  } catch (e) {
    console.error("Rate-limit unexpected error:", e);
    return true;
  }
}

// HTML entity escaping to prevent HTML injection
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// Input validation functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, dashes, parentheses, and plus sign
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.length >= 6 && phone.length <= 20;
}

function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 100;
}

function isValidRequirement(requirement: string): boolean {
  return requirement.length >= 10 && requirement.length <= 2000;
}

// Sanitize and trim input
function sanitizeInput(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (!(await checkRateLimit(clientIP))) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const rawData: ContactFormData = await req.json();

    // Check honeypot field - bots often fill all fields
    if (rawData.honeypot && rawData.honeypot.trim() !== "") {
      console.warn("Honeypot triggered - likely bot submission");
      // Return success to not alert the bot, but don't send email
      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs
    const name = sanitizeInput(rawData.name || "", 100);
    const phone = sanitizeInput(rawData.phone || "", 20);
    const email = sanitizeInput(rawData.email || "", 255);
    const requirement = sanitizeInput(rawData.requirement || "", 2000);

    // Validate required fields
    if (!name || !phone || !email || !requirement) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate field formats
    if (!isValidName(name)) {
      return new Response(
        JSON.stringify({ error: "Name must be between 2 and 100 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid phone number" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidRequirement(requirement)) {
      return new Response(
        JSON.stringify({ error: "Project requirement must be between 10 and 2000 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape HTML entities for safe email content
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeRequirement = escapeHtml(requirement);

    console.log("Form data validated successfully for:", safeEmail);

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FAHAD WEB SERVICE <onboarding@resend.dev>",
        to: ["fahadwebservice@gmail.com"],
        subject: `New Project Inquiry from ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Project Inquiry
            </h1>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
              <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e293b; margin-top: 0;">Project Requirement</h2>
              <p style="white-space: pre-wrap;">${safeRequirement}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #22c55e; color: white; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/9076669103?text=Hi%20${encodeURIComponent(name)}%2C%20I%20received%20your%20inquiry." 
                 style="color: white; text-decoration: none; font-weight: bold;">
                Reply on WhatsApp
              </a>
            </div>
            
            <p style="color: #64748b; font-size: 12px; margin-top: 30px; text-align: center;">
              This email was sent from your website contact form at FAHAD WEB SERVICE
            </p>
          </div>
        `,
      }),
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend API error:", emailData);
      throw new Error(emailData.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while sending your message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
