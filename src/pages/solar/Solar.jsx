import React from 'react';
import Navbar from '../../components/navbar/Navbar';

// ─── Google Fonts injected via style tag ─────────────────────────────────────
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
const stringImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuARzPJWcIklTGRdRnEA296uhbBPA5gBdGfFnTHx33PhslVQFoKf_FMUSU_tfkPDmZdWBCoJP2pJ8KrvQDhxHCq16vEd8x7kkD8e1FQWjWzTppbXGWC6Ol-_b3RGAVZYYTdk816N9_-onwiEMGnN3TGPzku7pD9r8A96QiNt1PWvYbIaxmTIgYG_C1JQENyz3U6kLb93CYh5MTiXxxyagDQqe-eYVqsUk-OWDgKBwr5JSLkUBfL1Hb4XbC6KfjAqNVnZAWT5tqk8XX0I';
const centralImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrc3BV0TlY8Ec4ILarQpwzW0khjy2VCvsA15muhTR2S84lLk2-e_qEaIt8bvRw15wpS7xxgBNFw8xokV4svXad3MOkDRbWUOgnFRknlAWbXaBtCcurWnTxFwwHyjD1ndsKw-BwPP1vHXrB4hZWhRzoRoss6HgNhCTq0kxhOMxIfbsgiFfdglEWzWczEGbIzgsyPBb6fb4M3syvLTs4soDM61q67d1JDjG-HGS9D9YdiFMHaQoFptn2dhqDNIIs_Ze9yGKNG6Z169yo';
const hybridImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCGkrivqjPM8Ag2vHSxoFiLnB9UWO902LsGAR4_zV3HVDARhEZvFPxqmdeWjZkNKA1Unpb3xnxgn10u4UfOrkCuLKNnUQF7BxAPxZC2RzKiKVnankBK6aRGh5vcmVJ4XZNSzACl87L9oRrPFmtrkvDYObUZsu4A60rIZxWEvZxwf0lBRNrvcmSoQIAiHflG3f-b2zPr7AdtXiAdyfw6fl555IEY1Lvh0lNQdsF0sMkQHpqF1wbhFM0mtMijhelhgnK9W257YfGdlL0b';
const microImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDuexcqn8ok9BcJDaj9GCYIjD-OX1Ty1aqthTij-9BfWB5OwDB3JVpxHw1EDUuzajaQqTjztVtIxTCU5mG1_4rg28XJsGjRTrP70qkykfXPIR2QUF3SkLCBiNecMtwSWos6fBgLaVSSw9VzheHIRp4HNH1RMZLpqggRxnCO6DBwT75jE7nivoPz5ILyjtqs-930ooCwI0hwPg9GMIil1Kte0AsjRYXkc_-9eDSoj2RDtKA6-MChPWEfIj4lViOoSD4-_8lzajnKH2Md';

// ─── Icon helper ──────────────────────────────────────────────────────────────
const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// ─── Hero Section (Dark gradient background + all white text) ─────────────────
const HeroSection = () => (
  <section 
    className="relative px-6 pt-16 pb-32 overflow-hidden bg-[linear-gradient(to_right,#0d1b2a,#0a2e2a)]"
  >
    {/* Decorative blob - enhanced for dark theme */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 -right-10 w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full"
      style={{ 
        background: 'rgba(98,245,149,0.25)', 
        filter: 'blur(90px)' 
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 items-center">
      {/* Left copy - ALL TEXT NOW WHITE WITH ENHANCED CONTRAST */}
      <div>
        {/* Badge - Dark mode version */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border border-white/20 shadow-inner"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.12)', 
            color: '#ffffff' 
          }}
        >
          <span 
            className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
            style={{ backgroundColor: '#62f595' }} 
          />
          <span className="font-body-custom text-xs font-bold tracking-widest uppercase">
            Intelligent Innovation
          </span>
        </div>

        {/* Headline - Pure white with elegant emerald gradient on brand name */}
        <h1
          className="font-headline font-extrabold leading-[1.1] tracking-tight mb-8 drop-shadow-md"
          style={{ 
            fontSize: 'clamp(2.75rem,7vw,4.5rem)', 
            color: '#ffffff' 
          }}
        >
          Power Your Future with{' '}
          <span 
            style={{
              background: 'linear-gradient(to right, #62f595, #ffffff, #62f595)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Nonsonet Technologies'
          </span>{' '}
          Solar Inverter Solutions
        </h1>

        {/* Body - High-contrast white with slight transparency for depth */}
        <p
          className="font-body-custom text-lg md:text-xl leading-relaxed max-w-2xl mb-10 drop-shadow-sm"
          style={{ color: 'rgba(255,255,255,0.92)' }}
        >
          Experience the peak of atmospheric clarity and technical rigor. Our
          next-generation solar inverters transform raw sunlight into
          high-efficiency electrical power for a sustainable, resilient future.
        </p>
      </div>

      {/* Right image - Enhanced shadow & subtle ring for dark background */}
      <div
        className="hero-img-wrap relative rounded-lg overflow-hidden ring-1 ring-white/10"
        style={{ 
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)' 
        }}
      >
        <img
          src={heroImg}
          alt="Modern solar panel array on a contemporary building roof under a bright blue sky"
          className="w-full h-full object-cover"
          style={{ aspectRatio: '4/5' }}
        />
        {/* Subtle overlay - lightened for dark hero background */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to top, rgba(98,245,149,0.25), transparent)' 
          }}
        />
      </div>
    </div>
  </section>
);

// ─── Why Choose Us ────────────────────────────────────────────────────────────
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

// ─── Solutions Section ────────────────────────────────────────────────────────
const solutions = [
  { id: 'string',  img: stringImg,  title: 'String Inverters',  body: 'Ideal for residential and commercial rooftop installations with uniform sun exposure.' },
  { id: 'central', img: centralImg, title: 'Central Inverters',  body: 'Robust power conversion for utility-scale ground-mount solar arrays.' },
  { id: 'hybrid',  img: hybridImg,  title: 'Hybrid Inverters',   body: 'Intelligent management for both solar panels and battery storage systems.' },
  { id: 'micro',   img: microImg,   title: 'Microinverters',     body: 'Panel-level optimization to maximize output on shaded or complex roofs.' },
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

// ─── Root export (BenefitsSection completely removed) ───────────────────────
export default function Surround() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <main className="pt-24" style={{ backgroundColor: '#f7f9fb', color: '#191c1e' }}>
        <HeroSection />
        <WhySection />
        <SolutionsSection />
      </main>
    </>
  );
}