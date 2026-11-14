import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, QrCode } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const AppScreensGallery: React.FC = () => {
  const [appType, setAppType] = useState<'user' | 'driver'>('user');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const { t } = useLanguage();

  const filteredScreens = t.screens.items.filter((s) => s.appType === appType);
  const currentScreen = filteredScreens[activeScreenIndex] || filteredScreens[0];

  const handleNext = () => {
    setActiveScreenIndex((prev) => (prev + 1) % filteredScreens.length);
  };

  const handlePrev = () => {
    setActiveScreenIndex((prev) => (prev - 1 + filteredScreens.length) % filteredScreens.length);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FCFCFC] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            {t.screens.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight mb-4">
            {t.screens.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-balance">
            {t.screens.subtitle}
          </p>

          <div className="mt-8 inline-flex p-1.5 bg-[#E6E6E6] rounded-2xl">
            <button
              onClick={() => {
                setAppType('user');
                setActiveScreenIndex(0);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                appType === 'user'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {t.screens.tabUser}
            </button>
            <button
              onClick={() => {
                setAppType('driver');
                setActiveScreenIndex(0);
              }}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                appType === 'driver'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {t.screens.tabDriver}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[300px] sm:w-[320px] bg-[#1E1E1E] p-3.5 rounded-[46px] shadow-2xl border-4 border-[#333333]">
              <div className="w-24 h-4 bg-[#2A2A2A] rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>

              <div className="bg-[#F2F2F2] rounded-[34px] min-h-[500px] p-4 text-[#333333] flex flex-col justify-between overflow-hidden shadow-inner">
                {renderPhoneContent(currentScreen.id, appType)}

                <div className="mt-auto pt-3 border-t border-neutral-200/80 flex items-center justify-around text-[10px] text-neutral-500">
                  <div className="flex flex-col items-center font-bold text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DDF32C] mb-0.5" />
                    <span>{t.screens.navItems[0]}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{t.screens.navItems[1]}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{t.screens.navItems[2]}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{t.screens.navItems[3]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {t.screens.selectScreenLabel}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                  aria-label="Prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs text-neutral-500">
                  {activeScreenIndex + 1} / {filteredScreens.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredScreens.map((screen, idx) => {
                const isActive = idx === activeScreenIndex;
                return (
                  <div
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                      isActive
                        ? 'bg-white border-[#1E1E1E] shadow-md ring-1 ring-[#1E1E1E]'
                        : 'bg-[#F2F2F7] border-neutral-200/80 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-[#3DB52F] bg-[#3DB52F]/10 px-2 py-0.5 rounded-full">
                        {screen.tag}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-1">
                      {screen.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function renderPhoneContent(screenId: string, type: 'user' | 'driver') {
    if (type === 'user') {
      if (screenId === 'screen-1') {
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-neutral-900">{t.screens.simTripsTitle}</span>
              <span className="text-[10px] text-neutral-400">Bakı → Qəbələ</span>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-neutral-900">10:00 — 14:30</span>
                <span className="bg-[#F4FBD0] text-[#1E1E1E] px-2 py-0.5 rounded font-bold text-[11px]">14 ₼</span>
              </div>
              <div className="text-[11px] text-neutral-500">Elmir M. · Mercedes Vito</div>
              <div className="flex gap-1.5 pt-1">
                <span className="text-[9px] bg-[#DDF32C] text-[#1E1E1E] px-2 py-0.5 rounded font-semibold">{t.passenger.doorToDoor}</span>
                <span className="text-[9px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-semibold">{t.hero.mockupOneSeatLeft}</span>
              </div>
            </div>
            <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-neutral-900">12:30 — 17:15</span>
                <span className="bg-[#F4FBD0] text-[#1E1E1E] px-2 py-0.5 rounded font-bold text-[11px]">18 ₼</span>
              </div>
              <div className="text-[11px] text-neutral-500">Rəşad Q. · Toyota Camry</div>
              <div className="flex gap-1.5 pt-1">
                <span className="text-[9px] bg-[#DDF32C] text-[#1E1E1E] px-2 py-0.5 rounded font-semibold">{t.passenger.doorToDoor}</span>
                <span className="text-[9px] bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded font-medium">2 {t.passenger.seatsLeftSuffix}</span>
              </div>
            </div>
          </div>
        );
      }

      if (screenId === 'screen-2') {
        return (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-neutral-900">{t.screens.simSeatTitle}</span>
              <span className="text-[10px] text-[#3DB52F]">{t.screens.simSeatPicked}</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-neutral-200 text-center space-y-3">
              <div className="text-[11px] text-neutral-500">{t.screens.simCabinSplit}</div>
              <div className="grid grid-cols-2 gap-2 max-w-[160px] mx-auto py-2">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-semibold">1 ({t.passenger.legendMale})</div>
                <div className="p-2 bg-pink-100 text-pink-700 rounded-lg text-[10px] font-semibold">2 ({t.passenger.legendFemale})</div>
                <div className="p-2 bg-pink-100 text-pink-700 rounded-lg text-[10px] font-semibold">3 ({t.passenger.legendFemale})</div>
                <div className="p-2 bg-[#DDF32C] text-[#1E1E1E] rounded-lg text-[10px] font-bold ring-2 ring-[#1E1E1E]">4 ({t.passenger.legendYours})</div>
              </div>
              <div className="text-[10px] text-neutral-400">{t.screens.simOtpNote}</div>
            </div>
          </div>
        );
      }

      if (screenId === 'screen-3') {
        return (
          <div className="space-y-2">
            <div className="text-xs font-bold text-neutral-900 pb-1">{t.screens.simTicketTitle}</div>
            <div className="bg-[#1E1E1E] text-white p-3 rounded-t-2xl">
              <div className="flex justify-between text-[10px] text-neutral-300">
                <span>Bakı &gt;&gt; Qəbələ</span>
                <span className="text-[#DDF32C] font-bold">14 ₼</span>
              </div>
              <div className="text-xs font-bold mt-1">10:00 · 12.11</div>
            </div>
            <div className="bg-white p-3 rounded-b-2xl border-x border-b border-neutral-200 space-y-2 text-[10px]">
              <div className="flex justify-between">
                <span className="text-neutral-500">{t.hero.mockupPassengerLabel}</span>
                <span className="font-semibold text-neutral-900">Nicat Ə.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">{t.passenger.driverLabel}:</span>
                <span className="font-semibold text-neutral-900">Elmir M.</span>
              </div>
              <div className="pt-2 flex justify-center">
                <QrCode className="w-12 h-12 text-neutral-800" />
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-3">
          <div className="text-xs font-bold text-neutral-900 pb-1">{t.screens.simParcelTitle}</div>
          <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2 text-[11px]">
            <div className="flex justify-between">
              <span className="text-neutral-500">{t.hero.mockupStatusLabel}</span>
              <span className="text-[#3DB52F] font-bold">{t.screens.simParcelStatus}</span>
            </div>
            <div className="text-neutral-700">{t.screens.simParcelApproaching}</div>
            <div className="p-2 bg-neutral-100 rounded-lg text-[10px] text-neutral-600">
              {t.screens.simParcelCode} <strong>492</strong>
            </div>
          </div>
        </div>
      );
    }

    if (screenId === 'screen-5') {
      return (
        <div className="space-y-3">
          <div className="text-xs font-bold text-neutral-900 pb-1">{t.screens.simDriverPostTitle}</div>
          <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2 text-xs">
            <div className="text-[10px] text-neutral-500">{t.screens.simDriverRoute}</div>
            <div className="font-semibold text-neutral-800">Bakı → Qəbələ</div>
            <div className="text-[10px] text-neutral-500 pt-1">{t.screens.simDriverTime}</div>
            <div className="font-semibold text-neutral-800">10:00 (12.11)</div>
            <div className="text-[10px] text-neutral-500 pt-1">{t.screens.simDriverSeats}</div>
            <div className="font-semibold text-neutral-800">{t.screens.simDriverSeatsVal}</div>
            <div className="pt-2">
              <div className="w-full py-2 bg-[#DDF32C] text-[#1E1E1E] text-center font-bold text-[11px] rounded-lg">
                {t.screens.simDriverCreateBtn}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (screenId === 'screen-6') {
      return (
        <div className="space-y-3">
          <div className="text-xs font-bold text-neutral-900 pb-1">{t.screens.simDriverNotifTitle}</div>
          <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-[#3DB52F] font-bold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.screens.simDriverNotifBooked}</span>
            </div>
            <div className="text-neutral-700 text-[11px]">{t.screens.simDriverNotifPassenger}</div>
            <div className="text-neutral-500 text-[10px]">{t.screens.simDriverNotifTime}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        <div className="text-xs font-bold text-neutral-900 pb-1">{t.screens.simDriverTransferTitle}</div>
        <div className="bg-white p-3 rounded-2xl border border-neutral-200 space-y-2 text-xs">
          <div className="text-[11px] font-semibold text-neutral-800">{t.screens.simDriverTransferNear}</div>
          <div className="p-2 bg-neutral-100 rounded-lg text-[10px] space-y-1">
            <div className="font-bold text-neutral-800">Vüqar Ə. · Sprinter</div>
            <div className="text-neutral-500">{t.screens.simDriverTransferDist}</div>
          </div>
          <div className="pt-1">
            <div className="w-full py-1.5 bg-[#1E1E1E] text-white text-center font-semibold text-[10px] rounded-lg">
              {t.screens.simDriverTransferBtn}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
