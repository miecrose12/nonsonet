import React, { useState } from 'react';

function Landing() {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ fullName: '', email: '', message: '' });
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
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > el.width) d.vx *= -1;
        if (d.y < 0 || d.y > el.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,210,123,0.55)';
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y, dist = Math.sqrt(dx * dx + dy * dy);
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
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  };

  return (
    <div className="w-full overflow-x-hidden font-['Manrope',sans-serif] text-[#191c1d]">
      {/* HERO */}
      <section id="hero" className="relative min-h-[795px] flex items-center px-6 py-20 md:py-28" style={{ background: '#08111f' }}>
        <canvas ref={networkCanvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" /> Lagos, Nigeria • Since 2016
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] text-white mb-6 max-w-[800px]">
            Empowering businesses with <span style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #00d27b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>intelligent</span> technology.
          </h1>
          <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">Nonsonet Technologies Limited delivers scalable, innovative, and highly reliable IT solutions. From strategic advisory to enterprise infrastructure, we transform how you work.</p>
          <div className="flex flex-wrap gap-4 mb-14">
            <button onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d27b] text-[#003d22] rounded-full font-bold text-base transition-all hover:bg-white hover:shadow-[0_8px_24px_rgba(0,210,123,0.28)] active:scale-95">
              Explore Solutions <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-base transition-all hover:bg-white/18 active:scale-95">Contact Us</button>
          </div>
          <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
            <div><div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">99.8%</div><div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">Uptime Statistic</div></div>
            <div className="w-px h-10 bg-white/20" />
            <div><div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">24/7</div><div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">Active Support</div></div>
            <div className="w-px h-10 bg-white/20" />
            <div><div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">100+</div><div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">Projects Done</div></div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="px-6 py-24 bg-[#edeeef]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7DHJSS2kV35rd0hmsmVjg1sAV4XuhMAqdnEvHwKTiKtg2PoRVJRxXvVp33qZPdglji8vRotfM7KXhoOhXmpG5iUkl2gL9i8sCwheFBfuPXN50XgaeZMx3St6jf58Na6jYfYp5dNMu0X1R1Do6lYRJb_j01o7USXy10BVGDC54mu7NbJ8KhVRIFk40e69ZAgxEAyU3gey1e4QVHVn7FbmqR-hFeSCJJfN-dfpcHxhg-w-7xCzNZhWXMIAwIczEcBCtO4if_e85tPQ" alt="IT engineer" className="w-full h-full object-cover" /></div>
              <div className="bg-[#006d3d] text-white rounded-2xl p-6"><div className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold">100+</div><div className="text-sm opacity-90 mt-1">Projects Delivered Successfully</div></div>
            </div>
            <div className="flex flex-col gap-4 pt-12"><div className="bg-white border border-[#bbcbbc]/20 rounded-2xl p-6 shadow-sm"><div className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold text-[#191c1d]">2016</div><div className="text-sm text-[#3c4a3f] mt-1">Established</div></div></div>
          </div>
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest">Who Are We</div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#191c1d]">Leading the path in Nigerian Enterprise IT.</h2>
            <p className="text-base text-[#3c4a3f] leading-relaxed">Founded in 2016 in Lagos, Nigeria, Nonsonet Technologies Limited has grown into a premier Information Technology consultancy firm. We specialize in designing, implementing, and managing robust IT environments that drive business growth.<br /><br />Our mission is to bridge the gap between complex technology and practical business needs. Whether you need a virtual CTO, complete network restructuring, or specialized automation systems, our engineering excellence ensures you stay ahead.</p>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-[#006d3d] flex-shrink-0"><span className="material-symbols-outlined text-3xl">verified</span></div><div><h4 className="font-bold text-base text-[#191c1d] mb-1">Local Insight, Global Standards</h4><p className="text-sm text-[#3c4a3f] leading-relaxed">Delivering world-class tech tailored for the Nigerian ecosystem.</p></div></div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 py-24 bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto mb-16 text-center">
          <div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest">Foundation</div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#191c1d] mt-3">Our Core Values</h2>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ icon: 'location_on', title: 'Local Insight', desc: 'World-class execution adapted perfectly for our region.' }, { icon: 'engineering', title: 'Engineering Excellence', desc: 'Meticulous attention to detail in every technical deployment.' }, { icon: 'handshake', title: 'Reliability & Trust', desc: 'We build systems and partnerships meant to last.' }, { icon: 'lightbulb', title: 'Innovation with Purpose', desc: 'We deploy technology that solves actual business problems.' }].map((v) => (
            <div key={v.title} className="bg-white rounded-3xl p-10 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-[#00d27b]/15 flex items-center justify-center text-[#006d3d] text-4xl mb-6"><span className="material-symbols-outlined">{v.icon}</span></div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#191c1d] mb-3">{v.title}</div>
              <div className="text-sm text-[#3c4a3f] leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="what-we-do" className="px-8 py-20 bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12"><div className="text-xs font-bold text-[#006d3d] uppercase tracking-widest mb-3">Portfolio</div><h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]">What We Do</h2><p className="text-xl text-[#666] leading-relaxed mt-4 max-w-md">Comprehensive technological infrastructure tailored for diverse industry verticals.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {[{ icon: 'local_gas_station', title: 'Forecourt & Payment', desc: 'Automated fuel management and secure transaction systems.', href: '/forcourt', span: 'md:col-span-2 lg:col-span-1' }, { icon: 'doorbell', title: 'Door Video Bell Systems', desc: 'Smart Security at Your Entrance', href: '/door' }, { icon: 'print', title: 'Managed Print Services', desc: 'Optimized document workflow and hardware maintenance.', href: '/printer', gradient: true }, { icon: 'solar_power', title: 'Solar Inverter Systems', desc: 'Sustainable energy backup for critical IT infrastructure.', href: '/solar' }, { icon: 'surround_sound', title: 'Surround Sound', desc: 'Professional audio installations for corporate environments.', href: '/surround' }, { icon: 'water_drop', title: 'Water Solutions', desc: 'Smart monitoring and treatment systems.', href: '/water' }, { icon: 'phone_in_talk', title: 'IP-PBX Systems', desc: 'Enterprise-grade VoIP telephony with unified messaging, call recording, and seamless business communication.', href: '/ipbx' }, { icon: 'videocam', title: 'CCTV Security Systems', desc: 'High-definition IP surveillance with AI motion detection, real-time alerts, and secure remote monitoring.', href: '/cctv' }].map((s) => (
              <div key={s.title} className={`flex flex-col p-7 rounded-3xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1 ${s.gradient ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-white' : 'bg-white'} ${s.span || ''}`}>
                <div className="flex-1 flex flex-col"><span className={`material-symbols-outlined text-5xl mb-6 ${s.gradient ? 'text-white' : 'text-[#006d3d]'}`}>{s.icon}</span><div className={`text-2xl font-bold mb-2 ${s.gradient ? 'text-white' : 'text-[#1a1a1a]'}`}>{s.title}</div><p className={`text-base flex-1 ${s.gradient ? 'text-white/85' : 'text-[#666]'}`}>{s.desc}</p></div>
                <a href={s.href} className={`inline-flex items-center gap-2 mt-auto px-5 py-3 border rounded-xl text-sm font-semibold transition-all ${s.gradient ? 'text-white border-white hover:bg-white hover:text-[#16a34a]' : 'text-[#006d3d] border-[#006d3d] hover:bg-[#006d3d] hover:text-white'}`}>See more details <span className="material-symbols-outlined">arrow_forward</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="px-6 py-24 bg-[#1a2332]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-xs font-bold text-white opacity-60 uppercase tracking-widest text-center mb-12">Strategic Technology Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
            {['FuelTorque', 'TP-link', 'Canon', 'Hikvision', 'CISCO', 'HP Enterprise'].map((p) => (<span key={p} className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-black tracking-[-0.04em] text-white">{p}</span>))}
          </div>
          <div className="bg-[#0b131f] rounded-[2.5rem] p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#003d22]/40 border border-[#00d27b]/20 rounded-full mb-8"><span className="text-[#00d27b] text-xs font-semibold tracking-wide">Featured Partnership Solution</span></div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-[3.25rem] font-extrabold leading-[1.1] text-white tracking-tight mb-6">Forecount & Payment <br /><span className="text-[#00d27b]">Automation</span></h3>
                <p className="text-[1.05rem] text-gray-300 leading-relaxed mb-8 pr-0 md:pr-10">In partnership with <span className="font-bold text-white">Fueltorque</span>, we deliver the ultimate fuel station management and monitoring system. Achieve real-time visibility and unparalleled operational efficiency with our hybrid cloud and on-premise deployments.</p>
                <ul className="space-y-4 mb-10">
                  {['Fueltorque POS (Point of Sale)', 'Fueltorque BOS (Back Office System)', 'Fueltorque FMS (Management System)', 'Hardware independent & highly scalable'].map((f) => (<li key={f} className="flex items-center gap-4 text-white font-medium"><span className="material-symbols-outlined text-[#00d27b] text-xl">check_circle</span>{f}</li>))}
                </ul>
                <a href="#learn-more" className="inline-flex items-center gap-2 text-[#00d27b] font-semibold transition-colors hover:text-[#00a862]">Learn more about this solution <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span></a>
              </div>
              <div className="relative pt-6 pl-6 md:pt-10 md:pl-10 h-full flex items-center justify-center">
                <img className="w-full h-auto rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbCJ5D2mkjooV5qSsvHy98lahXV47JGtmXW643K8QLfC6XQy2GRgyKV1MHHrTSK-LL2bgyIOmLsaG9i3yuEIAK0kgEUVPsvw5OjI2do8igcc2B0Juherdo_BH1iBeUhhAs2yDMEC0v5kbVnbuUsYs1UVAqQRW1WWzTe-aRcDUgHTSxeLyXr-nNc7ppDLDY820KMvMgeueYTywb-Sqc4ipyQROlbTFrPDNgJmqjwK-IN1Q3FO4YAXuLGbzPnIZqfd41fL7Huk_hcck" alt="Dashboard" />
                <div className="absolute bottom-0 left-0 bg-[#212936] border border-white/10 rounded-[1.25rem] px-8 py-6 shadow-2xl backdrop-blur-md translate-y-4 -translate-x-4 md:translate-y-8 md:-translate-x-8"><div className="font-['Plus_Jakarta_Sans',sans-serif] text-[2.5rem] font-extrabold text-white leading-none mb-1">24/7</div><div className="text-sm font-semibold text-[#00d27b]">Real-time Visibility</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 relative overflow-hidden bg-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00d27b]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#006d3d]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-5xl font-extrabold leading-tight text-[#191c1d] mb-6">Ready to transform your IT?</h2>
              <p className="text-base text-[#666] leading-relaxed mb-12">Let's discuss how Nonsonet Technologies can optimize your infrastructure, secure your data, and automate your operations.</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 p-5 bg-[#f8f9fa] rounded-2xl border border-[#e8ecf1]"><div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#006d3d]"><span className="material-symbols-outlined">mail</span></div><div><div className="text-xs font-semibold text-[#666] uppercase tracking-widest">Email Us</div><div className="font-bold text-[#191c1d] text-base">info@nonsonet.com.ng</div></div></div>
                <div className="flex items-center gap-4 p-5 bg-[#f8f9fa] rounded-2xl border border-[#e8ecf1]"><div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#006d3d]"><span className="material-symbols-outlined">call</span></div><div><div className="text-xs font-semibold text-[#666] uppercase tracking-widest">Call Us</div><div className="font-bold text-[#191c1d] text-base">+234 09077617790</div></div></div>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-[#e8ecf1]">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#191c1d] mb-8">Send a Message</h3>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2"><label className="text-sm font-bold text-[#191c1d]">Full Name</label><input className="bg-white border border-[#e8ecf1] rounded-2xl px-5 py-3 text-base text-[#191c1d] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#006d3d] transition-all" type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} required /></div>
                <div className="flex flex-col gap-2"><label className="text-sm font-bold text-[#191c1d]">Email Address</label><input className="bg-white border border-[#e8ecf1] rounded-2xl px-5 py-3 text-base text-[#191c1d] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#006d3d] transition-all" type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required /></div>
                <div className="flex flex-col gap-2"><label className="text-sm font-bold text-[#191c1d]">How can we help?</label><textarea className="bg-white border border-[#e8ecf1] rounded-2xl px-5 py-3 text-base text-[#191c1d] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#006d3d] transition-all min-h-[120px] resize-none" name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange} required /></div>
                <button type="submit" className="w-full py-4 bg-[#1a1a1a] text-white rounded-2xl font-bold text-base transition-all hover:bg-[#2d2d2d] active:scale-95 flex items-center justify-center gap-2">Send Message <span className="material-symbols-outlined text-lg">send</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;