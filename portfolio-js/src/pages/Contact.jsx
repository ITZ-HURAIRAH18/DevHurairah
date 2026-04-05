import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "key_default"
      );
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { number: "20+", label: "Projects Built" },
    { number: "3+", label: "Years Exp." },
    { number: "10+", label: "Technologies" },
  ];

  const details = [
    { label: "Location", value: "Pakistan · Remote Worldwide" },
    {
      label: "Email",
      value: "muhammadabuhurairah22@gmail.com",
      isEmail: true,
    },
    { label: "Timezone", value: "PKT (UTC+5)" },
  ];

  return (
    <section id="contact" className="section-border">
      {/* TOP SECTION - Dark Espresso Background */}
      <div className="contact-top">
        {/* Left Side */}
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "3.5rem",
              fontWeight: 300,
              color: "#F7F3EC",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ fontStyle: "italic", color: "#A0714F" }}>Great</span>
          </h2>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(247,243,236,0.6)",
              lineHeight: 1.6,
              marginBottom: "1rem",
              maxWidth: "500px",
            }}
          >
            Have a project in mind or want to discuss a collaboration? I&apos;m
            always open to exploring new opportunities and building something
            extraordinary together.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "#A0714F",
              marginBottom: "2.5rem",
            }}
          >
            &ldquo;Clean code. Scalable systems. Delivered on time.&rdquo;
          </p>

          {/* Contact Details with Dotted Leaders */}
          <div style={{ marginBottom: "2rem" }}>
            {details.map((detail) => (
              <div key={detail.label} className="contact-detail-row">
                <span className="contact-detail-label">{detail.label}</span>
                <span className="contact-detail-dots" />
                {detail.isEmail ? (
                  <a
                    href={`mailto:${detail.value}`}
                    className="contact-detail-value email"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="contact-detail-value">{detail.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="https://github.com/itz-hurairah18"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(247,243,236,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#A0714F")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(247,243,236,0.6)")
              }
            >
              → GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/itzhurairah18/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(247,243,236,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#A0714F")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(247,243,236,0.6)")
              }
            >
              → LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="contact-stat">
              <div className="contact-stat-number">{stat.number}</div>
              <div className="contact-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTION - Ivory Background */}
      <div className="contact-bottom">
        {/* Availability Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#1C1007",
            }}
          >
            Currently Available
          </span>
        </div>

        {/* Availability Sentence */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "#1C1007",
            fontWeight: 300,
            lineHeight: 1.5,
            marginBottom: "2.5rem",
            maxWidth: "500px",
          }}
        >
          I&apos;m currently accepting new projects and available for freelance
          work, consulting, and full-time opportunities.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            className="contact-bottom-input"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            className="contact-bottom-input"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            className="contact-bottom-input contact-bottom-textarea"
            placeholder="Tell me about your project"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            required
            style={{ minHeight: "120px", resize: "vertical" }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-send-btn"
          >
            <span>Send Message</span>
            <span className="send-arrow">→</span>
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "#A0714F",
                marginTop: "1rem",
              }}
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "#dc2626",
                marginTop: "1rem",
              }}
            >
              Failed to send message. Please try again or email directly.
            </p>
          )}
        </form>

        {/* Response Time Note */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            color: "#8A7560",
            marginTop: "1.5rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(28,16,7,0.08)",
          }}
        >
          I typically respond within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
