import React, { useState } from 'react';
import { Apple, Smartphone, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { UyolLogo } from './UyolLogo';

interface FinalCtaProps {
  onOpenDownload: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDownload }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
    <section className="py-20 md:py-28 bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DDF32C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical UYOL Splash Wordmark Representation */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="p-8 rounded-3xl bg-[#252525] border border-white/10 flex flex-col items-center justify-center shadow-xl">
              <UyolLogo variant="vertical" theme="dark" />
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-4 font-mono">
                Şəhərlərarası Yol
              </span>
            </div>
          </div>

          {/* Central Call to Action Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Yolunuz açıq, <br />
              <span className="text-[#DDF32C]">gedişiniz rahat olsun</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
              UYOL mobil tətbiqini indi yükləyin. Şəhərlərarası gedişlərinizi və bağlamalarınızı vaxtında, etibarlı və şəffaf şəkildə idarə edin.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Apple className="w-5 h-5" />
                <span>App Store-dan yüklə</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-2xl border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Smartphone className="w-5 h-5 text-[#DDF32C]" />
                <span>Google Play-dən əldə et</span>
              </button>
            </div>

            {/* SMS Link Input Form */}
            <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto lg:mx-0 space-y-2">
              <div className="text-xs text-neutral-400">
                Nömrənizi qeyd edin, birbaşa yükləmə linkini göndərək:
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400">
                    +994
                  </span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="50 123 45 67"
                    className="w-full pl-16 pr-3 py-2.5 bg-[#2A2A2A] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DDF32C]"
                    maxLength={12}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#DDF32C] text-[#1E1E1E] font-semibold text-xs rounded-xl hover:bg-[#cbe020] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {isSent ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Göndərildi
                    </>
                  ) : (
                    <>
                      Göndər <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
              {isSent && (
                <div className="text-xs text-[#DDF32C] flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Link SMS vasitəsilə göndərildi!
                </div>
              )}
            </form>
          </div>

          {/* QR Code Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="p-6 rounded-3xl bg-[#252525] border border-white/10 text-center space-y-3 max-w-[240px] shadow-xl">
              <div className="p-3 bg-white rounded-2xl inline-block shadow-inner">
                {/* Crisp SVG QR Code */}
                <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="white" />
                  <rect x="8" y="8" width="28" height="28" fill="#1E1E1E" rx="4" />
                  <rect x="14" y="14" width="16" height="16" fill="white" rx="2" />
                  <rect x="18" y="18" width="8" height="8" fill="#1E1E1E" />

                  <rect x="64" y="8" width="28" height="28" fill="#1E1E1E" rx="4" />
                  <rect x="70" y="14" width="16" height="16" fill="white" rx="2" />
                  <rect x="74" y="18" width="8" height="8" fill="#1E1E1E" />

                  <rect x="8" y="64" width="28" height="28" fill="#1E1E1E" rx="4" />
                  <rect x="14" y="70" width="16" height="16" fill="white" rx="2" />
                  <rect x="18" y="74" width="8" height="8" fill="#1E1E1E" />

                  <rect x="42" y="12" width="10" height="10" fill="#1E1E1E" />
                  <rect x="42" y="28" width="10" height="16" fill="#1E1E1E" />
                  <rect x="44" y="44" width="12" height="12" fill="#DDF32C" />
                  <rect x="22" y="44" width="10" height="10" fill="#1E1E1E" />
                  <rect x="64" y="44" width="14" height="8" fill="#1E1E1E" />
                  <rect x="42" y="64" width="10" height="16" fill="#1E1E1E" />
                  <rect x="64" y="64" width="10" height="10" fill="#1E1E1E" />
                  <rect x="78" y="64" width="14" height="8" fill="#1E1E1E" />
                  <rect x="64" y="80" width="20" height="12" fill="#1E1E1E" />
                </svg>
              </div>
              <div className="text-xs font-bold text-white">QR Kodu Oxudun</div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Kameranızı tuşlayaraq tətbiqi dərhal quraşdırın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
