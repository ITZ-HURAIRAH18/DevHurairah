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

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/itz-hurairah18" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/itzhurairah18/" },
  ];

  return (
    <section id="contact" className="section-border" style={{ maxHeight: '100vh' }}>
      <div className="contact-grid max-w-7xl mx-auto">
        {/* Left Half: Espresso Background */}
        <div className="contact-left bg-espresso flex flex-col" style={{ padding: '3rem' }}>
          {/* Headline — reduced size */}
          <h2
            className="font-serif font-light text-page leading-tight"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Let&apos;s Build Something{" "}
            <span className="italic text-copper">Great</span>
          </h2>

          {/* Subtext — tighter */}
          <p className="font-sans text-sm font-light text-page/70 leading-relaxed" style={{ margin: 0 }}>
            Have a project in mind or want to discuss a collaboration? I&apos;m always
            open to exploring new opportunities.
          </p>

          {/* Quote — tighter */}
          <p className="font-serif text-lg italic text-page/90 font-light leading-relaxed" style={{ margin: 0 }}>
            &ldquo;Clean code. Scalable systems. Delivered on time.&rdquo;
          </p>

          {/* Copper horizontal rule */}
          <hr className="border-0 h-px bg-copper/40" style={{ margin: 0 }} />

          {/* Contact Detail Table — tighter rows */}
          <div className="contact-details flex flex-col" style={{ gap: '0' }}>
            <div className="contact-detail-row flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3" style={{ padding: '0.6rem 0' }}>
              <span className="font-mono text-mono-xs uppercase tracking-wider text-page/50 flex-shrink-0">
                Location
              </span>
              <span className="h-px bg-page/10 flex-1 hidden sm:block" />
              <span className="font-sans text-sm text-page/80">
                Pakistan · Remote Worldwide
              </span>
            </div>
            <div className="contact-detail-row flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3" style={{ padding: '0.6rem 0' }}>
              <span className="font-mono text-mono-xs uppercase tracking-wider text-page/50 flex-shrink-0">
                Email
              </span>
              <span className="h-px bg-page/10 flex-1 hidden sm:block" />
              <a
                href="mailto:muhammadabuhurairah22@gmail.com"
                className="font-serif text-sm italic text-copper hover:opacity-80 transition-opacity no-underline"
              >
                muhammadabuhurairah22@gmail.com
              </a>
            </div>
            <div className="contact-detail-row flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3" style={{ padding: '0.6rem 0' }}>
              <span className="font-mono text-mono-xs uppercase tracking-wider text-page/50 flex-shrink-0">
                Timezone
              </span>
              <span className="h-px bg-page/10 flex-1 hidden sm:block" />
              <span className="font-sans text-sm text-page/80">
                PKT (UTC+5)
              </span>
            </div>
          </div>

          {/* Social Links — immediately after timezone row */}
          <div className="flex items-center gap-0">
            {socialLinks.map((link, index) => (
              <div key={link.label} className="flex items-center">
                {index > 0 && <div className="w-px h-4 bg-page/20 mx-3" />}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-mono-xs uppercase tracking-wider text-page/60 hover:text-copper transition-colors no-underline flex items-center gap-1"
                >
                  <span>→</span> {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Decorative Watermark — fills remaining space tastefully */}
          <div className="contact-watermark flex flex-1 items-center justify-center pointer-events-none select-none">
            <span className="text-copper">&lt; / &gt;</span>
          </div>
        </div>

        {/* Right Half: Sand/Ivory Background */}
        <div className="contact-right bg-card px-6 lg:px-12 xl:px-20 py-8 lg:py-12 flex flex-col overflow-y-auto">
          {/* Availability Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="pulse-dot" />
            <span className="font-mono text-mono-xs uppercase tracking-wider text-espresso">
              Currently Available
            </span>
          </div>

          {/* Availability Sentence */}
          <p className="font-serif text-xl lg:text-2xl italic text-espresso font-light leading-relaxed mb-10">
            I&apos;m currently accepting new projects and available for freelance work,
            consulting, and full-time opportunities.
          </p>

          {/* Stat Boxes Row */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="flex flex-col pt-3 border-t border-border">
              <span className="font-serif text-2xl lg:text-3xl font-light text-copper leading-none mb-1">
                20+
              </span>
              <span className="font-mono text-mono-tiny uppercase tracking-wider text-muted">
                Projects Built
              </span>
            </div>
            <div className="flex flex-col pt-3 border-t border-border">
              <span className="font-serif text-2xl lg:text-3xl font-light text-copper leading-none mb-1">
                3+
              </span>
              <span className="font-mono text-mono-tiny uppercase tracking-wider text-muted">
                Years Exp.
              </span>
            </div>
            <div className="flex flex-col pt-3 border-t border-border">
              <span className="font-serif text-2xl lg:text-3xl font-light text-copper leading-none mb-1">
                10+
              </span>
              <span className="font-mono text-mono-tiny uppercase tracking-wider text-muted">
                Technologies
              </span>
            </div>
          </div>

          {/* Contact Form with Floating Labels */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mb-10">
            {/* Name Input */}
            <div className="floating-label-group">
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bottom-border-input"
                placeholder=" "
              />
              <label htmlFor="contact-name" className="floating-label">
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="floating-label-group">
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formState.email}
                onChange={handleChange}
                required
                className="bottom-border-input"
                placeholder=" "
              />
              <label htmlFor="contact-email" className="floating-label">
                Your Email
              </label>
            </div>

            {/* Message Input */}
            <div className="floating-label-group">
              <textarea
                name="message"
                id="contact-message"
                value={formState.message}
                onChange={handleChange}
                required
                className="bottom-border-input bottom-border-textarea"
                rows={4}
                placeholder=" "
              />
              <label htmlFor="contact-message" className="floating-label">
                Tell me about your project
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-send"
            >
              <span>Send Message</span>
              <span className="btn-send-arrow">→</span>
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="font-mono text-mono-xs text-copper">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="font-mono text-mono-xs text-red-600">
                Failed to send message. Please try again or email directly.
              </p>
            )}
          </form>

          {/* Professional Closing Line */}
          <p className="font-mono text-mono-tiny text-muted/70 mt-auto pt-6 border-t border-border">
            Response time: within 24 hours · Open to remote worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
