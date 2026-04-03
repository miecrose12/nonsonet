import Navbar from '../../components/navbar/Navbar';
import {
  Camera,
  Globe,
  Monitor,
  Target,
  Moon,
  Layers,
} from 'lucide-react';
const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0rRhSABBgwEIMh2fzI82iwBmapc60WTRwF_BSzqalXkb7b5eNjzwFprT8tkyqDYM5VVs_cSqCsjMf2smf95ZOLSvzhEqSYRes5XiWKUDWMeguwLt-h8sMkqiQjdoIFal9HcCAqkgPWVGbl9PhAHjzPnEX4n9tnKwrw5vp857rxuORLlakR-X3oGrQx_nThTtRF4oUQIfr-J8Nx6y8KnCDzyIkGGWucRHJRmoyDIIGpCki7b02-3StGbtJr0Lnx9hqIyUvPSQWPxl';
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUXZcD3CbX6LDRsZDC1CM3yrrWJZfHBJDNCgK36VhQPkxSvRLKzuQzisz-8gXSbTU3wlbdCWO5SGxepWz8mx9lCOTo2A6ZdQfTSrLMkvy38Ep0fBC-be4VGKTBg6qD5LK_Gby8yrA3OturuXmkEY43toYRNUK8kIlWB3-DRmVsxgPqF8c0XOXcNJaazPpAt-F58AHzQAtNZSyBL8K6-FznT6xjAdzLn4rYenyf3YrsTXviVwunVH8N8T15oHA_tyx9tPXR-hX9UXj4';
const DOME_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuArweMbfb1s9OvFynTXkNp8Y4I73U_mE5N0g2ykAWmI3xBxl-JOzku_YnhOG0axJJWLL_MuBmr6cxpBawaZPm5oXJf624jDJLvkHAY70O1P5d0CyyZTihfyDf1Avit7leN5-XeBtuXIHwL3QcDDXyqr9NUigUMNHlb61fPmfobyYC3lQvJQPJNBYipp1BAtF_kXmpgIDTRxjcr6EYG6wQfQMQ7L5Qo6xkMFQ_3hrC1l4H6Wq2JMb_N7odT9NObmBSz7quPzcQJijn5j';
const PTZ_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3Wnbh8QmD8s71Ujy0JgVf91u-NAcbHcu0zSk4zqw2Hv5MziAQrCnhlioKIuSTlKYID8ugIuWt17rNw-23xOIrF5gca2YmDz3DWFH4mYajcaA6yhPiVt6mDlQnQYK5L6U0qX5-RHI9BOYlcQEwsbxKd32BWsYYoV22kNJl6YzIxuuh2Yu7N0g3Lb1AKa1hDPlKjn836ndCI0b1sybq-k2Vwv1MC_Z7LShwCk7v__4PqI0YhtDtC1Io0lC1msYrU2Wy2ncvjai5Tnpe';
const BULLET_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAaCkktuGkjBm0tfR9K7JNZnT1FedOXusCPLWsURYqlXKpst6qnkbLzM2Jh00-aAlJwZpX9weAaGj78H64tklRJ6oHjIcOsFfNx5TblTX8KEjgv6_AI53GwuO--vzUIlIjb3JM7dlnKKul2uo8jhwHp6z5EV_oNnkzykx-sN8yNUl6zaQvPjj2xb9sbgUvbGErNt-Y_6NEqMnWHG2HT4uC5MuD2LmCaFY2jOmuM6q3r1AifYDOM4H0O349F7nJdJm5b2RgOnTOpejAy';
const SENSOR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBOC7-KWEXgRVUGCAR8ku25Hh88dyEWHxT4lIjqE6nR6dNy42PMl1myKLWatfbCXJh7Rc4yOjGJYgbKabnfmweVuLwB1PEErdTN_H3cEV4jU2FFudj33DfzSpZ048ohVh-vpc9ERVZHLSyyy8lCwhYBPTyNfmj7ScEpGK3AmEZSRCcEenM_h4_m-iPVmwT1Y5Z1o-VAethzVEdq-iXUl29__KU_MrU-mUxf7nk0xo0WeuGgr0hslvtlGpMqS0Ve56qFodNFTioTeTen';
const NVR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_Ctc2a2B9TSTbvQhKgzqxKqa3X2R8vxEGwaHcaEYzxToAHSwp6LKpYskLdohFpYrLXmC-XD9t6iMklBz2uqM4dJHO9WuJ8im7rUoNyC5YNIv1NeqeOaO1bjPE3HwOF3gUc-ZSBmPq1TYYNvCTC_1mcNZWkLPMJHSY2pEsM-tF6dDyOK1tkFaloonS-TEuq__GfWEHncPmx33iyyvKXqboAEquUXstbRXtvmoz7NN-pB6vQ0y13xcWFco5-ocBYYFAwyNtoLFjgTa';

/* ─── Data ────────────────────────────────────────────────────────────── */
const cameraProducts = [
  {
    img: DOME_IMG,
    badge: 'PREMIUM DOME',
    badgeColor: 'bg-green-700',
    title: 'IP Dome Cameras',
    desc: 'High-bandwidth digital security with integrated storage and AI processing. Discreet and tamper-resistant design for commercial and residential environments.',
  },
  {
    img: PTZ_IMG,
    badge: 'PRO PTZ',
    badgeColor: 'bg-green-900',
    title: 'Pan-Tilt-Zoom (PTZ) Systems',
    desc: 'Active tracking technology with 360-degree rotation and high-power optical zoom for large perimeter monitoring and wide open spaces.',
  },
  {
    img: BULLET_IMG,
    badge: 'WIRELESS BULLET',
    badgeColor: 'bg-green-700',
    title: 'Bullet CCTV Systems',
    desc: 'Zero-cable deployments featuring high-visibility deterrent design and long-range night vision. Ideal for outdoor perimeters and entry points.',
  },
];

const benefits = [
  { num: '01', title: 'Crime Deterrence',       desc: 'Visible surveillance infrastructure significantly reduces the likelihood of unauthorized activity.' },
  { num: '02', title: 'Evidence Collection',    desc: 'Capture high-definition legal-grade footage for incident investigation and insurance claims.' },
  { num: '03', title: 'Operational Monitoring', desc: 'Optimize workflow and staff productivity with real-time business intelligence feeds.' },
  { num: '04', title: 'Peace of Mind',          desc: 'Rest easy knowing your assets are under constant watch by high-tier technology.' },
];

const stats = [
  { val: '< 0.3s', label: 'Alert Response Time', sub: 'From detection to notification' },
  { val: '4K UHD', label: 'Maximum Resolution',  sub: 'Across all flagship cameras' },
  { val: '128-ch', label: 'NVR Capacity',         sub: 'Multi-channel simultaneous record' },
  { val: '5 yr',   label: 'Warranty Coverage',    sub: 'On all hardware components' },
];

const hl = { fontFamily: 'Manrope, sans-serif' };

export default function Cctv() {
  return (
    <div className="bg-white text-gray-900 selection:bg-green-200 selection:text-green-900">

      <Navbar />

      <main className="pt-20">

        {/* ============================================
            HERO SECTION – Dark gradient + all white text
            ============================================ */}
        <section 
          className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-16 xl:px-24 lg:pt-24 lg:pb-32"
          style={{ background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)' }}
        >
          {/* Decorative background image – slightly increased opacity for dramatic dark effect */}
          <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-10">
            <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="absolute left-0 top-0 hidden h-full w-1.5 bg-emerald-400 lg:block" />

          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* ── Text column – ALL WHITE ── */}
            <div>
              {/* Badge – Dark mode version */}
              <span 
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-inner"
              >
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                🛡 Trusted Security Partner
              </span>

              {/* Title – Pure white with elegant gradient on brand name */}
              <h1
                className="mb-6 text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md lg:text-5xl xl:text-6xl"
                style={hl}
              >
                Protect What Matters Most with{' '}
                <span 
                  style={{
                    background: 'linear-gradient(to right, #62f595, #ffffff, #62f595)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Nonsonet Technologies
                </span>{' '}
                CCTV Solutions
              </h1>

              {/* Description – High-contrast white */}
              <p 
                className="mb-8 text-lg leading-relaxed drop-shadow-sm lg:text-xl"
                style={{ color: 'rgba(255,255,255,0.92)' }}
              >
                Elevate your security with high-definition monitoring and intelligent surveillance
                infrastructure designed for absolute clarity and reliability.
              </p>

              {/* Stats row – White text */}
              <div className="mt-12 hidden gap-10 lg:flex">
                {[['500+', 'Installations'], ['99.9%', 'Uptime SLA'], ['24/7', 'Support']].map(
                  ([val, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-black text-white" style={hl}>{val}</p>
                      <p className="text-sm text-white/70">{label}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ── Right image column – Enhanced for dark hero ── */}
            <div className="mt-14 lg:mt-0">
              <div 
                className="relative overflow-hidden rounded-2xl border-l-8 border-emerald-400 shadow-2xl lg:rounded-3xl ring-1 ring-white/10"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
              >
                <img
                  src={HERO_IMG}
                  alt="Security specialist monitoring CCTV feeds"
                  className="aspect-video w-full object-cover lg:aspect-[4/3]"
                />

                {/* Live badge – already dark-friendly, kept as-is */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  LIVE MONITORING ACTIVE
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================
            REMAINING SECTIONS UNCHANGED
            ============================================ */}

        <section className="bg-gray-50 px-6 py-24 lg:px-16 xl:px-24 lg:py-32">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-14 text-center">
              <h2 className="mb-2 text-3xl font-bold text-green-900 lg:text-4xl" style={hl}>
                Advanced Intelligence
              </h2>
              <p className="text-gray-500">Why industry leaders trust our surveillance architecture.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

              <div className="col-span-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Camera className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-2 text-lg font-bold">High-Res Cameras</h3>
                <p className="text-sm text-gray-500">
                  Crystal clear 4K imaging for unmistakable identification at any distance or lighting condition.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Globe className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-1 font-bold">Wide Range</h3>
                <p className="text-xs text-gray-500">Comprehensive coverage across any terrain.</p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm">
                <Monitor className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-1 font-bold">Remote Access</h3>
                <p className="text-xs text-green-800">Monitor from anywhere in the world instantly.</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Target className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-1 font-bold">Motion Detection</h3>
                <p className="text-xs text-gray-500">AI-powered alerts that filter out false positives.</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <Moon className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-1 font-bold">Night Vision</h3>
                <p className="text-xs text-gray-500">Full-color thermal and IR imaging in total darkness.</p>
              </div>

              <div className="col-span-2 rounded-2xl border-2 border-green-900/10 bg-white p-8 shadow-lg shadow-green-900/5">
                <Layers className="mb-4 h-10 w-10 text-green-700" />
                <h3 className="mb-2 text-lg font-bold text-green-900">Scalable Solutions</h3>
                <p className="text-sm text-gray-500">
                  From single storefronts to multi-national industrial complexes — one platform, infinite scale.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-16 xl:px-24 lg:py-32">
          <div className="mx-auto max-w-[1440px]">

            <h2
              className="mb-16 text-center text-3xl font-bold text-green-900 lg:mb-20 lg:text-4xl"
              style={hl}
            >
              Engineered Systems
            </h2>

            <div className="space-y-24 lg:space-y-32">

              {cameraProducts.map((cam, i) => (
                <div
                  key={cam.title}
                  className={`group flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-black/10 lg:w-1/2">
                    <div className="aspect-square lg:aspect-[4/3]">
                      <img
                        src={cam.img}
                        alt={cam.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className={`absolute top-4 left-4 ${cam.badgeColor} rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                      {cam.badge}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h3 className="mb-4 text-2xl font-bold text-green-900 lg:text-3xl" style={hl}>
                      {cam.title}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-gray-500 lg:text-lg">
                      {cam.desc}
                    </p>
                    <ul className="mb-8 flex flex-wrap gap-2">
                      {['4K Resolution', 'AI-Powered', 'Weatherproof', 'Easy Install'].map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-800"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 h-1 w-14 bg-green-700/30" />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                <div className="group relative flex h-96 flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/50 bg-gray-100 p-10 lg:h-[440px]">
                  <div className="z-10">
                    <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                      INDOOR SERIES
                    </span>
                    <h3 className="mb-3 text-xl font-bold lg:text-2xl" style={hl}>
                      Discreet Indoor Sensors
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 lg:text-base">
                      Ultra-compact aesthetic that blends seamlessly into office interiors without
                      compromising coverage or resolution quality.
                    </p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-64 w-64 duration-500 group-hover:opacity-100">
                    <img src={SENSOR_IMG} alt="Indoor sensor" className="h-full w-full object-contain" />
                  </div>
                  <button className="z-10 self-start rounded-lg border-2 border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 transition-all hover:border-green-700 hover:text-green-900 active:scale-95">
                    Explore Sensors
                  </button>
                </div>

                <div className="group relative flex h-96 flex-col justify-between overflow-hidden rounded-2xl border-2 border-green-900/10 bg-white p-10 shadow-lg shadow-green-900/5 lg:h-[440px]">
                  <div className="z-10">
                    <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                      STORAGE HARDWARE
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-green-900 lg:text-2xl" style={hl}>
                      NVR &amp; DVR Hardware
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 lg:text-base">
                      Enterprise-grade storage hardware for 24/7 continuous data retention and
                      multi-channel processing with redundant backups.
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 h-1/2 w-full duration-500 group-hover:opacity-70">
                    <img src={NVR_IMG} alt="NVR hardware" className="h-full w-full object-cover" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-gray-200/30 bg-gray-50 px-6 py-24 lg:px-16 xl:px-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:gap-20">

            <div>
              <h2 className="mb-12 text-3xl font-bold text-green-900 lg:text-4xl" style={hl}>
                The Value of Vigilance
              </h2>
              <div className="space-y-10">
                {benefits.map(({ num, title, desc }) => (
                  <div key={num} className="flex items-start gap-6">
                    <span
                      className="flex-shrink-0 text-4xl font-black text-green-700/20 lg:text-5xl"
                      style={hl}
                    >
                      {num}
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-bold">{title}</h4>
                      <p className="text-sm leading-relaxed text-gray-500 lg:text-base">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 hidden flex-col justify-center gap-5 lg:flex">
              {stats.map(({ val, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-green-50">
                    <span className="text-lg font-black text-green-900" style={hl}>{val}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
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