const Experience = () => {
  const experiences = [
    {
      year: "2025",
      period: "Aug 2025 - Oct 2025",
      title: "Full Stack Developer",
      company: "Nexagen Solutions",
      description:
        "Developed and maintained high-performance web applications using the MERN stack, ensuring smooth frontend and backend integration. Built RESTful APIs and optimized database queries for scalability.",
    },
    {
      year: "2024",
      period: "Aug 2024 - Jan 2025",
      title: "Django Developer",
      company: "Technsol",
      description:
        "Built and optimized modern web applications using Django REST Framework, React, Next.js, and Tailwind CSS. Focused on clean architecture and performance optimization.",
    },
    {
      year: "2023",
      period: "2023 - Present",
      title: "Full Stack / Mobile / Desktop Developer",
      company: "Independent Projects",
      description:
        "Architected and developed multiple cross-platform applications including web apps, mobile apps (React Native), desktop applications (Electron.js), financial platforms, AI-powered tools, and management systems. Focus on scalability, user experience, and clean code practices.",
    },
  ];

  return (
    <section id="experience" className="section-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with eyebrow + counter */}
        <div className="flex items-end justify-between px-6 lg:px-12 xl:px-20 py-12 border-b border-border">
          <div>
            <span className="block font-mono text-mono-tiny text-copper uppercase tracking-wider mb-2">
              // EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light italic text-espresso">
              Work History
            </h2>
          </div>
          <div className="font-mono text-mono-xs text-muted uppercase tracking-wider">
            3+ Years · 3 Companies
          </div>
        </div>

        {/* Experience Rows */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-row grid grid-cols-1 md:grid-cols-12 transition-colors duration-200"
            >
              {/* Column 1: Year — oversized decorative */}
              <div className="md:col-span-2 px-6 lg:px-12 py-8 md:py-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-center">
                <div
                  className="font-serif italic text-copper leading-none"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300 }}
                >
                  {exp.year}
                </div>
              </div>

              {/* Column 2: Title + Company — with hover copper left border */}
              <div
                className="md:col-span-4 px-6 lg:px-12 py-8 md:py-12 border-b md:border-b-0 md:border-r border-border transition-all duration-200"
                style={{ borderLeft: '3px solid transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = '#A0714F';
                  e.currentTarget.style.backgroundColor = 'rgba(160,113,79,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <h3 className="font-serif text-2xl font-light text-espresso mb-3">
                  {exp.title}
                </h3>
                <div
                  className="font-mono uppercase tracking-wider text-copper mb-1"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}
                >
                  {exp.company}
                </div>
                <div
                  className="font-mono italic text-muted"
                  style={{ fontSize: '0.65rem' }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Column 3: Description */}
              <div className="md:col-span-6 px-6 lg:px-12 py-8 md:py-12">
                <p className="font-sans text-base font-light text-espresso/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
