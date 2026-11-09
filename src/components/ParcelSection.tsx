import React, { useState } from 'react';
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  MapPin,
  Send,
  UserCheck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface ParcelSectionProps {
  currentLang: Language;
}

export const ParcelSection: React.FC<ParcelSectionProps> = ({ currentLang }) => {
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(2);
  const [isDeliveredConfirmed, setIsDeliveredConfirmed] = useState<boolean>(false);

  const t = translations[currentLang];

  const steps = [
    { title: t.parcels.timeline.step1, time: '09:15', status: 'done' },
    { title: t.parcels.timeline.step2, time: '10:45', status: 'current' },
    { title: t.parcels.timeline.step3, time: '12:00', status: 'upcoming' },
    { title: t.parcels.timeline.step4, time: '12:20', status: 'upcoming' },
  ];

  return (
    <section id="parcels" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Parcel Tracking Timeline & Auto-reassignment safeguard */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1 text-left">
            {/* E-Commerce style tracking visualizer card */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-400">#UY-88429-AZ</span>
                    <h3 className="text-sm font-bold text-neutral-900">
                      Standart Bağlama (Sənəd & Qutu)
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Canlı İzləmə
                </span>
              </div>

              {/* Dual Party Notification Banner */}
              <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3 text-xs text-neutral-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-neutral-900">Göndərən & Qəbul edən:</span>
                  <span>Hər iki tərəf SMS bildirişi alır</span>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-4 pt-1">
                {steps.map((step, idx) => {
                  const isPassed = idx < activeTimelineStep;
                  const isCurrent = idx === activeTimelineStep;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveTimelineStep(idx)}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isPassed
                              ? 'bg-blue-600 text-white'
                              : isCurrent
                              ? 'bg-blue-600 ring-4 ring-blue-100 text-white'
                              : 'bg-neutral-100 text-neutral-400'
                          }`}
                        >
                          {isPassed ? '✓' : idx + 1}
                        </div>
                        {idx < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-8 my-1 ${
                              isPassed ? 'bg-blue-600' : 'bg-neutral-200'
                            }`}
                          />
                        )}
                      </div>

                      <div className="pt-0.5 space-y-0.5 flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-bold ${
                              isCurrent
                                ? 'text-blue-600'
                                : isPassed
                                ? 'text-neutral-900'
                                : 'text-neutral-400'
                            }`}
                          >
                            {step.title}
                          </span>
                          <span className="font-mono text-[11px] text-neutral-400">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Driver 'Delivered' confirmation action simulator */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Sürücü təsdiq paneli:</span>
                <button
                  type="button"
                  onClick={() => setIsDeliveredConfirmed(!isDeliveredConfirmed)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isDeliveredConfirmed
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                  }`}
                >
                  {isDeliveredConfirmed ? '✓ Çatdırıldı və Təsdiqləndi' : '«Çatdırıldı» Düyməsini Sıx'}
                </button>
              </div>
            </div>

            {/* Auto-reassignment guarantee banner */}
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4.5 text-left space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <RefreshCw className="w-4 h-4 text-amber-700" />
                <span>{t.parcels.timeline.autoReassignBadge}</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {t.parcels.timeline.autoReassignText}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Scope */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-left">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-md">
              {t.parcels.kicker}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              {t.parcels.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {t.parcels.subtitle}
            </p>

            {/* Scope reminder: standard parcels only */}
            <div className="p-3 bg-blue-50/60 border border-blue-200/60 rounded-xl text-xs text-neutral-700 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>Diqqət:</strong> Yalnız baqaja yerləşən standart şəxsi bağlamalar qəbul edilir. İri qabaritli yük və mebel daşınmır.
              </span>
            </div>

            {/* Feature points */}
            <div className="space-y-4 pt-2">
              {t.parcels.features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/80 hover:border-blue-200 bg-white transition-all space-y-1.5"
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
        </div>
      </div>
    </section>
  );
};
