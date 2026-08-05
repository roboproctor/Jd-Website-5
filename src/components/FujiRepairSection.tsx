import React, { useState } from 'react';
import { 
  Wrench, 
  HardDrive, 
  Cpu, 
  Disc, 
  CheckSquare, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  DollarSign,
  PhoneCall
} from 'lucide-react';
import { FUJI_DIAGNOSTICS } from '../data/mockData';

interface FujiRepairSectionProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const FujiRepairSection: React.FC<FujiRepairSectionProps> = ({ 
  darkMode, 
  onOpenQuoteModal 
}) => {
  const [selectedModelIdx, setSelectedModelIdx] = useState<number>(0);
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(
    FUJI_DIAGNOSTICS[0].symptoms[0].id
  );

  const currentModel = FUJI_DIAGNOSTICS[selectedModelIdx];
  const activeSymptom = currentModel.symptoms.find(s => s.id === selectedSymptomId) || currentModel.symptoms[0];

  const repairServicesChecklist = [
    {
      title: 'Fuji CR Reader & Cassette Diagnostics/Calibration',
      desc: 'SmartCR, Carbon XL, Carbon XL-2, FCR Prima T2 laser alignment and sensor tuning.',
      icon: Wrench
    },
    {
      title: 'Imaging Computer Workstation Hardware & Software Repairs',
      desc: 'Diagnosis and replacement for corrupted Windows OS, DICOM gateway errors, and power supply unit failures.',
      icon: Cpu
    },
    {
      title: 'Hard Drive Cloning, Database Recovery & OS Re-Images',
      desc: 'Recover lost patient databases, clone failing mechanical HDDs onto high-speed medical NVMe SSDs.',
      icon: HardDrive
    },
    {
      title: 'Replacement Optical Drives, Power Supplies & Internal Lasers',
      desc: 'In-stock replacement lasers, optical polygon mirrors, feed roller belts, and high-voltage modules.',
      icon: Disc
    },
    {
      title: 'Preventive Maintenance (PM) Inspections & Cleanings',
      desc: 'Scheduled physical cleaning of light guides, cassette feed paths, and erasure lamps to eliminate image artifacts.',
      icon: CheckSquare
    }
  ];

  return (
    <section id="fuji-repairs" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-300 dark:border-amber-800">
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
            <span>Component Repairs & Legacy System Maintenance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Multi-Vendor Equipment Maintenance & Legacy CR Support
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            While modern digital DR flat panels (like our $13k iRay systems) are replacing legacy CR readers, our bench technicians still provide cost-effective repairs, board swaps, optical laser tuning, and workstation hard drive cloning for facilities extending existing hardware life.
          </p>
        </div>

        {/* 5-Item Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {repairServicesChecklist.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center text-[11px] font-bold text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>On-site or Mail-in</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Fuji Diagnostic Wizard */}
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-6 border-slate-200 dark:border-slate-800 mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                Self-Service Diagnostic Wizard
              </span>
              <h3 className="text-2xl font-bold">
                Identify Your Fuji CR & Computer Issue
              </h3>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Diagnostic Repair Calculator</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Step 1: Model Selection */}
            <div className="lg:col-span-5 space-y-4">
              <label className="block text-xs font-bold uppercase text-slate-500">
                1. Select Fuji CR Reader / PC Workstation Model:
              </label>

              <div className="space-y-2">
                {FUJI_DIAGNOSTICS.map((diag, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedModelIdx(idx);
                      setSelectedSymptomId(diag.symptoms[0].id);
                    }}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      selectedModelIdx === idx
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 font-bold'
                        : darkMode ? 'border-slate-800 bg-slate-900 hover:bg-slate-800' : 'border-slate-200 bg-white hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-sm">{diag.model}</span>
                    <ArrowRight className={`w-4 h-4 ${selectedModelIdx === idx ? 'text-blue-600' : 'text-slate-400'}`} />
                  </button>
                ))}
              </div>

              <label className="block text-xs font-bold uppercase text-slate-500 pt-2">
                2. Select Observed Error or Symptom:
              </label>

              <div className="space-y-2">
                {currentModel.symptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => setSelectedSymptomId(symptom.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer text-xs ${
                      selectedSymptomId === symptom.id
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 font-bold text-amber-900 dark:text-amber-200 ring-2 ring-amber-400'
                        : darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{symptom.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Diagnostic Results & Action Plan */}
            <div className={`lg:col-span-7 p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div>
                <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800 mb-4">
                  <span className="text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">
                    Diagnostic Analysis & Technical Solution
                  </span>
                  <span className="text-xs bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300 font-bold px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
                    {activeSymptom.estimatedSavings}
                  </span>
                </div>

                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  Symptom: {activeSymptom.label}
                </h4>

                <p className={`text-xs mb-4 p-3 rounded-lg border ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <strong className="text-amber-600 dark:text-amber-400">Problem Description:</strong> {activeSymptom.description}
                </p>

                <div className="space-y-3 text-xs mb-6">
                  <div>
                    <span className="font-extrabold uppercase text-slate-400 block mb-0.5">Likely Root Cause:</span>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{activeSymptom.likelyCause}</p>
                  </div>

                  <div>
                    <span className="font-extrabold uppercase text-slate-400 block mb-0.5">Recommended JD Imaging Solution:</span>
                    <p className="font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                      {activeSymptom.actionPlan}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteModal(
                    'fuji_repair', 
                    `Fuji CR Repair Request: Model ${currentModel.model}, Symptom: ${activeSymptom.label}. Details: ${activeSymptom.description}`
                  )}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all text-center cursor-pointer"
                  id="fuji-repair-quote-btn"
                >
                  Request Fuji CR Repair / Mail-In Slot
                </button>

                <a
                  href="tel:8473675920"
                  className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-center flex items-center justify-center space-x-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                  id="fuji-tech-phone-btn"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>Speak To Bench Tech</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Transition Bridge Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-blue-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-400/30">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-extrabold text-cyan-400 tracking-widest block">
                Ready to Upgrade From Legacy CR to Instant Digital DR?
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                Brand New iRay Wireless DR Flat Panels Starting at $13,000
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Say goodbye to fragile cassette plates and slow laser scans. Upgrade any room to 2-second digital acquisition with a full 2-year warranty!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#iray-dr"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all"
            >
              View $13k DR Packages
            </a>
            <a
              href="tel:8473675920"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all"
            >
              Call (847) 367-5920
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
