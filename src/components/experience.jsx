import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Predawn Solutions",
      logo: "PS",
      role: "WordPress Developer",
      type: "Full-time",
      duration: "Feb 2026 - Present",
      location: "Multan, Punjab, Pakistan · On-site",
      description:
        "Working as a WordPress Developer, building, customizing, and optimizing modern websites while focusing on responsive design, performance, and user experience.",
    },
    {
      company: "TheScriptFlow",
      logo: "TSF",
      roles: [
        {
          title: "Shopify Developer",
          duration: "Nov 2025 - Feb 2026",
          type: "Full-time",
          description:
            "During my time as a Shopify Developer at TheScriptFlow, I worked on building, customizing, and optimizing Shopify stores for different clients. I worked with Shopify themes, sections, responsive layouts, and store customization.",
        },
        {
          title: "Shopify Development Intern",
          duration: "Aug 2025 - Nov 2025",
          type: "Internship",
          description:
            "During my Shopify Development Internship at TheScriptFlow, I gained hands-on experience in creating and managing Shopify stores. My responsibilities included theme customization, frontend development, and improving store layouts.",
        },
      ],
    },
    {
      company: "CodeGini Digital Solution Provider",
      logo: "CG",
      role: "SEO Intern",
      type: "Internship",
      duration: "May 2025 - Aug 2025",
      location: "Islamabad, Islamabad, Pakistan · Hybrid",
      description:
        "As an SEO Intern at CodeGini Digital Solution Provider, I worked on on-page, off-page, and technical SEO strategies to improve website visibility, search performance, and content quality.",
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
            My professional journey includes hands-on experience in
            WordPress, Shopify development, frontend development, and SEO.
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
                {experience.logo}
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

                    <div className="experience-skills">
                      <span>Web Development</span>
                      <span>
                        {experience.role.includes("SEO")
                          ? "Search Engine Optimization"
                          : experience.role}
                      </span>
                    </div>
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

                        <div className="experience-skills">
                          <span>
                            {role.title === "Shopify Developer"
                              ? "Shopify Development"
                              : "Frontend Development"}
                          </span>

                          <span>
                            {role.title === "Shopify Developer"
                              ? "Shopify"
                              : "Web Development"}
                          </span>
                        </div>

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