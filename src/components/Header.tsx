import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Headphones, 
  CreditCard, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  Activity
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenQuoteModal: (type?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenQuoteModal,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'field-service', label: 'Field Service (IL & WI)', href: '#field-service' },
    { id: 'iray-dr', label: 'iRay DR Systems ($13k)', href: '#iray-dr' },
    { id: 'fuji-repairs', label: 'Equipment & Repairs', href: '#fuji-repairs' },
    { id: 'mobile-xrays', label: 'Mobile X-Rays', href: '#mobile-xrays' },
    { id: 'remote-support', label: 'Remote Support', href: '#remote-support' },
    { id: 'billing', label: 'Billing', href: '#billing' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md transition-colors duration-200">
      {/* Top Special Banner */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 font-medium">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded font-bold uppercase text-[10px] tracking-wider animate-pulse">
              OEM & ISO TECHNICAL FIELD PARTNERS
            </span>
            <span className="hidden md:inline text-slate-300">White-Label Field Engineering & Rapid Regional Dispatch Across IL & WI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400 font-bold hidden sm:inline">iRay DR Systems From $13,000</span>
            <a 
              href="tel:8473675920"
              className="flex items-center space-x-1 text-[11px] text-blue-400 hover:text-blue-300 font-extrabold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call Direct: (847) 367-5920</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Utility Header */}
      <div className={`py-2 px-4 text-xs transition-colors border-b ${
        darkMode ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Top-Left Contact & Address Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
            <a 
              href="tel:8473675920" 
              className="flex items-center space-x-2 font-extrabold text-white hover:text-blue-400 transition-colors bg-blue-600/30 px-2.5 py-0.5 rounded border border-blue-500/40"
              id="header-phone-link"
              title="Call Direct Line"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="tracking-tight text-xs">(847) 367-5920</span>
            </a>

            <div className="flex items-center space-x-1.5 text-slate-200 font-medium text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="font-semibold text-white">1421 Armour Blvd. Mundelein IL. 60060</span>
            </div>

            <a 
              href="mailto:jdicorp@gmail.com" 
              className="hidden lg:flex items-center space-x-1.5 text-slate-300 hover:text-blue-400 transition-colors text-[11px]"
              id="header-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>jdicorp@gmail.com</span>
            </a>
          </div>

          {/* Regional Badge & Quick Access Controls */}
          <div className="flex items-center space-x-3 ml-auto text-[11px]">
            <div className="hidden sm:flex items-center space-x-1 bg-blue-600 text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
              <ShieldCheck className="w-3 h-3" />
              <span>Lake County, IL • Between Chicago & Milwaukee</span>
            </div>

            <a
              href="#remote-support"
              onClick={(e) => scrollToSection(e, '#remote-support')}
              className="flex items-center space-x-1 text-slate-300 hover:text-blue-400 font-medium px-2 py-0.5 rounded transition-colors"
              id="quick-remote-support-btn"
            >
              <Headphones className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Remote Support</span>
            </a>

            <a
              href="#billing"
              onClick={(e) => scrollToSection(e, '#billing')}
              className="flex items-center space-x-1 text-slate-300 hover:text-blue-400 font-medium px-2 py-0.5 rounded transition-colors"
              id="quick-billing-btn"
            >
              <CreditCard className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Billing & Payments</span>
            </a>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`py-2.5 px-4 transition-colors ${
        darkMode ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Compact Brand Logo & Contact Info */}
          <div className="flex items-center space-x-3 shrink-0">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-2.5 group cursor-pointer shrink-0"
              id="brand-logo-btn"
            >
              {/* Compact Monogram Badge */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded bg-blue-900 flex items-center justify-center text-white font-extrabold text-sm sm:text-base italic shadow-xs group-hover:bg-blue-800 transition-colors shrink-0">
                <span>JD</span>
                <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="flex flex-col leading-none">
                <div className="flex items-center space-x-1">
                  <span className="text-blue-950 dark:text-white font-black text-sm sm:text-base tracking-tight font-sans">
                    JD IMAGING
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm sm:text-base tracking-tight">
                    CORP.
                  </span>
                </div>
                <span className="text-[8.5px] sm:text-[9px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
                  Medical Imaging Specialists
                </span>
              </div>
            </a>

            {/* Compact Direct Phone & Address Line (Visible on XL screens) */}
            <div className="hidden xl:flex items-center pl-3.5 border-l border-slate-200 dark:border-slate-800 text-[11px] gap-3">
              <a 
                href="tel:8473675920" 
                className="flex items-center space-x-1 text-xs font-bold text-blue-900 dark:text-blue-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                title="Call Direct Line"
              >
                <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>(847) 367-5920</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-400 font-medium">
                <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>1421 Armour Blvd. Mundelein IL. 60060</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  activeSection === link.id
                    ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 font-bold'
                    : darkMode 
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-100'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer active:scale-95"
              id="nav-primary-cta-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Request Service / Partner With Us</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-3 pt-3 border-t ${
            darkMode ? 'border-slate-800 bg-slate-900/95' : 'border-slate-200 bg-white'
          } rounded-xl p-4 shadow-xl`}>
            <div className="flex flex-col space-y-2">
              <div className="px-3 py-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Regional Coverage: Northern IL & Southern WI
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  id={`mobile-nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2.5 rounded-lg shadow-sm text-center cursor-pointer"
                  id="mobile-menu-cta-btn"
                >
                  Request Service / Partner With Us
                </button>
                <a
                  href="tel:8473675920"
                  className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm py-2 rounded-lg text-center flex items-center justify-center space-x-2"
                  id="mobile-phone-btn"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call (847) 367-5920</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
