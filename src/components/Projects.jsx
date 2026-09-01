import "../App.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    // ==========================
    // SHOPIFY
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205112.png?v=1788277767",
      title: "Think Rich Brand",
      category: "Shopify",
      description:
        "Complete Shopify store development and customization with a modern, responsive and user-friendly shopping experience.",
      link: "https://thinkrichbrand.com",
    },

    // ==========================
    // WOOCOMMERCE
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_210136.png?v=1788278321",
      title: "Peachstatepeps",
      category: "WooCommerce",
      description:
        "Professional WooCommerce e-commerce store with product management, responsive design and a smooth online shopping experience.",
      link: "https://peachstatepeps.com/",
    },

    // ==========================
    // WORDPRESS
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205446.png?v=1788277921",
      title: "PointRN",
      category: "WordPress",
      description:
        "Professional WordPress business website with a clean layout, responsive design and an optimized user experience.",
      link: "https://pointrn.com",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_205824.png?v=1788278165",
      title: "Interior Design",
      category: "WordPress",
      description:
        "Modern interior design website focused on professional presentation, responsive layouts and an engaging user experience.",
      link: "https://interiordesign.xemensolutions.tech/",
    },

    // {
    //   image: "/images/caliper.jpg",
    //   title: "Caliper",
    //   category: "WordPress",
    //   description:
    //     "Modern corporate WordPress website designed for professional branding, business presentation and lead generation.",
    //   link: "https://caliper.vervixsolutions.com/",
    // },

    // {
    //   image: "/images/bitness-plan.jpg",
    //   title: "Bitness Plan",
    //   category: "WordPress",
    //   description:
    //     "Business-focused WordPress website with a clean interface, responsive design and structured content presentation.",
    //   link: "http://bitnessplan.techtitanstudio.com/",
    // },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213405.png?v=1788280287",
      title: "Quillsnappress",
      category: "WordPress",
      description:
        "Content-focused WordPress website with a professional layout, responsive design and easy-to-navigate structure.",
      link: "https://quillsnappress.com/",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213552.png?v=1788280379",
      title: "At Your Pace Mental Health",
      category: "WordPress",
      description:
        "Professional mental health service website designed with a clean interface and accessible user experience.",
      link: "https://atyourpacementalhealth.com/",
    },

    // ==========================
    // SEO
    // ==========================
    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213735.png?v=1788280484",
      title: "TheScriptFlow",
      category: "GMB (Google Business Profile)",
      description:
        "Local SEO and Google Business Profile optimization focused on improving local visibility and business presence.",
      link: "https://share.google/f5ZfAEZfNtIm32w1l",
    },

    {
      image: "https://cdn.shopify.com/s/files/1/0655/9501/5247/files/Screenshot_2026-09-01_213907.png?v=1788280578",
      title: "SZ Vision",
      category: "GMB (Google Business Profile",
      description:
        "Google Business Profile optimization and local SEO work focused on improving business visibility in local search.",
      link: "https://share.google/7xfT7jfLODT0nL3Rc",
    },
  ];

  return (
    <section className="projects-page">

      {/* ==========================
          PAGE HEADER
      ========================== */}

      <div className="projects-page-header">

        <span className="projects-page-subtitle">
          MY WORK
        </span>

        <h1>Projects &amp; Work</h1>

        <p>
          A selection of websites, e-commerce stores and SEO projects
          I have worked on for businesses and brands.
        </p>

      </div>


      {/* ==========================
          ALL PROJECTS
      ========================== */}

      <div className="all-projects-grid">

        {projects.map((project, index) => (

          <div className="all-project-card" key={index}>

            {/* Project Image */}

            <div className="all-project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>


            {/* Project Content */}

            <div className="all-project-content">

              {/* Category */}

              <div className="all-project-top">

                <span>
                  {project.category}
                </span>

              </div>


              {/* Title */}

              <h3>
                {project.title}
              </h3>


              {/* Description */}

              <p>
                {project.description}
              </p>


              {/* Link */}

              <div className="all-project-bottom">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;