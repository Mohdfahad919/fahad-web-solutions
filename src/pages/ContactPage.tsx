import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Clock, CheckCircle2, Shield, Zap, BadgeCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function ContactPage() {
  const { toast } = useToast();
  const openWhatsApp = () => { window.location.href = "https://wa.me/9076669103"; };

  const [formData, setFormData] = useState({ name: "", phone: "", email: "", business: "", websiteType: "", budget: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: formData.name, phone: formData.phone, email: formData.email, requirement: `Business: ${formData.business}\nType: ${formData.websiteType}\nBudget: ${formData.budget}\n\n${formData.message}` },
      });
      if (error) throw error;
      toast({ title: "Message Sent Successfully!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", phone: "", email: "", business: "", websiteType: "", budget: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({ title: "Error", description: "Failed to send message. Please try WhatsApp instead.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactDetails = [
    { icon: Phone, label: "Phone", value: "+91 9076669103", href: "tel:9076669103" },
    { icon: Mail, label: "Email", value: "fahadshaikh9076669103@gmail.com", href: "mailto:fahadshaikh9076669103@gmail.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 9076669103", onClick: openWhatsApp },
    { icon: MapPin, label: "Location", value: "India" },
  ];

  const trustBadges = [
    { icon: Shield, text: "No Hidden Charges" },
    { icon: Zap, text: "Fast Response" },
    { icon: BadgeCheck, text: "Premium Quality" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="w-full pt-28 pb-14 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4"><MessageCircle className="w-3.5 h-3.5" />Contact Us</span>
                <h1 className="text-foreground mb-5">
                  Let's <span className="gradient-text">build something amazing</span>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  Book a free strategy call and get your quote instantly. No obligations.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent/6 border border-accent/10 text-xs text-accent font-medium">
                      <badge.icon className="w-3.5 h-3.5" />
                      {badge.text}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full py-8 pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <AnimatedSection animation="slide-up">
                  <div className="glass-card p-6 lg:p-8">
                    <h2 className="font-semibold text-xl text-foreground mb-1.5">Get Your Free Quote</h2>
                    <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll get back within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">Name *</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-premium" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">WhatsApp Number *</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-premium" placeholder="Your WhatsApp number" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-premium" placeholder="Your email (optional)" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">Business Name</label>
                        <input type="text" name="business" value={formData.business} onChange={handleChange} className="input-premium" placeholder="Your business name" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">Website Type</label>
                          <select name="websiteType" value={formData.websiteType} onChange={handleChange} className="select-premium">
                            <option value="">Select type</option>
                            <option value="Landing Page">Landing Page (₹1,999+)</option>
                            <option value="Business Website">Business Website (₹4,999+)</option>
                            <option value="E-commerce">E-commerce Store (₹8,999+)</option>
                            <option value="Portfolio">Portfolio (₹2,999+)</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">Budget</label>
                          <select name="budget" value={formData.budget} onChange={handleChange} className="select-premium">
                            <option value="">Select budget</option>
                            <option value="₹1,999 - ₹2,999">₹1,999 - ₹2,999</option>
                            <option value="₹4,999 - ₹6,999">₹4,999 - ₹6,999</option>
                            <option value="₹8,999 - ₹12,999">₹8,999 - ₹12,999</option>
                            <option value="₹12,999+">₹12,999+</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">Message *</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="input-premium resize-none" placeholder="Tell us about your project..." />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-up" delay={100}>
                  <div className="space-y-5">
                    <div className="glass-card p-6">
                      <h3 className="font-semibold text-lg text-foreground mb-4">Contact Information</h3>
                      <div className="space-y-4">
                        {contactDetails.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="icon-box w-10 h-10 flex-shrink-0">
                              <item.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="font-medium text-sm text-foreground">{item.label}</p>
                              {item.href ? (
                                <a href={item.href} className="text-accent text-sm hover:underline break-all">{item.value}</a>
                              ) : item.onClick ? (
                                <button onClick={item.onClick} className="text-accent text-sm hover:underline text-left">{item.value}</button>
                              ) : (
                                <p className="text-foreground text-sm">{item.value}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 border-2 border-whatsapp/20">
                      <MessageCircle className="w-8 h-8 text-whatsapp mb-3" />
                      <h3 className="font-semibold text-lg text-foreground mb-1.5">Prefer WhatsApp?</h3>
                      <p className="text-muted-foreground text-sm mb-3">Get instant response. Most queries answered within 1 hour!</p>
                      <button onClick={openWhatsApp} className="btn-accent w-full flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </button>
                    </div>
                    
                    <div className="glass-card p-4 flex items-center gap-3">
                      <div className="icon-box w-10 h-10">
                        <Clock className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">Quick Response</p>
                        <p className="text-muted-foreground text-xs">We typically respond within 1-24 hours</p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-accent ml-auto" />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
