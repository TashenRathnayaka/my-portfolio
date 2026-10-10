import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Download,
  Server, Shield, Network, Cloud, Award, 
  Code, Database, Terminal, 
  ChevronRight, Menu, X,
  CheckCircle2, ArrowUp, Zap, Users, 
  Clock, TrendingUp, Cpu, HardDrive,
  Lock, Wifi, Monitor, Settings,
  Boxes, GitBranch, Layers, Activity, ExternalLink,
  MessageSquare, Calendar, Building2, Briefcase,
  GraduationCap, BookOpen
} from 'lucide-react';
import logoImg from './assets/logo.png';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    "DevOps & Automation": [
      { name: "Docker & Containers", icon: Boxes },
      { name: "Kubernetes Orchestration", icon: Layers },
      { name: "CI/CD & Jenkins", icon: GitBranch },
      { name: "Ansible Automation", icon: Terminal },
      { name: "Bash & Shell Scripting", icon: Terminal },
      { name: "Grafana, Nagios & Graylog", icon: Activity },
      { name: "Git & Version Control", icon: Code }
    ],
    "Systems & Cloud": [
      { name: "Active Directory & GPO", icon: Database },
      { name: "Windows Server (2012-2022)", icon: Server },
      { name: "Linux Server Administration", icon: Server },
      { name: "Azure Cloud Management", icon: Cloud },
      { name: "Hyper-V Virtualization", icon: Cpu },
      { name: "VMware vSphere & vCenter", icon: HardDrive },
      { name: "Office 365 & Exchange", icon: Mail },
      { name: "DNS, DHCP & Core Services", icon: Network }
    ],
    "Networking & Security": [
      { name: "Fortinet Firewalls (FortiGate)", icon: Shield },
      { name: "Cisco Routing & Switching (CCNA)", icon: Network },
      { name: "OPNsense & Perimeter Defense", icon: Shield },
      { name: "Network Troubleshooting", icon: Settings },
      { name: "Kaspersky Endpoint Security", icon: Lock },
      { name: "Wireless (P2P) Bridges", icon: Wifi },
      { name: "Threat Analysis & Hardening", icon: Shield }
    ],
    "Hardware & Support": [
      { name: "Hardware Repair & Maintenance", icon: Monitor },
      { name: "CCTV & IP Surveillance", icon: Monitor },
      { name: "Tier 1-3 Technical Support", icon: Settings },
      { name: "Remote Desktop (RDP, VNC, AnyDesk)", icon: Terminal },
      { name: "Printer Services & Peripherals", icon: HardDrive }
    ]
  };

  const projects = [
    {
      title: "Enterprise OPNsense Firewall & Site-to-Site IPsec VPN Deployment",
      company: "DJ Trust",
      date: "Sep 2026 – Sep 2026",
      role: "Network Security Specialist",
      category: "Network & Security",
      icon: Shield,
      color: "from-cyan-500 via-blue-600 to-indigo-700",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Nipuna",
      tags: ["OPNsense", "Fortinet FortiGate", "IPsec IKEv2", "Kea DHCPv4", "Zabbix Telemetry"],
      achievements: [
        "Configured secure IKEv2 site-to-site IPsec VPN tunnels connecting subnets (192.168.65.0/24 to 192.168.34.0/24) with auto-healing via Dead Peer Detection (DPD) and Trap+start rules.",
        "Implemented granular Destination NAT (DNAT), port forwarding, and stateful packet filtering to protect internal assets.",
        "Deployed Kea DHCPv4 service for automated IP address allocation and static client bindings.",
        "Configured WAN/LAN gateway routing alongside FortiGate security policies to manage cross-subnet traffic flow cleanly.",
        "Integrated Zabbix Agent on OPNsense for real-time telemetry, bandwidth tracking, and resource monitoring."
      ]
    },
    {
      title: "Jasmin SMS Gateway Deployment & Configuration on Ubuntu Server",
      company: "DJ Trust",
      date: "Sep 2025 – Dec 2025",
      role: "Telecom & Linux Engineer",
      category: "Telecom & Automation",
      icon: MessageSquare,
      color: "from-emerald-500 via-teal-600 to-cyan-700",
      bgPattern: "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Nipuna & 1 other",
      tags: ["Jasmin SMS Gateway", "Ubuntu Server", "SMPP Protocol", "PostgreSQL", "Python Automation", "REST APIs"],
      achievements: [
        "Architected and deployed a high-availability Jasmin SMS Gateway on Ubuntu Server to serve as the core engine for enterprise-level SMS delivery.",
        "Configured and tested SMPP connectors for reliable, high-throughput messaging with telecom carriers, and HTTP connectors for web service integration.",
        "Designed and managed database layer using PostgreSQL, optimizing schemas for performance, message logging, routing, and user management.",
        "Developed Python automation scripts for user provisioning, route configuration, and real-time monitoring of message queues and delivery reports.",
        "Strengthened system reliability through Linux server hardening, firewall configuration (UFW), and performance tuning to maintain >99% uptime."
      ]
    },
    {
      title: "Ubuntu Server Deployment with Snipe-IT & Zabbix in Hyper-V",
      company: "DJ Trust",
      date: "Jul 2025 – Aug 2025",
      role: "Systems & Monitoring Engineer",
      category: "Systems & Virtualization",
      icon: Activity,
      color: "from-amber-500 via-orange-600 to-red-600",
      bgPattern: "radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Nipuna & 1 other",
      tags: ["Ubuntu Server", "Hyper-V", "Zabbix Monitoring", "Snipe-IT", "Asset Tracking", "LAMP/LEMP"],
      achievements: [
        "Architected and deployed a centralized IT management platform by provisioning multiple Ubuntu Server virtual machines within Hyper-V.",
        "Implemented Snipe-IT to automate and centralize the company's IT asset lifecycle tracking, hardware inventory, and software license auditing.",
        "Deployed and configured Zabbix with custom dashboards, triggers, and proactive alerts to track server health and network performance, reducing MTTR.",
        "Integrated open-source solutions onto a hardened Linux foundation with managed LAMP/LEMP configurations and scheduled backups."
      ]
    },
    {
      title: "Data Center Revamp Solution Implementation",
      company: "DJ Trust (DJ Group of Companies)",
      date: "Feb 2025 – Apr 2025",
      role: "Infrastructure Lead",
      category: "Systems & Virtualization",
      icon: Server,
      color: "from-indigo-500 via-purple-600 to-pink-600",
      bgPattern: "radial-gradient(circle at 70% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Chinthana & 4 others",
      tags: ["Hyper-V Cluster", "Active Directory", "Synology NAS", "Veeam Backup & DR", "Data Center"],
      achievements: [
        "Spearheaded end-to-end design and implementation of a comprehensive data center revamp for DJ Group of Companies, modernizing legacy infrastructure.",
        "Architected and deployed a high-availability Hyper-V server cluster with live migration and dynamic resource allocation to eliminate single points of failure.",
        "Orchestrated seamless migration of all physical and virtual workloads to the new environment with minimal downtime using a phased approach.",
        "Engineered core infrastructure services, including new Active Directory Domain Services forest and Synology NAS redundant storage.",
        "Implemented robust backup and disaster recovery using Veeam Backup & Replication, achieving a 40% application performance improvement."
      ]
    },
    {
      title: "Enterprise-Wide ESET Endpoint Security Deployment",
      company: "DJ Trust",
      date: "Oct 2024 – Dec 2024",
      role: "Cybersecurity Specialist",
      category: "Network & Security",
      icon: Lock,
      color: "from-rose-500 via-red-600 to-orange-600",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Naveen",
      tags: ["ESET Protect", "Endpoint Security", "Policy Configuration", "Intrusion Detection", "Cybersecurity"],
      achievements: [
        "Successfully deployed and configured ESET Endpoint Security across 145 users in the organization, securing all endpoints against modern cyber threats.",
        "Utilized ESET Security Management Center for centralized policy configuration, enforcing standardized antivirus, firewall, and intrusion detection settings.",
        "Executed a streamlined, phased deployment to ensure complete organizational coverage with minimal end-user impact.",
        "Implemented automated monitoring and definition update protocols to maintain a proactive security posture and continuous compliance."
      ]
    },
    {
      title: "FortiGate 120G Firewall Implementation",
      company: "DJ Trust",
      date: "Sep 2024 – Dec 2024",
      role: "Network Security Engineer",
      category: "Network & Security",
      icon: Shield,
      color: "from-blue-500 via-cyan-600 to-teal-600",
      bgPattern: "radial-gradient(circle at 40% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Nipuna",
      tags: ["Fortinet FortiGate 120G", "Next-Gen Firewall", "High Availability (HA)", "SSL-VPN", "VLAN Segmentation"],
      achievements: [
        "Led deployment and configuration of a new FortiGate 120G next-generation firewall to serve as the core network security architecture.",
        "Implemented advanced security services including IPS, application control, and web filtering to proactively block malware and enforce acceptable use policies.",
        "Configured SSL-VPN for secure remote workforce access and established High Availability (HA) cluster to ensure resilience and zero downtime.",
        "Segmented the network using VLANs and security zones to limit lateral movement and contain potential security incidents.",
        "Set up centralized logging and monitoring to track threats and maintain compliance with internal security standards."
      ]
    },
    {
      title: "ASP.NET Web Application Deployment & Server Configuration",
      company: "DJ Trust",
      date: "Nov 2024 – Nov 2024",
      role: "Web & Systems Administrator",
      category: "Cloud & Web",
      icon: Code,
      color: "from-violet-500 via-purple-600 to-indigo-700",
      bgPattern: "radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
      contributors: "Chinthana, INDIKA & 1 other",
      tags: ["Windows Server 2019", "IIS", "Cloudcone", "SSL/HTTPS", "DNS (register.lk)", "ASP.NET"],
      achievements: [
        "Led deployment and configuration of a production-ready Windows Server 2019 instance on Cloudcone to host a live ASP.NET web application.",
        "Built web hosting environment from the ground up: installed and configured IIS, created application pools, and bound site domains.",
        "Managed DNS records (register.lk) and hardened server by configuring Windows Firewall with strict inbound/outbound rules.",
        "Secured web traffic by obtaining and installing trusted SSL certificates, transitioning the site from HTTP to HTTPS.",
        "Performed all configurations remotely using Cloud PC and cPanel management interfaces."
      ]
    },
    {
      title: "Enterprise-Wide Microsoft 365 Deployment & Migration",
      company: "DJ Trust",
      date: "Aug 2024 – Sep 2024",
      role: "Cloud Systems Engineer",
      category: "Cloud & Web",
      icon: Cloud,
      color: "from-sky-500 via-blue-600 to-indigo-600",
      bgPattern: "radial-gradient(circle at 30% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Chinthana & 1 other",
      tags: ["Microsoft 365", "Microsoft Entra ID (Azure AD)", "Exchange Online", "MFA", "Defender"],
      achievements: [
        "Successfully led organizational transition to Microsoft 365, deploying cloud productivity suite to enhance collaboration and security.",
        "Managed complete user lifecycle in Microsoft Entra ID (Azure AD) and configured Exchange Online mailboxes for all employees.",
        "Strengthened security posture by enforcing Multi-Factor Authentication (MFA) and configuring Microsoft 365 Defender portal settings.",
        "Rolled out and configured key applications including Microsoft Teams, SharePoint Online, and OneDrive to centralize communications.",
        "Executed legacy data migration and delivered end-user training to ensure high organizational adoption rates."
      ]
    },
    {
      title: "Virtualized Server Infrastructure Build-Out for UAT & Backup on HP ProLiant",
      company: "DJ Trust",
      date: "Aug 2024 – Sep 2024",
      role: "Virtualization Engineer",
      category: "Systems & Virtualization",
      icon: Cpu,
      color: "from-teal-500 via-emerald-600 to-green-600",
      bgPattern: "radial-gradient(circle at 75% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Chinthana & 1 other",
      tags: ["HP ProLiant DL380 Gen9", "Hyper-V", "UAT Staging", "Backup VM", "Hardware RAID"],
      achievements: [
        "Built and configured dedicated Hyper-V virtualized environment on an HP ProLiant DL380 Gen9 server hosting UAT and Backup infrastructure.",
        "Provisioned and optimized virtual machines for a UAT server to support rigorous database and application testing before production deployment.",
        "Deployed dedicated Backup server VM with high-capacity storage to enhance organizational data protection and disaster recovery capabilities.",
        "Managed resource allocation (vCPU, RAM, storage) and network integration for high performance and seamless operation."
      ]
    },
    {
      title: "Core Windows Server Infrastructure Deployment",
      company: "DJ Trust",
      date: "May 2024 – Jul 2024",
      role: "Systems Administrator",
      category: "Systems & Virtualization",
      icon: Database,
      color: "from-blue-600 via-cyan-600 to-teal-600",
      bgPattern: "radial-gradient(circle at 25% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)",
      contributors: "INDIKA, Chinthana & 1 other",
      tags: ["Windows Server", "Active Directory (AD DS)", "DNS & DHCP", "IIS", "SQL Server"],
      achievements: [
        "Deployed a new multi-role Windows Server to consolidate and host the company's core IT infrastructure services.",
        "Implemented and configured Active Directory for centralized user management, DNS for name resolution, and DHCP for dynamic IP assignment.",
        "Set up IIS for internal web hosting and a database server (SQL Server) for enterprise application data storage.",
        "Ensured all new services were fully integrated into the existing backup and disaster recovery solution."
      ]
    }
  ];

  const certifications = [
    { 
      name: "IDET Certified: DevOps & TechOps Professional Program", 
      org: "IDET (Pvt) Ltd (Transcript: IDET-XZ-2026-0575)", 
      date: "September 2026", 
      status: "Certified",
      tag: "DevOps & Cloud"
    },
    { 
      name: "Cisco Certified Network Associate (CCNA)", 
      org: "Cisco / Pearson Credly Verified (All 3 Modules)", 
      date: "May 2026", 
      status: "Completed",
      tag: "Networking"
    },
    { 
      name: "Fortinet FortiGate 7.6 Operator", 
      org: "Fortinet / Pearson Credly Verified", 
      date: "July 2025", 
      status: "Verified",
      tag: "Cybersecurity"
    },
    { 
      name: "Fortinet Certified Associate Cybersecurity (FCA) & NSE 3", 
      org: "Fortinet / Pearson Credly Verified", 
      date: "January 2025", 
      status: "Verified",
      tag: "Cybersecurity"
    },
    { 
      name: "Fortinet FortiGate 7.4 Operator", 
      org: "Fortinet / Pearson Credly Verified", 
      date: "January 2025", 
      status: "Verified",
      tag: "Cybersecurity"
    },
    { 
      name: "Firewall Administrator Fortinet (FAC)", 
      org: "Vocational Training Centre - Dehiwala", 
      date: "May 2025", 
      status: "Completed",
      tag: "Security"
    },
    { 
      name: "VMware Virtualization 101 (vSphere & vCenter)", 
      org: "VMware Learning Platform (HOL-2410-01-SDC)", 
      date: "October 2024", 
      status: "Verified",
      tag: "Virtualization"
    },
    { 
      name: "Microsoft Azure Certification Course", 
      org: "Innovation Tech IT", 
      date: "December 2024", 
      status: "Completed",
      tag: "Cloud"
    },
    { 
      name: "Computer Networking & Security Technology Technician", 
      org: "Vocational Training Centre - Dehiwala", 
      date: "June 2024", 
      status: "Merit Pass",
      tag: "Networking"
    },
    { 
      name: "Junior Cybersecurity Analyst Career Path", 
      org: "Cisco / Pearson Credly Verified", 
      date: "July 2025", 
      status: "Verified",
      tag: "Cybersecurity"
    },
    { 
      name: "Network Technician Career Path", 
      org: "Cisco / Pearson Credly Verified", 
      date: "January 2025", 
      status: "Verified",
      tag: "Networking"
    },
    { 
      name: "IT Essentials & Customer Support Basics", 
      org: "Cisco / Pearson Credly Verified", 
      date: "May 2025 - Jan 2026", 
      status: "Verified",
      tag: "IT Support"
    },
    { 
      name: "NDG Linux Essentials & Linux Unhatched", 
      org: "NDG / Cisco Networking Academy (Credly)", 
      date: "Sept - Dec 2024", 
      status: "Verified",
      tag: "Linux"
    },
    { 
      name: "Diploma in Computer Hardware & Networking", 
      org: "Vocational Training Centre - Dehiwala", 
      date: "June 2021", 
      status: "Distinction Pass (91%)",
      tag: "Hardware"
    },
    { 
      name: "Certificate in Cyber Security & Networking", 
      org: "NextGen Campus", 
      date: "June 2021", 
      status: "Completed",
      tag: "Security"
    },
    { 
      name: "LFC101: Inclusive Speaker Orientation", 
      org: "The Linux Foundation / Credly", 
      date: "April 2026", 
      status: "Verified",
      tag: "Open Source"
    },
    { 
      name: "Certificate in Computer Literacy", 
      org: "The Open University of Sri Lanka", 
      date: "June 2020", 
      status: "Completed",
      tag: "IT Literacy"
    }
  ];

  const stats = [
    { number: "250+", label: "Users Supported", icon: Users },
    { number: "3+", label: "Years Experience", icon: Clock },
    { number: "22+", label: "Certifications & Badges", icon: Award },
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
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-2xl"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-purple-500 rounded-2xl animate-spin"></div>
              <img src={logoImg} alt="Tashen Rathnayaka Logo" className="w-16 h-16 rounded-xl object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            </div>
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono">
              <Terminal className="w-5 h-5 animate-pulse" />
              <span className="text-lg tracking-wider">Tashen Rathnayaka</span>
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
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]">
                <img src={logoImg} alt="Tashen Rathnayaka Logo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-mono tracking-tight bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-400 transition-all">
                  Tashen Rathnayaka
                </span>
                <span className="text-[11px] font-mono text-cyan-400/80 -mt-1 tracking-wider flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  DevOps, Systems & Networks
                </span>
              </div>
            </a>

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
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-mono">
                  <Zap className="w-4 h-4" />
                  <span>Available for Opportunities</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-mono">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  <span>BSc (Hons) Networks & Security Undergraduate</span>
                </div>
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
                <p className="text-2xl text-cyan-400 font-mono mb-2">IT Executive | DevOps, Systems & Network Engineer</p>
                <div className="text-sm font-mono text-purple-300/90 mb-4 flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    BSc (Hons) Candidate • Wrexham University (UK) / Londontec City Campus
                  </span>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Proactive IT professional with 3+ years of enterprise experience managing complex IT environments for 250+ users at DJ Trust. 
                  Currently pursuing a BSc (Hons) in Computer Networks and Security (Wrexham University - UK at Londontec City Campus). 
                  Specialized in VMware & Hyper-V virtualization, Fortinet & Cisco infrastructure, and modern DevOps automation (Docker, Kubernetes, Linux, Python).
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
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-800 relative z-10">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0 bg-slate-950">
                    <img src={logoImg} alt="Tashen Rathnayaka Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Verified Enterprise Profile
                    </div>
                    <div className="text-xl font-bold text-white tracking-wide">Tashen Rathnayaka</div>
                    <div className="text-xs text-gray-400 font-mono">DevOps, Systems & Network Engineer</div>
                    <div className="text-[11px] text-purple-400 font-mono mt-0.5">BSc (Hons) Networks & Security (Undergraduate)</div>
                  </div>
                </div>
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

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all shadow-xl backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-2xl font-bold text-white">Information Technology Executive</h3>
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-mono text-xs">Full-time · On-site</span>
                      </div>
                      <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-cyan-400" />
                        DJ Trust
                      </p>
                      <p className="text-gray-400 flex items-center gap-2 text-sm font-mono">
                        <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                        Kahawa - Batapola Rd, Batapola 80320, Sri Lanka
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-mono text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Jun 2023 - Present · 3 yrs 5 mos
                      </div>
                      <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Enterprise Administration
                      </span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold text-cyan-400 font-mono">// Executive Overview: </span>
                    Managed and optimized enterprise IT infrastructure for 250+ users, ensuring high system availability, centralized domain management, and network security.
                  </div>

                  {/* Key Responsibilities & Achievements Grid */}
                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Key Responsibilities & Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          area: "Infrastructure & Server Administration",
                          desc: "Deployed and maintained Windows Server (Active Directory, DNS, DHCP) and Ubuntu Server environments for centralized domain control.",
                          icon: Server
                        },
                        {
                          area: "Virtualization",
                          desc: "Configured and managed Hyper-V and VMware virtualized environments to host critical business applications.",
                          icon: Cpu
                        },
                        {
                          area: "Network & Security",
                          desc: "Configured Cisco switches (VLANs, routing), Fortinet Firewall security policies, and point-to-point wireless links to extend connectivity.",
                          icon: Shield
                        },
                        {
                          area: "Endpoint Protection",
                          desc: "Successfully migrated and managed Kaspersky Endpoint Security across 250+ endpoints using Kaspersky Security Center (KSC).",
                          icon: Lock
                        },
                        {
                          area: "Monitoring & Asset Management",
                          desc: "Deployed Zabbix on Ubuntu Server for real-time network monitoring and Snipe-IT for automated IT asset tracking.",
                          icon: Activity
                        },
                        {
                          area: "Technical Support & Operations",
                          desc: "Provided Tier 1/2 technical support for hardware, multi-functional printers, CCTV systems, and remote support via RDP, VNC, and AnyDesk.",
                          icon: Settings
                        }
                      ].map((item, index) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/30 transition-all flex gap-3 group">
                            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors shrink-0 h-fit mt-0.5">
                              <ItemIcon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                              <div className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors">{item.area}</div>
                              <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Associated Skills */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-gray-400 mb-2.5">// Associated Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "System Administration", "Network Administration", "Windows Server", "Active Directory",
                        "Ubuntu Server", "Hyper-V", "VMware vSphere", "Fortinet FortiGate", "Cisco Switches",
                        "Kaspersky KSC", "Zabbix", "Snipe-IT", "Veeam Backup", "P2P Wireless", "Remote Support (RDP/AnyDesk)"
                      ].map((skill, index) => (
                        <span key={index} className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-xs text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
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
          <div className="text-center mb-10">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Enterprise & Collaborative Implementations</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects & Infrastructure</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
              Production deployments, enterprise security architectures, and automation systems delivered at DJ Trust
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-cyan-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cross-Functional Team Collaboration: Delivered in partnership with technical teams and project leads at DJ Trust</span>
            </div>
          </div>

          {/* Project Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {[
              { id: 'All', label: 'All Projects', count: projects.length },
              { id: 'Network & Security', label: 'Network & Security', count: projects.filter(p => p.category === 'Network & Security').length },
              { id: 'Systems & Virtualization', label: 'Systems & Virtualization', count: projects.filter(p => p.category === 'Systems & Virtualization').length },
              { id: 'Telecom & Automation', label: 'Telecom & Automation', count: projects.filter(p => p.category === 'Telecom & Automation').length },
              { id: 'Cloud & Web', label: 'Cloud & Web', count: projects.filter(p => p.category === 'Cloud & Web').length },
            ].map(tab => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-linear-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/40'
                      : 'bg-slate-900/80 border border-slate-800 text-gray-400 hover:text-white hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                    isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
              .map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col backdrop-blur-sm">
                    {/* Project Header Banner */}
                    <div className={`relative bg-linear-to-r ${project.color} p-6 sm:p-8 overflow-hidden`}>
                      {/* Animated background pattern */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{ background: project.bgPattern }}
                      ></div>
                      
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-md text-[11px] font-mono text-cyan-200 border border-white/20">
                              {project.category}
                            </span>
                            <span className="px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-md text-[11px] font-mono text-white/90">
                              {project.date}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md leading-tight">{project.title}</h3>
                          <p className="text-white/90 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                            <span>{project.role}</span>
                            <span className="opacity-60">•</span>
                            <span className="text-cyan-200">{project.company}</span>
                          </p>
                        </div>
                        <div className="p-3.5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                          <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Contributor Pill */}
                      {project.contributors && (
                        <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs text-white/90 font-mono border border-white/10">
                          <Users className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Contributors: {project.contributors}</span>
                        </div>
                      )}

                      {/* Decorative bottom edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
                    </div>

                    {/* Project Body */}
                    <div className="p-6 bg-slate-900/40 flex-1 flex flex-col justify-between">
                      {/* Tech Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5 pb-5 border-b border-slate-800">
                          {project.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-cyan-300">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Achievements List */}
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-300 hover:text-white transition-colors leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
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
          <div className="text-center mb-12">
            <div className="inline-block text-cyan-400 font-mono text-sm mb-4">// Academic Degrees & Professional Credentials</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Higher education degree studies alongside industry-recognized credentials verified through Pearson Credly, Cisco Academy, and IDET
            </p>
          </div>

          {/* Higher Education Degree Featured Card */}
          <div className="mb-14 relative overflow-hidden rounded-2xl bg-linear-to-r from-purple-950/40 via-slate-900/80 to-slate-900/60 border border-purple-500/30 p-8 shadow-2xl backdrop-blur-sm group hover:border-purple-400/60 transition-all">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-400 transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-xs font-semibold">
                      Higher Education Degree Programme
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-300 font-mono text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Eligibility Confirmed • Active Undergraduate
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    BSc (Hons) Computer Networks and Security
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-300 font-mono mb-3">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      Awarded by Wrexham University — United Kingdom
                    </span>
                    <span className="opacity-50 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      Londontec City Campus, Colombo / Nugegoda
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
                    Pursuing specialized British degree education in modern cyber defense, enterprise routing & switching architecture, advanced network security protocols, threat analysis, and digital infrastructure resilience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 font-mono text-xs">
                <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-gray-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Commencing: 11th Oct 2026</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-purple-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Status: BSc (Hons) Undergraduate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Industry Certifications & Professional Credentials
              </h3>
              <p className="text-sm text-gray-400">22+ Verified credentials across Networking, Security, Linux, and Cloud</p>
            </div>
            <a 
              href="https://www.credly.com/users/tashen-rathnayaka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-all font-mono text-sm"
            >
              <Award className="w-4 h-4" />
              <span>Verify Official Badges on Pearson Credly</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {cert.tag && (
                      <span className="inline-block px-2.5 py-0.5 mb-2 rounded text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {cert.tag}
                      </span>
                    )}
                    <h3 className="font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">{cert.name}</h3>
                    <p className="text-sm text-gray-400 font-mono mb-2">{cert.org}</p>
                    <p className="text-xs font-mono text-cyan-400">{cert.date}</p>
                  </div>
                  <div className="p-2 rounded-full bg-green-500/10 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    {cert.status}
                  </span>
                  <span className="text-gray-500">Verified</span>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

            <a href="https://www.linkedin.com/in/tashen-rathnayaka/" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">Tashen Rathnayaka</p>
            </a>

            <a href="https://www.credly.com/users/tashen-rathnayaka" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2">Credly</h3>
              <p className="text-sm text-gray-400">Verified Badges</p>
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
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/30">
                <img src={logoImg} alt="Tashen Rathnayaka Logo" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-400 text-sm font-mono">
                Designed & Built by <span className="text-cyan-400 font-semibold">Tashen Rathnayaka</span> | © 2026 All Rights Reserved
              </p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:info.tashenr@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/10 transition-colors" title="Email">
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="https://linkedin.com/in/tashen-rathnayaka/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500/10 transition-colors" title="LinkedIn">
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
