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

/* Lightweight CSS mockup of the SA Traders storefront + admin panel.
   Used so the section looks complete without needing a screenshot asset. */
const StorefrontPreview = () => (
  <div className="relative w-full h-full bg-[#120d08] overflow-hidden flex flex-col">
    {/* Browser chrome */}
    <div className="bg-[#1c140c] px-3 py-2 border-b border-[#8B5E3C]/25 flex items-center gap-2 shrink-0">
      <div className="flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
        <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
        <span className="w-2 h-2 rounded-full bg-[#98C379]" />
      </div>
      <div className="flex-1 mx-2">
        <div className="bg-[#2D1B0E] rounded-md px-2 py-0.5 text-[9px] sm:text-[10px] font-mono text-[#C9B49A] truncate">
          https://www.sa-traders.com/
        </div>
      </div>
    </div>

    {/* Storefront mock */}
    <div className="relative flex-1 p-3 sm:p-4 flex flex-col gap-2.5">
      {/* Store header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#8B5E3C] flex items-center justify-center">
            <Store size={11} className="text-white" />
          </span>
          <span className="font-heading font-extrabold text-[11px] sm:text-xs text-[#E8DDD0] tracking-wide">
            SA TRADERS
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#C9B49A]">
          <ShoppingCart size={12} />
          <span className="w-4 h-4 rounded-full bg-[#8B5E3C]/60 text-[8px] font-mono text-white flex items-center justify-center">
            2
          </span>
        </div>
      </div>

      {/* Product grid mock */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-md bg-[#2D1B0E] border border-[#8B5E3C]/20 p-1.5 flex flex-col gap-1"
          >
            <div className="h-7 sm:h-9 rounded bg-gradient-to-br from-[#8B5E3C]/50 to-[#5C4033]/30" />
            <div className="h-1 w-3/4 rounded bg-[#8B5E3C]/40" />
            <div className="h-1 w-1/2 rounded bg-[#8B5E3C]/25" />
          </div>
        ))}
      </div>

      {/* Admin panel mock — floats over the store */}
      <div className="absolute right-2.5 sm:right-4 bottom-2.5 sm:bottom-4 w-[46%] max-w-[190px] rounded-lg bg-[#FFF8F2] border border-[#8B5E3C]/40 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#8B5E3C]">
          <LayoutDashboard size={10} className="text-white" />
          <span className="font-mono text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-wider">
            Admin Panel
          </span>
        </div>
        <div className="p-1.5 sm:p-2 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] text-[#5C4033]">Orders</span>
            <span className="font-mono text-[8px] font-bold text-[#8B5E3C]">128</span>
          </div>
          <div className="h-1 rounded bg-[#8B5E3C]/20 overflow-hidden">
            <div className="h-full w-3/4 bg-[#8B5E3C]" />
          </div>
          <div className="flex items-center justify-between pt-0.5">
            <span className="font-mono text-[8px] text-[#5C4033]">Products</span>
            <span className="font-mono text-[8px] font-bold text-[#8B5E3C]">64</span>
          </div>
          <div className="h-1 rounded bg-[#8B5E3C]/20 overflow-hidden">
            <div className="h-full w-1/2 bg-[#8B5E3C]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Freelance = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Full eCommerce Admin Panel",
      desc: "Complete backend dashboard where the admin manages the entire store — products, categories, pricing, inventory, orders, and customers — with no code required.",
    },
    {
      icon: ShoppingCart,
      title: "Custom Checkout & Orders",
      desc: "Fully customized cart and checkout flow built around SA Traders' real products, with order tracking and management handled from the admin panel.",
    },
    {
      icon: ShieldCheck,
      title: "Order Verification System",
      desc: "Built-in verification step for each order so the admin can confirm and validate every purchase before it is processed.",
    },
    {
      icon: Store,
      title: "Fully Customized Storefront",
      desc: "A tailor-made online store designed from scratch for SA Traders' product catalog — fast, responsive, and branded to the business.",
    },
  ];

  const stats = [
    { value: "2023", label: "Freelance Since" },
    { value: "100%", label: "Custom Built" },
    { value: "Admin", label: "Managed Store" },
  ];

  return (
    <section id="freelance" className="py-16 sm:py-24 bg-[#FFF8F2] border-t border-[#E8DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
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
            <p className="font-sans text-xs sm:text-sm text-[#5C4033] mt-4 max-w-xl leading-relaxed">
              Real products, delivered for real clients. Since 2023 I have worked independently
              building end-to-end solutions for businesses — from full online stores to automation
              systems. Here is a featured client build.
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
            {/* Left — visual preview */}
            <div className="relative min-h-[240px] sm:min-h-[320px] border-b lg:border-b-0 lg:border-r border-[#E8DDD0]">
              <StorefrontPreview />
            </div>

            {/* Right — project details */}
            <div className="p-5 sm:p-8">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[#2D1B0E]">
                  SA Traders
                </h3>
                <span className="font-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-[#8B5E3C]/10 text-[#8B5E3C] uppercase tracking-wider font-semibold whitespace-nowrap">
                  Freelance Client
                </span>
              </div>

              <p className="font-mono text-xs italic text-[#8B5E3C] mb-3">
                Fully Customized eCommerce Store + Admin Panel
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#5C4033] leading-relaxed mb-4">
                A complete, fully customized online store built for SA Traders to sell their
                products online. The whole store is powered by a custom admin panel — the owner
                manages everything like a real eCommerce business: adding products, handling
                orders, running checkout, and verifying each order, all from one dashboard.
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-5">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-2.5">
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
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mb-5">
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

              {/* Client / Owner verification block */}
              <div className="rounded-xl bg-[#FAF7F2] border border-[#E8DDD0] p-3.5 sm:p-4">
                <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-[#E8DDD0]">
                  <CheckCircle2 size={13} className="text-[#8B5E3C]" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#8B5E3C] uppercase tracking-wider">
                    Project Verification
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2">
                    <User size={13} className="text-[#8A7560] shrink-0" />
                    <div>
                      <p className="font-mono text-[9px] text-[#8A7560] uppercase tracking-wider">
                        Owner
                      </p>
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">
                        Shahid Mehmood
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-[#8A7560] shrink-0" />
                    <div>
                      <p className="font-mono text-[9px] text-[#8A7560] uppercase tracking-wider">
                        Year
                      </p>
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">
                        2023 – Present
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+923018654311"
                    className="flex items-center gap-2 group"
                  >
                    <Phone size={13} className="text-[#8A7560] shrink-0" />
                    <div>
                      <p className="font-mono text-[9px] text-[#8A7560] uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E] group-hover:text-[#8B5E3C] transition-colors">
                        +92 301 8654311
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[#8A7560] shrink-0" />
                    <div>
                      <p className="font-mono text-[9px] text-[#8A7560] uppercase tracking-wider">
                        Location
                      </p>
                      <p className="font-sans text-xs sm:text-sm font-bold text-[#2D1B0E]">
                        Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-4">
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
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
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
