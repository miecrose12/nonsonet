import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
    { label: 'Forecourt & Payment', to: '/services' },
    { label: 'Managed Print Services', to: '/services' },
    { label: 'Solar Inverter Systems', to: '/services' },
    { label: 'Security Infrastructure', to: '/services' },
    { label: 'Water Solutions', to: '/services' },
  ];

  const company = [
    { label: 'About Us', to: '/who-we-are' },
    { label: 'Insights', to: '/insights' },
    { label: 'Partners', to: '/partners' },
    { label: 'Careers', to: '/careers' },
  ];

  return (
    <footer className="site-footer">
      {/* ===== TOP COLUMNS ===== */}
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="material-symbols-outlined footer-logo-icon">
              architecture
            </span>
            
          </Link>
          <p className="footer-tagline">
            Nonsonet Technologies Limited is a premier IT solutions provider
            dedicated to elevating enterprise productivity through innovative
            engineering and local insight.
          </p>
          <div className="footer-socials">
            <a
              href="#"
              className="footer-social-btn"
              aria-label="Website"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>
                public
              </span>
            </a>
            <a
              href="#"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>
                share
              </span>
            </a>
            <a
              href="#"
              className="footer-social-btn"
              aria-label="Twitter / X"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '1.15rem' }}>
                tag
              </span>
            </a>
          </div>
        </div>

        {/* Expertise */}
        <div className="footer-nav-col">
          <div className="footer-nav-heading">Expertise</div>
          <ul className="footer-nav-list">
            {expertise.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-nav-col">
          <div className="footer-nav-heading">Company</div>
          <ul className="footer-nav-list">
            {company.map((item) => (
              <li key={item.label}>
                <Link to="/">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-col">
          <div className="footer-nav-heading">Contact Information</div>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="material-symbols-outlined footer-contact-icon">
                location_on
              </span>
              <span className="footer-contact-text">
                Suite 204, Tech Plaza, Victoria Island, Lagos, Nigeria.
              </span>
            </li>
            <li className="footer-contact-item">
              <span className="material-symbols-outlined footer-contact-icon">
                call
              </span>
              <span className="footer-contact-text">+234 9077617790</span>
            </li>
            <li className="footer-contact-item">
              <span className="material-symbols-outlined footer-contact-icon">
                mail
              </span>
              <span className="footer-contact-text">info@nonsonet.com.ng</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== NEWSLETTER STRIP ===== */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <div className="footer-newsletter-text">
            <h4>Stay ahead of the curve</h4>
            <p>Get the latest insights on enterprise IT and technology delivered to your inbox.</p>
          </div>
          
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Nonsonet Technologies Limited. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}

export default Footer;