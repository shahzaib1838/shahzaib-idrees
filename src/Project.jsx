import "./App.css";

function Project() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <h2>My Projects</h2>
        <p>
          Some of my recent Shopify, WordPress and SEO projects.
        </p>
      </div>

      {/* Shopify */}

      <div className="project-category">
        <h3>🛒 Shopify Development</h3>

        <div className="project-card">

          <h4>Think Rich Brand</h4>

          <p>
            Complete Shopify Store Development & Customization.
          </p>

          <a
            href="https://thinkrichbrand.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website →
          </a>

        </div>

      </div>

      {/* WordPress */}

      <div className="project-category">

        <h3>🌐 WordPress Development</h3>

        <div className="project-grid">

          <div className="project-card">
            <h4>PointRN</h4>
            <a href="https://pointrn.com" target="_blank">
              Visit Website →
            </a>
          </div>

          <div className="project-card">
            <h4>Interior Design</h4>
            <a
              href="https://interiordesign.xemensolutions.tech/"
              target="_blank"
            >
              Visit Website →
            </a>
          </div>

          <div className="project-card">
            <h4>Caliper</h4>
            <a
              href="https://caliper.vervixsolutions.com/"
              target="_blank"
            >
              Visit Website →
            </a>
          </div>

          <div className="project-card">
            <h4>Bitness Plan</h4>
            <a
              href="http://bitnessplan.techtitanstudio.com/"
              target="_blank"
            >
              Visit Website →
            </a>
          </div>

          <div className="project-card">
            <h4>Quillsnappress</h4>
            <a
              href="https://quillsnappress.com/"
              target="_blank"
            >
              Visit Website →
            </a>
          </div>

          <div className="project-card">
            <h4>Mental Health</h4>
            <a
              href="https://atyourpacementalhealth.com/"
              target="_blank"
            >
              Visit Website →
            </a>
          </div>

        </div>

      </div>
      {/* React */}

<div className="project-category">

  <h3>⚛️ React Development</h3>

  <div className="project-card">

    <h4>Personal Portfolio</h4>

    <p>
      Modern, responsive portfolio website built with React, Vite, React Router, EmailJS, and custom CSS.
    </p>

    <a
      href="https://shahzaibidrees.netlify.app"
      target="_blank"
      rel="noreferrer"
    >
      Visit Website →
    </a>

  </div>

</div>

      {/* SEO */}

      <div className="project-category">

        <h3>📈 SEO Project (Google Business Profile)</h3>

        <div className="project-card">

          <h4>Google Business Profile</h4>

          <p>
            Local SEO & Google Business Profile Optimization.
          </p>

          <a
            href="https://share.google/f5ZfAEZfNtIm32w1l"
            target="_blank"
          >
            View GMB →
          </a>

        </div>

      </div>

    
    </section>
  );
}

export default Project;