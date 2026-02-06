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
  Palette,
  Code2,
  ShoppingCart,
  FileText,
  Wrench,
  Zap,
  Search,
  TrendingUp,
  Quote,
  ChevronDown,
  Phone,
  MessageCircle,
  Shield,
  BadgeCheck,
  Rocket,
  Clock,
  Monitor,
  Smartphone,
  Building2,
  User,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  Home,
  Newspaper,
  Settings,
  Send,
  Play,
  BarChart3,
  Globe,
  Layers
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const services = [
  { icon: Palette, title: "Website Design", description: "Beautiful, conversion-focused designs that capture your brand essence" },
  { icon: Code2, title: "Web Development", description: "Fast, secure, and scalable websites built with modern technologies" },
  { icon: TrendingUp, title: "UI/UX Optimization", description: "Data-driven improvements that boost engagement and conversions" },
  { icon: Search, title: "SEO & Performance", description: "Optimized for search engines and lightning-fast load times" },
  { icon: ShoppingCart, title: "E-commerce", description: "Online stores that drive sales and provide seamless checkout" },
  { icon: Wrench, title: "Maintenance", description: "Ongoing support and updates to keep your site running perfectly" },
];

const websiteTypes = [
  { icon: Building2, title: "Business Website", description: "Professional online presence", features: ["Company Profile", "Services", "Contact Form"] },
  { icon: User, title: "Portfolio", description: "Showcase your best work", features: ["Project Gallery", "About Section", "Testimonials"] },
  { icon: ShoppingCart, title: "E-commerce", description: "Sell products online", features: ["Product Catalog", "Cart & Checkout", "Payments"] },
  { icon: UtensilsCrossed, title: "Restaurant", description: "Menu & online ordering", features: ["Digital Menu", "Reservations", "Orders"] },
  { icon: GraduationCap, title: "Education", description: "Courses & admissions", features: ["Course Listings", "Enrollment", "Portal"] },
  { icon: Stethoscope, title: "Healthcare", description: "Appointments & info", features: ["Doctor Profiles", "Booking", "Services"] },
  { icon: Home, title: "Real Estate", description: "Property listings", features: ["Property Search", "Agent Profiles", "Leads"] },
  { icon: Rocket, title: "Landing Page", description: "High-converting pages", features: ["Hero Section", "CTA Focus", "Lead Form"] },
  { icon: Newspaper, title: "Blog / News", description: "Content publishing", features: ["Blog Posts", "Categories", "Newsletter"] },
  { icon: Settings, title: "Custom App", description: "Tailored solutions", features: ["Dashboard", "User Management", "Analytics"] },
];

const benefits = [
  { icon: Zap, title: "Lightning Fast", description: "Websites that load in under 2 seconds for optimal user experience" },
  { icon: Search, title: "SEO Optimized", description: "Built to rank higher on Google and drive organic traffic" },
  { icon: TrendingUp, title: "Conversion Focused", description: "Strategic design that turns visitors into customers" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security to protect your business" },
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
  { step: "01", title: "Discovery", description: "We understand your goals, audience, and vision", icon: Search },
  { step: "02", title: "Design", description: "Create stunning mockups tailored to your brand", icon: Palette },
  { step: "03", title: "Develop", description: "Build with clean, optimized, modern code", icon: Code2 },
  { step: "04", title: "Launch", description: "Deploy, test, and ensure everything works perfectly", icon: Rocket },
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder", company: "TechStart Solutions", content: "Fahad WebService transformed our online presence. The new website helped us increase leads by 200% in just 3 months.", rating: 5 },
  { name: "Rohit Verma", role: "Owner", company: "StyleHub Fashion", content: "Our e-commerce site is stunning and performs flawlessly. Sales have tripled since the launch.", rating: 5 },
  { name: "Dr. Anjali Mehta", role: "Director", company: "HealthFirst Clinic", content: "Professional, responsive, and delivered on time. Our patients love the new booking system.", rating: 5 },
  { name: "Imran Khan", role: "CEO", company: "EduLearn Academy", content: "The learning platform they built exceeded all expectations. Clean design and fast performance.", rating: 5 },
  { name: "Sneha Patel", role: "Founder", company: "FoodieBox", content: "From concept to launch, the team was exceptional. Our customers find ordering seamless.", rating: 5 },
  { name: "Arjun Reddy", role: "Director", company: "PropertyHub", content: "Best investment for our real estate business. The website brings in qualified leads daily.", rating: 5 },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹1,999",
    tagline: "Perfect for small business",
    features: ["1–2 Pages", "Mobile Responsive", "Contact Form", "WhatsApp Button", "Basic Design", "2 Revisions"],
    delivery: "2–4 Days",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹4,999",
    tagline: "Best for growing businesses",
    features: ["4–5 Pages", "Premium UI Design", "SEO Setup", "Speed Optimized", "Contact Forms", "3 Revisions"],
    delivery: "4–7 Days",
    popular: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "₹8,999",
    tagline: "For premium brands",
    features: ["8–10 Pages", "Advanced Animations", "Full SEO Setup", "Lead Capture", "Premium Support", "5 Revisions"],
    delivery: "7–12 Days",
    popular: false,
  },
];

const faqs = [
  { question: "How much does a website cost?", answer: "Our pricing starts from just ₹1,999 for basic websites. The cost depends on the number of pages, features, and complexity. We offer affordable packages for every budget with no hidden charges." },
  { question: "How long does it take to build a website?", answer: "Basic websites take 2-4 days, standard websites take 4-7 days, and premium websites take 7-12 days. We always deliver on time!" },
  { question: "Do you provide revisions?", answer: "Yes! Our packages include 2-5 revisions depending on the plan. We work until you're 100% satisfied with the result." },
  { question: "What about domain and hosting?", answer: "Domain and hosting are separate from website development. We can help you set up affordable hosting starting at ₹99/month or work with your existing setup." },
  { question: "Do you provide support after delivery?", answer: "Yes! We offer 7-30 days of free support depending on your plan. After that, we have affordable maintenance packages." },
];

const clientLogos = [
  "TechStart", "StyleHub", "HealthFirst", "EduLearn", "FoodieBox", "PropertyHub"
];

const Index = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", business: "", websiteType: "", budget: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const filters = ["All", "Website", "E-commerce", "UI/UX"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) {
      toast({ title: "Please fill required fields", description: "Name and WhatsApp number are required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { 
          name: leadForm.name, 
          phone: leadForm.phone, 
          email: "via-homepage-form@placeholder.com", 
          requirement: `Business: ${leadForm.business}\nType: ${leadForm.websiteType}\nBudget: ${leadForm.budget}\n\n${leadForm.message}` 
        },
      });
      if (error) throw error;
      toast({ title: "Message Sent!", description: "We'll contact you within 24 hours." });
      setLeadForm({ name: "", phone: "", business: "", websiteType: "", budget: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({ title: "Error", description: "Please try WhatsApp instead.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeadFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setLeadForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 gradient-mesh" />
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-teal/5 rounded-full blur-[100px]" />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <AnimatedSection>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-accent text-sm font-medium">Now accepting new clients</span>
                  </div>
                </AnimatedSection>

                {/* Heading */}
                <AnimatedSection delay={100}>
                  <h1 className="text-foreground mb-6">
                    We build websites that{" "}
                    <span className="gradient-text">drive real business growth</span>
                  </h1>
                </AnimatedSection>
                
                {/* Subtitle */}
                <AnimatedSection delay={200}>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                    Premium web development for startups and businesses. 
                    Beautiful design, fast performance, and results-focused approach.
                  </p>
                </AnimatedSection>
                
                {/* CTA Buttons */}
                <AnimatedSection delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
                    <Link to="/contact" className="btn-primary group inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                      <Play className="w-4 h-4" />
                      View Our Work
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Trust Indicators */}
                <AnimatedSection delay={400}>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-secondary border-2 border-background" />
                        ))}
                      </div>
                      <span className="font-medium text-foreground">50+ happy clients</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="font-medium text-foreground ml-1">4.9 rated</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Content - Dashboard Visual */}
              <AnimatedSection delay={200} animation="scale-in" className="hidden lg:block">
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Main Dashboard Card */}
                    <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                      {/* Browser Header */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="px-4 py-1 rounded-lg bg-background text-xs text-muted-foreground font-medium">
                            yourbusiness.com
                          </div>
                        </div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {[
                            { icon: TrendingUp, label: "Traffic", value: "+180%" },
                            { icon: BarChart3, label: "Conversions", value: "+95%" },
                            { icon: Globe, label: "Reach", value: "Global" },
                          ].map((stat) => (
                            <div key={stat.label} className="bg-card p-4 rounded-xl border border-border">
                              <stat.icon className="w-5 h-5 text-accent mb-2" />
                              <p className="text-lg font-bold text-foreground">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Chart Placeholder */}
                        <div className="bg-card rounded-xl border border-border p-4">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-foreground">Performance Overview</span>
                            <span className="text-xs text-accent font-medium">+24% this month</span>
                          </div>
                          <div className="flex items-end gap-2 h-24">
                            {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100].map((height, i) => (
                              <div 
                                key={i} 
                                className="flex-1 bg-accent/20 rounded-t-sm transition-all hover:bg-accent/40"
                                style={{ height: `${height}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Card */}
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl border border-border p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Layers className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">120+ Projects</p>
                          <p className="text-xs text-muted-foreground">Delivered successfully</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>

            {/* Stats Row */}
            <AnimatedSection delay={500}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-20">
                {[
                  { value: "120+", label: "Projects Completed" },
                  { value: "50+", label: "Happy Clients" },
                  { value: "7+", label: "Years Experience" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    <p className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-1">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12 border-y border-border bg-secondary/30">
          <div className="section-container">
            <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading businesses</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {clientLogos.map((logo) => (
                <div key={logo} className="text-muted-foreground/50 font-display font-bold text-lg hover:text-foreground transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-14">
              <span className="section-badge mb-4">
                <Layers className="w-4 h-4" />
                Our Services
              </span>
              <h2 className="text-foreground mb-4">
                Everything you need to <span className="gradient-text">succeed online</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From stunning designs to powerful development, we offer comprehensive digital solutions to grow your business.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.title} animation="slide-up" delay={index * 80}>
                  <div className="glass-card neon-border p-6 sm:p-8 h-full group">
                    <div className="icon-box w-12 h-12 mb-5">
                      <service.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Website Types Section */}
        <section id="website-types" className="section-padding relative bg-secondary/30">
          <div className="section-container">
            <AnimatedSection className="text-center mb-14">
              <span className="section-badge mb-4">
                <Monitor className="w-4 h-4" />
                Website Types
              </span>
              <h2 className="text-foreground mb-4">
                Websites for <span className="gradient-text">every industry</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From business websites to custom web applications, we create tailored solutions for your specific needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {websiteTypes.map((type, index) => (
                <AnimatedSection key={type.title} animation="scale-in" delay={index * 50}>
                  <div className="glass-card neon-border p-5 h-full group flex flex-col">
                    <div className="icon-box w-11 h-11 mb-4">
                      <type.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">{type.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3 flex-1">{type.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors mt-auto"
                    >
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding relative">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <span className="section-badge mb-4">
                  <Zap className="w-4 h-4" />
                  Why Choose Us
                </span>
                <h2 className="text-foreground mb-5">
                  We don't just build websites.{" "}
                  <span className="gradient-text">We build growth engines.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Every website we create is strategically designed to convert visitors into customers 
                  and help your business scale. Premium quality at affordable prices.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["No Hidden Charges", "On-Time Delivery", "100% Satisfaction"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-accent" />
                      <span className="text-foreground font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>

              <div className="grid grid-cols-2 gap-5">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={benefit.title} animation="scale-in" delay={index * 100}>
                    <div className="glass-card p-6 h-full group">
                      <div className="icon-box w-11 h-11 mb-4">
                        <benefit.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-semibold text-base text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding relative bg-secondary/30">
          <div className="section-container">
            <AnimatedSection className="text-center mb-12">
              <span className="section-badge mb-4">
                <FileText className="w-4 h-4" />
                Our Work
              </span>
              <h2 className="text-foreground mb-4">
                Projects that <span className="gradient-text">deliver results</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real websites for real businesses with measurable business outcomes.
              </p>
            </AnimatedSection>

            {/* Filters */}
            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-3 mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-accent text-white shadow-lg"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
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
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-5 gap-3">
                        <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
                          Build Something Similar
                        </Link>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1.5 bg-card rounded-lg text-xs font-medium text-foreground border border-border">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg text-foreground mb-1">{project.title}</h3>
                      <p className="text-accent font-semibold text-sm mb-3">{project.result}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
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
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-14">
              <span className="section-badge mb-4">
                <Rocket className="w-4 h-4" />
                Our Process
              </span>
              <h2 className="text-foreground mb-4">
                From idea to launch in <span className="gradient-text">4 simple steps</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} animation="slide-up" delay={index * 100}>
                  <div className="glass-card p-6 h-full text-center relative group">
                    <span className="font-display font-bold text-5xl text-accent/10 absolute top-3 right-4">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      <div className="icon-box w-12 h-12 mx-auto mb-4">
                        <step.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding relative bg-secondary/30">
          <div className="section-container">
            <AnimatedSection className="text-center mb-14">
              <span className="section-badge mb-4">
                <Quote className="w-4 h-4" />
                Testimonials
              </span>
              <h2 className="text-foreground mb-4">
                Loved by <span className="gradient-text">businesses like yours</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 80}>
                  <div className="glass-card p-6 h-full flex flex-col group hover:border-accent/30">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground mb-5 flex-1 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding relative">
          <div className="section-container">
            <AnimatedSection className="text-center mb-6">
              <span className="section-badge mb-4">Pricing</span>
              <h2 className="text-foreground mb-4">
                Simple, transparent <span className="gradient-text">pricing</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Premium quality websites at affordable prices. No hidden charges.
              </p>
            </AnimatedSection>

            {/* Trust badges */}
            <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { icon: Shield, text: "No Hidden Charges" },
                { icon: BadgeCheck, text: "Premium Quality" },
                { icon: Clock, text: "On-Time Delivery" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm text-accent font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </div>
              ))}
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <AnimatedSection key={plan.name} animation="slide-up" delay={index * 100}>
                  <div className={`glass-card p-6 sm:p-8 h-full flex flex-col relative ${plan.popular ? 'pricing-popular ring-2 ring-accent/50' : ''}`}>
                    {plan.popular && plan.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold shadow-lg">
                        {plan.badge}
                      </span>
                    )}
                    <div className="mb-6 pt-2">
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.tagline}</p>
                      <p className="font-display font-bold text-4xl text-foreground">
                        {plan.price}
                        <span className="text-base font-normal text-muted-foreground ml-1">starting</span>
                      </p>
                    </div>
                    
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-foreground">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="text-foreground font-medium">{plan.delivery}</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={`${plan.popular ? "btn-primary" : "btn-secondary"} w-full text-center`}
                    >
                      Get Started
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding relative bg-secondary/30">
          <div className="section-container-narrow">
            <AnimatedSection className="text-center mb-12">
              <span className="section-badge mb-4">FAQ</span>
              <h2 className="text-foreground mb-4">
                Frequently asked <span className="gradient-text">questions</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 60}>
                  <div className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
                    >
                      <span className="font-display font-semibold text-foreground">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === index ? 'max-h-48 pb-5 sm:pb-6' : 'max-h-0'}`}>
                      <p className="px-5 sm:px-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA with Lead Form */}
        <section className="section-padding relative">
          <div className="section-container">
            <AnimatedSection>
              <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left">
                    <h2 className="text-white mb-5">
                      Ready to build your <span className="text-accent">dream website?</span>
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                      Book a free strategy call & get your quote instantly. No obligations, just a friendly chat about your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href="tel:9076669103"
                        className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Book Free Call
                      </a>
                      <a
                        href="https://wa.me/9076669103"
                        className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 inline-flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>

                  {/* Right - Lead Form */}
                  <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">Get Your Free Quote</h3>
                    <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={leadForm.name}
                        onChange={handleLeadFormChange}
                        placeholder="Your Name *"
                        className="input-premium"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={leadForm.phone}
                        onChange={handleLeadFormChange}
                        placeholder="WhatsApp Number *"
                        className="input-premium"
                        required
                      />
                      <input
                        type="text"
                        name="business"
                        value={leadForm.business}
                        onChange={handleLeadFormChange}
                        placeholder="Business Name"
                        className="input-premium"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <select 
                          name="websiteType"
                          value={leadForm.websiteType}
                          onChange={handleLeadFormChange}
                          className="select-premium"
                        >
                          <option value="">Website Type</option>
                          <option value="Business Website">Business Website</option>
                          <option value="E-commerce Store">E-commerce Store</option>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Portfolio">Portfolio</option>
                          <option value="Other">Other</option>
                        </select>
                        <select 
                          name="budget"
                          value={leadForm.budget}
                          onChange={handleLeadFormChange}
                          className="select-premium"
                        >
                          <option value="">Budget</option>
                          <option value="₹1,999 - ₹2,999">₹1,999 - ₹2,999</option>
                          <option value="₹4,999 - ₹6,999">₹4,999 - ₹6,999</option>
                          <option value="₹8,999+">₹8,999+</option>
                        </select>
                      </div>
                      <textarea
                        name="message"
                        value={leadForm.message}
                        onChange={handleLeadFormChange}
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="input-premium resize-none"
                      />
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
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
