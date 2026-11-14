import React from 'react';
import { UyolLogo } from './UyolLogo';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#181818] text-neutral-400 py-12 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <UyolLogo variant="horizontal" theme="dark" size="md" />
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="text-neutral-400 text-xs">
              {t.footer.tagline}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 font-medium">
            <a href="#nece-isleyir" className="hover:text-[#DDF32C] transition-colors">
              {t.nav.howItWorks}
            </a>
            <a href="#sernisinler" className="hover:text-[#DDF32C] transition-colors">
              {t.nav.passengers}
            </a>
            <a href="#baglamalar" className="hover:text-[#DDF32C] transition-colors">
              {t.nav.parcels}
            </a>
            <a href="#suruculer" className="hover:text-[#DDF32C] transition-colors">
              {t.nav.drivers}
            </a>
            <a href="#faq" className="hover:text-[#DDF32C] transition-colors">
              {t.nav.faq}
            </a>
          </div>

          <div>
            <button
              onClick={onOpenDownload}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-semibold"
            >
              {t.nav.downloadApp}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="/privacy"
              className="hover:text-[#DDF32C] transition-colors underline underline-offset-4"
            >
              {t.footer.privacy}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/delete-account"
              className="hover:text-[#DDF32C] transition-colors underline underline-offset-4"
            >
              {t.footer.deleteAccount}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/terms"
              className="hover:text-[#DDF32C] transition-colors underline underline-offset-4"
            >
              {t.footer.terms}
            </a>
          </div>

          <div className="flex items-center gap-3 text-neutral-400">
            <span className="hover:text-[#DDF32C] cursor-pointer transition-colors">Instagram</span>
            <span>·</span>
            <span className="hover:text-[#DDF32C] cursor-pointer transition-colors">Telegram</span>
            <span>·</span>
            <span className="hover:text-[#DDF32C] cursor-pointer transition-colors">Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
