import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requirement: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, requirement }: ContactFormData = await req.json();

    console.log("Form data received:", { name, phone, email, requirement: requirement.substring(0, 50) + "..." });

    // Validate required fields
    if (!name || !phone || !email || !requirement) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FAHAD WEB SERVICE <onboarding@resend.dev>",
        to: ["fahadshaikh9076669103@gmail.com"],
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Project Inquiry
            </h1>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1e293b; margin-top: 0;">Project Requirement</h2>
              <p style="white-space: pre-wrap;">${requirement}</p>
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
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
