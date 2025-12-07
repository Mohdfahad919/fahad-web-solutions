import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-12 relative">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-primary-foreground/10">
          {/* Logo */}
          <a href="#" className="font-display font-extrabold text-2xl text-primary-foreground">
            FAHAD WEB SERVICE
          </a>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Services", "Portfolio", "Pricing", "Testimonials", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-primary-foreground/60 text-sm">
            © 2025 Fahad Web Service — Professional Website Development & Digital Solutions.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
