import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { HowItWorks } from './components/HowItWorks';
import { PassengerSection } from './components/PassengerSection';
import { ParcelSection } from './components/ParcelSection';
import { DriverSection } from './components/DriverSection';
import { AppScreensGallery } from './components/AppScreensGallery';
import { ArMeasureTeaser } from './components/ArMeasureTeaser';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { TicketModal } from './components/TicketModal';
import { ParcelTrackingModal } from './components/ParcelTrackingModal';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F2F2] flex flex-col font-sans">
      {/* 1. Sticky Header */}
      <Header onOpenDownload={() => setIsDownloadOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenTicket={() => setIsTicketOpen(true)}
        />

        {/* 3. Value Proposition Strip (No fake numbers) */}
        <ValueStrip />

        {/* 4. How It Works (Sərnişin / Bağlama Toggle) */}
        <HowItWorks
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenTracking={() => setIsTrackingOpen(true)}
        />

        {/* 5. For Passengers (Sərnişinlər üçün) */}
        <PassengerSection
          onOpenTicket={() => setIsTicketOpen(true)}
          onOpenDownload={() => setIsDownloadOpen(true)}
        />

        {/* 6. For Parcels (Bağlamalar üçün) */}
        <ParcelSection
          onOpenTracking={() => setIsTrackingOpen(true)}
          onOpenDownload={() => setIsDownloadOpen(true)}
        />

        {/* 7. For Drivers (Sürücülər üçün) */}
        <DriverSection onOpenDownload={() => setIsDownloadOpen(true)} />

        {/* 8. App Screens Interactive Showcase (User app vs Driver app) */}
        <AppScreensGallery />

        {/* 9. 'Tezliklə' AR Camera Parcel Measurement */}
        <ArMeasureTeaser />

        {/* 10. FAQ Accordion */}
        <FaqSection />

        {/* 11. Final CTA */}
        <FinalCta onOpenDownload={() => setIsDownloadOpen(true)} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      <TicketModal
        isOpen={isTicketOpen}
        onClose={() => setIsTicketOpen(false)}
      />

      <ParcelTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
