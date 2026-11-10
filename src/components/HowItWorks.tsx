import React, { useState } from 'react';
import { Users, Package, MapPin, Calendar, CreditCard, ShieldCheck, CheckCircle2, ChevronRight, Navigation } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
  onOpenTracking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload, onOpenTracking }) => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'parcel'>('passenger');

  const passengerSteps = [
    {
      num: '01',
      title: 'İstiqamət və tarixi seç',
      description: 'Çıxış şəhərini və təyinat məntəqəsini daxil edin. Qeydiyyatsız bütün mövcud gedişləri nəzərdən keçirin.',
      icon: MapPin,
      badge: 'Qeydiyyatsız baxış',
    },
    {
      num: '02',
      title: 'Gedişi və sürücünü seç',
      description: 'Avtomobil modelinə (sedan və ya mikroavtobus), sürücünün reytinqinə və dəqiq çıxış saatına görə ən uyğun reysi seçin.',
      icon: Calendar,
      badge: 'Sərbəst seçim',
    },
    {
      num: '03',
      title: 'Yer seç və təhlükəsiz ödə',
      description: 'Salonda kişi və qadın yerlərini görərək istədiyiniz oturacağı bron edin. Birbaşa OTP kod ilə daxil olub ödəniş edin.',
      icon: CreditCard,
      badge: 'OTP ilə giriş',
    },
    {
      num: '04',
      title: 'Canlı izlə və yola çıx',
      description: 'Gediş günü sürücü 15 dəq və 5 dəq qalanda bildiriş alın. Biletiniz tətbiqdə həmişə əlinizin altındadır.',
      icon: Navigation,
      badge: 'Dəqiq bildirişlər',
    },
  ];

  const parcelSteps = [
    {
      num: '01',
      title: 'Ünvan və bağlamanı qeyd et',
      description: 'Bağlamanın təhvil veriləcəyi və çatdırılacağı ünvanları qeyd edin. Göndərən və alıcının əlaqə nömrəsini daxil edin.',
      icon: Package,
      badge: 'Yalnız bağlama',
    },
    {
      num: '02',
      title: 'Həmin istiqamətdə gediş seç',
      description: 'Şəhərlərarası marşrutda gedən uyğun sürücünü seçin. Sürücü sifariş qovmur, yalnız razılaşdırılmış təhvil alır.',
      icon: Calendar,
      badge: 'Planlı gediş',
    },
    {
      num: '03',
      title: 'Təhvil ver və canlı izlə',
      description: 'Həm göndərən, həm də alıcı tətbiqdə və SMS link vasitəsilə sürücünün xəritədəki hərəkətini real vaxtda izləyir.',
      icon: Navigation,
      badge: 'İkitərəfli izləmə',
    },
    {
      num: '04',
      title: 'Təhlükəsiz "Çatdırıldı" təsdiqi',
      description: 'Alıcıya çatdırılma kodu təqdim edilir. Sürücü təhvil verərək "Çatdırıldı" düyməsini sıxır və proses tamamlanır.',
      icon: ShieldCheck,
      badge: 'Avto-təyinat zəmanəti',
    },
  ];

  const currentSteps = activeTab === 'passenger' ? passengerSteps : parcelSteps;

  return (
    <section id="nece-isleyir" className="py-20 md:py-28 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            Sadə və Şəffaf Proses
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] tracking-tight mb-4">
            UYOL necə işləyir?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-balance">
            Taksi çağırmaq deyil — şəhərlərarası gedişlər üçün planlı, rahat və etibarlı nəqliyyat sistemidir.
          </p>

          {/* Interactive Passenger vs Parcel Switcher */}
          <div className="mt-8 inline-flex p-1.5 bg-[#E6E6E6] rounded-2xl">
            <button
              onClick={() => setActiveTab('passenger')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'passenger'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Users className="w-4 h-4 text-[#DDF32C]" />
              <span>Sərnişin kimi gediş</span>
            </button>
            <button
              onClick={() => setActiveTab('parcel')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'parcel'
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Package className="w-4 h-4 text-[#DDF32C]" />
              <span>Bağlama göndərmək</span>
            </button>
          </div>
        </div>

        {/* 4 Steps Bento / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FCFCFC] rounded-3xl p-6 sm:p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-lg">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-500 bg-neutral-50 px-2 py-0.5 rounded-md border border-neutral-200/60">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#DDF32C]/25 text-[#1E1E1E] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3DB52F]/15 text-[#3DB52F] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-neutral-900 block">
                {activeTab === 'passenger'
                  ? 'Qeydiyyatsız dərhal axtarışa başlaya bilərsiniz'
                  : 'Seçilmiş sürücü ləğv edərsə, sistem avtomatik yeni sürücü təyin edir'}
              </span>
              <span className="text-neutral-500">
                {activeTab === 'passenger'
                  ? 'Gedişləri görmək üçün heç bir profil yaratmağa ehtiyac yoxdur. Giriş yalnız bron zamanı tələb olunur.'
                  : 'Bağlamanız heç vaxt yolda qalmır, tətbiq dərhal ən yaxın uyğun reysi aktivləşdirir.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {activeTab === 'passenger' ? (
              <button
                onClick={onOpenDownload}
                className="px-5 py-2.5 bg-[#1E1E1E] text-white hover:bg-black font-semibold text-xs rounded-xl transition-colors"
              >
                Gedişləri nəzərdən keçir
              </button>
            ) : (
              <button
                onClick={onOpenTracking}
                className="px-5 py-2.5 bg-[#DDF32C] text-[#1E1E1E] hover:bg-[#cbe020] font-bold text-xs rounded-xl transition-colors"
              >
                Canlı bağlama izlə
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
