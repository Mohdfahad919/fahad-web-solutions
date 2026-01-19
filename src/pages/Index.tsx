import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
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
  Briefcase
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Palette, title: "UI/UX Design", description: "Beautiful interfaces that users love" },
  { icon: Code2, title: "Website Development", description: "Fast, secure, scalable websites" },
  { icon: ShoppingCart, title: "E-commerce Websites", description: "Online stores that convert" },
  { icon: FileText, title: "Landing Pages", description: "High-converting lead pages" },
  { icon: PenTool, title: "Branding & Logo", description: "Memorable brand identity" },
  { icon: Wrench, title: "Maintenance & Support", description: "24/7 ongoing support" },
];

const benefits = [
  { icon: Sparkles, title: "Premium Design", description: "Stunning visuals that captivate your audience and build trust instantly." },
  { icon: Zap, title: "Fast Performance", description: "Lightning-fast load times for better user experience and SEO rankings." },
  { icon: Search, title: "SEO Ready", description: "Built-in search optimization to help you rank higher on Google." },
  { icon: TrendingUp, title: "Lead-Generating Layout", description: "Strategic design focused on converting visitors into customers." },
];

const projects = [
  { title: "TechStart Solutions", category: "Website", result: "+180% traffic increase", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp" },
  { title: "StyleHub Fashion", category: "E-commerce", result: "₹2L+ monthly sales", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp" },
  { title: "HealthFirst Clinic", category: "Website", result: "+250 appointments/mo", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fm=webp" },
  { title: "FoodieBox Delivery", category: "E-commerce", result: "5000+ orders processed", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fm=webp" },
  { title: "EduLearn Academy", category: "UI/UX", result: "+95% user satisfaction", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80&fm=webp" },
  { title: "PropertyHub Realty", category: "Website", result: "+320% lead generation", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp" },
];

const processSteps = [
  { step: "01", title: "Discover", description: "We learn about your business goals and target audience" },
  { step: "02", title: "Design", description: "We create stunning mockups tailored to your brand" },
  { step: "03", title: "Develop", description: "We build your website with clean, optimized code" },
  { step: "04", title: "Launch", description: "We deploy, test, and ensure everything works perfectly" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder, TechStart", content: "Fahad WebService transformed our online presence. The new website helped us increase leads by 200% in just 3 months.", rating: 5 },
  { name: "Rohit Verma", role: "Owner, StyleHub", content: "Our e-commerce site is stunning and performs flawlessly. Sales have tripled since the launch.", rating: 5 },
  { name: "Dr. Anjali Mehta", role: "HealthFirst Clinic", content: "Professional, responsive, and delivered on time. Our patients love the new booking system.", rating: 5 },
  { name: "Imran Khan", role: "CEO, EduLearn", content: "The learning platform they built exceeded all expectations. Highly recommend their services.", rating: 5 },
  { name: "Sneha Patel", role: "FoodieBox", content: "From concept to launch, the team was exceptional. Our customers find the ordering process seamless.", rating: 5 },
  { name: "Arjun Reddy", role: "PropertyHub", content: "Best investment we made for our business. The website brings in qualified leads daily.", rating: 5 },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for landing pages & simple sites",
    features: ["1-Page Landing Page", "Mobile Responsive", "Contact Form", "SEO Setup", "3 Revisions", "5-Day Delivery"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "Ideal for growing businesses",
    features: ["5-7 Page Website", "Premium Design", "Lead Capture Forms", "Full SEO", "Blog Setup", "Unlimited Revisions", "Priority Support", "10-Day Delivery"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹49,999+",
    description: "For e-commerce & advanced projects",
    features: ["Full E-commerce Store", "Payment Integration", "Product Management", "Admin Dashboard", "Advanced SEO", "Ongoing Support", "Custom Features", "14-Day Delivery"],
    popular: false,
  },
];

const faqs = [
  { question: "How long does it take to build a website?", answer: "Typically 5-14 days depending on complexity. Simple landing pages take 5 days, while full e-commerce sites may take 2-3 weeks." },
  { question: "Do you provide ongoing support?", answer: "Yes! We offer maintenance packages starting at ₹999/month for updates, security patches, and technical support." },
  { question: "What technologies do you use?", answer: "We use modern technologies like React, Next.js, and Tailwind CSS for fast, scalable, and beautiful websites." },
  { question: "Can I see my website before it goes live?", answer: "Absolutely! We provide a staging link for you to review and approve before the final launch." },
  { question: "Do you help with hosting and domain?", answer: "Yes, we can help you set up hosting and domain, or work with your existing setup." },
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
            <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-gradient-blue/20 rounded-full blur-[120px] animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-accent-secondary/15 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 section-container text-center py-20 sm:py-32">
            {/* Badge */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card border-primary/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-foreground/80 text-sm font-medium">We Build Premium Websites That Convert</span>
              </div>
            </AnimatedSection>

            {/* Heading */}
            <AnimatedSection delay={100}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 text-balance">
                We build premium websites
                <br />
                <span className="gradient-text">& apps that grow your business.</span>
              </h1>
            </AnimatedSection>
            
            {/* Subtitle */}
            <AnimatedSection delay={200}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Modern design, lightning-fast performance, and conversion-focused layouts. 
                We craft digital experiences that turn visitors into loyal customers.
              </p>
            </AnimatedSection>
            
            {/* CTA Buttons */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gradient-blue border-2 border-background" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">Trusted by 50+ brands</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-muted-foreground text-sm ml-1">4.9 Rated</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Metrics */}
            <AnimatedSection delay={500}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
                {[
                  { value: "120+", label: "Projects" },
                  { value: "7+", label: "Years" },
                  { value: "Fast", label: "Delivery" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card px-4 py-5">
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
                  and help your business scale.
                </p>
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
                      ? "bg-primary text-white"
                      : "glass-card text-muted-foreground hover:text-foreground"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
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
                      <p className="text-primary text-sm font-medium">{project.result}</p>
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
                    <span className="font-display font-bold text-5xl gradient-text opacity-30 absolute top-4 right-4">
                      {step.step}
                    </span>
                    <div className="relative z-10">
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
                  <div className="glass-card p-8 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 flex-1 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gradient-blue" />
                      <div>
                        <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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
            <AnimatedSection className="text-center mb-16">
              <span className="section-badge mb-4">Pricing</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Transparent pricing, <span className="gradient-text">no surprises</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the perfect plan for your business needs.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <AnimatedSection key={plan.name} animation="slide-up" delay={index * 100}>
                  <div className={`glass-card p-8 h-full flex flex-col relative ${plan.popular ? 'pricing-popular' : ''}`}>
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-gradient-blue text-white text-xs font-bold">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <p className="font-display font-bold text-4xl gradient-text mb-6">{plan.price}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-display font-bold text-foreground">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                      <p className="px-6 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative">
          <div className="section-container">
            <AnimatedSection>
              <div className="glass-card p-10 sm:p-16 text-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gradient-blue/10 to-accent/10" />
                
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
                    Ready to build a <span className="gradient-text">premium website?</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                    Book a free strategy call and let's discuss how we can help your business grow online.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="btn-primary group inline-flex items-center justify-center gap-2 text-base">
                      <Phone className="w-5 h-5" />
                      Book Free Call
                    </Link>
                    <a
                      href="https://wa.me/9076669103"
                      className="btn-accent inline-flex items-center justify-center gap-2 text-base"
                    >
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
};

export default Index;
