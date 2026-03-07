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
          ? "bg-primary py-[14px] shadow-[0_1px_3px_0_rgba(0,0,0,0.3),0_1px_2px_-1px_rgba(0,0,0,0.2)] border-b border-white/[0.06]"
          : "bg-primary py-[18px] border-b border-white/[0.08]"
      )}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_2px_8px_-2px_hsl(var(--accent)/0.4)]">
              <span className="text-white font-bold text-base">F</span>
            </div>
            <span className="font-sans font-semibold text-[15px] text-white tracking-tight hidden sm:block">
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
                  "relative px-5 py-2.5 text-base font-medium tracking-[0.01em] transition-all duration-200 rounded-md",
                  isActiveLink(link.href)
                    ? "text-white font-semibold"
                    : "text-[#CBD5E1] hover:text-white"
                )}
              >
                {link.name}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[1px] rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[10px] transition-all duration-200 hover:-translate-y-px shadow-[0_2px_8px_-2px_hsl(var(--accent)/0.35)]"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-1 bg-primary-light rounded-xl p-4 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-3 px-4 rounded-lg text-sm transition-all duration-200",
                  isActiveLink(link.href)
                    ? "text-white font-medium bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-hover text-white w-full text-center block text-sm font-medium py-3 rounded-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
