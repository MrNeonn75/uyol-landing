import React, { useState } from 'react';
import {
  Users,
  Search,
  Eye,
  RefreshCw,
  Clock,
  Car,
  ShieldCheck,
  Star,
  MapPin,
  BellRing,
  CheckCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface PassengerSectionProps {
  currentLang: Language;
}

export const PassengerSection: React.FC<PassengerSectionProps> = ({ currentLang }) => {
  const [selectedAlertIndex, setSelectedAlertIndex] = useState<number>(0);
  const t = translations[currentLang];

  const alerts = [
    {
      time: '08:05',
      title: t.passengers.arrivalAlerts.alert1,
      badge: 'Yola düşdü',
      stateColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      time: '08:20',
      title: t.passengers.arrivalAlerts.alert2,
      badge: '15 dəqiqə',
      stateColor: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      time: '08:30',
      title: t.passengers.arrivalAlerts.alert3,
      badge: '5 dəqiqə qaldı',
      stateColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <section id="passengers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value & Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-md">
              {t.passengers.kicker}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              {t.passengers.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {t.passengers.subtitle}
            </p>

            {/* Feature points without pills */}
            <div className="space-y-4 pt-2">
              {t.passengers.features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/80 hover:border-blue-200 bg-neutral-50/50 hover:bg-blue-50/20 transition-all space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Interactive Interactive Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Driver Profile Preview Card */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                    R.Ə
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-neutral-950">Rəşad Əliyev</span>
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="flex items-center text-amber-500 font-semibold">
                        ★ 4.9
                      </span>
                      <span>·</span>
                      <span>Toyota Camry (2021)</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-extrabold text-blue-600">15 AZN</span>
                  <span className="block text-[11px] text-neutral-400">1 sərnişin yeri</span>
                </div>
              </div>

              {/* Real vehicle details */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 block font-medium">Baqaj tutumu</span>
                  <span className="font-bold text-neutral-800">2 böyük çanta</span>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 block font-medium">Salon rahatlığı</span>
                  <span className="font-bold text-emerald-600">Kondisioner</span>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 block font-medium">Çıxış vaxtı</span>
                  <span className="font-bold text-blue-600">08:30 dəqiq</span>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 bg-blue-50/70 p-2.5 rounded-xl flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Sürücünün keçmiş reytinqlərini və sərnişin qeydlərini qeydiyyatsız oxuya bilərsiniz.
                </span>
              </div>
            </div>

            {/* Arrival Alerts Interactive Component */}
            <div className="bg-neutral-900 text-white rounded-2xl p-5 space-y-4 text-left shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <BellRing className="w-4 h-4 text-blue-400" />
                    <span>{t.passengers.arrivalAlerts.title}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {t.passengers.arrivalAlerts.desc}
                  </p>
                </div>
              </div>

              {/* Sequential Alert Items */}
              <div className="space-y-2.5">
                {alerts.map((alert, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedAlertIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      selectedAlertIndex === idx
                        ? 'bg-neutral-800 border-blue-500 shadow-xs'
                        : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-xs text-neutral-400 bg-neutral-950 px-2 py-1 rounded-md">
                        {alert.time}
                      </div>
                      <span className="text-xs font-semibold text-neutral-100">
                        {alert.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider shrink-0">
                      {alert.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
