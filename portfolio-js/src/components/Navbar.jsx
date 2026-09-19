import { useState, useEffect } from "react";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#E8DDD0]"
          : "bg-[#FAF7F2]/60 backdrop-blur-sm border-b border-[#E8DDD0]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo — "ABU HURAIRAH" */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="no-underline flex items-center group transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#2D1B0E]">
              ABU <span className="gradient-text font-serif italic font-normal">HURAIRAH</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C] ml-1.5" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId || (sectionId === "skills" && activeSection === "about");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-xs uppercase tracking-widest no-underline transition-colors duration-200 relative py-1.5 ${
                    isActive ? "text-[#8B5E3C] font-bold" : "text-[#5C4033] hover:text-[#8B5E3C]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B5E3C] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/CV.pdf"
              download="Muhammad-Abu-Hurairah-CV"
              className="btn-brown text-xs px-5 py-2.5 rounded-lg shadow-sm"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2.5 bg-[#FFF8F0] border border-[#E8DDD0] rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#2D1B0E] transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#2D1B0E] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#2D1B0E] transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-[#E8DDD0] bg-[#FFF8F0] rounded-b-2xl px-4 shadow-lg mb-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-mono text-xs uppercase tracking-widest no-underline py-2 border-b border-[#E8DDD0]/50 ${
                      isActive ? "text-[#8B5E3C] font-bold" : "text-[#5C4033]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/CV.pdf"
                download="Muhammad-Abu-Hurairah-CV"
                className="btn-brown text-center py-3 mt-2"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
