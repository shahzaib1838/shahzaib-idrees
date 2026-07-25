import "./App.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-title">
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form">

        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select required>
            <option value="">Select Service</option>
            <option>Shopify Development</option>
            <option>WordPress Development</option>
            <option>React Frontend Development</option>
            <option>SEO Services</option>
            <option>Website Speed Optimization</option>
            <option>Bug Fixing</option>
            <option>Landing Page Design</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="date"
            required
          />

          <input
            type="time"
            required
          />
        </div>

        <textarea
          rows="6"
          placeholder="Tell me about your project..."
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

    </section>
  );
}

export default Contact;