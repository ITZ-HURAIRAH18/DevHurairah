const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-espresso py-8 section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="font-mono text-mono-tiny text-page/60 uppercase tracking-wider">
            © {currentYear} Muhammad Abu Hurairah. All rights reserved.
          </div>

          {/* Right: Domain name */}
          <div className="font-serif text-xl italic text-copper">
            abuhurairah.engineer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
