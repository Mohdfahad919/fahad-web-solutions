import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  Clock,
  Shield,
  Heart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We listen to your needs and deliver solutions that exceed expectations."
  },
  {
    icon: Award,
    title: "Modern Design Standards",
    description: "We stay updated with the latest design trends and technologies to deliver cutting-edge websites."
  },
  {
    icon: Shield,
    title: "Honest & Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide clear quotes and stick to them."
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "We respect your time and deadlines. Every project is delivered on schedule without compromising quality."
  }
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "40+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                About <span className="text-primary">Fahad Web Services</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                We are a professional web development agency dedicated to helping businesses 
                establish a powerful online presence through modern, responsive, and results-driven websites.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-up">
                <div className="space-y-6">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                    Building Digital Success Stories
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Founded with a passion for web development and a commitment to excellence, 
                    Fahad Web Services has grown into a trusted partner for businesses seeking 
                    professional website solutions.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We combine creativity with technical expertise to create websites that not only 
                    look stunning but also drive real business results. Our team stays at the forefront 
                    of web technologies to deliver modern, fast, and secure websites.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {["Clean Code", "Modern Design", "Fast Delivery", "24/7 Support"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="card-premium p-6 text-center"
                    >
                      <p className="font-display font-extrabold text-4xl text-primary mb-2">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-up">
                <div className="card-premium p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses of all sizes with professional, affordable, and 
                    high-performing websites that drive growth and success in the digital world. 
                    We believe every business deserves a strong online presence.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <div className="card-premium p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted web development partner for businesses in India, 
                    known for exceptional quality, innovative solutions, and outstanding customer 
                    service. We aim to set the standard for professional web development.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-20">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Trust <span className="text-primary">Us?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're committed to delivering excellence in every project we undertake.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="card-premium p-6 text-center h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="section-container">
            <AnimatedSection className="text-center">
              <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Ready to take your business online? We'd love to hear about your project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Get In Touch <ArrowRight className="w-5 h-5" />
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
