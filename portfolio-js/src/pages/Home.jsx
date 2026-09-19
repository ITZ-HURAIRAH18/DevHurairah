import { useState, useEffect } from "react";

const Home = () => {
  const roles = [
    "Full-Stack Developer",
    "AI Automation Specialist",
    "MERN Stack Engineer",
    "n8n Workflow Architect",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="gradient-mesh-bg relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        {/* Left Content Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span className="font-mono text-xs font-semibold text-[#8B5E3C] tracking-wide uppercase">
              Assalamu Alaikum
            </span>
          </div>

          {/* Heading with Large Bold Name & Gradient Accent */}
          <div className="space-y-1">
            <p className="font-mono text-xs sm:text-sm tracking-widest text-[#8A7560] uppercase font-medium">
              Software & AI Systems Engineer
            </p>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-[#2D1B0E]">
              ABU <span className="gradient-text font-serif italic font-normal">HURAIRAH</span>
            </h1>
          </div>

          {/* Dynamic Role Typing Display */}
          <div className="h-8 sm:h-9 flex items-center">
            <span className="font-mono text-base sm:text-lg lg:text-xl font-bold text-[#8B5E3C]">
              {displayText}
              <span className="animate-pulse border-r-2 border-[#8B5E3C] ml-1">&nbsp;</span>
            </span>
          </div>

          {/* Short Bio */}
          <p className="font-sans text-sm sm:text-base text-[#5C4033] leading-relaxed max-w-2xl font-normal">
            Building scalable full-stack web applications and intelligent <strong>AI automation workflows</strong>. Specializing in React, Node.js, Python, n8n, and LLM agent integration to automate complexity and solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a href="#projects" className="btn-brown text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg">
              View Projects ↘
            </a>
            <a href="#contact" className="btn-outline-brown text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg">
              Get In Touch ↗
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 sm:gap-6 pt-3 border-t border-[#E8DDD0]/70 w-full max-w-md">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A7560]">
              Connect:
            </span>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/itz-hurairah18"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#8B5E3C] hover:text-[#2D1B0E] transition-colors duration-200 uppercase tracking-wider font-bold no-underline"
              >
                GitHub ↗
              </a>
              <span className="text-[#E8DDD0]">•</span>
              <a
                href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#8B5E3C] hover:text-[#2D1B0E] transition-colors duration-200 uppercase tracking-wider font-bold no-underline"
              >
                LinkedIn ↗
              </a>
              <span className="text-[#E8DDD0]">•</span>
              <a
                href="mailto:abuhurx@gmail.com"
                className="font-mono text-xs text-[#8B5E3C] hover:text-[#2D1B0E] transition-colors duration-200 uppercase tracking-wider font-bold no-underline"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols) — Animated Code Terminal Mockup Card */}
        <div className="lg:col-span-5 w-full">
          <div className="warm-card p-4 sm:p-5 rounded-2xl relative border border-[#E8DDD0] shadow-warm">
            {/* Terminal Header Chrome */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8DDD0]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]" />
              </div>
              <span className="font-mono text-xs text-[#8A7560] font-semibold">
                developer.config.ts
              </span>
            </div>

            {/* Terminal Code Snippet Display */}
            <div className="font-mono text-xs leading-relaxed text-[#2D1B0E] space-y-1.5 bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DDD0]/60 overflow-x-auto">
              <div>
                <span className="text-[#8B5E3C] font-bold">const</span>{" "}
                <span className="text-[#C49A6C]">engineer</span> = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-[#764D2E]">&quot;Abu Hurairah&quot;</span>,
              </div>
              <div className="pl-4">
                title: <span className="text-[#764D2E]">&quot;Full-Stack & AI Systems&quot;</span>,
              </div>
              <div className="pl-4">
                location: <span className="text-[#764D2E]">&quot;Pakistan&quot;</span>,
              </div>
              <div className="pl-4">
                skills: [
              </div>
              <div className="pl-8 text-[#8B5E3C]">
                &quot;React&quot;, &quot;Node.js&quot;, &quot;n8n&quot;, &quot;Python&quot;, &quot;LLMs&quot;
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                availability: <span className="text-[#28a745] font-bold">&quot;Available for Projects&quot;</span>
              </div>
              <div>&#125;;</div>

              <div className="pt-2 text-[#8A7560] italic text-[11px]">
                // Ready to bring your vision to life with high quality code.
              </div>
            </div>

            {/* Quick Stat Pill below terminal */}
            <div className="mt-3 pt-3 border-t border-[#E8DDD0] flex items-center justify-between text-xs font-mono">
              <span className="text-[#5C4033]">Status: <strong className="text-[#8B5E3C]">Building Solutions</strong></span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#8B5E3C]/10 text-[#8B5E3C] rounded-md font-bold text-[11px]">
                ● Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
