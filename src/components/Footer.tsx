import React from 'react';
import { UyolLogo } from './UyolLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenDownload }) => {
  return (
    <footer className="bg-[#181818] text-neutral-400 py-12 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Platform Tag */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <UyolLogo variant="horizontal" theme="dark" size="md" />
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="text-neutral-400 text-xs">
              Şəhərlərarası sərnişin və bağlama daşıma platforması
            </span>
          </div>

          {/* Quick Nav Mirrors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 font-medium">
            <a href="#nece-isleyir" className="hover:text-[#DDF32C] transition-colors">
              Necə işləyir
            </a>
            <a href="#sernisinler" className="hover:text-[#DDF32C] transition-colors">
              Sərnişinlər
            </a>
            <a href="#baglamalar" className="hover:text-[#DDF32C] transition-colors">
              Bağlamalar
            </a>
            <a href="#suruculer" className="hover:text-[#DDF32C] transition-colors">
              Sürücülər
            </a>
            <a href="#faq" className="hover:text-[#DDF32C] transition-colors">
              Sual-cavab
            </a>
          </div>

          {/* Download Quick Button */}
          <div>
            <button
              onClick={onOpenDownload}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-semibold"
            >
              Tətbiqi yüklə
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright (Strictly compliant with prohibitions) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} UYOL. Bütün hüquqlar qorunur.
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors underline underline-offset-4"
            >
              Məxfilik siyasəti
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-neutral-300 transition-colors underline underline-offset-4"
            >
              İstifadə şərtləri
            </button>
          </div>

          {/* Social placeholders */}
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
