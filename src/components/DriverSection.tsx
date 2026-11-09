import React from 'react';
import {
  Calendar,
  BellOff,
  Users2,
  Navigation,
  Shield,
  CarFront,
  Share2,
  Check,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface DriverSectionProps {
  currentLang: Language;
}

export const DriverSection: React.FC<DriverSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="drivers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Driver Value & Terms */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-md">
              {t.drivers.kicker}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              {t.drivers.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {t.drivers.subtitle}
            </p>

            {/* Terminology distinction notice */}
            <div className="p-3 bg-neutral-100 rounded-xl text-xs text-neutral-700 flex items-center gap-2.5">
              <CarFront className="w-4 h-4 text-neutral-600 shrink-0" />
              <span>
                <strong>Prinsipimiz:</strong> UYOL-da sürücülərə «sifariş» atılmır. Siz öz «Gediş»inizi yaradırsınız və yalnız təsdiqlənmiş bron gəldikdə bildiriş alırsınız.
              </span>
            </div>

            {/* Features list */}
            <div className="space-y-4 pt-2">
              {t.drivers.features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/80 hover:border-blue-200 bg-neutral-50/50 transition-all space-y-1.5"
                >
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Driver App Interactive Mockup & Passenger Transfer Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Passenger Transfer Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-6 rounded-2xl shadow-md space-y-4 text-left border border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {t.drivers.transferCard.tagText}
                </span>
                <Share2 className="w-4 h-4 text-neutral-400" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white">
                {t.drivers.transferCard.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {t.drivers.transferCard.desc}
              </p>

              {/* Transfer Mockup Flow */}
              <div className="bg-neutral-800/80 border border-neutral-700/80 p-3.5 rounded-xl space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Marşrut üzrə ən yaxın sürücülər:</span>
                  <span className="text-emerald-400 font-mono text-[11px]">3 aktiv avtomobil</span>
                </div>
                <div className="flex items-center justify-between text-xs bg-neutral-900/90 p-2.5 rounded-lg border border-neutral-700">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-[10px] font-bold flex items-center justify-center">
                      T.M
                    </div>
                    <span className="text-neutral-200 font-medium">Tural M. (Kia Cerato)</span>
                  </div>
                  <span className="text-blue-400 font-semibold text-[11px]">Seç və ötür →</span>
                </div>
              </div>
            </div>

            {/* Trip Creation UI Card */}
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-xs space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">
                    Driver App Mockup
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900">
                    Yeni Gediş Paneli
                  </h3>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Öz Vaxtınız
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-xl">
                  <span className="text-neutral-500">İstiqamət:</span>
                  <span className="font-bold text-neutral-900">Bakı → Quba</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-xl">
                  <span className="text-neutral-500">Çıxış saatı:</span>
                  <span className="font-bold text-neutral-900">Sabah, 09:00</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-neutral-50 rounded-xl text-center">
                    <span className="block text-[10px] text-neutral-400">Sərnişin Yeri</span>
                    <span className="font-bold text-neutral-900">3 yer (12 AZN/yer)</span>
                  </div>
                  <div className="p-2.5 bg-neutral-50 rounded-xl text-center">
                    <span className="block text-[10px] text-neutral-400">Bağlama Tutumu</span>
                    <span className="font-bold text-blue-600">2 bağlama yeri</span>
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
