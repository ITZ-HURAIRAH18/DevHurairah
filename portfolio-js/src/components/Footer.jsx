const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D1B0E] text-[#FFF8F0] py-12 px-6 lg:px-12 border-t border-[#8B5E3C]/20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Domain */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#home" className="font-heading font-bold text-xl tracking-tight text-[#FFF8F0]">
            ABU <span className="text-[#C49A6C] font-serif italic">HURAIRAH</span>
          </a>
          <p className="font-mono text-xs text-[#C49A6C]">
            abuhurairah.engineer
          </p>
        </div>

        {/* Center: Built by Attribution */}
        <div className="font-mono text-xs text-[#E8DDD0]/80 tracking-wider">
          Designed & Built by <strong className="text-[#C49A6C]">Abu Hurairah</strong>
        </div>

        {/* Right: Copyright & Socials */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/itz-hurairah18"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E8DDD0]/80 hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              GitHub ↗
            </a>
            <span className="text-[#8B5E3C]">•</span>
            <a
              href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#E8DDD0]/80 hover:text-[#C49A6C] transition-colors uppercase tracking-wider no-underline"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="font-mono text-[10px] text-[#E8DDD0]/50 uppercase tracking-widest">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
