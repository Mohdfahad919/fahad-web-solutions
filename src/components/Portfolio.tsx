const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    alt: "Web development project - laptop with code",
  },
  {
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80",
    alt: "Programming workspace with colorful code",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    alt: "Modern web development setup",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our recent projects and see the quality of work we deliver.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
