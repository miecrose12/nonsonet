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

  // Mapped to the specific IDs in your Landing component
  const company = [
    { label: 'About Us', id: 'who-we-are' },
    { label: 'Insights', id: 'what-we-do' },
    { label: 'Partners', id: 'partners' },
    { label: 'Careers', id: 'contact' }, // Routing careers to the contact form 
  ];

  // Helper function to scroll to top for standard route changes
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  // Helper function for smooth scrolling to specific sections on the same page
  const handleSectionScroll = (e, id) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault(); // Prevent default anchor jump
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // If the element isn't on the current page, the standard href="/#id" will navigate there
  };

  return (
    <footer
      className="font-sans"
      style={{
        background: '#08111f',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        color: '#ffffff',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* ===== TOP COLUMNS ===== */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-16">
        
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link 
            to="/" 
            onClick={scrollToTop} 
            className="flex items-center gap-2.5 no-underline"
          >
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
                  onClick={scrollToTop}
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
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => handleSectionScroll(e, item.id)}
                  className="text-sm font-medium no-underline transition-colors duration-200 cursor-pointer"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00d27b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                >
                  {item.label}
                </a>
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
              className="font-['Plus_Jakarta_Sans',sans-serif] text-[1.1rem] font-bold mb-1"
              style={{ color: '#ffffff' }}
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
       
      </div>
    </footer>
  );
}

export default Footer;