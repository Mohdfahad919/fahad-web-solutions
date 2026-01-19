import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "UI/UX Design",
  "Website Development",
  "E-commerce Websites",
  "Landing Pages",
  "Branding & Logo",
  "Maintenance & Support",
];

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/9076669103" },
  { name: "Email", href: "mailto:fahadshaikh9076669103@gmail.com" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative border-t border-border/50">
        <div className="section-container py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 pb-12 border-b border-border/50">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-gradient-blue flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">
                  Fahad <span className="text-primary">WebService</span>
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Premium web development agency crafting beautiful, high-converting websites for ambitious businesses.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">
                Services
              </h4>
              <nav className="flex flex-col gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="text-muted-foreground text-sm"
                  >
                    {service}
                  </span>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-5">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a 
                  href="tel:9076669103"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">+91 9076669103</span>
                </a>
                <a 
                  href="mailto:fahadshaikh9076669103@gmail.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm break-all">fahadshaikh9076669103@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">India</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/9076669103"
                className="inline-flex items-center gap-2 btn-primary text-sm px-5 py-2.5 mt-6"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left text-muted-foreground text-sm">
              © 2025 Fahad WebService. All rights reserved.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <span>Back to top</span>
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
