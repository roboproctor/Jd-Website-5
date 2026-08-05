import React, { useState } from 'react';
import { 
  Grid, 
  Tag, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Info,
  X,
  FileText
} from 'lucide-react';
import { EQUIPMENT_CATALOG } from '../data/mockData';
import { EquipmentItem } from '../types';

interface BrandsGridProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const BrandsGrid: React.FC<BrandsGridProps> = ({ 
  darkMode, 
  onOpenQuoteModal 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<EquipmentItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Products & Brands' },
    { id: 'dr_panels', label: 'iRay DR Panels ($13k+)' },
    { id: 'mobile_xray', label: 'Sedecal & Mobile X-Rays' },
    { id: 'cr_readers', label: 'Legacy CR Readers' },
    { id: 'pacs_pc', label: 'PACS & Medical PCs' },
    { id: 'cd_burners', label: 'DICOM CD Burners' }
  ];

  const filteredItems = EQUIPMENT_CATALOG.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="products" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800">
            <Grid className="w-3.5 h-3.5 text-blue-600" />
            <span>Equipment Catalog & Industry Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Products, Systems & Brand Partnerships
          </h2>

          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Authorized equipment sales, rentals, and technical servicing for top radiology brands across Northern Illinois & Southern Wisconsin.
          </p>
        </div>

        {/* Category Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : darkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              id={`cat-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-200 hover:shadow-xl flex flex-col justify-between ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {item.brand}
                  </span>
                  <span className="text-[11px] font-bold text-green-600 dark:text-green-400">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {item.priceDisplay}
                </p>

                <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveItemModal(item)}
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 flex items-center space-x-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Specs</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal('general', `Inquiry regarding ${item.name} (${item.brand}).`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center space-x-1"
                  id={`quote-brand-${item.id}`}
                >
                  <span>Request Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Spec Sheet Modal */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className={`max-w-lg w-full rounded-2xl p-6 border shadow-2xl relative ${
              darkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase mb-2">
                <FileText className="w-4 h-4" />
                <span>Technical Spec Sheet</span>
              </div>

              <h3 className="text-xl font-bold mb-1">{activeItemModal.name}</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-4">{activeItemModal.brand} • {activeItemModal.priceDisplay}</p>

              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">{activeItemModal.description}</p>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 mb-6">
                <span className="text-xs font-bold block mb-2">Key Hardware Specifications:</span>
                <ul className="text-xs space-y-1.5">
                  {activeItemModal.specs.map((s, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-2 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const item = activeItemModal;
                    setActiveItemModal(null);
                    onOpenQuoteModal('general', `Spec Sheet Inquiry for ${item.name}`);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white"
                >
                  Request Official Quote
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
