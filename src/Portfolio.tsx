import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Download,
  Server, Shield, Network, Cloud, Award, 
  Code, Database, Terminal, 
  ChevronRight, Menu, X,
  CheckCircle2, ArrowUp, Zap, Users, 
  Clock, TrendingUp, Cpu, HardDrive,
  Lock, Wifi, Monitor, Settings
} from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);

      // Update active section
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Vite-friendly asset URL for the CV (served from src/assets)
  const cvUrl = new URL('./assets/Tashen_Rathnayaka_CV.pdf', import.meta.url).href;

  const handleDownloadCV = () => {
    // Use generated asset URL so Vite resolves the file correctly in dev & production
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Tashen_Rathnayaka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Systems & Cloud": [
      { name: "Active Directory", icon: Database },
      { name: "DNS/DHCP", icon: Network },
      { name: "Windows Server", icon: Server },
      { name: "Azure Cloud", icon: Cloud },
      { name: "Hyper-V", icon: Cpu },
      { name: "VMware", icon: HardDrive },
      { name: "Office 365", icon: Mail }
    ],
    "Networking & Security": [
      { name: "Fortinet Firewall", icon: Shield },
      { name: "Cisco Routing", icon: Network },
      { name: "Network Troubleshooting", icon: Settings },
      { name: "Endpoint Security", icon: Lock },
      { name: "Wireless (P2P)", icon: Wifi },
      { name: "Kaspersky", icon: Shield }
    ],
    "Hardware & Support": [
      { name: "Hardware Maintenance", icon: Monitor },
      { name: "CCTV Systems", icon: Monitor },
      { name: "Technical Support", icon: Settings },
      { name: "Remote Desktop", icon: Terminal },
      { name: "Printer Services", icon: HardDrive }
    ]
  };

  const projects = [
    {
      title: "Network Infrastructure Upgrade",
      role: "Team Contributor",
      icon: Network,
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
      achievements: [
        "Deployed high-availability network core with Fortinet Firewall Clusters",
        "Configured Cisco Managed Switches and Access Points",
        "Improved organizational connectivity and coverage"
      ]
    },
    {
      title: "Enterprise Security Migration",
      role: "Implementation Lead",
      icon: Shield,
      color: "from-purple-400 via-fuchsia-500 to-pink-600",
      bgPattern: "radial-gradient(circle at 80% 50%, rgba(192, 132, 252, 0.3) 0%, transparent 50%)",
      achievements: [
        "Migrated 230+ endpoints from ESET to Kaspersky",
        "Configured security policies and scan profiles",
        "Automated deployment via Kaspersky Security Center"
      ]
    },
    {
      title: "Microsoft 365 Deployment",
      role: "Implementation Support",
      icon: Cloud,
      color: "from-blue-400 via-indigo-500 to-purple-600",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
      achievements: [
        "Organization-wide Office 365 rollout",
        "Enabled secure remote work capabilities",
        "Deployed cloud collaboration tools"
      ]
    },
    {
      title: "Virtualization & Core Services",
      role: "System Administrator",
      icon: Server,
      color: "from-emerald-400 via-green-500 to-teal-600",
      bgPattern: "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
      achievements: [
        "Maintained ADDS, DNS, and DHCP on Hyper-V",
        "Hosted ASP.NET applications using IIS",
        "Managed CloudCone VM instances"
      ]
    },
    {
      title: "Infrastructure Monitoring",
      role: "Implementation Team",
      icon: TrendingUp,
      color: "from-orange-400 via-red-500 to-rose-600",
      bgPattern: "radial-gradient(circle at 70% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)",
      achievements: [
        "Deployed Zabbix for real-time monitoring",
        "Implemented Snipe-IT for asset tracking",
        "Increased operational visibility"
      ]
    },
    {
      title: "Data Center Revamp",
      role: "Infrastructure Team",
      icon: Database,
      color: "from-teal-400 via-cyan-500 to-sky-600",
      bgPattern: "radial-gradient(circle at 40% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
      achievements: [
        "Full data center reorganization",
        "Server rack optimization",
        "Improved thermal airflow"
      ]
    }
  ];

  const certifications = [
    { name: "Cisco Certified Network Associate (CCNA)", org: "Innovation Tech IT", status: "In Progress", date: "Target: May 2026", inProgress: true },
    { name: "Firewall Administrator Fortinet (FAC)", org: "Vocational Training Centre", date: "July 2025" },
    { name: "Microsoft Azure Certification", org: "Innovation Tech IT", date: "December 2024" },
    { name: "Network Administration with Security (DNA)", org: "Vocational Training Centre", date: "July 2024" },
    { name: "Diploma in Computer Hardware & Networking", org: "Vocational Training Centre", date: "June 2021" },
    { name: "Certificate of Cyber Security & Networking", org: "NextGen Campus", date: "June 2021" },
    { name: "Fortinet Certified Associate Cybersecurity", org: "Fortinet (Credly)", date: "Verified" },
    { name: "Junior Cybersecurity Analyst Career Path", org: "Cisco (Credly)", date: "Verified" },
    { name: "Network Technician Career Path", org: "Cisco (Credly)", date: "Verified" },
    { name: "IT Essentials", org: "Cisco (Credly)", date: "Verified" },
    { name: "Cybersecurity Essentials", org: "Cisco (Credly)", date: "Verified" },
    { name: "NDG Linux Essentials", org: "Cisco (Credly)", date: "Verified" }
  ];

  const stats = [
    { number: "250+", label: "Users Supported", icon: Users },
    { number: "2+", label: "Years Experience", icon: Clock },
    { number: "12+", label: "Certifications", icon: Award },
    { number: "99%", label: "Uptime Achieved", icon: TrendingUp }
  ];

  return (
    <>
      {/* Custom CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}} />

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-100 bg-slate-950 flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono">
              <Terminal className="w-5 h-5" />
              <span className="text-lg">Loading Portfolio...</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`min-h-screen bg-slate-950 text-gray-100 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">&lt;TR/&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="px-6 py-2.5 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-18.25 bg-slate-950/98 backdrop-blur-xl z-40 overflow-y-auto">
          <div className="py-6 px-6 space-y-2 max-w-7xl mx-auto">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-base text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {item}
              </button>
            ))}
            {/* Download CV Button for Mobile */}
            <button
              onClick={handleDownloadCV}
              className="w-full mt-6 px-4 py-4 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 text-white"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-mono">
                <Zap className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>

              <div>
                <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                  <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Tashen
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Rathnayaka
                  </span>
                </h1>
                <p className="text-2xl text-cyan-400 font-mono mb-4">IT Executive & Network Engineer</p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Proactive IT professional with 2+ years of hands-on experience managing complex IT environments for 250+ users. 
                  Specialized in Hyper-V virtualization, Fortinet security, and Cisco networking infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  Get In Touch
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:border-cyan-500 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                  View Experience
                  <Code className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="relative opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              <div className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 backdrop-blur-xl">
                <div className="absolute -top-3 -right-3 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                            <Icon className="w-6 h-6 text-cyan-400" />
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Who I Am</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Committed to reducing downtime through proactive maintenance and delivering high-tier technical support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Server className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infrastructure Expert</h3>
              <p className="text-gray-400">
                Designed and deployed core server infrastructure including Active Directory, DNS, and DHCP, improving network reliability for 250+ users.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Focused</h3>
              <p className="text-gray-400">
                Secured network perimeter by implementing and managing Fortinet firewall policies, reducing unauthorized access attempts and optimizing traffic flow.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-green-500/50 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Network className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connectivity Solutions</h3>
              <p className="text-gray-400">
                Extended network connectivity to remote buildings by deploying point-to-point wireless links, eliminating dead zones and supporting business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Career Journey</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building robust IT infrastructure and delivering exceptional technical support
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 to-purple-500 hidden lg:block"></div>

            <div className="space-y-12">
              <div className="relative lg:pl-20">
                <div className="absolute left-6 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 hidden lg:block"></div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">IT Executive</h3>
                      <p className="text-cyan-400 font-semibold mb-2">D.J. Group of Companies</p>
                      <p className="text-gray-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Batapola, Sri Lanka
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-mono text-sm">
                      May 2023 - Present
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Maintained hardware systems for 250+ users, reducing equipment downtime by 1% through proactive servicing",
                      "Managed network devices including routers, switches, and structured cabling",
                      "Designed and deployed core server infrastructure on Hyper-V, including Active Directory, DNS, and DHCP",
                      "Extended network connectivity to remote buildings by deploying point-to-point wireless links",
                      "Secured network perimeter by implementing and managing Fortinet firewall policies",
                      "Provided technical support using VNC, AnyDesk, and RDP tools",
                      "Installed and upgraded CCTV systems, printers, and networking hardware"
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3 text-gray-400">
                        <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Technical Expertise</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive skill set across systems, networking, and security
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div key={catIndex} className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">{category}</h3>
                <div className="space-y-4">
                  {items.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Key Contributions</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects & Infrastructure</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Major infrastructure projects and technical implementations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className={`relative bg-linear-to-r ${project.color} p-8 overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: project.bgPattern
                      }}
                    ></div>
                    
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h3>
                        <p className="text-white/90 text-sm font-mono font-semibold uppercase tracking-wider">{project.role}</p>
                      </div>
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Decorative bottom edge */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
                  </div>

                  <div className="p-6 bg-linear-to-b from-slate-900/30 to-slate-900/50">
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 hover:text-gray-300 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Credentials</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`bg-slate-900/50 border rounded-xl p-6 transition-all ${
                cert.inProgress 
                  ? 'border-yellow-500/50 hover:border-yellow-500' 
                  : 'border-slate-800 hover:border-green-500/50'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-400 font-mono mb-2">{cert.org}</p>
                    <p className={`text-xs font-mono ${
                      cert.inProgress ? 'text-yellow-400' : 'text-cyan-400'
                    }`}>{cert.date}</p>
                  </div>
                  <div className={`p-2 rounded-full ${
                    cert.inProgress 
                      ? 'bg-yellow-500/10' 
                      : 'bg-green-500/10'
                  }`}>
                    {cert.inProgress ? (
                      <Clock className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                </div>
                {cert.inProgress && (
                  <div className="mt-3 pt-3 border-t border-yellow-500/20">
                    <div className="flex items-center gap-2 text-xs text-yellow-400">
                      <Zap className="w-3 h-3" />
                      <span>Currently Studying</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Get In Touch</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open to new opportunities and collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:info.tashenr@gmail.com" className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400 break-all">info.tashenr@gmail.com</p>
            </a>

            <a href="tel:+94705084034" className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-400">+94 70 508 4034</p>
            </a>

            <a href="https://www.linkedin.com/in/tashen-rathnayaka-b07ba9263/" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">Tashen Rathanayaka</p>
            </a>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-gray-400">Batapola, Meetiyagoda<br />Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm font-mono">
              &lt;/&gt; Designed by Tashen Rathnayaka | © 2026 All Right Reserved
            </p>
            <div className="flex gap-4">
              <a href="mailto:info.tashenr@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/10 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="https://linkedin.com/in/tashen-rathanayaka" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/10 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-1 z-50"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
      </div>
    </>
  );
};

export default Portfolio;
