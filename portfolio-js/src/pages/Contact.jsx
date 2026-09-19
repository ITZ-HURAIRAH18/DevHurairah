import { useState } from "react";

const Contact = () => {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF8F0] border border-[#E8DDD0] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
            <span className="font-mono text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2D1B0E] tracking-tight">
            Let&apos;s Build Something <span className="gradient-text font-serif italic font-normal">Extraordinary</span>
          </h2>
          <div className="w-20 h-1 bg-[#8B5E3C] rounded-full mt-1" />
        </div>

        {/* Split Layout: Left Info (5 cols) & Right Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Email + Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-[#2D1B0E]">
                Have a vision or project in mind?
              </h3>
              <p className="font-sans text-base text-[#5C4033] leading-relaxed">
                Whether you need a full-stack web application, mobile software, or intelligent AI automation pipelines — I am ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#8B5E3C]/10 border border-[#8B5E3C]/20 text-[#8B5E3C] flex items-center justify-center font-mono text-xs font-bold">
                  @
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[#8A7560] uppercase tracking-wider">Direct Email</p>
                  <a
                    href="mailto:abuhurx@gmail.com"
                    className="font-sans font-semibold text-base text-[#2D1B0E] hover:text-[#8B5E3C] transition-colors"
                  >
                    abuhurx@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#8B5E3C]/10 border border-[#8B5E3C]/20 text-[#8B5E3C] flex items-center justify-center font-mono text-xs font-bold">
                  ✦
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[#8A7560] uppercase tracking-wider">Location & Timezone</p>
                  <p className="font-sans font-semibold text-base text-[#2D1B0E]">
                    Pakistan (UTC+5) · Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="pt-4 border-t border-[#E8DDD0] space-y-3">
              <p className="font-mono text-xs text-[#8A7560] uppercase tracking-wider font-semibold">
                Social Networks:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/itz-hurairah18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-brown text-xs px-5 py-2.5 rounded-lg"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-brown text-xs px-5 py-2.5 rounded-lg"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="warm-card p-5 sm:p-8 sm:p-10 rounded-2xl border border-[#E8DDD0] shadow-warm">
              <h3 className="font-heading font-bold text-2xl text-[#2D1B0E] mb-2">
                Send a Message
              </h3>
              <p className="font-sans text-xs text-[#8A7560] mb-8">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#2D1B0E] font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E8DDD0] rounded-xl font-sans text-sm text-[#2D1B0E] focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all placeholder-[#8A7560]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#2D1B0E] font-semibold mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E8DDD0] rounded-xl font-sans text-sm text-[#2D1B0E] focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all placeholder-[#8A7560]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#2D1B0E] font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project details, timeline, or scope..."
                    required
                    className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E8DDD0] rounded-xl font-sans text-sm text-[#2D1B0E] focus:outline-none focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/20 transition-all placeholder-[#8A7560] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brown w-full py-4 text-sm font-bold rounded-xl shadow-warm hover:shadow-warm-hover disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message ↗"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-[#8B5E3C]/10 border border-[#8B5E3C] rounded-xl text-[#8B5E3C] font-mono text-xs font-semibold text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-mono text-xs font-semibold text-center">
                    Something went wrong. Please email abuhurx@gmail.com directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
