import { ArrowRight, Globe, ShoppingCart, Code2, Zap, Shield, Headphones } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    title: "Business Website",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp",
    description: "Perfect for shops, startups, agencies & personal brands. Modern designs that convert visitors into customers.",
    price: "₹2,499 – ₹5,999",
    features: ["5-7 Pages", "Mobile Responsive", "SEO Optimized"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "E-commerce Website",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    description: "Complete online store with products, checkout, secure payments, and cart system.",
    price: "₹8,000 – ₹18,000",
    features: ["Unlimited Products", "Payment Gateway", "Order Management"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Custom / Advanced Website",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    description: "Admin panels, login systems, dashboards, coaching portals — built to your exact specifications.",
    price: "₹12,000 – ₹35,000",
    features: ["Custom Features", "Admin Dashboard", "User Authentication"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const highlights = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Shield, label: "Secure Code" },
  { icon: Headphones, label: "24/7 Support" },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-5">
            <Zap className="w-4 h-4" />
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We build websites that help your business grow. Choose the perfect solution for your needs.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="slide-up"
              delay={index * 120}
            >
              <div className="card-premium group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional web development service`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <span className="text-primary font-bold text-lg">
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all duration-300"
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