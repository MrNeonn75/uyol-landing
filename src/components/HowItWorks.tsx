import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Users, CalendarCheck, Navigation, PackageCheck, Send, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'parcel'>('passenger');
  const t = translations[currentLang];

  const currentSteps =
    activeTab === 'passenger'
      ? t.howItWorks.passengerSteps
      : t.howItWorks.parcelSteps;

  const stepIcons = [
    <Search className="w-5 h-5 text-blue-600" key="1" />,
    <Users className="w-5 h-5 text-blue-600" key="2" />,
    <CalendarCheck className="w-5 h-5 text-blue-600" key="3" />,
    <Navigation className="w-5 h-5 text-blue-600" key="4" />,
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-md">
            Mərhələlər
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-950 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.howItWorks.subtitle}
          </p>

          {/* Interactive Mode Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 bg-neutral-200/80 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab('passenger')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'passenger'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {t.howItWorks.passengerTab}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('parcel')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'parcel'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {t.howItWorks.parcelTab}
              </button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-blue-600">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      {stepIcons[index]}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-medium">
                  <span>Addım {step.number} / 04</span>
                  <span className="text-blue-600 font-semibold">UYOL</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
