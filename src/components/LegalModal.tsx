import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  currentLang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  onClose,
  currentLang,
}) => {
  if (!type) return null;

  const t = translations[currentLang];
  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl z-10 max-h-[85vh] flex flex-col border border-neutral-200 text-left">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-950">
                {isPrivacy ? t.legalModal.privacyTitle : t.legalModal.termsTitle}
              </h3>
              <span className="text-xs text-neutral-400">UYOL Platforması</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Bağla"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                Bu Məxfilik Siyasəti UYOL mobil tətbiqi (User App və Driver App) istifadəçilərinin şəxsi məlumatlarının toplanması, emalı və qorunması prinsiplərini müəyyən edir.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">1. Məlumatların toplanması və məqsədi</h4>
              <p>
                Platformamız qeydiyyatsız baxış rejimini dəstəkləyir. Əlaqə məlumatları (telefon nömrəsi) yalnız konkret sərnişin yeri və ya bağlama bron edildikdə tələb olunur.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">2. Geolokasiya və izləmə</h4>
              <p>
                Sürücünün geolokasiyası yalnız aktiv gediş zamanı sərnişinlərə və bağlama göndərən/qəbul edən şəxslərə dəqiq çatdırılma vaxtı bildirişləri vermək üçün emal olunur.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">3. Məlumat təhlükəsizliyi</h4>
              <p>
                Toplanan bütün məlumatlar beynəlxalq şifrələmə protokolları ilə qorunur və üçüncü şəxslərə kommersiya məqsədilə ötürülmür.
              </p>
            </>
          ) : (
            <>
              <p>
                UYOL platformasından istifadə etməklə aşağıdakı ümumi şərtlərlə razılaşmış olursunuz.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">1. Platformanın xarakteri</h4>
              <p>
                UYOL sərnişinlər və bağlama göndərənlərlə müstəqil sürücülər arasında birbaşa seçim və bron imkanı yaradan vasitəçi platformadır. Sürücülər sifarişləri avtomatik qəbul etmir; istifadəçilər özləri seçim edir.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">2. Bağlama qaydaları</h4>
              <p>
                Platformada yalnız standart şəxsi bağlamalar (sənədlər, geyim, qutular) daşına bilər. Qanunvericiliklə qadağan olunmuş maddələr və iri qabaritli yüklər qəbul edilmir.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm">3. Ləğv və dəyişdirmə</h4>
              <p>
                Sürücü fors-major halında gedişi ləğv etdikdə sistem bağlama üçün avtomatik yeni sürücü axtarışını həyata keçirir.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            {t.legalModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
