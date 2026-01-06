import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check,
  Globe,
  ShoppingCart,
  Code2,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Star,
  Quote,
  Smartphone,
  Palette,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Professional Design",
    description: "Clean, modern designs that make your business stand out and attract customers."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality or attention to detail."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Websites that look perfect on all devices - phones, tablets, and desktops."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality websites at competitive prices that fit your budget."
  }
];

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites for startups, agencies, and growing businesses.",
    price: "Starting ₹4,999"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Complete online stores with payment integration and order management.",
    price: "Starting ₹12,999"
  },
  {
    icon: Code2,
    title: "Custom Solutions",
    description: "Dashboards, portals, and custom web applications built to your needs.",
    price: "Starting ₹8,999"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "Exceptional work! The website they built for my business looks incredibly professional. Customer inquiries increased by 60% within the first month.",
    rating: 5
  },
  {
    name: "Rohit Verma",
    role: "E-commerce Store Owner",
    content: "The e-commerce site they created is fast, secure, and easy to manage. My online sales have grown significantly since the launch.",
    rating: 5
  },
  {
    name: "Imran Khan",
    role: "Education Consultant",
    content: "Professional team with excellent communication. They delivered exactly what I needed - a clean, modern website that my students love.",
    rating: 5
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 section-container text-center py-32 sm:py-40">
            {/* Badge */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-white/90 text-sm font-medium">Professional Web Development Agency</span>
              </div>
            </AnimatedSection>

            {/* Heading */}
            <AnimatedSection delay={100}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
                We Build Professional Websites
                <br />
                <span className="text-primary">That Grow Your Business</span>
              </h1>
            </AnimatedSection>
            
            {/* Subtitle */}
            <AnimatedSection delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                Modern, fast, responsive, and secure websites designed to convert visitors into customers. 
                We deliver quality that exceeds expectations.
              </p>
            </AnimatedSection>
            
            {/* CTA Buttons */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-primary text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white font-medium px-8 py-5 rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={500}>
              <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto mt-20 pt-10 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-2">{stat.value}</p>
                    <p className="text-white/50 text-sm sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Why Choose <span className="text-primary">Us?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We combine creativity with technical expertise to deliver websites that drive real results.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="card-premium p-8 text-center h-full group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 bg-muted">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    About Our Agency
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                    Your Trusted Partner for Digital Success
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At Fahad Web Services, we're passionate about helping businesses establish a powerful 
                    online presence. With years of experience and a commitment to excellence, we deliver 
                    websites that not only look stunning but also drive real business results.
                  </p>
                  <div className="space-y-3 pt-4">
                    {["Client-Focused Approach", "Modern Design Standards", "On-Time Delivery", "Affordable Pricing"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 pt-4"
                  >
                    Learn More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="card-premium p-6 text-center">
                    <p className="font-display font-extrabold text-4xl text-primary mb-2">50+</p>
                    <p className="text-muted-foreground text-sm">Projects Completed</p>
                  </div>
                  <div className="card-premium p-6 text-center">
                    <p className="font-display font-extrabold text-4xl text-primary mb-2">40+</p>
                    <p className="text-muted-foreground text-sm">Happy Clients</p>
                  </div>
                  <div className="card-premium p-6 text-center">
                    <p className="font-display font-extrabold text-4xl text-primary mb-2">3+</p>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="card-premium p-6 text-center">
                    <p className="font-display font-extrabold text-4xl text-primary mb-2">100%</p>
                    <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-background">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                What We Offer
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We build websites that help your business grow. Choose the perfect solution for your needs.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="card-premium p-8 h-full group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <p className="text-primary font-bold">{service.price}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                View All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Headphones className="w-4 h-4" />
                Testimonials
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Client <span className="text-primary">Reviews</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection
                  key={testimonial.name}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="card-premium p-8 h-full flex flex-col">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 flex-1 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Let's create something amazing together. Contact us today for a free consultation 
                and get a custom quote for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/9076669103"
                  className="inline-flex items-center gap-2 text-white font-medium px-8 py-5 rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
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
