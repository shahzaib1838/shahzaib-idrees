import "./App.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const projects = [
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205112.png?v=1788277767",
      title: "Think Rich Brand",
      category: "Shopify Store",
      description:
        "Complete Shopify store development and customization with a clean, responsive and conversion-focused design.",
      link: "https://thinkrichbrand.com",
      tech: "Shopify",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205446.png?v=1788277921",
      title: "PointRN",
      category: "Business Website",
      description:
        "Professional WordPress business website with responsive design, clean layout and optimized user experience.",
      link: "https://pointrn.com",
      tech: "WordPress",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205824.png?v=1788278165",
      title: "Interior Design",
      category: "Service Website",
      description:
        "Modern interior design website created with a professional layout focused on presentation and usability.",
      link: "https://interiordesign.xemensolutions.tech/",
      tech: "WordPress",
    },

{
  image:
    "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_210136.png?v=1788278321",
  title: "Peachstatepeps",
  category: "WooCommerce Store",
  description:
    "Professional WooCommerce e-commerce store with product management, responsive design, and a smooth online shopping experience.",
  link: "https://peachstatepeps.com/",
  tech: "WooCommerce",
},
  ];

  return (
    <section className="projects" id="projects">

      {/* ==========================
          PROJECT HEADER
      ========================== */}

      <div className="projects-header">

        <div className="projects-heading">

          <span className="projects-subtitle">
            FEATURED PROJECTS
          </span>

          <h2>My Recent Projects</h2>

        </div>

        <a
          href="/components/Projects.jsx"
          className="view-all-projects"
        >
          View All Projects
          <FaArrowRight />
        </a>

      </div>


      {/* ==========================
          PROJECT GRID
      ========================== */}

      <div className="featured-projects">

        {projects.map((project, index) => (

          <div className="featured-project-card" key={index}>

            {/* Project Image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>


            {/* Project Content */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>


              {/* Bottom */}

              <div className="project-card-bottom">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  Live Demo
                  <FaExternalLinkAlt />
                </a>

                <span className="project-tech">
                  {project.tech}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Project;