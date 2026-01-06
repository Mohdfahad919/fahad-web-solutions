import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-16 relative">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-extrabold text-2xl text-white block mb-4">
              FAHAD WEB SERVICES
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Professional web development agency delivering modern, responsive, 
              and results-driven websites for businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:9076669103"
                className="text-white/60 hover:text-white transition-colors"
              >
                +91 9076669103
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <p>
                <span className="text-white/80">Phone:</span> +91 9076669103
              </p>
              <p>
                <span className="text-white/80">Email:</span> fahadshaikh9076669103@gmail.com
              </p>
              <p>
                <span className="text-white/80">Location:</span> India
              </p>
            </div>
            <a
              href="https://wa.me/9076669103"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-whatsapp/90 transition-colors text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-white/50 text-sm">
            © 2025 Fahad Web Services — Professional Website Development & Digital Solutions.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
