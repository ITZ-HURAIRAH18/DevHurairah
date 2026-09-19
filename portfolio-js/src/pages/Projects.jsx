import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import healthAppointmentImage from "../assets/healthappoint.png";
import healthAppointmentVideo from "../assets/healthappoint.mp4";

const DemoModal = ({ videoSrc, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-screen h-screen bg-[#2D1B0E]/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-[#000] border border-[#E8DDD0]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full max-h-[85vh] object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>,
    document.body
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [modalVideo, setModalVideo] = useState(null);

  const projects = [
    {
      title: "BranchOS",
      subtitle: "Multi-Location ERP & Inventory System",
      description:
        "Enterprise ERP platform with atomic transaction handling, RBAC, and multi-agent AI chatbots for inventory intelligence.",
      tech: ["CodeIgniter 4", "Vue.js 3", "MySQL", "LangChain"],
      type: ["FULL-STACK", "AI / AGENTS"],
      image: "/assets/BranchOS.png",
      github: "https://github.com/itz-hurairah18",
      live: null,
      video: "/assets/videos/BranchOS.mp4",
      urlPath: "projects/branchos-erp",
    },
    {
      title: "UniToolKit",
      subtitle: "Developer & Student Utility Suite",
      description:
        "All-in-one utility hub featuring Base64 helpers, formatters, image tools, PDF converters, and command palette.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "FRONTEND",
      image: "/assets/HurairahTools.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://hurairahtools.vercel.app/",
      video: "/assets/videos/HurairahTools.mp4",
      urlPath: "projects/unitoolkit-utility-suite",
    },
    {
      title: "SupportAI",
      subtitle: "Autonomous Telegram Customer Agent",
      description:
        "Multi-agent Telegram AI bot automating customer support routing, intelligent context resolution, and workflow actions.",
      tech: ["Node.js", "Telegram API", "OpenAI", "AI Agents"],
      type: ["AUTOMATION", "AI / AGENTS"],
      image: "/assets/supportai.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://supportai-telegram-bot.vercel.app/",
      video: null,
      urlPath: "projects/supportai-bot",
    },
    {
      title: "FinScope",
      subtitle: "Real-Time Stock & Crypto Analytics",
      description:
        "Financial dashboard for real-time asset tracking, portfolio management, interactive charts, and branch analytics.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      type: "FULL-STACK",
      image: "/assets/finscope.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://finscope-hub.vercel.app/",
      video: "/assets/videos/finscope.mp4",
      urlPath: "projects/finscope-dashboard",
    },
    {
      title: "DonorHub",
      subtitle: "Charity & Campaign Management Platform",
      description:
        "Donation management portal with campaign analytics, transparent goal tracking, and secure payment workflow.",
      tech: ["React", "Node.js", "MongoDB"],
      type: "FULL-STACK",
      image: "/assets/donorhub.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://donor-hub-eta.vercel.app/",
      video: "/assets/videos/donorhub.mp4",
      urlPath: "projects/donorhub-platform",
    },
    {
      title: "HireLens AI",
      subtitle: "Intelligent Candidate Screening Engine",
      description:
        "AI resume parser using LangGraph & FastAPI to score, rank, and extract talent insights automatically.",
      tech: ["React", "FastAPI", "LangGraph"],
      type: "AI / AGENTS",
      image: "/assets/hirelens.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://hire-lensz.vercel.app/",
      video: "/assets/videos/hirelens.mp4",
      urlPath: "projects/hirelens-ai",
    },
    {
      title: "Healthcare Intelligence",
      subtitle: "Clinical Operations Platform",
      description:
        "Secure healthcare platform for clinical appointments, doctor schedules, and audit-logged operations.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      type: "FULL-STACK",
      image: healthAppointmentImage,
      github: "https://github.com/itz-hurairah18",
      live: "https://healthcare-intelligence.vercel.app/",
      video: healthAppointmentVideo,
      urlPath: "projects/healthcare-appointment-intelligence",
    },
    {
      title: "NexTrack",
      subtitle: "Cross-Platform Desktop Inventory System",
      description:
        "Desktop barcode and stock tracking solution with real-time alerts, SQLite offline storage, and reports.",
      tech: ["Electron", "React", "Tailwind CSS"],
      type: "FULL-STACK",
      image: "/assets/nextrack.png",
      github: "https://github.com/itz-hurairah18",
      live: null,
      video: "/assets/videos/nextrack.mp4",
      urlPath: "projects/nextrack-desktop",
    },
    {
      title: "HealthWise AI",
      subtitle: "Symptom Assessment & Health Bot",
      description:
        "Medical AI assistant providing preliminary symptom analysis, health tips, and Gemini API integration.",
      tech: ["React", "Gemini API", "Tailwind"],
      type: "AI / AGENTS",
      image: "/assets/Health.png",
      github: "https://github.com/itz-hurairah18",
      live: "https://health-wise-ai-chatbot.vercel.app/",
      video: null,
      urlPath: "projects/healthwise-ai",
    },
  ];

  const filters = ["ALL", "FULL-STACK", "FRONTEND", "AI / AGENTS", "AUTOMATION"];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => {
          if (Array.isArray(p.type)) {
            return p.type.includes(activeFilter);
          }
          return p.type === activeFilter;
        });

  const handleModalClose = useCallback(() => {
    setModalVideo(null);
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading with Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider">
                Selected Work
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#2D1B0E] tracking-tight">
              Featured <span className="gradient-text font-serif italic font-normal">Projects</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#8B5E3C] rounded-full mt-1.5" />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[11px] sm:text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-200 uppercase tracking-wider font-semibold cursor-pointer border whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#8B5E3C] text-white border-[#8B5E3C] shadow-sm"
                    : "bg-[#FFF8F0] text-[#5C4033] border-[#E8DDD0] hover:border-[#8B5E3C]/50 hover:text-[#8B5E3C]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="warm-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-[#E8DDD0]"
            >
              <div>
                {/* Browser bar header */}
                <div className="bg-[#FAF7F2] px-3.5 py-2 border-b border-[#E8DDD0] flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
                    <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
                    <span className="w-2 h-2 rounded-full bg-[#98C379]" />
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#8A7560] truncate max-w-[160px] sm:max-w-[180px]">
                    {project.urlPath}
                  </span>
                </div>

                {/* Screenshot image */}
                <div className="relative h-40 sm:h-52 bg-[#120d08] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2D1B0E] group-hover:text-[#8B5E3C] transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider font-semibold whitespace-nowrap">
                      {Array.isArray(project.type) ? project.type[0] : project.type}
                    </span>
                  </div>

                  <p className="font-mono text-xs italic text-[#8B5E3C] mb-2 sm:mb-3">
                    {project.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#5C4033] leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] text-[#2D1B0E] border border-[#E8DDD0] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions — Sleek, single-line buttons */}
              <div className="p-3.5 sm:p-4 bg-[#FAF7F2]/60 border-t border-[#E8DDD0] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 w-full">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#8B5E3C] hover:bg-[#764D2E] text-white font-sans text-xs font-semibold rounded-lg shadow-sm whitespace-nowrap transition-all duration-200"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => setModalVideo(project.video)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-transparent hover:bg-[#8B5E3C]/10 text-[#8B5E3C] border border-[#8B5E3C] font-sans text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer"
                    >
                      Watch Demo ↗
                    </button>
                  )}
                  {project.github && !project.live && !project.video && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-transparent hover:bg-[#8B5E3C]/10 text-[#8B5E3C] border border-[#8B5E3C] font-sans text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200"
                    >
                      GitHub Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://github.com/itz-hurairah18?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brown text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-xl inline-flex items-center gap-2 shadow-warm"
          >
            View All Repositories on GitHub ↗
          </a>
        </div>
      </div>

      {/* Demo Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <DemoModal videoSrc={modalVideo} onClose={handleModalClose} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
