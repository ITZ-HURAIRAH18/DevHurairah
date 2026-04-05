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

  // Render skill items DUPLICATED for seamless loop
  const renderDuplicatedSkillItems = (skills) => {
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

  return (
    <div className="skills-section">
      <div className="skills-inner">
        {/* Header Row */}
        <div className="skills-header">
          <div className="skills-header-left">
            <span className="skills-header-label">
              // SKILLS &amp; STACK
            </span>
            <h2 className="skills-header-title">
              Skills &amp; Stack
            </h2>
          </div>
          <div className="skills-header-counter">
            {totalSkills} Technologies
          </div>
        </div>

        {/* Skill Ticker Rows */}
        <div className="skills-ticker-rows">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="skills-ticker-row"
            >
              {/* Left Label */}
              <div className="skills-ticker-label">
                <span>{category.label}</span>
              </div>

              {/* Right Ticker — overflow hidden outer, flex max-content inner */}
              <div className="skills-ticker-viewport">
                <div
                  className="skills-ticker-track"
                  style={{
                    animationDuration: category.speed,
                  }}
                >
                  {renderDuplicatedSkillItems(category.skills)}
                  {renderDuplicatedSkillItems(category.skills)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
