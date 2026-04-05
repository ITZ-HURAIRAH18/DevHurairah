import { useState } from "react";

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      number: "01",
      title: "FinScope",
      subtitle: "Real-Time Analytics Dashboard",
      tech: "Next.js, TypeScript, Redux, Prisma, PostgreSQL, WebSocket",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard",
      live: "https://finscope-hub.vercel.app/",
      video: "/videos/finscope.mp4",
    },
    {
      number: "02",
      title: "DonorHub",
      subtitle: "Charity & Donation Platform",
      tech: "React, Node.js, MongoDB, Express, Redux, Tailwind",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/Saylani_hackton",
      live: "https://donor-hub-eta.vercel.app/",
      video: "/videos/donorhub.mp4",
    },
    {
      number: "03",
      title: "HireLens",
      subtitle: "Intelligent Resume Intelligence",
      tech: "React, FastAPI, LangGraph, Gemini API, AI Systems",
      type: "AI/ML",
      github: "https://github.com/ITZ-HURAIRAH18/HireLens",
      live: "https://hire-lensz.vercel.app/",
      video: "/videos/hirelens.mp4",
    },
    {
      number: "04",
      title: "NexTrack Inventory Desktop",
      subtitle: "Desktop Inventory Management",
      tech: "Electron, React, Vite, Tailwind CSS, Node.js, Express, MongoDB",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/NexTrack_Inventory_Desktop",
      live: null,
      video: null,
    },
    {
      number: "05",
      title: "LoanVerse",
      subtitle: "Loan Management System",
      tech: "Django, React, Vite, Tailwind, REST API, SQLite",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/LoanVerse",
      live: null,
      video: null,
    },
    {
      number: "06",
      title: "NexGen",
      subtitle: "Meeting Scheduling Platform",
      tech: "React, Node.js, MongoDB, Socket.io, WebRTC, Express",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/NexGen_Meeting_Scheduler",
      live: null,
      video: null,
    },
    {
      number: "07",
      title: "Flowventory",
      subtitle: "Smart Inventory & Order Management",
      tech: "Laravel, Vue.js, MySQL, Sanctum, Vite, Composition API",
      type: "Full-Stack",
      github: "https://github.com/ITZ-HURAIRAH18/Flowventory",
      live: null,
      video: null,
    },
    {
      number: "08",
      title: "HealthWise AI",
      subtitle: "Medical Chatbot",
      tech: "React, Tailwind, Google Gemini API, Lucide Icons",
      type: "AI/ML",
      github: "https://github.com/ITZ-HURAIRAH18/HealthWise_AI",
      live: null,
      video: null,
    },
    {
      number: "09",
      title: "Excel-Based Quiz App",
      subtitle: "Interactive Quiz Application",
      tech: "HTML, CSS, JavaScript, Bootstrap, SheetJS, Web3Forms",
      type: "Frontend",
      github: "https://github.com/ITZ-HURAIRAH18/Excel_Quiz_App",
      live: null,
      video: null,
    },
    {
      number: "10",
      title: "ERA",
      subtitle: "Smart Wardrobe Manager",
      tech: "Django, Python, Bootstrap, SQLite, HTML/CSS",
      type: "Backend",
      github: "https://github.com/ITZ-HURAIRAH18/ERA_Wardrobe_Manager",
      live: null,
      video: null,
    },
  ];

  const toggleVideo = (number) => {
    setActiveVideo(activeVideo === number ? null : number);
  };

  return (
    <section id="projects" className="section-border">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row border-b border-border">
          <div className="w-full md:w-1/2 px-6 lg:px-12 py-12 border-b md:border-b-0 md:border-r border-border">
            <h2 className="font-serif text-4xl lg:text-5xl font-light italic text-espresso">
              Selected Projects
            </h2>
          </div>
          <div className="w-full md:w-1/2 px-6 lg:px-12 py-12">
            <p className="font-sans text-base font-light text-muted leading-relaxed">
              A curated list of applications I&apos;ve built — from real-time dashboards
              to AI-powered tools. Each project represents a unique challenge solved
              with clean architecture and modern technologies.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <div key={project.number}>
              <a
                href={project.live || project.github || "#"}
                target={project.live || project.github ? "_blank" : undefined}
                rel={project.live || project.github ? "noopener noreferrer" : undefined}
                className="project-row flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 px-6 lg:px-12 py-8 lg:py-10 no-underline text-espresso border-b border-border"
                onClick={(e) => {
                  if (!project.live && !project.github) {
                    e.preventDefault();
                  }
                }}
              >
                {/* Left: Number */}
                <div className="font-mono text-mono-sm text-muted w-8 flex-shrink-0">
                  {project.number}
                </div>

                {/* Center: Title + Tech Stack */}
                <div className="flex-1 md:px-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light text-espresso">
                      {project.title}
                    </h3>
                    <span className="font-mono text-mono-tiny uppercase tracking-wider text-copper bg-copper/10 px-2 py-0.5">
                      {project.type}
                    </span>
                  </div>
                  <p className="font-serif text-base italic text-muted mb-2">
                    {project.subtitle}
                  </p>
                  <p className="font-mono text-mono-xs text-muted/70">
                    {project.tech}
                  </p>
                </div>

                {/* Right: Arrow */}
                <div className="arrow-icon text-2xl text-copper mt-2 md:mt-0">
                  →
                </div>
              </a>

              {/* Action Links Row with | dividers */}
              <div className="px-6 lg:px-12 py-4 border-b border-border">
                <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-2">
                  {/* Preview Video Button */}
                  {project.video && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleVideo(project.number);
                      }}
                      className="action-link font-mono uppercase text-copper hover:opacity-80 transition-opacity"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.12em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      {activeVideo === project.number ? "▪ CLOSE VIDEO" : "▶ WATCH VIDEO"}
                    </button>
                  )}

                  {/* Divider */}
                  {project.video && (project.github || project.live) && (
                    <span className="text-muted/40 text-sm select-none">|</span>
                  )}

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link font-mono uppercase text-copper hover:opacity-80 transition-opacity no-underline"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {/* Divider */}
                  {project.github && project.live && (
                    <span className="text-muted/40 text-sm select-none">|</span>
                  )}

                  {/* Live Site Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link font-mono uppercase text-copper hover:opacity-80 transition-opacity no-underline"
                      style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Site ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Inline Video Preview with max-height transition */}
              <div
                className="video-container px-6 lg:px-12"
                style={{
                  maxHeight: activeVideo === project.number ? '320px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  opacity: activeVideo === project.number ? 1 : 0,
                }}
              >
                {project.video && activeVideo === project.number && (
                  <div className="pb-6" style={{ background: '#1C1007', padding: '1rem' }}>
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      className="w-full"
                      style={{ background: '#1C1007', display: 'block', maxHeight: '300px' }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
