import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Apple,
  QrCode,
  CheckCircle2,
  Car,
  Package,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  BellRing,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { siteConfig } from '../config/site';

interface HeroProps {
  currentLang: Language;
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenDownload }) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'user' | 'driver'>('user');
  const t = translations[currentLang];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Background subtle mesh decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-200/25 to-indigo-200/20 blur-3xl -z-10 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtitle & Download CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Value Proposition Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/70 text-blue-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5.5xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
              {t.hero.titleStart}
              <span className="text-blue-600 underline decoration-blue-300 decoration-wavy decoration-2 underline-offset-6">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle with strict anti-slop clarity */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Download CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* App Store button */}
              <a
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Apple className="w-5 h-5 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] text-neutral-300">Download on</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>

              {/* Google Play button */}
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {/* Google Play triangular logo */}
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.60897 1.62143C3.3768 1.86878 3.24219 2.24716 3.24219 2.74836V21.2526C3.24219 21.7538 3.3768 22.1322 3.60897 22.3795L3.6766 22.4468L13.8821 12.2413V11.7596L3.6766 1.55414L3.60897 1.62143Z"
                    fill="#20A090"
                  />
                  <path
                    d="M17.284 15.6432L13.8828 12.242V11.7596L17.2846 8.3584L17.3621 8.40263L21.3934 10.6922C22.5451 11.346 22.5451 12.6548 21.3934 13.3101L17.3621 15.5989L17.284 15.6432Z"
                    fill="#FFD200"
                  />
                  <path
                    d="M17.3621 15.599L13.8828 12.2413L3.60897 22.3795C3.99222 22.7871 4.63602 22.8358 5.37895 22.4149L17.3621 15.599Z"
                    fill="#F2385A"
                  />
                  <path
                    d="M17.3621 8.40191L5.37895 1.58667C4.63602 1.16576 3.99222 1.21443 3.60897 1.62143L13.8828 11.7596L17.3621 8.40191Z"
                    fill="#00B6F0"
                  />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] text-neutral-300">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>

              {/* QR Code quick modal trigger */}
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="QR Kodu göstər"
              >
                <QrCode className="w-5 h-5 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold">{t.hero.qrPrompt}</span>
              </button>
            </div>

            {/* Frictionless browsing reassurance note */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-neutral-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.hero.unregisteredBadge}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-600">Giriş yalnız bron zamanı tələb olunur</span>
            </div>
          </div>

          {/* Right Column: High Fidelity Mobile Device Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Interactive App Mode Segmented Switcher */}
            <div className="inline-flex p-1 bg-neutral-100 rounded-xl mb-4 border border-neutral-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setActivePreviewTab('user')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activePreviewTab === 'user'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {t.hero.tabUserApp}
              </button>
              <button
                type="button"
                onClick={() => setActivePreviewTab('driver')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activePreviewTab === 'driver'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {t.hero.tabDriverApp}
              </button>
            </div>

            {/* Smartphone Outer Shell */}
            <div className="relative w-[310px] sm:w-[340px] rounded-[44px] bg-neutral-900 p-3 shadow-2xl ring-1 ring-neutral-800/80">
              {/* Speaker / Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-950 rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              </div>

              {/* Screen Content Window */}
              <div className="relative w-full h-[580px] bg-neutral-50 rounded-[34px] overflow-hidden flex flex-col font-sans select-none border border-neutral-200/50">
                {/* Figma replacement label indicator */}
                <div className="bg-neutral-900/90 backdrop-blur-xs text-[10px] text-neutral-300 py-1 px-3 text-center border-b border-neutral-800 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-blue-400">FIGMA SLOT</span>
                  <span>{activePreviewTab === 'user' ? 'User App Screen' : 'Driver App Screen'}</span>
                </div>

                <AnimatePresence mode="wait">
                  {activePreviewTab === 'user' ? (
                    /* User App Preview Content */
                    <motion.div
                      key="user-mockup"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-3.5 space-y-3 flex-1 overflow-y-auto text-left"
                    >
                      {/* Search Header Bar in App */}
                      <div className="bg-white p-3 rounded-2xl shadow-xs border border-neutral-100 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                          <span>HARAYA GEDİRSİNİZ?</span>
                          <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">Qeydiyyatsız</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                          <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Bakı, 20 Yanvar → Gəncə mərkəz</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            <span>10 Noyabr, 08:30</span>
                          </div>
                          <span className="text-emerald-600 font-semibold">12 gediş tapıldı</span>
                        </div>
                      </div>

                      {/* Live Notification Preview Toast */}
                      <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-xs text-xs flex items-center gap-2.5">
                        <BellRing className="w-4 h-4 shrink-0 text-blue-200" />
                        <div className="text-[11px] leading-snug">
                          <span className="font-bold block">Canlı Bildiriş:</span>
                          <span>Sürücü əvvəlki ünvandan çıxdı. 15 dəqiqəyə çatır.</span>
                        </div>
                      </div>

                      {/* Selected Driver Card (Highlighting freedom of choice) */}
                      <div className="bg-white p-3 rounded-2xl shadow-xs border-2 border-blue-600 space-y-2.5 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                              R.Ə
                            </div>
                            <div>
                              <div className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                                <span>Rəşad Əliyev</span>
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-amber-500">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span className="font-semibold text-neutral-800">4.9</span>
                                <span className="text-neutral-400">(148 gediş)</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-extrabold text-blue-600">15 AZN</span>
                            <span className="block text-[9px] text-neutral-400">1 yer üçün</span>
                          </div>
                        </div>

                        {/* Vehicle details */}
                        <div className="bg-neutral-50 p-2 rounded-xl text-[11px] text-neutral-700 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 font-medium">
                            <Car className="w-3.5 h-3.5 text-neutral-500" />
                            <span>Toyota Camry (Ağ, 2021)</span>
                          </div>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-sm font-semibold">
                            Kondisioner
                          </span>
                        </div>

                        {/* Seat & parcel capacities */}
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <div className="flex items-center gap-1 text-neutral-600">
                            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                            <span>2 boş sərnişin yeri</span>
                          </div>
                          <div className="flex items-center gap-1 text-neutral-600">
                            <Package className="w-3.5 h-3.5 text-amber-600" />
                            <span>1 bağlama yeri</span>
                          </div>
                        </div>

                        {/* CTA button */}
                        <button
                          type="button"
                          className="w-full py-2 bg-blue-600 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors"
                        >
                          <span>Yeri Bron Et</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Second Driver in comparison */}
                      <div className="bg-white p-2.5 rounded-xl border border-neutral-200/80 text-[11px] text-neutral-600 flex items-center justify-between opacity-80">
                        <div>
                          <span className="font-bold text-neutral-900 block">Elnur M. · 4.8★</span>
                          <span>Kia Optima · Çıxış: 09:00</span>
                        </div>
                        <span className="font-semibold text-neutral-900">14 AZN</span>
                      </div>
                    </motion.div>
                  ) : (
                    /* Driver App Preview Content */
                    <motion.div
                      key="driver-mockup"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-3.5 space-y-3 flex-1 overflow-y-auto text-left"
                    >
                      {/* Driver App Header */}
                      <div className="bg-neutral-900 text-white p-3 rounded-2xl space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-neutral-400">
                          <span>SÜRÜCÜ PROFİLİ</span>
                          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                            AKTİV GÜN
                          </span>
                        </div>
                        <div className="text-xs font-bold">Yeni Gedişiniz: Bakı → Şəki</div>
                        <div className="text-[11px] text-neutral-300">10 Noyabr · 09:00 Çıxış</div>
                      </div>

                      {/* Booking Notification Card */}
                      <div className="bg-white p-3 rounded-2xl shadow-xs border border-blue-200 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold text-blue-600 uppercase">
                          <span>Təsdiqlənmiş Yer Bronu</span>
                          <span className="text-neutral-400 font-normal">2 dəq əvvəl</span>
                        </div>
                        <div className="text-xs font-bold text-neutral-900">
                          1 Sərnişin bron edildi (+15 AZN)
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-tight">
                          Avtomatik sifariş təklifi deyil; istifadəçi sizi birbaşa seçdi.
                        </p>
                      </div>

                      {/* Seat & parcel management */}
                      <div className="bg-white p-3 rounded-2xl shadow-xs border border-neutral-100 space-y-2">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase">
                          Gediş İdarəsi
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="bg-neutral-50 p-2 rounded-xl">
                            <span className="block text-neutral-400 text-[10px]">Sərnişin Yeri</span>
                            <span className="font-extrabold text-neutral-900">3 / 4 Boş</span>
                          </div>
                          <div className="bg-neutral-50 p-2 rounded-xl">
                            <span className="block text-neutral-400 text-[10px]">Bağlama Yeri</span>
                            <span className="font-extrabold text-blue-600">1 Ayrıldı</span>
                          </div>
                        </div>
                      </div>

                      {/* Passenger Transfer Protocol affordance */}
                      <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-[11px] text-amber-900 flex items-center justify-between">
                        <div>
                          <span className="font-bold block">Sərnişin Ötürmə:</span>
                          <span className="text-[10px] text-amber-800">Fors-major halında digər avtomobilə</span>
                        </div>
                        <button
                          type="button"
                          className="px-2 py-1 bg-amber-600 text-white rounded-lg text-[10px] font-bold hover:bg-amber-700"
                        >
                          Transfer
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Bar in Phone */}
                <div className="bg-white border-t border-neutral-100 py-2 px-4 flex items-center justify-around text-[10px] text-neutral-400">
                  <span className="text-blue-600 font-bold">Gedişlər</span>
                  <span>Bağlamalar</span>
                  <span>Bildirişlər</span>
                  <span>Profil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
