import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Smartphone, ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenDownload,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.passengers, href: '#passengers' },
    { label: t.nav.parcels, href: '#parcels' },
    { label: t.nav.drivers, href: '#drivers' },
    { label: t.nav.screens, href: '#screens' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-neutral-200/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-900 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 shrink-0"
            aria-label="UYOL Ana Səhifə"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
              {/* Geometric U-YOL transit path glyph */}
              <svg
                width="22"
                height="22"
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
                <path
                  d="M12 13.5V20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-neutral-950 font-sans">
              UYOL
            </span>
          </a>

          {/* Zone 2: 4-5 Concise single-line text nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language switcher + 1 Primary Action button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/70 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-expanded={langDropdownOpen}
                aria-label="Dili dəyiş / Change language"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-28 bg-white border border-neutral-200 rounded-xl shadow-lg py-1.5 z-30">
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange('az');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-neutral-50 transition-colors ${
                        currentLang === 'az' ? 'text-blue-600 font-semibold' : 'text-neutral-700'
                      }`}
                    >
                      <span>Azərbaycan</span>
                      {currentLang === 'az' && <span className="text-blue-600">✓</span>}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-neutral-50 transition-colors ${
                        currentLang === 'en' ? 'text-blue-600 font-semibold' : 'text-neutral-700'
                      }`}
                    >
                      <span>English</span>
                      {currentLang === 'en' && <span className="text-blue-600">✓</span>}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange('ru');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-neutral-50 transition-colors ${
                        currentLang === 'ru' ? 'text-blue-600 font-semibold' : 'text-neutral-700'
                      }`}
                    >
                      <span>Русский</span>
                      {currentLang === 'ru' && <span className="text-blue-600">✓</span>}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap shrink-0"
            >
              <Smartphone className="w-4 h-4 hidden sm:inline" />
              <span>{t.nav.downloadBtn}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-200 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.nav.downloadBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
