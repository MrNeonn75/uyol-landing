import React from 'react';
import { Smartphone, Shield, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { siteConfig } from '../config/site';

interface FooterProps {
  currentLang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Wordmark & Summary (Strictly no founder / legal entity info) */}
          <div className="md:col-span-5 space-y-3 text-left">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                <svg
                  width="18"
                  height="18"
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
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                UYOL
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {siteConfig.tagline[currentLang]}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs text-left">
            <div className="space-y-2.5">
              <span className="font-semibold text-neutral-200 block uppercase tracking-wider text-[11px]">
                Naviqasiya
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    {t.nav.howItWorks}
                  </a>
                </li>
                <li>
                  <a href="#passengers" className="hover:text-white transition-colors">
                    {t.footer.forPassengers}
                  </a>
                </li>
                <li>
                  <a href="#parcels" className="hover:text-white transition-colors">
                    {t.footer.parcels}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="font-semibold text-neutral-200 block uppercase tracking-wider text-[11px]">
                Platforma
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#drivers" className="hover:text-white transition-colors">
                    {t.footer.forDrivers}
                  </a>
                </li>
                <li>
                  <a href="#screens" className="hover:text-white transition-colors">
                    {t.nav.screens}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    {t.footer.faq}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons Placeholder & Legal Triggers */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="font-semibold text-neutral-200 block uppercase tracking-wider text-[11px]">
              Sosial Şəbəkələr [Placeholder]
            </span>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-colors text-xs font-semibold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-colors text-xs font-semibold"
                aria-label="Telegram"
              >
                TG
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-colors text-xs font-semibold"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                {t.footer.privacy}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={onOpenTerms}
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                {t.footer.terms}
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} UYOL. {t.footer.rights}
          </div>
          <div className="text-[11px] text-neutral-600 font-mono">
            User App & Driver App · Mobile Platform
          </div>
        </div>
      </div>
    </footer>
  );
};
