import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Clock, Shield, ArrowRight, Sparkles, CheckCircle2, Code2, Rocket, Search, MessageSquare, Briefcase, Star, Zap } from "lucide-react";
import fahadImg from "@/assets/fahad.jpg";

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

const expertise = [
  { icon: Code2, title: "Web Development", description: "React, Next.js, TypeScript, Node.js, full-stack architecture for fast, scalable websites." },
  { icon: Sparkles, title: "UI/UX Design", description: "Conversion-focused interfaces built with Figma, design systems and a sharp eye for detail." },
  { icon: Search, title: "Technical SEO", description: "Schema markup, Core Web Vitals, on-page optimization and local SEO for Lucknow/India." },
  { icon: Briefcase, title: "E-commerce", description: "Shopify, custom React storefronts, payment integration, inventory, and order workflows." },
  { icon: Rocket, title: "Performance Engineering", description: "Sub-2s load times, image optimization, code-splitting, CDN delivery, mobile-first builds." },
  { icon: Shield, title: "Security & Maintenance", description: "Form protection, rate limiting, dependency audits, uptime monitoring and ongoing support." },
];

const process = [
  { step: "01", title: "Discovery", description: "Free strategy call to understand your business, goals, target customers in Lucknow and beyond." },
  { step: "02", title: "Design", description: "Wireframes and high-fidelity mockups in Figma, refined with your feedback until you love it." },
  { step: "03", title: "Develop", description: "Clean React/TypeScript build with SEO, accessibility and performance baked in from day one." },
  { step: "04", title: "Launch", description: "Domain setup, Analytics + Search Console, training, and 30 days of free post-launch support." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Fahad WebService | Web Development Agency Lucknow"
        description="Trusted website development agency in Lucknow, India. 7+ years, 120+ projects, 50+ clients. Affordable web design & SEO services for small businesses."
        keywords="web development agency Lucknow, about Fahad WebService, website development in Lucknow, affordable web design services India"
        canonical="https://fahadwebservice.com/about"
      />
      <Header />
      <Breadcrumbs />
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

        {/* Founder / Meet the Team */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1100px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4"><Users className="w-3.5 h-3.5" />Meet the Founder</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-3">Built by a <span className="gradient-text">founder who codes</span></h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6 items-start">
                <AnimatedSection animation="scale-in">
                  <div className="glass-card p-5 text-center">
                    <img src={fahadImg} alt="Fahad Shaikh, founder of Fahad WebService — Lucknow web development agency" className="w-28 h-28 rounded-full object-cover mx-auto mb-3 border-2 border-accent/30 shadow-lg" style={{ objectPosition: '50% 25%' }} loading="lazy" decoding="async" />
                    <h3 className="font-semibold text-base text-foreground">Fahad Shaikh</h3>
                    <p className="text-accent text-xs font-medium mb-2">Founder & Lead Developer</p>
                    <div className="flex justify-center gap-0.5 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-xs text-muted-foreground">7+ years · 120+ projects · Lucknow, India</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={100} className="md:col-span-2">
                  <div className="glass-card p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Hi, I'm <strong className="text-foreground">Fahad Shaikh</strong> — the developer behind every line of code Fahad WebService ships. I started building websites in 2018 while still in college and turned it into a full-time agency from Lucknow in 2023.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      What makes us different: no project managers, no outsourced juniors, no template builders. When you hire Fahad WebService, you talk directly to the person designing your wireframes, writing your React code, and tuning your Core Web Vitals. That's why 50+ businesses in Lucknow, India and abroad trust us with their digital presence.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      My commitment: honest quotes, on-time delivery, and websites that actually rank on Google — not just look pretty in a screenshot.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["React Specialist", "Google Search Console Certified", "TypeScript", "SEO Practitioner", "Shopify Partner"].map((b) => (
                        <span key={b} className="px-2.5 py-1 rounded-md bg-accent/8 border border-accent/15 text-xs text-accent font-medium">{b}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4"><Zap className="w-3.5 h-3.5" />Expertise</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-3">Skills we bring to every <span className="gradient-text">project</span></h2>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto">Full-stack capability so your website is shipped, ranked and supported by one team.</p>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {expertise.map((item, index) => (
                  <AnimatedSection key={item.title} animation="slide-up" delay={index * 60}>
                    <div className="glass-card p-5 h-full">
                      <div className="icon-box w-10 h-10 mb-3"><item.icon className="w-4 h-4 text-accent" /></div>
                      <h3 className="font-semibold text-base text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4"><MessageSquare className="w-3.5 h-3.5" />Our Process</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-3">How we work, <span className="gradient-text">step by step</span></h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {process.map((p, i) => (
                  <AnimatedSection key={p.step} animation="slide-up" delay={i * 60}>
                    <div className="glass-card p-5 h-full relative">
                      <span className="absolute top-3 right-4 text-3xl font-bold text-accent/10">{p.step}</span>
                      <h3 className="font-semibold text-base text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
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
