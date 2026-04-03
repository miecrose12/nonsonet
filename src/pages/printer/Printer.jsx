import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

/* ─── Network Canvas Animation (exact same as Landing page) ───────────── */
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

const Printer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState('Solutions');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: 'Solutions', id: 'solutions' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Cloud Support', id: 'cloud-support' },
  ];

  // Why Choose Cards Data
  const chooseCards = [
    {
      id: 1,
      title: 'Cost Reduction',
      description: 'Eliminate unpredictable printing expenses with fixed monthly costs and optimized supply management.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0KLCZlQUzflJl0uBdev5HOAG8St_cFv0DlDwFSaVR3p4Bu3W_2gHmBGgfiThbDejfgfxK4-cCZYeJYwibPMZvpPiArq8Y6aPnImWwjpPJxYGloN-WhyBMoy-cwTgbkg04wjglcAkUasQLMnC8F9K_PaOj1Xk7vj4RWBYhFEtU2P2-kUfEQLWxDVhGnbzygjR3KJgV5H-Yri6ScFXomJuP6H243jiQixf47_xLBIC8Os-1bIse6TpccNHxMkiVupViYmjBagaSU_T',
    },
    {
      id: 2,
      title: 'Enhanced Security',
      description: 'Protect sensitive data with pull-printing, user authentication, and encrypted hard drives.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFF2crh6HI7_MxtbpHpwf0Kek4Hxtw1AKmR5JTZQq4zXq9N6uHUCbPkTwUAh3t_GtFZhf5gBqnPKvj8slSjJpqcsD_WsTCnGpNjOGz9y4KvrryyqqsGSDgJ7YlkYQOPJpODpWpZ_Z5yWvfHz8Vduyvwp8C_foze2NTha98GWYV28FUofQRIThFxRgdF8hhVlvly098onhKtXTXXbvpqq_3LS7s0VNL9XqfrCD1_-69avp0ePDFbmQmVxJCL140uDK5TdED8ejG_KJz',
    },
    {
      id: 3,
      title: 'Increased Productivity',
      description: 'Automate workflows and reduce IT burden by offloading maintenance and supplies management.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP4O7uYzjSz2PHUNyJ8wbMvgVshVhAWo_Y_LnzV_smSbWtkkBOLMAylt7g9rFfu9u0cwg2PN8Z4httH9pHrq3yytG91kfIIHEZyA62_Z5e10nuYK5gS8008b9UPhbwjCkBcoqImfthapomC0TMfVXW-kTMocm-kHMv5FkhkbH6xAAhAfj36AQXuxXq7xJp_gDe3DWI-qKojMC5k9_s-gvbJ1LtBgYkVktFPDE30iuOTFFMqkA06Lom1nacuc6xqZu-K0MNCbJF2BEV',
    },
    {
      id: 4,
      title: 'Sustainability',
      description: 'Minimize environmental impact through energy-efficient hardware and reduced paper waste.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvvu_APDH5Z9yYvi28dC7uVob0JoGhhZuZHwCFFWf2Gp1FW_O4wwH2xNwwEAMn6W9WXGUOZ5TiFQqDTULqfIbME5SMSWxhVgrN9hReH4G3YgbFCnzPYny6HiAXhYWIDsJ5MX5IEk_ZaT-nWyliN-HZajD51tb7UxGjUX4yME4Ma5mFPxBel1EKhRcG0NVvkKuJAcnzFOVPSK2Jw0cML4hAXeVVfhM_YOEJKCdDZdsEWKqeXTeuhwdActmrimQ8PXYi0YhjoVb5wFJt',
    },
  ];

  // MPS Services Data
  const mpsServices = [
    {
      id: 1,
      title: 'Print Assessment',
      description: 'Deep audit of your current fleet, usage patterns, and hidden costs to establish a performance baseline.',
      icon: '📊',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN0XPYnHBCZJianV_h8osAVvUi_SAAqeJKCprVipO60Rm5uQzj3-MtEC1RoJmwInLtCGbjV58O5yc5j-JRjKbw93OIUDgS3vFHiRKDNtU-nFfKkFFKa-tIgdFS7A3n2Yd-NMWt4b6cm9VrQB5umSPfkNvgRRB1oGQL2mxELT1W4h7PRvePmQpsiGXNj5CHDcHYIeF00sv2lpHt5hh2OquP67qi1PxXnmrl7_7fka8GEZM-ZcNQNwT8c0cjaK56XOOXqFUJOywdXu-K',
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'Rightsizing your device fleet with state-of-the-art hardware designed for your specific volume and needs.',
      icon: '⚙️',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvXvsMjs2t6TJczNLdQsTNT_wULLnVVygHooPfCQ1evPFFDeIN6mPrpseJMX_RaP6j6xC3ZRhPZ5SySNsr0H4WCpnXRzYFL72S53iHtdfpQSaKpdDU5P1iLSOay7OhXj0j4oFdAwRtM5xsZycTeXny0l7hTFonunmcAwftt4ULMYm54p6SE-nz1RLtl_QB3CGyYd2waGaEvbjYDWmKxiIQWMBCyOlZ3eMNNB7KMHdGPRiF53RXAlIt1b-wwkGCqAOscByG57IDvS7Q',
    },
    {
      id: 3,
      title: 'Proactive Management',
      description: 'Automatic toner replenishment and remote device monitoring to solve issues before they disrupt work.',
      icon: '🔄',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiNy7Y_XWXENSsP--1fzM4DRJPD5nlMStPo_vRMO8gzKRSOEhUaLB32DxExG6Osy7R6TjBaZvzwKYsfXpAO5nuDYfwlDpzbllZLBAA7wyEdCGaDZtHyXAUukE4MWJLCPweFI6-sBojjrw2Ee6R23EgkUGYziW5Lc-dtc7qL1ttB0DNFO6psDKz32KsHxHx4VCMZGgEXNfQvtsgwIztoClYezyzlBVHF_0hxZdT5vspUfDtU3Izyu6LhVouEDi3mBW0st1l2HyfocTJ',
    },
    {
      id: 4,
      title: 'Advanced Reporting',
      description: 'Monthly insight reports detailing device usage, departmental costs, and sustainability metrics.',
      icon: '📈',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLTm9y7RCXRjbQznE17KU-9Nr0Jz1h3Giftn9T9P8LEZCWM8eZdJpkgF9fC2XZHnrR0rJiHPjM-eODweYzkQKnx35UjTpowm8TY_30mTg3xX75cHfrYWg-LCzLQTsppDaWqCGnFqcYTPYlohsJ5KZq1AuCmOyevZ8NWUx0wwMJFqOF-Qc818ykt9VwnkrYkEam5vFaVUg6YEtoW2N6zWJdvzjmYc4DkPZDBHkaG9z58Z1bnyTG1dw-ZsjJta8e7ft4Cghe2OcLPHn',
    },
  ];

  return (
    <div className="bg-white text-[#191c1d] selection:bg-green-200 selection:text-green-900 font-['Manrope',sans-serif]">

      <Navbar />

      <main className="pt-20">

        {/* ============================================
            HERO SECTION – 100% MATCHING LANDING PAGE
            ============================================ */}
        <section
          id="hero"
          className="relative min-h-[795px] flex items-center overflow-hidden px-6 py-20 md:py-28"
          style={{ background: '#08111f' }}
        >
          {/* Animated network canvas – exact same as Landing */}
          <canvas
            ref={networkCanvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
          />

          {/* Subtle right-side radial glow – exact same as Landing */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,210,123,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-[1280px] mx-auto w-full">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">

              {/* Left Content – exact Landing typography */}
              <div className="lg:col-span-7 z-10">
                {/* Badge – exact same style as Landing */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-semibold tracking-wide mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse" />
                  Managed Print Services • Lagos, Nigeria
                </div>

                {/* Headline – exact font, size, weight, tracking as Landing */}
                <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl md:text-[4.25rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-6">
                  Streamline Your Printing Operations with{' '}
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
                  Managed Print Services
                </h1>

                {/* Subtext – exact style as Landing */}
                <p className="text-xl text-white/60 max-w-[34rem] leading-[1.75] mb-10">
                  Optimize your entire document lifecycle with a centralized, secure, and sustainable print infrastructure. We transform printing from a hidden cost into a strategic asset.
                </p>

                {/* Stats row – exact same layout as Landing */}
                <div className="flex items-center gap-6 pt-8 border-t border-white/[0.12]">
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#00d27b]">
                      30%
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Avg. Cost Reduction
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      100%
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Proactive Support
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-white">
                      24/7
                    </div>
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mt-1">
                      Monitoring
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Section – brand-consistent with your original image + stats overlay */}
              <div className="lg:col-span-5 relative">
                <div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-l-8 border-[#00d27b] ring-1 ring-white/10"
                  style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.45)' }}
                >
                  <img
                    alt="Modern Office Setup with Printer"
                    className="w-full h-[500px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnWQaLVx9GblnFxgfD-asT-2w34raI7EZVoFa-MindqmZBvVUnA7LvVt5-9GSKD4Z3fb8-D2whgWNRckGbDnU7pqjiLCm5JKjkxQxrcxnbyBDRbikfRwdJvXqq4e8JwWSlIP_8Y1xqnSt5Wp59g2ec-3jYw-7WYf2CxAvmVoJVf_v7JqE5w5fiheAKYXgzXcJ0RAGH8XRufE0G6IKmKX8vjecqyIQgTpwQ7CTwOrpfj0cqO6iC41rQ8k4ctUcFDpGlP5trYRT7oR1l"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08111f]/40" />
                </div>

                {/* Floating Stats Card – kept from your design, now on-brand */}
                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#00d27b] to-white flex items-center justify-center text-white text-3xl shadow-lg">
                      📈
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#00d27b] tracking-widest uppercase">Average Savings</p>
                      <p className="text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-white">30% Reductions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WHY CHOOSE SECTION – brand consistent ==================== */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl lg:text-5xl font-extrabold text-[#191c1d] mb-6">
                Why Choose Nonsonet for MPS?
              </h2>
              <div className="w-24 h-1.5 bg-[#00d27b] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chooseCards.map((card, index) => (
                <div
                  key={card.id}
                  className="bg-white overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={card.image}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold mb-3 text-[#006d3d] group-hover:text-[#00d27b] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== MPS SERVICES SECTION – brand consistent ==================== */}
        <section className="py-24 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Right - Images Grid */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -left-12 -top-12 w-64 h-64 bg-[#00d27b]/10 rounded-full blur-3xl"></div>

                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <img
                        alt="Printer Fleet Management"
                        className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu8lgw-lNoKsJDNg1-Plcg1W59VDsi8ZnoLqf5tVlMe3ya5wlaf7JUpxMmHtFyf3sFEBBPxamqRwoNiUTVggKEF2bhYpo9POLqCSeg6YjUzSRCqr-Fh5GSknN_0zRsbkbCginlQ7EhfKuVf4OtA3KQmI1JgPqOkP129AbVAhchdDXQ7uP4LhgEM0q1j0qxxsM6HyZI2cYZVw5XeHTXRHlQwJ-bPKyrNRrUN9qJDi1b8ILl8X_mzD0kzWcnlJaIv2CC68tgJY3JG1M4"
                      />
                    </div>
                    <div className="bg-[#006d3d] p-8 rounded-3xl text-white shadow-lg hover:shadow-xl transition-shadow">
                      <p className="text-4xl font-['Plus_Jakarta_Sans',sans-serif] font-bold mb-2">100%</p>
                      <p className="text-sm tracking-widest uppercase">Proactive Support</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <img
                        alt="Enterprise Multifunction Printer"
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-G2R8ACZ5rExSwciEKdbuPz5CJ8MgrxStDNtXW6jcIXB8I2suRBByTca6PuPioXoPztwn4EQxMdCxsEFZI4z-wU-6zKiSen1Hdc53eayg-qyOIcOgpbWd7MPVFgXvkfls3NnwnsCgcwkkdQX8ITxxS2dB8qWBnD5agdEGr3_xwjKHEp1fEAgdC5yG6RiDfCNKTBjHyEmFZAGJVvDGEbt2Q7-3DdVo4E6D6CQ6K_bAqm988VfMoChy8RfYxFpkvbAXq-X0hvPI4aNe"
                      />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <img
                        alt="Digital Print Analytics Dashboard"
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmB7WWt4pMlZwBUs1HIqM5vmHvSRL32mL2-90aJ8h-8AOd0GDjkX6rPjiO_4zdGSuGXGL1YYX_PaKf8t0iYk1sKYLkEHPQRs8bc9OIuJA3hQivOT6_V-tWT0RIyZWJNDNxI_g7mbF6e5be-3yiXBRsKruupuEmFeL32hkfHHPOS__vlVfsrLNnri7VDL5N5bpqMGHasXKQe9f1wOuU9RKNUZ2k7WtqmcvIi98cLmNISO4uPbDFJkCye-aY_g50I07ZrFqds6ylUyCc"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Left - Content */}
              <div className="order-1 lg:order-2">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl lg:text-5xl font-extrabold text-[#191c1d] mb-8 leading-tight">
                  Comprehensive MPS Solutions Tailored for You
                </h2>

                <div className="space-y-8">
                  {mpsServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex gap-6 group hover:bg-[#00d27b]/5 p-4 rounded-3xl transition-all duration-300"
                    >
                      <div className="mt-1 flex-shrink-0 w-24 h-24 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group-hover:scale-110 duration-300">
                        <img
                          alt={service.title}
                          className="w-full h-full object-cover"
                          src={service.image}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold mb-2 text-[#191c1d] group-hover:text-[#006d3d] transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Printer;