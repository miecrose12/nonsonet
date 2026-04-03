import React from 'react';
import './surround.css';
import Navbar from '../../components/navbar/Navbar';

const Surround = () => {
  return (
    <>
      <Navbar />
      <main className="surround3-main-content">
        {/* Hero Section - Dark gradient background + all white text (detailed) */}
        <section 
          className="surround3-hero-section"
          style={{ 
            background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)' 
          }}
        >
          {/* Background Decoration - Enhanced for new dark gradient */}
          <div 
            className="surround3-hero-gradient"
            style={{ 
              background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)',
              opacity: 1 
            }}
          />

          <div className="surround3-hero-wrapper">
            {/* Left Content - All text forced to white with enhanced contrast */}
            <div className="surround3-hero-left">
              {/* Innovation Badge - Dark-mode version for maximum visibility */}
              <div 
                className="surround3-badge"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.12)', 
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
              >
                <span 
                  className="surround3-badge-dot"
                  style={{ backgroundColor: '#62f595', animation: 'pulse 2s infinite' }}
                ></span>
                <span 
                  className="surround3-badge-text"
                  style={{ color: '#ffffff', fontWeight: 700 }}
                >
                  INTELLIGENT INNOVATION
                </span>
              </div>

              {/* Main Title - Pure white with elegant emerald-to-white gradient on brand name */}
              <h1 
                className="surround3-hero-title"
                style={{ color: '#ffffff', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
              >
                Elevate Your Audio Experience with{' '}
                <span 
                  style={{
                    background: 'linear-gradient(to right, #62f595, #ffffff, #62f595)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 800
                  }}
                >
                  Nonsonet Technologies
                </span>
              </h1>

              {/* Description - High-contrast white with subtle transparency for depth */}
              <p 
                className="surround3-hero-description"
                style={{ 
                  color: 'rgba(255,255,255,0.92)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
              >
                Transform any space into a high-fidelity auditory sanctuary. Our surround sound
                ecosystems bridge the gap between technical precision and emotional resonance.
              </p>

              {/* CTA Buttons - (kept as-is, now visible on dark background) */}
             
            </div>

            {/* Right Image Section - Enhanced shadow & ring for dark hero */}
            <div className="surround3-hero-image-container">
              <img
                alt="High-end home theater setup"
                className="surround3-hero-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyyh1vbkt7W0xGc4e0ph9WIi1wRSQKURhSu5AvTgCVa531ylFntRYee58-nKWGFetcKrjq5OQZ3ef78vvEOAsLc8Qm-Gthd3wAzAIyRrPBPLU15c12mxbDVVdnMRtxGb_Vw0HFQPCT9mOo_R08RYTgOuy7CRXNNdTh9LI8qwamYGpYIH0WFqoDVVo2oKnc26XhNZU_gtayqSnroa2edRQ6gcHi1enig3LHII3eiANLfdC48ZOYqWNka-qhQ2KNlwErxmBurnst_28p"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
              />
              <div 
                className="surround3-hero-overlay"
                style={{ 
                  background: 'linear-gradient(to top, rgba(13,27,42,0.65), transparent 60%)' 
                }}
              />

              {/* Glass Effect Card - Updated for dark hero (semi-transparent dark glass) */}
              <div 
                className="surround3-glass-card"
                style={{ 
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff'
                }}
              >
                <p 
                  className="surround3-glass-card-title"
                  style={{ color: '#ffffff' }}
                >
                  Elite Acoustic Series
                </p>
                <p 
                  className="surround3-glass-card-description"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  Custom-calibrated for your unique architectural footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Unchanged */}
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

        {/* CTA Section */}
        
      </main>
    </>
  );
};

export default Surround;