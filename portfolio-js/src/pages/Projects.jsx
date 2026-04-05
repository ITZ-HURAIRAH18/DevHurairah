import { useState, useEffect, useCallback } from "react";

const DemoModal = ({ videoSrc, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="demo-modal" onClick={onClose}>
      <button className="modal-close" onClick={onClose} aria-label="Close modal">
        ✕
      </button>
      <video
        controls
        autoPlay
        width="900px"
        className="modal-video"
        style={{ maxWidth: "90vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalVideo, setModalVideo] = useState(null);

  const projects = [
    {
      title: "FinScope",
      subtitle: "Real-Time Analytics Dashboard",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      type: "Full-Stack",
      image: "/assets/finscope.png",
      github: "https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard",
      live: "https://finscope-hub.vercel.app/",
      video: "/assets/videos/finscope.mp4",
      urlPath: "projects/finscope-dashboard",
    },
    {
      title: "DonorHub",
      subtitle: "Charity & Donation Platform",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Full-Stack",
      image: "/assets/donorhub.png",
      github: "https://github.com/ITZ-HURAIRAH18/Saylani_hackton",
      live: "https://donor-hub-eta.vercel.app/",
      video: "/assets/videos/donorhub.mp4",
      urlPath: "projects/donorhub-platform",
    },
    {
      title: "HireLens",
      subtitle: "Intelligent Resume Intelligence",
      tech: ["React", "FastAPI", "LangGraph"],
      type: "AI/ML",
      image: "/assets/hirelens.png",
      github: "https://github.com/ITZ-HURAIRAH18/HireLens",
      live: "https://hire-lensz.vercel.app/",
      video: "/assets/videos/hirelens.mp4",
      urlPath: "projects/hirelens-ai",
    },
    {
      title: "NexTrack",
      subtitle: "Desktop Inventory Management",
      tech: ["Electron", "React", "Tailwind CSS"],
      type: "Full-Stack",
      image: "/assets/nextrack.png",
      github: "https://github.com/ITZ-HURAIRAH18/NexTrack_Inventory_Desktop",
      live: "#",
      video: "/assets/videos/nextrack.mp4",
      urlPath: "projects/nextrack-desktop",
    },
    {
      title: "LoanVerse",
      subtitle: "Loan Management System",
      tech: ["Django", "React", "SQLite"],
      type: "Backend",
      image: "/assets/loanverse.png",
      github: "https://github.com/ITZ-HURAIRAH18/LoanVerse",
      live: "#",
      video: "/assets/videos/loanverse.mp4",
      urlPath: "projects/loanverse-system",
    },
    {
      title: "NexGen",
      subtitle: "Meeting Scheduling Platform",
      tech: ["React", "Node.js", "Socket.io"],
      type: "Full-Stack",
      image: "/assets/nexgen.png",
      github: "https://github.com/ITZ-HURAIRAH18/NexGen_Meeting_Scheduler",
      live: "#",
      video: "/assets/videos/nexgen.mp4",
      urlPath: "projects/nexgen-scheduler",
    },
    {
      title: "Flowventory",
      subtitle: "Smart Inventory & Order Management",
      tech: ["Laravel", "Vue.js", "MySQL"],
      type: "Full-Stack",
      image: "/assets/flowventory.png",
      github: "https://github.com/ITZ-HURAIRAH18/Flowventory",
      live: "#",
      video: "/assets/videos/flowventory.mp4",
      urlPath: "projects/flowventory-inventory",
    },
    {
      title: "HealthWise AI",
      subtitle: "Medical Chatbot",
      tech: ["React", "Gemini API", "Tailwind"],
      type: "AI/ML",
      image: "/assets/healthwise.png",
      github: "https://github.com/ITZ-HURAIRAH18/HealthWise_AI",
      live: "#",
      video: "/assets/videos/healthwise.mp4",
      urlPath: "projects/healthwise-ai",
    },
    {
      title: "Excel Quiz App",
      subtitle: "Interactive Quiz Application",
      tech: ["HTML", "JavaScript", "SheetJS"],
      type: "Frontend",
      image: "/assets/quiz.png",
      github: "https://github.com/ITZ-HURAIRAH18/Excel_Quiz_App",
      live: "#",
      video: "/assets/videos/quiz.mp4",
      urlPath: "projects/excel-quiz",
    },
    {
      title: "ERA",
      subtitle: "Smart Wardrobe Manager",
      tech: ["Django", "Python", "SQLite"],
      type: "Backend",
      image: "/assets/era.png",
      github: "https://github.com/ITZ-HURAIRAH18/ERA_Wardrobe_Manager",
      live: "#",
      video: "/assets/videos/era.mp4",
      urlPath: "projects/era-wardrobe",
    },
  ];

  const filters = ["All", "Full-Stack", "Frontend", "Backend", "AI/ML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const handleModalClose = useCallback(() => {
    setModalVideo(null);
  }, []);

  return (
    <section id="projects" className="section-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row border-b border-border mb-10">
          <div className="w-full md:w-1/2 py-8 border-b md:border-b-0 md:border-r border-border">
            <span className="font-mono text-mono-tiny uppercase tracking-wider text-copper block mb-2">
              // PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light italic text-espresso">
              Featured Projects
            </h2>
          </div>
          <div className="w-full md:w-1/2 py-8 md:pl-12">
            <p className="font-sans text-base font-light text-muted leading-relaxed">
              A curated selection of applications I&apos;ve built — from real-time
              dashboards to AI-powered tools. Each project represents a unique
              challenge solved with clean architecture and modern technologies.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="proj-grid">
          {filteredProjects.map((project) => (
            <div key={project.title} className="proj-card reveal">
              {/* Browser Chrome Bar */}
              <div className="browser-chrome">
                <div className="flex items-center gap-1.5">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#E57373",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FFB74D",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#81C784",
                      display: "inline-block",
                    }}
                  />
                </div>
                <span className="font-mono text-mono-tiny text-muted">
                  {project.urlPath}
                </span>
              </div>

              {/* Project Screenshot */}
              <img
                src={project.image}
                alt={project.title}
                className="proj-img"
                onError={(e) => {
                  // Fallback for missing images
                  e.target.style.display = "none";
                  e.target.parentElement.style.height = "200px";
                  e.target.parentElement.style.background = "#E8DED0";
                  e.target.parentElement.style.display = "flex";
                  e.target.parentElement.style.alignItems = "center";
                  e.target.parentElement.style.justifyContent = "center";
                  if (!e.target.parentElement.querySelector(".img-placeholder")) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "img-placeholder";
                    placeholder.style.cssText =
                      "font-family: 'Space Mono', monospace; font-size: 11px; color: #8A7560; text-transform: uppercase; letter-spacing: 0.08em;";
                    placeholder.textContent = "Screenshot Placeholder";
                    e.target.parentElement.appendChild(placeholder);
                  }
                }}
              />

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="font-serif text-2xl font-light text-espresso leading-tight"
                    style={{ fontSize: "1.3rem" }}
                  >
                    {project.title}
                  </h3>
                  <span className="font-mono text-mono-tiny uppercase tracking-wider text-copper bg-copper/10 px-2 py-0.5 whitespace-nowrap ml-2">
                    {project.type}
                  </span>
                </div>
                <p className="font-serif text-sm italic text-muted mb-3">
                  {project.subtitle}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-mono-tiny text-muted bg-espresso/5 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="h-px bg-border mb-4"
                  style={{ backgroundColor: "rgba(28,16,7,0.1)" }}
                />

                {/* Card Footer - Action Buttons */}
                <div className="flex items-center gap-2">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn no-underline"
                    >
                      CODE ↗
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn no-underline"
                    >
                      LIVE ↗
                    </a>
                  )}
                  {project.video && (
                    <button
                      className="card-btn"
                      onClick={() => setModalVideo(project.video)}
                    >
                      ▶ DEMO
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {modalVideo && <DemoModal videoSrc={modalVideo} onClose={handleModalClose} />}
    </section>
  );
};

export default Projects;
