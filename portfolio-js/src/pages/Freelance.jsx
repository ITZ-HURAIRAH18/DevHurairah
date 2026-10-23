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
  CheckCircle2,
  User,
} from "lucide-react";

const Freelance = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Full E-Commerce Admin Panel",
      desc: "Manage products, pricing, inventory, orders and customers from one dashboard.",
    },
    {
      icon: ShoppingCart,
      title: "Custom Checkout & Orders",
      desc: "Custom cart and checkout built around SA Traders' real product catalogue.",
    },
    {
      icon: ShieldCheck,
      title: "Order Verification System",
      desc: "Confirm and validate every order before it is processed.",
    },
    {
      icon: Store,
      title: "Fully Customized Storefront",
      desc: "Tailor-made, responsive storefront branded to the business.",
    },
  ];

  const stats = [
    { value: "2023", label: "Freelance Since" },
    { value: "100%", label: "Custom Built" },
    { value: "Admin", label: "Managed Store" },
  ];

  return (
    <section id="freelance" className="py-14 sm:py-20 bg-[#FFF8F2] border-t border-[#E8DDD0]">
      <div className="max-w-7xl wide:max-w-[1440px] xwide:max-w-[1840px] uwide:max-w-[2100px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F2] border border-[#E8DDD0] rounded-full mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8B5E3C]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider">
                Freelance Journey · Since 2023
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#2D1B0E] tracking-tight">
              Freelance <span className="gradient-text font-serif italic font-normal">Projects</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#8B5E3C] rounded-full mt-1.5" />
            <p className="font-sans text-xs sm:text-sm text-[#5C4033] mt-3 max-w-xl leading-relaxed">
              Real products, delivered for real clients since 2023 — here is a featured client build.
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex items-stretch gap-2 sm:gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="warm-card px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-[#E8DDD0] text-center min-w-[74px] sm:min-w-[86px]"
              >
                <div className="font-heading font-extrabold text-base sm:text-lg text-[#8B5E3C]">
                  {s.value}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-[#8A7560] uppercase tracking-wider mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Freelance Project — SA Traders */}
        <div className="warm-card rounded-2xl overflow-hidden border border-[#E8DDD0]">
          {/* Browser bar header */}
          <div className="bg-[#FAF7F2] px-3.5 py-2 border-b border-[#E8DDD0] flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
              <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
              <span className="w-2 h-2 rounded-full bg-[#98C379]" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#8A7560] truncate max-w-[200px] sm:max-w-none">
              freelance/sa-traders-ecommerce-store
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider">
              <BadgeCheck size={11} /> Delivered
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — real screenshot of the live SA Traders store */}
            <div className="relative bg-[#120d08] border-b lg:border-b-0 lg:border-r border-[#E8DDD0] overflow-hidden group">
              <a
                href="https://www.sa-traders.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the live SA Traders store"
                className="block lg:absolute lg:inset-0"
              >
                <img
                  src="/assets/satraders.png"
                  alt="SA Traders — fully customized E-Commerce store homepage"
                  loading="lazy"
                  className="block w-full h-auto lg:h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D1B0E]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Right — project details */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[#2D1B0E]">
                  SA Traders
                </h3>
                <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider font-semibold whitespace-nowrap">
                  Freelance Client
                </span>
              </div>

              <p className="font-mono text-xs italic text-[#8B5E3C] mb-2">
                Fully Customized E-Commerce Store + Admin Panel
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-3">
                A fully customized online store for SA Traders, powered by a custom admin panel —
                the owner manages products, orders, checkout and verification from one dashboard.
              </p>

              {/* Feature list — two columns on wide screens */}
              <div className="grid gap-2.5 sm:gap-3 xl:grid-cols-2 mb-4">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-md bg-[#8B5E3C]/10 border border-[#8B5E3C]/20 flex items-center justify-center">
                      <f.icon size={12} className="text-[#8B5E3C]" />
                    </span>
                    <div>
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E] leading-snug">
                        {f.title}
                      </p>
                      <p className="font-sans text-[11px] sm:text-xs text-[#5C4033] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {["Custom Storefront", "Admin Dashboard", "Product Management", "Checkout System", "Order Verification", "Responsive Design"].map(
                  (t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] text-[#2D1B0E] border border-[#E8DDD0] rounded-md"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <a
                  href="https://www.sa-traders.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#8B5E3C] hover:bg-[#764D2E] text-white font-sans text-xs font-semibold rounded-lg shadow-sm transition-all duration-200"
                >
                  <Globe size={13} /> Visit Live Store ↗
                </a>
                <a
                  href="tel:+923018654311"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-transparent hover:bg-[#8B5E3C]/10 text-[#8B5E3C] border border-[#8B5E3C] font-sans text-xs font-semibold rounded-lg transition-all duration-200"
                >
                  <Phone size={13} /> Contact Owner
                </a>
              </div>
            </div>
          </div>

          {/* Verification strip — compact single-row footer */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 bg-[#FAF7F2] border-t border-[#E8DDD0] px-4 sm:px-6 py-3">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-[#8B5E3C]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#8B5E3C] uppercase tracking-wider">
                Project Verification
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <User size={13} className="text-[#8A7560]" />
              <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7560] uppercase tracking-wider">Owner</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">Shahid Mehmood</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} className="text-[#8A7560]" />
              <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7560] uppercase tracking-wider">Year</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">Aug 2026 – Present</span>
            </span>

            <a
              href="tel:+923018654311"
              className="inline-flex items-center gap-1.5 hover:opacity-75 transition-opacity"
            >
              <Phone size={13} className="text-[#8A7560]" />
              <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7560] uppercase tracking-wider">Phone</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">+92 301 8654311</span>
            </a>

            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#8A7560]" />
              <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7560] uppercase tracking-wider">Location</span>
              <span className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">Pakistan</span>
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="font-sans text-xs sm:text-sm text-[#5C4033] mb-3">
            Need a custom store or web app built for your business?
          </p>
          <a
            href="#contact"
            className="btn-brown text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-xl inline-flex items-center gap-2 shadow-warm"
          >
            Start a Freelance Project ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
