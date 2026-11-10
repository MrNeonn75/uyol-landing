import React from 'react';
import { Apple, Smartphone, QrCode, ArrowUpRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { UyolLogo } from './UyolLogo';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenTicket: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenTicket }) => {
  return (
    <section className="relative hero-glow curved-bottom text-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DDF32C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#DDF32C]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Quiet kicker text (No pills, clean unboxed typography) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DDF32C]">
              <span>Şəhərlərarası Sərnişin & Bağlama Platforması</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">Azərbaycan</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Şəhərlər arası yolu <span className="text-[#DDF32C]">özün seç</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
              İstiqaməti, çıxış vaxtını, avtomobili və sürücünü sərbəst seç. Yerini qabaqcadan bron et, bağlamanı isə qapıdan-qapıya canlı izləmə ilə çatdır.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-sm rounded-2xl shadow-lg shadow-[#DDF32C]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Apple className="w-5 h-5" />
                <span>App Store-dan yüklə</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-2xl border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <Smartphone className="w-5 h-5 text-[#DDF32C]" />
                <span>Google Play-dən əldə et</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors hidden sm:flex items-center justify-center"
                title="QR kod ilə tez yüklə"
                aria-label="QR kod ilə tez yüklə"
              >
                <QrCode className="w-5 h-5" />
              </button>
            </div>

            {/* Micro value reassurance (clean inline text) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#DDF32C]" />
                <span>Qeydiyyatsız sərbəst axtarış</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#DDF32C]" />
                <span>Kişi və Qadın yer seçimi</span>
              </div>
              <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#DDF32C]" />
                <span>Avtomatik təkrar təyinat zəmanəti</span>
              </div>
            </div>
          </div>

          {/* Right Column: Two Phone Mockups with Float Animation */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Phone 1: Gedişlər (Trips Screen) */}
            <div className="relative z-20 w-[270px] sm:w-[290px] bg-[#1E1E1E] p-3 rounded-[40px] shadow-2xl border-4 border-[#333333] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Phone Speaker & Camera Notch */}
              <div className="w-24 h-4 bg-[#2A2A2A] rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-700" />
              </div>

              {/* Screen Content: User App Header & Trip Card */}
              <div className="bg-[#F2F2F2] rounded-[30px] p-3.5 text-[#333333] space-y-3 overflow-hidden">
                {/* App Status & Title */}
                <div className="flex items-center justify-between pb-1">
                  <span className="text-[10px] font-bold tracking-tight text-[#1E1E1E] flex items-center gap-1">
                    <span className="text-[#DDF32C] bg-[#1E1E1E] px-1.5 py-0.5 rounded font-black">U</span> YOL
                  </span>
                  <span className="text-[9px] font-semibold text-[#3DB52F]">12 Noyabr · 4 gediş</span>
                </div>

                {/* Search summary */}
                <div className="bg-white p-2.5 rounded-xl border border-neutral-200 text-[11px] font-medium flex items-center justify-between">
                  <span className="text-neutral-800 font-semibold">Bakı &gt;&gt; Qəbələ</span>
                  <span className="text-[10px] text-neutral-400">1 sərnişin</span>
                </div>

                {/* Featured Trip Card */}
                <div className="bg-[#FCFCFC] rounded-2xl p-3 border border-neutral-200 shadow-sm space-y-2">
                  {/* Route & Times */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">10:00</div>
                      <div className="text-[10px] text-neutral-500">20 Yanvar</div>
                    </div>

                    {/* Chevron line */}
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-neutral-400 font-mono">4 saat 30 dəq</span>
                      <div className="flex items-center text-[#3DB52F] font-bold text-xs">
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-neutral-900">14:30</div>
                      <div className="text-[10px] text-neutral-500">Qəbələ Mərkəz</div>
                    </div>
                  </div>

                  {/* Driver and Car info */}
                  <div className="flex items-center justify-between pt-1 border-t border-neutral-100 text-[11px]">
                    <div>
                      <span className="font-semibold text-neutral-800">Elmir M.</span>
                      <span className="text-[10px] text-neutral-400 block">Mercedes Vito</span>
                    </div>
                    {/* Price Badge on soft lime */}
                    <div className="bg-[#F4FBD0] text-[#1E1E1E] px-2.5 py-1 rounded-lg font-bold text-xs">
                      14 ₼
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[9px] font-semibold bg-[#DDF32C] text-[#1E1E1E] px-2 py-0.5 rounded-full">
                      Qapıdan-Qapıya
                    </span>
                    <span className="text-[9px] font-semibold bg-[#FEE2E2] text-[#DC2626] px-2 py-0.5 rounded-full">
                      1 yer qalıb
                    </span>
                  </div>

                  {/* Booking CTA inside app */}
                  <button
                    onClick={onOpenTicket}
                    className="w-full py-2 bg-[#DDF32C] text-[#1E1E1E] font-bold text-[11px] rounded-xl text-center hover:bg-[#cbe020] transition-colors mt-1"
                  >
                    Yer seç və bron et
                  </button>
                </div>
              </div>
            </div>

            {/* Phone 2: Biletlərim (Perforated Ticket Card) - Shifted slightly behind */}
            <div className="hidden sm:block absolute right-0 -bottom-8 z-30 w-[240px] bg-[#1E1E1E] p-3 rounded-[36px] shadow-2xl border-4 border-[#333333] transform rotate-6 hover:rotate-3 transition-transform duration-500">
              <div className="w-16 h-3 bg-[#2A2A2A] rounded-full mx-auto mb-2" />
              {/* Ticket View */}
              <div className="bg-[#FCFCFC] rounded-2xl overflow-hidden text-[#333333] text-[10px] border border-neutral-200">
                <div className="bg-[#1E1E1E] text-white p-3">
                  <div className="flex justify-between items-center text-[9px] mb-1">
                    <span className="text-[#DDF32C] font-black">UYOL BİLET</span>
                    <span className="bg-[#DDF32C] text-[#1E1E1E] px-1.5 py-0.2 rounded font-semibold text-[8px]">
                      № 04
                    </span>
                  </div>
                  <div className="font-bold text-xs">Bakı &gt;&gt; Qəbələ</div>
                  <div className="text-neutral-400 text-[9px]">10:00 · 12 Noyabr</div>
                </div>

                {/* Perforation line */}
                <div className="relative flex items-center justify-between bg-[#FCFCFC] h-4">
                  <div className="w-3 h-4 bg-[#1E1E1E] rounded-r-full -ml-0.5" />
                  <div className="flex-1 border-t border-dashed border-neutral-300 mx-1" />
                  <div className="w-3 h-4 bg-[#1E1E1E] rounded-l-full -mr-0.5" />
                </div>

                <div className="p-3 pt-0 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Sərnişin:</span>
                    <span className="font-semibold text-neutral-800">Nicat Ə.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Oturacaq:</span>
                    <span className="font-semibold text-neutral-800">4 (Kişi yeri)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Status:</span>
                    <span className="text-[#3DB52F] font-semibold">Təsdiqləndi</span>
                  </div>

                  {/* QR code mini */}
                  <div className="pt-2 flex justify-center">
                    <div className="w-14 h-14 bg-neutral-100 p-1 rounded border border-neutral-200 flex items-center justify-center">
                      <QrCode className="w-10 h-10 text-neutral-800" />
                    </div>
                  </div>
                  <button
                    onClick={onOpenTicket}
                    className="w-full py-1 text-center text-[9px] text-[#333333] font-semibold underline hover:text-black mt-1"
                  >
                    Biletə tam baxış
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
