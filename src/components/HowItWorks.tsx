import React, { useState } from 'react';
import { Users, Package, MapPin, Calendar, CreditCard, ShieldCheck, CheckCircle2, ChevronRight, Navigation } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HowItWorksProps {
  onOpenDownload: () => void;
  onOpenTracking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload, onOpenTracking }) => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'parcel'>('passenger');
  const { t } = useLanguage();

  const passengerIcons = [MapPin, Calendar, CreditCard, Navigation];
  const parcelIcons = [Package, Calendar, Navigation, ShieldCheck];

  const currentSteps =
    activeTab === 'passenger' ? t.howItWorks.passengerSteps : t.howItWorks.parcelSteps;
  const currentIcons = activeTab === 'passenger' ? passengerIcons : parcelIcons;

  return (
    <section id="nece-isleyir" className="py-20 md:py-28 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            {t.howItWorks.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-balance">
            {t.howItWorks.subtitle}
          </p>

          <div className="mt-8 inline-flex p-1.5 bg-[#E6E6E6] rounded-2xl">
            <button
              onClick={() => setActiveTab('passenger')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'passenger'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Users className="w-4 h-4 text-[#DDF32C]" />
              <span>{t.howItWorks.tabPassenger}</span>
            </button>
            <button
              onClick={() => setActiveTab('parcel')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'parcel'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Package className="w-4 h-4 text-[#DDF32C]" />
              <span>{t.howItWorks.tabParcel}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step, idx) => {
            const Icon = currentIcons[idx] || MapPin;
            return (
              <div
                key={step.num}
                className="bg-[#FCFCFC] rounded-3xl p-6 sm:p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-lg">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded-md border border-neutral-200/60">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#DDF32C]/25 text-[#1E1E1E] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-neutral-200 text-neutral-600 items-center justify-center">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3DB52F]/15 text-[#3DB52F] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-neutral-900 block">
                {activeTab === 'passenger'
                  ? t.howItWorks.calloutPassengerTitle
                  : t.howItWorks.calloutParcelTitle}
              </span>
              <span className="text-neutral-500">
                {activeTab === 'passenger'
                  ? t.howItWorks.calloutPassengerDesc
                  : t.howItWorks.calloutParcelDesc}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {activeTab === 'passenger' ? (
              <button
                onClick={onOpenDownload}
                className="px-5 py-2.5 bg-[#1E1E1E] text-white hover:bg-black font-semibold text-xs rounded-xl transition-colors"
              >
                {t.howItWorks.calloutPassengerBtn}
              </button>
            ) : (
              <button
                onClick={onOpenTracking}
                className="px-5 py-2.5 bg-[#DDF32C] text-[#1E1E1E] hover:bg-[#cbe020] font-bold text-xs rounded-xl transition-colors"
              >
                {t.howItWorks.calloutParcelBtn}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
