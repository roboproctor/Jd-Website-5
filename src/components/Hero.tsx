import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Award, 
  Wrench, 
  ChevronRight, 
  Sparkles,
  Zap
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenQuoteModal }) => {
  return (
    <section id="home" className={`relative overflow-hidden py-12 lg:py-16 transition-colors ${
      darkMode ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white' : 'bg-blue-900 text-white'
    }`}>
      {/* Background Abstract Medical Grid */}
      <div className="absolute inset-0 opacity-10 bg-medical-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text & Call-To-Actions */}
          <div className="lg:col-span-8 flex flex-col space-y-5">
            
            {/* Top Regional Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-800/80 text-blue-200 border border-blue-700/60 rounded-full px-3.5 py-1 w-fit">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest">
                Lake County, IL Hub • Between Chicago & Milwaukee
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              Your Highly Experienced White-Label <br className="hidden sm:inline" />
              <span className="text-blue-400 font-medium italic">Field Service Team</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-normal">
              Based in Lake County, Illinois, we deploy highly experienced white-label field technicians to handle on-site service. Combining top-tier technical talent—across electronics, software, and mechanical systems—with exceptional people skills, we act as a seamless, high-performing extension of your brand.
            </p>

            {/* Prominent Direct Phone Dispatch Card */}
            <div className="p-4 rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white animate-bounce" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-extrabold text-blue-300 tracking-widest">
                    Direct Field Service & Technical Dispatch
                  </span>
                  <a href="tel:8473675920" className="text-xl sm:text-2xl font-black text-white hover:text-blue-300 transition-colors tracking-tight font-mono">
                    (847) 367-5920
                  </a>
                  <span className="text-[11px] text-slate-300">
                    Call directly for immediate field engineer dispatch, white-label contracts & site support.
                  </span>
                </div>
              </div>

              <a
                href="tel:8473675920"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg text-center shadow-lg transition-all shrink-0"
              >
                Call Now
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onOpenQuoteModal('field_partner')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-xl transition-all cursor-pointer active:scale-95 flex items-center space-x-2"
                id="hero-partner-btn"
              >
                <span>Partner With Our Field Engineers</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#iray-dr"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all flex items-center space-x-2"
                id="hero-iray-btn"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>$13k iRay DR Upgrades</span>
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold">35+ Years</span>
                  <span className="text-[10px] text-slate-300">Radiology Tech Expertise</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold">White-Label</span>
                  <span className="text-[10px] text-slate-300">OEM Representation</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold">On-Site Field Service</span>
                  <span className="text-[10px] text-slate-300">Repairs & Digital DR</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold">Rapid Dispatch</span>
                  <span className="text-[10px] text-slate-300">Northern IL & Southern WI</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Regional Dispatch Status Card */}
          <div className="lg:col-span-4 relative">
            <div className="bg-slate-800 rounded-lg shadow-2xl border border-white/10 p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">
                    Regional Dispatch Status
                  </span>
                </div>
                <span className="text-[9px] bg-green-900/60 text-green-300 px-2 py-0.5 rounded border border-green-700/50 uppercase font-bold">
                  On Duty
                </span>
              </div>

              <div className="space-y-2.5 mb-4">
                <div className="bg-slate-700/50 p-2.5 rounded flex justify-between items-center border border-white/5">
                  <span className="text-xs text-slate-200 italic font-medium">Greater Chicago Area</span>
                  <span className="text-[10px] bg-green-900 text-green-300 px-2 py-0.5 rounded font-bold uppercase">
                    Available
                  </span>
                </div>

                <div className="bg-slate-700/50 p-2.5 rounded flex justify-between items-center border border-white/5">
                  <span className="text-xs text-slate-200 italic font-medium">Kenosha / Milwaukee</span>
                  <span className="text-[10px] bg-green-900 text-green-300 px-2 py-0.5 rounded font-bold uppercase">
                    Available
                  </span>
                </div>

                <div className="bg-slate-700/50 p-2.5 rounded flex justify-between items-center border border-white/5">
                  <span className="text-xs text-slate-200 italic font-medium">Rockford & Northern IL</span>
                  <span className="text-[10px] bg-green-900 text-green-300 px-2 py-0.5 rounded font-bold uppercase">
                    Available
                  </span>
                </div>
              </div>

              <div className="bg-blue-600/30 p-3.5 rounded-md border border-blue-400/20">
                <div className="text-[10px] text-blue-200 font-bold uppercase tracking-wider mb-0.5">
                  Direct Field Dispatch Phone
                </div>
                <div className="text-2xl text-white font-mono font-bold tracking-tight">
                  1-847-367-5920
                </div>
                <div className="text-[10px] text-slate-300 mt-1">
                  HQ: 1421 Armour Blvd, Mundelein, IL 60060
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
