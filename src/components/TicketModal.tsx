import React from 'react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { UyolLogo } from './UyolLogo';
import { useLanguage } from '../i18n/LanguageContext';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-transparent"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label={t.ticketModal.closeAria}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative bg-[#FCFCFC] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
          <div className="bg-[#1E1E1E] text-white p-6 pb-7">
            <div className="flex items-center justify-between mb-4">
              <UyolLogo size="sm" theme="dark" />
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#DDF32C] text-[#1E1E1E]">
                {t.hero.mockupDoorToDoor}
              </span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <div className="text-xs text-neutral-400">{t.ticketModal.departureLabel}</div>
                <div className="text-xl font-bold tracking-tight text-white">Bakı</div>
                <div className="text-[11px] text-[#DDF32C]">20 Yanvar m/s</div>
              </div>

              <div className="flex flex-col items-center px-3">
                <span className="text-[10px] text-neutral-400 mb-1 font-mono">{t.hero.mockupDuration}</span>
                <div className="flex items-center text-[#DDF32C] font-black text-sm tracking-tighter">
                  <span>&gt;</span>
                  <span>&gt;</span>
                  <span>&gt;</span>
                  <span>&gt;</span>
                  <span>&gt;</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-neutral-400">{t.ticketModal.destinationLabel}</div>
                <div className="text-xl font-bold tracking-tight text-white">Qəbələ</div>
                <div className="text-[11px] text-[#DDF32C]">Mərkəz</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between my-0 bg-[#FCFCFC] h-6">
            <div className="w-5 h-6 bg-black/75 rounded-r-full -ml-0.5" />
            <div className="flex-1 border-t-2 border-dashed border-neutral-300 mx-2" />
            <div className="w-5 h-6 bg-black/75 rounded-l-full -mr-0.5" />
          </div>

          <div className="p-6 pt-2 bg-[#FCFCFC] text-[#333333]">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-100 text-xs">
              <div>
                <span className="text-neutral-400 block mb-0.5">{t.ticketModal.passengerLabel}</span>
                <span className="font-semibold text-neutral-800 text-sm">Nicat Əliyev</span>
              </div>
              <div className="text-right">
                <span className="text-neutral-400 block mb-0.5">{t.ticketModal.seatTypeLabel}</span>
                <span className="font-semibold text-neutral-800 text-sm">{t.ticketModal.seatTypeValue}</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#3DB52F]" /> {t.ticketModal.dateLabel}
                </span>
                <span className="font-medium text-neutral-700">{t.ticketModal.dateValue}</span>
              </div>
              <div className="text-right">
                <span className="text-neutral-400 block mb-0.5 flex items-center justify-end gap-1">
                  <Clock className="w-3 h-3 text-[#3DB52F]" /> {t.ticketModal.timeLabel}
                </span>
                <span className="font-medium text-neutral-700">10:00</span>
              </div>
            </div>

            <div className="py-4 border-b border-neutral-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-700">
                  EM
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Elmir M.</div>
                  <div className="text-neutral-500">Mercedes-Benz Vito (99-UY-402)</div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-1 text-[#3DB52F] font-semibold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {t.ticketModal.confirmedLabel}
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <div className="flex items-center justify-center gap-0.5 h-12 w-full max-w-[240px] px-2 bg-neutral-50 rounded-lg">
                {[4, 2, 6, 1, 3, 5, 2, 4, 1, 7, 2, 5, 3, 2, 6, 1, 4, 3, 5, 2, 7, 1, 3].map((height, i) => (
                  <div
                    key={i}
                    className="bg-[#1E1E1E]"
                    style={{
                      width: i % 3 === 0 ? '3px' : '1.5px',
                      height: `${20 + height * 3}px`,
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] text-neutral-400 tracking-widest mt-1">
                UY-2026-9842-BAKU
              </span>
            </div>

            <div className="mt-5 text-center">
              <p className="text-[11px] text-neutral-500">
                {t.ticketModal.footerNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
