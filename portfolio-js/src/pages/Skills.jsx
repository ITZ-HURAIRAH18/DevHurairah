const Skills = () => {
  const skillCategories = [
    {
      label: "Frontend",
      skills: [
        { name: "React", primary: true },
        { name: "Next.js", primary: true },
        { name: "Vue.js", primary: false },
        { name: "Tailwind CSS", primary: true },
        { name: "TypeScript", primary: true },
        { name: "JavaScript", primary: false },
        { name: "HTML/CSS", primary: false },
      ],
      speed: "18s",
    },
    {
      label: "Backend",
      skills: [
        { name: "Node.js", primary: true },
        { name: "Django", primary: true },
        { name: "FastAPI", primary: true },
        { name: "Express", primary: false },
        { name: "Laravel", primary: false },
        { name: "Python", primary: true },
        { name: "PHP", primary: false },
      ],
      speed: "14s",
    },
    {
      label: "Database",
      skills: [
        { name: "MongoDB", primary: true },
        { name: "PostgreSQL", primary: true },
        { name: "Redis", primary: false },
        { name: "Supabase", primary: false },
        { name: "SQLite", primary: false },
        { name: "MySQL", primary: false },
      ],
      speed: "22s",
    },
    {
      label: "DevOps",
      skills: [
        { name: "Git", primary: true },
        { name: "Docker", primary: true },
        { name: "GitHub", primary: false },
        { name: "Vite", primary: false },
        { name: "REST APIs", primary: true },
      ],
      speed: "16s",
    },
  ];

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const renderSkillItems = (skills) => {
    return skills.map((skill, idx) => (
      <span key={`${skill.name}-${idx}`} className="skill-item">
        <span className="skill-dot" />
        <span
          className={`font-sans text-sm ${
            skill.primary ? "text-copper font-medium" : "text-espresso/70"
          }`}
        >
          {skill.name}
        </span>
      </span>
    ));
  };

  const renderMarqueeRow = (skills, duration) => {
    const content = renderSkillItems(skills);
    return (
      <div className="skill-ticker" style={{ overflow: "hidden", width: "100%", height: "48px" }}>
        <div
          className="skill-ticker-inner"
          style={{
            display: "flex",
            width: "max-content",
            animation: `skillScroll ${duration} linear infinite`,
          }}
        >
          {/* Duplicate content for seamless loop */}
          {content}
          {content}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-border">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex items-end justify-between px-6 lg:px-12 xl:px-20 py-8 border-b border-border">
          <div>
            <span className="block font-mono text-mono-tiny text-copper uppercase tracking-wider mb-2">
              // SKILLS &amp; STACK
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light italic text-espresso">
              Skills &amp; Stack
            </h2>
          </div>
          <div className="font-mono text-mono-xs text-muted uppercase tracking-wider">
            {totalSkills} Technologies
          </div>
        </div>

        {/* Skill Ticker Rows */}
        <div className="flex flex-col">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="flex border-b border-border"
            >
              {/* Left Label */}
              <div className="w-32 lg:w-40 flex-shrink-0 px-6 lg:px-12 py-6 flex items-start">
                <span className="font-mono text-mono-xs uppercase tracking-wider text-copper">
                  {category.label}
                </span>
              </div>

              {/* Right Ticker */}
              <div className="flex-1 overflow-hidden py-6">
                {renderMarqueeRow(category.skills, category.speed)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
