import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "glass-header py-4 shadow-header"
          : "bg-transparent py-6"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight hidden sm:block">
              Fahad <span className="text-accent">WebService</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative px-5 py-2.5 font-display text-base leading-relaxed transition-all duration-300 rounded-lg",
                  isActiveLink(link.href)
                    ? "text-accent font-semibold"
                    : "text-foreground/80 font-medium hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.name}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-base font-semibold inline-flex items-center gap-2 px-7 py-3"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-5 pb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-1 bg-card rounded-2xl p-5 border border-border shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-3.5 px-5 rounded-xl font-display text-base transition-all duration-300",
                  isActiveLink(link.href)
                    ? "text-accent font-semibold bg-accent/10"
                    : "text-foreground/80 font-medium hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-3 border-t border-border">
              <Link
                to="/contact"
                className="btn-primary w-full text-center block text-base font-semibold py-3.5"
              >
                Get Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
