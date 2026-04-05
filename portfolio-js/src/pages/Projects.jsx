import { useState, useEffect, useCallback } from "react";

const DemoModal = ({ videoSrc, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(28,16,7,0.92)",
        zIndex: 999999,
        overflow: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          maxWidth: "960px",
          animation: "modalFadeIn 0.3s ease forwards",
          zIndex: 1000000,
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-44px",
            right: "4px",
            background: "none",
            border: "1px solid rgba(247,243,236,0.2)",
            color: "#F7F3EC",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            cursor: "pointer",
            padding: "6px 14px",
            borderRadius: "4px",
            transition: "background 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "rgba(247,243,236,0.1)")
          }
          onMouseLeave={(e) => (e.target.style.background = "none")}
        >
          ✕ CLOSE
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          style={{
            width: "100%",
            borderRadius: "8px",
            display: "block",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        />
      </div>
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
      description:
        "A state-of-the-art multi-branch financial analytics platform with real-time stock and cryptocurrency tracking, interactive charts, and portfolio management.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      type: "Full-Stack",
      image: "/assets/finscope.png",
      github:
        "https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard",
      live: "https://finscope-hub.vercel.app/",
      video: "/assets/videos/finscope.mp4",
      urlPath: "projects/finscope-dashboard",
    },
    {
      title: "DonorHub",
      subtitle: "Charity & Donation Platform",
      description:
        "A comprehensive donation management system with campaign tracking, donor analytics, and seamless payment integration for charitable organizations.",
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
      description:
        "An AI-powered resume screening tool that uses LangGraph and FastAPI to parse, score, and rank candidates with intelligent keyword matching.",
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
      description:
        "A cross-platform desktop application for inventory tracking with barcode scanning, stock alerts, and comprehensive reporting dashboards.",
      tech: ["Electron", "React", "Tailwind CSS"],
      type: "Full-Stack",
      image: "/assets/nextrack.png",
      github: "https://github.com/ITZ-HURAIRAH18/NexTrack_Inventory_Desktop",
      live: null,
      video: "/assets/videos/nextrack.mp4",
      urlPath: "projects/nextrack-desktop",
    },
    {
      title: "LoanVerse",
      subtitle: "Loan Management System",
      description:
        "A robust loan management platform with automated payment tracking, interest calculations, borrower profiles, and financial reporting.",
      tech: ["Django", "React", "SQLite"],
      type: "Backend",
      image: "/assets/loanverse.png",
      github: "https://github.com/ITZ-HURAIRAH18/LoanVerse",
      live: null,
      video: "/assets/videos/loanverse.mp4",
      urlPath: "projects/loanverse-system",
    },
    {
      title: "NexGen",
      subtitle: "Meeting Scheduling Platform",
      description:
        "A real-time meeting scheduler with video conferencing integration, calendar sync, automated reminders, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io"],
      type: "Full-Stack",
      image: "/assets/nexgen.png",
      github: "https://github.com/ITZ-HURAIRAH18/Schedule_Ease",
      live: null,
      video: "/assets/videos/nexgen.mp4",
      urlPath: "projects/nexgen-scheduler",
    },
    {
      title: "Flowventory",
      subtitle: "Smart Inventory & Order Management",
      description:
        "A state-of-the-art multi-branch inventory and order management solution with real-time stock tracking, role-based access, and automated reporting.",
      tech: ["Laravel", "Vue.js", "MySQL"],
      type: "Full-Stack",
      image: "/assets/flowventory.png",
      github: "https://github.com/ITZ-HURAIRAH18/Flowventory",
      live: null,
      video: "/assets/videos/flowventory.mp4",
      urlPath: "projects/flowventory-inventory",
    },
    {
      title: "HealthWise AI",
      subtitle: "Medical Chatbot",
      description:
        "An AI-powered medical chatbot that provides health assessments, symptom analysis, and wellness recommendations using the Gemini API.",
      tech: ["React", "Gemini API", "Tailwind"],
      type: "AI/ML",
      image: "/assets/healthwise.png",
      github: "https://github.com/ITZ-HURAIRAH18/HealthWise-AI",
      live: null,
      video: "/assets/videos/healthwise.mp4",
      urlPath: "projects/healthwise-ai",
    },
    {
      title: "Excel Quiz App",
      subtitle: "Interactive Quiz Application",
      description:
        "An interactive quiz application that reads questions from Excel sheets, tracks scores, and provides real-time feedback with a clean UI.",
      tech: ["HTML", "JavaScript", "SheetJS"],
      type: "Frontend",
      image: "/assets/quiz.png",
      github: "https://github.com/ITZ-HURAIRAH18/Excel-Based-Quiz-App",
      live: null,
      video: "/assets/videos/quiz.mp4",
      urlPath: "projects/excel-quiz",
    },
    {
      title: "ERA",
      subtitle: "Smart Wardrobe Manager",
      description:
        "A digital wardrobe organizer with outfit suggestions, seasonal recommendations, and clothing inventory management powered by Django.",
      tech: ["Django", "Python", "SQLite"],
      type: "Backend",
      image: "/assets/era.png",
      github: "https://github.com/ITZ-HURAIRAH18/ERA--Smart-Wardrobe-Manager",
      live: null,
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

  // Re-trigger reveal animations when filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".proj-card.reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

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
        <div className="flex items-center gap-1 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
              style={{
                transition: "all 0.2s ease",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Card Grid with smooth transition */}
        <div className="proj-grid" key={activeFilter}>
          {filteredProjects.map((project) => (
            <div key={project.title} className="proj-card reveal">
              {/* Browser Chrome Bar */}
              <div
                style={{
                  background: "#EDE8DF",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#E57373",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FFB74D",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#81C784",
                      display: "inline-block",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.58rem",
                    color: "#8A7560",
                    letterSpacing: "0.04em",
                  }}
                >
                  {project.urlPath}
                </span>
                <span style={{ width: "40px" }} />
              </div>

              {/* Project Screenshot */}
              <div className="proj-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded");
                  }}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.5s ease",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:\'Cormorant Garamond\',serif;font-size:1.2rem;color:#A0714F;font-style:italic;">' +
                      project.title +
                      "</div>";
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.25rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Name + Type Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.4rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#1C1007",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      color: "#A0714F",
                      background: "rgba(160,113,79,0.12)",
                      padding: "2px 8px",
                    }}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.82rem",
                    fontStyle: "italic",
                    color: "#8A7560",
                    marginBottom: "0.6rem",
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                    color: "#8A7560",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    marginBottom: "0.8rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1rem",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#4A2E1A",
                        background: "rgba(28,16,7,0.06)",
                        border: "1px solid rgba(28,16,7,0.1)",
                        borderRadius: "4px",
                        padding: "3px 8px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderTop: "1px solid rgba(28,16,7,0.08)",
                  display: "flex",
                  gap: "0.6rem",
                  marginTop: "auto",
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                    style={{ textDecoration: "none" }}
                  >
                    CODE ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-btn"
                    style={{ textDecoration: "none" }}
                  >
                    LIVE ↗
                  </a>
                )}
                {project.video && (
                  <button
                    className="card-btn demo"
                    onClick={() => setModalVideo(project.video)}
                  >
                    ▶ DEMO
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {modalVideo && (
        <DemoModal videoSrc={modalVideo} onClose={handleModalClose} />
      )}
    </section>
  );
};

export default Projects;
