import React from 'react';

interface CommercialServiceProps {
  darkMode: boolean;
  onOpenQuoteModal: (type?: string, details?: string) => void;
}

export const CommercialServiceSection: React.FC<CommercialServiceProps> = ({ darkMode, onOpenQuoteModal }) => {
  return (
    <section id="commercial-services" className={`py-16 px-4 md:px-8 border-t ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-600/10 text-blue-500 mb-3">
            On-Site & Remote Dispatch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commercial Electromechanical, Computer & Hardware Support
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg opacity-80">
            Applying high-precision field engineering to retail, grocery, office, industrial, and commercial operations across Northern Illinois and Southern Wisconsin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Electronics & Power Supplies</h3>
            <p className="text-sm opacity-80 mb-4">
              Power supply unit (PSU) replacements, circuit board swapping, power distribution troubleshooting, and low-voltage electrical repairs for commercial hardware.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('electronics', 'Power supply / electronic repair request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Request Electronics Repair →
            </button>
          </div>

          {/* Service Card 2 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Printers, Scanners & POS</h3>
            <p className="text-sm opacity-80 mb-4">
              Barcode readers, document scanners, commercial thermal labelers, receipt printers, and point-of-sale hardware service for retail and grocery environments.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('printers-scanners', 'Printer, scanner, or POS service request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Request Hardware Service →
            </button>
          </div>

          {/* Service Card 3 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Workstation Software & Remote IT</h3>
            <p className="text-sm opacity-80 mb-4">
              On-site and remote operating system re-images, software configuration, network setup, drive replacements, and system diagnostics for commercial workstations.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('software-it', 'Software / Workstation IT support request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Request Technical Support →
            </button>
          </div>

          {/* Service Card 4 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Mechanical & Automation Drives</h3>
            <p className="text-sm opacity-80 mb-4">
              Actuators, motor drives, mechanical sub-assemblies, belt/gear adjustments, and physical equipment overhauls for commercial and industrial facilities.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('mechanical', 'Mechanical equipment service request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Request Mechanical Service →
            </button>
          </div>

          {/* Service Card 5 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Contracted & White-Label Dispatch</h3>
            <p className="text-sm opacity-80 mb-4">
              Serving as local "hands and eyes" field service engineers for out-of-state companies, OEMs, and MSPs requiring immediate on-site response in Chicagoland.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('dispatch', 'Contracted field technician dispatch request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              Dispatch Local Technician →
            </button>
          </div>

          {/* Service Card 6 */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h3 className="text-xl font-bold mb-2">Specialized Medical Radiology</h3>
            <p className="text-sm opacity-80 mb-4">
              Full diagnostic radiology service including Fuji CR readers, iRay DR flat panels, Hologic Mammography, X-ray generators, and DICOM PACS integration.
            </p>
            <button 
              onClick={() => onOpenQuoteModal('medical', 'Medical radiology service request')}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              View Radiology Specialties →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
