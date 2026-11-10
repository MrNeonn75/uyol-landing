# UYOL — Şəhərlərarası Sərnişin və Bağlama Daşıma Platforması Landing Page

Bu layihə **UYOL** mobil tətbiqlərinin (User app və Driver app) dizayn sisteminə 1:1 uyğunlaşdırılmış, müasir və yüksək konversiyalı rəsmi veb landing səhifəsidir.

---

## 1. Dizayn Qərarları və Fəlsəfə

1. **Brend Kimliyi və Rəng Balansı (60-30-10):**
   - **60% Neytral zəmin:** Səhifənin əsas zəmini açıq neytral `#F2F2F2` / `#FCFCFC`, mobil tətbiqin ritminə uyğun olaraq Hero, Sürücü və Final CTA bloklarında dərin qrafit `#1E1E1E` istifadə edilmişdir.
   - **30% Struktur səthlər:** Kartlar üçün yumşaq kölgəli `#FCFCFC`, ayırıcı xətlər üçün `#E6E6E6` və `#F2F2F7`.
   - **10% Brend Lime Vurğusu (`#DDF32C`):** Yalnız əsas CTA düymələri, loqodakı "U" hərfi və vacib təhvil statusları üçün nəzərdə tutulub. Ağ fonda mətn kimi istifadə edilməyərək WCAG AA kontrast qaydası qorunub.

2. **Dizayn Dili və Detallar:**
   - **Əyri kəsimli Hero (`curved-bottom`):** Figma mobil header-in estetikasına uyğun zərif radiuslu kəsim.
   - **Bilet Perforasiyası:** Həqiqi bilet hissi verən yan çentiklər (notches) və qırıq kəsim xətti ilə tərtib olunmuş rəqəmsal bilet.
   - **Marşrut Zolağı:** `Bakı >>>>> Qəbələ` chevron ardıcıllığı və saat intervalı ilə dinamik vizual.
   - **Cinsiyyət üzrə Oturacaq Bölgüsü:** Kişi və Qadın yerlərinin aydın differensiasiyası və interaktiv seçimi.
   - **Sakit Sürücü Rejimi:** Sürücü üçün "sifariş" deyil, "gediş" fəlsəfəsi — yalnız yer və ya bağlama bron edildikdə bildiriş gəlməsi.
   - **Avtomatik Yenidən Təyinat:** Sürücü ləğv edərsə bağlamanın avtomatik növbəti sürücüyə ötürülməsi zəmanəti.

3. **Tipoqrafiya:**
   - Əsas şrift: **Poppins** (400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 800 ExtraBold).

---

## 2. Layihə Strukturu

```
├── /index.html                 # SEO meta teqləri, Poppins şrifti, JSON-LD struktur məlumatı
├── /metadata.json              # Applet metadatası
├── /src
│   ├── /assets/images          # 3D Sürücü mascotu və lime mikroavtobus vizualları
│   ├── /components
│   │   ├── UyolLogo.tsx        # UYOL horizontal və şaquli splash loqo komponenti
│   │   ├── Header.tsx          # Top bar sticky naviqasiya və dil seçimi
│   │   ├── Hero.tsx            # Əyri kəsimli Hero, iki telefon maketi ilə
│   │   ├── ValueStrip.tsx      # Rəqəmsiz təmiz üstünlüklər zolağı
│   │   ├── HowItWorks.tsx      # Sərnişin / Bağlama interaktiv addımları
│   │   ├── PassengerSection.tsx# Gedişlər axtarışı və salon oturacaq seçimi
│   │   ├── ParcelSection.tsx   # Canlı bağlama izləməsi və vaxtında bildirişlər
│   │   ├── DriverSection.tsx   # UYOL Driver tətbiqi, mascot və mikroavtobus
│   │   ├── AppScreensGallery.tsx# Telefon çərçivəsində tətbiq ekranları (User/Driver tabs)
│   │   ├── ArMeasureTeaser.tsx # 'Tezliklə' Kamera ilə bağlama ölçmə simulyasiyası
│   │   ├── FaqSection.tsx      # 7 əsas sual-cavab akordeonu
│   │   ├── FinalCta.tsx        # Şaquli loqo, QR kod və SMS ilə yükləmə
│   │   ├── Footer.tsx          # Təmiz hüquqi linklər və müəllif hüququ
│   │   ├── DownloadModal.tsx   # App Store / Google Play / QR yükləmə pəncərəsi
│   │   ├── TicketModal.tsx     # Zoom olunmuş perforasiyalı bilet pəncərəsi
│   │   ├── ParcelTrackingModal.tsx # Canlı bağlama yoxlama pəncərəsi
│   │   ├── LegalModal.tsx      # Məxfilik siyasəti və İstifadə şərtləri
│   │   └── CookieBanner.tsx    # Kuki xəbərdarlıq bildirişi
│   ├── /data/uyolData.ts       # Reallığa uyğun nümunə reyslər, suallar və statuslar
│   ├── /types/index.ts         # TypeScript interfeysləri
│   ├── App.tsx                 # Əsas app strukturu
│   ├── index.css               # Tailwind v4 və xüsusi dizayn tokenləri
│   └── main.tsx                # React kökü
└── package.json
```

---

## 3. Figma-dan Əl ilə Export Edilməli Asset Siyahısı

Əgər Figma faylından (`ssGiFe1lbc3euHLEEylGuo`) birbaşa SVG və PNG formatında rəsmi vektorları əlavə etmək istəsəniz, aşağıdakı elementləri export edə bilərsiniz:

1. **Loqo Wordmark (SVG):**
   - Node: `Splash Screen / Logo` (və ya Header loqosu).
   - Variantlar:
     - Üfüqi: "U" (Lime `#DDF32C`) + "YOL" (Ağ `#FFFFFF` və ya Qara `#1E1E1E`).
     - Şaquli (Splash 90° variantı): aşağıdan yuxarı oxunan "U-YOL" wordmark.
2. **Sürücü Mascotu (3D Render / PNG):**
   - Node: `Driver / Log in / Choises` ekranından 3D lime formalı və "U" kepkalı sürücü personajı.
3. **Lime Mikroavtobus (PNG):**
   - Node: `Driver / Log in / Choises` ekranındakı lime detallı mikroavtobus / Sprinter / Vito modeli.
4. **Tətbiq Ekranları (Mockup PNG-ləri):**
   - User App: `User / Search Trips`, `User / Seat Selection (Gender)`, `User / My Tickets (Perforated)`, `User / Parcel Tracking`.
   - Driver App: `Driver / Post Trip`, `Driver / Booking Notifications`, `Driver / Passenger Transfer`.

---

## 4. İşə Salma və Tokenlərin Dəyişdirilməsi

### Layihəni işə salmaq:
```bash
npm install
npm run dev
```

### Dizayn Tokenlərinin Dəyişdirilməsi:
Bütün əsas rəng və tipoqrafiya tokenləri `/src/index.css` faylında `:root` daxilində və müvafiq Tailwind CSS siniflərində mərkəzləşdirilib:
- `--accent-lime`: `#DDF32C`
- `--neutral-800`: `#333333`
- `--dark-graphite`: `#1E1E1E`
- `--neutral-50`: `#F2F2F2`
- `--bg-primary`: `#F2F2F7`
- `--card-bg`: `#FCFCFC`
- `--route-green`: `#3DB52F`
- `--urgent-pink`: `#FEE2E2`
- `--urgent-red`: `#DC2626`
- `--price-lime-bg`: `#F4FBD0`
