const services = [
  {
    title: "Business Website",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    description: "Perfect for shops, startups, agencies & personal brands.",
    price: "₹2,499 – ₹5,999",
  },
  {
    title: "E-commerce Website",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200&q=80",
    description: "Products, checkout, secure payments, cart system.",
    price: "₹8,000 – ₹18,000",
  },
  {
    title: "Custom / Advanced Website",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    description: "Admin panel, login system, dashboards, coaching portals.",
    price: "₹12,000 – ₹35,000",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build websites that help your business grow. Choose the perfect solution for your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-base group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-lg">
                    {service.price}
                  </span>
                  <a
                    href="#contact"
                    className="text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
