import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Palette, Code2, ShoppingCart, FileText, PenTool, Wrench, Check, ArrowRight, LayoutGrid } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: Palette,
    description: "Beautiful, intuitive interfaces that users love. We focus on user experience to maximize engagement and conversions.",
    features: ["User Research", "Wireframing", "Prototype Design", "Usability Testing", "Design System", "Mobile-First Approach"],
    price: "Starting ₹8,999"
  },
  {
    title: "Website Development",
    icon: Code2,
    description: "Fast, secure, and scalable websites built with modern technologies. Optimized for performance and SEO.",
    features: ["5-10 Custom Pages", "Mobile Responsive", "SEO Optimized", "Contact Forms", "Fast Loading", "SSL Security"],
    price: "Starting ₹9,999"
  },
  {
    title: "E-commerce Websites",
    icon: ShoppingCart,
    description: "Complete online stores with payment integration, inventory management, and seamless checkout experience.",
    features: ["Unlimited Products", "Payment Gateway", "Order Management", "Inventory Tracking", "Customer Accounts", "Analytics Dashboard"],
    price: "Starting ₹24,999"
  },
  {
    title: "Landing Pages",
    icon: FileText,
    description: "High-converting landing pages designed to capture leads and drive sales for your marketing campaigns.",
    features: ["Single Page Design", "CTA Optimization", "Lead Capture Forms", "A/B Testing Ready", "Fast Performance", "Mobile Optimized"],
    price: "Starting ₹4,999"
  },
  {
    title: "Branding & Logo",
    icon: PenTool,
    description: "Memorable brand identity that sets you apart. From logos to complete brand guidelines.",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines", "Social Media Kit", "Business Cards"],
    price: "Starting ₹5,999"
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Keep your website running smoothly with regular updates, security patches, and technical support.",
    features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates", "24/7 Support", "Monthly Reports"],
    price: "Starting ₹999/month"
  }
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
                Everything you need to <span className="gradient-text">succeed online</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Comprehensive web solutions tailored to your business needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} animation="slide-up" delay={index * 80}>
                  <div className="glass-card neon-border p-8 h-full flex flex-col group">
                    <div className="icon-box mb-6">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                    <div className="space-y-2.5 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-border">
                      <p className="gradient-text font-bold text-lg mb-4">{service.price}</p>
                      <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 text-sm">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass-card p-10 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gradient-blue/10 to-accent/10" />
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Ready to Start Your Project?</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and quote.</p>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Contact Us Now <ArrowRight className="w-5 h-5" />
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
