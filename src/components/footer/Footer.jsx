import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  
  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! We'll keep ${email} in the loop.`);
      setEmail('');
    }
  };

  const expertise = [
    { label: 'Forecourt & Payment', to: '/forcourt' },
    { label: 'Managed Print Services', to: '/printer' },
    { label: 'Solar Inverter Systems', to: '/solar' },
    { label: 'Water Solutions', to: '/water' },
  ];

  const company = [
    { label: 'About Us', to: '/' },
    { label: 'Insights', to: '/' },
    { label: 'Partners', to: '/' },
    { label: 'Careers', to: '/' },
  ];

  return (
    <footer
      className="font-sans"
      style={{
        background: 'linear-gradient(to right, #0d1b2a, #0a2e2a)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        color: '#ffffff',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* ===== TOP COLUMNS ===== */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-16">
       
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '1.75rem',
                color: '#00d27b',
                fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              architecture
            </span>
          </Link>
          <p 
            className="text-sm leading-relaxed max-w-[22rem]" 
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Nonsonet Technologies Limited is a premier IT solutions provider
            dedicated to elevating enterprise productivity through innovative
            engineering and local insight.
          </p>
          <div className="flex gap-3">
            {[
              { icon: 'public', label: 'Website' },
              { icon: 'share', label: 'LinkedIn' },
              { icon: 'tag', label: 'Twitter / X' },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center no-underline transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00d27b';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,210,123,0.3)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="flex flex-col gap-5">
          <div
            className="text-[0.7rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#ffffff' }}
          >
            Expertise
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {expertise.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-medium no-underline transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00d27b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-5">
          <div
            className="text-[0.7rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#ffffff' }}
          >
            Company
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-medium no-underline transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00d27b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <div
            className="text-[0.7rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#ffffff' }}
          >
            Contact Information
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            {[
              { icon: 'location_on', text: 'Suite 204, Tech Plaza, Victoria Island, Lagos, Nigeria.' },
              { icon: 'call', text: '+234 9077617790' },
              { icon: 'mail', text: 'info@nonsonet.com.ng' },
            ].map(({ icon, text }) => (
              <li key={icon} className="flex items-start gap-2.5">
                <span
                  className="material-symbols-outlined flex-shrink-0 mt-0.5"
                  style={{
                    fontSize: '1rem',
                    color: '#00d27b',
                    fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  {icon}
                </span>
                <span 
                  className="text-[0.85rem] leading-snug" 
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== NEWSLETTER STRIP ===== */}
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.12)', 
        borderBottom: '1px solid rgba(255,255,255,0.12)' 
      }}>
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h4
              className="text-[1.1rem] font-bold mb-1"
              style={{ 
                fontFamily: "'Manrope', sans-serif", 
                color: '#ffffff' 
              }}
            >
              Stay ahead of the curve
            </h4>
            <p 
              className="text-[0.85rem]" 
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Get the latest insights on enterprise IT and technology delivered to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-[0.625rem] px-4 py-[0.7rem] text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                fontFamily: "'Manrope', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00d27b';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,210,123,0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              className="rounded-[0.625rem] px-6 py-[0.7rem] text-sm font-bold whitespace-nowrap cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: '#006d3d',
                color: '#ffffff',
                border: 'none',
                fontFamily: "'Manrope', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00d27b';
                e.currentTarget.style.color = '#0a2a20';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#006d3d';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row md:justify-between items-center gap-4 text-center md:text-left">
        <p 
          className="text-[0.75rem]" 
          style={{ 
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          © {new Date().getFullYear()} Nonsonet Technologies Limited. All rights reserved.
        </p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Use'].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[0.7rem] font-bold uppercase tracking-[0.08em] no-underline transition-all duration-200"
              style={{ 
                color: 'rgba(255,255,255,0.55)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00d27b';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.opacity = '0.55';
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;