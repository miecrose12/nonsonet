import React, { useState, useEffect } from 'react';
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

/* ─── HERO SECTION – 100% MATCHING THE POLISHED PRINTER HERO ──────────────── */
/* ─── HERO SECTION – Matching the screenshot design ──────────────────────── */
const HeroSection = ({ scrollPosition }) => (
  <section
    id="hero"
    className="relative min-h-[420px] md:min-h-[320px] flex flex-col overflow-hidden px-6 md:px-12 pt-8 pb-20"
    style={{ background: '#0d1b2a' }}
  >
    {/* === BACKGROUND GLOWS === */}
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
        {/* Speaker icon box */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00d27b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
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
          Elevate Your Audio Experience
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
        Surround Sound Systems
      </h1>

      {/* Subtitle */}
      <p
        className="text-white/55 leading-relaxed"
        style={{ fontSize: '1.05rem', maxWidth: '560px' }}
      >
        State-of-the-art Surround Sound Systems for home theaters, offices, and commercial settings
        delivering immersive, crystal-clear audio experiences.
      </p>
    </div>
  </section>
);

/* ─── Root Component ──────────────────────────────────────────────────────── */
const Surround = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="surround3-main-content">
        <HeroSection scrollPosition={scrollPosition} />

        {/* Why Choose Us Section - Unchanged (your CSS) */}
        <section className="surround3-why-choose-section">
          <div className="surround3-container">
            <div className="surround3-section-header">
              <h2 className="surround3-section-title">Why Choose Nonsonet for Surround Sound?</h2>
              <p className="surround3-section-subtitle">
                We don't just install speakers; we curate acoustic environments tailored to the
                unique physics of your architecture.
              </p>
            </div>

            <div className="surround3-features-grid">
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">spatial_audio</span>
                </div>
                <h4 className="surround3-feature-title">Immersive Audio Quality</h4>
                <p className="surround3-feature-description">
                  Pristine clarity from the lowest rumble to the highest frequency, engineered for
                  perfect balance.
                </p>
              </div>
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">architecture</span>
                </div>
                <h4 className="surround3-feature-title">Custom Design</h4>
                <p className="surround3-feature-description">
                  Every system is custom-mapped to your room's unique footprint for optimized
                  sonic performance.
                </p>
              </div>
              <div className="surround3-feature-card">
                <div className="surround3-feature-icon-wrapper">
                  <span className="surround3-material-icons surround3-feature-icon">settings_input_composite</span>
                </div>
                <h4 className="surround3-feature-title">Seamless Integration</h4>
                <p className="surround3-feature-description">
                  Technology that vanishes into your decor while filling the room with
                  professional-grade sound.
                </p>
              </div>
            </div>

            <div className="surround3-features-grid-horizontal">
              <div className="surround3-feature-card-horizontal">
                <div className="surround3-feature-icon-wrapper-small">
                  <span className="surround3-material-icons surround3-feature-icon">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="surround3-feature-title">Advanced Technology</h4>
                  <p className="surround3-feature-description">
                    Leveraging the latest in Dolby Atmos and spatial audio computing to redefine
                    home entertainment.
                  </p>
                </div>
              </div>
              <div className="surround3-feature-card-horizontal">
                <div className="surround3-feature-icon-wrapper-small">
                  <span className="surround3-material-icons surround3-feature-icon">engineering</span>
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

            <div className="surround3-solutions-grid">
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