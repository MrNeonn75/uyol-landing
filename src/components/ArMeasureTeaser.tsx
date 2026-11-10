import React, { useState } from 'react';
import { Camera, Sparkles, Box, Check, RefreshCw } from 'lucide-react';

export const ArMeasureTeaser: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

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
          {/* Background Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#DDF32C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Headline and Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DDF32C]/20 border border-[#DDF32C]/30 rounded-full text-xs font-semibold text-[#DDF32C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tezliklə</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Kamera ilə bağlama ölçüsü: <br />
                <span className="text-[#DDF32C]">Xətkeşsiz və dərhal</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
                Telefonunuzun kamerasını bağlamaya tutaraq ölçüləri (uzunluq, en, hündürlük) avtomatik təyin edin. Nə qədər yer tutacağını və dəqiq daşınma haqqını saniyələr içində öyrənin.
              </p>

              {/* 3 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-2xl bg-[#2A2A2A] border border-white/5">
                  <div className="text-[#DDF32C] font-bold mb-1">AR Texnologiyası</div>
                  <div className="text-neutral-400 text-[11px]">Cihazın kamerası ilə dəqiq 3D bucaq təyini.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#2A2A2A] border border-white/5">
                  <div className="text-[#DDF32C] font-bold mb-1">Avtomatik Həcm</div>
                  <div className="text-neutral-400 text-[11px]">Avtomobil baqajında tutacağı yerin hesablanması.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#2A2A2A] border border-white/5">
                  <div className="text-[#DDF32C] font-bold mb-1">Şəffaf Təklif</div>
                  <div className="text-neutral-400 text-[11px]">Sürücü ilə mübahisəsiz, standartlaşdırılmış həcm.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSimulateScan}
                  disabled={isScanning}
                  className="px-6 py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>{isScanning ? 'Kamera skan edir...' : 'Simulyasiyanı sına'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Simulated Camera Viewfinder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] bg-[#121212] rounded-3xl p-4 border border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden">
                {/* Viewfinder Corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#DDF32C] rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#DDF32C] rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#DDF32C] rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#DDF32C] rounded-br-lg" />

                {/* Top Viewfinder UI */}
                <div className="relative z-10 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#DDF32C] font-bold">AR CAMERA SCAN</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-neutral-300">
                    {isScanning ? 'Analiz olunur' : 'Hazır'}
                  </span>
                </div>

                {/* Center 3D Box Wireframe Mockup */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
                  <div className={`relative p-6 rounded-2xl border-2 border-dashed ${isScanning ? 'border-[#DDF32C] animate-pulse' : 'border-neutral-500'} bg-white/5`}>
                    <Box className={`w-16 h-16 ${isScanning ? 'text-[#DDF32C]' : 'text-neutral-400'} mx-auto transition-colors`} />

                    {/* Dimension Badges */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full">
                      Uzunluq: 38 sm
                    </span>
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full">
                      En: 25 sm
                    </span>
                    <span className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#1E1E1E] border border-white/20 text-[#DDF32C] text-[10px] font-mono px-2 py-0.5 rounded-full">
                      H: 20 sm
                    </span>
                  </div>

                  <div className="mt-6 text-center">
                    <span className="text-[11px] text-neutral-400 block font-mono">Təxmini Həcm</span>
                    <span className="text-lg font-bold text-white font-mono">
                      19.0 Litr (Orta Bağlama)
                    </span>
                  </div>
                </div>

                {/* Bottom Viewfinder Info */}
                <div className="relative z-10 pt-2 border-t border-white/10 text-center text-[10px] text-neutral-400">
                  Kameranı bağlamanın dörd küncünə yönəldin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
