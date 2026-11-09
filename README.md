# UYOL — Sərnişin və Bağlama Daşıma Platforması (Landing Page)

Bu layihə **UYOL** (sərnişin və standart bağlama daşıma mobil platforması) üçün hazırlanmış yüksək konversiyalı, müasir və Figma dizayn sisteminə tam uyğunlaşdırılmış rəsmi landing page-dir.

---

## 1. Əsas Dizayn Qərarları və Prinsipləri

1. **Bolt / Uber modelindən aydın fərqlənmə**:
   - İstifadəçiyə heç vaxt təsadüfi sürücü təyin olunmur. İstifadəçi özü axtarır, avtomobilin modelinə, ilinə, baqaj tutumuna və reytinqinə baxaraq sürücünü sərbəst seçir.
   - Sürücüyə avtomatik "sifariş təklifi" spamı getmir; sürücü öz "Gediş"ini yaradır və yalnız real yer/bağlama bron olunduqda bildiriş alır.
2. **Qeydiyyatsız baxış azadlığı**:
   - İstifadəçilər platformanı açan kimi qeydiyyat tələbi ilə qarşılaşmır. Bütün marşrutları, qiymətləri və sürücü profillərini maneəsiz araşdırır. Giriş yalnız bron zamanı tələb olunur.
3. **E-ticarət tipli bağlama daşınması**:
   - Yalnız standart şəxsi bağlamalar (iri mebel və ya ağır yük yoxdur).
   - Həm göndərən, həm də qəbul edən şəxs canlı bildiriş və izləmə linki alır.
   - Sürücü təhvili «Çatdırıldı» düyməsi ilə təsdiqləyir.
   - Əgər sürücü gedişi ləğv edərsə, sistem bağlamanı avtomatik eyni marşrut üzrə növbəti sürücüyə yönləndirir.
4. **Sürücü Həmrəyliyi və Sərnişin Ötürmə**:
   - Texniki nasazlıq halında sərnişinlərin yolda qalmaması üçün tətbiqdaxili «Sərnişin Ötürmə» (Transfer) sistemi.
5. **Dəqiq vaxt bildirişləri**:
   - Sürücü əvvəlki ünvandan çıxanda, eləcə də 15 dəqiqə və 5 dəqiqə qalanda addım-addım bildirişlər.
6. **Tezliklə: Kamera ilə bağlama həcmini ölçmə**:
   - İstifadəçinin telefon kamerası ilə qutunun en, uzunluq və hündürlüyünü skan edərək avtomobil baqajına uyğunluğunu əvvəlcədən təyin etməsi.
7. **Qadağalara 100% riayət**:
   - Təsisçi, rəhbər, "Haqqımızda" hekayəsi və ya şəxsi əlaqə məlumatı daxil edilməmişdir.
   - Saxta statistika ("100,000+ istifadəçi"), saxta rəylər və ya uydurma tərəfdaş loqoları qoyulmayıb.

---

## 2. Figma Design Tokenlərinin Dəyişdirilməsi Qaydası

Figma faylınızdakı rəngləri və şriftləri tətbiq etmək üçün iki əsas fayl mövcuddur:

### A. CSS Dəyişənləri (`src/index.css`)
```css
:root {
  --color-primary: #1E3A8A;        /* Figma Primary / Əsas göy ton */
  --color-primary-hover: #172554;
  --color-accent: #2563EB;         /* Figma Accent / Fəaliyyət göyü */
  --color-accent-subtle: #EFF6FF;
  --color-secondary: #0F172A;      /* Figma Secondary / Qara ton */
  --color-surface: #FFFFFF;
  --color-border: #E2E8F0;
  --color-success: #10B981;        /* Çatdırıldı statusu */
  --color-warning: #F59E0B;        /* 15 dəq qalıb statusu */
  --color-error: #EF4444;          /* Ləğv statusu */
}
```

### B. JavaScript / TypeScript Tokenləri (`src/theme/tokens.ts`)
Figma Inspect panelindən kopyaladığınız HEX dəyərlərini `src/theme/tokens.ts` faylındakı `designTokens` obyektinə yapışdırmağınız kifayətdir.

---

## 3. Figma Ekranlarının Əvəzlənməsi (Screenshots Replacement)

Tətbiq ekranları üçün həm Hero hissəsində, həm də `AppScreensCarousel.tsx` komponentində xüsusi yerlər təyin edilmişdir:

1. **User App Ekranları**:
   - `User_Trip_List.png` (Marşrut axtarışı və sürücü siyahısı)
   - `User_Driver_Profile.png` (Sürücü profili, reytinq və avtomobil parametrləri)
   - `User_Parcel_Tracking.png` (Bağlamanın canlı xəritəsi və status qrafiki)
2. **Driver App Ekranları**:
   - `Driver_Create_Trip.png` (Yeni Gediş yaratma və boş yer təyini)
   - `Driver_Bookings_List.png` (Yalnız təsdiqlənmiş bron bildirişləri)
   - `Driver_Passenger_Transfer.png` (Sərnişin ötürmə interfeysi)

Bu ekranları Figma-dan PNG olaraq eksport edib `/public/screens/` qovluğuna yerləşdirə və `src/components/AppScreensCarousel.tsx` daxilindəki `imageSrc` sahəsinə yaza bilərsiniz. Hətta şəkillər hələ qoyulmadıqda belə, sistem həmin ekranları tam interaktiv kodlaşdırılmış SVG/HTML formatında yüksək dəqiqliklə nümayiş etdirir.

---

## 4. Layihə Strukturu

```
/
├── index.html                   # SEO, meta-teqlər, OpenGraph, Twitter Card, Schema.org JSON-LD
├── metadata.json                # AI Studio layihə adı və təsviri
├── package.json                 # Asılılıqlar (React 19, Tailwind v4, Lucide, Motion)
├── src/
│   ├── main.tsx                 # Əsas giriş nöqtəsi
│   ├── App.tsx                  # 12 bölmədən ibarət əsas səhifə və modal idarəedicisi
│   ├── index.css                # Tailwind v4, fontlar və CSS tokenləri
│   ├── types/
│   │   └── index.ts             # TypeScript tipləri (Language, Step, Screen, Faq)
│   ├── theme/
│   │   └── tokens.ts            # Figma token xəritəsi (rənglər, radius, kölgələr)
│   ├── config/
│   │   └── site.ts              # Mağaza linkləri, Figma slotları, analitika hook-u
│   ├── i18n/
│   │   └── translations.ts      # AZ (əsas), EN, RU dillərində tam mətn lüğəti
│   └── components/
│       ├── Header.tsx           # 3 zonalı yapışqan naviqasiya və dil seçimi
│       ├── Hero.tsx             # Başlıq, App Store / Play Store və telefon mockup-ı
│       ├── TrustBar.tsx         # 4 dürüst fakt (rəqəmsiz və saxta statistikasız)
│       ├── HowItWorks.tsx       # Sərnişin və Bağlama üçün 4 addımlı proses
│       ├── PassengerSection.tsx # Sürücü seçimi, qeydiyyatsız baxış və 15/5 dəq bildirişləri
│       ├── ParcelSection.tsx    # E-ticarət tipli bağlama izləməsi və avto-əvəzləmə
│       ├── DriverSection.tsx    # "Gediş" yaratma, sıfır sifariş spamı və sərnişin ötürmə
│       ├── AppScreensCarousel.tsx # Figma ekranları karuseli (User və Driver ayrılıqda)
│       ├── VolumeArDemo.tsx     # "Tezliklə": Kamera ilə bağlama həcmini təyin etmə
│       ├── FaqSection.tsx       # 7 ədəd platformaya xas sual-cavab akordeonu
│       ├── DownloadCta.tsx      # QR kodlu final yükləmə bloku
│       ├── Footer.tsx           # Hüquqi və sakit altlıq (şəxsi/şirkət məlumatı yoxdur)
│       ├── DownloadModal.tsx    # Yükləmə və QR modalı
│       ├── LegalModal.tsx       # Məxfilik siyasəti və İstifadə şərtləri modalı
│       └── CookieBanner.tsx     # Zəruri kuki bildirişi
```

---

## 5. İşə Salma

```bash
# Asılılıqları quraşdırın
npm install

# İnkişaf serverini işə salın (Port 3000)
npm run dev

# Layihəni yoxlayın və build edin
npm run build
```
