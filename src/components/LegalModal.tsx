import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { UyolLogo } from './UyolLogo';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#FCFCFC] text-[#333333] rounded-3xl p-6 md:p-8 shadow-2xl border border-neutral-200 max-h-[85vh] overflow-y-auto"
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

        <div className="flex items-center gap-3 mb-4">
          <UyolLogo size="sm" theme="light" />
          <span className="text-xs font-semibold px-2.5 py-0.5 bg-neutral-100 rounded-full text-neutral-600">
            Hüquqi Məlumat
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#3DB52F]" />
          {isPrivacy ? 'Məxfilik Siyasəti' : 'İstifadə Şərtləri və Qaydalar'}
        </h3>

        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Toplanan Məlumatlar:</strong> UYOL tətbiqindən istifadə zamanı yalnız gedişlərin təşkili, OTP ilə giriş və bağlamaların çatdırılması üçün zəruri olan məlumatlar (telefon nömrəsi, ad və marşrut məlumatları) toplanır.
              </p>
              <p>
                <strong>2. Məlumatların Qorunması:</strong> İstifadəçi məlumatları müasir şifrələmə protokolları ilə mühafizə olunur və heç bir halda üçüncü şəxslərə kommersiya və ya reklam məqsədilə ötürülmür.
              </p>
              <p>
                <strong>3. Geolokasiya və Canlı İzləmə:</strong> Tətbiqdə geolokasiya yalnız aktiv gediş və ya bağlama daşınması zamanı dəqiq çatdırılma və təhlükəsizlik bildirişləri üçün istifadə edilir.
              </p>
              <p>
                <strong>4. Ödəniş Təhlükəsizliyi:</strong> Kart məlumatları tətbiqin serverlərində saxlanılmır; ödənişlər lisenziyalı bank emal mərkəzləri vasitəsilə 3D Secure təhlükəsizlik səviyyəsində həyata keçirilir.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Ümumi Müddəalar:</strong> UYOL şəhərlərarası sərnişin və bağlama daşınması üçün sərnişinləri və sürücüləri birbaşa əlaqələndirən rəqəmsal platformadır.
              </p>
              <p>
                <strong>2. Bilet Bronu və Ləğvetmə:</strong> Sərnişin istədiyi gedişi, avtomobili və oturacağı seçərək bilet əldə edir. Bron zamanı təsdiq olunmuş qaydalara uyğun olaraq gediş saatından əvvəl ləğvetmə şərtləri tətbiq olunur.
              </p>
              <p>
                <strong>3. Bağlamaların Daşınması:</strong> "Yük" anlayışı yalnız şəxsi bağlama, sənəd və qutulara aiddir. Qanunvericiliklə qadağan olunmuş maddələrin və tez xarab olan qidaların daşınması qadağandır.
              </p>
              <p>
                <strong>4. Sürücü Zəmanəti və Yenidən Təyinat:</strong> Sürücü tərəfindən gediş ləğv edildikdə, bağlamalar avtomatik olaraq alternativ təsdiqlənmiş UYOL sürücüsünə yönləndirilir.
              </p>
              <p>
                <strong>5. Sərnişin Ötürmə Qaydası:</strong> Texniki səbəblərdən gediş dayandıqda, sürücü sərnişini eyni marşrut üzrə hərəkət edən digər UYOL avtomobilinə rəsmi sistemlə transfer etmək hüququna malikdir.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1E1E1E] text-white rounded-xl text-xs font-medium hover:bg-black transition-colors"
          >
            Bağla
          </button>
        </div>
      </div>
    </div>
  );
};
