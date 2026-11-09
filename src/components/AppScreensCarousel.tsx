import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Eye, Sparkles } from 'lucide-react';
import { Language, AppScreen } from '../types';
import { translations } from '../i18n/translations';

interface AppScreensCarouselProps {
  currentLang: Language;
}

export const AppScreensCarousel: React.FC<AppScreensCarouselProps> = ({ currentLang }) => {
  const [filterRole, setFilterRole] = useState<'all' | 'user' | 'driver'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = translations[currentLang];

  const screens: AppScreen[] = [
    {
      id: 'screen-1',
      role: 'user',
      category: 'User App',
      title: 'Gediş Axtarışı və Sürücü Müqayisəsi',
      description: 'Avtomobil modeli, reytinq, çıxış vaxtı və qiyməti göstərən şəffaf sürücü siyahısı.',
      figmaSlotName: 'Figma Screen: User_Trip_List.png',
    },
    {
      id: 'screen-2',
      role: 'user',
      category: 'User App',
      title: 'Sürücü Profili və Avtomobil Şəkilləri',
      description: 'Kondisioner, baqaj yeri və əvvəlki sərnişin rəyləri ilə tam təchizat məlumatı.',
      figmaSlotName: 'Figma Screen: User_Driver_Profile.png',
    },
    {
      id: 'screen-3',
      role: 'user',
      category: 'User App',
      title: 'Canlı Bağlama İzləmə Xəritəsi',
      description: 'Göndərən və qəbul edən üçün saniyəbəsaniyə yenilənən e-ticarət tipli status qrafiki.',
      figmaSlotName: 'Figma Screen: User_Parcel_Tracking.png',
    },
    {
      id: 'screen-4',
      role: 'driver',
      category: 'Driver App',
      title: 'Yeni Gediş Yaratma Forması',
      description: 'Sürücünün marşrut, tarix, boş yer və bağlama tarifini sərbəst təyin etdiyi idarəetmə.',
      figmaSlotName: 'Figma Screen: Driver_Create_Trip.png',
    },
    {
      id: 'screen-5',
      role: 'driver',
      category: 'Driver App',
      title: 'Təsdiqlənmiş Bronlar və Xəbərdarlıqlar',
      description: 'Sifariş spamı olmadan, yalnız konkret sərnişin və bağlama bronu olduqda gələn bildirişlər.',
      figmaSlotName: 'Figma Screen: Driver_Bookings_List.png',
    },
    {
      id: 'screen-6',
      role: 'driver',
      category: 'Driver App',
      title: 'Sərnişin Ötürmə (Transfer) Paneli',
      description: 'Fors-major hallarında sərnişinləri yolda qoymadan digər maşına təhlükəsiz yönləndirmə.',
      figmaSlotName: 'Figma Screen: Driver_Passenger_Transfer.png',
    },
  ];

  const filteredScreens = screens.filter((screen) => {
    if (filterRole === 'all') return true;
    return screen.role === filterRole;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredScreens.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredScreens.length) % filteredScreens.length);
  };

  return (
    <section id="screens" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-md">
            Dizayn Sistemi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {t.screens.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            {t.screens.subtitle}
          </p>

          {/* Role Filter Tabs */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1 bg-neutral-800 rounded-xl border border-neutral-700">
              <button
                type="button"
                onClick={() => {
                  setFilterRole('all');
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filterRole === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.screens.tabAll}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFilterRole('user');
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filterRole === 'user'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.screens.tabUser}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFilterRole('driver');
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filterRole === 'driver'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t.screens.tabDriver}
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-neutral-400 font-mono">
              Ekran {currentIndex + 1} / {filteredScreens.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                aria-label="Əvvəlki ekran"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                aria-label="Növbəti ekran"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Screen Display Box */}
          {filteredScreens[currentIndex] && (
            <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              {/* Phone Frame Mockup with Figma Slot Notice */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-[240px] sm:w-[260px] h-[480px] rounded-[36px] bg-neutral-900 border-4 border-neutral-800 p-2 shadow-2xl flex flex-col justify-between overflow-hidden">
                  {/* Phone Notch */}
                  <div className="w-20 h-3.5 bg-neutral-950 rounded-full mx-auto" />

                  {/* Screen Content or Placeholder Slot */}
                  <div className="flex-1 my-2 bg-neutral-900/90 rounded-[24px] border border-neutral-800/80 p-4 flex flex-col justify-between text-neutral-300 text-xs">
                    {/* Top status */}
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                      <span>09:41</span>
                      <span>5G 100%</span>
                    </div>

                    {/* Center Figma Replacement Notice */}
                    <div className="my-auto text-center space-y-2 p-3 bg-neutral-950/80 rounded-xl border border-dashed border-blue-500/50">
                      <Smartphone className="w-6 h-6 text-blue-400 mx-auto" />
                      <div className="font-mono text-[10px] font-bold text-blue-400 tracking-wider">
                        BURAYA FIGMA EKRANI
                      </div>
                      <div className="text-[11px] text-neutral-200 font-semibold leading-tight">
                        {filteredScreens[currentIndex].title}
                      </div>
                      <div className="text-[9px] text-neutral-500 font-mono">
                        {filteredScreens[currentIndex].figmaSlotName}
                      </div>
                    </div>

                    {/* Bottom home indicator */}
                    <div className="w-24 h-1 bg-neutral-700 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Screen Description & Metadata */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-900 px-2.5 py-1 rounded-md">
                  <span>{filteredScreens[currentIndex].category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {filteredScreens[currentIndex].title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {filteredScreens[currentIndex].description}
                </p>

                {/* Instructions on how to swap Figma screenshot */}
                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 space-y-2">
                  <span className="font-semibold text-neutral-300 block">
                    Figma ilə inteqrasiya qaydası:
                  </span>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                    Figma faylınızdan PNG formatında eksport etdiyiniz ekranı /public/screens qovluğuna qoyaraq imageSrc parametrində göstərə bilərsiniz.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
