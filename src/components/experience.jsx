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
        "Working as a WordPress & Shopify Developer, building, customizing, and optimizing modern e-commerce stores and websites. Specialized in theme customization, plugin/app integration, responsive design, site speed, and delivering seamless user experiences.",
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
            "Engineered, customized, and optimized high-performing Shopify stores for various client projects. Focused on custom Liquid theme modifications, building dynamic sections, refining responsive layouts, and enhancing store UI/UX for seamless user experience.",
          skills: ["Shopify Development", "Shopify Theme Customization"],
        },
        {
          title: "Shopify Development Intern",
          duration: "Aug 2025 - Nov 2025",
          type: "Internship",
          description:
            "Assisted in end-to-end Shopify store creation, configuration, and management. Contributed to theme customization, frontend bug fixes, page layout enhancements, and ensuring full mobile responsiveness across devices.",
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
        "Executed end-to-end On-Page, Off-Page, and Technical SEO strategies to drive organic search visibility and improve rankings. Conducted comprehensive keyword research, meta data optimization, technical site audits, backlink strategies, and content enhancements.",
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