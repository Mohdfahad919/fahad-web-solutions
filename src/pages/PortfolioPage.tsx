import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp, Zap, Users, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const projects = [
  { title: "TechStart Solutions", category: "Website", result: "+180% traffic increase", metrics: { speed: "70% faster", leads: "2x more leads" }, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp", tags: ["React", "SEO", "Responsive"] },
  { title: "StyleHub Fashion", category: "E-commerce", result: "₹2L+ monthly sales", metrics: { speed: "65% faster", leads: "3x conversion" }, image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp", tags: ["Shopify", "Payments", "Analytics"] },
  { title: "CreativeEdge Studio", category: "UI/UX", result: "+95% user satisfaction", metrics: { speed: "50% faster", leads: "Better UX" }, image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&fm=webp", tags: ["Figma", "Prototype", "Design System"] },
  { title: "HealthFirst Clinic", category: "Website", result: "+250 appointments/mo", metrics: { speed: "60% faster", leads: "2.5x bookings" }, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fm=webp", tags: ["Booking", "CMS", "Mobile-First"] },
  { title: "FoodieBox Delivery", category: "E-commerce", result: "5000+ orders processed", metrics: { speed: "75% faster", leads: "4x orders" }, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fm=webp", tags: ["Next.js", "Real-time", "PWA"] },
  { title: "EduLearn Academy", category: "UI/UX", result: "+320% engagement", metrics: { speed: "55% faster", leads: "3x signups" }, image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fm=webp", tags: ["LMS", "Dashboard", "Video"] },
  { title: "PropertyHub Realty", category: "Website", result: "+320% lead generation", metrics: { speed: "70% faster", leads: "3x leads" }, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp", tags: ["Listings", "CRM", "Maps"] },
  { title: "FitZone Gym", category: "Website", result: "+180% membership signups", metrics: { speed: "65% faster", leads: "2x members" }, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fm=webp", tags: ["Scheduling", "Payments", "App"] },
  { title: "LegalPro Services", category: "Branding", result: "Complete brand identity", metrics: { speed: "Modern look", leads: "Trust boost" }, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fm=webp", tags: ["Logo", "Guidelines", "Stationery"] },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Website", "E-commerce", "UI/UX", "Branding"];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Header />
      <main>
        <section className="pt-32 pb-16">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="section-badge mb-4"><Briefcase className="w-4 h-4" />Our Work</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Projects that <span className="gradient-text">deliver results</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
                Real websites for real businesses with measurable outcomes. See what we can do for you.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: TrendingUp, value: "120+", label: "Projects" },
                  { icon: Users, value: "50+", label: "Happy Clients" },
                  { icon: Zap, value: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 px-4 py-2 rounded-full bg-surface-elevated/50 border border-border/50">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-bold">{stat.value}</span>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-10">
          <div className="section-container">
            <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((filter) => (
                <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? "bg-primary text-white shadow-lg shadow-primary/25" : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"}`}>
                  {filter}
                </button>
              ))}
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.title} animation="scale-in" delay={index * 60}>
                  <div className="glass-card group overflow-hidden hover:border-primary/30 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6 gap-3">
                        <div className="glass-card px-4 py-2 text-sm font-medium text-foreground">View Case Study</div>
                        <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">Build a Website Like This</Link>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1.5 glass-card text-xs font-medium text-foreground">{project.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{project.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{project.result}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 text-xs bg-surface-elevated text-muted-foreground rounded-full">{tag}</span>))}
                      </div>
                      <div className="pt-4 border-t border-border flex gap-4 text-xs text-muted-foreground">
                        <span>⚡ {project.metrics.speed}</span>
                        <span>📈 {project.metrics.leads}</span>
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
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Let's create something amazing together. Premium websites starting at just ₹1,999.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Start Your Project
                    </Link>
                    <a href="https://wa.me/9076669103" className="btn-accent inline-flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </div>
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
