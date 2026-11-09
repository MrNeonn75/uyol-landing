import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HowItWorks } from './components/HowItWorks';
import { PassengerSection } from './components/PassengerSection';
import { ParcelSection } from './components/ParcelSection';
import { DriverSection } from './components/DriverSection';
import { AppScreensCarousel } from './components/AppScreensCarousel';
import { VolumeArDemo } from './components/VolumeArDemo';
import { FaqSection } from './components/FaqSection';
import { DownloadCta } from './components/DownloadCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('az');
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleCloseDownload = () => setDownloadModalOpen(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Sticky Header with 3-Zone contract */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenDownload={handleOpenDownload}
      />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* 2. Hero with Value Prop & Device Mockup */}
        <Hero currentLang={currentLang} onOpenDownload={handleOpenDownload} />

        {/* 3. Honest Trust Bar (No fake stats) */}
        <TrustBar currentLang={currentLang} />

        {/* 4. How It Works (Passenger vs Parcel Tab) */}
        <HowItWorks currentLang={currentLang} />

        {/* 5. For Passengers (Driver choice, unreg browse, 15m/5m alerts) */}
        <PassengerSection currentLang={currentLang} />

        {/* 6. For Parcels (Tracking, dual notifications, auto-reassignment) */}
        <ParcelSection currentLang={currentLang} />

        {/* 7. For Drivers (Create "Gediş", no dispatch spam, passenger transfer) */}
        <DriverSection currentLang={currentLang} />

        {/* 8. App Screens Showcase (User & Driver screens carousel) */}
        <AppScreensCarousel currentLang={currentLang} />

        {/* 9. Optional Innovation: Camera-based Parcel Volume Measurement */}
        <VolumeArDemo currentLang={currentLang} />

        {/* 10. Frequently Asked Questions (Accordion) */}
        <FaqSection currentLang={currentLang} />

        {/* 11. Final High-Converting CTA & QR Code */}
        <DownloadCta currentLang={currentLang} onOpenDownload={handleOpenDownload} />
      </main>

      {/* 12. Quiet Respectful Footer */}
      <Footer
        currentLang={currentLang}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Overlays */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
        currentLang={currentLang}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        currentLang={currentLang}
      />

      <CookieBanner currentLang={currentLang} />
    </div>
  );
}
