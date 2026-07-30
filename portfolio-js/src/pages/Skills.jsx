import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      label: "Frontend",
      count: "09",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "React Native", icon: "react" },
        { name: "Electron", icon: "electron" },
        { name: "Vue.js", icon: "vuejs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "HTML/CSS", icon: "html5" },
      ],
    },
    {
      label: "Backend",
      count: "05",
      skills: [
        { name: "Python", icon: "python" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Django", icon: "django" }, // This uses django-plain in map
        { name: "FastAPI", icon: "fastapi" },
        { name: "Express.js", icon: "express" },
      ],
    },
    {
      label: "Automation & AI",
      count: "06",
      skills: [
        { name: "LangChain/LangGraph", icon: "python" },
        { name: "OpenAI/Gemini API", icon: "google" },
        { name: "Webhooks & REST APIs", icon: "chrome" },
        { name: "AI Agents", icon: "javascript" },
        { name: "RAG Systems", icon: "postgresql" },
        { name: "n8n", icon: "nodejs" },
      ],
    },
    {
      label: "Database",
      count: "06",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Redis", icon: "redis" },
        { name: "Supabase", icon: "supabase" },
        { name: "SQLite", icon: "sqlite" },
        { name: "MySQL", icon: "mysql" },
      ],
    },
    {
      label: "DevOps & Tools",
      count: "07",
      skills: [
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Vite", icon: "vite" },
        { name: "REST APIs", icon: "chrome" },
        { name: "Prisma ORM", icon: "prisma" },
        { name: "JWT Auth", icon: "auth0" },
        { name: "AWS", icon: "aws" },
      ],
    },
    {
      label: "Languages",
      count: "03",
      skills: [
        { name: "Python", icon: "python" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
  ];

  const getIconUrl = (icon) => {
    if (!icon) return null;
    const iconMap = {
      "nextjs": "nextjs-original",
      "tailwindcss": "tailwindcss-original",
      "fastapi": "fastapi-original",
      "express": "express-original",
      "n8n": "n8n-original",
      "supabase": "supabase-plain",
      "prisma": "prisma-original",
      "vite": "vitejs-original",
      "langchain": "python-original",
      "openai": "google-original",
      "api": "chrome-original",
      "auth0": "auth0-original",
      "django": "django-plain",
    };
    const iconName = iconMap[icon] || `${icon}-original`;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${iconName}.svg`;
  };

  return (
    <section id="skills" className="py-24 bg-[#F5F0E8] border-t border-[#8B5E3C]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#8B5E3C]/15 pb-8 gap-4">
          <div>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8B5E3C] font-bold">
              // SKILLS & STACK
            </span>
            <h2 className="font-serif text-5xl md:text-7xl italic text-[#2C1A0E] mt-2 leading-tight">
              Skills & Stack
            </h2>
          </div>
          <div className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B5E3C]/80 font-bold mb-2">
            30 TECHNOLOGIES
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-[12px] border border-[#8B5E3C]/20 shadow-[0_4px_20px_-4px_rgba(139,94,60,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-[#8B5E3C]/50 hover:shadow-[0_12px_30px_-6px_rgba(139,94,60,0.2)]"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-sans font-bold text-[#2C1A0E] uppercase tracking-widest text-xs border-l-2 border-[#8B5E3C] pl-3">
                  {category.label}
                </h3>
                <span className="font-sans text-[10px] text-[#8B5E3C]/60 font-bold tracking-tighter">
                  {category.count}
                </span>
              </div>
              
              <ul className="space-y-4 list-none">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-4 group/item">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5E3C] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                    
                    <span className="font-sans text-sm font-medium text-[#2C1A0E]/70 group-hover/item:text-[#2C1A0E] transition-colors tracking-tight">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

