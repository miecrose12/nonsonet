import React from 'react';
import './surround.css';
import Navbar from '../../components/navbar/Navbar';

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

const Surround = () => {
  return (
    <>
      <Navbar />
      <main className="surround3-main-content">

        {/* ============================================
            HERO SECTION – 100% MATCHING PRINTER PAGE
            ============================================ */}
        <section
          id="hero"
          className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-28"
          style={{ background: '#08111f' }}
        >
          {/* Animated network canvas – exact same as Printer */}
          <canvas
            ref={networkCanvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
          />

          {/* Subtle right-side radial glow – exact same as Printer */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-[1280px] mx-auto w-full">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">

              {/* Left Content – exact Printer typography */}
              <div className="lg:col-span-7 z-10">
                {/* Badge – exact same style as Printer */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
                  Surround Sound Solutions • Lagos, Nigeria
                </div>

                {/* Headline – exact font, size, weight, tracking as Printer */}
                <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6">
                  Elevate Your Audio Experience with{' '}
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
                  Surround Sound Solutions
                </h1>

                {/* Subtext – exact style as Printer */}
                <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">
                  Transform any space into a high-fidelity auditory sanctuary. Our surround sound
                  ecosystems bridge the gap between technical precision and emotional resonance.
                </p>

                {/* Stats row – exact same layout as Printer (audio-adapted) */}
                <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                      360°
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Immersive Audio
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      10+
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Year Warranty
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      24/7
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Section – brand-consistent with Printer */}
              <div className="lg:col-span-5 relative">
                <div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-l-8 border-[#00d27b] ring-1 ring-white/10"
                  style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
                >
                  <img
                    alt="High-end home theater setup"
                    className="w-full h-[500px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyyh1vbkt7W0xGc4e0ph9WIi1wRSQKURhSu5AvTgCVa531ylFntRYee58-nKWGFetcKrjq5OQZ3ef78vvEOAsLc8Qm-Gthd3wAzAIyRrPBPLU15c12mxbDVVdnMRtxGb_Vw0HFQPCT9mOo_R08RYTgOuy7CRXNNdTh9LI8qwamYGpYIH0WFqoDVVo2oKnc26XhNZU_gtayqSnroa2edRQ6gcHi1enig3LHII3eiANLfdC48ZOYqWNka-qhQ2KNlwErxmBurnst_28p"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08111f]/40" />
                </div>

                {/* Floating Stats Card – exact Printer style, audio-adapted */}
                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#00d27b] to-white flex items-center justify-center text-white text-3xl shadow-lg">
                      🎧
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#00d27b] tracking-widest uppercase">Elite Acoustic Series</p>
                      <p className="text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white">Custom-Calibrated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Unchanged (keeps your surround3- CSS) */}
        <section className="surround3-why-choose-section">
          <div className="surround3-container">
            {/* Section Header */}
            <div className="surround3-section-header">
              <h2 className="surround3-section-title">Why Choose Nonsonet for Surround Sound?</h2>
              <p className="surround3-section-subtitle">
                We don't just install speakers; we curate acoustic environments tailored to the
                unique physics of your architecture.
              </p>
            </div>

            {/* Feature Cards Grid 1 */}
            <div className="surround3-features-grid">
              {/* Feature Card 1 */}
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">
                    spatial_audio
                  </span>
                </div>
                <h4 className="surround3-feature-title">Immersive Audio Quality</h4>
                <p className="surround3-feature-description">
                  Pristine clarity from the lowest rumble to the highest frequency, engineered for
                  perfect balance.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">
                    architecture
                  </span>
                </div>
                <h4 className="surround3-feature-title">Custom Design</h4>
                <p className="surround3-feature-description">
                  Every system is custom-mapped to your room's unique footprint for optimized
                  sonic performance.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">
                    settings_input_composite
                  </span>
                </div>
                <h4 className="surround3-feature-title">Seamless Integration</h4>
                <p className="surround3-feature-description">
                  Technology that vanishes into your decor while filling the room with
                  professional-grade sound.
                </p>
              </div>
            </div>

            {/* Feature Cards Grid 2 */}
            <div className="surround3-features-grid-horizontal">
              {/* Feature Card 4 */}
              <div className="surround3-feature-card-horizontal">
                <div className="surround3-feature-icon-wrapper-small">
                  <span className="surround3-material-icons surround3-feature-icon">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h4 className="surround3-feature-title">Advanced Technology</h4>
                  <p className="surround3-feature-description">
                    Leveraging the latest in Dolby Atmos and spatial audio computing to redefine
                    home entertainment.
                  </p>
                </div>
              </div>

              {/* Feature Card 5 */}
              <div className="surround3-feature-card-horizontal">
                <div className="surround3-feature-icon-wrapper-small">
                  <span className="surround3-material-icons surround3-feature-icon">
                    engineering
                  </span>
                </div>
                <div>
                  <h4 className="surround3-feature-title">Expert Installation</h4>
                  <p className="surround3-feature-description">
                    Certified acoustic engineers ensuring every wire is hidden and every driver is
                    perfectly calibrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section - Unchanged */}
        <section className="surround3-solutions-section">
          <div className="surround3-container">
            {/* Section Header */}
            <div className="surround3-solutions-header">
              <div className="surround3-solutions-header-left">
                <h2 className="surround3-solutions-title">Our Surround Sound Solutions Include</h2>
                <p className="surround3-solutions-subtitle">
                  Tailored audio engineering for diverse architectural and entertainment
                  requirements.
                </p>
              </div>
              <div className="surround3-header-divider"></div>
            </div>

            {/* Solutions Grid */}
            <div className="surround3-solutions-grid">
              {/* Solution 1 */}
              <div className="surround3-solution-card">
                <div className="surround3-solution-image-wrapper">
                  <img
                    alt="Luxury dark cinema room with premium seating and visible high-end speakers"
                    className="surround3-solution-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoCzHfPZPtvAIW4tz6wlRfBPlLLd11oOuSX5HmeuFgl67sFXXhEVCKT9XED1VEsXbeKfIGYsFWDIMAmCwcu0LPP2OCqAcc9roWv9i322rMw2fRhUk3Z9XkE6paHJUA8foz5fKxGfE3v1jQC1Tp3xpLEZgKnLPcF_YraYP6WR_Bt9GTroVx4v8mdE1ESrllBBJvLLKla7YpuxoyUNbFvKw8SV6F8rtLnkIJ7LAhTEd9dy8VYXc92CgM-4dfA88Zy0hcJK0On7Pk44Dq"
                  />
                  <div className="surround3-solution-overlay"></div>
                </div>
                <h4 className="surround3-solution-title">Home Theater Systems</h4>
                <p className="surround3-solution-description">
                  Cinematic 7.1.4 configurations that bring the theater experience to your private
                  residence.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="surround3-solution-card">
                <div className="surround3-solution-image-wrapper">
                  <img
                    alt="Modern professional office lobby with discreetly integrated ceiling and wall speakers"
                    className="surround3-solution-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu8l7RTz04P-Rmbek65B6ajmueqehlYpE6Bt7zH9kzxyf0k4qNIZYmBN5u9NYm93igl7NMxlecwdQgXLGDuwy23yze8lKKL0i-vnY9UCwXlsC3Wkui5PULyy92cvcYxIMpFJaBJ8y0vi3vVJAtazXAeH3xPtflGo1w362lXTpX8HYPXK96kHUD6Gdz8WCc0dWT5KxKacACi91kFRoO_0x78xhh2l7qRcA7cFOgZJjN__x-j5tgh1C3Ur2PMVLZRigTY3uLGHmB2_DY"
                  />
                  <div className="surround3-solution-overlay"></div>
                </div>
                <h4 className="surround3-solution-title">Commercial Audio</h4>
                <p className="surround3-solution-description">
                  Professional audio distribution for offices, hospitality, and retail spaces,
                  optimized for atmosphere and productivity.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="surround3-solution-card">
                <div className="surround3-solution-image-wrapper">
                  <img
                    alt="Stylish sunlit modern home interior with audio zones in kitchen and living room"
                    className="surround3-solution-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBymZ9SzDnzlDK7jl9p4oXPP7ONVrrZIxhOKggg81Ipo1q24p7M0wAZoQOonogxw3CXkEEMsM0TJmOC2C5TyinYxzsiniBynEA0L0oXGlp55GWq0bZsoe0yRWPAcN8BmIqoZmV4u78brpvCG2uVzDGgMhPESc-RGX6V1WH1lVHMPlEUNNcfVvz5safi0-fa7pEhdZohEfWInQTuMdRXs0LRh-p1R9he75vAluibZZWoQqleaXgAN0D7PH_WtJr-ul_KR7m0aRT3GvlG"
                  />
                  <div className="surround3-solution-overlay"></div>
                </div>
                <h4 className="surround3-solution-title">Multi-Room Audio</h4>
                <p className="surround3-solution-description">
                  Seamlessly synchronized sound that follows you through every room of your home
                  via smart distribution.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="surround3-solution-card">
                <div className="surround3-solution-image-wrapper">
                  <img
                    alt="Clean minimalist living room setup with sleek soundbar and wireless satellite speakers"
                    className="surround3-solution-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9KLExs5LSwFCFopBaiFsPZQnIcLIwjV7YbXOdx5DE_jCIwy4MTk4w-5ZcnB4IDXu6xWIwFc5NRva0LHIsL3mXiHZuumHNBbtHiai__qBWl39CQT-21Gp0FcRYAvZa7C7rLLIyak_bTeDrqoYGnZ0L9f1eQJI6X1eQ8FKk9H1JTEd9Rkjt8aYs4XQBOQaADD7E5tb_AYsrhdI1zJGz6ZUJN-pNztSAY9XqdEy6xh4q0FHyMPnjjV3bcyHRs3R1YF6o9cgCANzDm9P1"
                  />
                  <div className="surround3-solution-overlay"></div>
                </div>
                <h4 className="surround3-solution-title">Wireless Surround Systems</h4>
                <p className="surround3-solution-description">
                  High-bandwidth wireless solutions for clean, cord-free acoustic immersion without
                  compromising on bitrate or fidelity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Unchanged */}
        <section className="surround3-benefits-section">
          <div className="surround3-benefits-wrapper">
            <div className="surround3-benefits-card">
              <div className="surround3-benefits-grid">
                {/* Benefit 1 */}
                <div className="surround3-benefit-item">
                  <div className="surround3-benefit-header">
                    <div className="surround3-benefit-number-wrapper">
                      <span className="surround3-benefit-number">01</span>
                    </div>
                    <span className="surround3-benefit-label">ADVANTAGE</span>
                  </div>
                  <div className="surround3-benefit-content">
                    <h5 className="surround3-benefit-title">Enhanced Entertainment</h5>
                    <p className="surround3-benefit-description">
                      Experience films and music with the spatial depth the creators intended.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="surround3-benefit-item">
                  <div className="surround3-benefit-header">
                    <div className="surround3-benefit-number-wrapper">
                      <span className="surround3-benefit-number">02</span>
                    </div>
                    <span className="surround3-benefit-label">ADVANTAGE</span>
                  </div>
                  <div className="surround3-benefit-content">
                    <h5 className="surround3-benefit-title">Increased Property Value</h5>
                    <p className="surround3-benefit-description">
                      Integrated smart audio is a significant asset for modern real estate.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="surround3-benefit-item">
                  <div className="surround3-benefit-header">
                    <div className="surround3-benefit-number-wrapper">
                      <span className="surround3-benefit-number">03</span>
                    </div>
                    <span className="surround3-benefit-label">ADVANTAGE</span>
                  </div>
                  <div className="surround3-benefit-content">
                    <h5 className="surround3-benefit-title">Ease of Use</h5>
                    <p className="surround3-benefit-description">
                      Centralized control via smartphone, tablet, or intuitive voice interface.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="surround3-benefit-item">
                  <div className="surround3-benefit-header">
                    <div className="surround3-benefit-number-wrapper">
                      <span className="surround3-benefit-number">04</span>
                    </div>
                    <span className="surround3-benefit-label">ADVANTAGE</span>
                  </div>
                  <div className="surround3-benefit-content">
                    <h5 className="surround3-benefit-title">Scalable Solutions</h5>
                    <p className="surround3-benefit-description">
                      Start with one room and expand your ecosystem as your needs grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Ready for your content */}
      </main>
    </>
  );
};

export default Surround;