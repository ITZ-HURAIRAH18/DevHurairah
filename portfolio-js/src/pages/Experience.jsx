const Experience = () => {
  const experiences = [
    {
      period: "Aug 2025 – Oct 2025",
      title: "Full Stack Developer",
      company: "NexAgen Solutions",
      location: "Onsite",
      description:
        "Engineered scalable MERN stack web applications, developing REST APIs and optimizing database queries for multi-tenant systems.",
      bullets: [
        "Architected RESTful endpoints handling high query loads seamlessly.",
        "Reduced client-side initial load times by 40% via code splitting and asset optimization.",
        "Led frontend codebase migration from JavaScript to TypeScript for type safety.",
      ],
      tags: ["React", "Node.js", "TypeScript", "REST APIs", "PostgreSQL"],
    },
    {
      period: "Aug 2024 – Jan 2025",
      title: "Django & Full-Stack Developer",
      company: "Technsol",
      location: "Hybrid",
      description:
        "Built web applications with Django REST Framework, React, and Next.js, focusing on clean architecture and API performance.",
      bullets: [
        "Developed scalable API endpoints using Django REST Framework.",
        "Crafted responsive dashboard interfaces with React, Next.js, and Tailwind CSS.",
        "Implemented secure JWT authentication and role-based access control.",
      ],
      tags: ["Django", "Django REST", "React", "Next.js", "Tailwind CSS"],
    },
    {
      period: "2023 – Present",
      title: "Full Stack & AI Automation Engineer",
      company: "Independent Projects & Client Solutions",
      location: "Global / Remote",
      description:
        "Architected applications across Web, Desktop (Electron), and Mobile (React Native). Designed n8n AI agent automation pipelines.",
      bullets: [
        "Built AI agent workflows & n8n automations saving clients 100+ hours monthly.",
        "Developed multi-branch ERP platforms, desktop inventory management tools, and analytics dashboards.",
        "Delivered end-to-end software solutions for international clients.",
      ],
      tags: ["n8n Workflows", "LangChain / LLMs", "Python", "FastAPI", "React Native", "Electron.js"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8DDD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Clean Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">
              Career Journey
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#2D1B0E] tracking-tight">
            Work <span className="gradient-text font-serif italic font-normal">Experience</span>
          </h2>
        </div>

        {/* Sleek Timeline List */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="warm-card p-4 sm:p-6 rounded-xl border border-[#E8DDD0] hover:border-[#8B5E3C] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 pb-3 border-b border-[#E8DDD0]">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2D1B0E]">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs font-bold text-[#8B5E3C] uppercase tracking-wider mt-0.5">
                    @ {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#8B5E3C] bg-[#8B5E3C]/10 border border-[#8B5E3C]/20 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md">
                    {exp.period}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#8A7560]">
                    ({exp.location})
                  </span>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 space-y-2.5 sm:space-y-3">
                <p className="font-sans text-xs sm:text-sm text-[#5C4033] leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1 font-sans text-xs text-[#5C4033] leading-relaxed pl-4 list-disc">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="pt-2 sm:pt-3 flex flex-wrap gap-1 border-t border-[#E8DDD0]/60">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 bg-[#FAF7F2] text-[#2D1B0E] border border-[#E8DDD0] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
