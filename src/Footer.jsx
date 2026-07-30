import "./App.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* Heading */}
      <div className="footer-top">

        <div className="footer-heading">
          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="footer-grid">

          {/* Left Side */}

          <div className="footer-left">

            <div className="info-card">
              <div className="icon-box">
                <FaEnvelope />
              </div>

              <div className="info-content">
                <h4>Email</h4>
                <p>2022-uam-1838@mnsuam.edu.pk</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>

              <div className="info-content">
                <h4>Phone</h4>
                <p>0324 5225872</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>

              <div className="info-content">
                <h4>Location</h4>
                <p>Multan, Pakistan</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="footer-right">

            <h3>Let's Build Something Amazing</h3>

            <p>
              Whether you need a Shopify Store, WordPress Website,
              React Frontend or SEO services, I'm ready to help
              your business grow.
            </p>

            <div className="footer-buttons">

              <a
                href="mailto:2022-uam-1838@mnsuam.edu.pk"
                className="btn-primary"
              >
                <FaPaperPlane />
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/shahzaib-idrees-b04503254/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FaLinkedin />
                Connect on LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Social Cards */}

      <div className="social-grid">

        <a
          href="https://github.com/shahzaib1838"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaGithub className="social-icon" />

          <h4>GitHub</h4>

          <p>Visit Now</p>
        </a>

        <a
          href="https://www.linkedin.com/in/shahzaib-idrees-b04503254/"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaLinkedin className="social-icon" />

          <h4>LinkedIn</h4>

          <p>View Profile</p>
        </a>

        <a
          href="https://www.linkedin.com/in/shahzaib-idrees-b04503254/"
          target="_blank"
          rel="noreferrer"
          className="social-card"
        >
          <FaFileDownload className="social-icon" />

          <h4>Resume</h4>

          <p>Download CV</p>
        </a>

        <a
          href="https://shahzaibidrees.netlify.app/"
          className="social-card"
        >
          <FaPaperPlane className="social-icon" />

          <h4>Portfolio</h4>

          <p>Visit Homepage</p>
        </a>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Shahzaib Idrees. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;