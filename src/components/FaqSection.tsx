import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const t = translations[currentLang];

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-md">
            Şəffaflıq
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden transition-all shadow-2xs hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
