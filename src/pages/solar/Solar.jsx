import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

/* ─── Network Canvas Animation ───────────── */
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

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGugUzo66x53KZPxl-ZoY8ONVsGOdWAgN9mHK3ySAngSpvNKWs6w5C3V7wa4Qvii8INMiAlrxF0K3EqTfZ5YGvtGXzGxBPN93-eAtgsmSYKvfsPjKOY3o3AP00qXdXWqzVLrAiqV1BWXdZuwFwxX0vGCNKvD3Ip1YQDBePl-x2Kyq66v9NFf99JVDhIIaJfrj0FSqCUC8bmlayec64M724ZJmxBf18bPQamO_nQzVu44vkHlu6ZE_6XXgMAy_wRf5ao5uGCzUVDNvU';

const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

/* ─── Hero Section ───────────── */
const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden px-12 pt-9 pb-20"
    style={{ background: '#0b1623' }}
  >
    {/* Network canvas */}
    <canvas
      ref={networkCanvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ display: 'block' }}
    />

    {/* Background layers */}
    <div
      className="absolute top-0 right-0 w-[750px] h-[650px] pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at top right, rgba(0,130,90,0.60) 0%, rgba(0,90,65,0.30) 35%, transparent 68%)',
      }}
    />
    <div
      className="absolute top-1/4 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at right, rgba(0,160,100,0.18) 0%, transparent 60%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'linear-gradient(105deg, rgba(8,16,30,0.92) 0%, rgba(8,16,30,0.70) 45%, rgba(5,30,25,0.10) 100%)',
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[450px] h-[350px] pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at bottom left, rgba(10,30,70,0.55) 0%, transparent 65%)',
      }}
    />

    {/* Back link */}
  

    {/* Content */}
    <div className="relative z-10 max-w-[860px]">
      {/* Icon + pill */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-white/[0.08] border border-white/[0.12] rounded-[14px] flex items-center justify-center">
          <span className="material-symbols-outlined text-[#00d27b] text-2xl">light_mode</span>
        </div>
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00d27b]/15 border border-[#00d27b]/35 text-[#00d27b] text-sm font-semibold font-['Plus_Jakarta_Sans',sans-serif]">
          Power Your Future with Renewable Energy
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(48px,6vw,80px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white mb-7">
        Solar Inverter Systems
      </h1>

      {/* Description */}
      <p className="text-[17px] text-white/55 max-w-[680px] leading-[1.75]">
        Advanced Solar Inverter Systems that convert DC generated by solar panels into AC for homes
        and businesses, ensuring reliable and efficient energy supply for energy independence.
      </p>
    </div>
  </section>
);

/* ─── Why Choose Us ───────────── */
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyCards.map((card) => {
          const isPrimary = card.variant === 'primary';
          return (
            <div
              key={card.id}
              className={`why-card rounded-lg overflow-hidden transition-shadow duration-200 ${
                card.span === 2 ? 'md:col-span-2' : 'md:col-span-1'
              } ${isPrimary ? '' : 'shadow-sm hover:shadow-md'}`}
              style={{ backgroundColor: isPrimary ? '#006d37' : '#ffffff' }}
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

/* ─── Solutions Section ───────────── */
const solutions = [
  {
    id: 'string',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARzPJWcIklTGRdRnEA296uhbBPA5gBdGfFnTHx33PhslVQFoKf_FMUSU_tfkPDmZdWBCoJP2pJ8KrvQDhxHCq16vEd8x7kkD8e1FQWjWzTppbXGWC6Ol-_b3RGAVZYYTdk816N9_-onwiEMGnN3TGPzku7pD9r8A96QiNt1PWvYbIaxmTIgYG_C1JQENyz3U6kLb93CYh5MTiXxxyagDQqe-eYVqsUk-OWDgKBwr5JSLkUBfL1Hb4XbC6KfjAqNVnZAWT5tqk8XX0I',
    title: 'String Inverters',
    body: 'Ideal for residential and commercial rooftop installations with uniform sun exposure.',
  },
  {
    id: 'central',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrc3BV0TlY8Ec4ILarQpwzW0khjy2VCvsA15muhTR2S84lLk2-e_qEaIt8bvRw15wpS7xxgBNFw8xokV4svXad3MOkDRbWUOgnFRknlAWbXaBtCcurWnTxFwwHyjD1ndsKw-BwPP1vHXrB4hZWhRzoRoss6HgNhCTq0kxhOMxIfbsgiFfdglEWzWczEGbIzgsyPBb6fb4M3syvLTs4soDM61q67d1JDjG-HGS9D9YdiFMHaQoFptn2dhqDNIIs_Ze9yGKNG6Z169yo',
    title: 'Central Inverters',
    body: 'Robust power conversion for utility-scale ground-mount solar arrays.',
  },
  {
    id: 'hybrid',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGkrivqjPM8Ag2vHSxoFiLnB9UWO902LsGAR4_zV3HVDARhEZvFPxqmdeWjZkNKA1Unpb3xnxgn10u4UfOrkCuLKNnUQF7BxAPxZC2RzKiKVnankBK6aRGh5vcmVJ4XZNSzACl87L9oRrPFmtrkvDYObUZsu4A60rIZxWEvZxwf0lBRNrvcmSoQIAiHflG3f-b2zPr7AdtXiAdyfw6fl555IEY1Lvh0lNQdsF0sMkQHpqF1wbhFM0mtMijhelhgnK9W257YfGdlL0b',
    title: 'Hybrid Inverters',
    body: 'Intelligent management for both solar panels and battery storage systems.',
  },
  {
    id: 'micro',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuexcqn8ok9BcJDaj9GCYIjD-OX1Ty1aqthTij-9BfWB5OwDB3JVpxHw1EDUuzajaQqTjztVtIxTCU5mG1_4rg28XJsGjRTrP70qkykfXPIR2QUF3SkLCBiNecMtwSWos6fBgLaVSSw9VzheHIRp4HNH1RMZLpqggRxnCO6DBwT75jE7nivoPz5ILyjtqs-930ooCwI0hwPg9GMIil1Kte0AsjRYXkc_-9eDSoj2RDtKA6-MChPWEfIj4lViOoSD4-_8lzajnKH2Md',
    title: 'Microinverters',
    body: 'Panel-level optimization to maximize output on shaded or complex roofs.',
  },
];

const SolutionsSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
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

/* ─── Root Export ───────────── */
export default function Surround() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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