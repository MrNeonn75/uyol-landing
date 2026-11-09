import React from 'react';
import { X, Apple, QrCode } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { siteConfig } from '../config/site';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl z-10 space-y-6 text-center border border-neutral-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto shadow-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M5 4V13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13V4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="11" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <h3 className="text-xl font-extrabold text-neutral-950">
            UYOL Tətbiqini Yükləyin
          </h3>
          <p className="text-xs text-neutral-600 max-w-xs mx-auto">
            Sərnişin və ya sürücü kimi daxil olun. QR kodu telefonunuzla skan edin və ya mağaza linkinə keçin.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/80 inline-block mx-auto">
          <svg
            width="150"
            height="150"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-900"
          >
            <rect x="5" y="5" width="28" height="28" rx="4" fill="currentColor" />
            <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
            <rect x="13" y="13" width="12" height="12" rx="1.5" fill="currentColor" />
            <rect x="67" y="5" width="28" height="28" rx="4" fill="currentColor" />
            <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
            <rect x="75" y="13" width="12" height="12" rx="1.5" fill="currentColor" />
            <rect x="5" y="67" width="28" height="28" rx="4" fill="currentColor" />
            <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
            <rect x="13" y="75" width="12" height="12" rx="1.5" fill="currentColor" />
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

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            <Apple className="w-4 h-4" />
            <span>App Store</span>
          </a>
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
};
