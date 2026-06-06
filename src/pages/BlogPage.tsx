import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Sparkles, User } from "lucide-react";

const blogPosts = [
  {
    slug: "best-website-development-services-lucknow",
    title: "Best Website Development Services in Lucknow for Small Businesses",
    excerpt: "Looking for affordable, professional website development in Lucknow? Discover the best web design services for small businesses and startups in Lucknow, India.",
    date: "April 5, 2026",
    readTime: "11 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "website-development-cost-india-2026",
    title: "How Much Does Website Development Cost in India (2026 Guide)",
    excerpt: "Complete pricing breakdown for website development in India in 2026. From landing pages to e-commerce stores, learn what to expect and how to budget smartly.",
    date: "April 4, 2026",
    readTime: "12 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "step-by-step-build-business-website-india",
    title: "Step-by-Step Guide to Build a Business Website in India",
    excerpt: "A complete step-by-step guide to building a professional business website in India. From planning to launch, everything you need to know in 2026.",
    date: "April 3, 2026",
    readTime: "13 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "top-seo-strategies-small-businesses-india",
    title: "Top SEO Strategies for Small Businesses in India",
    excerpt: "Actionable SEO strategies designed specifically for small businesses in India. Learn how to rank higher on Google without breaking the bank.",
    date: "April 2, 2026",
    readTime: "11 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "how-to-get-clients-online-using-website",
    title: "How to Get Clients Online Using a Website",
    excerpt: "Learn proven strategies to attract and convert clients through your website. From lead generation to conversion optimization, this guide covers it all.",
    date: "April 1, 2026",
    readTime: "10 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "top-10-benefits-of-having-a-website",
    title: "Top 10 Benefits of Having a Website for Your Business in 2026",
    excerpt: "Discover the top reasons why every business needs a professional website. From credibility to 24/7 sales, learn how a website transforms your business growth.",
    date: "March 30, 2026",
    readTime: "9 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "how-small-businesses-grow-online-india",
    title: "How Small Businesses Can Grow Online in India – 2026 Guide",
    excerpt: "Practical, budget-friendly strategies for small business owners in India to build a strong online presence and attract more customers digitally.",
    date: "March 28, 2026",
    readTime: "10 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "why-every-business-needs-seo-2026",
    title: "Why Every Business Needs SEO in 2026 – The Complete Guide",
    excerpt: "SEO is no longer optional. Learn why search engine optimization is critical for business survival and growth in 2026, and how to get started.",
    date: "March 20, 2026",
    readTime: "8 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "how-to-create-website-in-india",
    title: "How to Create a Website in India – Complete Guide 2025",
    excerpt: "Learn step-by-step how to create a professional website in India. From choosing a domain to launching your site, this guide covers everything you need to know.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "website-development-cost-india",
    title: "Website Development Cost in India – Pricing Guide 2025",
    excerpt: "Understand the real cost of website development in India. We break down pricing for different types of websites, from basic landing pages to full e-commerce stores.",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "what-is-seo-how-it-works",
    title: "What is SEO and How Does It Work? A Beginner's Guide",
    excerpt: "Discover what SEO is, why it matters for your business, and how search engines rank websites. Learn actionable SEO strategies to improve your Google ranking.",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "best-website-design-tips",
    title: "10 Best Website Design Tips for a Professional Look",
    excerpt: "Make your website stand out with these proven design tips. Learn about layout, typography, color theory, and user experience principles that convert visitors.",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "how-to-grow-business-online",
    title: "How to Grow Your Business Online – Digital Marketing Guide",
    excerpt: "Learn proven strategies to grow your business online. From building a website to social media marketing and SEO, discover what works in the Indian market.",
    date: "February 20, 2025",
    readTime: "9 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=72&fm=webp&auto=format",
  },
  {
    slug: "how-professional-website-increases-sales",
    title: "How a Professional Website Can Increase Your Sales and Leads",
    excerpt: "Discover proven ways a professional website drives more sales, builds trust, and generates qualified leads for your business around the clock.",
    date: "April 6, 2026",
    readTime: "14 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=72&fm=webp&auto=format",
  },
  { slug: "local-seo-guide-lucknow", title: "Complete Local SEO Guide for Lucknow Businesses", excerpt: "Rank in the Lucknow local 3-pack with this step-by-step local SEO guide: GBP, citations, NAP, reviews, schema. Built for Hazratganj, Gomti Nagar, Aliganj.", date: "June 3, 2026", readTime: "11 min read", category: "Local SEO", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=72&fm=webp&auto=format" },
  { slug: "google-business-profile-optimization-india", title: "Google Business Profile Optimization Guide for India (2026)", excerpt: "Complete GBP optimization playbook for Indian businesses. Categories, services, posts, reviews, photos, Q&A — rank in Maps faster.", date: "June 3, 2026", readTime: "10 min read", category: "Local SEO", image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=600&q=72&fm=webp&auto=format" },
  { slug: "responsive-web-design-benefits", title: "10 Benefits of Responsive Web Design for Indian Businesses", excerpt: "Why mobile-first responsive design is non-negotiable in 2026: rankings, conversions, cost savings. Real data from 120+ projects.", date: "June 3, 2026", readTime: "9 min read", category: "Web Design", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=72&fm=webp&auto=format" },
  { slug: "website-speed-optimization-guide", title: "Website Speed Optimization: Complete Guide (2026)", excerpt: "Cut your load time below 2 seconds. Image optimization, code splitting, lazy loading, CDN, caching — every lever explained.", date: "June 3, 2026", readTime: "12 min read", category: "Performance", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=72&fm=webp&auto=format" },
  { slug: "core-web-vitals-explained", title: "Core Web Vitals Explained: LCP, INP, CLS for SEO", excerpt: "Understand the three Core Web Vitals Google uses to rank pages. Targets, measurement, and proven fixes for each metric.", date: "June 3, 2026", readTime: "10 min read", category: "Performance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=72&fm=webp&auto=format" },
  { slug: "ecommerce-website-guide-india", title: "Ultimate E-commerce Website Guide for Indian Startups (2026)", excerpt: "Build, launch and grow an e-commerce store in India. Platform choice, payments, shipping, GST, marketing — the full playbook.", date: "June 3, 2026", readTime: "15 min read", category: "E-commerce", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=72&fm=webp&auto=format" },
  { slug: "razorpay-vs-payu-vs-stripe", title: "Razorpay vs PayU vs Stripe: Best Payment Gateway for India (2026)", excerpt: "Compare the top payment gateways for Indian businesses on fees, features, UPI support, settlement and developer experience.", date: "June 3, 2026", readTime: "11 min read", category: "E-commerce", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=72&fm=webp&auto=format" },
  { slug: "wordpress-vs-custom-website", title: "WordPress vs Custom Website: Which Is Better in 2026?", excerpt: "Detailed comparison of WordPress and custom-coded websites. Cost, speed, SEO, maintenance, scalability — make the right call.", date: "June 3, 2026", readTime: "10 min read", category: "Web Development", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=72&fm=webp&auto=format" },
  { slug: "website-maintenance-guide", title: "Website Maintenance Guide: What, Why, How Much (2026)", excerpt: "Why every website needs ongoing maintenance, what's included, and what it should cost in India. Avoid hacks, downtime and rank drops.", date: "June 3, 2026", readTime: "9 min read", category: "Maintenance", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=72&fm=webp&auto=format" },
  { slug: "keyword-research-guide-india", title: "Keyword Research for Indian SEO: Complete 2026 Guide", excerpt: "Find high-volume, low-difficulty keywords for Indian markets. Tools, process, intent mapping, local modifiers — everything you need.", date: "June 3, 2026", readTime: "12 min read", category: "SEO", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=72&fm=webp&auto=format" },
  { slug: "schema-markup-guide", title: "Schema Markup Guide: JSON-LD for Better Google Rankings", excerpt: "Implement LocalBusiness, FAQ, Article, Product, Review and Breadcrumb schema. Real code examples, common mistakes, testing.", date: "June 3, 2026", readTime: "11 min read", category: "SEO", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=72&fm=webp&auto=format" },
  { slug: "conversion-rate-optimization-india", title: "Conversion Rate Optimization for Indian Websites (2026)", excerpt: "Increase conversions 2-3x with proven CRO tactics tailored for Indian audiences. Forms, CTAs, trust signals, WhatsApp, mobile UX.", date: "June 3, 2026", readTime: "12 min read", category: "Marketing", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=72&fm=webp&auto=format" },
  { slug: "landing-page-best-practices", title: "15 Landing Page Best Practices That Convert in 2026", excerpt: "Build high-converting landing pages for Google Ads, Meta and WhatsApp campaigns. Real frameworks, copy, design, and tracking.", date: "June 3, 2026", readTime: "10 min read", category: "Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=72&fm=webp&auto=format" },
  { slug: "voice-search-seo-2026", title: "Voice Search SEO: Optimize for 'Hey Google' in India (2026)", excerpt: "Voice search is 30% of mobile searches in India. Learn how to optimize content, schema and pages for voice queries.", date: "June 3, 2026", readTime: "9 min read", category: "SEO", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=72&fm=webp&auto=format" },
  { slug: "ai-search-optimization-guide", title: "AI Search Optimization: Rank in ChatGPT, Perplexity & Google AI Overviews", excerpt: "AI search is the new SEO. Learn how to get cited in ChatGPT, Perplexity, Gemini and Google AI Overviews. EEAT, structure, schema.", date: "June 3, 2026", readTime: "13 min read", category: "AI SEO", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=72&fm=webp&auto=format" },
  { slug: "web-design-trends-2026", title: "Web Design Trends 2026: What's In, What's Out", excerpt: "The web design trends shaping 2026: glassmorphism, AI-generated visuals, bold typography, micro-animations, dark mode by default.", date: "June 3, 2026", readTime: "10 min read", category: "Design", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=72&fm=webp&auto=format" },
];


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog | SEO & Web Design Tips India | Fahad WebService"
        description="Expert articles on website development in Lucknow, SEO services for small businesses India, and affordable web design tips. Grow your business online."
        keywords="web development blog India, SEO services for small businesses India, website development in Lucknow, affordable web design tips"
        canonical="https://fahadwebservicecom.lovable.app/blog"
      />
      <Header />
      <Breadcrumbs />
      <main>
        <section className="w-full pt-28 pb-16 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4"><Sparkles className="w-3.5 h-3.5" />Our Blog</span>
                <h1 className="text-foreground mb-5">
                  Insights & tips for <span className="gradient-text">digital success</span>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Expert articles on website development, SEO, design, and growing your business online in India.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <AnimatedSection key={post.slug} animation="slide-up" delay={index * 60}>
                    <Link to={`/blog/${post.slug}`} className="glass-card group overflow-hidden flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy" decoding="async"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-card rounded-md text-xs font-medium text-foreground border border-border">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h2 className="font-semibold text-base text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1"><User className="w-3 h-3" /> Fahad</span>
                            <span>{post.date}</span>
                          </div>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <h2 className="text-white mb-4">Need a Professional Website?</h2>
                    <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">
                      Let us build a high-performing website for your business. Starting at ₹1,999.
                    </p>
                    <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-200">
                      Get Free Consultation <ArrowRight className="w-4 h-4" />
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
