import React, { useState } from 'react';
import { Car, Bell, Users, RefreshCw, CheckCircle2, ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';

interface DriverSectionProps {
  onOpenDownload: () => void;
}

export const DriverSection: React.FC<DriverSectionProps> = ({ onOpenDownload }) => {
  const [activeDriverTab, setActiveDriverTab] = useState<'flow' | 'transfer' | 'signup'>('flow');

  return (
    <section id="suruculer" className="py-20 md:py-28 bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DDF32C]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#DDF32C] mb-2">
            UYOL Driver
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Sifariş qovmursan — <br />
            <span className="text-[#DDF32C]">öz gedişini elan edirsən</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
            UYOL Driver tətbiqində sizə təsadüfi sifariş təklifləri gəlmir. Şəhərlərarası gedişinizi əvvəlcədən təyin edirsiniz, yalnız yer və ya bağlama bron edildikdə sakit bildiriş alırsınız.
          </p>
        </div>

        {/* Mascot & Minivan Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Driver Mascot Visual */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#252525] rounded-3xl border border-white/10 group">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden mb-4 bg-[#1E1E1E] flex items-center justify-center">
              <img
                src="/src/assets/images/driver_mascot_1794296740724.jpg"
                alt="UYOL Sürücü Mascotu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-[#DDF32C] tracking-wide block mb-1">
                UYOL SÜRÜCÜSÜ
              </span>
              <p className="text-xs text-neutral-400">
                Öz vaxtının və marşrutunun sahibi. Sərbəst qrafik və şəffaf gəlir.
              </p>
            </div>
          </div>

          {/* Minivan Visual & Core Rules */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#252525] relative">
              <div className="relative h-56 sm:h-64 w-full bg-[#1E1E1E]">
                <img
                  src="/src/assets/images/lime_minivan_1794296741950.jpg"
                  alt="UYOL Şəhərlərarası Mikroavtobus"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#DDF32C] text-[#1E1E1E] rounded-full">
                    Gediş modeli
                  </span>
                  <span className="text-xs font-medium text-neutral-300">
                    Sedan, Minivan və Mikroavtobuslar
                  </span>
                </div>
              </div>

              {/* 3 Key Driver Benefits */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs">
                <div>
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-[#DDF32C]" />
                    <span>Sakit Bildirişlər</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">
                    Sifariş tələsi yoxdur. Yalnız yer və ya bağlama bron olunduqda bildiriş alırsınız.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-[#DDF32C]" />
                    <span>Sərnişin Ötürmə</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">
                    Fors-major halında sərnişini və ya bağlamanı eyni marşrutdakı digər UYOL sürücüsünə rəsmi ötürə bilərsiniz.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#DDF32C]" />
                    <span>Sürətli Təsdiq</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">
                    Sənədlərinizi və avtomobil şəkillərini tətbiq daxilində rahat yükləyin və təsdiq alın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver App Feature Steps Interactive Switch */}
        <div className="bg-[#262626] rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                UYOL Driver tətbiqi necə işləyir?
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Sürücü üçün nəzərdə tutulmuş xüsusi funksiyalar və sadələşdirilmiş idarəetmə.
              </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex bg-[#1E1E1E] p-1 rounded-xl">
              <button
                onClick={() => setActiveDriverTab('flow')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'flow'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Gediş Elanı
              </button>
              <button
                onClick={() => setActiveDriverTab('transfer')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'transfer'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Sərnişin Ötürmə
              </button>
              <button
                onClick={() => setActiveDriverTab('signup')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'signup'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Qeydiyyat Mərhələləri
              </button>
            </div>
          </div>

          {/* Dynamic Driver Tab Content */}
          {activeDriverTab === 'flow' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs animate-fade-in">
              <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] text-[#DDF32C] font-bold">ADDIM 1</span>
                <h4 className="text-sm font-bold text-white">Gedişini qeyd et</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Çıxış şəhərini, təyinat məntəqəsini, tarixi, çıxış saatını və boş oturacaq sayını daxil edin.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] text-[#DDF32C] font-bold">ADDIM 2</span>
                <h4 className="text-sm font-bold text-white">Bron bildirişi al</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Sərnişin yer seçib bilet aldıqda və ya bağlama qeydiyyatdan keçdikdə dərhal bildiriş ekranınıza gəlir.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-2">
                <span className="font-mono text-[10px] text-[#DDF32C] font-bold">ADDIM 3</span>
                <h4 className="text-sm font-bold text-white">Yola çıx və tamamla</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Tətbiq sərnişinlərə avtomatik yaxınlaşma bildirişləri göndərir. Çatdıqda "Çatdırıldı" ilə gedişi bağlayın.
                </p>
              </div>
            </div>
          )}

          {activeDriverTab === 'transfer' && (
            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 text-xs animate-fade-in space-y-3">
              <div className="flex items-center gap-2 text-[#DDF32C] font-bold text-sm">
                <RefreshCw className="w-4 h-4" />
                <span>Sürücülər Arasında Rəsmi Sərnişin və Bağlama Transferi</span>
              </div>
              <p className="text-neutral-300 leading-relaxed text-xs">
                Yolda avtomobilinizdə nasazlıq yarandıqda və ya hər hansı təxirəsalınmaz maneə olduqda, sərnişinləriniz və ya bağlamalarınız çətin vəziyyətdə qalmır. UYOL Driver tətbiqində "Ötürmə" bölməsindən həmin istiqamətdə yaxınlıqda hərəkət edən digər UYOL sürücüsünü seçərək sərnişin və ya bağlamanı rəsmi şəkildə ötürə bilərsiniz.
              </p>
            </div>
          )}

          {activeDriverTab === 'signup' && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs animate-fade-in">
              <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                <div className="font-bold text-white mb-1">1. Şəxsi Məlumat</div>
                <p className="text-[11px] text-neutral-400">Şəxsiyyət vəsiqəsi və əlaqə nömrəsi.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                <div className="font-bold text-white mb-1">2. Sürücülük Vəsiqəsi</div>
                <p className="text-[11px] text-neutral-400">Kateqoriyaya uyğun sürücülük vəsiqəsi fotosu.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                <div className="font-bold text-white mb-1">3. Avtomobil Sənədləri</div>
                <p className="text-[11px] text-neutral-400">Texniki pasport və sığorta şəhadətnaməsi.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                <div className="font-bold text-white mb-1">4. Avtomobil Şəkilləri</div>
                <p className="text-[11px] text-neutral-400">Avtomobilin xarici və salon şəkilləri.</p>
              </div>
            </div>
          )}

          {/* CTA Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Sürücü tətbiqi iOS və Android cihazlar üçün tam optimallaşdırılıb.
            </span>
            <button
              onClick={onOpenDownload}
              className="px-6 py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>UYOL Driver-i yüklə</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
