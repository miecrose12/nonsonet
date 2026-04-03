import React from 'react';
import Navbar from '../../components/navbar/Navbar';

/* ─── Network Canvas Animation (exact same as Printer / Landing page) ───────────── */
const networkCanvasRef = (el) => {
  if (!el) return;
  const ctx = el.getContext('2d');
  let dots = [], animId;

  const resize = () => {
    el.width = el.offsetWidth;
    el.height = el.offsetHeight;
    dots = Array.from({ length: Math.floor((el.width * el.height) / 9000) }, () => ({
      x: Math.random() * el.width,
      y: Math.random() * el.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, el.width, el.height);
    const maxDist = 130;
    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > el.width) d.vx *= -1;
      if (d.y < 0 || d.y > el.height) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,210,123,0.55)';
      ctx.fill();
    }
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(0,180,110,${0.18 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener('resize', resize);
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  };
};

// ─── Google Fonts injected via style tag (kept for Why + Solutions sections) ─────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined', sans-serif;
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }
    .font-headline { font-family: 'Manrope', sans-serif; }
    .font-body-custom { font-family: 'Inter', sans-serif; }
    .hero-img-wrap { transform: rotate(2deg); transition: transform 0.7s ease; }
    .hero-img-wrap:hover { transform: rotate(0deg); }
    .sol-card-img { transition: transform 0.5s ease; }
    .sol-card:hover .sol-card-img { transform: scale(1.1); }
    .why-link-arrow { transition: transform 0.25s ease; }
    .why-card:hover .why-link-arrow { transform: translateX(4px); }
  `}</style>
);

// ─── Image assets ─────────────────────────────────────────────────────────────
const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGugUzo66x53KZPxl-ZoY8ONVsGOdWAgN9mHK3ySAngSpvNKWs6w5C3V7wa4Qvii8INMiAlrxF0K3EqTfZ5YGvtGXzGxBPN93-eAtgsmSYKvfsPjKOY3o3AP00qXdXWqzVLrAiqV1BWXdZuwFwxX0vGCNKvD3Ip1YQDBePl-x2Kyq66v9NFf99JVDhIIaJfrj0FSqCUC8bmlayec64M724ZJmxBf18bPQamO_nQzVu44vkHlu6ZE_6XXgMAy_wRf5ao5uGCzUVDNvU';

// ─── Icon helper ──────────────────────────────────────────────────────────────
const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// ─── HERO SECTION – 100% matching Printer page typography + background ────────
const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-28"
    style={{ background: '#08111f' }}
  >
    {/* Animated network canvas – exact same as Printer */}
    <canvas
      ref={networkCanvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />

    {/* Subtle right-side radial glow – exact same as Printer */}
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)',
      }}
    />

    <div className="relative z-10 max-w-[1280px] mx-auto w-full">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">

        {/* Left Content – exact Printer typography & colors */}
        <div className="lg:col-span-7 z-10">
          {/* Badge – exact same style as Printer */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
            Solar Inverter Solutions • Lagos, Nigeria
          </div>

          {/* Headline – exact font, size, weight, tracking as Printer */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6">
            Power Your Future with{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #00d27b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              intelligent
            </span>{' '}
            Solar Inverter Solutions
          </h1>

          {/* Subtext – exact style as Printer */}
          <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">
            Experience the peak of atmospheric clarity and technical rigor. Our next-generation solar inverters transform raw sunlight into high-efficiency electrical power for a sustainable, resilient future.
          </p>

          {/* Stats row – exact same layout as Printer (solar-adapted) */}
          <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                98%
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Avg. Efficiency
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                25
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Year Warranty
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                24/7
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Monitoring
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section – brand-consistent with Printer design */}
        <div className="lg:col-span-5 relative">
          <div
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-l-8 border-[#00d27b] ring-1 ring-white/10"
            style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
          >
            <img
              alt="Modern solar panel array on a contemporary building roof under a bright blue sky"
              className="w-full h-[500px] object-cover"
              src={heroImg}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08111f]/40" />
          </div>

          {/* Floating Stats Card – kept from Printer design, solar-adapted */}
          <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#00d27b] to-white flex items-center justify-center text-white text-3xl shadow-lg">
                ⚡
              </div>
              <div>
                <p className="text-xs font-semibold text-[#00d27b] tracking-widest uppercase">Peak Performance</p>
                <p className="text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white">98% Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Why Choose Us (unchanged) ────────────────────────────────────────────────
const whyCards = [
  {
    id: 'efficiency',
    span: 2,
    icon: 'bolt',
    title: 'High Efficiency',
    body: 'Our inverters are engineered for maximum energy harvest. Utilizing advanced MPPT tracking, we ensure every photon captured by your panels is converted into usable power with minimal loss.',
    link: true,
    variant: 'default',
  },
  {
    id: 'robust',
    span: 1,
    icon: 'shield_with_heart',
    title: 'Robust Performance',
    body: 'Built to withstand the most demanding environments, from coastal humidity to arid heat, ensuring long-term reliability.',
    variant: 'primary',
  },
  {
    id: 'monitoring',
    span: 1,
    icon: 'monitoring',
    title: 'Advanced Monitoring',
    body: 'Real-time data visualization at your fingertips via our cloud-based platform.',
    variant: 'default',
  },
  {
    id: 'scalability',
    span: 1,
    icon: 'account_tree',
    title: 'Scalability',
    body: 'Modular designs that grow with your energy needs, from residential to utility scale.',
    variant: 'default',
  },
  {
    id: 'integration',
    span: 1,
    icon: 'integration_instructions',
    title: 'Seamless Integration',
    body: 'Plug-and-play compatibility with existing grid infrastructures and battery systems.',
    variant: 'default',
  },
];

const WhySection = () => (
  <section className="py-24" style={{ backgroundColor: '#f2f4f6' }}>
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="mb-16 text-center lg:text-left lg:max-w-2xl">
        <h2
          className="font-headline font-bold leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#191c1e' }}
        >
          Why Choose Nonsonet for Solar Inverter Systems?
        </h2>
        <p className="font-body-custom text-lg leading-relaxed" style={{ color: '#3d4a3f' }}>
          We combine high-end editorial aesthetics with robust engineering to deliver unparalleled solar performance.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyCards.map((card) => {
          const isPrimary = card.variant === 'primary';
          return (
            <div
              key={card.id}
              className={`why-card rounded-lg overflow-hidden transition-shadow duration-200 ${
                card.span === 2 ? 'md:col-span-2' : 'md:col-span-1'
              } ${
                isPrimary
                  ? ''
                  : 'shadow-sm hover:shadow-md'
              }`}
              style={{
                backgroundColor: isPrimary ? '#006d37' : '#ffffff',
              }}
            >
              <div className="p-10 h-full flex flex-col justify-between">
                <div>
                  <Icon
                    name={card.icon}
                    className="block mb-6"
                    style={{ fontSize: '2.5rem', color: isPrimary ? '#ffffff' : '#006d37' }}
                  />
                  <h3
                    className="font-headline font-bold text-xl mb-4"
                    style={{ color: isPrimary ? '#ffffff' : '#191c1e' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-body-custom text-sm leading-relaxed"
                    style={{ color: isPrimary ? 'rgba(255,255,255,0.88)' : '#3d4a3f' }}
                  >
                    {card.body}
                  </p>
                </div>

                {card.link && (
                  <div className="mt-8">
                    <span
                      className="inline-flex items-center gap-2 font-headline font-bold cursor-pointer"
                      style={{ color: '#006d37' }}
                    >
                      Learn about our tech
                      <Icon name="arrow_forward" className="why-link-arrow text-xl" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── Solutions Section (unchanged) ────────────────────────────────────────────
const solutions = [
  { id: 'string',  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARzPJWcIklTGRdRnEA296uhbBPA5gBdGfFnTHx33PhslVQFoKf_FMUSU_tfkPDmZdWBCoJP2pJ8KrvQDhxHCq16vEd8x7kkD8e1FQWjWzTppbXGWC6Ol-_b3RGAVZYYTdk816N9_-onwiEMGnN3TGPzku7pD9r8A96QiNt1PWvYbIaxmTIgYG_C1JQENyz3U6kLb93CYh5MTiXxxyagDQqe-eYVqsUk-OWDgKBwr5JSLkUBfL1Hb4XbC6KfjAqNVnZAWT5tqk8XX0I',  title: 'String Inverters',  body: 'Ideal for residential and commercial rooftop installations with uniform sun exposure.' },
  { id: 'central', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrc3BV0TlY8Ec4ILarQpwzW0khjy2VCvsA15muhTR2S84lLk2-e_qEaIt8bvRw15wpS7xxgBNFw8xokV4svXad3MOkDRbWUOgnFRknlAWbXaBtCcurWnTxFwwHyjD1ndsKw-BwPP1vHXrB4hZWhRzoRoss6HgNhCTq0kxhOMxIfbsgiFfdglEWzWczEGbIzgsyPBb6fb4M3syvLTs4soDM61q67d1JDjG-HGS9D9YdiFMHaQoFptn2dhqDNIIs_Ze9yGKNG6Z169yo', title: 'Central Inverters',  body: 'Robust power conversion for utility-scale ground-mount solar arrays.' },
  { id: 'hybrid',  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGkrivqjPM8Ag2vHSxoFiLnB9UWO902LsGAR4_zV3HVDARhEZvFPxqmdeWjZkNKA1Unpb3xnxgn10u4UfOrkCuLKNnUQF7BxAPxZC2RzKiKVnankBK6aRGh5vcmVJ4XZNSzACl87L9oRrPFmtrkvDYObUZsu4A60rIZxWEvZxwf0lBRNrvcmSoQIAiHflG3f-b2zPr7AdtXiAdyfw6fl555IEY1Lvh0lNQdsF0sMkQHpqF1wbhFM0mtMijhelhgnK9W257YfGdlL0b',  title: 'Hybrid Inverters',   body: 'Intelligent management for both solar panels and battery storage systems.' },
  { id: 'micro',   img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuexcqn8ok9BcJDaj9GCYIjD-OX1Ty1aqthTij-9BfWB5OwDB3JVpxHw1EDUuzajaQqTjztVtIxTCU5mG1_4rg28XJsGjRTrP70qkykfXPIR2QUF3SkLCBiNecMtwSWos6fBgLaVSSw9VzheHIRp4HNH1RMZLpqggRxnCO6DBwT75jE7nivoPz5ILyjtqs-930ooCwI0hwPg9GMIil1Kte0AsjRYXkc_-9eDSoj2RDtKA6-MChPWEfIj4lViOoSD4-_8lzajnKH2Md',   title: 'Microinverters',     body: 'Panel-level optimization to maximize output on shaded or complex roofs.' },
];

const SolutionsSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div className="max-w-lg">
          <h2
            className="font-headline font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#191c1e' }}
          >
            Our Solar Inverter Solutions Include
          </h2>
          <p className="font-body-custom text-lg leading-relaxed" style={{ color: '#3d4a3f' }}>
            Tailored engineering for diverse architectural and energy requirements.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="hidden md:block h-0.5 w-32 flex-shrink-0"
          style={{ backgroundColor: '#62f595' }}
        />
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((s) => (
          <div key={s.id} className="sol-card cursor-pointer">
            <div className="aspect-square rounded-lg overflow-hidden mb-6">
              <img
                src={s.img}
                alt={s.title}
                className="sol-card-img w-full h-full object-cover"
              />
            </div>
            <h4 className="font-headline font-bold text-xl mb-2" style={{ color: '#191c1e' }}>
              {s.title}
            </h4>
            <p className="font-body-custom text-sm leading-relaxed" style={{ color: '#3d4a3f' }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Surround() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <main className="pt-20" style={{ backgroundColor: '#f7f9fb', color: '#191c1e' }}>
        <HeroSection />
        <WhySection />
        <SolutionsSection />
      </main>
    </>
  );
}