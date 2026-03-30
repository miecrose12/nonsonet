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
      <main className="w-full min-h-screen bg-slate-50 font-sans text-slate-900">
        
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="relative overflow-hidden py-20 md:py-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full w-fit">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">
                  Intelligent Innovation
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900">
                Revolutionize Your Business Communications with{' '}
                <span className="text-emerald-600">Nonsonet Technologies</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Experience the power of Unified Communication. Our IP-PBX systems integrate voice, video, and messaging into one seamless interface, designed for the modern enterprise.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95">
                  Explore Solutions
                </button>
                <button className="px-8 py-4 bg-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-300 transition-colors duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              {/* Blur Background */}
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40 -z-10"></div>

              {/* Image Wrapper */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmEMlvU17emqIYG-BeQ-9XbsX963d5hcgZtepc4rRYnMu5R-bvCSBMG-bFmUtPE9YBC7jAXpdfSJmLEueJ6hlIFUWQod6nFPKx4AXrTpslzdxbSjNOiG4kMzUEdZHx9rJlf3Io4UcfBZE5sogJFMoL_WNY0znMfPBwna9O_d69lwhpglMasgtpry5LroPfQyzRwqTvc1Q-uY6lNebDkA22Udi1cRAVycHu5da9W9c2J2f4hJcPT7XfAfDeLsn_R4SHnQ6XEL_PDUhc"
                  alt="Modern high-tech office interior with professionals using sleek communication devices"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-600/20"></div>
              </div>

              {/* Info Card */}
              <div className="absolute bottom-0 left-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:-left-12 bg-white p-6 rounded-lg shadow-lg max-w-xs mt-4 md:mt-0">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-emerald-600 text-3xl">⚡</span>
                  <h3 className="font-bold text-slate-900">Ultra-Low Latency</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  99.9% uptime guaranteed with our redundant IP infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            WHY CHOOSE SECTION
            ============================================ */}
        <section className="py-24 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Why Choose Nonsonet for IP-PBX?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We deliver more than just hardware; we provide the backbone for your company's collective intelligence.
              </p>
            </div>

            {/* Bento Grid */}
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
                      p-10 rounded-lg
                      transition-all duration-300
                      relative overflow-hidden
                      flex flex-col justify-between
                      ${isPrimary 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-white text-slate-900 hover:shadow-lg'
                      }
                    `}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Icon */}
                    <div className={`
                      w-14 h-14 rounded-lg mb-6
                      flex items-center justify-center
                      transition-transform duration-300
                      ${hoveredFeature === feature.id ? 'scale-110' : 'scale-100'}
                      ${isPrimary 
                        ? 'bg-white/20' 
                        : 'bg-emerald-100'
                      }
                    `}>
                      <span className={`text-2xl material-symbols-outlined ${isPrimary ? 'text-white' : 'text-emerald-600'}`}>
                        {feature.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${isPrimary ? 'text-white/90' : 'text-slate-600'}`}>
                        {feature.description}
                      </p>

                      {/* Tags */}
                      {feature.tags && (
                        <div className="flex gap-2 flex-wrap mt-6">
                          {feature.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`
                                px-3 py-1 rounded text-xs font-bold
                                ${isPrimary 
                                  ? 'bg-white/20 text-white' 
                                  : 'bg-slate-200 text-slate-700'
                                }
                              `}
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
            SOLUTIONS SECTION
            ============================================ */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Our IP-PBX System Solutions Include
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Tailored architecture to fit your specific operational requirements.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const isLarge = solution.isLarge;
                const isIconOnly = solution.isIconOnly;

                if (isLarge) {
                  return (
                    <div
                      key={solution.id}
                      className="md:col-span-2 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
                    >
                      {/* Image */}
                      <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">
                          {solution.title}
                        </h4>
                        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                          {solution.description}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:translate-x-1 transition-transform duration-200"
                        >
                          Learn More
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  );
                }

                if (isIconOnly) {
                  return (
                    <div
                      key={solution.id}
                      className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-start"
                    >
                      <div className="text-5xl text-emerald-600 mb-4">
                        <span className="material-symbols-outlined" style={{ fontSize: '3rem' }}>
                          {solution.icon}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </a>
                    </div>
                  );
                }

                // Regular cards
                return (
                  <div
                    key={solution.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                  >
                    {/* Image */}
                    <div className="w-full h-48 overflow-hidden bg-slate-200">
                      <img
                        src={solution.image}
                        alt={solution.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                        {solution.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            BENEFITS SECTION
            ============================================ */}
        <section className="relative py-24 px-6 bg-slate-100 overflow-hidden">
          {/* Blur Background */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-20">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left Column */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Unmatched Business Benefits
                  </h2>
                  <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    Our solutions are engineered to impact your bottom line directly by optimizing how your team interacts.
                  </p>

                  <div className="flex flex-col gap-8">
                    {benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            {benefit.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-slate-900 mb-2">
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

                {/* Right Column */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    {benefits.slice(2).map((benefit) => (
                      <div key={benefit.id} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            {benefit.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-slate-900 mb-2">
                            {benefit.title}
                          </h5>
                          <p className="text-slate-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded">
                    <p className="text-slate-800 italic font-medium mb-3 leading-relaxed">
                      "Nonsonet transformed our regional headquarters' communication from a cost-center into a strategic asset."
                    </p>
                    <p className="font-bold text-emerald-600">
                      — CTO, Global Logistics Firm
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================
            CTA SECTION
            ============================================ */}
        

      </main>
    </>
  );
};

export default Ipbx;