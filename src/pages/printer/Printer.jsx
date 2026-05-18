import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, TrendingUp, Shield, Leaf, Users, Zap, BarChart3, Lock, Wifi, FileText, AlertCircle, Printer, ArrowRight, Cpu, Battery, Globe, Lock as LockIcon } from 'lucide-react';
import nonImage from "../../assets/IMG1.jpeg";
import nonImage1 from "../../assets/canon3.png";
import nonImage2 from "../../assets/IMG3.jpeg";

const ManagedPrintServices = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [expandedPrinter, setExpandedPrinter] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core benefits data
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Drive Productivity',
      description: 'Improve time and cost efficiency with increased functionality and visibility into document workflows',
      color: '#00d27b'
    },
    {
      icon: Users,
      title: 'Improve Collaboration',
      description: 'Enable teams to access advanced print and scan capabilities remotely through enhanced connectivity',
      color: '#00b8d4'
    },
    {
      icon: Shield,
      title: 'Strengthen Security',
      description: 'Maintain compliance standards with robust security infrastructure and authorized access control',
      color: '#ff6b6b'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Minimize environmental impact through energy-efficient hardware and reduced paper waste',
      color: '#ffd93d'
    }
  ];

  // MPS Services breakdown
  const mpsServices = [
    {
      id: 'discover',
      title: 'Discovery Assessment',
      icon: FileText,
      shortDesc: 'Detailed analysis of your print environment',
      fullDesc: 'Provides comprehensive analyses of your print and scan environment, giving understanding of your fleet and day-to-day user needs. Advanced version includes environment calculations for accurate baseline cost savings.',
      highlights: ['Fleet inventory', 'Usage pattern analysis', 'Cost baseline', 'Environmental impact'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800'
    },
    {
      id: 'fleet',
      title: 'Fleet Management',
      icon: Zap,
      shortDesc: 'Continuous fleet optimization and availability',
      fullDesc: 'Ensures fleets remain continually available with sufficient capacity, enabling centralized management for higher productivity. Includes output management, customer reporting, and business relationship management services.',
      highlights: ['Output management', 'Device monitoring', 'Capacity optimization', 'Performance reporting'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800'
    },
    {
      id: 'security',
      title: 'Security Services',
      icon: Lock,
      shortDesc: 'Comprehensive fleet security solutions',
      fullDesc: 'Range of security-related services for all organization types to keep MFD and printer fleets secure. Includes device hardening, data removal, and security audits.',
      highlights: ['Device hardening', 'Data removal service', 'Security audits', 'Compliance management'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800'
    },
    {
      id: 'sustainability',
      title: 'Sustainability Services',
      icon: Leaf,
      shortDesc: 'Achieve your sustainability goals',
      fullDesc: 'Helps you achieve sustainability goals through Canon and third-party services including carbon neutral printing, reforestation programs, and environmental tracking.',
      highlights: ['Carbon neutral printing', 'Reforestation programs', 'Waste reduction', 'Eco reporting'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800'
    },
  
    {
      id: 'enterprise',
      title: 'Enterprise Service Desk',
      icon: BarChart3,
      shortDesc: 'Global centralized support',
      fullDesc: 'Single point of contact for centralized global software and application support, offering enhanced operational efficiency, reliability and productivity.',
      highlights: ['24/7 support', 'Global coverage', 'Application support', 'Incident management'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800'
    }
  ];

  // ENHANCED PRINTER HARDWARE WITH DETAILED SPECS AND CUSTOM IMAGES
  const printers = [
    {
      name: "Canon imageRUNNER ADVANCE DX C5870i",
      image: nonImage1,
      description: "Engineered for high-volume corporate environments, this A3 color multifunction workhorse delivers rapid document processing and uncompromised security. It features standard uniFLOW Online Express for cloud-based print management, a 270-ipm single-pass duplex scanner, and self-encrypting drives to protect sensitive enterprise data.",
      category: "Enterprise Multifunction",
      specs: [
        "Up to 70 ppm A4 print speed",
        "270-sheet single-pass duplex scanner",
        "McAfee Embedded Control security"
      ],
      details: [
        { icon: Cpu, label: "Processing Power", value: "Intel i7 equivalent" },
        { icon: Battery, label: "Power Efficiency", value: "EPEAT Gold rated" },
        { icon: LockIcon, label: "Security Level", value: "Military-grade encryption" },
        { icon: Globe, label: "Connectivity", value: "WiFi 6 & Ethernet" }
      ]
    },
    {
      name: "HP Color LaserJet Enterprise MFP M480f",
      image: nonImage,
      description: "Optimized for modern hybrid workspaces, this intelligent A4 printer packs full enterprise capabilities into a space-saving desktop footprint. It offers HP Wolf Enterprise Security with self-healing BIOS, whisper-quiet operation, and robust mobile printing support via Wi-Fi Direct and seamless cloud integration.",
      category: "Compact Multifunction",
      specs: [
        "Up to 29 ppm color print speed",
        "HP Wolf Enterprise Security built-in",
        "8-inch customizable color touchscreen"
      ],
      details: [
        { icon: Cpu, label: "Smart Features", value: "AI-powered workflow" },
        { icon: Battery, label: "Energy Star", value: "98% waste reduction" },
        { icon: LockIcon, label: "Mobile Security", value: "End-to-end encryption" },
        { icon: Globe, label: "Cloud Integration", value: "OneDrive & SharePoint" }
      ]
    },
    {
      name: "Canon imagePRESS V1000",
      image: nonImage1,
      description: "Built for commercial printing facilities and high-demand corporate reprographics departments, this industrial digital press delivers unparalleled color accuracy. It features automated front-to-back registration, inline finishing modules for professional booklet making, and continuous commercial speeds on heavy media.",
      category: "Commercial Press",
      specs: [
        "100 ppm on media up to 400gsm",
        "Inline Spectrophotometer for color accuracy",
        "POD Surface cooling technology"
      ],
      details: [
        { icon: Cpu, label: "Color Engine", value: "Spectral matching" },
        { icon: Battery, label: "Throughput", value: "50,000 pages/month" },
        { icon: LockIcon, label: "Finishing", value: "Automated booklet binding" },
        { icon: Globe, label: "Media Support", value: "13-400 gsm rated" }
      ]
    },
    {
      name: "HP DesignJet T1600 36-in Printer",
      image: nonImage2,
      description: "Designed specifically for architects, engineers, and construction teams, this wide-format plotter brings intricate CAD blueprints and GIS maps to life. Utilizing HP Bright Office Inks, it delivers crisp, sub-millimeter line accuracy on continuous rolls, complete with smart automated stacking.",
      category: "Wide Format Plotter",
      specs: [
        "180 D/A1 pages per hour",
        "Advanced HP Secure Boot network protection",
        "Up to 36-inch continuous media width"
      ],
      details: [
        { icon: Cpu, label: "Print Accuracy", value: "±0.2mm precision" },
        { icon: Battery, label: "Roll Capacity", value: "Dual roll system" },
        { icon: LockIcon, label: "File Security", value: "Secure PDF handling" },
        { icon: Globe, label: "Connectivity", value: "Ethernet & USB 3.0" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#191c1d] font-['Manrope',sans-serif]">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: '#0a1428' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#00d27b]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#00b8d4]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00d27b]/30 bg-[#00d27b]/10 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse"></div>
              <span className="text-[#00d27b] text-sm font-medium">Optimized Print Environment</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Managed Print Services
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Create an optimized, secure and sustainable print and scan environment with our comprehensive services and solutions. Available via cloud, hybrid setup, or on-premise.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl font-black text-[#00d27b]">50%</p>
                <p className="text-white/60 text-sm mt-1">Rank MPS in top 3 priorities</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#00b8d4]">100%</p>
                <p className="text-white/60 text-sm mt-1">Proactive Fleet Support</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ffd93d]">24/7</p>
                <p className="text-white/60 text-sm mt-1">Enterprise Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS SECTION ==================== */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Why Managed Print Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our MPS solution combines industry-leading technology with strategic services to transform your print environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" style={{ background: `${benefit.color}15` }}></div>
                  <benefit.icon className="w-12 h-12 transition-colors" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#191c1d] mb-3 group-hover:translate-x-1 transition-transform">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MPS SERVICES SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Comprehensive MPS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of services designed to optimize your print environment from discovery to ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mpsServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#00d27b] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#00d27b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00d27b]/20 transition-colors">
                        <Icon className="w-7 h-7 text-[#00d27b]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-[#191c1d] group-hover:text-[#00d27b] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-xs font-medium mt-1">{service.shortDesc}</p>
                      </div>
                    </div>

                    {/* Full Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-8">
                      {service.fullDesc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mt-auto">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#00d27b]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#00d27b]" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== ENHANCED PRINTER HARDWARE SECTION WITH CUSTOM IMAGES ==================== */}
      <section className="py-24 bg-[#0a1428] relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#00b8d4]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#00d27b]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 mb-6 backdrop-blur-sm">
              <Printer className="w-4 h-4 text-[#00b8d4]" />
              <span className="text-sm font-bold tracking-wide text-[#00b8d4] uppercase">Hardware Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Best-in-Class Devices
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              From compact home-office units to heavy-duty commercial presses, our hardware fleet guarantees top-tier reliability, security, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {printers.map((printer, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-[#131f37] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#00b8d4]/50 hover:shadow-[0_15px_50px_rgba(0,184,212,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setExpandedPrinter(expandedPrinter === idx ? null : idx)}
              >
                {/* Image Container with Enhanced Gradient Overlay */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#0a1428] shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-transparent z-10"></div>
                  <img 
                    src={printer.image} 
                    alt={printer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  {/* Enhanced Number Tag */}
                  <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-2xl border border-gray-300 flex items-center justify-center text-[#191c1d] font-black text-lg backdrop-blur-sm">
                    0{idx + 1}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-[#00b8d4]/90 backdrop-blur-sm border border-[#00b8d4]/50">
                    <span className="text-white text-xs font-bold tracking-wide">{printer.category}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20 bg-[#131f37]">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white group-hover:text-[#00b8d4] transition-colors duration-300">
                    {printer.name}
                  </h3>
                  <p className="text-[#00b8d4] text-xs font-bold tracking-widest uppercase mb-6 opacity-70">
                    {printer.category}
                  </p>
                  
                  <p className="text-white/60 text-base leading-relaxed mb-8 flex-grow">
                    {printer.description}
                  </p>
                  
                  {/* Core Specs */}
                  <ul className="space-y-4 mb-8 pb-8 border-b border-white/10">
                    {printer.specs.map((spec, sidx) => (
                      <li key={sidx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#00d27b]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#00d27b]" />
                        </div>
                        <span className="text-white/80 text-sm font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Details Section */}
                  <div className={`transition-all duration-500 overflow-hidden ${expandedPrinter === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-4 mb-8">
                      {printer.details.map((detail, didx) => {
                        const DetailIcon = detail.icon;
                        return (
                          <div key={didx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#00b8d4]/30 transition-all">
                            <div className="flex items-center gap-3">
                              <DetailIcon className="w-5 h-5 text-[#00b8d4]" />
                              <span className="text-white/70 text-sm font-medium">{detail.label}</span>
                            </div>
                            <span className="text-[#00d27b] text-sm font-bold">{detail.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Call to Action with Toggle */}
                  <div className="pt-4">
                    <button className="flex items-center gap-2 text-[#00b8d4] text-sm font-bold hover:gap-4 transition-all duration-300 uppercase tracking-wide group/btn">
                      {expandedPrinter === idx ? 'Hide Details' : 'View Full Specs'} 
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedPrinter === idx ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADDITIONAL SERVICES SECTION ==================== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Additional Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium options for organizations requiring enhanced support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ff6b6b]/10 flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-[#ff6b6b]" />
              </div>
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">On-site Maintenance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated on-site engineer offering rapid fleet support optimization to ensure high availability and user satisfaction.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00b8d4]/10 flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6 text-[#00b8d4]" />
              </div>
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">On-site Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support for day-to-day print and scan environment at large sites, providing incident triage and device hygiene.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ffd93d]/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#ffd93d]" />
              </div>
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">Hybrid Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless working between home and office environments through one single contract, enabling efficient work anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedPrintServices;