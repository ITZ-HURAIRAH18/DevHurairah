import { useEffect } from "react";

const Experience = () => {
  const experiences = [
    {
      year: "2025",
      endYear: "2025",
      period: "Aug 2025 - Oct 2025",
      title: "Full Stack Developer",
      company: "NexAgen Solutions",
      description:
        "Developed and maintained high-performance web applications using the MERN stack, ensuring smooth frontend and backend integration. Built RESTful APIs and optimized database queries for scalability.",
      bullets: [
        "Built RESTful APIs serving 10k+ requests/day",
        "Reduced page load time by 40% via code splitting",
        "Led frontend migration from JS to TypeScript",
      ],
      tags: ["MERN", "REST APIs", "PostgreSQL"],
    },
    {
      year: "2024",
      endYear: "2025",
      period: "Aug 2024 - Jan 2025",
      title: "Django Developer",
      company: "Technsol",
      description:
        "Built and optimized modern web applications using Django REST Framework, React, Next.js, and Tailwind CSS. Focused on clean architecture and performance optimization.",
      bullets: [
        "Optimized web applications with Django REST Framework",
        "Built responsive UIs with React, Next.js, Tailwind CSS",
        "Implemented clean architecture and performance patterns",
      ],
      tags: ["Django", "React", "Next.js"],
    },
    {
      year: "2023",
      endYear: "PRESENT",
      period: "2023 - Present",
      title: "Full Stack / Mobile / Desktop Developer",
      company: "Independent Projects",
      description:
        "Architected and developed multiple cross-platform applications including web apps, mobile apps (React Native), desktop applications (Electron.js), financial platforms, AI-powered tools, and management systems. Focus on scalability, user experience, and clean code practices.",
      bullets: [
        "Architected cross-platform web, mobile, and desktop apps",
        "Built AI-powered tools, financial platforms, and management systems",
        "Focus on scalability, UX, and clean code practices",
      ],
      tags: ["React Native", "Electron.js", "FastAPI"],
    },
  ];

  // Scroll reveal for experience rows
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".exp-row").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between px-6 lg:px-12 xl:px-20 py-12 border-b border-border">
          <div>
            <span className="block font-mono text-mono-tiny text-copper uppercase tracking-wider mb-2">
              // EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light italic text-espresso">
              Work History
            </h2>
            <div
              className="exp-title-underline"
              style={{
                width: 0,
                height: "1px",
                background: "#A0714F",
                marginTop: "0.5rem",
                transition: "width 0.8s ease",
              }}
            />
          </div>
          <div className="font-mono text-mono-xs text-muted uppercase tracking-wider">
            1+ Years · 3 Companies
          </div>
        </div>

        {/* Experience Rows */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-row grid grid-cols-1 md:grid-cols-12"
              style={{
                transitionDelay: `${index * 0.12}s`,
              }}
            >
              {/* Column 1: Year */}
              <div className="md:col-span-2 px-6 lg:px-12 py-8 md:py-12 border-b md:border-b-0 flex flex-col justify-center year-col">
                <div
                  className="font-serif italic text-copper leading-none"
                  style={{
                    fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                    fontWeight: 300,
                  }}
                >
                  {exp.year}
                </div>
                <div
                  className="font-mono text-muted mt-2"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  → {exp.endYear}
                </div>
              </div>

              {/* Column 2: Title + Company */}
              <div className="md:col-span-4 px-6 lg:px-12 py-8 md:py-12 border-b md:border-b-0 md:border-r border-border">
                <h3
                  className="font-serif text-espresso leading-tight mb-2"
                  style={{ fontSize: "1.5rem", fontWeight: 600 }}
                >
                  {exp.title}
                </h3>
                <div
                  className="font-mono uppercase tracking-wider text-copper mb-1 flex items-center gap-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  {exp.endYear === "PRESENT" && (
                    <span className="pulse-dot" />
                  )}
                  {exp.company}
                </div>
                <div
                  className="font-mono italic text-muted mb-4"
                  style={{ fontSize: "0.62rem" }}
                >
                  {exp.period}
                </div>

                {/* Achievement bullets - appear on hover */}
                <div className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="font-sans text-muted leading-relaxed"
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        paddingLeft: "0.5rem",
                      }}
                    >
                      – {bullet}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Description + Tags */}
              <div className="md:col-span-6 px-6 lg:px-12 py-8 md:py-12">
                <p
                  className="font-sans font-light leading-relaxed mb-4"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    color: "rgba(28,16,7,0.65)",
                  }}
                >
                  {exp.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.6rem",
                        color: "#A0714F",
                        border: "1px solid rgba(160,113,79,0.25)",
                        background: "rgba(160,113,79,0.06)",
                        borderRadius: "3px",
                        padding: "2px 8px",
                      }}
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
