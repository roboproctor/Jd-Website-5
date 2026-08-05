import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  CheckCircle2, 
  ChevronRight,
  Sliders,
  DollarSign,
  PackageCheck
} from 'lucide-react';

interface IrayDRSectionProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const IrayDRSection: React.FC<IrayDRSectionProps> = ({ 
  darkMode, 
  onOpenQuoteModal 
}) => {
  // Configurator State
  const [panelType, setPanelType] = useState<'1417_wireless' | '1717_tethered' | 'dual_panel'>('1417_wireless');
  const [includePC, setIncludePC] = useState<boolean>(true);
  const [installationNeeded, setInstallationNeeded] = useState<boolean>(true);

  // Price Calculation
  const basePrices = {
    '1417_wireless': 13000,
    '1717_tethered': 13500,
    'dual_panel': 22500,
  };

  const calculatedTotal = basePrices[panelType] + (includePC ? 0 : -800) + (installationNeeded ? 500 : 0);

  const valueProps = [
    {
      title: 'Industry-Leading Resolution & Speed',
      description: 'Ultra-fast 2.0-second image preview and direct-deposit CsI scintillators deliver high-contrast DICOM imagery at significantly lower X-ray dose.',
      icon: Zap
    },
    {
      title: 'Wireless & Tethered Versatility',
      description: 'Options for 14x17 wireless handheld panels or 17x17 full-field bucky panels designed for room retrofits, mobile carts, and veterinary setups.',
      icon: Monitor
    },
    {
      title: '2-Year Manufacturer Warranty',
      description: 'Full 2-year warranty with local Midwest support from JD Imaging Corp in Mundelein, IL, including emergency advance replacement options.',
      icon: ShieldCheck
    },
    {
      title: 'Easy Retrofit for Existing Rooms',
      description: 'Auto-Exposure Detection (AED) technology allows instant installation without modifying existing X-ray generators or room wiring.',
      icon: PackageCheck
    }
  ];

  return (
    <section id="iray-dr" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Radiology Upgrade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Upgrade Your Practice to Digital Radiology
          </h2>

          <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Brand New iRay DR Flat Panel Systems Starting at $13,000
          </p>

          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Eliminate darkrooms, film processors, and slow CR readers. Upgrade your existing X-ray suite to high-definition digital in under 1 hour.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Generated Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="/src/assets/images/iray_dr_panel_1784758219393.jpg"
                alt="iRay DR Flat Panel Digital Detector System"
                className="w-full h-80 lg:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-slate-900/90 text-white p-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase">
                    iRay Mars Series DR Panel
                  </span>
                  <span className="text-xs font-bold text-yellow-300">
                    From $13,000
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  High-DQE CsI Wireless Flat Panel Detector with Acquisition Station PC
                </p>
              </div>
            </div>
          </div>

          {/* 4 Value Proposition Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueProps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold mb-1.5">
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interactive DR Package Customizer */}
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-6 border-slate-200 dark:border-slate-800 mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                Interactive Configurator
              </span>
              <h3 className="text-2xl font-bold">
                Build & Estimate Your iRay DR System Upgrade
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800">
              <Sliders className="w-4 h-4 text-blue-600" />
              <span>Instant Budgeting Tool</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options Selector */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Panel Choice */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  1. Select DR Flat Panel Detector Model:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setPanelType('1417_wireless')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      panelType === '1417_wireless'
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500'
                        : darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs">14x17 Wireless Csl</div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-1">$13,000 Base</div>
                    <div className="text-[10px] text-slate-500 mt-1">Portable & Table Top</div>
                  </button>

                  <button
                    onClick={() => setPanelType('1717_tethered')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      panelType === '1717_tethered'
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500'
                        : darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs">17x17 Tethered Bucky</div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-1">$13,500 Base</div>
                    <div className="text-[10px] text-slate-500 mt-1">Full Bucky Coverage</div>
                  </button>

                  <button
                    onClick={() => setPanelType('dual_panel')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      panelType === 'dual_panel'
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500'
                        : darkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-xs">Dual Panel System</div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-bold mt-1">$22,500 Base</div>
                    <div className="text-[10px] text-slate-500 mt-1">Wall + Table Combo</div>
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`p-4 rounded-xl border cursor-pointer flex items-start space-x-3 ${
                  includePC 
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40' 
                    : darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={includePC}
                    onChange={(e) => setIncludePC(e.target.checked)}
                    className="mt-1 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <div>
                    <span className="font-bold text-xs block">Acquisition PC Workstation</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Pre-installed DICOM 3.0 software & touchscreen monitor (Included)
                    </span>
                  </div>
                </label>

                <label className={`p-4 rounded-xl border cursor-pointer flex items-start space-x-3 ${
                  installationNeeded 
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40' 
                    : darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={installationNeeded}
                    onChange={(e) => setInstallationNeeded(e.target.checked)}
                    className="mt-1 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <div>
                    <span className="font-bold text-xs block">On-Site Setup & Staff Training</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Dispatched local tech in Northern IL & WI (+$500)
                    </span>
                  </div>
                </label>
              </div>

            </div>

            {/* Price Estimate Summary */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <span className="text-xs uppercase font-extrabold text-blue-600 dark:text-blue-400">
                  Estimated Package Cost
                </span>

                <div className="flex items-baseline space-x-2 my-3">
                  <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    ${calculatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    USD
                  </span>
                </div>

                <ul className="text-xs space-y-2 mb-6">
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span>2-Year Manufacturer Hardware Warranty</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span>Auto-Exposure Detection (AED) Retrofit</span>
                  </li>
                  <li className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                    <span>Free DICOM PACS Integration Guidance</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenQuoteModal(
                  'iray_dr', 
                  `Custom iRay DR Configured Package: ${panelType}, PC Included: ${includePC}, On-site Setup: ${installationNeeded}. Estimated Total: $${calculatedTotal.toLocaleString()}`
                )}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="iray-config-quote-btn"
              >
                <span>Request Formal $13k iRay Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
