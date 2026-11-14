import React, { useState } from 'react';
import { Bell, RefreshCw, ShieldCheck, Smartphone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface DriverSectionProps {
  onOpenDownload: () => void;
}

export const DriverSection: React.FC<DriverSectionProps> = ({ onOpenDownload }) => {
  const [activeDriverTab, setActiveDriverTab] = useState<'flow' | 'transfer' | 'signup'>('flow');
  const { t } = useLanguage();
  const benefitIcons = [Bell, RefreshCw, ShieldCheck];

  return (
    <section id="suruculer" className="py-20 md:py-28 bg-[#1E1E1E] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DDF32C]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#DDF32C] mb-2">
            {t.driver.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.driver.titleLine1} <br />
            <span className="text-[#DDF32C]">{t.driver.titleLine2}</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
            {t.driver.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#252525] rounded-3xl border border-white/10 group">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden mb-4 bg-[#1E1E1E] flex items-center justify-center">
              <img
                src="/src/assets/images/driver_mascot_1794296740724.jpg"
                alt={t.driver.mascotBadge}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-[#DDF32C] tracking-wide block mb-1">
                {t.driver.mascotBadge}
              </span>
              <p className="text-xs text-neutral-400">
                {t.driver.mascotDesc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#252525] relative">
              <div className="relative h-56 sm:h-64 w-full bg-[#1E1E1E]">
                <img
                  src="/src/assets/images/lime_minivan_1794296741950.jpg"
                  alt={t.driver.minivanTypes}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#DDF32C] text-[#1E1E1E] rounded-full">
                    {t.driver.minivanBadge}
                  </span>
                  <span className="text-xs font-medium text-neutral-300">
                    {t.driver.minivanTypes}
                  </span>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs">
                {t.driver.benefits.map((b, idx) => {
                  const Icon = benefitIcons[idx] || Bell;
                  return (
                    <div key={idx}>
                      <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                        <Icon className="w-4 h-4 text-[#DDF32C]" />
                        <span>{b.title}</span>
                      </div>
                      <p className="text-neutral-400 leading-relaxed text-[11px]">
                        {b.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {t.driver.howTitle}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {t.driver.howSubtitle}
              </p>
            </div>

            <div className="flex bg-[#1E1E1E] p-1 rounded-xl">
              <button
                onClick={() => setActiveDriverTab('flow')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'flow'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.driver.tabFlow}
              </button>
              <button
                onClick={() => setActiveDriverTab('transfer')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'transfer'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.driver.tabTransfer}
              </button>
              <button
                onClick={() => setActiveDriverTab('signup')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeDriverTab === 'signup'
                    ? 'bg-[#DDF32C] text-[#1E1E1E]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.driver.tabSignup}
              </button>
            </div>
          </div>

          {activeDriverTab === 'flow' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs animate-fade-in">
              {t.driver.flowSteps.map((fs, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 space-y-2">
                  <span className="font-mono text-[10px] text-[#DDF32C] font-bold">{fs.step}</span>
                  <h4 className="text-sm font-bold text-white">{fs.title}</h4>
                  <p className="text-neutral-400 leading-relaxed text-[11px]">{fs.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeDriverTab === 'transfer' && (
            <div className="p-5 rounded-2xl bg-[#1E1E1E] border border-white/5 text-xs animate-fade-in space-y-3">
              <div className="flex items-center gap-2 text-[#DDF32C] font-bold text-sm">
                <RefreshCw className="w-4 h-4" />
                <span>{t.driver.transferTitle}</span>
              </div>
              <p className="text-neutral-300 leading-relaxed text-xs">
                {t.driver.transferDesc}
              </p>
            </div>
          )}

          {activeDriverTab === 'signup' && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs animate-fade-in">
              {t.driver.signupSteps.map((ss, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#1E1E1E] border border-white/5">
                  <div className="font-bold text-white mb-1">{ss.title}</div>
                  <p className="text-[11px] text-neutral-400">{ss.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              {t.driver.osNote}
            </span>
            <button
              onClick={onOpenDownload}
              className="px-6 py-3 bg-[#DDF32C] hover:bg-[#cbe020] text-[#1E1E1E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.driver.downloadBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
