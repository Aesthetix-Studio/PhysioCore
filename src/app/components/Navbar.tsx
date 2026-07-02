import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      <div className={`transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "bg-[#2C3831] text-white text-sm"}`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={13} strokeWidth={1.5} />
              <span>+91 98765 43210</span>
            </span>
            <span className="hidden sm:block">Mon–Sat: 8:00 AM – 7:00 PM</span>
          </div>
          <span className="hidden md:block">📍 Jubilee Hills, Hyderabad</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#2C3831] flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" fillOpacity="0.3"/>
              <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="white" fillOpacity="0.6"/>
              <path d="M7 17c1.1-1.26 2.75-2 5-2s3.9.74 5 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span className={`font-outfit text-lg font-700 tracking-tight transition-colors ${scrolled ? "text-[#2C3831]" : "text-white"}`}>
              Physio<span className="text-[#6B8E7C]">Core</span>
            </span>
            <p className={`text-[10px] tracking-widest uppercase font-inter transition-colors ${scrolled ? "text-gray-400" : "text-white/70"}`}>
              Rehabilitation Center
            </p>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-inter font-medium transition-colors relative group ${
                scrolled ? "text-gray-600 hover:text-[#2C3831]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 bg-[#6B8E7C] w-0 group-hover:w-full transition-all duration-200" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#2C3831] text-white px-5 py-2.5 rounded-xl text-sm font-inter font-medium hover:bg-[#1B231E] transition-colors shadow-sm"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-3 py-2.5 text-gray-700 font-inter font-medium rounded-lg hover:bg-[#EBF0EC] hover:text-[#2C3831] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-3 bg-[#2C3831] text-white px-5 py-3 rounded-xl font-inter font-medium hover:bg-[#1B231E] transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
