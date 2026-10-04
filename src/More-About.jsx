import React from 'react';
import "./App.css";
const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img 
            src="https://cdn.shopify.com/s/files/1/0655/9501/5247/files/d2ad3e75-88fa-4508-9770-876736eb4277.png?v=1788677466" 
            alt="Developer workspace" 
            className="about-image" 
          />
        </div>

        <div className="about-content">
          <span className="about-subtitle">ABOUT ME</span>
          <h2 className="about-title">More About Me</h2>
          <p className="about-text">
            I'm a passionate web developer with a strong focus on WordPress, Shopify, frontend development and SEO. I enjoy turning ideas into modern, responsive and user-friendly websites. I'm always eager to learn new technologies and take on challenging projects that help me grow and create real value for clients.
          </p>
          
          <div className="about-badges">
            <div className="badge-item">
              <span className="badge-icon">⚡</span>
              <span>Problem Solver</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">👥</span>
              <span>Team Player</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">🔍</span>
              <span>Detail Oriented</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">📚</span>
              <span>Always Learning</span>
            </div>
          </div>
        </div>

        <div className="why-work-section">
          <h3 className="why-work-title">Why Work With Me?</h3>
          <ul className="why-work-list">
            <li><span className="check-icon">✓</span> Clean & modern code</li>
            <li><span className="check-icon">✓</span> On-time delivery</li>
            <li><span className="check-icon">✓</span> Clear communication</li>
            <li><span className="check-icon">✓</span> Post-launch support</li>
            <li><span className="check-icon">✓</span> Focused on client satisfaction</li>
          </ul>
          <a href="#contact" className="hire-btn">
            Contact Me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;