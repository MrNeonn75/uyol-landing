import React, { useState } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { UyolLogo } from './UyolLogo';

interface HeaderProps {
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'AZ' | 'EN' | 'RU'>('AZ');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const navLinks = [
    { label: 'Necə işləyir', href: '#nece-isleyir' },
    { label: 'Sərnişinlər', href: '#sernisinler' },
    { label: 'Bağlamalar', href: '#baglamalar' },
    { label: 'Sürücülər', href: '#suruculer' },
    { label: 'Sual-cavab', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E1E1E]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (One line wordmark) */}
        <a
          href="#"
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          aria-label="UYOL Ana Səhifə"
        >
          <UyolLogo variant="horizontal" theme="dark" size="md" />
        </a>

        {/* Zone 2: 4-5 nav links (single-line, concise) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-[#DDF32C] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Language Selector */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Dili dəyiş"
            >
              <Globe className="w-3.5 h-3.5 text-[#DDF32C]" />
              <span>{currentLang}</span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-1 w-24 bg-[#252525] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                {(['AZ', 'EN', 'RU'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setShowLangDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors ${
                      currentLang === lang ? 'text-[#DDF32C] font-bold' : 'text-neutral-300'
                    }`}
                  >
                    {lang === 'AZ' ? 'Azərbaycan' : lang === 'EN' ? 'English' : 'Русский'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenDownload}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Tətbiqi yüklə</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E1E1E] border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-neutral-300 hover:text-[#DDF32C] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Dil seçimi:</span>
              <div className="flex gap-2">
                {(['AZ', 'EN', 'RU'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      currentLang === lang ? 'bg-[#DDF32C] text-[#1E1E1E]' : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
