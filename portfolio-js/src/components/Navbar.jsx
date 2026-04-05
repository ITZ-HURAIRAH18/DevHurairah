import { useState, useEffect } from "react";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Skills", href: "#skills" },
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
      className={`nav sticky top-0 z-50 bg-page/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isScrolled ? "scrolled shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — ALWAYS "M. Abu Hurairah" */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="no-underline nav-logo"
            style={{
              display: "flex",
              alignItems: "baseline",
              animation: "logoReveal 0.6s ease forwards",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                color: "#A0714F",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 600,
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              M.
            </span>
            <span
              style={{
                color: "#1C1007",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              &nbsp;Abu Hurairah
            </span>
            <sup
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.5rem",
                color: "#A0714F",
                verticalAlign: "super",
                marginLeft: "2px",
                lineHeight: 1,
              }}
            >
              ®
            </sup>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link font-mono text-mono-xs uppercase tracking-wider text-espresso no-underline relative inline-flex items-center gap-2 ${
                    isActive ? "active" : ""
                  }`}
                >
                  {link.label}
                  <span className="pulse-dot" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-espresso transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-espresso transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-espresso transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-mono text-mono-xs uppercase tracking-wider text-espresso no-underline py-2 ${
                      isActive ? "text-copper" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
