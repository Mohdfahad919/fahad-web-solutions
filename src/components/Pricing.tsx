import { Check, Sparkles, ArrowRight, Crown } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter Website",
    description: "Single-page / Portfolio",
    price: "₹2,499",
    features: [
      "Single page design",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "3 days delivery",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    description: "5–7 pages + contact forms + basic SEO",
    price: "₹5,999",
    features: [
      "5-7 custom pages",
      "Mobile responsive",
      "Contact & inquiry forms",
      "SEO optimization",
      "Social media integration",
      "7 days delivery",
    ],
    popular: true,
  },
  {
    name: "E-commerce Website",
    description: "Products + cart + payments",
    price: "₹12,000+",
    features: [
      "Unlimited products",
      "Shopping cart system",
      "Payment integration",
      "Order management",
      "Admin dashboard",
      "14 days delivery",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-5">
            <Crown className="w-4 h-4" />
            Pricing Plans
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </AnimatedSection>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="slide-up"
              delay={index * 120}
            >
              <div
                className={cn(
                  "relative h-full rounded-3xl transition-all duration-500 overflow-hidden",
                  plan.popular 
                    ? "lg:scale-105 z-10" 
                    : ""
                )}
              >
                {/* Popular plan glow effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-3xl blur-xl" />
                )}

                <div className={cn(
                  "relative h-full bg-card rounded-3xl border transition-all duration-300",
                  plan.popular 
                    ? "border-primary/50 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]" 
                    : "border-border/50 hover:border-border"
                )}
                style={{ boxShadow: plan.popular ? undefined : 'var(--shadow-card)' }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-primary-foreground text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8 lg:p-10">
                    {/* Plan Name */}
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-8">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-10">
                      <span className="font-display font-extrabold text-5xl text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm ml-2">one-time</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
                            plan.popular ? "bg-primary/20" : "bg-primary/10"
                          )}>
                            <Check className={cn(
                              "w-3.5 h-3.5",
                              plan.popular ? "text-primary" : "text-primary"
                            )} />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className={cn(
                        "group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300",
                        plan.popular
                          ? "bg-accent text-accent-foreground hover:scale-[1.02]"
                          : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                      style={plan.popular ? { boxShadow: '0 8px 24px -8px hsl(24 95% 53% / 0.4)' } : undefined}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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