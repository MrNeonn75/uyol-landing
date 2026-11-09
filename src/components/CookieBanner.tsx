import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface CookieBannerProps {
  currentLang: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const t = translations[currentLang];

  useEffect(() => {
    const consent = localStorage.getItem('uyol_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('uyol_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('uyol_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-neutral-200/90 text-left animate-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="space-y-2 flex-1">
          <p className="text-xs text-neutral-600 leading-relaxed">
            {t.cookieBanner.text}
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              {t.cookieBanner.acceptBtn}
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-medium transition-colors"
            >
              {t.cookieBanner.declineBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
