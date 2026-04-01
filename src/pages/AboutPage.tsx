import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, Shield, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const values = [
  { icon: Users, title: "Client-Focused", description: "Your success is our priority. We deliver solutions that exceed expectations." },
  { icon: Award, title: "Modern Standards", description: "We use the latest technologies and design trends for cutting-edge results." },
  { icon: Shield, title: "Honest Pricing", description: "Transparent quotes with no hidden fees. What we quote is what you pay." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect deadlines. Every project delivered on schedule." },
];

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Fahad WebService – Trusted Web Development Agency India"
        description="Learn about Fahad WebService, a professional web development agency in India with 7+ years of experience. 120+ projects delivered, 50+ happy clients, 100% satisfaction rate."
        keywords="web development agency India, about Fahad WebService, website development company, professional web designers India"
        canonical="https://fahadwebservice.com/about"
      />
      <Header />
      <main>
        <section className="w-full pt-28 pb-16 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4"><Sparkles className="w-3.5 h-3.5" />About Us</span>
                <h1 className="text-foreground mb-5">
                  About <span className="gradient-text">Fahad WebService</span>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We are a premium web development agency based in India, specializing in creating professional, SEO-optimized websites for startups, small businesses, and growing enterprises. With over 7 years of experience and 120+ successful projects, we help businesses establish a powerful online presence that drives real growth and measurable results.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <AnimatedSection animation="slide-up">
                  <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-5">Building Digital Success Stories Across India</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    Founded with a deep passion for web development and an unwavering commitment to excellence, Fahad WebService has grown into one of the most trusted web development partners for businesses across India. We specialize in website design, e-commerce development, SEO optimization, and UI/UX design that delivers tangible business results.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    Our team combines creativity with technical expertise to build websites that not only look stunning but also perform exceptionally well on search engines. Every website we create is mobile-responsive, fast-loading, and optimized for conversions. We believe that a great website should be an investment that pays for itself through increased leads and sales.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    From small local businesses to ambitious startups, we've helped over 50 clients achieve their digital goals. Our transparent pricing model ensures there are no hidden charges, and our commitment to on-time delivery means your project is always completed on schedule.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Clean Code", "Modern Design", "Fast Delivery", "24/7 Support"].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={100}>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="glass-card p-5 text-center">
                        <p className="font-bold text-2xl gradient-text mb-1">{stat.value}</p>
                        <p className="text-muted-foreground text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-5">
                <AnimatedSection animation="slide-up">
                  <div className="glass-card p-6 h-full">
                    <div className="icon-box w-11 h-11 mb-4"><Target className="w-5 h-5 text-accent" /></div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">To empower businesses of all sizes with professional, affordable, and high-performing websites that drive growth in the digital world.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={100}>
                  <div className="glass-card p-6 h-full">
                    <div className="icon-box w-11 h-11 mb-4"><Eye className="w-5 h-5 text-accent" /></div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">Our Vision</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">To become the most trusted web development partner for businesses in India, known for exceptional quality and innovative solutions.</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-3">Why Trust <span className="gradient-text">Us?</span></h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <AnimatedSection key={value.title} animation="slide-up" delay={index * 80}>
                    <div className="glass-card p-5 text-center h-full group">
                      <div className="icon-box w-10 h-10 mx-auto mb-3"><value.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" /></div>
                      <h3 className="font-semibold text-base text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <h2 className="text-white mb-4">Let's Build Something Great Together</h2>
                    <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">Ready to take your business online?</p>
                    <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-200">
                      Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
