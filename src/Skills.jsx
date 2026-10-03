import React from "react";
import "./App.css";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/wordpress_1.png?v=1791046530",
  },
  {
    name: "Shopify",
    icon: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/shopify_1.png?v=1791046605",
  },
  {
    name: "SEO",
    icon: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/searcheo.png?v=1791046697",
  },
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
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;