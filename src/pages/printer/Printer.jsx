import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, TrendingUp, Shield, Leaf, Users, Zap, BarChart3, Lock, Wifi, FileText, AlertCircle } from 'lucide-react';

const ManagedPrintServices = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedService, setSelectedService] = useState('discover');

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
      id: 'multivendor',
      title: 'Multi-vendor Management',
      icon: Users,
      shortDesc: 'Unified management across all brands',
      fullDesc: 'Provides maintenance and consumables management of non-Canon devices, consolidating your entire print fleet into a single contract for simplified operations.',
      highlights: ['Multi-brand support', 'Unified consumables', 'Consolidated billing', 'Single contract'],
      image: 'https://images.unsplash.com/photo-1517694712202-14819c9cb6e1?q=80&w=800'
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

  // MPS Infrastructure/Tools
  const tools = [
    {
      name: 'uniFLOW',
      description: 'Integrated software solution managing all your devices, print and scan workflows through one unified platform',
      features: ['Device management', 'Workflow automation', 'User access control', 'Real-time monitoring']
    },
    {
      name: 'eMaintenance',
      description: 'Automate time-consuming administration tasks to focus on strategic initiatives',
      features: ['Automated alerts', 'Predictive maintenance', 'Supply ordering', 'Workload balancing']
    },
    {
      name: 'SiteAudit',
      description: 'Gain actionable business intelligence with fleet data collection, analysis, alerting and reporting',
      features: ['Data analytics', 'Performance metrics', 'Cost analysis', 'Trend reporting']
    },
    {
      name: 'CRS Online',
      description: 'Drive continuous improvement of your print performance through ongoing reporting and insights',
      features: ['Usage reporting', 'Cost tracking', 'Performance KPIs', 'Recommendations']
    }
  ];

  // Five-step approach
  const approach = [
    {
      step: '01',
      title: 'Assess',
      description: 'Evaluate your print and document workflows to understand digital maturity and identify improvements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create a bespoke digital transformation journey tailored to your unique business needs'
    },
    {
      step: '03',
      title: 'Transition',
      description: 'Ensure seamless transition leveraging our skills, knowledge and proven experience'
    },
    {
      step: '04',
      title: 'Maintain',
      description: 'Proactively support your print environment to ensure optimal fleet and workflow performance'
    },
    {
      step: '05',
      title: 'Improve',
      description: 'Make continuous improvements based on service and performance reports'
    }
  ];

  const ServiceIcon = ({ Icon }) => <Icon className="w-5 h-5" />;

  return (
    <div className="min-h-screen bg-white text-[#191c1d] font-['Manrope',sans-serif]">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: '#0a1428' }}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#00d27b]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#00b8d4]/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="space-y-8 max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00d27b]/30 bg-[#00d27b]/10 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#00d27b] animate-pulse"></div>
              <span className="text-[#00d27b] text-sm font-medium">Optimized Print Environment</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Managed Print Services
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Create an optimized, secure and sustainable print and scan environment with our comprehensive services and solutions. Available via cloud, hybrid setup, or on-premise—seamlessly integrated with your hybrid workspace needs.
            </p>



            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl font-black text-[#00d27b]">50%</p>
                <p className="text-white/60 text-sm">Rank MPS in top 3 priorities</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#00b8d4]">100%</p>
                <p className="text-white/60 text-sm">Proactive Fleet Support</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ffd93d]">24/7</p>
                <p className="text-white/60 text-sm">Enterprise Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== KEY BENEFITS SECTION ==================== */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

      {/* ==================== OUR APPROACH SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Our Five-Step Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology to optimize your print environment and drive digital transformation
            </p>
          </div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#00d27b] via-[#00b8d4] to-[#ffd93d]"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {approach.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Step number background */}
                  <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all text-center h-full flex flex-col justify-center">
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#00d27b] flex items-center justify-center font-black text-white text-xl shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-black text-[#191c1d] mb-4 mt-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MPS SERVICES SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Comprehensive MPS Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored services designed to fit your business' unique needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {mpsServices.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl font-bold text-sm transition-all duration-300 flex flex-col items-center gap-2 ${
                    selectedService === service.id
                      ? 'bg-[#00d27b] text-white shadow-lg scale-105'
                      : 'bg-white text-[#191c1d] border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline text-xs">{service.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Service Detail Card */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={mpsServices.find(s => s.id === selectedService)?.image}
                  alt="Service"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  {(() => {
                    const service = mpsServices.find(s => s.id === selectedService);
                    const Icon = service.icon;
                    return (
                      <>
                        <div className="w-16 h-16 rounded-xl bg-[#00d27b]/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#00d27b]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-[#191c1d]">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {mpsServices.find(s => s.id === selectedService)?.fullDesc}
                </p>

                <div className="space-y-3 mb-8">
                  {mpsServices.find(s => s.id === selectedService)?.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#00d27b] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MPS INFRASTRUCTURE SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              MPS Infrastructure & Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Robust software solutions covering your entire print environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#00d27b]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d27b]/5 rounded-full blur-3xl group-hover:bg-[#00d27b]/10 transition-all -z-10"></div>

                <h3 className="text-2xl font-black text-[#191c1d] mb-3 flex items-center gap-3 group-hover:text-[#00d27b] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#00d27b]"></span>
                  {tool.name}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="space-y-2">
                  {tool.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d27b]"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
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
            <h2 className="text-5xl font-black text-[#191c1d] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Additional Support Services
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
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">On-site Fleet Maintenance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated Canon on-site engineer offering rapid fleet support optimization to ensure high availability and user satisfaction.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00b8d4]/10 flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6 text-[#00b8d4]" />
              </div>
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">On-site Fleet Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Canon support for day-to-day print and scan environment at large sites, providing incident triage and device hygiene activities.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#ffd93d]/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#ffd93d]" />
              </div>
              <h3 className="text-xl font-bold text-[#191c1d] mb-3">Hybrid Workspace Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless working between home and office environments through one single contract, enabling efficient and productive work anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ManagedPrintServices;