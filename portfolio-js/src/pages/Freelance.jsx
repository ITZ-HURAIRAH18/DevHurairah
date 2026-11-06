import {
  Store,
  ShieldCheck,
  ShoppingCart,
  LayoutDashboard,
  BadgeCheck,
  Phone,
  Globe,
  Calendar,
  MapPin,
  User,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const Freelance = () => {
  const projects = [
    {
      title: "SA Traders",
      subtitle: "Fully Customized E-Commerce Store + Admin Panel",
      badge: "Delivered",
      clientBadge: "Freelance Client",
      description:
        "End-to-end e-commerce platform with a custom admin panel — product management, order verification, checkout, and a branded responsive storefront.",
      image: "/assets/satraders.png",
      liveUrl: "https://www.sa-traders.com/",
      features: [
        { icon: LayoutDashboard, label: "Admin Panel" },
        { icon: ShoppingCart, label: "Custom Checkout" },
        { icon: ShieldCheck, label: "Order Verification" },
        { icon: Store, label: "Custom Storefront" },
      ],
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Admin Dashboard",
        "Responsive Design",
      ],
      verification: {
        owner: "Shahid Mehmood",
        year: "Aug 2026 – Present",
        phone: "+92 301 8654311",
        location: "Pakistan",
      },
    },
  ];

  return (
    <section
      id="freelance"
      className="py-14 sm:py-20 bg-[#FFF8F2] border-t border-[#E8DDD0]"
    >
      <div className="max-w-5xl wide:max-w-6xl xwide:max-w-7xl uwide:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] border border-[#E8DDD0] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">
              Freelance · Since 2023
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#2D1B0E] tracking-tight">
            Freelance{" "}
            <span className="gradient-text font-serif italic font-normal">
              Projects
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5C4033] max-w-lg leading-relaxed">
            Real products, delivered for real clients — here is a featured
            client build.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="warm-card rounded-xl border border-[#E8DDD0] overflow-hidden hover:border-[#8B5E3C]/50 transition-all duration-200"
            >
              {/* Browser bar */}
              <div className="bg-[#FAF7F2] px-4 py-2 border-b border-[#E8DDD0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
                    <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
                    <span className="w-2 h-2 rounded-full bg-[#98C379]" />
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#8A7560]">
                    freelance/{project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider">
                  <BadgeCheck size={11} /> {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row">
                {/* Screenshot — constrained height */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative md:w-[380px] lg:w-[440px] shrink-0 bg-[#0f0b07] overflow-hidden group block flex items-center justify-center"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — live store screenshot`}
                    loading="lazy"
                    className="w-full h-auto md:h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0E]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 right-3 bg-white/90 text-[#2D1B0E] text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <ExternalLink size={10} /> View Live
                  </span>
                </a>

                {/* Details */}
                <div className="flex-1 p-4 sm:p-5">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#2D1B0E]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider font-semibold whitespace-nowrap mt-0.5">
                      {project.clientBadge}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] italic text-[#8B5E3C] mb-2">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-[13px] text-[#5C4033] leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Feature chips — inline row */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#2D1B0E] bg-[#FAF7F2] border border-[#E8DDD0] rounded-md px-2 py-1"
                      >
                        <f.icon
                          size={12}
                          className="text-[#8B5E3C] shrink-0"
                        />
                        {f.label}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 mb-3 pb-3 border-b border-[#E8DDD0]/60">
                    {project.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 bg-[#FAF7F2] text-[#5C4033] border border-[#E8DDD0] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons — compact */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B5E3C] hover:bg-[#764D2E] text-white font-sans text-[11px] sm:text-xs font-semibold rounded-lg shadow-sm transition-all duration-200"
                    >
                      <Globe size={12} /> Visit Live Store
                    </a>
                    <a
                      href={`tel:${project.verification.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-transparent hover:bg-[#8B5E3C]/10 text-[#8B5E3C] border border-[#8B5E3C]/30 font-sans text-[11px] sm:text-xs font-semibold rounded-lg transition-all duration-200"
                    >
                      <Phone size={12} /> Contact Owner
                    </a>
                  </div>
                </div>
              </div>

              {/* Verification footer — single compact row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 bg-[#FAF7F2] border-t border-[#E8DDD0] px-4 py-2 text-[10px] sm:text-[11px]">
                <span className="inline-flex items-center gap-1 font-mono font-bold text-[#8B5E3C] uppercase tracking-wider">
                  <BadgeCheck size={11} /> Verified
                </span>
                <span className="inline-flex items-center gap-1 text-[#8A7560]">
                  <User size={11} />
                  <span className="font-sans font-semibold text-[#2D1B0E]">
                    {project.verification.owner}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-[#8A7560]">
                  <Calendar size={11} />
                  <span className="font-sans font-semibold text-[#2D1B0E]">
                    {project.verification.year}
                  </span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[#8A7560]">
                  <MapPin size={11} />
                  <span className="font-sans font-semibold text-[#2D1B0E]">
                    {project.verification.location}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#contact"
            className="btn-brown text-xs sm:text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 shadow-warm"
          >
            Start a Freelance Project <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
