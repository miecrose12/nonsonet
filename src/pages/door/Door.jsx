import Navbar from '../../components/navbar/Navbar';

/* ─── Image constants ─────────────────────────────────────────────────── */
const IMG_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDA9ZhH9A_92sHccdu90gQrgKwi9u0DrUjGr-1_b0wj1iGU7L372lu2OI92_wfaN0H6tE-HviolOzt4mF4FJp4KgHwwWKV7A-nkvs9JFjAVXPtoZCB-JKEjsNwPMLjhCpyofdqu_qlAuCikji8azSo2pifw-UcHpwibMVqj3DqVKBcH05MlGggAZDvurUdTqjuyZVcniyBGEOmg8Qx2W4QtAV5I4aHSK_tUq6RKfn3hTYX59r1slWWUVUlHbqNuKEgcQeeLt7D0wlH3';
const IMG_HD =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIAGO7IFR0lpXQPSF1zG3hR8_5Skwfrl08JZoyV_x_2hYB3X4mSXjeF5nHAJKl1vTrFxgnvIWb5E8gtw5c7Bwn2xAK8B6CMx4uuTclmtb43IA2HdkZzhclA0h8_iU498XdfAclQ95vmdceGfgscsFV0kUdXDaDW2RoMdgfAfHDxSf8WSGsKCvi53WAUmbls5UYBOgAFnUVM3lS4rEdLYMvWlFG93E8eP6xfi9RivX9MmhdpFFdjXge1ZjGd45g58UHUC5tyiLxVEfz';
const IMG_AUDIO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBaPmJ3NSL7RleLXiBAhBcRqxNL0puiPAnjb_gIcn8NV4HbqxDmLxCSa7puYoqFrTUBx_6S0BGb7xOjJye7U2XQJYVq8rgHvPRrChvMk4COPfSfMYE7SKDP9mdxlR6aOFLe-D3flkenukyYuFOr0cTMv0XkayFBbKoMarnsKW2ploLc5NolFvYT3Lc2UmyY-U7l04mdMsZlKZkUTNIG9SimZ2OHCzviRw6m9jzx79FufEpIQGcPso4FYOanljDQyL2hJC9aj-89zmFy';
const IMG_MOTION =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAxB3lILW4WYHPq7TOvzKWXyRhrgYZuv_6ZDaLn289k1NWNtctM6_i80YnGqkZUExbhWH5dNyTQNnN9TB0HUI1RGO9DMNN6z8ZXm9C6Dtm9_2hFGXXB0oW0rm2aBFC9CDjxORI19ky1mdRchQhE_MJFhlJYGMMG6MYVbrZG5E-Mw-1Ibs3PhBhe6O_YAL6qemG9oXCXzXyqALTKlvd3ULdOA1k_mY9c7EFbi2YLPmBMoy_Qtp_raqcNxxQKe3i6O8TjURx833WYl_8G';
const IMG_WIRELESS =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBuVWF5aoeISeWF--6ehQHonIE0kLkaTlhf8M176Quhkc_I1nHpjjNR6foddbTnsBRIUwtg6GWf9wJ42fwDWyqMr3NfxUmwTod-fSsF-Ux66fvjAZObTXuAUYaj_pZU1kaYL_gl2WNr52f0pe5G3hbfFqSmUlwj-o3ZHJhzngxXKfM7meUQweIIzNHAtvrmTcdUC3p1qsfvRbr0wyOLH9h1pCVq1RzObxwLn_9lWkXmHziCsogceEo8cAZ0UdlDTcc0Cgl-DwPT2p7j';
const IMG_WIRED =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDvV3SRQBV4GhXwkbe2A2tHJb3Xghr_mL6eStJRORYSl-53tN9D5mKg8v__BTjTe8DRwnahpihwzv2C0LB5a3IvqnnPyAmo7KKHL9zFxFY7IAb78OOIKPLioufydCjyDvj29n-S7-CJU9IRmYAVmF54Pyox1Mu0nXretlOci8nRdRVKr43LR-689UPdJsyQWIMwGKLqKsbe82ArUqbf9pNmzI-Nt9nEU7yaO64ivIKpgRcihrbO-65mSRC_ww9EFidSMj5yFXjNr-q_';
const IMG_LOCK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDPV8MtJKUoIgywYM6f0djDy3vc-Cx1XI06TRgqYTHj29GQmZamH46tNNE0F47Qzb7Ot73R3SGjhklLHkiCasj2ZXSPSsqCCnxty4laiGNybfXXmePre6wFMylklsmWaO1VXCSuDdlBmTLL_m0xl3GwWBG1CaAKsPnuYOT5AYUeNtq04tL14KWQmmKwyMFJTGODRPqmHsk_afDuSq_68EMq9T-7SyUPffqtQggagU6SQ9y0_ODPcawT935IA7FUB4aDg_6jJ3rhVOpk';
const IMG_MULTI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAXl1rdHHJkaiqkHlOrmZpPPd2c2Pud94D34AFNydD3Sfu-wfBHpeot0q7dCMXh2_JsqXDemV-22zyba25LGffDSLXKctxMhAg4TEkCNzHdwDSkCQRZLq8sgpCON5K0Ywx67FLVykqymcgsamjReArcar7GMJ0JuQMTIOKK1ERqWEcpIcbGDPoc-B6MmH-RI1POjKTBMB_zSaKWMYmkiFa9p1n1bQf78Gmsbg2NXwVoHZAvHfWvfG6ay7NHCjfbSyuic29m4WDt7UHf';
const IMG_BEN1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUN0wvL30i6zrWLE7GtXA9Nod1POcQTgXbaY-8hh_Re4CyRyKFJc6MTeBW3Xkd55-h1rwQrJIKReQwOLKqbE-p54mmwnkJGTtd30tPZOQKURP_ywlOEC0K9dR2IAs7Z_5iSqB1c5mTHa2xlCoYafYFUciQ48frwt7ejl_ooo7FvwMDdmLCMSvCjqP8CCeoLhecGnCA0R_gMJIFN-iZ3X5FqUD4A4U1ZiYF_tnjx9Qe9hunIklVvrez69kdVLBPrsB6CkvxUq6gGtDG';
const IMG_BEN2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAUo8gIxpQh7fJH7Z3Np9EecTia5uwwLLeSqBi_laBKeRNEzlYCshqH6xLMbRrSqgBiYmyAjeMOaYJlhQwelUlh_nE1IsdachAYAyzdSHCILpNwwE8BkbN5ViDZjvHGU6sxeGx1ApYSFoWUPEu444VoAhj2M9C8qcSrlvFeBDoznhtt84_rEW30ck6LYQcZbH2ifqBS3iF51kO1BGHwTV-ISOoz3eYDEcvkTX7ZHO6x4EKdMRksfGHfNNgvt8DxfqbVwaTth4Y8yvIu';
const IMG_BEN3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAeBOO1UQJHTwjBVhd1k6fqM4X9ejqqUpebHPrZWzbWxj2mdul9npxWGekpCj6kA9rlVMWjeKkzTBHjAuldEKRicePOf6CYvirfMFAhBLuIz8_c9So57zSuwmjbN0uSbwAZzFaNCpBjq12L9Ywe_r_IC5hQmeYu56pBXDjFr8IwLH44Y1zhSq0F6radrbbxy6EfaQtlRK2J-_JBHIcsSoH6m55F7aguh8pNkaTa2m0Hwq6Yj9T5iW4rT5yFHXm7wwtHh-71UcaOX39';
const IMG_BEN4 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_lxk7jZ1yM5EekjBvMpdJFD0szJVQmav2o-rmoa7lAkFJCX1iZ2agiccpGMZmwWRfuIVxfUNJVbYXa13CQxWok3hXW85NuA1LjPTGPZHyvbgQX2CwInM_qCklXACq35AMia1LDqk2H1QNXw_CCV5YDrnVZoEuC6xBxJW6owebQiQmxdjnCYJZJ839x3GFSu2Z1r8eL9yHFjQbZoavvly9Ff0P_x5qgNT6aBALIzOu8oxsDTd28CTDTbDKc7ztROIWkYjIUvS4uNd5';

/* ─── Data ────────────────────────────────────────────────────────────── */
const coreFeatures = [
  {
    img: IMG_HD,
    title: 'High-Definition Video',
    desc: 'Capture every nuance in stunning 4K clarity. Wide-angle optics ensure no blind spots, even at the edges of your porch.',
  },
  {
    img: IMG_AUDIO,
    title: 'Two-Way Audio',
    desc: 'Real-time communication with noise cancellation. Talk to visitors as if you\'re standing right behind the door.',
  },
  {
    img: IMG_MOTION,
    title: 'AI Motion Sensing',
    desc: 'Smart zones allow you to focus only on important areas, eliminating false alerts from passing cars or swaying trees.',
  },
];

const benefitCards = [
  {
    img: IMG_BEN1,
    title: 'Enhanced Security',
    desc: 'Visible deterrents coupled with invisible technology to keep threats at bay.',
    overlayClass: 'from-black/90 via-black/20',
    titleColor: 'text-white',
    descColor: 'text-white/80',
  },
  {
    img: IMG_BEN2,
    title: 'Convenience',
    desc: 'Manage deliveries and visitors without ever pausing your day.',
    overlayClass: 'from-green-900/90 via-green-900/20',
    titleColor: 'text-white',
    descColor: 'text-white/80',
  },
  {
    img: IMG_BEN3,
    title: 'Property Value',
    desc: 'Smart integration increases desirability and long-term resale value.',
    overlayClass: 'from-black/90 via-black/20',
    titleColor: 'text-white',
    descColor: 'text-white/80',
  },
  {
    img: IMG_BEN4,
    title: 'Total Peace',
    desc: 'Rest easy knowing you have the most vigilant eye on your entrance.',
    overlayClass: 'from-green-400/90 via-green-400/20',
    titleColor: 'text-green-900',
    descColor: 'text-green-900/90',
  },
];

const hl = { fontFamily: 'Manrope, sans-serif' };

/* ─── Component ───────────────────────────────────────────────────────── */
export default function Door() {
  return (
    <div className="bg-gray-50 text-gray-900 selection:bg-green-200 selection:text-green-900">

      {/* ── Imported Navbar ── */}
      <Navbar />

      <main className="pt-20">

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[85vh] flex items-center overflow-hidden px-6 py-16 lg:px-12 lg:py-24"
          style={{ background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)' }}
        >
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Text column */}
            <div className="lg:col-span-6 space-y-8">

              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-3 bg-[#00d27b]/15 px-4 py-2 rounded-full border border-[#00d27b]/20">
                <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
                <span
                  className="text-[10px] font-extrabold tracking-[0.2em] text-[#00d27b] uppercase"
                  style={hl}
                >
                  Smart Home Security
                </span>
              </div>

              <h1
                className="text-5xl lg:text-[64px] xl:text-[72px] font-extrabold text-white tracking-tight leading-[1.05]"
                style={hl}
              >
                The New Standard in{' '}
                <span className="text-[#00d27b] italic">Front Door</span>{' '}
                Intelligence.
              </h1>

              <p className="text-lg lg:text-xl text-white/65 max-w-xl leading-relaxed font-medium">
                Luminous IT's door video bells merge sophisticated hardware with intuitive
                software, keeping you connected to your home's entrance from anywhere.
              </p>

              {/* Trust row — desktop only */}
              <div className="hidden lg:flex items-center gap-8 pt-4 border-t border-white/10">
                {[['4K', 'Ultra HD Video'], ['30ft', 'Night Vision Range'], ['256-bit', 'Encryption']].map(
                  ([val, label]) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-xl font-black text-[#00d27b]" style={hl}>{val}</span>
                      <span className="text-xs text-white/45 font-medium">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Image column */}
            <div className="lg:col-span-6 relative mt-10 lg:mt-0">

              {/* Main card */}
              <div
                className="relative z-10 rounded-[2.5rem] overflow-hidden bg-white/10 p-3 lg:p-4 border border-white/10"
                style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.4)' }}
              >
                <img
                  src={IMG_HERO}
                  alt="Modern video doorbell mounted on home exterior"
                  className="w-full h-full object-cover rounded-[2rem] aspect-[4/3] lg:aspect-[3/2]"
                />
              </div>

              {/* Float AI card */}
              <div
                className="absolute -bottom-6 -right-2 lg:-bottom-10 lg:-right-6
                           bg-white/10 backdrop-blur-md p-5 lg:p-6 rounded-3xl
                           border border-white/20 max-w-[240px] lg:max-w-[260px] z-20"
                style={{ boxShadow: '0 20px 50px -12px rgba(0,0,0,0.3)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#00d27b]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d27b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#00d27b] uppercase tracking-wider">AI Identification</p>
                    <p className="text-sm font-extrabold text-white">Delivery Detected</p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#00d27b] rounded-full" />
                </div>
              </div>

              {/* Decorative blurred orb */}
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#00d27b]/10 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            CORE FEATURES GRID
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-12 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl mb-16 lg:mb-20">
              <p className="text-green-700 font-bold text-sm tracking-widest uppercase mb-4">
                Core Technology
              </p>
              <h2
                className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
                style={hl}
              >
                Advanced Security Components
              </h2>
              <div className="h-1.5 w-24 bg-green-400 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              {coreFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="p-8 lg:p-10 rounded-[2rem] bg-gray-50 hover:bg-white
                             border border-transparent hover:border-gray-200/60
                             transition-all duration-500 group"
                >
                  <div className="w-full aspect-video rounded-2xl overflow-hidden mb-7 lg:mb-8">
                    <img
                      src={feat.img}
                      alt={feat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-extrabold mb-3 lg:mb-4" style={hl}>
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                    {feat.desc}
                  </p>
                </div>
              ))}

              {/* Night Vision */}
              <div
                className="p-8 lg:p-10 rounded-[2rem] bg-gray-50 hover:bg-white
                           border border-transparent hover:border-gray-200/60
                           transition-all duration-500 group"
              >
                <div
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center
                             justify-center mb-7 lg:mb-8 text-green-700
                             group-hover:bg-green-700 group-hover:text-white transition-all duration-300"
                  style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-extrabold mb-3 lg:mb-4" style={hl}>
                  Enhanced Night Vision
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                  Color night vision capabilities provide crystal clear imagery even in the dead of
                  night, extending your reach to 30ft.
                </p>
              </div>

              {/* Cloud / Encryption */}
              <div
                className="md:col-span-2 bg-green-700 p-10 lg:p-12 rounded-[2.5rem]
                           flex flex-col md:flex-row items-center gap-8 lg:gap-10
                           overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full
                                -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 space-y-4 md:w-3/5">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-400 rounded-xl flex items-center justify-center mb-2">
                    <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806
                           3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438
                           3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806
                           3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138
                           3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946
                           3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white" style={hl}>
                    Military-Grade Encryption
                  </h3>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    Your data is yours alone. Every second of footage is encrypted with end-to-end
                    security before it ever reaches the cloud.
                  </p>
                </div>
                <div className="relative z-10 md:w-2/5 flex justify-center">
                  <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-xl
                                     hover:bg-green-400 hover:text-green-900 transition-all duration-300 active:scale-95">
                    Secure Storage Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            PRODUCT SOLUTIONS
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-12 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-6 lg:mb-8 leading-tight"
                  style={hl}
                >
                  Tailored Video Bell Solutions
                </h2>
                <p className="text-gray-500 text-base lg:text-lg mb-8 lg:mb-10 font-medium leading-relaxed">
                  We offer a spectrum of hardware options designed to fit seamlessly into any
                  architectural style or infrastructure requirement.
                </p>
                <div className="space-y-4 lg:space-y-6">
                  {[
                    { title: 'Precision Installation', sub: 'Expert mounting and calibration.' },
                    { title: '24/7 Remote Monitoring', sub: 'Uptime guarantee for your security.' },
                  ].map(({ title, sub }) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-gray-50 border border-gray-100"
                      style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.06)' }}
                    >
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-bold text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 flex flex-col gap-10 lg:gap-12">

                <div
                  className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group"
                  style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}
                >
                  <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                    <img src={IMG_WIRELESS} alt="Wireless battery-powered video doorbell"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10 md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">Wireless Series</span>
                    <h4 className="text-xl lg:text-2xl font-extrabold mb-4" style={hl}>Wireless Door Video Bells</h4>
                    <p className="text-gray-500 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                      Versatile, battery-powered systems that install in minutes. Ideal for renters and heritage properties.
                    </p>
                    <a href="#" className="text-green-700 font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 w-fit">
                      Product Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div
                  className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row-reverse group"
                  style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}
                >
                  <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                    <img src={IMG_WIRED} alt="Hardwired professional grade video doorbell"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10 md:w-1/2 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">Wired Pro Series</span>
                    <h4 className="text-xl lg:text-2xl font-extrabold mb-4" style={hl}>Hardwired High-Performance</h4>
                    <p className="text-gray-500 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                      Continuous power delivery for zero-latency recording and faster response times. Never worry about recharging.
                    </p>
                    <a href="#" className="text-green-700 font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 w-fit">
                      Product Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="bg-white p-8 lg:p-10 rounded-[2rem]" style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}>
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 lg:mb-6">
                      <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg lg:text-xl font-extrabold mb-3 lg:mb-4" style={hl}>Smart Lock Sync</h4>
                    <img src={IMG_LOCK} alt="Smart lock interface" className="w-full h-36 lg:h-40 object-cover rounded-xl mb-4 lg:mb-6" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      One-touch unlocking for verified guests directly from your live video feed.
                    </p>
                  </div>

                  <div className="bg-white p-8 lg:p-10 rounded-[2rem]" style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}>
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 lg:mb-6">
                      <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-lg lg:text-xl font-extrabold mb-3 lg:mb-4" style={hl}>Multi-Unit Console</h4>
                    <img src={IMG_MULTI} alt="Multi-unit intercom system" className="w-full h-36 lg:h-40 object-cover rounded-xl mb-4 lg:mb-6" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Enterprise-grade solutions for apartments and corporate gated facilities.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            VISUAL BENEFITS SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 lg:px-12 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 lg:mb-6" style={hl}>
                Security Meets Serenity
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Beyond hardware, we provide the peace of mind that allows you to focus on what truly matters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:gap-10">
              {benefitCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative h-[380px] lg:h-[450px] rounded-[3rem] overflow-hidden transition-transform duration-500 hover:-translate-y-2"
                  style={{ boxShadow: '0 20px 50px -12px rgba(0,109,55,0.08)' }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.overlayClass} to-transparent flex flex-col justify-end p-8 lg:p-10`}>
                    <h5 className={`text-xl lg:text-2xl font-extrabold ${card.titleColor} mb-2 lg:mb-3`} style={hl}>
                      {card.title}
                    </h5>
                    <p className={`${card.descColor} text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}