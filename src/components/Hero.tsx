export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
          alt="Professional web development workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,50%,10%,0.75)] to-[hsl(220,50%,10%,0.9)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32 sm:py-40">
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in">
          Professional Websites —<br />
          <span className="text-accent">Fast, Clean & Responsive</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Business websites, online stores, coaching portals and custom dashboards — designed for growth and conversions.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="btn-accent inline-flex items-center gap-2 text-lg px-10 py-4 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
