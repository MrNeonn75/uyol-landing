import React from 'react';
import { UserCheck, Compass, BellRing, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface TrustBarProps {
  currentLang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  // Specific icons for each honest proposition
  const icons = [
    <UserCheck className="w-5 h-5 text-blue-600 shrink-0" key="user" />,
    <Compass className="w-5 h-5 text-blue-600 shrink-0" key="track" />,
    <BellRing className="w-5 h-5 text-blue-600 shrink-0" key="bell" />,
    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" key="shield" />,
  ];

  return (
    <section className="py-10 bg-white border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.trustBar.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 p-3 rounded-xl transition-colors hover:bg-neutral-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                {icons[index % icons.length]}
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-neutral-900 leading-snug">
                  {point.title}
                </h2>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
