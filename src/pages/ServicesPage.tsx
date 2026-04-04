import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Code2, ShoppingCart, FileText, PenTool, Wrench, Check, ArrowRight, Layers, Zap, Shield, Clock, Star, Phone, MessageCircle, TrendingUp, Search, ChevronDown } from "lucide-react";

const services = [
  {
    title: "Website Design",
    icon: Palette,
    description: "We design visually stunning, brand-aligned websites that make a lasting first impression. Our design process begins with in-depth discovery — understanding your industry, target audience, competitors, and business goals. We create detailed wireframes and high-fidelity mockups that prioritize user experience (UX) at every step. Every element, from colour palette and typography to spacing and visual hierarchy, is crafted to guide visitors toward taking action. Our designs are mobile-first and fully responsive, ensuring a flawless experience across all screen sizes. We follow modern design trends including clean layouts, strategic use of white space, micro-interactions, and accessibility-compliant interfaces. The result is a website that not only looks beautiful but actively drives conversions and builds customer trust in the competitive Indian market.",
    features: ["User Research & Wireframing", "Mobile-First Responsive Design", "Brand-Aligned Visual Identity", "Prototype & Design System", "Conversion-Optimized Layouts", "Accessibility Compliance"],
    price: "₹2,999+"
  },
  {
    title: "Web Development",
    icon: Code2,
    description: "Our development team builds fast, secure, and scalable websites using cutting-edge technologies like React, Next.js, TypeScript, and Node.js. Every line of code is written with performance, maintainability, and SEO in mind. We implement semantic HTML5 structure, proper heading hierarchy, and schema markup to ensure search engines understand and rank your content effectively. Our websites achieve sub-2-second load times through image optimization, code splitting, lazy loading, and CDN integration. We integrate essential business tools including contact forms with email notifications, WhatsApp chat buttons, Google Analytics, and Search Console. Security is built into every project with SSL certificates, input validation, and protection against common web vulnerabilities. Whether you need a business website, a portfolio, or a complex web application, we deliver code that runs flawlessly and scales with your business growth.",
    features: ["4-10 Custom Pages", "Mobile Responsive Design", "SEO Optimized Structure", "Contact & Lead Forms", "Fast Loading (Under 2s)", "Google Analytics Integration"],
    price: "₹4,999+"
  },
  {
    title: "Landing Pages",
    icon: FileText,
    description: "Our high-converting landing pages are engineered specifically to capture leads and maximize ROI from your marketing campaigns. Whether you are running Google Ads, Facebook campaigns, Instagram promotions, or WhatsApp marketing, a dedicated landing page ensures every rupee spent on advertising delivers measurable results. We design each landing page with a single, focused goal — whether that is collecting email signups, generating phone inquiries, or driving WhatsApp conversations. The design follows proven conversion frameworks including compelling headlines, benefit-focused copy, social proof elements, urgency triggers, and strategically placed call-to-action buttons. Every landing page we build is A/B tested, SEO-friendly, and optimized for both mobile and desktop users. We also set up conversion tracking so you can measure exactly how many leads each campaign generates.",
    features: ["Conversion-Focused Design", "CTA Optimization", "Lead Capture Forms", "A/B Testing Ready", "Mobile Optimized", "Conversion Tracking"],
    price: "₹1,999+"
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "We build complete, feature-rich e-commerce platforms that make online selling simple, secure, and profitable. From product catalogue management and advanced search filters to shopping cart functionality and secure checkout, every aspect of the buying journey is optimized for conversions. We integrate popular Indian payment gateways including Razorpay, PayU, and Paytm to ensure seamless transactions. Our e-commerce solutions include comprehensive inventory management, order tracking dashboards, automated email notifications for order confirmations and shipping updates, customer account management, and wishlist functionality. We implement product reviews, related product recommendations, and discount coupon systems to increase average order value. For businesses needing multi-vendor marketplaces or subscription-based models, we build custom solutions tailored to specific requirements. Every store we build is SEO-optimized with proper product schema markup, fast loading speeds, and mobile-responsive design.",
    features: ["Product Catalog & Search", "Payment Gateway Integration", "Order & Inventory Management", "Customer Dashboard", "Automated Notifications", "Product Reviews & Ratings"],
    price: "₹8,999+"
  },
  {
    title: "SEO & Performance",
    icon: Search,
    description: "Our comprehensive SEO services help your website rank higher on Google, attract qualified organic traffic, and convert visitors into customers. We begin with thorough keyword research to identify the search terms your target audience uses, then build a content strategy around those keywords. Our on-page optimization covers title tags, meta descriptions, heading hierarchy, internal linking, image alt text, and content quality improvements. Technical SEO audits address page speed, mobile usability, crawlability, indexation issues, and Core Web Vitals compliance. We optimize your website's loading performance through image compression, code minification, browser caching, and CDN implementation. We set up Google Analytics, Search Console, and conversion tracking to provide clear, actionable monthly reports showing your ranking improvements, traffic growth, and lead generation metrics. For local businesses, we optimize Google Business Profiles and build local citations to dominate local search results.",
    features: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Speed & Core Web Vitals", "Google Analytics Setup", "Monthly Performance Reports", "Local SEO Optimization"],
    price: "₹1,999+"
  },
  {
    title: "Maintenance",
    icon: Wrench,
    description: "Keep your website running at peak performance with our proactive maintenance and support packages. Websites are not a one-time project — they require regular attention to stay secure, fast, and effective. Our maintenance plans include timely software and plugin updates, proactive security monitoring with malware scanning and firewall management, regular performance optimization to maintain fast loading speeds, and content updates to keep your website fresh and relevant. We perform weekly backups so your data is always protected, and we monitor uptime to ensure your website is always accessible to customers. Our priority technical support means you get fast responses when issues arise. We also provide monthly reports detailing security status, performance metrics, and any updates performed. Whether you need occasional content updates or comprehensive ongoing management, we have a plan that fits your business needs and budget.",
    features: ["Regular Software Updates", "Security Monitoring & Patches", "Performance Optimization", "Content Updates", "Priority Technical Support", "Weekly Backups"],
    price: "₹499/month"
  }
];

const whyChoose = [
  { icon: Zap, title: "Fast Delivery", description: "Most projects completed in 2-12 days" },
  { icon: Shield, title: "No Hidden Charges", description: "What we quote is what you pay" },
  { icon: Clock, title: "On-Time Always", description: "We never miss deadlines" },
  { icon: Star, title: "Premium Quality", description: "Modern, professional designs" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Web Design & Development Services India | SEO, E-commerce | Fahad WebService"
        description="Professional website development, e-commerce solutions, SEO services, and UI/UX design in India. Affordable packages starting at ₹1,999. Fast delivery, premium quality."
        keywords="web design services India, website development services, ecommerce website India, SEO services India, UI UX design India, affordable web development"
        canonical="https://fahadwebservice.com/services"
      />
      <Header />
      <main>
        <section className="w-full pt-28 pb-16 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4"><Layers className="w-3.5 h-3.5" />Our Services</span>
                <h1 className="text-foreground mb-5">
                  Professional web design & development <span className="gradient-text">services in India</span>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  We offer comprehensive website development, e-commerce solutions, SEO optimization, and UI/UX design services tailored for Indian businesses. Our team combines modern design with technical expertise to create websites that rank higher on Google, load faster, and convert more visitors into customers. Every project is delivered on time with transparent pricing starting at just ₹1,999.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-card border border-border text-sm">
                      <item.icon className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground font-medium text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <AnimatedSection key={service.title} animation="slide-up" delay={index * 60}>
                    <motion.div 
                      className="glass-card p-6 h-full flex flex-col group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="icon-box w-10 h-10 mb-4">
                        <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">{service.title}</h3>
                      <p className="text-accent font-bold text-base mb-3">{service.price}</p>
                      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                      <div className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="btn-secondary w-full text-center">
                        Get Quote
                      </Link>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-card rounded-xl p-8 sm:p-10 text-center border border-border shadow-md">
                  <h2 className="font-bold text-2xl text-foreground mb-3">
                    Not sure which service you need?
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 max-w-lg mx-auto">
                    Let's have a quick call to understand your requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:9076669103" className="btn-primary inline-flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Book Free Call
                    </a>
                    <a href="https://wa.me/9076669103" className="btn-accent inline-flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </AnimatedSection>
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
                    <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
                    <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">
                      Contact us today for a free consultation and quote.
                    </p>
                    <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-200">
                      Get Free Quote <ArrowRight className="w-4 h-4" />
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
