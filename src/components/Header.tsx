import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services", id: "services" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Pricing", href: "#pricing", id: "pricing" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const sectionIds = ["hero", "services", "portfolio", "pricing", "testimonials", "contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/98 backdrop-blur-xl shadow-header py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={cn(
              "font-display font-extrabold text-xl sm:text-2xl tracking-tight transition-all duration-300",
              isScrolled 
                ? "text-primary group-hover:text-primary-dark" 
                : "text-primary-foreground group-hover:text-accent"
            )}>
              FAHAD WEB SERVICE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg",
                  isScrolled
                    ? activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    : activeSection === link.id
                      ? "text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all",
                    isScrolled ? "bg-primary" : "bg-accent"
                  )} />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 btn-accent text-sm px-6 py-2.5 hover:scale-105"
            >
              Start Project
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-all duration-300",
              isScrolled 
                ? "text-foreground hover:bg-primary/10" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-3 px-4 rounded-xl font-medium transition-all duration-300",
                  isScrolled
                    ? activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                    : activeSection === link.id
                      ? "text-accent bg-accent/10"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-accent text-center py-3 mt-2"
            >
              Start Project
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
