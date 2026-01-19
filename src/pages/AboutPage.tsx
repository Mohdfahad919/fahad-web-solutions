import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, Shield, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const values = [
  { icon: Users, title: "Client-Focused", description: "Your success is our priority. We listen, understand, and deliver solutions that exceed expectations." },
  { icon: Award, title: "Modern Standards", description: "We use the latest technologies and design trends to deliver cutting-edge websites." },
  { icon: Shield, title: "Honest Pricing", description: "Transparent quotes with no hidden fees. What we quote is what you pay." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect deadlines. Every project is delivered on schedule without compromising quality." },
];

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="section-badge mb-4"><Sparkles className="w-4 h-4" />About Us</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                About <span className="gradient-text">Fahad WebService</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                A premium web development agency dedicated to helping businesses establish a powerful online presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-up">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Building Digital Success Stories</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Founded with a passion for web development and commitment to excellence, Fahad WebService has become a trusted partner for businesses seeking professional website solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We combine creativity with technical expertise to create websites that not only look stunning but drive real business results.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Clean Code", "Modern Design", "Fast Delivery", "24/7 Support"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-in" delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="glass-card p-6 text-center">
                      <p className="font-display font-bold text-3xl gradient-text mb-2">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animation="slide-up">
                <div className="glass-card p-8 h-full">
                  <div className="icon-box w-14 h-14 mb-6"><Target className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">To empower businesses of all sizes with professional, affordable, and high-performing websites that drive growth and success in the digital world.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="glass-card p-8 h-full">
                  <div className="icon-box w-14 h-14 mb-6"><Eye className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">To become the most trusted web development partner for businesses in India, known for exceptional quality, innovative solutions, and outstanding customer service.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">Why Trust <span className="gradient-text">Us?</span></h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} animation="slide-up" delay={index * 100}>
                  <div className="glass-card p-6 text-center h-full group">
                    <div className="icon-box w-14 h-14 mx-auto mb-5"><value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" /></div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">Let's Build Something Great Together</h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Ready to take your business online? We'd love to hear about your project.</p>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Get In Touch <ArrowRight className="w-5 h-5" /></Link>
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
