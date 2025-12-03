import { Check } from "lucide-react";

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
    <section id="pricing" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-base relative ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-display font-bold text-4xl text-primary">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "btn-accent"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
