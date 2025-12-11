import { ExternalLink, Sparkles } from "lucide-react";
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
    <section id="portfolio" className="section-padding bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-badge mb-5">
            <Sparkles className="w-4 h-4" />
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Browse through our recent projects and see the quality of modern, professional designs we deliver.
          </p>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioImages.map((image, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <a
                href="#contact"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-500 block"
                style={{ boxShadow: 'var(--shadow-card)' }}
                aria-label={`View ${image.category} project - ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.7]"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-3 shadow-lg">
                      {image.category}
                    </span>
                    <p className="text-white font-medium flex items-center gap-2 text-lg">
                      Start Similar Project <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Start Your Project <ExternalLink className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}