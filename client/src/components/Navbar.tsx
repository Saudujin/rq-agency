import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <img 
            src="/images/logo.svg" 
            alt="RQ Agency" 
            className="h-10 w-auto invert brightness-0 filter" 
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <Button 
            variant="default" 
            className="rounded-none bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6"
            onClick={() => scrollToSection("#contact")}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-3xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
