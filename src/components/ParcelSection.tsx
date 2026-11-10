import React from 'react';
import { Package, ShieldCheck, RefreshCw, Bell, MapPin, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { PARCEL_CHECKPOINTS } from '../data/uyolData';

interface ParcelSectionProps {
  onOpenTracking: () => void;
  onOpenDownload: () => void;
}

export const ParcelSection: React.FC<ParcelSectionProps> = ({ onOpenTracking, onOpenDownload }) => {
  return (
    <section id="baglamalar" className="py-20 md:py-28 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols): Copy & Key Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Şəhərlərarası Çatdırılma
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight leading-tight">
              Yalnız bağlama. <br />
              <span className="text-[#333333]">Hər addımda canlı nəzarət.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Karqo gözləmədən, şəxsi bağlamalarınızı və sənədlərinizi şəhərlər arasında hərəkət edən etibarlı sürücülərlə birbaşa göndərin. Həm göndərən, həm də alıcı tərəf canlı xəritədə bağlamanın yerini izləyir.
            </p>

            {/* Core Features List */}
            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FCFCFC] border border-neutral-200">
                <div className="w-10 h-10 rounded-xl bg-[#DDF32C]/30 text-[#1E1E1E] flex items-center justify-center shrink-0 mt-0.5">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-0.5">
                    Avtomatik Yeni Sürücü Təyinatı
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Əgər seçilmiş sürücü gözlənilmədən gedişi ləğv edərsə, sistemimiz bağlamanızı dərhal növbəti uyğun reysə yönləndirir. Yolda qalmaq yoxdur.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FCFCFC] border border-neutral-200">
                <div className="w-10 h-10 rounded-xl bg-[#DDF32C]/30 text-[#1E1E1E] flex items-center justify-center shrink-0 mt-0.5">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-0.5">
                    Vaxtında SMS və Tətbiq Bildirişləri
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Sürücü əvvəlki ünvandan çıxanda, təyinat məntəqəsinə 15 dəqiqə və 5 dəqiqə qalanda alıcıya avtomatik dəqiq xəbərdarlıq çatır.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FCFCFC] border border-neutral-200">
                <div className="w-10 h-10 rounded-xl bg-[#DDF32C]/30 text-[#1E1E1E] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-0.5">
                    "Çatdırıldı" Təhlükəsizlik Təsdiqi
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Sürücü bağlamanı təhvil verərkən alıcının təsdiq kodu ilə "Çatdırıldı" düyməsini sıxır və proses rəsmi başa çatır.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTracking}
                className="px-6 py-3 bg-[#1E1E1E] text-white hover:bg-black font-semibold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <span>İzləmə nümunəsini aç</span>
                <ExternalLink className="w-4 h-4 text-[#DDF32C]" />
              </button>

              <button
                onClick={onOpenDownload}
                className="px-6 py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <span>Bağlama göndər</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (6 cols): Visual Tracking Card & Mobile Milestone Timeline */}
          <div className="lg:col-span-6">
            <div className="bg-[#FCFCFC] rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Canlı Xəritə İzləməsi
                  </span>
                  <div className="text-lg font-bold text-neutral-900">
                    Bakı → Qəbələ Bağlaması
                  </div>
                </div>
                <div className="px-3 py-1 bg-[#DDF32C]/25 text-[#1E1E1E] rounded-full text-xs font-semibold">
                  Yoldadır
                </div>
              </div>

              {/* Route Summary Block */}
              <div className="bg-[#F2F2F7] rounded-2xl p-4 mb-6 border border-neutral-200/60">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-500 font-medium">Bağlama növü:</span>
                  <span className="font-semibold text-neutral-900">Sənədlər və kiçik bağlama</span>
                </div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-neutral-500 font-medium">Təhvil alan:</span>
                  <span className="font-semibold text-neutral-900">Aynur M. (+994 50 *** ** 12)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-medium">Təxmini çatdırılma:</span>
                  <span className="font-mono font-bold text-[#3DB52F]">14:05 (5 dəqiqə qaldı)</span>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200 mb-6">
                {PARCEL_CHECKPOINTS.map((checkpoint) => {
                  const isCompleted = checkpoint.status === 'completed';
                  const isCurrent = checkpoint.status === 'current';

                  return (
                    <div key={checkpoint.id} className="relative">
                      {/* Indicator */}
                      <div
                        className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                          isCompleted
                            ? 'bg-[#3DB52F] text-white'
                            : isCurrent
                            ? 'bg-[#DDF32C] text-[#1E1E1E] ring-4 ring-[#DDF32C]/40'
                            : 'bg-neutral-200 text-neutral-400'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                      </div>

                      <div className="flex items-start justify-between">
                        <div>
                          <div className={`text-xs font-semibold ${isCurrent ? 'text-neutral-900 font-bold' : 'text-neutral-700'}`}>
                            {checkpoint.title}
                          </div>
                          <p className="text-[11px] text-neutral-500 mt-0.5">
                            {checkpoint.description}
                          </p>
                        </div>
                        {checkpoint.time && (
                          <span className="text-[10px] font-mono text-neutral-400 ml-2 shrink-0">
                            {checkpoint.time}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action button inside card */}
              <button
                onClick={onOpenTracking}
                className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors text-center"
              >
                İzləmə pəncərəsini tam ekranda aç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
