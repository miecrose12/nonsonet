import React from 'react';
import './solar.css';
import Navbar from '../../components/navbar/Navbar';

// ─── Image assets (using the same Google AIDA URLs from the original) ───────
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

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Material Symbol icon helper */
const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="surround-hero">
    {/* Decorative blob */}
    <div className="surround-hero__blob" aria-hidden="true" />

    <div className="surround-container surround-hero__grid">
      {/* Left copy */}
      <div className="surround-hero__copy">
        <div className="surround-hero__badge">
          <span className="surround-hero__badge-dot" />
          <span className="surround-hero__badge-text">Intelligent Innovation</span>
        </div>

        <h1 className="surround-hero__headline">
          Power Your Future with{' '}
          <span className="surround-hero__headline--accent">
            Nonsonet Technologies'
          </span>{' '}
          Solar Inverter Solutions
        </h1>

        <p className="surround-hero__body">
          Experience the peak of atmospheric clarity and technical rigor. Our
          next-generation solar inverters transform raw sunlight into
          high-efficiency electrical power for a sustainable, resilient future.
        </p>

        <div className="surround-hero__cta-row">
          <button className="surround-btn surround-btn--primary surround-btn--lg">
            Explore Solutions
          </button>
          <button className="surround-btn surround-btn--ghost surround-btn--lg">
            View Case Studies
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="surround-hero__img-wrap">
        <img
          src={heroImg}
          alt="Modern solar panel array on a contemporary building roof under a bright blue sky"
          className="surround-hero__img"
        />
        <div className="surround-hero__img-overlay" aria-hidden="true" />
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
    body:
      'Our inverters are engineered for maximum energy harvest. Utilizing advanced MPPT tracking, we ensure every photon captured by your panels is converted into usable power with minimal loss.',
    link: true,
    variant: 'default',
  },
  {
    id: 'robust',
    span: 1,
    icon: 'shield_with_heart',
    title: 'Robust Performance',
    body:
      'Built to withstand the most demanding environments, from coastal humidity to arid heat, ensuring long-term reliability.',
    variant: 'primary',
  },
  {
    id: 'monitoring',
    span: 1,
    icon: 'monitoring',
    title: 'Advanced Monitoring',
    body:
      'Real-time data visualization at your fingertips via our cloud-based platform.',
    variant: 'default',
  },
  {
    id: 'scalability',
    span: 1,
    icon: 'account_tree',
    title: 'Scalability',
    body:
      'Modular designs that grow with your energy needs, from residential to utility scale.',
    variant: 'default',
  },
  {
    id: 'integration',
    span: 1,
    icon: 'integration_instructions',
    title: 'Seamless Integration',
    body:
      'Plug-and-play compatibility with existing grid infrastructures and battery systems.',
    variant: 'default',
  },
];

const WhySection = () => (
  <section className="surround-why">
    <div className="surround-container">
      <div className="surround-why__header">
        <h2 className="surround-section-title">
          Why Choose Nonsonet for Solar Inverter Systems?
        </h2>
        <p className="surround-section-subtitle">
          We combine high-end editorial aesthetics with robust engineering to
          deliver unparalleled solar performance.
        </p>
      </div>

      <div className="surround-why__grid">
        {whyCards.map((card) => (
          <div
            key={card.id}
            className={`surround-why-card surround-why-card--span-${card.span} surround-why-card--${card.variant}`}
          >
            <div className="surround-why-card__inner">
              <div>
                <Icon name={card.icon} className="surround-why-card__icon" />
                <h3 className="surround-why-card__title">{card.title}</h3>
                <p className="surround-why-card__body">{card.body}</p>
              </div>
              {card.link && (
                <div className="surround-why-card__footer">
                  <span className="surround-why-card__link">
                    Learn about our tech
                    <Icon
                      name="arrow_forward"
                      className="surround-why-card__link-arrow"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Solutions Section ────────────────────────────────────────────────────────
const solutions = [
  {
    id: 'string',
    img: stringImg,
    title: 'String Inverters',
    body:
      'Ideal for residential and commercial rooftop installations with uniform sun exposure.',
  },
  {
    id: 'central',
    img: centralImg,
    title: 'Central Inverters',
    body: 'Robust power conversion for utility-scale ground-mount solar arrays.',
  },
  {
    id: 'hybrid',
    img: hybridImg,
    title: 'Hybrid Inverters',
    body:
      'Intelligent management for both solar panels and battery storage systems.',
  },
  {
    id: 'micro',
    img: microImg,
    title: 'Microinverters',
    body:
      'Panel-level optimization to maximize output on shaded or complex roofs.',
  },
];

const SolutionsSection = () => (
  <section className="surround-solutions">
    <div className="surround-container">
      <div className="surround-solutions__header">
        <div className="surround-solutions__header-left">
          <h2 className="surround-section-title">
            Our Solar Inverter Solutions Include
          </h2>
          <p className="surround-section-subtitle">
            Tailored engineering for diverse architectural and energy
            requirements.
          </p>
        </div>
        <div className="surround-solutions__divider" aria-hidden="true" />
      </div>

      <div className="surround-solutions__grid">
        {solutions.map((s) => (
          <div key={s.id} className="surround-sol-card">
            <div className="surround-sol-card__img-wrap">
              <img
                src={s.img}
                alt={s.title}
                className="surround-sol-card__img"
              />
            </div>
            <h4 className="surround-sol-card__title">{s.title}</h4>
            <p className="surround-sol-card__body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Benefits Section ─────────────────────────────────────────────────────────
const benefits = [
  {
    id: 'cost',
    icon: 'savings',
    title: 'Reduced Energy Costs',
    body: 'Slash your monthly utility bills by generating your own clean electricity.',
  },
  {
    id: 'env',
    icon: 'eco',
    title: 'Environmental Impact',
    body:
      'Minimize your carbon footprint and contribute to a healthier planet for future generations.',
  },
  {
    id: 'independence',
    icon: 'factory',
    title: 'Energy Independence',
    body: 'Gain autonomy from grid fluctuations and rising energy market prices.',
  },
  {
    id: 'support',
    icon: 'support_agent',
    title: 'Expert Support',
    body: 'Access 24/7 technical assistance and preventative maintenance services.',
  },
];

const BenefitsSection = () => (
  <section className="">
    
  </section>
);

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Surround() {
  return (
    <>
      <Navbar />
      <main className="surround-main">
        <HeroSection />
        <WhySection />
        <SolutionsSection />
        <BenefitsSection />
      </main>
    </>
  );
}