import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const accepted = localStorage.getItem('uyol_cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('uyol_cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-[#1E1E1E] text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
      <div className="flex items-start gap-2.5 text-xs text-neutral-300">
        <ShieldCheck className="w-4 h-4 text-[#DDF32C] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.cookie.text}
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="px-4 py-2 bg-[#DDF32C] text-[#1E1E1E] font-semibold text-xs rounded-xl hover:bg-[#cbe020] transition-colors whitespace-nowrap shrink-0 self-end sm:self-auto flex items-center gap-1"
      >
        <Check className="w-3.5 h-3.5" /> {t.cookie.accept}
      </button>
    </div>
  );
};
