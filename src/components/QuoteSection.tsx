import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Loader2, 
  Building2, 
  X 
} from 'lucide-react';
import { QuoteFormData, RequestType } from '../types';

interface QuoteSectionProps {
  darkMode: boolean;
  prefilledType?: string;
  prefilledDetails?: string;
  onCloseModal?: () => void;
  isModal?: boolean;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  darkMode, 
  prefilledType = 'general',
  prefilledDetails = '',
  onCloseModal,
  isModal = false
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    region: 'Northern Illinois',
    requestType: (prefilledType as RequestType) || 'general',
    details: prefilledDetails || ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email || !formData.phone) return;

    setLoading(true);
    setErrorMessage(null);

    const generatedRef = `JDI-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0b24647c-201b-47bd-a6ba-9cd3fe80b594',
          subject: `New Service Request [${generatedRef}] - ${formData.companyName || formData.contactName}`,
          from_name: 'JD Imaging Corp Website',
          contact_name: formData.contactName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          region: formData.region,
          request_type: formData.requestType,
          message: formData.details,
          reference_number: generatedRef
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedRef(generatedRef);
      } else {
        setErrorMessage(data.message || 'Failed to send request. Please try calling us directly.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection or contact us by phone.');
    } finally {
      setLoading(false);
    }
  };

  const formContent = (
    <div className={`p-8 rounded-3xl border ${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            Comprehensive Service Request
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Request Service or Partner With Us
          </h3>
        </div>
        {isModal && onCloseModal && (
          <button
            onClick={onCloseModal}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {errorMessage && (
        <div className="mb-4 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Contact Name *
            </label>
            <input
              type="text"
              required
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              placeholder="e.g. John Doe, RT"
              className={`w-full p-2.5 rounded-xl text-xs border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Practice / Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Midwest Radiology Group"
              className={`w-full p-2.5 rounded-xl text-xs border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@practice.com"
              className={`w-full p-2.5 rounded-xl text-xs border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(847) 000-0000"
              className={`w-full p-2.5 rounded-xl text-xs border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Service Region *
            </label>
            <select
              value={formData.region}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, region: e.target.value })}
              className={`w-full p-2.5 rounded-xl text-xs border ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <option value="Northern Illinois">Northern Illinois (Lake/McHenry/Cook)</option>
              <option value="Southern Wisconsin">Southern Wisconsin (Kenosha/Racine/Milwaukee)</option>
              <option value="Greater Chicago">Greater Chicago Area</option>
              <option value="Other Region">Other Region (Mail-in / OEM Partner)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Request Type *
          </label>
          <select
            value={formData.requestType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, requestType: e.target.value as RequestType })}
            className={`w-full p-2.5 rounded-xl text-xs border ${
              darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <option value="field_partner">Field Partner / White-Label Tech Representation</option>
            <option value="iray_dr">Brand New $13,000 iRay DR System Package</option>
            <option value="fuji_repair">Fuji CR Reader / PC Workstation Repair</option>
            <option value="portable_buy">Buy Refurbished Sedecal / Portable Digital X-Ray</option>
            <option value="portable_rent">Rent Portable Digital X-Ray System</option>
            <option value="remote_support">Remote Tech Assistance / DICOM Setup</option>
            <option value="billing_inquiry">Billing / Account Question</option>
            <option value="general">General Sales or Equipment Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Service Details or Message
          </label>
          <textarea
            rows={4}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Please detail your equipment model, error messages, facility address, or timeline requirements..."
            className={`w-full p-2.5 rounded-xl text-xs border ${
              darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
          id="submit-quote-form-btn"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Service Request / Partner Inquiry</span>
            </>
          )}
        </button>

      </form>
    </div>
  );

  return (
    <section id="contact" className={`py-16 transition-colors ${
      isModal ? '' : darkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
    }`}>
      {isModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="max-w-2xl w-full my-8">
            {submittedRef ? (
              <div className={`p-8 rounded-3xl border text-center ${
                darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
              }`}>
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Service Request Received!</h3>
                <p className="text-sm text-slate-500 mb-4">Reference Ticket: <strong className="text-blue-600">{submittedRef}</strong></p>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                  Thank you, {formData.contactName}. A senior field technician or sales specialist from our Mundelein, IL office will contact you shortly via email ({formData.email}) or phone ({formData.phone}).
                </p>
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    if (onCloseModal) onCloseModal();
                  }}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            ) : formContent}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Headquarters & Dispatch</span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight">
                Get In Touch With JD Imaging Corp
              </h2>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Have an urgent equipment failure, interested in our $13,000 iRay DR panel upgrade, or looking to partner with our regional field engineers?
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Facility Address:</span>
                    <span className="text-slate-600 dark:text-slate-300">1421 Armour Blvd, Mundelein, IL 60060</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold uppercase text-[10px] text-blue-600 dark:text-blue-400 block tracking-wider">
                      Direct Line & Immediate Dispatch:
                    </span>
                    <a href="tel:8473675920" className="text-xl font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-mono">
                      (847) 367-5920
                    </a>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Speak directly with our technical team for white-label service contracts or site requests.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Email Inquiries:</span>
                    <a href="mailto:jdicorp@gmail.com" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">jdicorp@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900 to-slate-900 text-white text-xs space-y-1 border border-blue-700">
                <span className="font-bold block text-blue-300 uppercase">Dispatch Hours:</span>
                <p>Mon - Fri: 7:30 AM - 6:00 PM CST</p>
                <p>24/7 Emergency Technical On-Call for Contracted OEM Partners</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedRef ? (
                <div className={`p-8 rounded-3xl border text-center ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 shadow-xl'
                }`}>
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-sm text-slate-500 mb-4">Confirmation Reference: <strong className="text-blue-600">{submittedRef}</strong></p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
                    A representative from Mundelein, IL will follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : formContent}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
