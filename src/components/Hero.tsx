import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=85&fm=webp"
          alt="Professional web development workspace with laptop and code editor"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,6%,0.75)] via-[hsl(222,47%,8%,0.85)] to-[hsl(222,47%,6%,0.95)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(221,83%,53%,0.08)] via-transparent to-[hsl(24,95%,53%,0.08)]" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-[hsl(221,83%,53%,0.15)] rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] bg-[hsl(24,95%,53%,0.12)] rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32 sm:py-40">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] mb-10 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">Professional Web Development Agency</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Professional Websites —
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-accent via-[hsl(30,95%,58%)] to-accent bg-clip-text text-transparent">
              Fast, Clean & Responsive
            </span>
            <span className="absolute -inset-1 bg-accent/20 blur-2xl rounded-full -z-10" />
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-14 animate-fade-in leading-relaxed font-light" style={{ animationDelay: "0.2s" }}>
          Business websites, online stores, coaching portals and custom dashboards — designed for growth and conversions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-accent text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ boxShadow: '0 8px 32px -8px hsl(24 95% 53% / 0.5)' }}
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-[hsl(20,95%,48%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-white/90 font-medium px-8 py-5 rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto mt-20 pt-10 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a href="#services" className="absolute bottom-10 left-1/2 animate-float group">
          <div className="flex flex-col items-center gap-3 text-white/40 group-hover:text-white/70 transition-colors duration-300">
            <span className="text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}