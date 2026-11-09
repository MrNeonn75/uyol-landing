import { StepItem, FaqItem } from '../types';

export interface TranslationSchema {
  nav: {
    howItWorks: string;
    passengers: string;
    parcels: string;
    drivers: string;
    screens: string;
    faq: string;
    downloadBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    downloadIos: string;
    downloadAndroid: string;
    qrPrompt: string;
    unregisteredBadge: string;
    tabUserApp: string;
    tabDriverApp: string;
  };
  trustBar: {
    points: Array<{
      title: string;
      desc: string;
    }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    passengerTab: string;
    parcelTab: string;
    passengerSteps: StepItem[];
    parcelSteps: StepItem[];
  };
  passengers: {
    kicker: string;
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
    arrivalAlerts: {
      title: string;
      desc: string;
      alert1: string;
      alert2: string;
      alert3: string;
    };
  };
  parcels: {
    kicker: string;
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
    timeline: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
      confirmedBtnText: string;
      autoReassignBadge: string;
      autoReassignText: string;
    };
  };
  drivers: {
    kicker: string;
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      desc: string;
      tag: string;
    }>;
    transferCard: {
      title: string;
      desc: string;
      actionText: string;
      tagText: string;
    };
  };
  screens: {
    title: string;
    subtitle: string;
    tabAll: string;
    tabUser: string;
    tabDriver: string;
    placeholderNote: string;
  };
  volumeDemo: {
    badge: string;
    title: string;
    subtitle: string;
    cameraPrompt: string;
    measureButton: string;
    measuring: string;
    resultTitle: string;
    lengthLabel: string;
    widthLabel: string;
    heightLabel: string;
    volumeLabel: string;
    fitNote: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  downloadCta: {
    title: string;
    subtitle: string;
    scanQrText: string;
    appStoreBadge: string;
    googlePlayBadge: string;
    instantOpenText: string;
  };
  cookieBanner: {
    text: string;
    acceptBtn: string;
    declineBtn: string;
  };
  legalModal: {
    privacyTitle: string;
    termsTitle: string;
    closeBtn: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    forPassengers: string;
    forDrivers: string;
    parcels: string;
    faq: string;
  };
}

export const translations: Record<'az' | 'en' | 'ru', TranslationSchema> = {
  az: {
    nav: {
      howItWorks: 'Necə işləyir',
      passengers: 'Sərnişinlər',
      parcels: 'Bağlamalar',
      drivers: 'Sürücülər',
      screens: 'Ekranlar',
      faq: 'Sual-Cavab',
      downloadBtn: 'Tətbiqi Yüklə',
    },
    hero: {
      badge: 'Sərnişin və Bağlama Daşıma Platforması',
      titleStart: 'Sürücünü ',
      titleHighlight: 'özün seç',
      titleEnd: ', gediş və bağlamanı addım-addım canlı izlə',
      subtitle:
        'UYOL-da avtomatik sifariş paylanması yoxdur. Sürücüləri axtarın, avtomobil və reytinqləri müqayisə edib özünüz seçin. Gediş və bağlama çatdırılmasını real vaxtda izləyin.',
      downloadIos: 'App Store-dan yüklə',
      downloadAndroid: 'Google Play-dən yüklə',
      qrPrompt: 'Telefonla skan edin',
      unregisteredBadge: 'Qeydiyyatsız baxış mövcuddur',
      tabUserApp: 'İstifadəçi Tətbiqi',
      tabDriverApp: 'Sürücü Tətbiqi',
    },
    trustBar: {
      points: [
        {
          title: 'Sürücünü sərbəst seçin',
          desc: 'Avtomatik təyinat yoxdur. Reytinqə, avtomobilə və gediş vaxtına görə sürücünüzü özünüz müəyyən edin.',
        },
        {
          title: 'İkitərəfli bağlama izləməsi',
          desc: 'Həm göndərən, həm də qəbul edən bağlamanın statusunu və sürücünün hərəkətini canlı izləyir.',
        },
        {
          title: 'Vaxtında dəqiq bildirişlər',
          desc: 'Sürücü əvvəlki ünvandan çıxanda, eləcə də 15 dəqiqə və 5 dəqiqə qalanda xəbərdar olun.',
        },
        {
          title: 'Qeydiyyatsız rahat axtarış',
          desc: 'Gedişləri əvvəlcədən sərbəst araşdırın, qeydiyyat və giriş yalnız bron zamanı tələb olunur.',
        },
      ],
    },
    howItWorks: {
      title: 'Platforma necə işləyir?',
      subtitle: 'Standart taksi xidmətlərindən fərqli şəffaf və nəzarətli proses.',
      passengerTab: 'Sərnişin Gedişi',
      parcelTab: 'Bağlama Göndərişi',
      passengerSteps: [
        {
          number: '01',
          title: 'Marşrut və vaxtı axtarın',
          description:
            'Qeydiyyatdan keçmədən istiqamət və tarixi daxil edərək mövcud sürücülərin gediş siyahısını nəzərdən keçirin.',
        },
        {
          number: '02',
          title: 'Sürücünü müqayisə edin və seçin',
          description:
            'Avtomobil modeli, baqaj imkanı, reytinq və digər sərnişinlərin qiymətləndirmələrinə əsasən ən uyğun sürücünü seçin.',
        },
        {
          number: '03',
          title: 'Yerinizi bron edin',
          description:
            'Yalnız bron mərhələsində nömrənizlə daxil olun. Sürücü sifariş spamı almayacaq — yalnız təsdiq olunmuş yer bildirişi alacaq.',
        },
        {
          number: '04',
          title: 'Canlı izləyin və vaxtında çıxın',
          description:
            'Sürücü yola düşəndə, 15 dəq və 5 dəq qalanda bildiriş alın, xəritədə canlı yaxınlaşmanı izləyin.',
        },
      ],
      parcelSteps: [
        {
          number: '01',
          title: 'Bağlama yerini axtarın',
          description:
            'Yalnız standart bağlamalar üçün (iri həcmli mebel və ya yük deyil). Göndərmə və çatdırılma ünvanlarını seçin.',
        },
        {
          number: '02',
          title: 'Uyğun sürücünü bron edin',
          description:
            'Bağlamanı aparacaq sürücünü və gediş vaxtını seçin. Göndərən və qəbul edənin əlaqə məlumatlarını qeyd edin.',
        },
        {
          number: '03',
          title: 'Hər iki tərəf üçün canlı izləmə',
          description:
            'E-ticarət çatdırılması kimi: göndərən və qəbul edən unikal izləmə linki və hər status yenilənməsində SMS/bildiriş alır.',
        },
        {
          number: '04',
          title: 'Təsdiqlə təhvil və zəmanət',
          description:
            'Sürücü təhvil verərkən «Çatdırıldı» düyməsini sıxır. Sürücü ləğv edərsə, sistem bağlamanı avtomatik başqa sürücüyə yönləndirir.',
        },
      ],
    },
    passengers: {
      kicker: 'Sərnişinlər üçün',
      title: 'Seçim azadlığı və tam şəffaflıq',
      subtitle:
        'Sizə sistem tərəfindən məcburi sürücü təyin olunmur. Hansı avtomobillə və kiminlə gedəcəyinizə yalnız siz qərar verirsiniz.',
      features: [
        {
          tag: 'Sürücü müqayisəsi',
          title: 'Bütün detallarla sürücü seçimi',
          desc: 'Avtomobilin ili, kondisioner, baqaj tutumu və sürücünün etibarlılıq profilinə baxaraq sizə ən rahat olanı seçin.',
        },
        {
          tag: 'Baxış azadlığı',
          title: 'Qeydiyyatsız əvvəlcədən araşdırma',
          desc: 'Tətbiqi açan kimi qeydiyyat tələb olunmur. Bütün gedişləri, qiymətləri və saatları maneəsiz nəzərdən keçirin.',
        },
        {
          tag: 'Rahat transfer',
          title: 'Gözlənilməz hallarda avtomobil dəyişimi',
          desc: 'Fors-major hallarında sürücü sizi təhlükəsiz şəkildə digər təsdiqlənmiş UYOL sürücüsünə ötürə bilər.',
        },
      ],
      arrivalAlerts: {
        title: 'Mərhələli gəliş bildirişləri',
        desc: 'Küçədə gözləməyə son. Addım-addım bildirişlərlə vaxtınızı dəqiq planlaşdırın:',
        alert1: 'Sürücü əvvəlki ünvandan yola çıxdı',
        alert2: 'Sürücünün çatmasına 15 dəqiqə qaldı',
        alert3: 'Sürücünün çatmasına 5 dəqiqə qaldı — çıxmağa hazırlaşın',
      },
    },
    parcels: {
      kicker: 'Bağlamalar üçün',
      title: 'E-ticarət dəqiqliyində bağlama daşınması',
      subtitle:
        'Yalnız standart bağlamalar üçün hazırlanmış xüsusi sistem. Göndərdiyiniz əşyanın harda olduğunu hər iki tərəf saniyəbəsaniyə görür.',
      features: [
        {
          tag: 'İkitərəfli məlumatlandırma',
          title: 'Göndərən və qəbul edən xəbərdar edilir',
          desc: 'Bağlama götürüləndə, yolda olanda və təyinat yerinə yaxınlaşanda hər iki tərəfə anlıq bildiriş gedir.',
        },
        {
          tag: 'Təhlükəsizlik təsdiqi',
          title: 'Sürücünün «Çatdırıldı» təsdiqi',
          desc: 'Bağlama təhvil verilməmiş proses tamamlanmır. Sürücü ünvanda təhvili xüsusi təsdiqlə qeydə alır.',
        },
        {
          tag: 'Avtomatik qoruma',
          title: 'Ləğv halında avtomatik yeni sürücü',
          desc: 'Seçilmiş sürücü səfəri ləğv edərsə, sistem bağlamanızı tək qoymur — eyni marşrut üzrə ən uyğun növbəti sürücünü dərhal tapır.',
        },
      ],
      timeline: {
        step1: 'Bağlama təhvil alındı',
        step2: 'Sürücü yoldadır (Canlı xəritə)',
        step3: 'Ünvana 15 dəqiqə qaldı',
        step4: 'Çatdırıldı və təhvil verildi',
        confirmedBtnText: 'Təhvil Təsdiqləndi',
        autoReassignBadge: 'Ağıllı sığorta mexanizmi',
        autoReassignText: 'Sürücü gedişi ləğv etdikdə sistem bağlama üçün yeni sürücünü avtomatik müəyyən edir.',
      },
    },
    drivers: {
      kicker: 'Sürücülər üçün',
      title: 'Öz qrafikiniz, öz gedişləriniz',
      subtitle:
        'Sizə bezdirici təkliflərlə sifariş spamı getmir. Öz gedişinizi yaradırsınız və yalnız konkret bron gəldikdə bildiriş alırsınız.',
      features: [
        {
          tag: 'Gediş planlaması',
          title: 'Öz marşrutunuzu və yerlərinizi siz təyin edirsiniz',
          desc: 'Gedəcəyiniz istiqaməti, boş sərnişin yerlərini və bağlama üçün yeri daxil edin. «Sifariş» deyil, tam sizin idarənizdə olan «Gediş».',
        },
        {
          tag: 'Spamsız rejim',
          title: 'Yalnız təsdiqlənmiş bron bildirişləri',
          desc: 'Avtomatik sifariş təklifləri ilə telefonunuz narahat edilmir. Sərnişin və ya bağlama bron edildikdə dəqiq məlumat alırsınız.',
        },
        {
          tag: 'Xatırlatma və nəzarət',
          title: 'Gediş xatırlatmaları və geolokasiya idarəsi',
          desc: 'Gedişə hazırlıq bildirişləri və yalnız aktiv gediş müddətində işləyən dəqiq geolokasiya təhlükəsizliyi.',
        },
      ],
      transferCard: {
        title: 'Sərnişin Ötürmə funksiyası',
        desc: 'Texniki nasazlıq və ya plan dəyişikliyi olduqda, sərnişinləri yolda qoymadan təhlükəsiz şəkildə digər UYOL sürücüsünə ötürə bilərsiniz.',
        actionText: 'Tətbiqdaxili sürətli transfer',
        tagText: 'Sürücü Həmrəyliyi',
      },
    },
    screens: {
      title: 'Tətbiq Ekranları',
      subtitle: 'Figma dizayn sisteminə əsaslanan istifadəçi və sürücü interfeysləri.',
      tabAll: 'Bütün Ekranlar',
      tabUser: 'İstifadəçi Tətbiqi',
      tabDriver: 'Sürücü Tətbiqi',
      placeholderNote: 'Figma faylınızdakı ekran PNG-lərini /public qovluğuna əlavə edərək asanlıqla yeniləyə bilərsiniz.',
    },
    volumeDemo: {
      badge: 'Tezliklə · İnnovasiya',
      title: 'Kamera ilə bağlama həcmini ölçmə',
      subtitle:
        'Telefon kameranızı bağlamaya yönəldərək onun en, uzunluq və hündürlüyünü avtomatik hesablayın. Avtomobil baqajına uyğunluğunu dərhal öyrənin.',
      cameraPrompt: 'Simulyasiyanı başlatmaq üçün toxunun',
      measureButton: 'Kamera ilə ölç',
      measuring: 'Ölçülər skan edilir...',
      resultTitle: 'Hesablanmış Bağlama Parametrləri',
      lengthLabel: 'Uzunluq',
      widthLabel: 'En',
      heightLabel: 'Hündürlük',
      volumeLabel: 'Təxmini həcm',
      fitNote: 'Standart sedan və hetçbek baqajı üçün tam uyğundur (Yalnız bağlama qəbul olunur).',
    },
    faq: {
      title: 'Tez-tez Verilən Suallar',
      subtitle: 'UYOL platformasının iş prinsipləri və xüsusiyyətləri haqqında aydın cavablar.',
      items: [
        {
          id: 'faq-1',
          question: 'UYOL-dan istifadə etmək üçün qeydiyyatdan keçmək nə vaxt tələb olunur?',
          answer:
            'Gedişləri, sürücüləri, marşrutları və saatları araşdırmaq üçün qeydiyyat lazım deyil. Hesab yalnız konkret sərnişin yeri və ya bağlama bron etmək istədikdə tələb olunur.',
        },
        {
          id: 'faq-2',
          question: 'UYOL-un Bolt və Uber kimi taksi tətbiqlərindən əsas fərqi nədir?',
          answer:
            'Taksi tətbiqlərində alqoritm sizə təsadüfi sürücü təyin edir və sürücüyə avtomatik sifariş göndərir. UYOL-da isə siz sürücülərin reytinqinə, maşınına və şərtlərinə baxaraq özünüz seçim edirsiniz. Sürücü isə yalnız bron təsdiqlənəndə bildiriş alır.',
        },
        {
          id: 'faq-3',
          question: 'Bağlama göndərildikdə qəbul edən tərəf onu necə izləyir?',
          answer:
            'Bron zamanı qeyd olunan qəbul edən şəxsin telefonuna izləmə linki və bildirişlər göndərilir. O, bağlamanın götürülməsindən çatdırılma anına qədər sürücünün marşrutunu canlı görə bilir.',
        },
        {
          id: 'faq-4',
          question: 'Seçilmiş sürücü gedişi ləğv edərsə, bağlama nə olur?',
          answer:
            'Bağlamalar üçün sistemdə xüsusi avtomatik əvəzləmə alqoritmi var. Əgər sürücü fors-major səbəbindən gedişi ləğv edərsə, sistem dərhal eyni istiqamətdə gedən ən uyğun yeni sürücünü tapır və bağlamanı ona yönləndirir.',
        },
        {
          id: 'faq-5',
          question: 'Hansı bağlamalar qəbul olunur?',
          answer:
            'UYOL yalnız standart şəxsi bağlamalar (zərflər, kiçik və orta qutular, geyim, sənədlər və s.) üçündür. İri qabaritli yüklər, mebel, tikinti materialları və ya xüsusi yük maşını tələb edən daşımalar qəbul edilmir.',
        },
        {
          id: 'faq-6',
          question: 'Sürücü tətbiqində «Sərnişin ötürmə» nə deməkdir?',
          answer:
            'Əgər sürücünün avtomobilində texniki nasazlıq yaranarsa və ya səfəri davam etdirə bilməzsə, o, tətbiqdaxili funksiya vasitəsilə sərnişini eyni marşrut üzrə hərəkət edən digər UYOL sürücüsünə təhvil verə bilər.',
        },
        {
          id: 'faq-7',
          question: 'Sürücüyə bildirişlər necə gəlir?',
          answer:
            'Sürücülər üçün «sifariş təklifi» spamı olmur. Sürücü öz gediş cədvəlini yaradır və yalnız real istifadəçi yer bron etdikdə və ya bağlama yeri təsdiqləndikdə bildiriş alır.',
        },
      ],
    },
    downloadCta: {
      title: 'UYOL ilə yola çıxın',
      subtitle:
        'Sərnişin və ya sürücü kimi qoşulun. Sürücünüzü özünüz seçin, bağlamanızı rahatlıqla çatdırın.',
      scanQrText: 'Kamera ilə skan edərək tətbiqi dərhal quraşdırın',
      appStoreBadge: 'App Store',
      googlePlayBadge: 'Google Play',
      instantOpenText: 'iOS və Android üçün aktivdir',
    },
    cookieBanner: {
      text: 'UYOL təcrübənizi yaxşılaşdırmaq və naviqasiyanı optimallaşdırmaq üçün zəruri kukilərdən istifadə edir.',
      acceptBtn: 'Qəbul et',
      declineBtn: 'Yalnız zəruri',
    },
    legalModal: {
      privacyTitle: 'Məxfilik Siyasəti',
      termsTitle: 'İstifadə Şərtləri',
      closeBtn: 'Bağla',
    },
    footer: {
      rights: 'Bütün hüquqlar qorunur.',
      privacy: 'Məxfilik siyasəti',
      terms: 'İstifadə şərtləri',
      forPassengers: 'Sərnişinlər',
      forDrivers: 'Sürücülər',
      parcels: 'Bağlamalar',
      faq: 'Sual-Cavab',
    },
  },
  en: {
    nav: {
      howItWorks: 'How It Works',
      passengers: 'Passengers',
      parcels: 'Parcels',
      drivers: 'Drivers',
      screens: 'Screens',
      faq: 'FAQ',
      downloadBtn: 'Download App',
    },
    hero: {
      badge: 'Passenger & Parcel Transit Platform',
      titleStart: 'Pick your driver ',
      titleHighlight: 'yourself',
      titleEnd: ', track rides and parcels in real time',
      subtitle:
        'UYOL has no forced order dispatch. Search drivers, compare vehicles and ratings, and choose your ride yourself. Track rides and parcel deliveries step-by-step.',
      downloadIos: 'Download on App Store',
      downloadAndroid: 'Get it on Google Play',
      qrPrompt: 'Scan with your phone',
      unregisteredBadge: 'Browse without registration',
      tabUserApp: 'User App',
      tabDriverApp: 'Driver App',
    },
    trustBar: {
      points: [
        {
          title: 'You choose the driver',
          desc: 'No automated driver assignment. Compare vehicles, luggage room, and verified ratings.',
        },
        {
          title: 'Dual parcel tracking',
          desc: 'Both sender and recipient receive notifications and follow live transit on the map.',
        },
        {
          title: 'Timely arrival alerts',
          desc: 'Get notified when the driver departs previous stop, plus 15-min and 5-min alerts.',
        },
        {
          title: 'Zero registration search',
          desc: 'Explore routes and drivers freely upfront. Sign in is only requested upon booking.',
        },
      ],
    },
    howItWorks: {
      title: 'How does it work?',
      subtitle: 'Transparent, driver-selected platform unlike standard ride-hailing services.',
      passengerTab: 'Passenger Ride',
      parcelTab: 'Parcel Delivery',
      passengerSteps: [
        {
          number: '01',
          title: 'Search route and timing',
          description: 'Explore available driver trips without signing up first.',
        },
        {
          number: '02',
          title: 'Compare and select driver',
          description: 'Review car photos, comfort rating, baggage room, and choose your preferred driver.',
        },
        {
          number: '03',
          title: 'Book your seat',
          description: 'Login with your phone only at booking. Driver gets a clean confirmation, not order spam.',
        },
        {
          number: '04',
          title: 'Live tracking & alerts',
          description: 'Receive 15-min and 5-min arrival alerts, track the vehicle live on the map.',
        },
      ],
      parcelSteps: [
        {
          number: '01',
          title: 'Search parcel slot',
          description: 'For standard parcels only (no heavy cargo). Choose pickup and drop-off addresses.',
        },
        {
          number: '02',
          title: 'Book a driver',
          description: 'Select matching trip and enter recipient contact for tracking synchronization.',
        },
        {
          number: '03',
          title: 'Dual party tracking',
          description: 'Both sender and recipient receive status updates and live location access.',
        },
        {
          number: '04',
          title: 'Confirmed delivery & fallback',
          description: 'Driver confirms via "Delivered". If cancelled, system auto-reassigns a replacement driver.',
        },
      ],
    },
    passengers: {
      kicker: 'For Passengers',
      title: 'Full control over your journey',
      subtitle: 'No algorithms forcing an arbitrary driver on you. You decide who you travel with.',
      features: [
        {
          tag: 'Driver choice',
          title: 'Inspect driver profile and car',
          desc: 'Check car make, air conditioning, luggage capacity, and previous rider ratings.',
        },
        {
          tag: 'Frictionless',
          title: 'Explore without upfront registration',
          desc: 'Browse all trips and prices freely. Sign up only when ready to confirm your seat.',
        },
        {
          tag: 'Reliability',
          title: 'Safe passenger transfer protocol',
          desc: 'In unexpected events, drivers can safely transfer passengers to another verified UYOL vehicle.',
        },
      ],
      arrivalAlerts: {
        title: 'Step-by-step arrival notifications',
        desc: 'Never wait on the curb in the dark. Plan with exact alerts:',
        alert1: 'Driver has left the previous stop',
        alert2: 'Driver is 15 minutes away',
        alert3: 'Driver is 5 minutes away — get ready to board',
      },
    },
    parcels: {
      kicker: 'For Parcels',
      title: 'E-commerce precision for every parcel',
      subtitle: 'Designed specifically for parcels (no heavy freight). Both sender and receiver stay informed.',
      features: [
        {
          tag: 'Two-way updates',
          title: 'Sender and recipient both notified',
          desc: 'Instant notifications when the parcel is picked up, en route, and approaching delivery.',
        },
        {
          tag: 'Proof of delivery',
          title: 'Driver «Delivered» action',
          desc: 'Delivery completes only when the driver marks arrival and confirms handover.',
        },
        {
          tag: 'Smart reassignment',
          title: 'Auto-find new driver upon cancellation',
          desc: 'If a driver cancels due to emergency, UYOL automatically matches your parcel with the next best trip.',
        },
      ],
      timeline: {
        step1: 'Parcel accepted',
        step2: 'Driver en route (Live map)',
        step3: '15 minutes away from destination',
        step4: 'Delivered and confirmed',
        confirmedBtnText: 'Handover Confirmed',
        autoReassignBadge: 'Smart guarantee safeguard',
        autoReassignText: 'If a driver cancels, the platform automatically re-assigns the parcel to another driver.',
      },
    },
    drivers: {
      kicker: 'For Drivers',
      title: 'Your schedule, your trips',
      subtitle: 'No dispatch order spam. Create your own trips and receive notifications only when seats are booked.',
      features: [
        {
          tag: 'Trip management',
          title: 'Define your route and seat capacity',
          desc: 'Set destination, departure time, available passenger seats and parcel room. It is your trip, not an order.',
        },
        {
          tag: 'No spam',
          title: 'Notifications only when booked',
          desc: 'No constant dispatch pings. Receive clean notifications only when a passenger or parcel is confirmed.',
        },
        {
          tag: 'Peace of mind',
          title: 'Trip reminders & location control',
          desc: 'Preparation reminders and privacy-conscious geolocation active strictly during active trips.',
        },
      ],
      transferCard: {
        title: 'Passenger Transfer Feature',
        desc: 'If car issues occur, easily and safely transfer riders to another verified UYOL car without leaving anyone stranded.',
        actionText: 'Quick in-app transfer',
        tagText: 'Driver network',
      },
    },
    screens: {
      title: 'Application Screens',
      subtitle: 'User and Driver interfaces built from the UYOL design language.',
      tabAll: 'All Screens',
      tabUser: 'User App',
      tabDriver: 'Driver App',
      placeholderNote: 'Easily update with your exported Figma PNG screenshots placed in /public.',
    },
    volumeDemo: {
      badge: 'Coming Soon · Innovation',
      title: 'Camera-based parcel volume measurement',
      subtitle: 'Point your camera at a box to calculate length, width, and volume to verify trunk capacity before booking.',
      cameraPrompt: 'Tap to start simulated camera measurement',
      measureButton: 'Measure with camera',
      measuring: 'Scanning dimensions...',
      resultTitle: 'Calculated Parcel Dimensions',
      lengthLabel: 'Length',
      widthLabel: 'Width',
      heightLabel: 'Height',
      volumeLabel: 'Estimated volume',
      fitNote: 'Fits standard car trunks (parcels only, no oversized freight).',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers about how UYOL operates differently.',
      items: [
        {
          id: 'faq-1',
          question: 'When is registration required on UYOL?',
          answer: 'You can browse all trips, schedules, prices, and driver profiles freely without registering. Sign in is only required when booking a seat or parcel.',
        },
        {
          id: 'faq-2',
          question: 'How is UYOL different from Uber or Bolt?',
          answer: 'Taxis force an algorithm-assigned driver on you. On UYOL, you compare driver ratings, cars, and departure times to pick your own driver.',
        },
        {
          id: 'faq-3',
          question: 'How does the parcel recipient track delivery?',
          answer: 'The recipient receives an SMS and live tracking link. They can watch the driver moving towards the destination in real time.',
        },
        {
          id: 'faq-4',
          question: 'What happens if a driver cancels my parcel trip?',
          answer: 'UYOL automatically reassigns the parcel to the next verified driver heading on the same route so your parcel is never left stranded.',
        },
        {
          id: 'faq-5',
          question: 'What kind of parcels are permitted?',
          answer: 'Only standard parcels (documents, apparel, personal boxes, small packages). Oversized cargo, furniture, and heavy machinery are prohibited.',
        },
        {
          id: 'faq-6',
          question: 'What does "Passenger Transfer" mean for drivers?',
          answer: 'If a driver faces a car issue or emergency, they can transfer passengers to another verified UYOL driver directly in the app.',
        },
        {
          id: 'faq-7',
          question: 'Do drivers get dispatched random orders?',
          answer: 'No. Drivers publish their own trips and receive clean notifications only when a user actually books a seat or parcel space.',
        },
      ],
    },
    downloadCta: {
      title: 'Hit the road with UYOL',
      subtitle: 'Join as a passenger, sender, or driver. Choose your driver and enjoy transparent journeys.',
      scanQrText: 'Scan with camera to install the app',
      appStoreBadge: 'App Store',
      googlePlayBadge: 'Google Play',
      instantOpenText: 'Available for iOS & Android',
    },
    cookieBanner: {
      text: 'UYOL uses necessary cookies to ensure seamless navigation and improve your experience.',
      acceptBtn: 'Accept',
      declineBtn: 'Essential only',
    },
    legalModal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
      closeBtn: 'Close',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      forPassengers: 'Passengers',
      forDrivers: 'Drivers',
      parcels: 'Parcels',
      faq: 'FAQ',
    },
  },
  ru: {
    nav: {
      howItWorks: 'Как это работает',
      passengers: 'Пассажирам',
      parcels: 'Посылки',
      drivers: 'Водителям',
      screens: 'Экраны',
      faq: 'Вопросы и ответы',
      downloadBtn: 'Скачать приложение',
    },
    hero: {
      badge: 'Платформа пассажирских и посылочных перевозок',
      titleStart: 'Выбирайте водителя ',
      titleHighlight: 'сами',
      titleEnd: ', отслеживайте поездку и посылку в реальном времени',
      subtitle:
        'В UYOL нет автоматического распределения заказов. Вы сами ищете водителей, сравниваете авто и рейтинг. Отслеживайте поездку и посылку шаг за шагом.',
      downloadIos: 'Скачать в App Store',
      downloadAndroid: 'Скачать в Google Play',
      qrPrompt: 'Наведите камеру телефона',
      unregisteredBadge: 'Просмотр без регистрации',
      tabUserApp: 'Приложение пользователя',
      tabDriverApp: 'Приложение водителя',
    },
    trustBar: {
      points: [
        {
          title: 'Свободный выбор водителя',
          desc: 'Никаких навязанных назначений. Выбирайте по рейтингу, модели авто и времени выезда.',
        },
        {
          title: 'Двустороннее отслеживание посылок',
          desc: 'И отправитель, и получатель видят статус доставки и движение водителя в реальном времени.',
        },
        {
          title: 'Точные уведомления о прибытии',
          desc: 'Узнавайте, когда водитель выехал с предыдущего адреса, а также за 15 и 5 минут до подачи.',
        },
        {
          title: 'Поиск без регистрации',
          desc: 'Изучайте маршруты свободно. Вход в аккаунт требуется только на этапе бронирования.',
        },
      ],
    },
    howItWorks: {
      title: 'Как работает UYOL?',
      subtitle: 'Прозрачная модель в отличие от стандартных агрегаторов такси.',
      passengerTab: 'Пассажирская поездка',
      parcelTab: 'Отправка посылки',
      passengerSteps: [
        {
          number: '01',
          title: 'Поиск маршрута и даты',
          description: 'Изучайте доступные поездки водителей без предварительной регистрации.',
        },
        {
          number: '02',
          title: 'Сравнение и выбор водителя',
          description: 'Оценивайте авто, багажник, отзывы и выбирайте наиболее комфортный вариант.',
        },
        {
          number: '03',
          title: 'Бронирование места',
          description: 'Вход по номеру только при бронировании. Водитель получает подтверждение, а не спам заказами.',
        },
        {
          number: '04',
          title: 'Отслеживание и уведомления',
          description: 'Получайте уведомления за 15 и 5 минут до прибытия, следите за авто на карте.',
        },
      ],
      parcelSteps: [
        {
          number: '01',
          title: 'Поиск места под посылку',
          description: 'Только стандартные посылки (не крупногабаритный груз). Укажите адреса отправки и доставки.',
        },
        {
          number: '02',
          title: 'Бронирование водителя',
          description: 'Выберите поездку и укажите контакты получателя для синхронизации статусов.',
        },
        {
          number: '03',
          title: 'Отслеживание для обеих сторон',
          description: 'Отправитель и получатель получают SMS и онлайн-ссылку с живым статусом.',
        },
        {
          number: '04',
          title: 'Подтверждение доставки',
          description: 'Водитель нажимает «Доставлено». В случае отмены система автоматически находит нового водителя.',
        },
      ],
    },
    passengers: {
      kicker: 'Пассажирам',
      title: 'Свобода выбора и прозрачность',
      subtitle: 'Алгоритм не навязывает вам водителя. Вы сами решаете, с кем и на каком авто ехать.',
      features: [
        {
          tag: 'Выбор водителя',
          title: 'Подробная информация о водителе и авто',
          desc: 'Год выпуска, кондиционер, вместимость багажника и честные отзывы пассажиров.',
        },
        {
          tag: 'Без барьеров',
          title: 'Поиск без необходимости регистрации',
          desc: 'Смотрите все рейсы и цены сразу. Вход требуется лишь при подтверждении брони.',
        },
        {
          tag: 'Надежность',
          title: 'Передача пассажира при форс-мажоре',
          desc: 'В случае непредвиденных обстоятельств водитель может безопасно пересадить пассажира в другое авто UYOL.',
        },
      ],
      arrivalAlerts: {
        title: 'Уведомления о прибытии',
        desc: 'Не ждите на улице вслепую. Четкие сигналы помогают планировать время:',
        alert1: 'Водитель выехал с предыдущей точки',
        alert2: 'До прибытия водителя осталось 15 минут',
        alert3: 'До прибытия 5 минут — готовьтесь к выходу',
      },
    },
    parcels: {
      kicker: 'Посылкам',
      title: 'Точность доставки уровня e-commerce',
      subtitle: 'Специально для стандартных посылок. Обе стороны в курсе каждого километра пути.',
      features: [
        {
          tag: 'Оповещения',
          title: 'Уведомления отправителю и получателю',
          desc: 'Мгновенные сообщения при получении, в пути и при приближении к точке вручения.',
        },
        {
          tag: 'Подтверждение',
          title: 'Кнопка «Доставлено» у водителя',
          desc: 'Процесс завершается только после фиксации передачи посылки водителем.',
        },
        {
          tag: 'Автозамена',
          title: 'Автоматический поиск нового водителя',
          desc: 'Если водитель отменит рейс, система сразу найдет другого проверенного водителя по маршруту.',
        },
      ],
      timeline: {
        step1: 'Посылка принята водителем',
        step2: 'Водитель в пути (Живая карта)',
        step3: '15 минут до адреса получателя',
        step4: 'Успешно вручено и подтверждено',
        confirmedBtnText: 'Вручение подтверждено',
        autoReassignBadge: 'Умная защита доставки',
        autoReassignText: 'При отмене рейса система автоматически перенаправляет посылку следующему водителю.',
      },
    },
    drivers: {
      kicker: 'Водителям',
      title: 'Ваш график, ваши поездки',
      subtitle: 'Никакого спама навязанными заказами. Создавайте свой рейс («Gediş») и получайте только подтвержденные брони.',
      features: [
        {
          tag: 'Управление поездкой',
          title: 'Вы сами задаете маршрут и количество мест',
          desc: 'Указывайте время выезда, свободные места и место под посылки. Это ваша поездка, а не навязанный заказ.',
        },
        {
          tag: 'Тихий режим',
          title: 'Уведомления только о реальных бронях',
          desc: 'Телефон не разрывается от предложений. Оповещения приходят только когда пассажир или посылка забронированы.',
        },
        {
          tag: 'Контроль',
          title: 'Напоминания о выезде и геолокация',
          desc: 'Удобные напоминания перед поездкой и включение геолокации строго во время активного маршрута.',
        },
      ],
      transferCard: {
        title: 'Функция «Передача пассажира»',
        desc: 'При поломке авто водитель может безопасно перенаправить пассажиров коллеге на платформе UYOL.',
        actionText: 'Быстрый трансфер в приложении',
        tagText: 'Водительская сеть',
      },
    },
    screens: {
      title: 'Экраны приложения',
      subtitle: 'Интерфейсы приложений пользователя и водителя на базе дизайн-системы UYOL.',
      tabAll: 'Все экраны',
      tabUser: 'Для пассажиров',
      tabDriver: 'Для водителей',
      placeholderNote: 'Скриншоты из Figma можно легко загрузить в папку /public.',
    },
    volumeDemo: {
      badge: 'Скоро · Инновации',
      title: 'Измерение объема посылки камерой',
      subtitle: 'Наведите камеру на коробку для вычисления габаритов и проверки вместимости в багажник авто.',
      cameraPrompt: 'Нажмите для симуляции замера камерой',
      measureButton: 'Замерить камерой',
      measuring: 'Сканирование габаритов...',
      resultTitle: 'Рассчитанные параметры посылки',
      lengthLabel: 'Длина',
      widthLabel: 'Ширина',
      heightLabel: 'Высота',
      volumeLabel: 'Примерный объем',
      fitNote: 'Подходит для стандартного багажника седана/хэтчбека (только посылки).',
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Ответы о принципах работы и преимуществах платформы UYOL.',
      items: [
        {
          id: 'faq-1',
          question: 'Когда требуется регистрация в UYOL?',
          answer: 'Смотреть рейсы, водителей, цены и расписание можно свободно без регистрации. Вход нужен только при бронировании места или посылки.',
        },
        {
          id: 'faq-2',
          question: 'Чем UYOL отличается от обычного такси (Bolt, Uber)?',
          answer: 'В такси водителя назначает программа вслепую. В UYOL вы сами изучаете профили водителей, авто, рейтинги и бронируете поездку осознанно.',
        },
        {
          id: 'faq-3',
          question: 'Как получатель отслеживает посылку?',
          answer: 'Получатель получает SMS и веб-ссылку со статусом и живой картой перемещения водителя.',
        },
        {
          id: 'faq-4',
          question: 'Что произойдет, если выбранный водитель отменит поездку?',
          answer: 'Для посылок действует автозамена: система немедленно находит ближайшего подходящего водителя по тому же маршруту.',
        },
        {
          id: 'faq-5',
          question: 'Какие посылки принимаются?',
          answer: 'Только стандартные посылки (коробки, вещи, конверты, документы). Крупногабаритная мебель и строительные грузы не перевозятся.',
        },
        {
          id: 'faq-6',
          question: 'Что такое «Передача пассажира» для водителя?',
          answer: 'В случае поломки авто водитель может в пару кликов передать пассажиров другому проверенному водителю UYOL на этом маршруте.',
        },
        {
          id: 'faq-7',
          question: 'Приходят ли водителю спам-заказы?',
          answer: 'Нет. Водитель публикует свою поездку и получает уведомления исключительно о подтвержденных бронированиях.',
        },
      ],
    },
    downloadCta: {
      title: 'Отправляйтесь в путь с UYOL',
      subtitle: 'Подключайтесь как пассажир или водитель. Выбирайте поездки с полным комфортом и контролем.',
      scanQrText: 'Наведите камеру на QR-код для быстрой установки',
      appStoreBadge: 'App Store',
      googlePlayBadge: 'Google Play',
      instantOpenText: 'Доступно для iOS и Android',
    },
    cookieBanner: {
      text: 'UYOL использует необходимые cookie-файлы для обеспечения корректной работы сервиса.',
      acceptBtn: 'Принять',
      declineBtn: 'Только необходимые',
    },
    legalModal: {
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Условия использования',
      closeBtn: 'Закрыть',
    },
    footer: {
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      forPassengers: 'Пассажирам',
      forDrivers: 'Водителям',
      parcels: 'Посылкам',
      faq: 'Вопросы и ответы',
    },
  },
};
