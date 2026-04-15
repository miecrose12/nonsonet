import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import nonImage from "../../assets/semi.png";
import nonImage1 from "../../assets/semii.png";
import nonImage2 from "../../assets/see.png";
import nonImage3 from "../../assets/sii.png";

/* ─── Network Canvas Animation (exact same as Printer page) ───────────── */
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

/* ─── HERO SECTION – 100% MATCHING THE POLISHED PRINTER HERO ──────────────── */
/* ─── HERO SECTION – Matching the screenshot design ──────────────────────── */
const HeroSection = ({ scrollPosition }) => (
  <section
    id="hero"
    className="relative min-h-[420px] md:min-h-[320px] flex flex-col overflow-hidden px-6 md:px-12 pt-8 pb-20"
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
        {/* Water drop icon box */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00d27b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6 9 4 13.5 4 16a8 8 0 0 0 16 0c0-2.5-2-7-8-14z" />
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
          Pure, Refreshing Water for Your Business
        </div>
      </div>

      {/* Headline */}
      <h1
        className="font-extrabold leading-[1.05] tracking-[-0.025em] text-white"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(2.3rem, 4vw, 3.2rem)',
          maxWidth: '1250px',
        }}
      >
        Water Production Solutions
      </h1>

      {/* Subtitle */}
      <p
        className="text-white/55 leading-relaxed"
        style={{ fontSize: '1.05rem', maxWidth: '560px' }}
      >
        Top-tier bottle and sachet water production solutions for entrepreneurs starting new water
        businesses or established companies upgrading production lines to deliver safe, pure drinking
        water.
      </p>
    </div>
  </section>
);

/* ─── Root Component ──────────────────────────────────────────────────────── */
const Water = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f7f9fb] font-sans text-[#191c1e] min-h-screen">
      <Navbar />

      <main className="pt-20">
        <HeroSection scrollPosition={scrollPosition} />

        {/* ─── Why Choose Us ─── (unchanged) */}
        <section className="py-24 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-bold text-[#191c1e] mb-4">
                Why Choose Nonsonet for Water Production?
              </h2>
              <div className="h-1.5 w-24 bg-[#006d37] rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcYOEK4Go_h0-OVas2U_GuMgaNBsm0ubqZp5oHTcmr0bblt0qy9-iMi0onXm3Zo4B1k8Nt4tojRTZOmUt9nAPIU7qlnMnduklNQa_1h7Utdvefd0yF2K1TgrA65dkvT3DbPzIT-UxX6RuCJ-QZoyVqWnVAf4P10IwT7gCI4Jq9SssPi0n4t_Cb9aci7gVuENDFEkGYWBHKBKnKDlY78NYFKBe4ZdaU2gcq47EigtVFn2bGWs1YK_DOGYr9Iq6fFbaaSlAkP6Vh_qPE',
                  alt: 'Filtration System',
                  title: 'Advanced Filtration',
                  desc: 'Multi-stage reverse osmosis and UV sterilization ensuring 99.9% biological and chemical purity for your facility.',
                  offset: '',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpTO4GkG_Pmf_JjiFsSJ_PRCR2aRJwa7Wd9vtAp4r7YHMa5JV3HfM-WkD63grGqEu8VCiYvpCTTLsvC0QBhrS_65UQLHDY3qNJo_dwA1pk9y406U_4S1za8rOaNGStEuLu9qDX6tuEPb4e0idhhiKdfA-bgbgMDs9UbbkzxMXXrugaxaVwuobt9nZ7njOBso6_8NsW1cdvHsZtMb_BIOyaeGPUqmIrC2rmvz2Eg7pDHQOBXRDGwGFoxntl1egYDH4VCSAXta3FQ4So',
                  alt: 'Custom Production Line',
                  title: 'Customizable Production',
                  desc: 'Bespoke factory layouts designed to maximize your specific square footage and throughput goals with modular units.',
                  offset: 'lg:translate-y-8',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDigQLvqyL9XZaJps_s5mwt8yqOLXfkQIw26nTeJsyA-5PQLk64wGEh9CpAajgNIH_WvWADfbfC_216qIGMkUqpAc-dkvoGRdXqt3maNcel4p5c1boI1fMi-gVUK0U1qgJSbiPTPk9xFn6Th-dQYm7fFt4Z-wd832r4uwyRouOfugm8Jx30eg-1NL6U2s4_O0uU2TdWZiEp4rCTPL5lbHNeTqpI6zlDTHx81onkkQkuSscNff2GHh34Se8L-RglJgsenBP8qvLRW3KN',
                  alt: 'Efficient Machinery',
                  title: 'High Efficiency',
                  desc: 'Lower energy consumption per unit with automated sensors that optimize power usage during peak production hours.',
                  offset: '',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3kmNlMW3aXJXlMXVvsHdKI0mzSYewJbEMYF5-4W_LDaWhc-006aoZpxe01wzn08E4WGe6A10XJeBdcCe3F4LZZjtQyFpBHXC2OMd_RE7QDCHzEkCw6etPtgnB_jhcyxFxOitGUTrsKfW64u9kRa251TVyaBlEev8Cc0S4xNdiqd41UMP9QNkLvChY2vLEsQDljJ7oSl_stB7VaU4cKZhPHDcniXDJ7M6wpqTsYqqVgvkD9pO4PajW14myH4rnAsBdiUFZ6PaJaSSQ',
                  alt: 'Quality Testing',
                  title: 'Quality Assurance',
                  desc: 'Integrated testing modules that conduct real-time pH and mineral balance assessments on every production batch.',
                  offset: '',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOWIfng4rQhJtWqlanMVrrAKYkJWrbAkehQl-Ie8K2IqbIYs40S9iLMAHsmvV4wOUIpUi3SJYn32zDyfn94fcEB_tSdK3a8X5c_kV4IWxSyQ4l69UalnDCtS5DJGXvq74PI4G7-RT_za6V2dBPXuA31_Nb4ds1Sg8KT-O7O91bEN82Xx9YZ4A_tI7fjp_atieC6j3YXYF9CKzT79G12TvRPojBWcTkRVAviisybhkAOUkKk5uTzbkbx1xBBMJb-UZ_kg511KQMoNfk',
                  alt: 'Sustainable Water Management',
                  title: 'Sustainable Solutions',
                  desc: 'Eco-friendly packaging options and waste-water recycling systems to minimize your environmental footprint significantly.',
                  offset: 'lg:translate-y-8',
                },
              ].map(({ img, alt, title, desc, offset }) => (
                <div
                  key={title}
                  className={`bg-white rounded-xl overflow-hidden hover:shadow-[0px_20px_40px_rgba(0,109,55,0.05)] transition-all duration-500 group ${offset}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      alt={alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={img}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4">{title}</h3>
                    <p className="text-[#3d4a3f] leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Production Solutions Bento Grid ─── (unchanged) */}
        <section id="solutions" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-[#191c1e] mb-6">
                Our Water Production Solutions Include
              </h2>
              <p className="text-[#3d4a3f]">
                A comprehensive suite of technologies designed for small-scale entrepreneurs to large-scale industrial plants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

              {/* Water Treatment */}
              <div className="md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    alt="Water Treatment Unit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src={nonImage}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Semi-Automatic PET Bottle Blowing Machine</h3>
                  <p className="text-[#3d4a3f] mb-6 text-sm">
                    The Semi-Automatic PET Bottle Blowing Machine has an output capacity of 800 bottles per hour. It can blow mineral water in small and large bottles, edible oil bottles, and much more, ranging from 100ml to 20l. It works manually and is available at a cheap price supporting small-scale companies in bottle production.
                  </p>
                
                </div>
              </div>

              {/* Bottling Lines */}
              <div className="md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Bottling Line"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75"
                    src={nonImage1}
                  />
                  <div className="absolute to-transparent" />
                </div>
                <div className="p-8 mt-auto">
                  <h3 className="text-2xl font-bold mb-4">Fully Automatic PET Bottle Blowing Machine：20ml-2000ml, Max 10000BPH</h3>
                  <p className="text-black/80 mb-6 text-sm">
                    Full Automatic PET Bottle Blowing Machine is highly stable and versatile designed two-step blowing equipment.

It is commonly used for bottle production of PET bottles, carbonated drinks, juices, and pesticide packing. It can blow bottles of maxim volume ranging from 20ml to 2l.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDuCsF8su40tpRUvu1vUvrSaWBzdb3zSci8qsJChCTjXlNPwTLYJJuF8uTceT2fW0yOZl8fEQMM_MGt3XB8ffh1gnY_FvNdckboQatfiksyXiJ-odTMevmklzJ5Z9iZitpmBtBdr-2aLosBxy7bSy_PXU3ZYyeoFBT0k0PzQYWbaydFcwh1_vyd4-bUNcvoYOnzhBMtyxMUlTZodLoST8MiV0U-JLP6wo26Gbw6V_OdQGVDpaqMXN50DDw-lLFI5Wi1Gbppn0y_HQg7',
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmd5IIIp0Bwuw1u3kbM-pj0amZiQABCvo31ZaGK4_-Xt__EHPvlf7WR5mRpYgQp7zH5xJfYjo9FLia-JBKYoIQhPGjSOuNFnXtIXkh3gtnWhUPAAqmS5VkgrH_6vgWO8MvgbY75qechPNAHeNMXbHJYPhDqBCZCHjWBsJryy4dwFvxatccUcrH3w5AmRXXwYj61UcT3FdERmEcdNztFHFa0NN-bZ47rtaQI0P_g9CvG-8CNtDmSHZ4MlTihIaL6Ta34Q9ZP6Kp_gof',
                      ].map((src, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#006d37] overflow-hidden">
                          <img alt={`Detail ${i + 1}`} className="w-full h-full object-cover" src={src} />
                        </div>
                      ))}
                    </div>
                    <button className="text-white font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                      Explore <span>→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sachet Packaging */}
              <div className="md:col-span-2 bg-[#e6e8ea] rounded-xl overflow-hidden group">
                <img
                  alt="Sachet Machine"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  src={nonImage2}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Reverse Osmosis Machine 2000L.</h3>
                  <p className="text-[#3d4a3f] text-sm">
                    Reverse Osmosis Machine 2000L.

 

Production Machines for pure water treatment and water purification RO System.

 

Standard water Reverse Osmosis system

 

Capacity : 2,000 Litres per hour (8 Membrane)

 

Power : 3kw Single/Three phase 220/380 volts

 

Size : 1500 x 650 x 1900

 

Weight : 160kg
                  </p>
                </div>
              </div>

              {/* Labeling */}
              <div className="md:col-span-2 bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <img
                  alt="Labeling Machine"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBitGVeJKXCd4TZWoxU16d9tvn9TBZUs_BckKlmuKy9yX3PGW7-ya0S8f1JwGAdS-UGhaEX5zVvLIocw6qT-1lrnaECp8Rfhib_CST18Bn5BXmuiYUgk69-05oRggN6NwxSDy--mhUzGMi29s9WjyapH3Tb2pHqai03XLxQSWh0igDfqK5pA2HIJzxrounwNGsxv-i-my3hqe8A-G3ATkdAgyFbFu4sCDIOb3arpjwHwVlhEWjt9Ghyez6KABLm2sf8mgT3V3g9pfC6"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sachet water machine</h3>
                  <p className="text-[#3d4a3f] text-sm mb-4">
                   Pure Water Machine AS1000 series automatic liquid packaging machinery are widely used for various kinds of liquid packaging, such as Sachet Water, milk, soybean milk, fruit juice, ice drink, soy sauce, vinegar and wine. 
                  </p>
                 
                </div>
              </div>

            </div>
          </div>
        </section>

        

        {/* ─── CTA Section ─── (unchanged - ready for your content) */}
      </main>
    </div>
  );
};

export default Water;