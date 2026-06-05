import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, Target, Lightbulb, Wrench, TrendingUp, Cpu, Quote, Calendar, MapPin, Briefcase, CheckCircle2, ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;
  if (!study) return <Navigate to="/portfolio" replace />;

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);
  const url = `https://fahadwebservicecom.lovable.app/case-studies/${study.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.client} — ${study.category} Case Study`,
    description: study.summary,
    image: study.image,
    author: { "@type": "Organization", name: "Fahad WebService" },
    publisher: { "@type": "Organization", name: "Fahad WebService" },
    mainEntityOfPage: url,
    about: { "@type": "Service", name: study.serviceName, areaServed: "Lucknow, India" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${study.client} Case Study | ${study.category} | Fahad WebService`}
        description={study.summary}
        keywords={`${study.client} case study, ${study.category} case study Lucknow, ${study.serviceName}, web development results India`}
        canonical={url}
        ogImage={study.image}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <Breadcrumbs />
      <main>
        {/* Hero */}
        <section className="w-full pt-24 pb-12 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-[1100px] mx-auto">
              <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent mb-5">
                <ArrowLeft className="w-3.5 h-3.5" /> All case studies
              </Link>
              <AnimatedSection>
                <span className="section-badge mb-4"><Briefcase className="w-3.5 h-3.5" />{study.category}</span>
                <h1 className="text-foreground mb-4">
                  {study.client}: <span className="gradient-text">{study.summary.split(" ").slice(0, 6).join(" ")}…</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mb-6">{study.summary}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-accent" />{study.industry}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" />{study.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-accent" />{study.location}</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-in" delay={100} className="mt-8">
                <img src={study.image} alt={`${study.client} ${study.category} case study`} className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-border" loading="eager" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Results strip */}
        <section className="w-full py-8 bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {study.results.map((r) => (
                  <div key={r.metric} className="glass-card p-4 text-center">
                    <p className="text-xl font-bold gradient-text mb-0.5">{r.value}</p>
                    <p className="text-xs font-medium text-foreground">{r.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto space-y-10">
              {[
                { icon: Target, title: "The Challenge", body: study.challenge },
                { icon: Lightbulb, title: "Our Strategy", body: study.strategy },
                { icon: Wrench, title: "The Solution", body: study.solution },
              ].map((block) => (
                <AnimatedSection key={block.title} animation="slide-up">
                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-box w-10 h-10"><block.icon className="w-4 h-4 text-accent" /></div>
                      <h2 className="font-bold text-xl sm:text-2xl text-foreground m-0">{block.title}</h2>
                    </div>
                    <div className="space-y-3">
                      {block.body.map((p, i) => (
                        <p key={i} className="text-muted-foreground text-[15px] leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}

              {/* Results detail */}
              <AnimatedSection animation="slide-up">
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="icon-box w-10 h-10"><TrendingUp className="w-4 h-4 text-accent" /></div>
                    <h2 className="font-bold text-xl sm:text-2xl text-foreground m-0">The Results</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {study.results.map((r) => (
                      <div key={r.metric} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-base font-semibold text-foreground"><span className="gradient-text">{r.value}</span> · {r.metric}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{r.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Technologies */}
              <AnimatedSection animation="slide-up">
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-box w-10 h-10"><Cpu className="w-4 h-4 text-accent" /></div>
                    <h2 className="font-bold text-xl sm:text-2xl text-foreground m-0">Technologies Used</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-md bg-accent/8 border border-accent/15 text-xs font-medium text-accent">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Testimonial */}
              <AnimatedSection animation="scale-in">
                <div className="glass-card p-6 sm:p-8 relative">
                  <Quote className="w-10 h-10 text-accent/15 absolute top-4 right-4" />
                  <p className="text-base sm:text-lg text-foreground leading-relaxed italic mb-4">"{study.testimonial.quote}"</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{study.testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related links */}
              <AnimatedSection>
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-base text-foreground mb-3">Related reading</h3>
                  <ul className="space-y-2">
                    <li><Link to={`/services/${study.serviceSlug}`} className="text-sm text-accent hover:underline">→ {study.serviceName}</Link></li>
                    {study.relatedBlogSlugs.map((s) => (
                      <li key={s}><Link to={`/blog/${s}`} className="text-sm text-accent hover:underline">→ Read related blog: {s.replace(/-/g, " ")}</Link></li>
                    ))}
                    <li><Link to="/portfolio" className="text-sm text-accent hover:underline">→ See all portfolio projects</Link></li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* More case studies */}
        <section className="w-full section-padding bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <AnimatedSection className="text-center mb-8">
                <h2 className="font-bold text-2xl sm:text-3xl text-foreground mb-2">More <span className="gradient-text">case studies</span></h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-5">
                {others.map((c) => (
                  <Link key={c.slug} to={`/case-studies/${c.slug}`} className="glass-card overflow-hidden group">
                    <img src={c.image} alt={c.client} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="p-4">
                      <span className="text-xs text-accent font-medium">{c.category}</span>
                      <h3 className="font-semibold text-base text-foreground mt-1 mb-1.5">{c.client}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{c.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full section-padding">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1100px] mx-auto">
              <AnimatedSection>
                <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <h2 className="text-white mb-3">Want results like {study.client}?</h2>
                    <p className="text-white/60 text-base mb-6 max-w-xl mx-auto">Book a free 20-minute strategy call. We'll map out exactly how to ship — and rank — your next site.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200">
                        Start Your Project <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="https://wa.me/9076669103" className="bg-white/8 hover:bg-white/12 text-white text-sm font-medium px-6 py-3 rounded-lg border border-white/12 inline-flex items-center justify-center gap-2 transition-all duration-200">
                        Chat on WhatsApp
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
