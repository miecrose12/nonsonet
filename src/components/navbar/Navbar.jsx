import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nonImage from "../../assets/non.jpeg"; // ← Import the image from src/assets
import "./navbar.css";

/**
 * NAV LINK BEHAVIOUR
 * ─────────────────────────────────────────────
 * Home        → scrolls to #hero   (top of landing page)
 * Who We Are  → scrolls to #who-we-are
 * Services    → scrolls to #what-we-do  (What We Do section)
 * Partners    → scrolls to #partners
 * Contact     → scrolls to #contact
 * Get Started → scrolls to #contact
 * ─────────────────────────────────────────────
 * • Scroll-spy via IntersectionObserver keeps the active link in sync.
 * • If the user is on another route and clicks a scroll link, the app
 *   navigates to "/" first, then scrolls after the page has painted.
 */

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  /* ── 1. Glass-effect intensifies after 20 px of scroll ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── 2. Scroll-spy — watches the landing sections ── */
  useEffect(() => {
    if (!isHomePage) return;

    const IDS = ["hero", "who-we-are", "what-we-do", "partners", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        // Among intersecting entries, pick the one whose top is
        // closest to (but still below) the navbar.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      {
        // Section must clear 120 px (navbar) before activating;
        // and must occupy at least 35 % of the viewport height.
        rootMargin: "-120px 0px -35% 0px",
        threshold: 0,
      },
    );

    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage, location.pathname]);

  /* ── 3. Close mobile menu whenever the route changes ── */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* ── 4. Smooth-scroll helper ── */
  const scrollToSection = useCallback(
    (sectionId, closeMobile = false) => {
      if (closeMobile) setIsMenuOpen(false);

      const doScroll = () => {
        if (sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("hero");
          return;
        }
        const el = document.getElementById(sectionId);
        if (!el) return;
        const navEl = document.querySelector(".navbar-header");
        const navH = navEl ? navEl.offsetHeight : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: "smooth" });
      };

      if (!isHomePage) {
        navigate("/");
        setTimeout(doScroll, 150); // wait for Landing to paint
      } else {
        doScroll();
      }
    },
    [isHomePage, navigate],
  );

  /* ── 5. Nav item definitions ── */
  const navItems = [
    { label: "Home", sectionId: "hero" },
    { label: "Who We Are", sectionId: "who-we-are" },
    { label: "Services", sectionId: "what-we-do" }, // scrolls to What We Do section
    { label: "Partners", sectionId: "partners" },
    { label: "Contact", sectionId: "contact" },
  ];

  /* ── 6. Active-state check ── */
  const isActive = (item) => {
    if (item.route) return location.pathname === item.route;
    return isHomePage && activeSection === item.sectionId;
  };

  /* ── 7. Render: desktop link ── */
  const DesktopLink = (item) => {
    const active = isActive(item);
    const cls = `nav-link${active ? " active-nav-link" : ""}`;

    // All navigation items now use smooth scroll
    return (
      <button
        key={item.label}
        className={cls}
        onClick={() => scrollToSection(item.sectionId)}
      >
        {item.label}
      </button>
    );
  };

  /* ── 8. Render: mobile link ── */
  const MobileLink = (item) => {
    const active = isActive(item);

    // All navigation items use button with mobile-nav-btn class
    return (
      <button
        key={item.label}
        className={`mobile-nav-btn${active ? " active-nav-link" : ""}`}
        onClick={() => scrollToSection(item.sectionId, true)}
      >
        {item.label}
      </button>
    );
  };

  /* ── 9. JSX ── */
  return (
    <header className={`navbar-header${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar-container">
        {/* Logo (button → scrolls to top) + desktop links */}
        <div className="navbar-logo-section">
          <button
            className="navbar-logo"
            onClick={() => scrollToSection("hero")}
            aria-label="Go to top"
          >
            {/* ── REPLACED: Material icon with non.jpeg image ── */}
            <img
              src={nonImage}
              alt="LUCID Logo"
              className="navbar-logo-image"
            />
            <span className="navbar-logo-text">Nonsonent</span>
          </button>

          <div className="navbar-links-desktop">
            {navItems.map(DesktopLink)}
          </div>
        </div>

        {/* Search + Get Started CTA + hamburger */}
        <div className="navbar-actions">
          {/* Get Started → scrolls to #contact */}
          <button
            className="navbar-cta-button"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map(MobileLink)}

        {/* Get Started inside mobile menu also scrolls to #contact */}
        <div className="mobile-menu-cta">
          <button
            className="navbar-cta-button"
            style={{ width: "100%" }}
            onClick={() => scrollToSection("contact", true)}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;