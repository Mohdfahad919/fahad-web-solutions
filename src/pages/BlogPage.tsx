import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fm=webp",
  },
  {
    slug: "website-development-cost-india-2026",
    title: "How Much Does Website Development Cost in India (2026 Guide)",
    excerpt: "Complete pricing breakdown for website development in India in 2026. From landing pages to e-commerce stores, learn what to expect and how to budget smartly.",
    date: "April 4, 2026",
    readTime: "12 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fm=webp",
  },
  {
    slug: "step-by-step-build-business-website-india",
    title: "Step-by-Step Guide to Build a Business Website in India",
    excerpt: "A complete step-by-step guide to building a professional business website in India. From planning to launch, everything you need to know in 2026.",
    date: "April 3, 2026",
    readTime: "13 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp",
  },
  {
    slug: "top-seo-strategies-small-businesses-india",
    title: "Top SEO Strategies for Small Businesses in India",
    excerpt: "Actionable SEO strategies designed specifically for small businesses in India. Learn how to rank higher on Google without breaking the bank.",
    date: "April 2, 2026",
    readTime: "11 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80&fm=webp",
  },
  {
    slug: "how-to-get-clients-online-using-website",
    title: "How to Get Clients Online Using a Website",
    excerpt: "Learn proven strategies to attract and convert clients through your website. From lead generation to conversion optimization, this guide covers it all.",
    date: "April 1, 2026",
    readTime: "10 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&fm=webp",
  },
  {
    slug: "top-10-benefits-of-having-a-website",
    title: "Top 10 Benefits of Having a Website for Your Business in 2026",
    excerpt: "Discover the top reasons why every business needs a professional website. From credibility to 24/7 sales, learn how a website transforms your business growth.",
    date: "March 30, 2026",
    readTime: "9 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&fm=webp",
  },
  {
    slug: "how-small-businesses-grow-online-india",
    title: "How Small Businesses Can Grow Online in India – 2026 Guide",
    excerpt: "Practical, budget-friendly strategies for small business owners in India to build a strong online presence and attract more customers digitally.",
    date: "March 28, 2026",
    readTime: "10 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fm=webp",
  },
  {
    slug: "why-every-business-needs-seo-2026",
    title: "Why Every Business Needs SEO in 2026 – The Complete Guide",
    excerpt: "SEO is no longer optional. Learn why search engine optimization is critical for business survival and growth in 2026, and how to get started.",
    date: "March 20, 2026",
    readTime: "8 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80&fm=webp",
  },
  {
    slug: "how-to-create-website-in-india",
    title: "How to Create a Website in India – Complete Guide 2025",
    excerpt: "Learn step-by-step how to create a professional website in India. From choosing a domain to launching your site, this guide covers everything you need to know.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fm=webp",
  },
  {
    slug: "website-development-cost-india",
    title: "Website Development Cost in India – Pricing Guide 2025",
    excerpt: "Understand the real cost of website development in India. We break down pricing for different types of websites, from basic landing pages to full e-commerce stores.",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fm=webp",
  },
  {
    slug: "what-is-seo-how-it-works",
    title: "What is SEO and How Does It Work? A Beginner's Guide",
    excerpt: "Discover what SEO is, why it matters for your business, and how search engines rank websites. Learn actionable SEO strategies to improve your Google ranking.",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80&fm=webp",
  },
  {
    slug: "best-website-design-tips",
    title: "10 Best Website Design Tips for a Professional Look",
    excerpt: "Make your website stand out with these proven design tips. Learn about layout, typography, color theory, and user experience principles that convert visitors.",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fm=webp",
  },
  {
    slug: "how-to-grow-business-online",
    title: "How to Grow Your Business Online – Digital Marketing Guide",
    excerpt: "Learn proven strategies to grow your business online. From building a website to social media marketing and SEO, discover what works in the Indian market.",
    date: "February 20, 2025",
    readTime: "9 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=webp",
  },
  {
    slug: "how-professional-website-increases-sales",
    title: "How a Professional Website Can Increase Your Sales and Leads",
    excerpt: "Discover proven ways a professional website drives more sales, builds trust, and generates qualified leads for your business around the clock.",
    date: "April 6, 2026",
    readTime: "14 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fm=webp",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog – Web Development & SEO Tips | Fahad WebService"
        description="Read expert articles on website development, SEO strategies, web design tips, and how to grow your business online in India."
        keywords="web development blog, SEO tips India, website design tips, digital marketing India, how to create website"
        canonical="https://fahadwebservice.com/blog"
      />
      <Header />
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
                          loading="lazy"
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
