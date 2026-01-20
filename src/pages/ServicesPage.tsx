import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Code2, ShoppingCart, FileText, PenTool, Wrench, Check, ArrowRight, LayoutGrid, Zap, Shield, Clock, Star, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Beautiful, intuitive interfaces that users love. We focus on user experience to maximize engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototype Design", "Mobile-First Approach", "Design System"],
    price: "₹2,999+"
  },
  {
    title: "Website Development",
    icon: Code2,
    description: "Fast, secure, and scalable websites built with modern technologies. Optimized for performance and SEO.",
    features: ["4-10 Custom Pages", "Mobile Responsive", "SEO Optimized", "Contact Forms", "Fast Loading"],
    price: "₹4,999+"
  },
  {
    title: "Landing Pages",
    icon: FileText,
    description: "High-converting landing pages designed to capture leads and drive sales for your marketing campaigns.",
    features: ["Single Page Design", "CTA Optimization", "Lead Capture Forms", "Fast Performance", "Mobile Optimized"],
    price: "₹1,999+"
  },
  {
    title: "E-commerce Websites",
    icon: ShoppingCart,
    description: "Complete online stores with payment integration, inventory management, and seamless checkout experience.",
    features: ["Product Catalog", "Payment Gateway", "Order Management", "Inventory Tracking", "Customer Dashboard"],
    price: "₹8,999+"
  },
  {
    title: "Branding & Logo",
    icon: PenTool,
    description: "Memorable brand identity that sets you apart. From logos to complete brand guidelines.",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines", "Social Media Kit"],
    price: "₹1,999+"
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Keep your website running smoothly with regular updates, security patches, and technical support.",
    features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates", "Technical Support"],
    price: "₹499/month"
  }
];

const whyChoose = [
  { icon: Zap, title: "Fast Delivery", description: "Most projects completed in 2-12 days" },
  { icon: Shield, title: "No Hidden Charges", description: "What we quote is what you pay" },
  { icon: Clock, title: "On-Time Always", description: "We never miss deadlines" },
  { icon: Star, title: "Premium Quality", description: "Modern, professional designs" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="section-badge mb-4"><LayoutGrid className="w-4 h-4" />Our Services</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Premium services at <span className="gradient-text">affordable prices</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
                Comprehensive web solutions tailored to your business needs. Starting at just ₹1,999.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated/50 border border-border/50 text-sm">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} animation="slide-up" delay={index * 80}>
                  <motion.div 
                    className="glass-card neon-border p-8 h-full flex flex-col group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="icon-box mb-6">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{service.title}</h3>
                    <p className="text-primary font-bold text-lg mb-4">{service.price}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                    <div className="space-y-2.5 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-secondary w-full text-center text-sm py-3">
                      Get Quote
                    </Link>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-20">
          <div className="section-container max-w-4xl">
            <AnimatedSection>
              <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gradient-blue/10 to-accent/10" />
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
                    Not sure which service you need?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                    Let's have a quick call to understand your requirements. We'll suggest the best solution for your budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:9076669103" className="btn-primary inline-flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Book Free Call
                    </a>
                    <a href="https://wa.me/9076669103" className="btn-accent inline-flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass-card p-10 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gradient-blue/10 to-accent/10" />
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Ready to Start Your Project?</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Contact us today for a free consultation and quote. No obligations, just a friendly chat about your project.
                  </p>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
