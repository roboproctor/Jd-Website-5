import React, { useState } from 'react';
import { 
  CreditCard, 
  Receipt, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Lock, 
  FileCheck,
  Printer,
  X,
  Loader2
} from 'lucide-react';
import { PaymentSimulation } from '../types';

interface BillingPortalProps {
  darkMode: boolean;
}

export const BillingPortal: React.FC<BillingPortalProps> = ({ darkMode }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Field Service / On-Site Repair Call');
  const [paymentMethod, setPaymentMethod] = useState<'Credit Card' | 'ACH Transfer' | 'Company Check'>('Credit Card');

  const [loading, setLoading] = useState(false);
  const [completedReceipt, setCompletedReceipt] = useState<any | null>(null);

  const handleProcessPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber || !invoiceNumber || !clientName || !amount) return;

    setLoading(true);

    try {
      const response = await fetch('/api/payment-simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountNumber,
          invoiceNumber,
          clientName,
          amount: parseFloat(amount),
          serviceCategory,
          paymentMethod
        })
      });

      const data = await response.json();
      if (data.success) {
        setCompletedReceipt(data);
      }
    } catch (err) {
      setCompletedReceipt({
        receiptNumber: `REC-${Math.floor(100000 + Math.random() * 900000)}`,
        transactionDate: new Date().toLocaleDateString(),
        accountNumber,
        invoiceNumber,
        clientName,
        amount: parseFloat(amount),
        serviceCategory,
        paymentMethod,
        status: 'Approved',
        billingContact: '(847) 367-5920 | jdicorp@gmail.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="billing" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            <span>Secure Accounts Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Manage Your Invoices & Online Payments
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Easy online payment options for mobile rentals, equipment purchases, field service contracts, Fuji CR repairs, and service calls.
          </p>
        </div>

        {/* Payment Simulation Portal */}
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-green-500" />
                  <span>Online Payment Processing</span>
                </h3>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-200 dark:bg-slate-900 px-2.5 py-1 rounded-full">
                  256-Bit SSL Encrypted
                </span>
              </div>

              <form onSubmit={handleProcessPayment} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Account # / Client ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="e.g. ACC-4820"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Invoice # *
                    </label>
                    <input
                      type="text"
                      required
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      placeholder="e.g. INV-9041"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Practice / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Mundelein Medical Center"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Payment Amount ($ USD) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 450.00"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Service Category
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    >
                      <option>Field Service / On-Site Repair Call</option>
                      <option>iRay DR System Purchase / Retrofit</option>
                      <option>Fuji CR Reader Bench Repair</option>
                      <option>Mobile X-Ray Rental Invoice</option>
                      <option>Preventive Maintenance (PM) Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Payment Method
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e: any) => setPaymentMethod(e.target.value)}
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'
                      }`}
                    >
                      <option value="Credit Card">Credit Card (Visa/MC/Amex/Discover)</option>
                      <option value="ACH Transfer">ACH Direct Bank Transfer</option>
                      <option value="Company Check">Corporate Check / Net 30 Terms</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  id="process-payment-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authorizing Payment...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Process Secure Payment & Generate Receipt</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct Billing Contact & Info */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <span className="text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 block mb-2">
                  Direct Billing Support
                </span>

                <h4 className="text-lg font-bold mb-3">
                  Questions About Your Account or Invoice?
                </h4>

                <p className={`text-xs leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Our accounting team in Mundelein, IL is available Monday through Friday to assist with invoice breakdowns, W-9 tax forms, and custom payment schedules.
                </p>

                <div className="space-y-3 text-xs font-semibold mb-6">
                  <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Billing Phone: (847) 367-5920</span>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Billing Email: jdicorp@gmail.com</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                  <strong>Remittance Address:</strong><br />
                  JD Imaging Corp.<br />
                  1421 Armour Blvd, Mundelein, IL 60060
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                <span>Accepted Methods: Visa, MasterCard, Amex, Discover, ACH & Wire Transfers.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Itemized Payment Receipt Modal */}
        {completedReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className={`max-w-md w-full rounded-2xl p-6 border shadow-2xl relative ${
              darkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'
            }`}>
              <button
                onClick={() => setCompletedReceipt(null)}
                className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold">Payment Authorized</h3>
                <p className="text-xs text-slate-500">Receipt Ref: #{completedReceipt.receiptNumber}</p>
              </div>

              <div className="space-y-3 text-xs p-4 rounded-xl bg-slate-100 dark:bg-slate-950 mb-6">
                <div className="flex justify-between border-b pb-1 border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Facility:</span>
                  <span className="font-bold">{completedReceipt.clientName}</span>
                </div>
                <div className="flex justify-between border-b pb-1 border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Account #:</span>
                  <span className="font-bold">{completedReceipt.accountNumber}</span>
                </div>
                <div className="flex justify-between border-b pb-1 border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Invoice #:</span>
                  <span className="font-bold">{completedReceipt.invoiceNumber}</span>
                </div>
                <div className="flex justify-between border-b pb-1 border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-bold">{completedReceipt.serviceCategory}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-extrabold text-green-600 dark:text-green-400 text-sm">
                    ${parseFloat(completedReceipt.amount).toFixed(2)} USD
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 flex items-center space-x-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={() => setCompletedReceipt(null)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 text-white"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
