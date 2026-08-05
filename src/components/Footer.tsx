import React, { useState } from 'react';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  X 
} from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenQuoteModal }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors text-xs ${
      darkMode ? 'bg-slate-950 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-300'
    }`}>
      {/* Top Partner Ecosystem Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 py-4 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              Partner Ecosystem
            </span>
            <div className="h-3 w-[1px] bg-slate-300 dark:bg-slate-700" />
            <div className="flex flex-wrap gap-4 font-black italic text-sm text-slate-700 dark:text-slate-300 opacity-80">
              <span>SEDECAL</span>
              <span>FUJIFILM</span>
              <span>iRay</span>
              <span>SUMMIT</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#remote-support"
              onClick={() => scrollTo('#remote-support')}
              className="bg-blue-900 hover:bg-blue-800 text-[10px] uppercase font-bold text-white px-3 py-1.5 rounded transition-colors"
            >
              Remote Access Tool
            </a>
            <a
              href="#billing"
              onClick={() => scrollTo('#billing')}
              className="border border-slate-300 dark:border-slate-700 text-[10px] uppercase font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 px-3 py-1.5 rounded transition-colors"
            >
              Online Billing
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex items-center justify-center text-white font-black text-base tracking-tighter shadow-md border border-blue-400/30 ring-1 ring-blue-500/20 shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent top-1/2 -translate-y-1/2" />
                <span className="relative z-10 bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent italic font-extrabold pr-0.5">
                  JD
                </span>
                <div className="absolute top-1 right-1 w-1.2 h-1.2 rounded-full bg-cyan-400 shadow-xs shadow-cyan-400" />
              </div>

              <div className="flex flex-col leading-tight">
                <div className="flex items-center space-x-1">
                  <span className="text-blue-950 dark:text-white font-black text-base tracking-tight font-sans">
                    JD IMAGING
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold text-base tracking-tight">
                    CORP.
                  </span>
                </div>
                <span className="text-[9px] font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-widest">
                  MEDICAL IMAGING SPECIALISTS
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Based in Lake County, Illinois, we deploy highly experienced white-label field technicians to handle on-site service across Northern Illinois, Chicagoland, and Southern Wisconsin.
            </p>

            <div className="flex items-center space-x-2 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Over 35 Years of Radiology Technical Expertise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider block mb-3">
              Services & Products
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('#iray-dr')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  iRay DR Flat Panels ($13k)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#field-service')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Field Service (IL & WI)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#fuji-repairs')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Fuji CR Reader Repairs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#mobile-xrays')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Mobile & Portable X-Rays
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#products')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Partner Brands Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Client Portals */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider block mb-3">
              Support & Accounts
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('#remote-support')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Remote Technical Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#billing')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Billing & Online Payments
                </button>
              </li>
              <li>
                <button onClick={() => onOpenQuoteModal()} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  Request Service Quote
                </button>
              </li>
              <li>
                <button onClick={() => onOpenQuoteModal('field_partner')} className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">
                  OEM Partner Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider block mb-3">
              Mundelein HQ
            </span>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>1421 Armour Blvd<br />Mundelein, IL 60060</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:8473675920" className="hover:text-blue-600 dark:hover:text-white font-bold">(847) 367-5920</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:jdicorp@gmail.com" className="hover:text-blue-600 dark:hover:text-white">jdicorp@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4">
          <p>© {new Date().getFullYear()} JD Imaging Corp. All Rights Reserved. Technical Support: (847) 367-5920</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-blue-600 dark:hover:text-white underline cursor-pointer"
            >
              Privacy Policy & HIPAA Notice
            </button>
            <span>|</span>
            <span>Territory: Northern IL & Southern WI</span>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="max-w-lg w-full bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold mb-3">Privacy Policy & Patient Data Compliance</h3>

            <div className="text-xs text-slate-300 space-y-3 max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>JD Imaging Corp.</strong> is committed to maintaining strict HIPAA-compliant data practices when servicing diagnostic imaging hardware, PACS workstations, and DICOM gateways.
              </p>
              <p>
                <strong>Data Handling:</strong> When performing hard drive cloning, database recovery, or remote software troubleshooting, all patient healthcare information (PHI) remains secure and strictly within client authorized boundaries.
              </p>
              <p>
                <strong>Contact Information:</strong> Information submitted via service request forms is utilized solely to dispatch regional field service engineers or fulfill equipment quote requests.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
