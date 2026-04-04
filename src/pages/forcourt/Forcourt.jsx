import { useState } from "react";

/* ─── Floating stat card ─────────────────────────────────── */
const StatCard = () => (
  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-gray-100 z-10">
    <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-[#00d27b] text-xl">bolt</span>
      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm">Real-time Sync</span>
    </div>
    <p className="text-xs text-slate-500">Instant inventory updates across your entire network.</p>
  </div>
);

/* ─── Feature dot ────────────────────────────────────────── */
const Dot = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-[#00d27b] mt-1.5 shrink-0" />
);

/* ─── Check row ──────────────────────────────────────────── */
const CheckRow = ({ label }) => (
  <div className="flex items-center justify-between p-4 bg-[#f7f9fb] rounded-3xl">
    <span className="font-medium text-sm">{label}</span>
    <span className="material-symbols-outlined text-[#00d27b] text-xl">check_circle</span>
  </div>
);

/* ─── Architecture card ──────────────────────────────────── */
const ArchCard = ({ icon, title, desc }) => (
  <div className="bg-[#f7f9fb] p-8 rounded-3xl border border-[#00d27b]/10">
    <span className="material-symbols-outlined text-[#00d27b] mb-4 text-3xl block">{icon}</span>
    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

/* ─── Channel card ───────────────────────────────────────── */
const ChannelCard = ({ src, title, desc }) => (
  <div className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
    <img
      src={src}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 p-8">
      <h4 className="text-white font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold mb-2">{title}</h4>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  </div>
);

/* ─── Product card ───────────────────────────────────────── */
const ProductCard = ({ icon, title, subtitle, checks, imgSrc }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
    <div className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#006d3d] rounded-3xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold">{title}</h3>
      </div>
      <p className="text-slate-500 mb-10 text-lg">{subtitle}</p>
      <div className="space-y-4">
        {checks.map((c) => (
          <CheckRow key={c} label={c} />
        ))}
      </div>
    </div>
    <div className="bg-emerald-50 p-10 mt-4 h-64 relative">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-3xl shadow-lg" />
    </div>
  </div>
);

export default function Forecourt() {
  const [navOpen, setNavOpen] = useState(false); // kept for future use if Navbar is added

  return (
    <div className="bg-white text-[#191c1d] selection:bg-green-200 selection:text-green-900 font-['Manrope',sans-serif]">

      <main className="pt-20">

        {/* ============================================
            HERO SECTION – NOW 100% MATCHING DOOR / CCTV BACKGROUND
            (exact same deep navy + multi-layer teal glows, overlays, and contrast)
            ============================================ */}
       {/* ============================================
    HERO SECTION – matching screenshot exactly
    ============================================ */}
<section
  id="hero"
  className="relative min-h-[420px] md:min-h-[520px] flex flex-col overflow-hidden px-6 md:px-12 pt-8 pb-20"
  style={{ background: '#0d1b2a' }}
>
  {/* Top-right teal glow */}
  <div
    className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
    style={{
      background:
        'radial-gradient(ellipse at top right, rgba(0,120,80,0.55) 0%, rgba(0,80,55,0.28) 40%, transparent 70%)',
    }}
  />
  {/* Bottom-left blue glow */}
  <div
    className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
    style={{
      background:
        'radial-gradient(ellipse at bottom left, rgba(10,40,100,0.50) 0%, transparent 65%)',
    }}
  />

  {/* === BACK NAV === */}
 

  {/* === MAIN CONTENT === */}
  <div className="relative z-10 max-w-[1280px] mx-auto w-full flex flex-col gap-8">

    {/* Icon + Badge row */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        <span className="material-symbols-outlined text-[#00d27b] text-2xl">local_gas_station</span>
      </div>

      <div
        className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold"
        style={{
          background: 'rgba(0,210,123,0.15)',
          border: '1px solid rgba(0,210,123,0.35)',
          color: '#00d27b',
        }}
      >
        Intelligent Fuel Station Management
      </div>
    </div>

    {/* Headline */}
    <h1
      className="font-extrabold leading-[1.05] tracking-[-0.025em] text-white"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
        maxWidth: '800px',
      }}
    >
      Forecourt &amp; Payment Automation
    </h1>

    {/* Subtitle */}
    <p
      className="text-white/55 leading-relaxed"
      style={{ fontSize: '1.05rem', maxWidth: '560px' }}
    >
      In partnership with FuelTorque, a cutting-edge solution for real-time management and
      monitoring of fuel station activities, alongside comprehensive inventory management for store
      items and groceries. Supports hybrid cloud-based and on-premise deployment.
    </p>
  </div>
</section>
        {/* ============================================
            ALL REMAINING SECTIONS – unchanged (brand-consistent)
            ============================================ */}

        {/* Solution Overview */}
        <section className="bg-[#f2f4f6] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl font-bold mb-6 text-[#191c1d]">
                  Why Choose This Solution
                </h2>
                <p className="text-slate-500 text-lg">
                  We bridge the gap between complex hardware and daily operations, providing a
                  single source of truth for site-level activity.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="text-[#006d3d] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm tracking-widest uppercase">
                  The Nonsonet Edge
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "visibility",
                  title: "Real-Time Visibility",
                  desc: "Complete oversight of fuel station activities",
                },
                {
                  icon: "account_tree",
                  title: "Hybrid Deployment",
                  desc: "Supports both cloud-based and on-premise",
                },
                {
                  icon: "trending_down",
                  title: "Cost Optimization",
                  desc: "Significant cost reduction through smart automation",
                },
                {
                  icon: "trending_down",
                  title: "Self-Service at Pump",
                  desc: "Enables efficient self-service operations",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-10 rounded-3xl transition-transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-[#00d27b]/10 rounded-3xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-[#00d27b] text-3xl">
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold mb-4">{title}</h3>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One Platform */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#191c1d]">
                One Platform. Every Channel.
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Integrate every facet of your forecourt retail business into a unified digital
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpV5tSL1KSTDH03WxXX-QAgnLvaIi0S7wQOFoJKehpyxghAhFhTpqAxdljDD2bRlcIAIpGvjaoGjd0BngtplNbTS6FfBlaIrQ-gQf1H8HfllfcjrcGhjxcbYJqE5Ef_WYjmrijLlF0yZrt1jrvGfyvk_AOcOQqWl-qeBQZN2QoKF9EE0l6VVhcBiSzLkoXFQZB96xy3Vt7KHtPK4eCtxIYwtHQjZDmF-WnLv5B-QjSrbW_tRnfgXcXcO494pSnjmAk1MtRniZqh3Kt",
                  title: "Fuel Retailing",
                  desc: "Advanced pump control and wet-stock management.",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9cK-ja8oZwsgfn2uSmjOFxCFJ5iqErjFA1U-xl3cgu3c_kpJksPek4hVc6u7dooWhKFE47iQTgrdQxIXOJrHkf31SH7jCWG7IhguQDA-YIUlTu9dCVBJty-F22YdP0f31ELs5HV2zFRDy5C590Fr8i_cjt_2qDsY75YsprD0cr-OGoWamuLvwHoBQtK8SDQz-Tns0CQ2Ek-KWQxGmJafzJVy9rzWrTMUeilPNeCCUvXn6-vspflvUI5c5LgKn0GQX0evdLSWyXIgs",
                  title: "Convenience Store",
                  desc: "Inventory tracking and high-speed POS checkouts.",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT_3vsVltQxJGfcKi4gYqRnvlVDXbCx4BXfbKX932f5EEx4W-G0n6FmGkN5hkWXXf7NAFOs8t4ARbozBHU1qRvna5Gkcl3PWHFTr4sOySSNnINW00cAazKwD6IUSS8t1CUYdTWoc6BK6P0qBN4a7cOcPJiKOXbKA0FfCjY8GLvKP0kUKkjKKzaj6pZATOnzHBUra84l48TFPMIRoEArlaHvob8arQypqVaixovsQj6vh1FAu1hYy8xVS6S7-_BidY9h6smLiLdlRnu",
                  title: "Fast Food",
                  desc: "Kitchen orders and integrated QSR management.",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9nKQMf-D8xRbd0JXQJECZHo3QIfISBxycEx5CVBQCeUKDfyfz5gdq_6PdUkEr2Uz9ZpVjJnwUYumIASz4gKSbTOtkb1NImtWSpyWzcPcyw2xldC60qGZFl-ZoQSKrcUuN-XyjYzQf9CYT2l3GN3iouZK_KnOWdKWQOTchOVE-tKHPtpnxuGM1gEbqyUvq-VjO3I_LTY1SJ7skuM7zmRjUu4bW3xtxBIrbjRHVeO1vRxzl5sdYWX1AXJyyuHCGNa_QnE-KLBKaU6Zp",
                  title: "Integrated Back Office",
                  desc: "Centralized reporting and fiscal compliance.",
                },
              ].map((card) => (
                <ChannelCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-[#006d3d] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm tracking-widest uppercase mb-4 block">
                Engineered for Reliability
              </span>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-[#191c1d]">
                Resilient System Architecture
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our architecture is designed to keep your site running even during network outages.
                With hardware independence and automated synchronization, your business never stops.
              </p>
              <ul className="space-y-4">
                {[
                  "Hardware Agnostic Compatibility",
                  "Offline POS Independence",
                  "Automated Cloud Sync",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "hub",
                  title: "POS Independence",
                  desc: "The FuelTorque POS works independently of the central server, ensuring sales continue during connectivity drops.",
                },
                {
                  icon: "sync_alt",
                  title: "Auto-Synchronization",
                  desc: "Background tasks automatically push local transaction data to the cloud whenever a connection is detected.",
                },
                {
                  icon: "extension",
                  title: "Scalable Modularity",
                  desc: "Add new dispensers, stores, or restaurants to your network without redesigning the entire system architecture.",
                },
                {
                  icon: "security",
                  title: "Enterprise Security",
                  desc: "End-to-end encryption for all fiscal data and user access controls to prevent unauthorized site changes.",
                },
              ].map((card) => (
                <ArchCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-24 px-6 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ProductCard
                icon="point_of_sale"
                title="FuelTorque POS"
                subtitle="A lightning-fast interface designed for high-pressure retail environments."
                checks={[
                  "Touch-Optimized Interface",
                  "Direct Pump Integration",
                  "Offline-First Transactional Engine",
                ]}
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnoj-y6J4GTJhSfU46vqYDbirxWVSGXqDjpmRosi5RdNzwJQqoKnIDmBUfxpGuqWYD98hpjDYLuQXTxHh16jN9DsOIL2RDQgdDflKGO2UXeaok70l6MBSr9MM5eHMf4Md6uYKo3EDZlC3bA4bZmbqVO-nshXHyHLuaOs0vWtqOzCr21lGVuNuny0ejxxUmQ0wyB3BvG4lpJn0LwVNhIB_KACAO1Sf41uwbSwLpV4HLdtB1kflzfAcMJPocdN6kH0Zk4IMlmJf0tkU"
              />
              <ProductCard
                icon="analytics"
                title="FuelTorque BOS"
                subtitle="The brain of your operation. Control inventory and financials with precision."
                checks={[
                  "Automated Stock Reconciliation",
                  "Comprehensive Financial Reporting",
                  "Advanced Supplier Management",
                ]}
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD0EOBNASfREiFdvb_c5GM6cHgoUXdo9WdQloUzDEYGph1W4mJPLjN9fX5x6L1Kx_XoikQfwxicH8vsJzHhl4pgy9Yj327-_zVU7Idc0ueWM9WpZZIJqg3ZFAMWtdVmyaHDWoqLvEaYxNig_9fr3BNHfu6cKwGpVows7tfmCwbyfeAIDiYQ9HSx2X5wsdjxzgywnFYsSJYDGmygBqNpvAVmgZYlCL36b8T66cuRdFu_08G8lT08hF3rgyAHCg6hPs_Z6dbHNAV6mvFo"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}