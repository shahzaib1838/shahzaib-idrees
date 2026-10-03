import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Predawn Solutions",
      logo: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/predawn_solutions.jpg?v=1791042698",
      role: "WordPress & Shopify Developer",
      type: "Full-time",
      duration: "Feb 2026 - Present",
      location: "Multan, Punjab, Pakistan · On-site",
      description:
        "Working as a WordPress Developer, building, customizing, and optimizing modern websites while focusing on responsive design, performance, and user experience.",
      skills: ["WordPress Development", "Shopify Development"],
    },
    {
      company: "TheScriptFlow",
      logo: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/thescriptflow.jpg?v=1791042698",
      roles: [
        {
          title: "Shopify Developer",
          duration: "Nov 2025 - Feb 2026",
          type: "Full-time",
          description:
            "During my time as a Shopify Developer at TheScriptFlow, I worked on building, customizing, and optimizing Shopify stores for different clients. I worked with Shopify themes, sections, responsive layouts, and store customization.",
          skills: ["Shopify Development", "Shopify Theme Customization"],
        },
        {
          title: "Shopify Development Intern",
          duration: "Aug 2025 - Nov 2025",
          type: "Internship",
          description:
            "During my Shopify Development Internship at TheScriptFlow, I gained hands-on experience in creating and managing Shopify stores. My responsibilities included theme customization, frontend development, and improving store layouts.",
          skills: ["Shopify Development", "Store Setup"],
        },
      ],
    },
    {
      company: "CodeGini Digital Solution Provider",
      logo: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/codegeni.jpg?v=1791042697",
      role: "SEO Intern",
      type: "Internship",
      duration: "May 2025 - Aug 2025",
      location: "Islamabad, Islamabad, Pakistan · Hybrid",
      description:
        "As an SEO Intern at CodeGini Digital Solution Provider, I worked on on-page, off-page, and technical SEO strategies to improve website visibility, search performance, and content quality.",
      skills: ["SEO", "WordPress Elementor"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Heading */}
        <div className="experience-heading">
          <span className="experience-badge">💼 My Journey</span>

          <h2>
            Work <span>Experience</span>
          </h2>

          <p>
            My professional journey includes hands-on experience in WordPress,
            Shopify development, frontend development, and SEO.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              {/* Timeline Dot */}
              <div className="experience-dot"></div>

              {/* Company Logo */}
              <div className="experience-logo">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                />
              </div>

              {/* Experience Content */}
              <div className="experience-content">
                <div className="experience-company-row">
                  <div>
                    <h3>{experience.company}</h3>

                    {experience.role && (
                      <span className="experience-role">
                        {experience.role}
                      </span>
                    )}

                    {experience.type && experience.role && (
                      <span className="experience-type">
                        · {experience.type}
                      </span>
                    )}

                    {experience.duration && (
                      <span className="experience-duration">
                        {experience.duration}
                      </span>
                    )}

                    {experience.location && (
                      <span className="experience-location">
                        {experience.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Single Role */}
                {experience.role && (
                  <div className="experience-description">
                    <p>{experience.description}</p>

                    {experience.skills && (
                      <div className="experience-skills">
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex}>{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Multiple Roles */}
                {experience.roles && (
                  <div className="experience-roles">
                    {experience.roles.map((role, roleIndex) => (
                      <div className="experience-role-item" key={roleIndex}>
                        <h4>{role.title}</h4>

                        <span className="experience-role-meta">
                          {role.duration} · {role.type}
                        </span>

                        <p>{role.description}</p>

                        {role.skills && (
                          <div className="experience-skills">
                            {role.skills.map((skill, skillIndex) => (
                              <span key={skillIndex}>{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;