import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Mic, 
  BrainCircuit, 
  ShieldCheck, 
  MoonStar, 
  Zap, 
  ArrowRight,
  Shield
} from 'lucide-react';
import Navbar from '../../components/navbar/Navbar';
import nonImage1 from "../../assets/tpp1.png";
import nonImage2 from "../../assets/tpp2.png";
import nonImage3 from "../../assets/tpp3.png";
import nonImage4 from "../../assets/tpp4.png";
import nonImage5 from "../../assets/tpp5.png";
import nonImage6 from "../../assets/tpp6.png";

/* ─── Data ────────────────────────────────────────────────────────────── */
const doorProducts = [
  {
    img: nonImage1,
    title: 'Tapo D235 ',
    desc: 'The Tapo D235 is a premium 2K video doorbell that excels in flexibility and longevity. Its standout feature is the massive 10,000 mAh battery, which offers months of use on a single charge, though it can also be hardwired for continuous power.',
    tags: ['2k 5mp live view', 'color night vision', '10,000 mah battery', 'vehicle detection']
  },
  {
    img: nonImage2,
    badge: 'Tapo D210',
    badgeColor: 'bg-[#006d3d]',
    title: 'Tapo D210',
    desc: 'The Tapo D210 is a wireless video doorbell that records in 2K 3MP resolution and features color night vision for clear footage at all hours. It uses a 160° wide-angle lens to cover a large area and includes AI-driven detection to identify people, pets, packages, and vehicles. The device is powered by a 6700 mAh battery, making it a wire-free security option for monitoring a front door.',
    tags: ['2k 3mp live view', 'color night vision', '6700 mah battery', 'Ultra HD']
  },
  {
    img: nonImage3,
    badge: 'Tapo D205',
    badgeColor: 'bg-[#006d3d]',
    title: 'Tapo D205',
    desc: 'The  Video Doorbell Mini is a compact, all-black security camera that offers 2K 3MP resolution and a 160° field of view. It features specialized detection for people and general motion, running on a 5200 mAh battery for a wire-free setup. Compared to the previous model, it retains the high-quality video and wide angle but comes in a smaller form factor with a slightly lower battery capacity.',
    tags: ['2k 3mp live view', '160 degree fov', '5200 mah battery', 'motion detection']
  },
  {
    img: nonImage4,
    badge: 'Tapo D230S1',
    badgeColor: 'bg-[#0a8a55]',
    title: 'Tapo D230S1',
    desc: 'The Tapo D230S1 is a high-definition video doorbell kit designed for easy, wire-free installation. It delivers a sharp 2K 5MP image with Color Night Vision, allowing for clear identification of visitors even in total darkness.',
    tags: ['2k 3mp live view', 'color night vision', 'Weath', 'Wire-Free']
  },
  {
    img: nonImage5,
    badge: 'Tapo D130',
    badgeColor: 'bg-[#006d3d]',
    title: 'Tapo D130',
    desc: 'The Tapo D130 is a specialized hard-wired video doorbell designed for users who prefer a permanent power connection over charging batteries. It features a crisp 2K 5MP resolution and an ultra-wide 180° field of view, providing one of the most expansive "head-to-toe" perspectives in the Tapo lineup./',
    tags: ['Package Detection', 'Dual Lens', 'Blindspot Free', 'AI Alerts']
  },
  {
    img: nonImage6,
    badge: 'Tapo TD21',
    badgeColor: 'bg-black',
    title: 'Tapo TD21',
    desc: 'The  is an entry-level 2K smart video doorbell that balances performance with affordability. It features a 2K 3MP resolution, which, while slightly lower than the 5MP flagship models, still provides sharp clarity and Color Night Vision for reliable 24/7 monitoring.',
    tags: ['Flush Mount', 'Luxury Finish', 'Tamper Proof', 'Minimalist']
  },
];

const coreFeatures = [
  {
    icon: <Video className="w-8 h-8 text-[#00d27b]" />,
    title: 'High-Definition Video',
    desc: 'Capture every nuance in stunning 4K clarity. Wide-angle optics ensure no blind spots, even at the edges of your porch.',
  },
  {
    icon: <Mic className="w-8 h-8 text-[#00d27b]" />,
    title: 'Two-Way Audio',
    desc: "Real-time communication with noise cancellation. Talk to visitors as if you're standing right behind the door.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-[#00d27b]" />,
    title: 'AI Motion Sensing',
    desc: 'Smart zones allow you to focus only on important areas, eliminating false alerts from passing cars or swaying trees.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#00d27b]" />,
    title: 'End-to-End Encryption',
    desc: 'Military-grade security protects your video feeds and audio conversations from unauthorized access.',
  },
  {
    icon: <MoonStar className="w-8 h-8 text-[#00d27b]" />,
    title: 'Night Vision',
    desc: 'Full-color thermal imaging provides crystal-clear visibility even in complete darkness.',
  },
  {
    icon: <Zap className="w-8 h-8 text-[#00d27b]" />,
    title: 'Instant Alerts',
    desc: 'Push notifications deliver alerts in milliseconds with customizable detection zones.',
  },
];

const benefits = [
  { num: '01', title: 'Enhanced Security', desc: 'Visible deterrents with invisible technology to keep threats at bay.' },
  { num: '02', title: 'Visitor Convenience', desc: 'Manage deliveries and visitors without pausing your day.' },
  { num: '03', title: 'Property Value', desc: 'Smart home integration increases desirability and long-term resale value.' },
  { num: '04', title: 'Total Peace', desc: 'Rest easy knowing you have the most vigilant eye on your entrance.' },
];

const stats = [
  { val: '4K UHD', label: 'Video Resolution', sub: 'Crystal clear imagery' },
  { val: '< 0.5s', label: 'Alert Response', sub: 'Near-instant notifications' },
  { val: '256-bit', label: 'Encryption', sub: 'Military-grade security' },
  { val: '365d', label: 'Storage', sub: 'One year cloud storage' },
];

export default function Door() {
  return (
    <div className="bg-white text-gray-900 selection:bg-green-200 selection:text-green-900 font-['Manrope',sans-serif] text-[#191c1d]">
      <Navbar />

      <main className="pt-20">
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section
          id="hero"
          className="relative min-h-[500px] md:min-h-[420px] flex flex-col justify-center overflow-hidden px-6 md:px-12 py-20"
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

          {/* === MAIN CONTENT === */}
          <div className="relative z-10 max-w-[1280px] mx-auto w-full flex flex-col gap-8">

            {/* Icon + Badge row */}
            <div className="flex items-center gap-4">
              {/* Door icon box */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <Shield className="w-6 h-6 text-[#00d27b]" />
              </div>

              {/* Green pill */}
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm"
                style={{
                  background: 'rgba(0,210,123,0.15)',
                  border: '1px solid rgba(0,210,123,0.35)',
                  color: '#00d27b',
                }}
              >
                Smart Security at Your Entrance
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.1] tracking-[-0.025em] text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                maxWidth: '850px',
              }}
            >
              Next-Gen Door Video <br className="hidden md:block"/> Bell Systems
            </h1>

            {/* Subtitle */}
            <p
              className="text-white/70 leading-relaxed text-lg"
              style={{ maxWidth: '600px' }}
            >
              Advanced Door Video Bell systems providing real-time HD video, two-way audio, and smart
              technology integration for complete control over your entrance security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="bg-[#00d27b] hover:bg-[#00b86a] text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-colors backdrop-blur-sm border border-white/10">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* ============================================
            CORE FEATURES SECTION
            ============================================ */}
        <section className="bg-gray-50 px-6 py-24 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="mb-4 text-3xl font-bold text-[#006d3d] lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                Advanced Technology
              </h2>
              <p className="text-gray-500 text-lg">Engineered from the ground up to provide unparalleled clarity, security, and convenience at your front door.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feat) => (
                <div key={feat.title} className="group rounded-3xl border border-gray-200/60 bg-white p-8 shadow-sm hover:shadow-xl hover:border-[#00d27b]/30 transition-all duration-300">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{feat.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PRODUCTS SECTION
            ============================================ */}
        <section className="bg-white px-6 py-24 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-20 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#006d3d] lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                Engineered Video Doorbell Systems
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Find the perfect blend of aesthetics and cutting-edge security for your home.</p>
            </div>

            <div className="space-y-24 lg:space-y-32">
              {doorProducts.map((prod, i) => (
                <div
                  key={prod.title}
                  className={`group flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Container */}
                  <div className="relative w-full flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-gray-100 lg:w-1/2">
                    <div className="aspect-[4/3] lg:aspect-[16/11]">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className={`absolute top-6 left-6 ${prod.badgeColor} rounded-full px-4 py-1.5 text-xs font-bold tracking-wide text-white shadow-xl backdrop-blur-md`}>
                      {prod.badge}
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h3 className="mb-5 text-3xl font-bold text-gray-900 lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                      {prod.title}
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-gray-500">
                      {prod.desc}
                    </p>
                    <ul className="mb-8 flex flex-wrap gap-3">
                      {prod.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 hover:bg-green-50 hover:border-green-200 hover:text-green-800 transition-colors px-4 py-1.5 text-sm font-semibold text-gray-600"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <button className="text-[#006d3d] font-bold inline-flex items-center gap-2 hover:text-[#00d27b] transition-colors group/btn">
                        View Specifications <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            BENEFITS SECTION
            ============================================ */}
        <section className="relative border-t border-gray-200/30 bg-gray-50 px-6 py-24 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:gap-20 items-center">

            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#006d3d] lg:text-4xl font-['Plus_Jakarta_Sans',sans-serif]">
                Security Meets Serenity
              </h2>
              <p className="mb-12 text-gray-500 text-lg">Beyond the hardware, our systems are designed to integrate seamlessly into your life, offering peace of mind whether you're home or away.</p>
              
              <div className="space-y-10">
                {benefits.map(({ num, title, desc }) => (
                  <div key={num} className="flex items-start gap-6 group">
                    <span className="flex-shrink-0 text-4xl font-black text-[#00d27b]/20 group-hover:text-[#00d27b]/40 transition-colors lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif]">
                      {num}
                    </span>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">{title}</h4>
                      <p className="text-base leading-relaxed text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map(({ val, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col justify-center rounded-3xl border border-gray-200/60 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 inline-flex h-16 w-max px-4 items-center justify-center rounded-2xl bg-green-50">
                    <span className="text-2xl font-black text-[#006d3d] font-['Plus_Jakarta_Sans',sans-serif]">{val}</span>
                  </div>
                  <div>
                    <p className="mb-1 text-lg font-bold text-gray-900">{label}</p>
                    <p className="text-sm text-gray-500">{sub}</p>
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