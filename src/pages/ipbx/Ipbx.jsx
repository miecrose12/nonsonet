import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

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
            HERO SECTION – NOW 100% MATCHING DOOR / CCTV BACKGROUND
            (exact same deep navy + multi-layer teal glows, overlays, and contrast)
            ============================================ */}
        {/* ============================================
    HERO SECTION – Matching the screenshot design
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
      {/* Phone icon box */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00d27b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.84-1.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>

      {/* Green pill */}
      <div
        className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold"
        style={{
          background: 'rgba(0,210,123,0.15)',
          border: '1px solid rgba(0,210,123,0.35)',
          color: '#00d27b',
        }}
      >
        Revolutionize Business Communications
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
      IP-PBX Systems
    </h1>

    {/* Subtitle */}
    <p
      className="text-white/55 leading-relaxed"
      style={{ fontSize: '1.05rem', maxWidth: '560px' }}
    >
      Cutting-edge IP-PBX systems that transform organizational communication by unifying voice,
      video, messaging, and data into a single cost-effective platform for any team size.
    </p>
  </div>
</section>

        {/* ============================================
            WHY CHOOSE SECTION – unchanged
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
            SOLUTIONS SECTION – unchanged
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
            BENEFITS SECTION – unchanged
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