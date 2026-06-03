import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { serviceLandingPages } from "@/data/serviceLandingPages";
import { Check, ArrowRight, ChevronDown, Phone, MessageCircle, Star, Shield, Zap, Clock } from "lucide-react";

const renderContent = (content: string) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="font-bold text-xl sm:text-2xl text-foreground mt-8 mb-4">{line.replace("## ", "")}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="font-semibold text-lg text-foreground mt-6 mb-3">{line.replace("### ", "")}</h3>);
    } else if (line.startsWith("- **")) {
      const m = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
      if (m) elements.push(<li key={i} className="flex items-start gap-2 mb-2 text-muted-foreground text-sm leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span><strong className="text-foreground">{m[1]}:</strong> {m[2]}</span></li>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={i} className="flex items-start gap-2 mb-2 text-muted-foreground text-sm leading-relaxed"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" /><span>{line.replace("- ", "")}</span></li>);
    } else if (line.length > 0) {
      const rendered = line
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent hover:underline font-medium">$1</a>')
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>');
      elements.push(<p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: rendered }} />);
    }
    i++;
  }
  return elements;
};

export default function ServiceLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const data = slug ? serviceLandingPages[slug] : null;

  if (!data) return <Navigate to="/services" replace />;

  const canonical = `https://fahadwebservicecom.lovable.app/services/${data.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: "Fahad WebService",
      telephone: "+919076669103",
      email: "fahadshaikh9076669103@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    },
    areaServed: [{ "@type": "City", name: "Lucknow" }, { "@type": "Country", name: "India" }],
    description: data.description,
    offers: { "@type": "Offer", price: data.priceFrom.replace(/[^\d]/g, ""), priceCurrency: "INR" },
    url: canonical,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={data.seoTitle}
        description={data.description}
        keywords={data.keywords}
        canonical={canonical}
        ogImage={data.image}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <Breadcrumbs />
      <main>
        {/* Hero */}
        <section className="w-full pt-28 pb-14 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center max-w-3xl mx-auto">
                <span className="section-badge mb-4">{data.serviceName}</span>
                <h1 className="text-foreground mb-5">{data.h1}</h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{data.intro}</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-sm text-foreground font-medium ml-1">4.9 · 50+ reviews</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="https://wa.me/9076669103" className="btn-accent inline-flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Starting at <strong className="text-accent">{data.priceFrom}</strong> · Reply in 24 hours</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-foreground mb-3">Why our <span className="gradient-text">{data.serviceName.toLowerCase()}</span></h2>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto">Built for results, not vanity metrics.</p>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.benefits.map((b, i) => (
                  <AnimatedSection key={b.title} animation="slide-up" delay={i * 50}>
                    <div className="glass-card p-6 h-full">
                      <div className="icon-box w-10 h-10 mb-4"><Check className="w-4 h-4 text-accent" /></div>
                      <h3 className="font-semibold text-base text-foreground mb-2">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4">Our Process</span>
                <h2 className="text-foreground mb-3">How we <span className="gradient-text">deliver</span></h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.process.map((p, i) => (
                  <AnimatedSection key={p.step} animation="slide-up" delay={i * 60}>
                    <div className="glass-card p-6 h-full relative">
                      <span className="absolute top-4 right-4 text-3xl font-bold text-accent/10">{p.step}</span>
                      <h3 className="font-semibold text-base text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Long-form content */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[820px] mx-auto">
              <AnimatedSection>
                <article className="prose-custom">{renderContent(data.content)}</article>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4">Why Choose Us</span>
                <h2 className="text-foreground mb-3">Trusted by <span className="gradient-text">120+ businesses</span></h2>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.whyChoose.map((w, i) => (
                  <AnimatedSection key={w.title} animation="slide-up" delay={i * 60}>
                    <div className="glass-card p-5 h-full">
                      <div className="icon-box w-9 h-9 mb-3">
                        {i === 0 && <Star className="w-4 h-4 text-accent" />}
                        {i === 1 && <Shield className="w-4 h-4 text-accent" />}
                        {i === 2 && <Zap className="w-4 h-4 text-accent" />}
                        {i === 3 && <Clock className="w-4 h-4 text-accent" />}
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1.5">{w.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{w.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[800px] mx-auto">
              <AnimatedSection className="text-center mb-10">
                <span className="section-badge mb-4">FAQ</span>
                <h2 className="text-foreground mb-3">Frequently asked <span className="gradient-text">questions</span></h2>
              </AnimatedSection>
              <div className="space-y-3">
                {data.faqs.map((faq, i) => (
                  <AnimatedSection key={i} animation="slide-up" delay={i * 40}>
                    <div className="glass-card overflow-hidden">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-muted/30 transition-colors">
                        <span className="font-medium text-sm text-foreground">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                        <p className="px-4 sm:px-5 text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>') }} />
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <h2 className="text-white mb-3">Ready to get started?</h2>
                    <p className="text-white/60 text-base mb-6 max-w-lg mx-auto">Get a free consultation and custom quote within 24 hours.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all">
                        Get Free Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="tel:9076669103" className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all">
                        <Phone className="w-4 h-4" /> Call Us
                      </a>
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
}
