import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { useState } from "react";

const projects = [
  { title: "TechStart Solutions", category: "Website", result: "+180% traffic increase", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp", tags: ["React", "SEO", "Responsive"] },
  { title: "StyleHub Fashion", category: "E-commerce", result: "₹2L+ monthly sales", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp", tags: ["Shopify", "Payments", "Analytics"] },
  { title: "CreativeEdge Studio", category: "UI/UX", result: "+95% user satisfaction", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&fm=webp", tags: ["Figma", "Prototype", "Design System"] },
  { title: "HealthFirst Clinic", category: "Website", result: "+250 appointments/mo", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fm=webp", tags: ["Booking", "CMS", "Mobile-First"] },
  { title: "FoodieBox Delivery", category: "E-commerce", result: "5000+ orders processed", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fm=webp", tags: ["Next.js", "Real-time", "PWA"] },
  { title: "EduLearn Academy", category: "UI/UX", result: "+320% engagement", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fm=webp", tags: ["LMS", "Dashboard", "Video"] },
  { title: "PropertyHub Realty", category: "Website", result: "+320% lead generation", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp", tags: ["Listings", "CRM", "Maps"] },
  { title: "FitZone Gym", category: "Website", result: "+180% membership signups", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fm=webp", tags: ["Scheduling", "Payments", "App"] },
  { title: "LegalPro Services", category: "Branding", result: "Complete brand identity", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fm=webp", tags: ["Logo", "Guidelines", "Stationery"] },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Website", "E-commerce", "UI/UX", "Branding"];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="section-badge mb-4"><Briefcase className="w-4 h-4" />Our Work</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Projects that <span className="gradient-text">deliver results</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Real websites for real businesses with measurable outcomes.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-10">
          <div className="section-container">
            <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? "bg-primary text-white" : "glass-card text-muted-foreground hover:text-foreground"}`}>
                  {filter}
                </button>
              ))}
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.title} animation="scale-in" delay={index * 60}>
                  <div className="glass-card group overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">View Case Study</Link>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1.5 glass-card text-xs font-medium text-foreground">{project.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{project.title}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{project.result}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 text-xs bg-surface-elevated text-muted-foreground rounded-full">{tag}</span>))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass-card p-10 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gradient-blue/10 to-accent/10" />
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Want a Website Like These?</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Let's create something amazing together.</p>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Start Your Project <ArrowRight className="w-5 h-5" /></Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
