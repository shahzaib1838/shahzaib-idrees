import { Link } from "react-router-dom";
import "./App.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          👋 Welcome to my Portfolio
        </span>

        <h3>Hello, I'm</h3>

        <h1>
          Shahzaib <span>Idrees</span>
        </h1>

        <h2>
          Shopify • WordPress • Frontend • SEO Specialist
        </h2>

        <p>
          I build modern, responsive and high-performing websites using
          <strong> React, Shopify, WordPress, HTML, CSS and JavaScript.</strong>
          I also help businesses grow through
          <strong> Search Engine Optimization (SEO)</strong>, performance
          optimization and user-focused web experiences.
        </p>

        <div className="hero-buttons">
         
         <Link to="/contact" className="primary-btn">
  Contact Me
</Link>
         <a href="#projects" className="secondary-btn">
    View Projects
</a>
        </div>

      </div>

      <div className="hero-image">

        <div className="image-circle">

          <img
  src="https://cdn.shopify.com/s/files/1/0655/9501/5247/files/bb725285-0c14-4107-9741-819c1262db75.png?v=1784917607"
  alt="Developer"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;