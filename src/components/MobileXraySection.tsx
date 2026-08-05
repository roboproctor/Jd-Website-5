import React, { useState } from 'react';
import { 
  Truck, 
  ShieldCheck, 
  Zap, 
  Battery, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Layers,
  Video
} from 'lucide-react';
import { EQUIPMENT_CATALOG } from '../data/mockData';

interface MobileXraySectionProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const MobileXraySection: React.FC<MobileXraySectionProps> = ({ 
  darkMode, 
  onOpenQuoteModal 
}) => {
  const [activeTab, setActiveTab] = useState<'BUY' | 'RENT'>('RENT');

  const mobileUnits = EQUIPMENT_CATALOG.filter(item => item.category === 'mobile_xray');

  return (
    <section id="mobile-xrays" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            <span>Mobile & Portable Radiology Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Refurbished Sedecal & Portable Digital X-Ray Fleet
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Bedside imaging solutions for urgent cares, nursing facilities, orthopedic centers, and mobile diagnostic fleets across Illinois & Wisconsin.
          </p>

          {/* Program Details Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs sm:text-sm font-semibold flex flex-wrap items-center justify-around gap-4 border border-blue-700">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>3-Month System Parts Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>2-Year Warranty on iRay DR Panels</span>
            </div>
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4 text-blue-300" />
              <span>Includes Staff Training Videos & Setup Support</span>
            </div>
          </div>
        </div>

        {/* Buy vs Rent Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-200 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800 flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('RENT')}
              className={`px-6 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                activeTab === 'RENT'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              id="tab-rent-mobile-btn"
            >
              Rental & Lease Fleet Options
            </button>
            <button
              onClick={() => setActiveTab('BUY')}
              className={`px-6 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                activeTab === 'BUY'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              id="tab-buy-mobile-btn"
            >
              Buy Refurbished Digital Systems
            </button>
          </div>
        </div>

        {/* Mobile Units Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mobileUnits.map((unit) => (
            <div 
              key={unit.id}
              className={`p-6 rounded-3xl border transition-all duration-200 hover:shadow-xl flex flex-col justify-between ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-full uppercase">
                    {unit.brand}
                  </span>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">
                    {activeTab === 'RENT' ? 'Rental Available - Flexible Terms' : unit.priceDisplay}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {unit.name}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {unit.description}
                </p>

                {/* Specs Box */}
                <div className={`p-4 rounded-xl border mb-6 ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-[11px] font-extrabold uppercase text-blue-600 dark:text-blue-400 block mb-2">
                    System Technical Specifications:
                  </span>
                  <ul className="text-xs space-y-2">
                    {unit.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold text-slate-500">
                  {unit.warranty}
                </span>

                <button
                  onClick={() => onOpenQuoteModal(
                    activeTab === 'RENT' ? 'portable_rent' : 'portable_buy',
                    `Inquiry for ${unit.name} (${activeTab === 'RENT' ? 'Rental Request' : 'Purchase Request'}).`
                  )}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center space-x-1.5 cursor-pointer shrink-0"
                  id={`quote-mobile-${unit.id}`}
                >
                  <span>{activeTab === 'RENT' ? 'Request Rental Rate' : 'Inquire To Purchase'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
