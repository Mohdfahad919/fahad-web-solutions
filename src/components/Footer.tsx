import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Website Design",
  "UI/UX Optimization",
  "E-commerce Websites",
  "SEO & Performance",
  "App Development",
  "Maintenance & Support",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-primary text-white">
      {/* Subtle top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 pb-10 border-b border-white/8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-sans font-semibold text-sm text-white">
                  Fahad <span className="text-accent">WebService</span>
                </span>
              </Link>
              <p className="text-white/50 leading-relaxed text-sm max-w-xs mb-5">
                Premium digital agency crafting high-converting websites for ambitious businesses.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/9076669103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-white/50 hover:text-accent hover:bg-white/10 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="mailto:fahadshaikh9076669103@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-white/50 hover:text-accent hover:bg-white/10 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Services
              </h4>
              <nav className="flex flex-col gap-2.5">
                {services.map((service) => (
                  <span key={service} className="text-white/50 text-sm">
                    {service}
                  </span>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a href="tel:9076669103" className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors">
                  <Phone className="w-3.5 h-3.5 text-accent/70" />
                  <span className="text-sm">+91 9076669103</span>
                </a>
                <a href="mailto:fahadshaikh9076669103@gmail.com" className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors">
                  <Mail className="w-3.5 h-3.5 text-accent/70" />
                  <span className="text-sm break-all">fahadshaikh9076669103@gmail.com</span>
                </a>
                <div className="flex items-center gap-2.5 text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-accent/70" />
                  <span className="text-sm">India</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/9076669103"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-medium px-4 py-2 rounded-lg mt-5 transition-all duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-white/40 text-xs">
              © 2025 Fahad WebService. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/40 hover:text-accent transition-colors text-xs"
            >
              <span>Back to top</span>
              <span className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-200">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
