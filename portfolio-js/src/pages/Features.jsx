const Features = () => {
  const features = [
    {
      code: "01",
      title: "Full-Stack Web Architecture",
      subtitle: "Scalable Frontends & Microservices",
      description:
        "Building modern, responsive web applications using React, Next.js, and TypeScript, backed by robust Node.js, Django, and FastAPI microservices.",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "Django", "FastAPI"],
    },
    {
      code: "02",
      title: "AI & Workflow Automation",
      subtitle: "Autonomous Agents & n8n Pipelines",
      description:
        "Architecting autonomous AI agents, LLM integrations (LangChain, Gemini, OpenAI), RAG systems, and custom n8n workflow automation pipelines.",
      tags: ["n8n", "LangChain", "OpenAI / Gemini", "AI Agents", "Webhooks"],
    },
    {
      code: "03",
      title: "High-Performance APIs & Databases",
      subtitle: "Atomic Transactions & Data Integrity",
      description:
        "Designing high-throughput RESTful endpoints, optimized database schemas (PostgreSQL, MongoDB), caching layers, and transaction integrity.",
      tags: ["PostgreSQL", "MongoDB", "REST APIs", "Redis", "SQL"],
    },
    {
      code: "04",
      title: "Cross-Platform Ecosystems",
      subtitle: "Desktop & Mobile Applications",
      description:
        "Developing cross-platform desktop software using Electron.js and native mobile apps using React Native for unified digital ecosystems.",
      tags: ["Electron.js", "React Native", "Desktop Apps", "Mobile"],
    },
    {
      code: "05",
      title: "Performance & Optimization",
      subtitle: "Sub-Second Latency & Code Splitting",
      description:
        "Maximizing application performance via code splitting, asset minification, lazy loading, and sub-100ms API response targets.",
      tags: ["Vite", "Performance", "Clean Architecture", "CI/CD"],
    },
    {
      code: "06",
      title: "Security & Role-Based Access",
      subtitle: "Enterprise RBAC & Audit Trails",
      description:
        "Implementing secure JWT authentication, OAuth2 integration, role-based permissions (RBAC), and immutable audit logs for compliance.",
      tags: ["JWT Auth", "RBAC", "Security", "Data Privacy"],
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#FAF7F2] border-t border-[#E8DDD0] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5E3C] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">
              Core Competencies
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2D1B0E] tracking-tight">
            Engineering <span className="gradient-text font-serif italic font-normal">Capabilities & Features</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B5E3C] to-[#C49A6C] rounded-full mt-1" />
        </div>

        {/* Features 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="warm-card p-8 rounded-2xl border-2 border-[#E8DDD0] hover:border-[#8B5E3C] shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Code Number + Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DDD0]">
                  <span className="font-mono text-xs font-bold text-[#8B5E3C] bg-[#8B5E3C]/10 px-3 py-1 rounded-md border border-[#8B5E3C]/20">
                    FEATURE // {feature.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C49A6C]" />
                </div>

                <h3 className="font-heading font-bold text-xl text-[#2D1B0E] group-hover:text-[#8B5E3C] transition-colors mb-1">
                  {feature.title}
                </h3>
                <p className="font-mono text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider mb-4">
                  {feature.subtitle}
                </p>

                <p className="font-sans text-xs text-[#5C4033] leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Supporting Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E8DDD0]">
                {feature.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2.5 py-1 bg-[#FAF7F2] text-[#2D1B0E] border border-[#E8DDD0] rounded-md font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
