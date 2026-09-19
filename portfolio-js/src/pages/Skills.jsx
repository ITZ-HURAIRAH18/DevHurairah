const Skills = () => {
  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "2+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "50+", label: "Workflows Automated" },
  ];

  const skillBadges = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain text-[#2D1B0E]" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "n8n Workflows", icon: "devicon-nodejs-plain text-[#8B5E3C]" },
    { name: "Django", icon: "devicon-django-plain text-[#2D1B0E]" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git & GitHub", icon: "devicon-git-plain colored" },
    { name: "LangChain & LLMs", icon: "devicon-[#8B5E3C]" },
    { name: "Electron.js", icon: "devicon-electron-original colored" },
  ];

  const categories = [
    {
      title: "Frontend Engineering",
      description: "Building fast, dynamic, user-friendly single-page and server-rendered web apps.",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5 / CSS3"]
    },
    {
      title: "Backend & Systems Architecture",
      description: "Architecting high-performance APIs, database management, and authentication systems.",
      tools: ["Node.js", "Express", "Python", "Django REST", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      title: "AI & Workflow Automation",
      description: "Developing autonomous AI agents, n8n integration pipelines, and RAG architectures.",
      tools: ["n8n Workflows", "LangChain", "OpenAI / Gemini API", "LLM Agents", "REST & Webhooks"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAF7F2] relative border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">
              About & Core Technologies
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2D1B0E] tracking-tight">
            Engineering with <span className="gradient-text font-serif italic font-normal">Precision & Innovation</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#C49A6C] rounded-full mt-1" />
        </div>

        {/* Split Layout: Image with Decorative Frame (Left) + Content (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Side: Developer Image with Warm Decorative Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Outlines */}
              <div className="absolute -inset-4 border-2 border-[#8B5E3C]/40 rounded-3xl transform rotate-2" />
              <div className="absolute -inset-4 border border-[#C49A6C]/50 rounded-3xl transform -rotate-2" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden warm-card shadow-warm border-2 border-[#E8DDD0]">
                <img
                  src="/hurairah.jpeg"
                  alt="Muhammad Abu Hurairah"
                  className="w-full h-[440px] object-cover object-[center_top] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0E] via-[#2D1B0E]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="font-heading font-bold text-2xl text-[#FFF8F0]">Muhammad Abu Hurairah</p>
                  <p className="font-mono text-xs text-[#C49A6C] tracking-widest uppercase font-semibold">Full-Stack & AI Systems Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#2D1B0E] leading-snug">
              Building high-impact web applications & AI automation pipelines.
            </h3>
            <p className="font-sans text-base text-[#5C4033] leading-relaxed">
              I am a Full-Stack Developer and AI Automation Engineer based in Pakistan. My engineering experience spans web applications, mobile platforms, cross-platform desktop software, and custom <strong>AI automation workflows</strong>.
            </p>
            <p className="font-sans text-base text-[#5C4033] leading-relaxed">
              From crafting seamless React / Next.js user experiences to building robust Python, Django, and Node.js APIs or orchestrating n8n AI agent workflows, I focus on performance, scalability, and clean architecture.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E8DDD0]">
              {stats.map((stat, i) => (
                <div key={i} className="warm-card p-4 rounded-xl text-center border border-[#E8DDD0]">
                  <p className="font-heading font-extrabold text-3xl gradient-text">{stat.value}</p>
                  <p className="font-mono text-[11px] text-[#8A7560] uppercase tracking-wider font-semibold mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HIGH-VISIBILITY CORE TECH STACK BADGES */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8DDD0] pb-4 gap-2">
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-[#2D1B0E]">
                Core Technical Skills & Stack
              </h3>
              <p className="font-sans text-xs text-[#8A7560] mt-1">
                Technologies and frameworks used in production applications:
              </p>
            </div>
            <span className="font-mono text-xs text-[#8B5E3C] font-bold uppercase tracking-wider bg-[#8B5E3C]/10 px-3 py-1.5 rounded-lg border border-[#8B5E3C]/20 self-start sm:self-auto">
              ✦ 16+ Core Techs
            </span>
          </div>

          {/* High-Visibility Prominent Tech Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {skillBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FFF8F0] border-2 border-[#E8DDD0] hover:border-[#8B5E3C] shadow-sm hover:shadow-warm hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DDD0] flex items-center justify-center shrink-0 text-xl group-hover:scale-110 transition-transform">
                  {badge.icon.startsWith("devicon-") ? (
                    <i className={badge.icon} />
                  ) : (
                    <span className="font-mono text-sm text-[#8B5E3C] font-bold">✦</span>
                  )}
                </div>
                <span className="font-heading font-bold text-sm text-[#2D1B0E] group-hover:text-[#8B5E3C] transition-colors">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="warm-card p-7 rounded-2xl flex flex-col justify-between border-2 border-[#E8DDD0]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C]" />
                    <h4 className="font-heading font-bold text-xl text-[#2D1B0E]">{cat.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-[#5C4033] leading-relaxed mb-6">{cat.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8DDD0]">
                  {cat.tools.map((t, tIdx) => (
                    <span key={tIdx} className="font-mono text-xs px-3 py-1 bg-[#FAF7F2] text-[#8B5E3C] border border-[#E8DDD0] rounded-lg font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
