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

  return (
    <div className="w-full bg-[#f8f9fa] overflow-x-hidden font-['Manrope',sans-serif] text-[#191c1d] pt-20">

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-28"
        style={{ background: '#08111f' }}
      >
        {/* Animated network canvas */}
        <canvas
          ref={networkCanvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />

        {/* Subtle right-side radial glow */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
            Lagos, Nigeria &bull; Since 2016
          </div>

          {/* Headline */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-[800px]">
            Empowering businesses with{' '}
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
            technology.
          </h1>

          {/* Subtext */}
          <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">
            Nonsonet Technologies Limited delivers scalable, innovative, and highly reliable IT solutions. From strategic advisory to enterprise infrastructure, we transform how you work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() =>
                document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d27b] text-[#003d22] rounded-full font-bold text-base transition-all hover:bg-white hover:text-[#006d3d] hover:shadow-[0_8px_24px_rgba(0,210,123,0.28)] active:scale-95 cursor-pointer"
            >
              Explore Solutions
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-base transition-all hover:bg-white/18 active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                99.8%
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Uptime Statistic
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                24/7
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Active Support
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                100+
              </div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                Projects Done
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
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
                Comprehensive technological infrastructure tailored for diverse industry verticals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
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

            <div className="flex flex-col p-7 bg-white rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1 min-h-[260px]">
              <div className="flex-1 flex flex-col">
                <span className="material-symbols-outlined text-5xl text-[#006d3d] mb-6">doorbell</span>
                <div className="text-2xl font-bold text-[#1a1a1a] mb-2">Door Video Bell Systems</div>
                <p className="text-base text-[#666] flex-1">Smart Security at Your Entrance</p>
              </div>
              <a
                href="/door"
                className="inline-flex items-center gap-2 mt-auto px-5 py-3 text-[#006d3d] border border-[#006d3d] rounded-xl text-sm font-semibold transition-all hover:bg-[#006d3d] hover:text-white"
              >
                See more details
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

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
      <section
        id="contact"
        className="px-6 py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)' }}
      >
        {/* Deco blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00d27b]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#006d3d]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <div className="text-xs font-bold text-[#00d27b] uppercase tracking-widest mb-4">
                Get In Touch
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Ready to transform your IT?
              </h2>
              <p className="text-base text-white/60 leading-relaxed mt-6">
                Our consultants are ready to discuss how we can streamline your operations and secure your infrastructure. Reach out for a tailored technology audit.
              </p>

              <div className="flex flex-col gap-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00d27b]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/40">Email Us</div>
                    <div className="font-semibold text-white">info@nonsonet.com.ng</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-[#00d27b]">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/40">Call Support</div>
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