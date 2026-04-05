const Home = () => {
  const techStack = ["React", "Next.js", "Django", "FastAPI", "Node", "Express", "MongoDB", "PostgreSQL"];

  return (
    <section id="home" className="flex flex-col lg:flex-row px-6 lg:px-12 xl:px-20 py-12 lg:py-16">
      {/* Left Column (60%) */}
      <div className="w-full lg:w-3/5 flex flex-col justify-start pr-0 lg:pr-12 xl:pr-16" style={{ gap: '1.5rem' }}>
        {/* Editorial Name */}
        <h1 className="font-serif font-light text-espresso leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          <span className="block">Muhammad</span>
          <span className="block"><span className="italic text-copper">Abu</span> Hurairah</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-para font-serif text-xl lg:text-2xl xl:text-3xl italic text-muted font-light" style={{ margin: 0 }}>
          Engineer — Architect — Builder
        </p>

        {/* Description Paragraph */}
        <p className="hero-para font-sans text-base lg:text-lg font-light text-espresso/80 leading-relaxed max-w-xl" style={{ margin: 0 }}>
          Full-stack engineer building scalable applications across web, mobile, and desktop platforms.
          Expertise in MERN, Django, React Native, Electron.js, and cloud infrastructure.
        </p>

        {/* CTA Buttons — always in document flow, never in flex-grow spacer */}
        <div className="hero-actions flex flex-wrap gap-4 lg:gap-6" style={{ marginTop: '1.2rem' }}>
          <a href="#projects" className="btn-solid">
            View Work ↗
          </a>
          <a href="/CV.pdf" download className="btn-ghost">
            Download CV
          </a>
        </div>
      </div>

      {/* Right Column (40%) — Photo + horizontal tech row */}
      <div className="w-full lg:w-2/5 flex flex-col mt-8 lg:mt-0">
        {/* Professional Photo Layout */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/profile-photo.jpg"
            alt="Muhammad Abu Hurairah — Full-Stack Engineer"
            className="w-full h-full object-cover object-[center_top]"
            loading="eager"
            decoding="async"
          />
          {/* Stronger gradient overlay for text readability */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5"
            style={{ background: 'linear-gradient(to top, rgba(28,16,7,0.85) 0%, rgba(28,16,7,0.5) 40%, transparent 100%)' }}
          />
          {/* Name + title overlay on gradient */}
          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
            <div className="font-serif text-xl lg:text-2xl italic text-white font-light leading-tight" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              Muhammad <span className="text-copper">Abu</span> Hurairah
            </div>
            <div className="font-mono text-mono-xs uppercase tracking-wider text-copper mt-1" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
              Full-Stack Engineer
            </div>
          </div>
        </div>

        {/* Horizontal Tech Stack Row */}
        <div className="flex items-stretch overflow-x-auto border-t border-border bg-card" style={{ scrollbarWidth: 'none' }}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2.5 flex-shrink-0"
              style={index < techStack.length - 1 ? { borderRight: '1px solid rgba(28,16,7,0.10)' } : {}}
            >
              <span className="font-mono text-mono-tiny uppercase tracking-wider text-muted whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
