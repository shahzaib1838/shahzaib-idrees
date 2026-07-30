import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";

function GuestPosting() {
  const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  company: "",
  website: "",
  target_url: "",
  anchor_text: "",
  category: "",
  backlinks: "1 Backlink",
  article_title: "",
  instructions: "",
  agreement: false,
});
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Form data pass kar rahe hain
    await emailjs.send(
      "service_wkzhft4",
      "template_f24z5wf",
      {
        full_name: formData.full_name,
        email: formData.email,
        company: formData.company || "N/A",
        website: formData.website,
        target_url: formData.target_url,
        anchor_text: formData.anchor_text,
        category: formData.category,
        backlinks: formData.backlinks,
        article_title: formData.article_title || "N/A",
        instructions: formData.instructions || "None",
        agreement: formData.agreement ? "Yes" : "No",
      },
      "37xCttnY4mBagyi5b"
    );

    alert("Guest post request submitted successfully!");

    setFormData({
      full_name: "",
      email: "",
      company: "",
      website: "",
      target_url: "",
      anchor_text: "",
      category: "",
      backlinks: "1 Backlink",
      article_title: "",
      instructions: "",
      agreement: false,
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send request.");
  }
};
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="gp-hero">
        <div className="container">

          <div className="gp-left">

            <span className="gp-tag">
              🚀 Premium Guest Posting Services
            </span>

            <h1>
              Boost Your Website Authority with
              <span> High-Quality Guest Posts</span>
            </h1>

            <p>
              Publish your article on our SEO-optimized website and
              get a powerful contextual backlink that helps improve
              your Google rankings, domain authority, and organic traffic.
            </p>

            <div className="gp-buttons">

              <a href="#contact" className="primary-btn">
                Get Started
                <FaArrowRight />
              </a>

              <a href="#benefits" className="secondary-btn">
                Learn More
              </a>

            </div>

            <div className="gp-stats">

              <div className="stat-card">
                <h2>500+</h2>
                <p>Articles Published</p>
              </div>

              <div className="stat-card">
                <h2>100+</h2>
                <p>Happy Clients</p>
              </div>

              <div className="stat-card">
                <h2>24h</h2>
                <p>Fast Publishing</p>
              </div>

            </div>

          </div>

          <div className="gp-right">

            <div className="hero-card">

              <div className="hero-icon">
                <FaGlobe />
              </div>

              <h3>High Authority Website</h3>

              <p>
                Get your business featured on a professional website
                with SEO-friendly content and quality backlinks.
              </p>

              <ul>

                <li>
                  <FaCheckCircle />
                  Permanent Backlinks
                </li>

                <li>
                  <FaCheckCircle />
                  Google Indexed
                </li>

                <li>
                  <FaCheckCircle />
                  Dofollow Links
                </li>

                <li>
                  <FaCheckCircle />
                  Fast Approval
                </li>

              </ul>

              <div className="seo-box">
                <FaChartLine />
                <span>Increase Your Search Rankings</span>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}

<section className="why-choose" id="benefits">

    <div className="section-title">

        <span>WHY CHOOSE US</span>

        <h2>
            Why Publish Your Guest Post With Us?
        </h2>

        <p>
            We provide high-quality guest posting opportunities that help
            businesses, bloggers, and agencies improve their search engine
            rankings through powerful contextual backlinks.
        </p>

    </div>

    <div className="choose-grid">

        <div className="choose-card">

            <div className="choose-icon">🚀</div>

            <h3>Fast Publishing</h3>

            <p>
                Your article is reviewed and published quickly,
                usually within 24–48 hours.
            </p>

        </div>

        <div className="choose-card">

            <div className="choose-icon">🔗</div>

            <h3>Permanent Backlinks</h3>

            <p>
                Every approved guest post receives permanent
                contextual backlinks with no hidden charges.
            </p>

        </div>

        <div className="choose-card">

            <div className="choose-icon">📈</div>

            <h3>SEO Optimized</h3>

            <p>
                Our website follows modern SEO practices to
                maximize the value of every backlink.
            </p>

        </div>

        <div className="choose-card">

            <div className="choose-icon">🌍</div>

            <h3>Multiple Niches</h3>

            <p>
                Technology, Business, Marketing,
                Health, Education and many more.
            </p>

        </div>

        <div className="choose-card">

            <div className="choose-icon">💎</div>

            <h3>Quality Content</h3>

            <p>
                Only unique and valuable content is
                accepted to maintain website authority.
            </p>

        </div>

        <div className="choose-card">

            <div className="choose-icon">🤝</div>

            <h3>Dedicated Support</h3>

            <p>
                Need help before publishing?
                We're always available to assist you.
            </p>

        </div>

    </div>

</section>
{/* ================= GUEST POST REQUEST ================= */}

<section className="guest-request" id="contact">

    <div className="request-header">

        <span>REQUEST A GUEST POST</span>

        <h2>Submit Your Guest Posting Request</h2>

        <p>
            Fill out the form below and we'll review your request.
            Once approved, your article will be published with
            permanent dofollow backlinks.
        </p>

    </div>

    <form className="guest-form" onSubmit={handleSubmit}>

        <div className="form-grid">

            <div className="form-group">
                <label>Full Name *</label>
               <input
  type="text"
  name="full_name"
  value={formData.full_name}
  onChange={handleChange}
  placeholder="John Doe"
  required
/>
            </div>

            <div className="form-group">
                <label>Email Address *</label>
                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="john@email.com"
  required
/>
            </div>

            <div className="form-group">
                <label>Company Name</label>
               <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Your Company"
/>
            </div>

            <div className="form-group">
                <label>Your Website *</label>
               <input
  type="url"
  name="website"
  value={formData.website}
  onChange={handleChange}
  placeholder="https://yourwebsite.com"
  required
/>
            </div>

            <div className="form-group">
                <label>Target URL *</label>
                <input
  type="url"
  name="target_url"
  value={formData.target_url}
  onChange={handleChange}
  placeholder="https://yourwebsite.com/service"
  required
/>
            </div>

            <div className="form-group">
                <label>Preferred Anchor Text *</label>
               <input
  type="text"
  name="anchor_text"
  value={formData.anchor_text}
  onChange={handleChange}
  placeholder="Best SEO Services"
  required
/>
            </div>

            <div className="form-group">
                <label>Guest Post Category *</label>

               <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  required
>
  <option value="">Select Category</option>
  <option value="Technology">Technology</option>
  <option value="Business">Business</option>
  <option value="Marketing">Marketing</option>
  <option value="Finance">Finance</option>
  <option value="Health">Health</option>
  <option value="Education">Education</option>
  <option value="General">General</option>
</select>
            </div>

            <div className="form-group">
                <label>Number of Backlinks *</label>

               <select
  name="backlinks"
  value={formData.backlinks}
  onChange={handleChange}
>
  <option value="1 Backlink">1 Backlink</option>
  <option value="2 Backlinks">2 Backlinks</option>
  <option value="3 Backlinks">3 Backlinks</option>
</select>

            </div>

        </div>

        <div className="form-group">

            <label>Article Title</label>

           <input
  type="text"
  name="article_title"
  value={formData.article_title}
  onChange={handleChange}
  placeholder="Suggested article title"
/>
        </div>

        <div className="form-group">

            <label>Special Instructions</label>

           <textarea
  rows="6"
  name="instructions"
  value={formData.instructions}
  onChange={handleChange}
  placeholder="Mention your requirements, niche, keywords or any special instructions..."
></textarea>
        </div>

        <div className="checkbox">

            <input
  type="checkbox"
  name="agreement"
  checked={formData.agreement}
  onChange={handleChange}
/>

            <span>
                I confirm that my content is unique and follows your publishing guidelines.
            </span>

        </div>

        <button type="submit" className="submit-btn">

            Submit Guest Post Request

        </button>

    </form>

</section>
    </>
  );
}

export default GuestPosting;