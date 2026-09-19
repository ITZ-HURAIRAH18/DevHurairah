const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D1B0E] text-[#FFF8F0] pt-10 pb-16 sm:py-10 px-6 lg:px-12 border-t border-[#8B5E3C]/30 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Row: Brand & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E8DDD0]/15">
          {/* Brand Logo & Domain */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <a href="#home" className="font-heading font-extrabold text-xl tracking-tight text-[#FFF8F0] no-underline">
              ABU <span className="gradient-text font-serif italic font-normal">HURAIRAH</span>
            </a>
            <p className="font-mono text-xs text-[#C49A6C] tracking-wider mt-0.5">
              abuhurairah.engineer
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <a
              href="https://github.com/itz-hurairah18"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E8DDD0] hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              GitHub ↗
            </a>
            <span className="text-[#8B5E3C] text-xs">•</span>
            <a
              href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E8DDD0] hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              LinkedIn ↗
            </a>
            <span className="text-[#8B5E3C] text-xs">•</span>
            <a
              href="https://wa.me/923116085400"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E8DDD0] hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              WhatsApp ↗
            </a>
            <span className="text-[#8B5E3C] text-xs">•</span>
            <a
              href="mailto:abuhurx@gmail.com"
              className="font-mono text-xs text-[#E8DDD0] hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-mono text-[11px] text-[#E8DDD0]/60">
          <p>© {currentYear} Abu Hurairah. All rights reserved.</p>
          <p className="text-[#C49A6C]/80">Designed & Built with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
