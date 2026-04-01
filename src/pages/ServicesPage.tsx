import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Code2, ShoppingCart, FileText, PenTool, Wrench, Check, ArrowRight, Layers, Zap, Shield, Clock, Star, Phone, MessageCircle, TrendingUp, Search } from "lucide-react";

const services = [
  {
    title: "Website Design",
    icon: Palette,
    description: "Beautiful, intuitive interfaces that users love. We focus on user experience to maximize engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototype Design", "Mobile-First Approach", "Design System"],
    price: "₹2,999+"
  },
  {
    title: "Web Development",
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
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Complete online stores with payment integration, inventory management, and seamless checkout experience.",
    features: ["Product Catalog", "Payment Gateway", "Order Management", "Inventory Tracking", "Customer Dashboard"],
    price: "₹8,999+"
  },
  {
    title: "SEO & Performance",
    icon: Search,
    description: "Optimize your website for search engines and speed to rank higher and convert more visitors.",
    features: ["Keyword Research", "On-Page SEO", "Speed Optimization", "Analytics Setup", "Monthly Reports"],
    price: "₹1,999+"
  },
  {
    title: "Maintenance",
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Web Design & Development Services India | SEO, E-commerce | Fahad WebService"
        description="Professional website development, e-commerce solutions, SEO services, and UI/UX design in India. Affordable packages starting at ₹1,999. Fast delivery, premium quality."
        keywords="web design services India, website development services, ecommerce website India, SEO services India, UI UX design India, affordable web development"
        canonical="https://fahadwebservice.com/services"
      />
      <Header />
      <main>
        <section className="w-full pt-28 pb-16 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4"><Layers className="w-3.5 h-3.5" />Our Services</span>
                <h1 className="text-foreground mb-5">
                  Professional web design & development <span className="gradient-text">services in India</span>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  We offer comprehensive website development, e-commerce solutions, SEO optimization, and UI/UX design services tailored for Indian businesses. Our team combines modern design with technical expertise to create websites that rank higher on Google, load faster, and convert more visitors into customers. Every project is delivered on time with transparent pricing starting at just ₹1,999.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-card border border-border text-sm">
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground font-medium text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <AnimatedSection key={service.title} animation="slide-up" delay={index * 60}>
                    <motion.div 
                      className="glass-card p-6 h-full flex flex-col group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="icon-box w-10 h-10 mb-4">
                        <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">{service.title}</h3>
                      <p className="text-accent font-bold text-base mb-3">{service.price}</p>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                      <div className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="btn-secondary w-full text-center">
                        Get Quote
                      </Link>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-card rounded-xl p-8 sm:p-10 text-center border border-border shadow-md">
                  <h2 className="font-bold text-2xl text-foreground mb-3">
                    Not sure which service you need?
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 max-w-lg mx-auto">
                    Let's have a quick call to understand your requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:9076669103" className="btn-primary inline-flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Book Free Call
                    </a>
                    <a href="https://wa.me/9076669103" className="btn-accent inline-flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
                    <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">
                      Contact us today for a free consultation and quote.
                    </p>
                    <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-200">
                      Get Free Quote <ArrowRight className="w-4 h-4" />
                    </Link>
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
