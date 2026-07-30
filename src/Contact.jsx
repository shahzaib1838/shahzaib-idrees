import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_wkzhft4", // Aapka EmailJS Service ID
        "template_ys5roq6", // Aapka EmailJS Template ID (ya contact form ke liye alag template ID)
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone || "N/A",
          service: formData.service,
          preferred_date: formData.preferred_date,
          preferred_time: formData.preferred_time,
          message: formData.message || "No message provided",
        },
        "37xCttnY4mBagyi5b" // Aapka Public Key
      );

      alert("Thank you! Your message has been sent successfully.");

      // Form reset
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        service: "",
        preferred_date: "",
        preferred_time: "",
        message: "",
      });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-title">
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind? Fill out the form below and I'll get back to
          you as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Shopify Development">Shopify Development</option>
            <option value="WordPress Development">WordPress Development</option>
            <option value="React Frontend Development">React Frontend Development</option>
            <option value="SEO Services">SEO Services</option>
            <option value="Website Speed Optimization">Website Speed Optimization</option>
            <option value="Bug Fixing">Bug Fixing</option>
            <option value="Landing Page Design">Landing Page Design</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="preferred_date"
            value={formData.preferred_date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="preferred_time"
            value={formData.preferred_time}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Contact;