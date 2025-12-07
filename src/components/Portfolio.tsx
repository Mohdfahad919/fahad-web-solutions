import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&fm=webp",
    alt: "Modern dashboard UI design with analytics and charts",
    category: "Dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp",
    alt: "E-commerce website design with product showcase",
    category: "E-commerce",
  },
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&fm=webp",
    alt: "Clean business website landing page design",
    category: "Business",
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fm=webp",
    alt: "Mobile-first responsive website design",
    category: "Mobile App",
  },
  {
    src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80&fm=webp",
    alt: "Creative portfolio website with modern UI",
    category: "Portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fm=webp",
    alt: "SaaS platform interface with clean design",
    category: "SaaS",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our recent projects and see the quality of modern, professional designs we deliver.
          </p>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 80}
            >
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground font-medium flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Project <ExternalLink className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
