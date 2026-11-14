export interface PrivacySectionItem {
  label?: string;
  text: string;
}

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: PrivacySectionItem[];
  afterParagraphs?: string[];
}

export interface PrivacyContent {
  lang: 'az' | 'en' | 'ru' | 'tr' | 'uz';
  title: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  intro: string;
  sections: PrivacySection[];
  contactEmail: string;
  contactWeb: string;
}

export const privacyAz: PrivacyContent = {
  lang: 'az',
  title: 'UYOL – Məxfilik Siyasəti',
  lastUpdatedLabel: 'Son yenilənmə:',
  lastUpdatedDate: '14 Noyabr 2026',
  intro:
    'UYOL ("biz") sərnişinlər və sürücülər üçün şəhərlərarası gedişlərin və bağlamaların təşkili xidmətidir. Bu siyasət UYOL mobil tətbiqlərini (Sərnişin və Sürücü) və uyol.app saytını istifadə edərkən şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini, saxlandığını və qorunduğunu izah edir.',
  contactEmail: 'support@uyol.app',
  contactWeb: 'https://uyol.app',
  sections: [
    {
      id: 'az-1',
      title: '1. Topladığımız məlumatlar',
      items: [
        {
          label: 'Hesab məlumatları:',
          text: 'ad, soyad, telefon nömrəsi, e-poçt [YOXLA: tətbiq e-poçt toplayırmı], profil şəkli.',
        },
        {
          label: 'Sürücülər üçün əlavə məlumatlar:',
          text: 'avtomobil məlumatları (marka, il, nömrə), avtomobil şəkilləri, yaş [YOXLA: hansı sahələr toplanır].',
        },
        {
          label: 'Üçüncü şəxs məlumatları:',
          text: 'sürücü gedişə əlavə etdiyi müştərinin adı, telefon nömrəsi və cinsiyyəti. Bu məlumatı əlavə edən şəxs, onun üçün müvafiq icazəyə malik olduğuna görə məsuliyyət daşıyır.',
        },
        {
          label: 'Yer (geolokasiya) məlumatı:',
          text: 'minmə və düşmə ünvanlarının seçilməsi, marşrutun xəritədə göstərilməsi və sürücünün canlı izlənməsi üçün dəqiq və təxmini yer. [YOXLA: tətbiq arxa fonda yer məlumatı toplayırmı. Toplayırsa, bunu açıq yaz.]',
        },
        {
          label: 'Bilet və bağlama məlumatları:',
          text: 'gediş, bilet, yer seçimi, bağlamanın göndərən və qəbul edən məlumatları, yükün təsviri və yüklədiyiniz şəkillər.',
        },
        {
          label: 'Mesajlar:',
          text: 'sərnişin və sürücü arasında tətbiq daxili yazışmalar.',
        },
        {
          label: 'Ödəniş məlumatları:',
          text: 'ödəniş statusu və məbləği. Kart məlumatları UYOL tərəfindən saxlanmır, ödənişi [YOXLA: ödəniş provayderi adı] həyata keçirir.',
        },
        {
          label: 'Cihaz və istifadə məlumatları:',
          text: 'cihaz modeli, əməliyyat sistemi, push bildiriş tokeni, xəta hesabatları [YOXLA: analitika/crash alətləri].',
        },
        {
          label: 'Kamera və şəkillər:',
          text: 'yalnız siz bağlama şəkli yüklədikdə və ya profil şəkli seçdikdə, icazə verdiyiniz halda.',
        },
      ],
    },
    {
      id: 'az-2',
      title: '2. Məlumatlardan istifadə məqsədləri',
      items: [
        { text: 'gedişlərin və bağlamaların təşkili, bron və çatdırılma;' },
        { text: 'sürücü və sərnişin arasında əlaqə (zəng, mesaj);' },
        { text: 'gedişin xəritədə izlənməsi və bildirişlərin göndərilməsi;' },
        { text: 'hesab və ödənişlərin təhlükəsizliyi, saxtakarlığın qarşısının alınması;' },
        { text: 'müştəri dəstəyi və xidmətin yaxşılaşdırılması;' },
        { text: 'hüquqi öhdəliklərin yerinə yetirilməsi.' },
      ],
    },
    {
      id: 'az-3',
      title: '3. Məlumatların paylaşılması',
      paragraphs: [
        'Şəxsi məlumatlarınızı reklam məqsədilə satmırıq. Məlumatlar yalnız bunlarla paylaşılır:',
      ],
      items: [
        {
          text: 'gedişdə iştirak edən digər tərəf (məs. sürücüyə sərnişinin adı, minmə ünvanı; sərnişinə sürücünün adı, avtomobili);',
        },
        {
          text: 'xidmət təminatçıları: xəritə və naviqasiya [YOXLA: Google Maps və s.], ödəniş [YOXLA], bildiriş və hosting [YOXLA: Firebase və s.], yalnız xidməti göstərmək üçün lazım olan həcmdə;',
        },
        {
          text: 'qanunla tələb olunduqda səlahiyyətli dövlət orqanları.',
        },
      ],
      afterParagraphs: [
        'Xəritədəki "Waze-ə keç" funksiyasından istifadə etdikdə ünvan məlumatı Waze-ə ötürülür və həmin xidmətin öz siyasəti tətbiq olunur.',
      ],
    },
    {
      id: 'az-4',
      title: '4. Təhlükəsizlik',
      paragraphs: [
        'Məlumat ötürülməsi HTTPS/TLS ilə qorunur. Giriş hüquqları məhdudlaşdırılıb. Heç bir sistem 100% təhlükəsiz olmadığından mütləq təhlükəsizlik zəmanəti verə bilmirik.',
      ],
    },
    {
      id: 'az-5',
      title: '5. Saxlanma müddəti',
      paragraphs: [
        'Məlumatlar hesabınız aktiv olduğu müddətdə və xidməti göstərmək üçün lazım olan müddət ərzində saxlanılır. Hesab silindikdə şəxsi məlumatlar [YOXLA: N gün] ərzində silinir. Qanunla saxlanılması tələb olunan məlumatlar (məs. ödəniş qeydləri) istisnadır. [YOXLA: dəqiq müddətlər]',
      ],
    },
    {
      id: 'az-6',
      title: '6. Sizin hüquqlarınız',
      paragraphs: [
        'Məlumatlarınıza giriş, düzəliş, silmə, emala etiraz və məlumatın surətini tələb etmək hüququnuz var. Hesabı və məlumatları silmək üçün: [YOXLA: tətbiqdə həqiqətən varsa "Profil → ... → Hesabı sil" yolunu yaz] və ya /delete-account səhifəsindəki addımlar, yaxud support@uyol.app.',
      ],
    },
    {
      id: 'az-7',
      title: '7. Uşaqlar',
      paragraphs: [
        'UYOL 18 yaşdan kiçik şəxslər üçün nəzərdə tutulmayıb və biz bilərəkdən onlardan məlumat toplamırıq. [YOXLA: yaş məhdudiyyəti tətbiqin qaydalarına uyğundurmu]',
      ],
    },
    {
      id: 'az-8',
      title: '8. Siyasətdə dəyişikliklər',
      paragraphs: [
        'Dəyişiklik olduqda bu səhifədə yenilənmə tarixi dəyişdiriləcək. Əhəmiyyətli dəyişikliklər barədə tətbiq daxilində məlumat verəcəyik.',
      ],
    },
    {
      id: 'az-9',
      title: '9. Əlaqə',
      paragraphs: [
        // İSTƏSƏ ƏLAVƏ ET: Play Console hüquqi şəxs adı tələb edərsə, hüquqi şəxsin adını burada yaz. Əks halda əlavə etmə.
        'E-poçt: support@uyol.app',
        'Veb: https://uyol.app',
      ],
    },
  ],
};
