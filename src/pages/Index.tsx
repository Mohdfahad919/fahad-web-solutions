import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
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
  { icon: Zap, title: "Lightning Fast", description: "Websites that load in under 2 seconds" },
  { icon: Search, title: "SEO Optimized", description: "Built to rank higher on Google" },
  { icon: TrendingUp, title: "Conversion Focused", description: "Turns visitors into customers" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security" },
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
    tagline: "Perfect for getting started",
    features: ["1–2 Pages Website", "Mobile Responsive", "Basic Design"],
    delivery: "2–3 Days",
    popular: false,
  },
  {
    name: "Basic",
    price: "₹2,999",
    tagline: "Great for small businesses",
    features: ["3–5 Pages", "Contact Form", "WhatsApp Integration"],
    delivery: "3–5 Days",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    tagline: "Best for growing businesses",
    features: ["5–7 Pages", "Better UI Design", "Basic SEO", "Fast Loading"],
    delivery: "5–7 Days",
    popular: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Premium",
    price: "₹7,999",
    tagline: "For premium brands",
    features: ["8–12 Pages", "Premium Design", "Blog Setup", "SEO Optimization"],
    delivery: "7–10 Days",
    popular: false,
  },
];

const faqs = [
  { question: "How much does a website cost in India?", answer: "Our pricing starts from just ₹1,999 for basic landing pages. A standard business website costs ₹4,999+, and premium e-commerce websites start at ₹8,999. All packages include mobile responsiveness, basic SEO, and free support. No hidden charges." },
  { question: "How long does it take to build a website?", answer: "Basic websites take 2-4 days, standard websites take 4-7 days, and premium websites take 7-12 days. We always deliver on time — guaranteed!" },
  { question: "Do you provide SEO services?", answer: "Yes! Every website we build comes with basic SEO optimization. We also offer dedicated SEO services starting at ₹1,999/month, including keyword research, on-page optimization, and monthly performance reports." },
  { question: "Do you provide revisions?", answer: "Yes! Our packages include 2-5 revisions depending on the plan. We work until you're 100% satisfied with the result." },
  { question: "What about domain and hosting?", answer: "Domain and hosting are separate from website development. We can help you set up affordable hosting starting at ₹99/month or work with your existing setup." },
  { question: "Do you build e-commerce websites?", answer: "Absolutely! We build complete e-commerce stores with product catalogs, payment gateway integration (Razorpay, PayU), order management, and inventory tracking. Starting at ₹8,999." },
  { question: "Do you provide support after delivery?", answer: "Yes! We offer 7-30 days of free support depending on your plan. After that, we have affordable maintenance packages starting at ₹499/month." },
  { question: "Can you help my website rank on Google?", answer: "Yes. We build every website with SEO best practices — proper heading structure, meta tags, fast loading, and mobile optimization. For competitive rankings, our monthly SEO services deliver measurable results within 3-6 months." },
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
      <SEOHead
        title="Professional Website Development in Lucknow | Affordable Web Design India | Fahad WebService"
        description="Best website development services in Lucknow, India. Affordable web design for small businesses, e-commerce website development for startups, SEO services for local businesses. Starting ₹1,999. 50+ projects delivered."
        keywords="website development in Lucknow, affordable web design services India, small business website development India, ecommerce website development for startups, SEO services for local businesses India, professional website design Lucknow, web design India"
        canonical="https://fahadwebservice.com/"
      />
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="w-full relative min-h-[92svh] flex items-center pt-28 pb-20 overflow-hidden bg-background">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.01] rounded-full blur-[150px]" />

          <div className="w-full px-8 sm:px-8 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/12 mb-6">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                      </span>
                      <span className="text-accent text-xs font-medium">Now accepting new clients</span>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={100}>
                    <h1 className="text-foreground mb-4 leading-[1.08]">
                      Affordable Website Development in Lucknow{" "}
                      <span className="gradient-text">🚀</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold text-foreground/80 mb-6">
                      Get Your Business Website Starting at ₹1,999
                    </p>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={200}>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                      We help small businesses, startups, and local shops build professional websites that attract customers and grow revenue. Best web design company in India with affordable pricing and fast delivery.
                    </p>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={300}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
                      <Link to="/contact" className="btn-primary group inline-flex items-center gap-2.5 w-full sm:w-auto justify-center text-base px-7 py-3.5">
                        Get Started Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                      <a href="https://wa.me/9076669103" className="btn-secondary inline-flex items-center gap-2.5 w-full sm:w-auto justify-center text-base px-7 py-3.5">
                        <MessageCircle className="w-4 h-4" />
                        Contact on WhatsApp
                      </a>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-secondary border-2 border-background shadow-sm" />
                          ))}
                        </div>
                        <span className="font-semibold text-foreground text-sm">50+ clients</span>
                      </div>
                      <div className="h-5 w-px bg-border hidden sm:block" />
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="font-semibold text-foreground ml-1.5 text-sm">4.9 rated</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Content - Dashboard Visual */}
                <AnimatedSection delay={200} animation="scale-in" className="hidden lg:block">
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/50">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="px-3 py-1 rounded-md bg-background text-xs text-muted-foreground">
                              yourbusiness.com
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5 bg-gradient-to-br from-accent/[0.03] to-transparent">
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {[
                              { icon: TrendingUp, label: "Traffic", value: "+180%" },
                              { icon: BarChart3, label: "Conversions", value: "+95%" },
                              { icon: Globe, label: "Reach", value: "Global" },
                            ].map((stat) => (
                              <div key={stat.label} className="bg-card p-3 rounded-lg border border-border">
                                <stat.icon className="w-4 h-4 text-accent mb-1.5" />
                                <p className="text-base font-bold text-foreground">{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-card rounded-lg border border-border p-3">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-medium text-foreground">Performance</span>
                              <span className="text-xs text-accent font-medium">+24%</span>
                            </div>
                            <div className="flex items-end gap-1.5 h-20">
                              {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100].map((height, i) => (
                                <div 
                                  key={i} 
                                  className="flex-1 bg-accent/15 rounded-t-sm transition-all hover:bg-accent/30"
                                  style={{ height: `${height}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg border border-border p-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-foreground">120+ Projects</p>
                            <p className="text-[11px] text-muted-foreground">Delivered successfully</p>
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
                    <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                      <p className="font-bold text-3xl sm:text-4xl gradient-text mb-1.5">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="w-full py-10 border-y border-border bg-muted/30">
          <div className="w-full px-8 sm:px-8 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <p className="text-center text-xs text-muted-foreground mb-8 uppercase tracking-[0.15em] font-medium">Trusted by leading businesses</p>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                {clientLogos.map((logo) => (
                  <div key={logo} className="text-muted-foreground/40 font-semibold text-base hover:text-foreground/60 transition-colors">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full section-padding relative">
          <div className="w-full px-8 sm:px-8 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="section-badge mb-4">
                  <Layers className="w-3.5 h-3.5" />
                  Our Services
                </span>
                <h2 className="text-foreground mb-3">
                  Everything you need to <span className="gradient-text">succeed online</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                  From website design and development to SEO optimization and e-commerce solutions, we provide comprehensive digital services that help Indian businesses establish a powerful online presence and drive measurable growth.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <AnimatedSection key={service.title} animation="slide-up" delay={index * 60}>
                    <div className="glass-card p-6 h-full group">
                      <div className="icon-box w-10 h-10 mb-4">
                        <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-base text-foreground mb-1.5">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Website Types Section */}
        <section id="website-types" className="w-full section-padding relative bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="section-badge mb-4">
                  <Monitor className="w-3.5 h-3.5" />
                  Website Types
                </span>
                <h2 className="text-foreground mb-3">
                  Websites for <span className="gradient-text">every industry</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                  Whether you need a business website, e-commerce store, portfolio, or landing page, we create tailored web solutions for every industry. Our websites are built with SEO best practices, fast loading speeds, and conversion-focused designs that help your business stand out in the competitive Indian market.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {websiteTypes.map((type, index) => (
                  <AnimatedSection key={type.title} animation="scale-in" delay={index * 40}>
                    <div className="glass-card p-4 h-full group flex flex-col">
                      <div className="icon-box w-9 h-9 mb-3">
                        <type.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{type.title}</h3>
                      <p className="text-muted-foreground text-xs mb-2.5 flex-1">{type.description}</p>
                      <ul className="space-y-1 mb-3">
                        {type.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Check className="w-3 h-3 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors mt-auto"
                      >
                        Get Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full section-padding relative">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <AnimatedSection>
                  <span className="section-badge mb-4">
                    <Zap className="w-3.5 h-3.5" />
                    Why Choose Us
                  </span>
                  <h2 className="text-foreground mb-4">
                    We don't just build websites.{" "}
                    <span className="gradient-text">We build growth engines.</span>
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 max-w-lg">
                    Every website we create is strategically designed to convert visitors into customers. With 7+ years of experience in website development in India, we combine modern design with proven SEO strategies to deliver websites that rank higher on Google, load faster, and generate real business results for our clients.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["No Hidden Charges", "On-Time Delivery", "100% Satisfaction"].map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <BadgeCheck className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Start Your Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </AnimatedSection>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={benefit.title} animation="scale-in" delay={index * 80}>
                      <div className="glass-card p-5 h-full group">
                        <div className="icon-box w-9 h-9 mb-3">
                          <benefit.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-semibold text-sm text-foreground mb-1.5">{benefit.title}</h3>
                        <p className="text-muted-foreground text-xs">{benefit.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full section-padding relative bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4">
                  <FileText className="w-3.5 h-3.5" />
                  Our Work
                </span>
                <h2 className="text-foreground mb-3">
                  Projects that <span className="gradient-text">deliver results</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  Real websites for real businesses with measurable outcomes.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-2 mb-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-accent text-white shadow-md"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/20"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project, index) => (
                  <AnimatedSection key={project.title} animation="scale-in" delay={index * 60}>
                    <div className="glass-card group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-5">
                          <Link to="/contact" className="btn-primary text-xs px-4 py-2">
                            Build Something Similar
                          </Link>
                        </div>
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-card rounded-md text-xs font-medium text-foreground border border-border">
                          {project.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-base text-foreground mb-1">{project.title}</h3>
                        <p className="text-accent font-medium text-sm mb-2.5">{project.result}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded bg-muted text-xs text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection className="text-center mt-10">
                <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                  View All Projects <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full section-padding relative">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="section-badge mb-4">
                  <Rocket className="w-3.5 h-3.5" />
                  Our Process
                </span>
                <h2 className="text-foreground mb-3">
                  From idea to launch in <span className="gradient-text">4 simple steps</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {processSteps.map((step, index) => (
                  <AnimatedSection key={step.step} animation="slide-up" delay={index * 80}>
                    <div className="glass-card p-5 h-full text-center relative group">
                      <span className="font-bold text-4xl text-accent/8 absolute top-2 right-3">
                        {step.step}
                      </span>
                      <div className="relative z-10">
                        <div className="icon-box w-10 h-10 mx-auto mb-3">
                          <step.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-semibold text-base text-foreground mb-1.5">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full section-padding relative bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-12">
                <span className="section-badge mb-4">
                  <Quote className="w-3.5 h-3.5" />
                  Testimonials
                </span>
                <h2 className="text-foreground mb-3">
                  Loved by <span className="gradient-text">businesses like yours</span>
                </h2>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection key={testimonial.name} animation="fade-up" delay={index * 60}>
                    <div className="glass-card p-5 h-full flex flex-col group">
                      <div className="flex items-center gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-foreground text-sm mb-4 flex-1 leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center gap-2.5 pt-3 border-t border-border">
                        <div className="w-9 h-9 rounded-full bg-accent/8 flex items-center justify-center text-accent font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">{testimonial.name}</p>
                          <p className="text-muted-foreground text-xs">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="w-full section-padding relative">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-5">
                <span className="section-badge mb-4">Pricing</span>
                <h2 className="text-foreground mb-3">
                  Simple, transparent <span className="gradient-text">pricing</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-lg mx-auto">
                  Premium quality websites at affordable prices.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-2 mb-10">
                {[
                  { icon: Shield, text: "No Hidden Charges" },
                  { icon: BadgeCheck, text: "Premium Quality" },
                  { icon: Clock, text: "On-Time Delivery" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent/6 border border-accent/10 text-xs text-accent font-medium">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.text}
                  </div>
                ))}
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <AnimatedSection key={plan.name} animation="slide-up" delay={index * 80}>
                    <div className={`glass-card p-6 h-full flex flex-col relative ${plan.popular ? 'pricing-popular ring-1 ring-accent/30' : ''}`}>
                      {plan.popular && plan.badge && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold shadow-md tracking-wide">
                          {plan.badge}
                        </span>
                      )}
                      <div className="mb-5 pt-1">
                        <h3 className="font-semibold text-lg text-foreground mb-0.5">{plan.name}</h3>
                        <p className="text-muted-foreground text-xs mb-3">{plan.tagline}</p>
                        <p className="font-bold text-3xl text-foreground">
                          {plan.price}
                          <span className="text-sm font-normal text-muted-foreground ml-1">starting</span>
                        </p>
                      </div>
                      
                      <ul className="space-y-2.5 mb-5 flex-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-foreground">
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-border mb-4">
                        <div className="flex items-center justify-between text-xs">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full section-padding relative bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[700px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4">FAQ</span>
                <h2 className="text-foreground mb-3">
                  Frequently asked <span className="gradient-text">questions</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={index * 50}>
                    <div className="glass-card overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-muted/30 transition-colors"
                      >
                        <span className="font-medium text-sm text-foreground">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === index ? 'max-h-48 pb-4 sm:pb-5' : 'max-h-0'}`}>
                        <p className="px-4 sm:px-5 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA with Lead Form */}
        <section className="w-full section-padding relative">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-2xl p-8 sm:p-10 lg:p-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  
                  <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                      <h2 className="text-white mb-4">
                        Ready to build your <span className="text-accent">dream website?</span>
                      </h2>
                      <p className="text-white/60 text-base mb-6 max-w-md mx-auto lg:mx-0">
                        Book a free strategy call & get your quote instantly. No obligations.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <a
                          href="tel:9076669103"
                          className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200"
                        >
                          <Phone className="w-4 h-4" />
                          Book Free Call
                        </a>
                        <a
                          href="https://wa.me/9076669103"
                          className="bg-white/8 hover:bg-white/12 text-white text-sm font-medium px-5 py-3 rounded-lg border border-white/12 inline-flex items-center justify-center gap-2 transition-all duration-200"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp Us
                        </a>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 sm:p-6 shadow-xl">
                      <h3 className="font-semibold text-lg text-foreground mb-5 text-center">Get Your Free Quote</h3>
                      <form onSubmit={handleLeadFormSubmit} className="space-y-3">
                        <input type="text" name="name" value={leadForm.name} onChange={handleLeadFormChange} placeholder="Your Name *" className="input-premium" required />
                        <input type="tel" name="phone" value={leadForm.phone} onChange={handleLeadFormChange} placeholder="WhatsApp Number *" className="input-premium" required />
                        <input type="text" name="business" value={leadForm.business} onChange={handleLeadFormChange} placeholder="Business Name" className="input-premium" />
                        <div className="grid grid-cols-2 gap-3">
                          <select name="websiteType" value={leadForm.websiteType} onChange={handleLeadFormChange} className="select-premium">
                            <option value="">Website Type</option>
                            <option value="Business Website">Business Website</option>
                            <option value="E-commerce Store">E-commerce Store</option>
                            <option value="Landing Page">Landing Page</option>
                            <option value="Portfolio">Portfolio</option>
                            <option value="Other">Other</option>
                          </select>
                          <select name="budget" value={leadForm.budget} onChange={handleLeadFormChange} className="select-premium">
                            <option value="">Budget</option>
                            <option value="₹1,999 - ₹2,999">₹1,999 - ₹2,999</option>
                            <option value="₹4,999 - ₹6,999">₹4,999 - ₹6,999</option>
                            <option value="₹8,999+">₹8,999+</option>
                          </select>
                        </div>
                        <textarea name="message" value={leadForm.message} onChange={handleLeadFormChange} placeholder="Tell us about your project..." rows={3} className="input-premium resize-none" />
                        <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
