import React, { useState } from 'react';
import { Camera, Sparkles, Box } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ArMeasureTeaser: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const { t } = useLanguage();

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2500);
  };

  return (
    <section className="py-20 md:py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1E1E] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#DDF32C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DDF32C]/20 border border-[#DDF32C]/30 rounded-full text-xs font-semibold text-[#DDF32C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.arMeasure.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t.arMeasure.titleLine1} <br />
                <span className="text-[#DDF32C]">{t.arMeasure.titleLine2}</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
                {t.arMeasure.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                {t.arMeasure.highlights.map((hl, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#2A2A2A] border border-white/5">
                    <div className="text-[#DDF32C] font-bold mb-1">{hl.title}</div>
                    <div className="text-neutral-400 text-[11px]">{hl.description}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSimulateScan}
                  disabled={isScanning}
                  className="px-6 py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>{isScanning ? t.arMeasure.btnScanning : t.arMeasure.btnStart}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] bg-[#121212] rounded-3xl p-4 border border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#DDF32C] rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#DDF32C] rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#DDF32C] rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#DDF32C] rounded-br-lg" />

                <div className="relative z-10 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#DDF32C] font-bold">AR CAMERA SCAN</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-neutral-300">
                    {isScanning ? t.arMeasure.camStatusScanning : t.arMeasure.camStatusReady}
                  </span>
                </div>

                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
                  <div className={`relative p-6 rounded-2xl border-2 border-dashed ${isScanning ? 'border-[#DDF32C] animate-pulse' : 'border-neutral-500'} bg-white/5`}>
                    <Box className={`w-16 h-16 ${isScanning ? 'text-[#DDF32C]' : 'text-neutral-400'} mx-auto transition-colors`} />

                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t.arMeasure.dimLength}
                    </span>
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t.arMeasure.dimWidth}
                    </span>
                    <span className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t.arMeasure.dimHeight}
                    </span>
                  </div>

                  <div className="mt-6 text-center">
                    <span className="text-[11px] text-neutral-400 block font-mono">{t.arMeasure.estVolumeLabel}</span>
                    <span className="text-lg font-bold text-white font-mono">
                      {t.arMeasure.estVolumeValue}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-white/10 text-center text-[10px] text-neutral-400">
                  {t.arMeasure.camHint}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
