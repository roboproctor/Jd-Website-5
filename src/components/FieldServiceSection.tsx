import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Wrench, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Send,
  Users,
  Briefcase
} from 'lucide-react';
import { TERRITORY_COVERAGE } from '../data/mockData';

interface FieldServiceSectionProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const FieldServiceSection: React.FC<FieldServiceSectionProps> = ({ 
  darkMode, 
  onOpenQuoteModal 
}) => {
  const [selectedState, setSelectedState] = useState<'ALL' | 'IL' | 'WI'>('ALL');
  const [partnerType, setPartnerType] = useState<string>('National OEM / Equipment Manufacturer');

  const filteredTerritories = TERRITORY_COVERAGE.filter(
    t => selectedState === 'ALL' || t.state === selectedState
  );

  const valueProps = [
    {
      icon: UserCheck,
      title: 'White-Label & Brand Representation',
      description: 'We visit your client facilities acting as an official extension of your company, wearing your badges, adhering strictly to your protocols, and presenting a top-tier professional image.',
      badge: '100% Brand Protection'
    },
    {
      icon: Wrench,
      title: 'Versatile Industry Technical Talent',
      description: 'Deep hardware, software, high-voltage X-ray generators, optics, laser scanners, and computer system troubleshooting expertise to service imaging equipment in any clinical field.',
      badge: 'Hardware & Software Experts'
    },
    {
      icon: Clock,
      title: 'On-Site Field Repairs & Rapid Dispatch',
      description: 'Fast, local Midwest response for emergency repair calls, scheduled preventive maintenance (PM), site surveys, and complex equipment installations.',
      badge: 'Local Midwest Dispatch'
    },
    {
      icon: Building2,
      title: 'Turnkey Local Partnership',
      description: 'Ideal for national OEMs, medical equipment manufacturers, ISOs, and regional distributors needing a trusted local field service partner without the overhead of full-time regional hires.',
      badge: 'Zero Full-Time Overhead'
    }
  ];

  return (
    <section id="field-service" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-300 dark:border-blue-700">
            <Users className="w-3.5 h-3.5" />
            <span>White-Label Regional Field Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            White-Label Technical Field Engineers & On-Site Service Partners
          </h2>

          <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Based in Lake County, IL, and serving between Chicago and Milwaukee, we bring expert field support directly to your equipment. Our highly skilled technicians deliver top-tier mechanical, electronic, and software service under your company name.
          </p>

          {/* Key Geographic Callouts Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            <div className={`p-3.5 rounded-xl border flex items-center space-x-3 ${
              darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Hub Location</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Headquartered in Lake County, IL</span>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex items-center space-x-3 ${
              darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Coverage Zone</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Rapid Dispatch Between Chicago & Milwaukee</span>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border flex items-center space-x-3 ${
              darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Service Reach</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">Northern IL, Chicagoland & So. WI</span>
              </div>
            </div>
          </div>

          {/* Direct Phone Dispatch Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-blue-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-blue-300 uppercase tracking-widest block">
                  Direct Field Service Hotline
                </span>
                <a href="tel:8473675920" className="text-2xl font-black text-white hover:text-blue-300 transition-colors font-mono">
                  (847) 367-5920
                </a>
              </div>
            </div>

            <a
              href="tel:8473675920"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl text-center shadow-md transition-all shrink-0"
            >
              Call Us Directly
            </a>
          </div>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg flex flex-col justify-between ${
                  darkMode ? 'bg-slate-950 border-slate-800 hover:border-blue-700' : 'bg-slate-50 border-slate-200 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {prop.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {prop.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  <span>Compliant with OEM & ISO field standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Territory Explorer */}
        <div className={`p-8 rounded-3xl border mb-16 ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                Field Service Dispatch Coverage Map & Response Times
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Engineers dispatched directly from our central Mundelein, IL facility.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-2 bg-slate-200 dark:bg-slate-900 p-1 rounded-xl w-fit">
              <button
                onClick={() => setSelectedState('ALL')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedState === 'ALL'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Regions
              </button>
              <button
                onClick={() => setSelectedState('IL')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedState === 'IL'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Northern IL
              </button>
              <button
                onClick={() => setSelectedState('WI')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedState === 'WI'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Southern WI
              </button>
            </div>
          </div>

          {/* Territory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTerritories.map((item, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                    State: {item.state}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {item.primaryTechs} Field Engineers
                  </span>
                </div>

                <h4 className="text-base font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {item.county}
                </h4>

                <div className="text-xs space-y-2">
                  <div>
                    <span className="font-semibold block text-slate-500 dark:text-slate-400">Key Cities Covered:</span>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {item.cities.join(', ')}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-green-600 dark:text-green-400">
                    <span>Emergency Response:</span>
                    <span>{item.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OEM Partner Interactive Engagement Box */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-blue-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                <Briefcase className="w-3.5 h-3.5" />
                <span>OEM & Regional Business Partner Portal</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Expand Your Service Footprint Across Northern Illinois & So. Wisconsin
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Expand your service footprint across Northern Illinois and the surrounding region. We provide white-label, client-ready experts who travel anywhere between Chicago and Milwaukee to deliver exceptional technical work and high-touch customer support as your brand.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-slate-900/80 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700">
                  ✓ Your Custom Badges & Uniforms
                </span>
                <span className="bg-slate-900/80 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700">
                  ✓ Service Report Compliance
                </span>
                <span className="bg-slate-900/80 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700">
                  ✓ High-Voltage & DICOM Specialists
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span>Partner With Our Field Team</span>
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Select Your Organization Type:
                </label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full bg-slate-900 text-white text-xs p-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-400"
                >
                  <option>National OEM / Equipment Manufacturer</option>
                  <option>Independent Service Organization (ISO)</option>
                  <option>Regional Equipment Distributor</option>
                  <option>Medical Practice / Clinical Group</option>
                </select>
              </div>

              <button
                onClick={() => onOpenQuoteModal('field_partner', `Organization Type: ${partnerType}`)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="field-partner-cta-btn"
              >
                <span>Partner / Hire Our Field Service Team</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Direct phone consultation: <a href="tel:8473675920" className="text-blue-300 underline">(847) 367-5920</a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
