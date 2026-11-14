import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const { t } = useLanguage();

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FCFCFC] border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            {t.faq.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {t.faq.items.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#1E1E1E] shadow-sm'
                    : 'bg-[#F2F2F7] border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-200/70 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#DDF32C] text-[#1E1E1E]' : 'text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
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
