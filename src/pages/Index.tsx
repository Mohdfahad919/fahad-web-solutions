import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check,
  Star,
  Sparkles,
  Palette,
  Code2,
  ShoppingCart,
  FileText,
  PenTool,
  Wrench,
  Zap,
  Search,
  LayoutGrid,
  TrendingUp,
  Quote,
  ChevronDown,
  Phone,
  MessageCircle,
  Briefcase,
  Shield,
  BadgeCheck,
  Rocket,
  Clock,
  Headphones,
  Monitor,
  Smartphone
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Palette, title: "UI/UX Design", description: "Beautiful interfaces that users love" },
  { icon: Code2, title: "Website Development", description: "Fast, secure, scalable websites" },
  { icon: FileText, title: "Landing Pages", description: "High-converting lead pages" },
  { icon: ShoppingCart, title: "E-commerce Websites", description: "Online stores that convert" },
  { icon: PenTool, title: "Branding & Logo", description: "Memorable brand identity" },
  { icon: Wrench, title: "Maintenance & Support", description: "Ongoing support & updates" },
];

const benefits = [
  { icon: Sparkles, title: "Premium Modern Design", description: "Eye-catching designs that make your brand stand out and impress visitors." },
  { icon: Zap, title: "Fast Loading Speed", description: "Optimized websites that load in under 3 seconds for better user experience." },
  { icon: Search, title: "SEO Optimized", description: "Built to rank higher on Google and bring organic traffic to your business." },
  { icon: TrendingUp, title: "Lead-Generating Layout", description: "Strategic design focused on converting visitors into paying customers." },
];

const projects = [
  { title: "TechStart Solutions", category: "Website", result: "+180% traffic increase", tags: ["React", "SEO"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp" },
  { title: "StyleHub Fashion", category: "E-commerce", result: "₹2L+ monthly sales", tags: ["E-commerce", "UI/UX"], image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp" },
  { title: "HealthFirst Clinic", category: "Website", result: "+250 appointments/mo", tags: ["Healthcare", "Booking"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fm=webp" },
  { title: "FoodieBox Delivery", category: "E-commerce", result: "5000+ orders processed", tags: ["Food", "Delivery"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fm=webp" },
  { title: "EduLearn Academy", category: "UI/UX", result: "+95% user satisfaction", tags: ["Education", "LMS"], image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fm=webp" },
  { title: "PropertyHub Realty", category: "Website", result: "+320% lead generation", tags: ["Real Estate", "Leads"], image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp" },
];

const processSteps = [
  { step: "01", title: "Discover", description: "Understand your business goals & target audience", icon: Search },
  { step: "02", title: "Design", description: "Create stunning mockups tailored to your brand", icon: Palette },
  { step: "03", title: "Develop", description: "Build with clean, optimized, fast code", icon: Code2 },
  { step: "04", title: "Launch", description: "Deploy, test & ensure everything works perfectly", icon: Rocket },
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder", company: "TechStart Solutions", location: "Mumbai", content: "Fahad WebService transformed our online presence. The new website helped us increase leads by 200% in just 3 months. Highly professional team!", rating: 5 },
  { name: "Rohit Verma", role: "Owner", company: "StyleHub Fashion", location: "Delhi", content: "Our e-commerce site is stunning and performs flawlessly. Sales have tripled since the launch. Best investment we made!", rating: 5 },
  { name: "Dr. Anjali Mehta", role: "Director", company: "HealthFirst Clinic", location: "Bangalore", content: "Professional, responsive, and delivered on time. Our patients love the new booking system. 5-star experience!", rating: 5 },
  { name: "Imran Khan", role: "CEO", company: "EduLearn Academy", location: "Hyderabad", content: "The learning platform they built exceeded all expectations. Clean design and fast performance. Strongly recommend!", rating: 5 },
  { name: "Sneha Patel", role: "Founder", company: "FoodieBox", location: "Pune", content: "From concept to launch, the team was exceptional. Our customers find the ordering process seamless and fast.", rating: 5 },
  { name: "Arjun Reddy", role: "Director", company: "PropertyHub", location: "Chennai", content: "Best investment for our real estate business. The website brings in qualified leads daily. Worth every rupee!", rating: 5 },
];

const pricingPlans = [
  {
    name: "Basic Website",
    priceRange: "₹1,999–₹2,999",
    tagline: "Perfect for small business",
    features: [
      "1–2 Pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Button",
      "Basic Design",
      "2 Revisions",
    ],
    delivery: "2–4 Days",
    support: "7 Days",
    popular: false,
  },
  {
    name: "Standard Website",
    priceRange: "₹4,999–₹6,999",
    tagline: "Best for growing businesses",
    features: [
      "4–5 Pages",
      "Premium UI Design",
      "Basic SEO Setup",
      "WhatsApp + Call Button",
      "Contact Forms",
      "Speed Optimized",
      "3 Revisions",
    ],
    delivery: "4–7 Days",
    support: "15 Days",
    popular: true,
    badge: "MOST POPULAR • BEST VALUE",
  },
  {
    name: "Premium Business",
    priceRange: "₹8,999–₹12,999",
    tagline: "For premium brands",
    features: [
      "8–10 Pages or Simple Store",
      "Advanced Animations",
      "Speed Optimization",
      "Full SEO Setup",
      "Lead Capture Forms",
      "Premium Support",
      "5 Revisions",
    ],
    delivery: "7–12 Days",
    support: "30 Days",
    popular: false,
  },
];

const faqs = [
  { question: "How much does a website cost?", answer: "Our pricing starts from just ₹1,999 for basic websites. The cost depends on the number of pages, features, and complexity. We offer affordable packages for every budget with no hidden charges." },
  { question: "How long does it take to build a website?", answer: "Basic websites take 2-4 days, standard websites take 4-7 days, and premium websites take 7-12 days. We always deliver on time!" },
  { question: "Do you provide revisions?", answer: "Yes! Our packages include 2-5 revisions depending on the plan. We work until you're 100% satisfied with the result." },
  { question: "What about domain and hosting?", answer: "Domain and hosting are separate from website development. We can help you set up affordable hosting starting at ₹99/month or work with your existing setup." },
  { question: "Do you provide support after delivery?", answer: "Yes! We offer 7-30 days of free support depending on your plan. After that, we have affordable maintenance packages starting at ₹499/month." },
  { question: "How do I pay?", answer: "We accept UPI, bank transfer, and digital wallets. We work with 50% advance payment and 50% on completion." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Website", "E-commerce", "UI/UX"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-gradient-to-r from-primary/30 to-gradient-blue/20 rounded-full blur-[140px]"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-accent/20 to-accent-secondary/15 rounded-full blur-[120px]"
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-gradient-blue/15 to-gradient-pink/10 rounded-full blur-[100px]"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-12 sm:py-20">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <AnimatedSection>
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border-primary/20 mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-foreground/90 text-sm font-semibold">We Build Premium Websites That Convert</span>
                  </div>
                </AnimatedSection>

                {/* Heading */}
                <AnimatedSection delay={100}>
                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-6">
                    We build premium websites that{" "}
                    <span className="gradient-text">grow your business.</span>
                  </h1>
                </AnimatedSection>
                
                {/* Subtitle */}
                <AnimatedSection delay={200}>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                    Modern design, fast performance and high-converting websites for businesses. 
                    Affordable pricing starting at just <span className="text-primary font-bold">₹1,999</span>.
                  </p>
                </AnimatedSection>
                
                {/* CTA Buttons */}
                <AnimatedSection delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                    <Link to="/contact" className="btn-primary group inline-flex items-center gap-2 text-base">
                      Start a Project
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 text-base">
                      View Our Work
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Trust Row */}
                <AnimatedSection delay={400}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gradient-blue border-2 border-background" />
                        ))}
                      </div>
                      <span className="text-foreground text-sm font-medium">Trusted by 50+ businesses</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                      <span className="text-foreground text-sm font-medium ml-1">4.9 Rated</span>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Badges Row */}
                <AnimatedSection delay={500}>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {[
                      { icon: Zap, text: "Fast Delivery" },
                      { icon: Search, text: "SEO Ready" },
                      { icon: Smartphone, text: "Mobile Friendly" },
                      { icon: Headphones, text: "Support Included" },
                    ].map((badge) => (
                      <div key={badge.text} className="flex items-center gap-2 px-3 py-2 rounded-full bg-surface-elevated/50 border border-border/50 text-xs font-medium text-muted-foreground">
                        <badge.icon className="w-3.5 h-3.5 text-primary" />
                        {badge.text}
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Content - Device Mockup */}
              <AnimatedSection delay={300} animation="scale-in" className="hidden lg:block">
                <div className="relative">
                  {/* Floating animation container */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Laptop mockup */}
                    <div className="relative z-10 glass-card p-3 rounded-3xl border border-border/30">
                      <div className="bg-surface-elevated rounded-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="px-4 py-1 rounded-lg bg-background/50 text-xs text-muted-foreground">
                              fahadwebservice.com
                            </div>
                          </div>
                        </div>
                        <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-gradient-blue/10 to-accent/10 flex items-center justify-center">
                          <div className="text-center p-8">
                            <Monitor className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                            <p className="text-muted-foreground/60 text-sm">Your Premium Website</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone mockup - floating */}
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-8 -right-8 z-20"
                    >
                      <div className="glass-card p-2 rounded-3xl border border-border/30 w-[140px]">
                        <div className="bg-surface-elevated rounded-2xl overflow-hidden">
                          <div className="aspect-[9/16] bg-gradient-to-br from-accent/20 via-gradient-pink/10 to-primary/10 flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-accent/40" />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Glow effects */}
                    <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/40 to-transparent rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>

            {/* Metrics */}
            <AnimatedSection delay={600}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {[
                  { value: "120+", label: "Projects Delivered" },
                  { value: "7+", label: "Years Experience" },
                  { value: "50+", label: "Happy Clients" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card px-4 py-5 text-center hover:border-primary/30 transition-all duration-300">
                    <p className="font-display font-bold text-2xl sm:text-3xl gradient-text mb-1">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <span className="section-badge mb-4">
                <LayoutGrid className="w-4 h-4" />
                Our Services
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Everything you need to <span className="gradient-text">succeed online</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From stunning designs to powerful development, we offer comprehensive solutions.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} animation="slide-up" delay={index * 80}>
                  <div className="glass-card neon-border p-8 h-full group">
                    <div className="icon-box mb-6">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="section-badge mb-4">
                  <Sparkles className="w-4 h-4" />
                  Why Choose Us
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
                  We don't just build websites. <span className="gradient-text">We build growth engines.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Every website we create is strategically designed to convert visitors into customers 
                  and help your business scale. Premium quality at affordable prices.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["No Hidden Charges", "On-Time Delivery", "100% Satisfaction"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={benefit.title} animation="scale-in" delay={index * 100}>
                    <div className="glass-card p-6 h-full group">
                      <div className="icon-box w-12 h-12 mb-4">
                        <benefit.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-12">
              <span className="section-badge mb-4">
                <Briefcase className="w-4 h-4" />
                Our Work
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Projects that <span className="gradient-text">deliver results</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real websites for real businesses with measurable outcomes.
              </p>
            </AnimatedSection>

            {/* Filters */}
            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.title} animation="scale-in" delay={index * 80}>
                  <div className="glass-card group overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-6 gap-3">
                        <div className="glass-card px-4 py-2 text-sm font-medium text-foreground">
                          View Case Study
                        </div>
                        <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
                          Build a Website Like This
                        </Link>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1.5 glass-card text-xs font-medium text-foreground">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{project.title}</h3>
                      <p className="text-primary text-sm font-semibold mb-3">{project.result}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-md bg-surface-elevated text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12">
              <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                View All Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <span className="section-badge mb-4">
                <Zap className="w-4 h-4" />
                Our Process
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                From idea to launch in <span className="gradient-text">4 simple steps</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} animation="slide-up" delay={index * 100}>
                  <div className="glass-card p-8 h-full text-center relative group">
                    <span className="font-display font-bold text-6xl gradient-text opacity-20 absolute top-4 right-4">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      <div className="icon-box w-14 h-14 mx-auto mb-6">
                        <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <span className="section-badge mb-4">
                <Quote className="w-4 h-4" />
                Testimonials
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Loved by <span className="gradient-text">businesses like yours</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 80}>
                  <div className="glass-card p-8 h-full flex flex-col group hover:border-primary/30">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                      <BadgeCheck className="w-4 h-4 text-primary ml-2" />
                    </div>
                    <p className="text-foreground mb-6 flex-1 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gradient-blue flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}, {testimonial.company}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-6">
              <span className="section-badge mb-4">Pricing</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Premium websites starting at just <span className="gradient-text">₹1,999</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
                Affordable pricing with premium quality work. No hidden charges.
              </p>
            </AnimatedSection>

            {/* Trust badges */}
            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Shield, text: "No Hidden Charges" },
                { icon: BadgeCheck, text: "Premium Quality Work" },
                { icon: Clock, text: "On-Time Delivery" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </div>
              ))}
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <AnimatedSection key={plan.name} animation="slide-up" delay={index * 100}>
                  <div className={`glass-card p-8 h-full flex flex-col relative ${plan.popular ? 'pricing-popular ring-2 ring-primary/50' : ''}`}>
                    {plan.popular && plan.badge && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-gradient-blue text-white text-xs font-bold whitespace-nowrap shadow-lg shadow-primary/30">
                        {plan.badge}
                      </span>
                    )}
                    <div className="mb-6 pt-2">
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.tagline}</p>
                      <p className="font-display font-bold text-3xl sm:text-4xl gradient-text">{plan.priceRange}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2 mb-6 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="text-foreground font-medium">{plan.delivery}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Support</span>
                        <span className="text-foreground font-medium">{plan.support}</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={plan.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
                    >
                      Get Started
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Taglines */}
            <AnimatedSection delay={400} className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <span>✓ Perfect for small business</span>
              <span>✓ Best for growing businesses</span>
              <span>✓ For premium brands</span>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 relative">
          <div className="section-container max-w-3xl">
            <AnimatedSection className="text-center mb-16">
              <span className="section-badge mb-4">FAQ</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently asked <span className="gradient-text">questions</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 50}>
                  <div className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-surface-elevated/50 transition-colors"
                    >
                      <span className="font-display font-bold text-foreground">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === index ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                      <p className="px-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Lead Form */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass-card p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-gradient-blue/10 to-accent/10" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
                      Ready to build a <span className="gradient-text">premium website?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Book a free strategy call & get your quote instantly. No obligations, just a friendly chat about your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="tel:9076669103"
                        className="btn-primary group inline-flex items-center justify-center gap-2 text-base"
                      >
                        <Phone className="w-5 h-5" />
                        Book Free Call
                      </a>
                      <a
                        href="https://wa.me/9076669103"
                        className="btn-accent inline-flex items-center justify-center gap-2 text-base"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>

                  {/* Right - Lead Form */}
                  <div className="glass-card p-6 sm:p-8">
                    <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">Get Your Free Quote</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input-premium"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number"
                        className="input-premium"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Business Name"
                        className="input-premium"
                      />
                      <select className="select-premium" defaultValue="">
                        <option value="" disabled>Website Type</option>
                        <option value="business">Business Website</option>
                        <option value="ecommerce">E-commerce Store</option>
                        <option value="landing">Landing Page</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="other">Other</option>
                      </select>
                      <select className="select-premium" defaultValue="">
                        <option value="" disabled>Budget Range</option>
                        <option value="1999-2999">₹1,999 - ₹2,999</option>
                        <option value="4999-6999">₹4,999 - ₹6,999</option>
                        <option value="8999-12999">₹8,999 - ₹12,999</option>
                        <option value="12999+">₹12,999+</option>
                      </select>
                      <textarea
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="input-premium resize-none"
                      />
                      <button type="submit" className="btn-primary w-full">
                        Send Message
                      </button>
                    </form>
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
};

export default Index;
