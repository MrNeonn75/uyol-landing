import React, { useState } from 'react';
import { X, Smartphone, Apple, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { UyolLogo } from './UyolLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'user' | 'driver'>('user');

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 9) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setPhoneNumber('');
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#1E1E1E] text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <UyolLogo size="md" theme="dark" />
          <span className="text-xs font-semibold px-2.5 py-1 bg-[#DDF32C]/20 text-[#DDF32C] rounded-full">
            Rəsmi Tətbiq
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight mb-2">
          {activeTab === 'user' ? 'UYOL Sərnişin Tətbiqini Yüklə' : 'UYOL Driver Tətbiqini Yüklə'}
        </h3>
        <p className="text-sm text-neutral-400 mb-6">
          Şəhərlərarası rahat gedişlər və etibarlı bağlama daşınması cibinizdə.
        </p>

        {/* Tab switch between User app and Driver app */}
        <div className="flex bg-[#2A2A2A] p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('user')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'user'
                ? 'bg-[#DDF32C] text-[#1E1E1E] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Sərnişin & Bağlama
          </button>
          <button
            onClick={() => setActiveTab('driver')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'driver'
                ? 'bg-[#DDF32C] text-[#1E1E1E] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            Sürücü (Driver)
          </button>
        </div>

        {/* Store Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a
            href="#app-store"
            onClick={(e) => {
              e.preventDefault();
              alert('UYOL iOS tətbiqi App Store-da tezliklə aktiv olacaq. TestFlight üçün nömrənizi qeyd edin.');
            }}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#2A2A2A] hover:bg-[#333333] border border-white/5 transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Apple className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Yükləyin</div>
              <div className="text-sm font-semibold text-white">App Store</div>
            </div>
          </a>

          <a
            href="#google-play"
            onClick={(e) => {
              e.preventDefault();
              alert('UYOL Android tətbiqi Google Play-də tezliklə aktiv olacaq. Erkən giriş üçün nömrənizi qeyd edin.');
            }}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#2A2A2A] hover:bg-[#333333] border border-white/5 transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Smartphone className="w-6 h-6 text-[#DDF32C]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Əldə edin</div>
              <div className="text-sm font-semibold text-white">Google Play</div>
            </div>
          </a>
        </div>

        {/* QR Code and SMS Link block */}
        <div className="p-4 rounded-2xl bg-[#252525] border border-white/5 mb-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="p-2 bg-white rounded-xl shrink-0">
            {/* High fidelity SVG QR code representation */}
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="white" />
              {/* Outer corners */}
              <rect x="10" y="10" width="28" height="28" fill="#1E1E1E" rx="4" />
              <rect x="16" y="16" width="16" height="16" fill="white" rx="2" />
              <rect x="20" y="20" width="8" height="8" fill="#1E1E1E" />

              <rect x="62" y="10" width="28" height="28" fill="#1E1E1E" rx="4" />
              <rect x="68" y="16" width="16" height="16" fill="white" rx="2" />
              <rect x="72" y="20" width="8" height="8" fill="#1E1E1E" />

              <rect x="10" y="62" width="28" height="28" fill="#1E1E1E" rx="4" />
              <rect x="16" y="68" width="16" height="16" fill="white" rx="2" />
              <rect x="20" y="72" width="8" height="8" fill="#1E1E1E" />

              {/* Data blocks and lime accent in center */}
              <rect x="44" y="14" width="8" height="8" fill="#1E1E1E" />
              <rect x="44" y="28" width="8" height="16" fill="#1E1E1E" />
              <rect x="44" y="44" width="12" height="12" fill="#DDF32C" />
              <rect x="24" y="46" width="10" height="8" fill="#1E1E1E" />
              <rect x="62" y="46" width="14" height="8" fill="#1E1E1E" />
              <rect x="44" y="62" width="8" height="16" fill="#1E1E1E" />
              <rect x="62" y="62" width="8" height="8" fill="#1E1E1E" />
              <rect x="76" y="62" width="14" height="8" fill="#1E1E1E" />
              <rect x="62" y="78" width="18" height="10" fill="#1E1E1E" />
            </svg>
          </div>
          <div className="text-center sm:text-left text-xs">
            <div className="font-semibold text-white mb-1">Kameranızla oxudun</div>
            <p className="text-neutral-400 leading-relaxed">
              Mobil telefonunuzun kamerasını QR koda tutaraq dərhal yükləmə səhifəsinə keçin.
            </p>
          </div>
        </div>

        {/* SMS Phone Form */}
        <form onSubmit={handleSendLink} className="space-y-3">
          <label className="block text-xs font-medium text-neutral-300">
            Və ya telefon nömrənizi yazın, linki göndərək:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-neutral-400">
                +994
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="50 123 45 67"
                className="w-full pl-14 pr-3 py-2.5 bg-[#2A2A2A] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#DDF32C] transition-colors"
                maxLength={12}
                required
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#DDF32C] text-[#1E1E1E] font-semibold rounded-xl text-xs flex items-center gap-1.5 hover:bg-[#cbe020] transition-colors shrink-0"
            >
              {isSent ? (
                <>
                  <Check className="w-4 h-4" /> Göndərildi
                </>
              ) : (
                <>
                  Göndər <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
          {isSent && (
            <p className="text-xs text-[#DDF32C] flex items-center gap-1 mt-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Yükləmə linki nömrənizə göndərildi!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
