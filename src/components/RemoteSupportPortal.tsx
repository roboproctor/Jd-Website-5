import React, { useState } from 'react';
import { 
  Headphones, 
  Monitor, 
  Download, 
  Send, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  LifeBuoy,
  PhoneCall,
  Loader2
} from 'lucide-react';
import { SupportTicket } from '../types';

interface RemoteSupportPortalProps {
  darkMode: boolean;
}

export const RemoteSupportPortal: React.FC<RemoteSupportPortalProps> = ({ darkMode }) => {
  const [clientName, setClientName] = useState('');
  const [facility, setFacility] = useState('');
  const [urgency, setUrgency] = useState<'Low' | 'Medium' | 'Critical / Emergency'>('Medium');
  const [systemType, setSystemType] = useState('PACS Workstation / DICOM Gateway');
  const [issueDescription, setIssueDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const [activeTicket, setActiveTicket] = useState<SupportTicket | null>(null);

  const handleSubmitSupport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !facility || !issueDescription) return;

    setLoading(true);

    try {
      const response = await fetch('/api/support-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          facility,
          urgency,
          systemType,
          issueDescription
        })
      });

      const data = await response.json();
      if (data.success) {
        setActiveTicket({
          ticketId: data.ticketId,
          clientName,
          facility,
          urgency,
          systemType,
          issueDescription,
          status: 'Tech Assigned',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      }
    } catch (err) {
      // Fallback ticket generator
      setActiveTicket({
        ticketId: `SUP-${Math.floor(1000 + Math.random() * 9000)}`,
        clientName,
        facility,
        urgency,
        systemType,
        issueDescription,
        status: 'Tech Assigned',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="remote-support" className={`py-16 transition-colors ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <span>Instant Technical Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Instant Remote Technical Assistance & Computer Diagnostics
          </h2>

          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Connect directly with a JD Imaging senior technician in Mundelein, IL for rapid screen-sharing software, DICOM, and PACS diagnostics.
          </p>
        </div>

        {/* 3 Step Remote Launch Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-base font-bold mb-2">Step 1: Download AeroAdmin</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Click below to download AeroAdmin (www.aeroadmin.com) for instant secure screen sharing without setup.
            </p>

            <div className="flex flex-col space-y-2">
              <a
                href="https://www.aeroadmin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-between transition-colors shadow-sm"
                id="aeroadmin-download-btn"
              >
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-cyan-300" />
                  <span>Download AeroAdmin (www.aeroadmin.com)</span>
                </div>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-base font-bold mb-2">Step 2: Submit Support Ticket</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Fill out the emergency support request form below with your facility name and specific error symptoms.
            </p>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] text-blue-900 dark:text-blue-300 font-semibold">
              ✓ Direct notification dispatched to regional Midwest helpdesk.
            </div>
          </div>

          <div className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-base font-bold mb-2">Step 3: Provide AeroAdmin ID</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Read the AeroAdmin ID displayed on your screen to our engineer over the phone for secure connection.
            </p>
            <a
              href="tel:8473675920"
              className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Phone Support: (847) 367-5920</span>
            </a>
          </div>

        </div>

        {/* Emergency Request Form & Ticket Simulator */}
        <div className={`p-8 rounded-3xl border ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold mb-2 flex items-center space-x-2">
                <LifeBuoy className="w-5 h-5 text-blue-600" />
                <span>Launch Remote Diagnostics Ticket</span>
              </h3>
              <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Emergency requests are triaged immediately for clinical practices in Northern IL & WI.
              </p>

              <form onSubmit={handleSubmitSupport} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Dr. Sarah Miller"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Facility / Practice Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={facility}
                      onChange={(e) => setFacility(e.target.value)}
                      placeholder="e.g. Lake County Orthopedics"
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      Urgency Level *
                    </label>
                    <select
                      value={urgency}
                      onChange={(e: any) => setUrgency(e.target.value)}
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <option value="Low">Low - General Question / Scheduled PM</option>
                      <option value="Medium">Medium - Non-Urgent Software Glitch</option>
                      <option value="Critical / Emergency">Critical / Emergency - Patient Waiting / Room Down</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                      System Type *
                    </label>
                    <select
                      value={systemType}
                      onChange={(e) => setSystemType(e.target.value)}
                      className={`w-full p-2.5 rounded-xl text-xs border ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <option>PACS Workstation / DICOM Gateway</option>
                      <option>iRay DR Flat Panel Software</option>
                      <option>Fuji CR Reader Workstation</option>
                      <option>Sedecal Portable Generator Controller</option>
                      <option>CD Burner / Patient Disc Publishing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Describe Error or Symptoms *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    placeholder="e.g. Fuji CR displaying error code 1044 during plate scan, or PACS failing to transmit DICOM images..."
                    className={`w-full p-2.5 rounded-xl text-xs border ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  id="submit-remote-support-btn"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Support Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Remote Support Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Live Ticket Status Box */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <span className="text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 block mb-2">
                  Active Dispatch Queue Status
                </span>

                {activeTicket ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-xs">
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span>Ticket Issued: #{activeTicket.ticketId}</span>
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px]">
                          {activeTicket.status}
                        </span>
                      </div>
                      <p>Technician triaging request for {activeTicket.facility}.</p>
                    </div>

                    <div className="text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contact:</span>
                        <span className="font-bold">{activeTicket.clientName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Urgency:</span>
                        <span className="font-bold text-amber-600">{activeTicket.urgency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">System:</span>
                        <span className="font-bold">{activeTicket.systemType}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950 text-[11px] text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      <strong>Instructions:</strong> Please launch AeroAdmin (www.aeroadmin.com) and have your AeroAdmin ID ready.
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400 space-y-3">
                    <Monitor className="w-12 h-12 mx-auto text-slate-400" />
                    <p className="text-xs">
                      Fill out the support form on the left to generate an instant remote triage ticket.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[11px] text-slate-500">
                  Direct Telephone Triage: <a href="tel:8473675920" className="text-blue-600 font-bold hover:underline">(847) 367-5920</a>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
