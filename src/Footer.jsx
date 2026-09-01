import "./App.css";
import logo from "./assets/logo.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* ==========================
          FOOTER MAIN
      ========================== */}

      <div className="footer-main">

        {/* ==========================
            BRAND
        ========================== */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
  <img src={logo} alt="Shahzaib Idrees Logo" />
</a>

          <p>
            Frontend Developer specializing in Shopify, WordPress,
            React and modern web solutions.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/shahzaib1838"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shahzaib-idrees-b04503254/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>


        {/* ==========================
            QUICK LINKS
        ========================== */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
  <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#skills">Blog</a>
            </li>

          
          </ul>

        </div>


        {/* ==========================
            SERVICES
        ========================== */}

        <div className="footer-links">

          <h3>Services</h3>

          <ul>
            <li>
              <a href="#services">Shopify</a>
            </li>

            <li>
              <a href="#services">WordPress</a>
            </li>

            <li>
              <a href="#services">React</a>
            </li>

            <li>
              <a href="#services">Frontend</a>
            </li>

            <li>
              <a href="#services">SEO</a>
            </li>
          </ul>

        </div>


        {/* ==========================
            CONTACT
        ========================== */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <a
            href="mailto:2022-uam-1838@mnsuam.edu.pk"
            className="contact-item"
          >
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <span>
              2022-uam-1838@mnsuam.edu.pk
            </span>
          </a>


          <a
            href="tel:+923245225872"
            className="contact-item"
          >
            <span className="contact-icon">
              <FaPhoneAlt />
            </span>

            <span>
              0324 5225872
            </span>
          </a>


          <div className="contact-item">
            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>

            <span>
              Multan, Pakistan
            </span>
          </div>

        </div>

      </div>


      {/* ==========================
          FOOTER BOTTOM
      ========================== */}

      <div className="footer-bottom">

        <p>
          © 2026 Shahzaib Idrees. All Rights Reserved.
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

       

      </div>

    </footer>
  );
}

export default Footer;