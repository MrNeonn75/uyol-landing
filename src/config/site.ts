/**
 * Site configuration and environment variables
 */

export const siteConfig = {
  name: 'UYOL',
  tagline: {
    az: 'Sərnişin və bağlama daşıma mobil platforması',
    en: 'Passenger & Parcel Transit Mobile Platform',
    ru: 'Мобильная платформа для пассажирских и посылочных перевозок',
  },
  // Store links configurable via environment variables
  appStoreUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_STORE_URL) || 'https://apps.apple.com/app/uyol/id000000000',
  playStoreUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_PLAY_STORE_URL) || 'https://play.google.com/store/apps/details?id=az.uyol.app',
  
  // Support & inquiry email
  contactEmail: 'support@uyol.az',

  // Social handles (placeholders)
  social: {
    instagram: 'https://instagram.com/uyol.az',
    telegram: 'https://t.me/uyol_az',
    facebook: 'https://facebook.com/uyol.az',
  },

  // Figma screen slots inventory
  figmaScreenSlots: [
    { id: 'hero-user-trip-search', name: 'User App: Gediş Axtarışı və Sürücü Siyahısı', role: 'user' },
    { id: 'hero-user-driver-card', name: 'User App: Sürücü Profili, Qiymətləndirmə və Maşın', role: 'user' },
    { id: 'parcel-timeline-screen', name: 'User App: Bağlama İzləmə və Çatdırılma Statusu', role: 'user' },
    { id: 'driver-create-trip', name: 'Driver App: Yeni Gediş Yaratma və Yer Təyini', role: 'driver' },
    { id: 'driver-bookings-list', name: 'Driver App: Təsdiqlənmiş Bronlar və Bildirişlər', role: 'driver' },
    { id: 'driver-transfer-flow', name: 'Driver App: Sərnişin Ötürmə Ekranı', role: 'driver' },
  ],
};

/**
 * Lightweight analytics tracker placeholder (Google Analytics 4 / Meta Pixel)
 * Ready for client implementation by supplying VITE_GA_MEASUREMENT_ID in .env
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, params);
  }
}
