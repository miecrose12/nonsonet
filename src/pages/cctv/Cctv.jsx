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
    badgeColor: 'bg-[#006d3d]',
    title: 'IP Dome Cameras',
    desc: 'High-bandwidth digital security with integrated storage and AI processing. Discreet and tamper-resistant design for commercial and residential environments.',
  },
  {
    img: PTZ_IMG,
    badge: 'PRO PTZ',
    badgeColor: 'bg-[#006d3d]',
    title: 'Pan-Tilt-Zoom (PTZ) Systems',
    desc: 'Active tracking technology with 360-degree rotation and high-power optical zoom for large perimeter monitoring and wide open spaces.',
  },
  {
    img: BULLET_IMG,
    badge: 'WIRELESS BULLET',
    badgeColor: 'bg-[#006d3d]',
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

/* ─── Network Canvas Animation (exact same as Landing page) ───────────── */
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

export default function Cctv() {
  return (
    <div className="bg-white text-gray-900 selection:bg-green-200 selection:text-green-900 font-['Manrope',sans-serif] text-[#191c1d]">

      <Navbar />

      <main className="pt-20">

        {/* ============================================
            HERO SECTION – NOW 100% MATCHING LANDING PAGE
            (background, canvas animation, radial glow, typography, colors, badge, gradients)
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
            <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* ── Text column – ALL WHITE + exact Landing typography ── */}
              <div>
                {/* Badge – exact same style as Landing page */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
                  Lagos, Nigeria &bull; CCTV Excellence
                </div>

                {/* Headline – exact font, size, weight, tracking, leading as Landing */}
                <h1
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-[800px]"
                >
                  Protect What Matters Most with{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6 0%, #00d27b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    intelligent
                  </span>{' '}
                  CCTV Solutions
                </h1>

                {/* Subtext – exact style as Landing */}
                <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">
                  Elevate your security with high-definition monitoring and intelligent surveillance infrastructure designed for absolute clarity and reliability.
                </p>

                {/* Stats row – styled exactly like Landing page stats */}
                <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                      500+
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Installations
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
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
                      Monitoring
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right image column – kept for visual impact but now on brand dark hero ── */}
              <div className="mt-14 lg:mt-0">
                <div 
                  className="relative overflow-hidden rounded-3xl border-l-8 border-[#00d27b] shadow-2xl lg:rounded-3xl ring-1 ring-white/10"
                  style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
                >
                  <img
                    src={HERO_IMG}
                    alt="Security specialist monitoring CCTV feeds"
                    className="aspect-video w-full object-cover lg:aspect-[4/3]"
                  />

                  {/* Live badge – updated to brand green */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#00d27b]" />
                    LIVE MONITORING ACTIVE
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================
            REMAINING SECTIONS (unchanged except minor brand color consistency)
            ============================================ */}

        <section className="bg-gray-50 px-6 py-24 lg:px-16 xl:px-24 lg:py-32">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-14 text-center">
              <h2 className="mb-2 text-3xl font-bold text-[#006d3d] lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                Advanced Intelligence
              </h2>
              <p className="text-gray-500">Why industry leaders trust our surveillance architecture.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

              <div className="col-span-2 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <Camera className="mb-4 h-10 w-10 text-[#006d3d]" />
                <h3 className="mb-2 text-lg font-bold">High-Res Cameras</h3>
                <p className="text-sm text-gray-500">
                  Crystal clear 4K imaging for unmistakable identification at any distance or lighting condition.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <Globe className="mb-4 h-10 w-10 text-[#006d3d]" />
                <h3 className="mb-1 font-bold">Wide Range</h3>
                <p className="text-xs text-gray-500">Comprehensive coverage across any terrain.</p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
                <Monitor className="mb-4 h-10 w-10 text-[#006d3d]" />
                <h3 className="mb-1 font-bold">Remote Access</h3>
                <p className="text-xs text-green-800">Monitor from anywhere in the world instantly.</p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <Target className="mb-4 h-10 w-10 text-[#006d3d]" />
                <h3 className="mb-1 font-bold">Motion Detection</h3>
                <p className="text-xs text-gray-500">AI-powered alerts that filter out false positives.</p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <Moon className="mb-4 h-10 w-10 text-[#006d3d]" />
                <h3 className="mb-1 font-bold">Night Vision</h3>
                <p className="text-xs text-gray-500">Full-color thermal and IR imaging in total darkness.</p>
              </div>

              <div className="col-span-2 rounded-3xl border-2 border-green-900/10 bg-white p-8 shadow-lg shadow-green-900/5">
                <Layers className="mb-4 h-10 w-10 text-[#006d3d]" />
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
              className="mb-16 text-center text-3xl font-bold text-[#006d3d] lg:mb-20 lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]"
            >
              Engineered Systems
            </h2>

            <div className="space-y-24 lg:space-y-32">

              {cameraProducts.map((cam, i) => (
                <div
                  key={cam.title}
                  className={`group flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="relative w-full flex-shrink-0 overflow-hidden rounded-3xl shadow-2xl shadow-black/10 lg:w-1/2">
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
                    <h3 className="mb-4 text-2xl font-bold text-[#006d3d] lg:text-3xl font-['Plus_Jakarta_Sans',sans-serif]">
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

                    <div className="mt-8 h-1 w-14 bg-[#00d27b]/30" />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                <div className="group relative flex h-96 flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/50 bg-gray-100 p-10 lg:h-[440px]">
                  <div className="z-10">
                    <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                      INDOOR SERIES
                    </span>
                    <h3 className="mb-3 text-xl font-bold lg:text-2xl font-['Plus_Jakarta_Sans',sans-serif]">
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
                  <button className="z-10 self-start rounded-3xl border-2 border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 transition-all hover:border-[#006d3d] hover:text-[#006d3d] active:scale-95">
                    Explore Sensors
                  </button>
                </div>

                <div className="group relative flex h-96 flex-col justify-between overflow-hidden rounded-3xl border-2 border-green-900/10 bg-white p-10 shadow-lg shadow-green-900/5 lg:h-[440px]">
                  <div className="z-10">
                    <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                      STORAGE HARDWARE
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-[#006d3d] lg:text-2xl font-['Plus_Jakarta_Sans',sans-serif]">
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
              <h2 className="mb-12 text-3xl font-bold text-[#006d3d] lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                The Value of Vigilance
              </h2>
              <div className="space-y-10">
                {benefits.map(({ num, title, desc }) => (
                  <div key={num} className="flex items-start gap-6">
                    <span
                      className="flex-shrink-0 text-4xl font-black text-[#00d27b]/20 lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif]"
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
                  className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-green-50">
                    <span className="text-lg font-black text-[#006d3d] font-['Plus_Jakarta_Sans',sans-serif]">{val}</span>
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