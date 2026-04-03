import React, { useState } from 'react';

function Landing() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    service: 'Forecourt Automation',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ fullName: '', company: '', email: '', service: 'Forecourt Automation', message: '' });
  };

  return (
    <div className="w-full bg-[#f8f9fa] overflow-x-hidden font-['Manrope',sans-serif] text-[#191c1d] pt-20">

      {/* ===== HERO ===== */}
      {/* ✅ id="hero" — navbar "Home" scrolls here */}
      <section id="hero" className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-20">
        {/* Skewed decorative bg */}
        <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-[#f3f4f5]/50 skew-x-[12deg] origin-top-right z-10 pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00d27b]/15 text-[#006d3d] text-xs font-semibold tracking-[0.06em] uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-[#006d3d] animate-pulse" />
              Technology Redefined
            </div>

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Empowering businesses with{' '}
              <span className="text-[#006d3d]">intelligent</span>{' '}
              technology.
            </h1>

            <p className="text-xl text-[#3c4a3f] max-w-[32rem] leading-[1.7]">
              Nonsonet Technologies Limited delivers scalable, innovative, and highly reliable IT solutions. From strategic advisory to enterprise infrastructure, we transform how you work.
            </p>

            {/* ✅ FIXED: Both buttons now scroll smoothly within the page */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#006d3d] text-white rounded-full font-semibold text-base transition-all hover:bg-[#00d27b] hover:text-[#00542e] hover:shadow-[0_8px_24px_rgba(0,109,61,0.28)] active:scale-95 cursor-pointer"
              >
                Explore Solutions
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#e1e3e4] text-[#191c1d] rounded-full font-semibold text-base transition-all hover:bg-[#d9dadb] active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-[#bbcbbc]/30">
              <div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#006d3d]">
                  99.8%
                </div>
                <div className="text-xs font-semibold text-[#3c4a3f] uppercase tracking-widest">
                  Uptime Statistic
                </div>
              </div>
              <div className="w-px h-10 bg-[#bbcbbc]/40" />
              <div>
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#191c1d]">
                  24/7
                </div>
                <div className="text-xs font-semibold text-[#3c4a3f] uppercase tracking-widest">
                  Active Support
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_MQFOiWsoOeEU32Q6vUajgBERoK024NKCTPPY5HfAu4D1KmEQ6YVdWNE2rlMdpFOcEVCBE9Qugz8bXtqy_R22EdPGRk_WvQPeDAIyz8Y22TmRFgWeFjmBt0zCDvh7e0h1kaIH-4kjS-EsglsggFjrkgHJOlKxQbhL9Aay4pqSf-FP7qZ3IMNtCualwrj6s_77tPoq67w0BO0uybj9JCF9A4AbGyCtNpgUmVU3g9kO1SaK8XP1HYsDQgH6bmgZsm1Kiibl67OzDmA"
                alt="Modern high-tech data center"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white border border-[#f3f4f5] rounded-2xl p-6 max-w-[18rem] shadow-xl rotate-[-3deg]">
              <p className="text-sm italic text-[#3c4a3f] leading-relaxed mb-3">
                "Innovation is not just what we do; it's how we think about
                the future of connectivity."
              </p>
              <div className="font-bold text-[#006d3d] text-sm">
                Nonsonet Executive Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      {/* ✅ id="who-we-are" — navbar "Who We Are" scrolls here */}
      <section id="who-we-are" className="px-6 py-24 bg-[#edeeef]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Images mosaic */}
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7DHJSS2kV35rd0hmsmVjg1sAV4XuhMAqdnEvHwKTiKtg2PoRVJRxXvVp33qZPdglji8vRotfM7KXhoOhXmpG5iUkl2gL9i8sCwheFBfuPXN50XgaeZMx3St6jf58Na6jYfYp5dNMu0X1R1Do6lYRJb_j01o7USXy10BVGDC54mu7NbJ8KhVRIFk40e69ZAgxEAyU3gey1e4QVHVn7FbmqR-hFeSCJJfN-dfpcHxhg-w-7xCzNZhWXMIAwIczEcBCtO4if_e85tPQ"
                  alt="IT engineer working on servers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#006d3d] text-white rounded-2xl p-6">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold">
                  100+
                </div>
                <div className="text-sm opacity-90 mt-1">
                  Projects Delivered Successfully
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-12">
              <div className="bg-white border border-[#bbcbbc]/20 rounded-2xl p-6 shadow-sm">
                <div className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold text-[#191c1d]">
                  2016
                </div>
                <div className="text-sm text-[#3c4a3f] mt-1">
                  Established
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest">
              Who Are We
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#191c1d]">
              Leading the path in Nigerian Enterprise IT.
            </h2>
            <p className="text-base text-[#3c4a3f] leading-relaxed">
              Founded in 2016 in Lagos, Nigeria, Nonsonet Technologies Limited has grown into a premier Information Technology consultancy firm. We specialize in designing, implementing, and managing robust IT environments that drive business growth.

              Our mission is to bridge the gap between complex technology and practical business needs. Whether you need a virtual CTO, complete network restructuring, or specialized automation systems, our engineering excellence ensures you stay ahead.
            </p>

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#006d3d] flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#191c1d] mb-1">Local Insight, Global Standards</h4>
                  <p className="text-sm text-[#3c4a3f] leading-relaxed">
                    Delivering world-class tech tailored for the Nigerian ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="px-6 py-24 bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto mb-16 text-center">
          <div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest">Foundation</div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#191c1d] mt-3">
            Our Core Values
          </h2>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'location_on', title: 'Local Insight', desc: 'World-class execution adapted perfectly for our region.' },
            { icon: 'engineering', title: 'Engineering Excellence', desc: 'Meticulous attention to detail in every technical deployment.' },
            { icon: 'handshake', title: 'Reliability & Trust', desc: 'We build systems and partnerships meant to last.' },
            { icon: 'lightbulb', title: 'Innovation with Purpose', desc: 'We deploy technology that solves actual business problems.' },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-3xl p-10 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00d27b]/15 flex items-center justify-center text-[#006d3d] text-4xl mb-6 transition-colors hover:bg-[#006d3d] hover:text-white">
                <span className="material-symbols-outlined">{v.icon}</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#191c1d] mb-3">
                {v.title}
              </div>
              <div className="text-sm text-[#3c4a3f] leading-relaxed">
                {v.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES BENTO ===== */}
      {/* ✅ id="what-we-do" — "Explore Solutions" hero button scrolls here */}
      <section id="what-we-do" className="px-8 py-20 bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="flex-1">
              <div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest mb-3">
                Portfolio
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]">
                What We Do
              </h2>
              <p className="text-xl text-[#666] leading-relaxed mt-4 max-w-md">
                Comprehensive technological infrastructure tailored for diverse
                industry verticals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {/* Forecourt - large (kept as featured) */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1 min-h-[280px] md:col-span-2 lg:col-span-1 relative overflow-hidden">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">local_gas_station</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Forecourt &amp; Payment</div>
                <p className="text-base text-[#666] flex-1">Automated fuel management and secure transaction systems.</p>
              </div>
              <a
                href="/forcourt"
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Door Video Bell */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1 min-h-[260px]">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">doorbell</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Door Video Bell Systems</div>
                <p className="text-base text-[#666] flex-1">
                  Smart Security at Your Entrance
                </p>
              </div>
              <a
                href="/door"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Managed Print - green */}
            <div className="flex flex-col p-7 bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white rounded-3xl shadow-md transition-all hover:shadow-[0_8px_32px_rgba(34,197,94,0.25)] hover:-translate-y-1 min-h-[260px]">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-white mb-6">print</span>
                <div className="text-2xl font-bold text-white mb-2">Managed Print Services</div>
                <p className="text-base text-white/85 flex-1">Optimized document workflow and hardware maintenance.</p>
              </div>
              <a
                href="/printer"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-white border border-white rounded-xl text-sm font-semibold transition-all hover:bg-white hover:text-[#16a34a]"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Solar */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">solar_power</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Solar Inverter Systems</div>
                <p className="text-base text-[#666] flex-1">Sustainable energy backup for critical IT infrastructure.</p>
              </div>
              <a
                href="/solar"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Surround Sound */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">surround_sound</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Surround Sound</div>
                <p className="text-base text-[#666] flex-1">Professional audio installations for corporate environments.</p>
              </div>
              <a
                href="/surround"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Water */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">water_drop</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Water Solutions</div>
                <p className="text-base text-[#666] flex-1">Smart monitoring and treatment systems.</p>
              </div>
              <a
                href="/water"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* IP-PBX */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">phone_in_talk</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">IP-PBX Systems</div>
                <p className="text-base text-[#666] flex-1">
                  Enterprise-grade VoIP telephony with unified messaging, call recording, and seamless business communication.
                </p>
              </div>
              <a
                href="/ipbx"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* CCTV */}
            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">videocam</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">CCTV Security Systems</div>
                <p className="text-base text-[#666] flex-1">
                  High-definition IP surveillance with AI motion detection, real-time alerts, and secure remote monitoring.
                </p>
              </div>
              <a
                href="/cctv"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      {/* ✅ id="partners" — navbar "Partners" scrolls here */}
      <section id="partners" className="px-6 py-24 bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-bold text-[#3c4a3f] opacity-50 uppercase tracking-widest text-center mb-12">
            Strategic Technology Partners
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 mb-16 filter grayscale hover:filter-none transition-all">
            {['FuelTorque', 'ZKTeco', 'Hikvision', 'CISCO', 'HP Enterprise'].map((p) => (
              <span
                key={p}
                className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-black tracking-[-0.04em] text-[#191c1d]"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Spotlight */}
          <div className="bg-[#00d27b]/10 rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-[#006d3d] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Partner Highlight
                </span>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold leading-tight text-[#191c1d]">
                  Forecourt &amp; Payment Automation
                </h3>
                <p className="text-base text-[#3c4a3f] leading-relaxed mt-6">
                  In partnership with Fueltorque, we deliver the ultimate fuel station management and monitoring system. Achieve real-time visibility and unparalleled operational efficiency with our hybrid cloud and on-premise deployments.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    'Fueltorque POS (Point of Sale)',
                    'Fueltorque BOS (Back Office System)',
                    'Fueltorque FMS (Management System)',
                    'Hardware independent & highly scalable',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#3c4a3f]">
                      <span className="material-symbols-outlined text-[#006d3d]">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <img
                  className="w-full rounded-3xl shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbCJ5D2mkjooV5qSsvHy98lahXV47JGtmXW643K8QLfC6XQy2GRgyKV1MHHrTSK-LL2bgyIOmLsaG9i3yuEIAK0kgEUVPsvw5OjI2do8igcc2B0Juherdo_BH1iBeUhhAs2yDMEC0v5kbVnbuUsYs1UVAqQRW1WWzTe-aRcDUgHTSxeLyXr-nNc7ppDLDY820KMvMgeueYTywb-Sqc4ipyQROlbTFrPDNgJmqjwK-IN1Q3FO4YAXuLGbzPnIZqfd41fL7Huk_hcck"
                  alt="Fuel station"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      {/* ✅ id="contact" — "Contact Us" hero button scrolls here */}
      <section id="contact" className="px-6 py-24 bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto bg-[#191c1d] rounded-3xl p-8 md:p-20 relative overflow-hidden text-white">
          {/* Deco */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#006d3d]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            {/* Left */}
            <div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight">
                Ready to transform your IT?
              </h2>
              <p className="text-base text-white/65 leading-relaxed mt-6">
                Our consultants are ready to discuss how we can streamline your
                operations and secure your infrastructure. Reach out for a
                tailored technology audit.
              </p>

              <div className="flex flex-col gap-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00d27b]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/45">Email Us</div>
                    <div className="font-semibold text-white">info@nonsonet.com.ng</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00d27b]">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/45">Call Support</div>
                    <div className="font-semibold text-white">+234 09077617790</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-[#191c1d]">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#3c4a3f]">Full Name</label>
                    <input
                      className="bg-[#edeeef] border-0 rounded-2xl px-5 py-4 text-base focus:bg-white focus:ring-2 focus:ring-[#006d3d] outline-none transition-all"
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#3c4a3f]">Company</label>
                    <input
                      className="bg-[#edeeef] border-0 rounded-2xl px-5 py-4 text-base focus:bg-white focus:ring-2 focus:ring-[#006d3d] outline-none transition-all"
                      type="text"
                      name="company"
                      placeholder="Enterprise Ltd"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#3c4a3f]">Email Address</label>
                  <input
                    className="bg-[#edeeef] border-0 rounded-2xl px-5 py-4 text-base focus:bg-white focus:ring-2 focus:ring-[#006d3d] outline-none transition-all"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#3c4a3f]">Service Interest</label>
                  <select
                    className="bg-[#edeeef] border-0 rounded-2xl px-5 py-4 text-base focus:bg-white focus:ring-2 focus:ring-[#006d3d] outline-none transition-all appearance-none"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Forecourt Automation</option>
                    <option>Door Video Bell Systems</option>
                    <option>Security Systems</option>
                    <option>Managed IT Services</option>
                    <option>Solar Solutions</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#3c4a3f]">Message</label>
                  <textarea
                    className="bg-[#edeeef] border-0 rounded-2xl px-5 py-4 text-base focus:bg-white focus:ring-2 focus:ring-[#006d3d] outline-none transition-all min-h-[140px] resize-y"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#006d3d] text-white rounded-2xl font-semibold text-base shadow-[0_4px_16px_rgba(0,109,61,0.25)] transition-all hover:bg-[#00d27b] hover:text-[#00542e] active:scale-95"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;