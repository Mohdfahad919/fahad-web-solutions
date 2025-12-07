import { ArrowRight, Globe, ShoppingCart, Code2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    title: "Business Website",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp",
    description: "Perfect for shops, startups, agencies & personal brands. Modern designs that convert visitors into customers.",
    price: "₹2,499 – ₹5,999",
    features: ["5-7 Pages", "Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "E-commerce Website",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fm=webp",
    description: "Complete online store with products, checkout, secure payments, and cart system.",
    price: "₹8,000 – ₹18,000",
    features: ["Unlimited Products", "Payment Gateway", "Order Management"],
  },
  {
    title: "Custom / Advanced Website",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fm=webp",
    description: "Admin panels, login systems, dashboards, coaching portals — built to your exact specifications.",
    price: "₹12,000 – ₹35,000",
    features: ["Custom Features", "Admin Dashboard", "User Authentication"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build websites that help your business grow. Choose the perfect solution for your needs.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="card-base group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional web development service`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-primary font-bold text-lg">
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all duration-300"
                    >
                      Get Quote <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
