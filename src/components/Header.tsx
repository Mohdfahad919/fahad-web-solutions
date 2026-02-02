import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Website Types", href: "/#website-types" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "glass-header py-2.5 shadow-header"
          : "bg-transparent py-4"
      )}
    >
      <div className="w-full px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-gradient-blue flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base sm:text-lg">F</span>
            </div>
            <span className="font-display font-bold text-base sm:text-lg text-foreground tracking-tight hidden sm:block">
              Fahad <span className="text-primary">WebService</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative px-4 py-2.5 font-medium text-sm transition-all duration-300 rounded-xl",
                  isActiveLink(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                )}
              >
                {link.name}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9076669103"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 9076669103</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-surface-elevated transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-1 glass-card p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-3 px-4 rounded-xl font-medium transition-all duration-300",
                  isActiveLink(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <Link
                to="/contact"
                className="btn-primary w-full text-center block text-sm py-3"
              >
                Book a Free Call
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
