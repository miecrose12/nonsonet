import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nonImage from "../../assets/non.jpeg"; // Kept as requested
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const IDS = ["hero", "about", "services", "solutions", "partners"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      {
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
        setTimeout(doScroll, 150);
      } else {
        doScroll();
      }
    },
    [isHomePage, navigate],
  );

  /* ── 5. Nav item definitions (Updated to match image) ── */
const navItems = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "who-we-are" },
  { label: "Services", sectionId: "what-we-do" },
  // { label: "Solutions", sectionId: "solutions" }, // You'll still need an element with id="solutions" on your page
  { label: "Partners", sectionId: "partners" },
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
        {/* Logo Section */}
        <div className="navbar-logo-section">
          <button
            className="navbar-logo"
            onClick={() => scrollToSection("hero")}
            aria-label="Go to top"
          >
            <img
              src={nonImage}
              alt="Nonsonet Logo"
              className="navbar-logo-image"
            />
            {/* Updated Text Layout */}
            <div className="navbar-logo-text-container">
              <span className="navbar-logo-title">Nonsonet</span>
              <span className="navbar-logo-subtitle">Technologies</span>
            </div>
          </button>
        </div>

        {/* Links and Actions */}
        <div className="navbar-right-section">
          <div className="navbar-links-desktop">
            {navItems.map(DesktopLink)}
          </div>

          <div className="navbar-actions">
            <button
              className="navbar-cta-button"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
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
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu${isMenuOpen ? " open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {navItems.map(MobileLink)}
        <div className="mobile-menu-cta">
          <button
            className="navbar-cta-button"
            style={{ width: "100%" }}
            onClick={() => scrollToSection("contact", true)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;