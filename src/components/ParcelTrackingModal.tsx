import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, AlertCircle, RefreshCw, MapPin } from 'lucide-react';
import { PARCEL_CHECKPOINTS } from '../data/uyolData';

interface ParcelTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParcelTrackingModal: React.FC<ParcelTrackingModalProps> = ({ isOpen, onClose }) => {
  const [trackingCode, setTrackingCode] = useState('UY-84920');
  const [isSearched, setIsSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#FCFCFC] text-[#333333] rounded-3xl p-6 md:p-8 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
          aria-label="Bağla"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#DDF32C]/30 text-neutral-800 rounded-md">
            Canlı İzləmə
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mt-2">
            Bağlamanı İzlə
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Həm göndərən, həm də alıcı eyni anda real vaxt rejimində bağlamanın harada olduğunu izləyir.
          </p>
        </div>

        {/* Search input form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value.toUpperCase())}
                placeholder="İzləmə kodu (məs: UY-84920)"
                className="w-full pl-10 pr-3 py-2.5 bg-neutral-100 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 font-mono focus:outline-none focus:border-[#333333]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1E1E1E] text-white hover:bg-black font-medium text-xs rounded-xl transition-colors shrink-0"
            >
              Yoxla
            </button>
          </div>
        </form>

        {isSearched && (
          <div className="space-y-6">
            {/* Parcel Summary Card */}
            <div className="p-4 rounded-2xl bg-[#F2F2F7] border border-neutral-200">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70">
                <div>
                  <span className="text-[10px] text-neutral-500 font-medium block">İzləmə Kodu</span>
                  <span className="font-mono font-bold text-neutral-800 text-sm">{trackingCode}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-500 font-medium block">Cari Status</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#3DB52F] bg-white px-2 py-0.5 rounded-full border border-[#3DB52F]/20">
                    <Clock className="w-3 h-3" /> Ünvana 5 dəqiqə qaldı
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px]">Göndərən</span>
                  <span className="font-medium text-neutral-800">Kənan Q. (Bakı)</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-400 block text-[10px]">Qəbul edən</span>
                  <span className="font-medium text-neutral-800">Aynur M. (Qəbələ)</span>
                </div>
              </div>
            </div>

            {/* Auto-reassignment guarantee banner */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
              <RefreshCw className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block">Avtomatik Yenidən Təyinat Zəmanəti</span>
                Sürücü ləğv edərsə, sistemimiz bağlama üçün avtomatik olaraq eyni istiqamətdəki yeni sürücünü təyin edir. Bağlama heç vaxt yolda qalmır.
              </div>
            </div>

            {/* Checkpoints Timeline */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                Hərəkət Tarixçəsi və Bildirişlər
              </h4>
              <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200">
                {PARCEL_CHECKPOINTS.map((cp) => {
                  const isCompleted = cp.status === 'completed';
                  const isCurrent = cp.status === 'current';

                  return (
                    <div key={cp.id} className="relative">
                      {/* Status indicator dot */}
                      <div
                        className={`absolute -left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? 'bg-[#3DB52F] text-white'
                            : isCurrent
                            ? 'bg-[#DDF32C] text-[#1E1E1E] ring-4 ring-[#DDF32C]/30'
                            : 'bg-neutral-200 text-neutral-400'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-current" />
                        )}
                      </div>

                      <div className="flex items-start justify-between">
                        <div>
                          <div className={`text-xs font-semibold ${isCurrent ? 'text-neutral-900 font-bold' : 'text-neutral-800'}`}>
                            {cp.title}
                          </div>
                          <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">
                            {cp.description}
                          </p>
                        </div>
                        {cp.time && (
                          <span className="text-[10px] font-mono text-neutral-400 shrink-0 ml-2">
                            {cp.time}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Driver "Çatdırıldı" confirmation note */}
            <div className="p-3.5 bg-neutral-100 rounded-xl flex items-center justify-between text-xs">
              <span className="text-neutral-600">
                Təhvil alarkən alıcıya təhlükəsizlik kodu təqdim olunur.
              </span>
              <span className="font-semibold text-neutral-900 px-2 py-1 bg-white rounded-md border border-neutral-200">
                Təsdiq Kodu: 492
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
