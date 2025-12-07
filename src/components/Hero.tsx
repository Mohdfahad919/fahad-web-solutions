import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=85&fm=webp"
          alt="Professional web development workspace with laptop and code editor"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,50%,8%,0.8)] via-[hsl(220,50%,10%,0.85)] to-[hsl(220,50%,12%,0.95)]" />
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32 sm:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-primary-foreground/90 text-sm font-medium">Professional Web Development Agency</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-fade-in">
          Professional Websites —<br />
          <span className="text-accent drop-shadow-[0_0_30px_hsl(var(--accent)/0.5)]">Fast, Clean & Responsive</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Business websites, online stores, coaching portals and custom dashboards — designed for growth and conversions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="btn-accent inline-flex items-center gap-2 text-lg px-10 py-4 shadow-[0_8px_32px_-8px_hsl(var(--accent)/0.5)] hover:shadow-[0_12px_40px_-8px_hsl(var(--accent)/0.6)] hover:scale-105"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary-foreground/90 font-medium px-6 py-4 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div>
            <p className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground">50+</p>
            <p className="text-primary-foreground/60 text-sm mt-1">Projects Delivered</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground">100%</p>
            <p className="text-primary-foreground/60 text-sm mt-1">Client Satisfaction</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground">24/7</p>
            <p className="text-primary-foreground/60 text-sm mt-1">Support Available</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float group">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/50 group-hover:text-primary-foreground/80 transition-colors">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
}
