import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Globe, 
  ShoppingCart, 
  Briefcase, 
  FileText, 
  RefreshCw, 
  Wrench,
  Check,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Business Website Development",
    icon: Globe,
    description: "Professional websites designed to establish your online presence and attract customers. Perfect for startups, agencies, and growing businesses.",
    features: [
      "5-10 Custom Pages",
      "Mobile Responsive Design",
      "SEO Optimized Structure",
      "Contact Forms & Integration",
      "Fast Loading Speed",
      "SSL Security Certificate"
    ],
    price: "Starting ₹4,999"
  },
  {
    title: "E-commerce Website Development",
    icon: ShoppingCart,
    description: "Complete online stores with product management, secure payments, and order tracking. Scale your business with a powerful e-commerce platform.",
    features: [
      "Unlimited Products",
      "Payment Gateway Integration",
      "Order Management System",
      "Inventory Tracking",
      "Customer Accounts",
      "Shopping Cart & Checkout"
    ],
    price: "Starting ₹12,999"
  },
  {
    title: "Portfolio Website Design",
    icon: Briefcase,
    description: "Showcase your work with stunning portfolio websites. Perfect for photographers, designers, artists, and creative professionals.",
    features: [
      "Gallery & Lightbox",
      "Project Showcases",
      "About & Contact Pages",
      "Social Media Integration",
      "Blog Section",
      "Custom Animations"
    ],
    price: "Starting ₹3,999"
  },
  {
    title: "Landing Page Design",
    icon: FileText,
    description: "High-converting landing pages designed to capture leads and drive sales. Perfect for marketing campaigns and product launches.",
    features: [
      "Single Page Design",
      "Call-to-Action Optimization",
      "Lead Capture Forms",
      "A/B Testing Ready",
      "Fast Performance",
      "Mobile First Design"
    ],
    price: "Starting ₹2,499"
  },
  {
    title: "Website Redesign",
    icon: RefreshCw,
    description: "Transform your outdated website into a modern, professional platform. We keep what works and improve what doesn't.",
    features: [
      "Modern UI/UX Design",
      "Performance Optimization",
      "Mobile Responsiveness",
      "Content Migration",
      "SEO Preservation",
      "Brand Consistency"
    ],
    price: "Starting ₹5,999"
  },
  {
    title: "Website Maintenance & Support",
    icon: Wrench,
    description: "Keep your website running smoothly with our maintenance packages. Regular updates, security patches, and technical support.",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Content Updates",
      "24/7 Technical Support",
      "Monthly Reports"
    ],
    price: "Starting ₹999/month"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                We offer comprehensive web development solutions tailored to your business needs. 
                From simple landing pages to complex e-commerce platforms, we deliver quality that exceeds expectations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="card-premium p-8 h-full flex flex-col group">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-primary font-bold text-lg mb-4">{service.price}</p>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Get Started <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="section-container">
            <AnimatedSection className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. We'll help you choose the perfect solution for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Contact Us Now <ArrowRight className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
