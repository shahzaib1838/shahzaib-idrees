import "./App.css";
const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "JS" },
  { name: "WordPress", icon: "W" },
  { name: "Shopify", icon: "S" },
  { name: "SEO", icon: "↗" },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <div className="skills-text">
          <span className="section-label">WHAT I DO BEST</span>

          <h2>
            Skills <span>& Expertise</span>
          </h2>

          <p>
            I work with modern technologies to build fast, responsive,
            SEO-friendly websites and e-commerce experiences.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;