import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TechStart Solutions",
    category: "Business Website",
    description: "Modern corporate website with custom animations, contact forms, and blog integration for a growing tech startup.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp",
    features: ["Responsive Design", "SEO Optimized", "Blog Integration"]
  },
  {
    title: "StyleHub Fashion",
    category: "E-commerce",
    description: "Full-featured online fashion store with product management, secure checkout, and customer accounts.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp",
    features: ["Payment Gateway", "Order Management", "500+ Products"]
  },
  {
    title: "CreativeEdge Studio",
    category: "Portfolio",
    description: "Stunning portfolio website for a creative agency showcasing their design work with smooth animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&fm=webp",
    features: ["Gallery Lightbox", "Custom Animations", "Contact Form"]
  },
  {
    title: "HealthFirst Clinic",
    category: "Business Website",
    description: "Professional healthcare website with appointment booking, doctor profiles, and patient resources.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fm=webp",
    features: ["Appointment System", "Doctor Profiles", "Mobile First"]
  },
  {
    title: "FoodieBox Delivery",
    category: "E-commerce",
    description: "Food delivery platform with real-time order tracking, menu management, and customer reviews.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fm=webp",
    features: ["Live Tracking", "Menu System", "Review System"]
  },
  {
    title: "EduLearn Academy",
    category: "Custom Platform",
    description: "Online learning platform with course management, student dashboards, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fm=webp",
    features: ["Course Management", "Student Dashboard", "Progress Tracking"]
  },
  {
    title: "PropertyHub Real Estate",
    category: "Business Website",
    description: "Real estate listing website with property search, agent profiles, and virtual tour integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp",
    features: ["Property Search", "Agent Profiles", "Virtual Tours"]
  },
  {
    title: "FitZone Gym",
    category: "Business Website",
    description: "Fitness center website with class schedules, membership plans, and trainer booking system.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fm=webp",
    features: ["Class Schedule", "Membership Plans", "Trainer Booking"]
  },
  {
    title: "LegalPro Services",
    category: "Business Website",
    description: "Professional law firm website with practice areas, attorney profiles, and consultation booking.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fm=webp",
    features: ["Practice Areas", "Attorney Profiles", "Consultation Form"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Our <span className="text-primary">Work</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Explore our portfolio of successful projects. Each website is crafted with attention to detail, 
                modern design principles, and a focus on results.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection
                  key={project.title}
                  animation="scale-in"
                  delay={index * 80}
                >
                  <div className="card-premium group overflow-hidden">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {project.category}
                      </span>

                      {/* Hover Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                      >
                        Start Similar Project <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground">
          <div className="section-container">
            <AnimatedSection className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-6">
                Want a Website Like These?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Contact us to discuss your project requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
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
