import React, { useState } from 'react';
import { Camera, Scan, CheckCircle, Sparkles, Box, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface VolumeArDemoProps {
  currentLang: Language;
}

export const VolumeArDemo: React.FC<VolumeArDemoProps> = ({ currentLang }) => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [hasScanned, setHasScanned] = useState<boolean>(false);
  const t = translations[currentLang];

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 1400);
  };

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanatory Context */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.volumeDemo.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              {t.volumeDemo.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {t.volumeDemo.subtitle}
            </p>

            <div className="p-4 bg-purple-50/70 border border-purple-200/80 rounded-2xl space-y-2 text-xs text-purple-950">
              <div className="flex items-center gap-2 font-bold">
                <Info className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Niyə vacibdir?</span>
              </div>
              <p className="leading-relaxed text-purple-900">
                Sürücünün baqajında bağlamanız üçün yetərli yer olub-olmadığını qabaqcadan təyin edir və hər hansı anlaşılmazlığın qarşısını alır.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Simulated AR Camera Viewport */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md bg-neutral-950 rounded-3xl p-5 shadow-xl border border-neutral-800 text-white space-y-4">
              {/* Camera Header */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-neutral-200">AR Kamera Simulyatoru</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400">Canlı Sensor</span>
              </div>

              {/* Viewport Frame */}
              <div className="relative h-64 bg-neutral-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 border border-neutral-800/80">
                {/* AR Crosshairs / Corner Marks */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-blue-400" />
                <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-blue-400" />
                <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-blue-400" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-blue-400" />

                {/* 3D Box Wireframe Mockup */}
                <div
                  className={`w-36 h-28 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-all ${
                    isScanning
                      ? 'border-purple-400 bg-purple-950/30 scale-105'
                      : hasScanned
                      ? 'border-emerald-400 bg-emerald-950/30'
                      : 'border-blue-400/70 bg-blue-950/20'
                  }`}
                >
                  <Box
                    className={`w-10 h-10 transition-colors ${
                      hasScanned ? 'text-emerald-400' : 'text-blue-400'
                    }`}
                  />
                  <span className="text-[10px] font-mono mt-1 text-neutral-300">
                    {isScanning
                      ? 'Skan edilir...'
                      : hasScanned
                      ? '35 x 22 x 18 sm'
                      : 'Bağlamanı çərçivəyə salın'}
                  </span>
                </div>

                {/* Scanning laser beam animation */}
                {isScanning && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_#a855f7] animate-pulse" />
                )}
              </div>

              {/* Measurement Action & Output */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Scan className="w-4 h-4" />
                  <span>
                    {isScanning
                      ? t.volumeDemo.measuring
                      : t.volumeDemo.measureButton}
                  </span>
                </button>

                {/* Results Panel */}
                <div className="bg-neutral-900 p-3.5 rounded-xl border border-neutral-800 space-y-2 text-left">
                  <div className="text-[11px] font-bold text-neutral-300">
                    {t.volumeDemo.resultTitle}
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-neutral-950 p-2 rounded-lg">
                      <span className="block text-[10px] text-neutral-400">{t.volumeDemo.lengthLabel}</span>
                      <span className="text-xs font-mono font-bold text-white">35 sm</span>
                    </div>
                    <div className="bg-neutral-950 p-2 rounded-lg">
                      <span className="block text-[10px] text-neutral-400">{t.volumeDemo.widthLabel}</span>
                      <span className="text-xs font-mono font-bold text-white">22 sm</span>
                    </div>
                    <div className="bg-neutral-950 p-2 rounded-lg">
                      <span className="block text-[10px] text-neutral-400">{t.volumeDemo.heightLabel}</span>
                      <span className="text-xs font-mono font-bold text-white">18 sm</span>
                    </div>
                    <div className="bg-neutral-950 p-2 rounded-lg">
                      <span className="block text-[10px] text-neutral-400">{t.volumeDemo.volumeLabel}</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">~13.8 L</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.volumeDemo.fitNote}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
