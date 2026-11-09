import React from 'react';
import { Apple, Smartphone, QrCode, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { siteConfig } from '../config/site';

interface DownloadCtaProps {
  currentLang: Language;
  onOpenDownload: () => void;
}

export const DownloadCta: React.FC<DownloadCtaProps> = ({ currentLang, onOpenDownload }) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Store Buttons */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-900 px-3 py-1 rounded-md">
              {t.downloadCta.instantOpenText}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.downloadCta.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              {t.downloadCta.subtitle}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* App Store button */}
              <a
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 shadow-md"
              >
                <Apple className="w-5 h-5 shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] text-neutral-500 font-normal">Download on</span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </a>

              {/* Google Play button */}
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 shadow-md"
              >
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
                  <span className="block text-[10px] text-neutral-500 font-normal">GET IT ON</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Scannable QR Code */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-neutral-900/90 rounded-2xl border border-neutral-800 text-center space-y-3">
            <div className="bg-white p-3.5 rounded-2xl shadow-md inline-block">
              {/* Scalable clean SVG QR Code */}
              <svg
                width="140"
                height="140"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-900"
                aria-label="UYOL Tətbiq Yükləmə QR Kodu"
              >
                {/* Top-left position marker */}
                <rect x="5" y="5" width="28" height="28" rx="4" fill="currentColor" />
                <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
                <rect x="13" y="13" width="12" height="12" rx="1.5" fill="currentColor" />

                {/* Top-right position marker */}
                <rect x="67" y="5" width="28" height="28" rx="4" fill="currentColor" />
                <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
                <rect x="75" y="13" width="12" height="12" rx="1.5" fill="currentColor" />

                {/* Bottom-left position marker */}
                <rect x="5" y="67" width="28" height="28" rx="4" fill="currentColor" />
                <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
                <rect x="13" y="75" width="12" height="12" rx="1.5" fill="currentColor" />

                {/* Data modules */}
                <rect x="40" y="8" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="52" y="8" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="44" y="20" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="8" y="42" width="6" height="6" rx="1" fill="currentColor" />
                <rect x="20" y="42" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="34" y="36" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="52" y="38" width="12" height="12" rx="2" fill="currentColor" />
                <rect x="70" y="42" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="84" y="44" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="38" y="54" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="42" y="68" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="56" y="58" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="74" y="58" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="42" y="82" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="60" y="76" width="8" height="8" rx="1" fill="currentColor" />
                <rect x="74" y="74" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="86" y="86" width="8" height="8" rx="1" fill="currentColor" />
              </svg>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-neutral-200 block">
                {t.downloadCta.scanQrText}
              </span>
              <span className="text-[11px] text-neutral-400">
                User App & Driver App
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
