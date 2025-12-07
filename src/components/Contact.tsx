import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Headphones } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const { toast } = useToast();
  
  const openWhatsApp = () => {
    const url = "https://wa.me/9076669103";
    window.location.href = url;
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", phone: "", email: "", requirement: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try WhatsApp instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9076669103", href: "tel:9076669103", color: "primary" },
    { icon: Mail, label: "Email", value: "fahadshaikh9076669103@gmail.com", href: "mailto:fahadshaikh9076669103@gmail.com", color: "primary" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 9076669103", onClick: openWhatsApp, color: "whatsapp" },
    { icon: MapPin, label: "Location", value: "India", color: "primary" },
  ];

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-5">
            <Headphones className="w-4 h-4" />
            Contact Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for a free consultation.
          </p>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection animation="slide-up" delay={0}>
            <div className="card-premium p-8 lg:p-10 h-full rounded-3xl">
              <h3 className="font-display font-bold text-2xl text-foreground mb-8">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-sm font-semibold text-foreground mb-2.5">
                    Project Requirement
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                  style={{ boxShadow: '0 8px 24px -8px hsl(24 95% 53% / 0.4)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slide-up" delay={120}>
            <div className="card-premium p-8 lg:p-10 h-full flex flex-col rounded-3xl">
              <h3 className="font-display font-bold text-2xl text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 flex-1">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                      item.color === 'whatsapp' 
                        ? 'bg-whatsapp/10 group-hover:bg-whatsapp/20' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <item.icon className={`w-6 h-6 ${item.color === 'whatsapp' ? 'text-whatsapp' : 'text-primary'}`} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-muted-foreground hover:text-${item.color} transition-colors text-lg break-all`}
                        >
                          {item.value}
                        </a>
                      ) : item.onClick ? (
                        <button
                          onClick={item.onClick}
                          className="text-muted-foreground hover:text-whatsapp transition-colors text-lg text-left"
                        >
                          {item.value}
                        </button>
                      ) : (
                        <p className="text-muted-foreground text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-whatsapp/10 via-whatsapp/5 to-transparent border border-whatsapp/20">
                <p className="text-foreground font-bold mb-2 text-lg">
                  Prefer WhatsApp?
                </p>
                <p className="text-muted-foreground mb-5">
                  Chat with us directly for faster response!
                </p>
                <button
                  onClick={openWhatsApp}
                  className="group inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-4 rounded-xl hover:bg-whatsapp-hover hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}