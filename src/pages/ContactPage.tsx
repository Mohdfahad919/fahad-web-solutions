import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function ContactPage() {
  const { toast } = useToast();
  
  const openWhatsApp = () => {
    window.location.href = "https://wa.me/9076669103";
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          requirement: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
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

  const contactDetails = [
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 9076669103", 
      href: "tel:9076669103",
      description: "Call us directly"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "fahadshaikh9076669103@gmail.com", 
      href: "mailto:fahadshaikh9076669103@gmail.com",
      description: "Send us an email"
    },
    { 
      icon: MessageCircle, 
      label: "WhatsApp", 
      value: "+91 9076669103", 
      onClick: openWhatsApp,
      description: "Chat with us instantly"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "India",
      description: "Serving clients worldwide"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Ready to start your project? Get in touch with us today. 
                We'd love to hear about your business and how we can help.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <AnimatedSection animation="slide-up">
                <div className="card-premium p-8 lg:p-10">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
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
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                        placeholder="Describe your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
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
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="space-y-6">
                  {/* Contact Details */}
                  <div className="card-premium p-8">
                    <h3 className="font-display font-bold text-xl text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-5">
                      {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{item.label}</p>
                            <p className="text-muted-foreground text-sm mb-0.5">{item.description}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-primary hover:underline break-all"
                              >
                                {item.value}
                              </a>
                            ) : item.onClick ? (
                              <button
                                onClick={item.onClick}
                                className="text-primary hover:underline text-left"
                              >
                                {item.value}
                              </button>
                            ) : (
                              <p className="text-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="card-premium p-8 bg-gradient-to-br from-whatsapp/5 to-whatsapp/10 border-whatsapp/20">
                    <MessageCircle className="w-10 h-10 text-whatsapp mb-4" />
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      Prefer WhatsApp?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get instant response through WhatsApp. We're available to chat!
                    </p>
                    <button
                      onClick={openWhatsApp}
                      className="group inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-6 py-3 rounded-xl hover:bg-whatsapp/90 hover:scale-[1.02] transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Response Time */}
                  <div className="card-premium p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Quick Response</p>
                        <p className="text-muted-foreground text-sm">
                          We typically respond within 24 hours
                        </p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-primary ml-auto" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
