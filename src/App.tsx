import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FieldServiceSection } from './components/FieldServiceSection';
import { CommercialServiceSection } from './components/CommercialServiceSection';
import { IrayDRSection } from './components/IrayDRSection';
import { FujiRepairSection } from './components/FujiRepairSection';
import { MobileXraySection } from './components/MobileXraySection';
import { BrandsGrid } from './components/BrandsGrid';
import { RemoteSupportPortal } from './components/RemoteSupportPortal';
import { BillingPortal } from './components/BillingPortal';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Quote Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [modalPrefilledType, setModalPrefilledType] = useState<string>('general');
  const [modalPrefilledDetails, setModalPrefilledDetails] = useState<string>('');

  const handleOpenQuoteModal = (type = 'general', details = '') => {
    setModalPrefilledType(type);
    setModalPrefilledDetails(details);
    setQuoteModalOpen(true);
  };

  // ScrollSpy for Active Nav Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'field-service', 'commercial-services', 'iray-dr', 'fuji-repairs', 'mobile-xrays', 'remote-support', 'billing', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-200 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main>
        <Hero 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        <FieldServiceSection 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        {/* Broad Commercial, Retail, IT & Electromechanical Section */}
        <CommercialServiceSection
          darkMode={darkMode}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        <IrayDRSection 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        <FujiRepairSection 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        <MobileXraySection 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        <BrandsGrid 
          darkMode={darkMode} 
          onOpenQuoteModal={handleOpenQuoteModal} 
        />

        <RemoteSupportPortal 
          darkMode={darkMode} 
        />

        <BillingPortal 
          darkMode={darkMode} 
        />

        <QuoteSection 
          darkMode={darkMode} 
        />
      </main>

      {/* Footer */}
      <Footer 
        darkMode={darkMode} 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* Global Quote Request Modal */}
      {quoteModalOpen && (
        <QuoteSection
          darkMode={darkMode}
          isModal={true}
          prefilledType={modalPrefilledType}
          prefilledDetails={modalPrefilledDetails}
          onCloseModal={() => setQuoteModalOpen(false)}
        />
      )}
    </div>
  );
}
