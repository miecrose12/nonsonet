import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

/* ─── Network Canvas Animation (exact same as Landing) ───────────── */
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

const Ipbx = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const whyChooseFeatures = [
    {
      id: 1,
      icon: 'sync_alt',
      title: 'Seamless Communication',
      description: 'Break down silos with a system that connects every department effortlessly, regardless of location or device.',
      size: 'large',
      color: 'light',
      tags: ['INTER-OFFICE', 'REAL-TIME']
    },
    {
      id: 2,
      icon: 'trending_up',
      title: 'Scalability',
      description: 'Grow your phone system as your business expands without heavy infrastructure reinvestment.',
      size: 'small',
      color: 'primary'
    },
    {
      id: 3,
      icon: 'payments',
      title: 'Cost-Effective',
      description: 'Reduce monthly operational costs and long-distance charges significantly.',
      size: 'small',
      color: 'light'
    },
    {
      id: 4,
      icon: 'star',
      title: 'Advanced Features',
      description: 'Access enterprise-grade features like auto-attendant, IVR, and smart routing.',
      size: 'small',
      color: 'light'
    },
    {
      id: 5,
      icon: 'directions_run',
      title: 'Enhanced Mobility',
      description: 'Stay connected on the go with full desktop and mobile application support.',
      size: 'small',
      color: 'light'
    }
  ];

  const solutions = [
    {
      id: 1,
      title: 'Hosted IP-PBX',
      description: 'Fully managed cloud solution that eliminates on-site hardware maintenance.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0DkO-vcWbAeUe4-jezEmx70XO8BEI0suzcfT2G-Ed7d-qbe_nekBNV_e7jwquBj9DrJ2-4LA3MThoyyDafJMSwoMt7U5hhcRnHVWE78JZBW_r76OZcysXFLqbZ21ZuPbopa-dwApIpQxRtGn7VHj72HDnxUsnwkMHW0tdlCNTjkz9OoZ7QpmSl0oUh5VWwEUDcTyLdcvonA8olgwBA1PhXxsR-7OpmCaDlH46vE7SEVOdnlqBtqRDGKxA_14-EbrzFxWV97Q5UmY',
      alt: 'Glowing blue digital network connections representing a cloud-hosted infrastructure on a dark background'
    },
    {
      id: 2,
      title: 'On-Premise IP-PBX',
      description: 'Complete control and maximum security with hardware located in your office.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRdSe-f33RkEfjEDlpWabEbFq4IuRPn2-qUD5KRgeT7pDh0mjI96MsF8fX6UvucF3lmUJpkZDEXxUPUkZc1gskzgiJ-gh3bB5aoK1JQ_5chLF3lph8Lk6-7EVUTae8blA3wWeYVcWSn_p6hhsS-7JawyBL1BWcFOY0_4ZiITJYpx_NR3A18JN21TcDoKjBKoiYGwXMNT248WdOB6IQ3aj_8kDS9Ui7ABzO762dkxLH0aXCKGBUxHa4C7cHvpnhU9eUiph6DUSkWmE5',
      alt: 'Rows of server racks in a clean modern data center with blue and green status lights'
    },
    {
      id: 3,
      title: 'Unified Communications',
      description: 'Integration of real-time communication services for enhanced collaboration.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqb5HO0JNURzaTiov8q4J4fjzUwEc_kvoiYsWbmKUpaAK8NMVHOjlvILyNFU4C1b6gEMn2l_8xB4QX0CR0Eux_wfysnwOMwUl8oSk7S27XIqxkvIKB2lFOLzyVEUT08LBBuvsApYby2veDN-OgLtQeZCDBWN1nh-lJP44EiyPxOXY96gQZFaInbRsnsfVyW_L3rwNO5HqfKDHkRmQWp-hRymKwmlqSVD44pLVa4S7NeJG8U4rAHUwsw_oySUA5gOnmGebUBVKJjID0',
      alt: 'Digital interface showing multiple communication channels like video, text, and voice working together'
    },
    {
      id: 4,
      title: 'Call Center Solutions',
      description: 'High-volume call management with advanced analytics and queue features.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2afw_wg_j-WV5Ad1MRQdnNyW26EvSzfQ0yfUUe-8JZZooIU5y6sena5PNzSX1hhhFLX1LOA3YNdwPWn2ub21UHSohjuhNCzFNyIcPihAgLsRhLugFicY68Pd5DKhCCI5bR54kfCLjGQkg789zCF9zmbOHH3ASTYgaJO_fvIz0nMa4-S0SNJKxCAFD4jC2P_EfCyed0hDMosdjxe87y_077M6BdszVrr3G7Uz2LE0Ff5BA5XX7TCM3CmxqzNvCpaDh4sjuVLxXM902',
      alt: 'Modern customer service team working with headsets in a collaborative workspace',
      isLarge: true
    },
    {
      id: 5,
      title: 'VoIP Gateways',
      description: 'Bridge the gap between traditional telephony and IP-based voice traffic.',
      icon: 'hub',
      isIconOnly: true
    }
  ];

  const benefits = [
    {
      id: 1,
      icon: 'rocket_launch',
      title: 'Improved Productivity',
      description: 'Streamlined workflows and integrated apps save hours of manual coordination every week.'
    },
    {
      id: 2,
      icon: 'shuffle',
      title: 'Flexibility',
      description: 'Support hybrid work models with systems that work anywhere an internet connection exists.'
    },
    {
      id: 3,
      icon: 'shield',
      title: 'Enhanced Security',
      description: 'End-to-end encryption and regular security patches keep your business conversations private.'
    },
    {
      id: 4,
      icon: 'support_agent',
      title: 'Reliable Support',
      description: '24/7 technical assistance ensures your communication channels never go silent.'
    }
  ];

  return (
    <>
      <Navbar />

      <main className="pt-20 font-['Manrope',sans-serif] text-[#191c1d]">

        {/* ============================================
            HERO SECTION – 100% MATCHING LANDING PAGE
            ============================================ */}
        <section
          id="hero"
          className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-28"
          style={{ background: '#08111f' }}
        >
          {/* Animated network canvas – exact same as Landing */}
          <canvas
            ref={networkCanvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
          />

          {/* Subtle right-side radial glow – exact same as Landing */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-[1280px] mx-auto w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Content – exact Landing typography */}
              <div className="flex flex-col gap-8 z-10">
                {/* Badge – exact same style as Landing */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
                  Lagos, Nigeria &bull; Unified Communications
                </div>

                {/* Headline – exact font, size, weight, tracking as Landing */}
                <h1 
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white"
                >
                  Revolutionize Your Business Communications with{' '}
                  <span 
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6 0%, #00d27b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    intelligent
                  </span>{' '}
                  IP-PBX
                </h1>

                {/* Subtext – exact style as Landing */}
                <p 
                  className="text-xl text-white/60 max-w-[34rem] leading-[1.75]"
                >
                  Experience the power of Unified Communication. Our IP-PBX systems integrate voice, video, and messaging into one seamless interface, designed for the modern enterprise.
                </p>

                {/* Stats row – exact same layout as Landing */}
                <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                      99.9%
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Uptime SLA
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      24/7
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Support
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      5000+
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Extensions Deployed
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image – brand-consistent styling */}
              <div className="relative">
                <div 
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-l-8 border-[#00d27b] ring-1 ring-white/10"
                  style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmEMlvU17emqIYG-BeQ-9XbsX963d5hcgZtepc4rRYnMu5R-bvCSBMG-bFmUtPE9YBC7jAXpdfSJmLEueJ6hlIFUWQod6nFPKx4AXrTpslzdxbSjNOiG4kMzUEdZHx9rJlf3Io4UcfBZE5sogJFMoL_WNY0znMfPBwna9O_d69lwhpglMasgtpry5LroPfQyzRwqTvc1Q-uY6lNebDkA22Udi1cRAVycHu5da9W9c2J2f4hJcPT7XfAfDeLsn_R4SHnQ6XEL_PDUhc"
                    alt="Modern high-tech office interior with professionals using sleek communication devices"
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a2e2a]/30" />
                </div>

                {/* Optional floating badge (kept minimal) */}
                <div className="absolute -bottom-4 -right-4 bg-white text-[#006d3d] px-5 py-3 rounded-3xl shadow-xl flex items-center gap-2 text-sm font-semibold">
                  <span className="material-symbols-outlined text-[#00d27b]">wifi</span>
                  LIVE VOIP NETWORK
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            WHY CHOOSE SECTION – brand consistent
            ============================================ */}
        <section className="py-24 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-[#191c1d] mb-4">
                Why Choose Nonsonet for IP-PBX?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We deliver more than just hardware; we provide the backbone for your company's collective intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[15rem]">
              {whyChooseFeatures.map((feature) => {
                const isLarge = feature.size === 'large';
                const isPrimary = feature.color === 'primary';
                const gridCols = isLarge 
                  ? 'lg:col-span-8 lg:row-span-2 md:col-span-2 md:row-span-2' 
                  : 'lg:col-span-4 md:col-span-1';

                return (
                  <div
                    key={feature.id}
                    className={`
                      ${gridCols}
                      col-span-1
                      p-10 rounded-3xl
                      transition-all duration-300
                      relative overflow-hidden
                      flex flex-col justify-between
                      ${isPrimary 
                        ? 'bg-[#006d3d] text-white hover:bg-[#00d27b]' 
                        : 'bg-white text-[#191c1d] hover:shadow-xl border border-gray-100'
                      }
                    `}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`w-14 h-14 rounded-3xl mb-6 flex items-center justify-center transition-transform duration-300 ${hoveredFeature === feature.id ? 'scale-110' : 'scale-100'} ${isPrimary ? 'bg-white/20' : 'bg-[#00d27b]/10'}`}>
                      <span className={`text-3xl material-symbols-outlined ${isPrimary ? 'text-white' : 'text-[#006d3d]'}`}>
                        {feature.icon}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                        {feature.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${isPrimary ? 'text-white/90' : 'text-slate-600'}`}>
                        {feature.description}
                      </p>

                      {feature.tags && (
                        <div className="flex gap-2 flex-wrap mt-6">
                          {feature.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-3xl text-xs font-bold ${isPrimary ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            SOLUTIONS SECTION – brand consistent
            ============================================ */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-[#191c1d] mb-4">
                Our IP-PBX System Solutions Include
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Tailored architecture to fit your specific operational requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const isLarge = solution.isLarge;
                const isIconOnly = solution.isIconOnly;

                if (isLarge) {
                  return (
                    <div
                      key={solution.id}
                      className="md:col-span-2 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
                    >
                      <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-[#191c1d] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                          {solution.title}
                        </h4>
                        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  );
                }

                if (isIconOnly) {
                  return (
                    <div
                      key={solution.id}
                      className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-start"
                    >
                      <span className="material-symbols-outlined text-[#006d3d] text-5xl mb-4">
                        {solution.icon}
                      </span>
                      <h4 className="text-xl font-bold text-[#191c1d] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                        {solution.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  );
                }

                return (
                  <div
                    key={solution.id}
                    className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="w-full h-48 overflow-hidden bg-slate-200">
                      <img
                        src={solution.image}
                        alt={solution.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-bold text-[#191c1d] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                        {solution.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            BENEFITS SECTION – brand consistent
            ============================================ */}
        <section className="relative py-24 px-6 bg-slate-100 overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#00d27b]/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl font-bold text-[#191c1d] mb-4">
                    Unmatched Business Benefits
                  </h2>
                  <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    Our solutions are engineered to impact your bottom line directly by optimizing how your team interacts.
                  </p>

                  <div className="flex flex-col gap-8">
                    {benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#006d3d] text-white rounded-3xl flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            {benefit.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-[#191c1d] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                            {benefit.title}
                          </h5>
                          <p className="text-slate-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    {benefits.slice(2).map((benefit) => (
                      <div key={benefit.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#006d3d] text-white rounded-3xl flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            {benefit.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-[#191c1d] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                            {benefit.title}
                          </h5>
                          <p className="text-slate-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-[#00d27b]/10 border-l-4 border-[#00d27b] rounded-3xl">
                    <p className="text-slate-800 italic font-medium mb-3 leading-relaxed">
                      "Nonsonet transformed our regional headquarters' communication from a cost-center into a strategic asset."
                    </p>
                    <p className="font-bold text-[#006d3d]">
                      — CTO, Global Logistics Firm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Ipbx;