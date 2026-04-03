import Navbar from '../../components/navbar/Navbar';

const Water = () => {
  return (
    <div className="bg-[#f7f9fb] font-sans text-[#191c1e] min-h-screen">
      <Navbar />

      <main className="pt-24">

        {/* ─── Hero Section ─── */}
        <section 
          className="relative px-6 py-20 lg:py-32 overflow-hidden"
          style={{ 
            background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)' 
          }}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

            {/* Left copy - ALL TEXT WHITE WITH ENHANCED CONTRAST */}
            <div className="lg:col-span-7 z-10">
              {/* Badge - Dark mode version for perfect visibility on gradient */}
              <span 
                className="inline-block px-3 py-1 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-6 border border-white/20 shadow-inner"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.12)', 
                  color: '#ffffff' 
                }}
              >
                <span 
                  className="inline-block w-2 h-2 rounded-full mr-1.5"
                  style={{ backgroundColor: '#62f595', animation: 'pulse 2s infinite' }}
                />
                INTELLIGENT INNOVATION
              </span>

              {/* Main Title - Pure white with elegant emerald-to-white gradient on brand name */}
              <h1 
                className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 drop-shadow-md"
                style={{ color: '#ffffff' }}
              >
                Pure, Refreshing{' '}
                <span 
                  style={{
                    background: 'linear-gradient(to right, #62f595, #ffffff, #62f595)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Water Solutions
                </span>{' '}
                by{' '}
                <span 
                  style={{
                    background: 'linear-gradient(to right, #62f595, #ffffff, #62f595)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Nonsonet Technologies
                </span>
              </h1>

              {/* Description - High-contrast white with subtle transparency for depth */}
              <p 
                className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl drop-shadow-sm"
                style={{ color: 'rgba(255,255,255,0.92)' }}
              >
                Advancing global hydration standards through precision engineering. We provide end-to-end
                automated systems for bottle and sachet water production that prioritize purity, efficiency,
                and sustainability.
              </p>
             
            </div>

            {/* Right image - Enhanced shadow & ring for dark hero background */}
            <div className="lg:col-span-5 relative">
              <div 
                className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 ring-1 ring-white/10"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
              >
                <img
                  alt="Clean water production"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5C20IUyGNthYGl0O8umYT_UyqnYESSQMpLuGatsNXORkZ3WLAUaAS1a_UwutZUPnHu0HZrmuytIEKhycCrrKiaq4cf7tvYel556cgdOJFuVcMWAfrmecdIivb8ebzxpDy45E2q_DQ4dild8UFalSexC2JWWHGVG4ynZaC1u208D8nBNeXoywiUr6dZfI-SOYWyokYvaU_WjYdotMYqsEmyY4vCnBiEP4mUP7wmwJTT1JTOiySy76PJfwl5DUXRrfRw1fzlwK_7aSh"
                />
              </div>

              {/* Live stats card - Updated for dark hero (semi-transparent glass effect) */}
              <div 
                className="absolute -bottom-8 -left-8 p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                style={{ 
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: '#62f595' }}
                  ></span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#62f595' }}>
                    Live Stats
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Real-time filtration monitoring active across all automated lines.
                </p>
              </div>
            </div>
          </div>

          {/* Background glow - Slightly boosted for dramatic effect on dark gradient */}
          <div 
            className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[#62f595]/30 to-transparent blur-3xl" 
          />
        </section>

        {/* ─── Why Choose Us ─── */}
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

        {/* ─── Production Solutions Bento Grid ─── */}
        <section className="py-24">
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmsM3PuWHgJ5uNB9h6vI48j9IWxb21Dzfyz09-1W1AF9oHYgQVu5T4lwoQj8jAZ-tYpX2n5KOnoqeeBNm90Ko6BeK2KM1Cqc44PRq1sBITnnv_xcFosPQq7SHvs85S6CdZlDNZWcaAn2jf22R9gk8nRkzzkOQzbZD67pBGWEUODfQ7bHOjFXJbgNKkPqvzpobz36zybAld1Y39wllfzSC5rhJm1dxg1pNE3bjQEq7hwkNwLvNDYYdqGgTDcDXKgsfYCF0x3cHDTj6P"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Water Treatment Systems</h3>
                  <p className="text-[#3d4a3f] mb-6 text-sm">
                    Industrial-grade RO systems and carbon filtration units built for longevity and extreme purity levels.
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {['Ozone Tech', 'Carbon Filtration'].map((tag) => (
                      <li key={tag} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#006d37]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006d37]" /> {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottling Lines */}
              <div className="md:col-span-2 lg:col-span-3 bg-[#006d37] text-white rounded-xl shadow-lg flex flex-col overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Bottling Line"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9GrbS3RTKEJP1syg-S_KuhGcT0ekflTh1pd8JmOKGjsomG-nQvE5mRq3FoqaCMe0Lod3BVO7otnNtdNesi0RmC5e944-6qWrYP5oIvOFwjTj8IVmnJAy9he3I06FLZ3s0ZFi6dY11D1ld9uf8CwsLzVUNxZ1b0-B1zqD6y1ahVXgCwuP70ok7CXSmqe1tqKSyvezNkQguaVzJWL_A0KiPotq-FEvkXcY4dPgRXwqWaj-6hxKir8CikPs0rlhOUquuXW3ZpelEaWHb"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#006d37]/80 to-transparent" />
                </div>
                <div className="p-8 mt-auto">
                  <h3 className="text-2xl font-bold mb-4">Bottling Lines</h3>
                  <p className="text-white/80 mb-6 text-sm">
                    Fully automated washing, filling, and capping monoliths for PET bottles of all sizes, from 330ml to 20L.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDuCsF8su40tpRUvu1vUvrSaWBzdb3zSci8qsJChCTjXlNPwTLYJJuF8uTceT2fW0yOZl8fEQMM_MGt3XB8ffh1gnY_FvNdckboQatfiksyXiJ-odTMevmklzJ5Z9iZitpmBtBdr-2aLosBxy7bSy_PXU3ZYyeoFBT0k0PzQYWbaydFcwh1_vyd4-bUNcvoYOnzhBMtyxMUlTZodLoST8MiV0U-JLP6wo26Gbw6V_OdQGVDpaqMXN50DDw-lLFI5Wi1Gbppn0y_HQg7',
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmd5IIIp0Bwuw1u3kbM-pj0amZiQABCvo31ZaGK4_-Xt__EHPvlf7WR5mRpYgQp7zH5xJfYjo9FLia-JBKYoIQhPGjSOuNFnXtIXkh3gtnWhUPAAqmS5VkgrH_6vgWO8MvgbY75qechPNAHeNMXbHJYPhDqBCZCHjWBsJryy4dwFvxatccUcrH3w5AmRXXwYj61UcT3FdERmEcdNztFHFa0NN-bZ47rtaQI0P_g9CvG-8CNtDmSHZ4MlTihIaL6Ta34Q9ZP6Kp_gof',
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDBI-BfvlzFxh_6FJHru6XDEpvtwTErilx8qDHVVPIHeKEHwyzYtcykz41nSabGCDjVFdP8cH4EFPPfjbP0FGHoxTLkuxAQaSeRwrs582sqf1y9VMteFqjyohLQYcrXEmAvdpExw-1R49x3PZif4FeZQHv1BPJV4VLkZp5crgezPS7sgxY_OzY2wZDcPBlR0l_B8837ufnT0Plmrifo_A_A04JJFdeJdcDUmlehzSP_Iazkm_lEPt-Cl7WJnDg7_lg6sLOo5LETWfpj',
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUtFxfbTtwP34YtkpjdlfwoAhscMlw6TFhRIgiw-zK7at0zZ8nNdSsOQztOPiY2C-8AmQLT2f3aRuOc1TAQm0I1sk_HuVK69QwW7vmL0IeBu0idXFGJip1ONRFNJ3iB4iUPol_kHaSNNT70KoDJKkJjWeedmR7NahQO6k4PZee_5ofTV-7Ili4hgzqbZPMi4gid4Pr0BqbDgsBkHr0GFIYRp2qf2Q4DyUjTTfvetaGl5YbeD3zomIFO4AQUqkpGBGhlGOzdd41nIZg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Sachet Packaging</h3>
                  <p className="text-[#3d4a3f] text-sm">
                    High-speed liquid packaging machines for economical sachet distribution across regional markets.
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
                  <h3 className="text-xl font-bold mb-3">Labeling &amp; Packaging</h3>
                  <p className="text-[#3d4a3f] text-sm mb-4">
                    Precision labeling and shrink-wrap systems for professional market presentation.
                  </p>
                  <div className="flex gap-2">
                    {['Automatic', 'Hot-Melt'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#eceef0] rounded-full text-[10px] font-bold uppercase tracking-tight">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Control */}
              

            </div>
          </div>
        </section>

        {/* ─── Operational Benefits ─── */}
        <section className="py-24 bg-[#00210c] text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Operational Benefits</h2>
              <p className="text-white/70 text-lg mb-12">
                Beyond the machinery, Nonsonet delivers long-term business value through strategic partnership.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: 'Scalability',
                    desc: 'Modular designs allow you to increase capacity as your market presence grows without total system overhauls.',
                  },
                  {
                    title: 'Cost-Effective Solutions',
                    desc: 'Optimized production flows reduce labor costs and minimize material wastage during the packaging phase.',
                  },
                  {
                    title: 'Expert Support',
                    desc: '24/7 technical assistance and preventative maintenance scheduling to ensure zero downtime for your production plant.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-1">
                      <span className="w-4 h-4 rounded-full bg-[#62f595] inline-block" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{title}</h4>
                      <p className="text-white/60 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Professional Technician"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWMDPkL3Xw8dkEDSIjnIwKG_wFM3k4RtJJPShKCaV6l_uXO833CAFIhG9q6Z_7VF9gwc2hdKewZpiOqT6_gd9VOQ-eo8cr63P7FcnRUF8RN2eJTR6vv62jK2gWbqsP5OO07paevDdXuRnFGloOt-K8w5fMW611wWflnjAXDRFj9Nyp1Bt_qZSI4NSyzCCHHtX0SCVpZVHYDZSRGMhzfYqlqyquJxTyAYQc5AvTjj9cSHqKX5DYSs7Ma-adYT2UMP47TSrBQOiPrI0B"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#00210c] via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-sm font-medium italic">
                  "Precision engineering is not just about the machine; it's about the consistency of the purity it delivers."
                </p>
                <p className="text-xs font-bold mt-2 uppercase tracking-widest text-[#62f595]">
                  — Chief Technical Officer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Section ─── */}
        

      </main>
    </div>
  );
};

export default Water;