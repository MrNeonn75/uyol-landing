export type LanguageCode = 'az' | 'en' | 'ru' | 'tr' | 'uz';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'az', shortLabel: 'AZ', nativeName: 'Azərbaycan' },
  { code: 'en', shortLabel: 'EN', nativeName: 'English' },
  { code: 'ru', shortLabel: 'RU', nativeName: 'Русский' },
  { code: 'tr', shortLabel: 'TR', nativeName: 'Türkçe' },
  { code: 'uz', shortLabel: 'UZ', nativeName: 'O‘zbekcha' },
];

export interface TranslationSchema {
  nav: {
    howItWorks: string;
    passengers: string;
    parcels: string;
    drivers: string;
    faq: string;
    downloadApp: string;
    languageLabel: string;
    changeLanguageAria: string;
    menuAria: string;
    homeAria: string;
  };
  hero: {
    kickerMain: string;
    kickerCountry: string;
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    appStoreBtn: string;
    googlePlayBtn: string;
    qrTitle: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    mockupDateTrips: string;
    mockupPassengerCount: string;
    mockupDuration: string;
    mockupDoorToDoor: string;
    mockupOneSeatLeft: string;
    mockupSelectSeatBtn: string;
    mockupTicketLabel: string;
    mockupPassengerLabel: string;
    mockupSeatLabel: string;
    mockupSeatValue: string;
    mockupStatusLabel: string;
    mockupStatusValue: string;
    mockupViewTicketBtn: string;
  };
  values: Array<{ title: string; description: string }>;
  howItWorks: {
    kicker: string;
    title: string;
    subtitle: string;
    tabPassenger: string;
    tabParcel: string;
    passengerSteps: Array<{ num: string; title: string; description: string; badge: string }>;
    parcelSteps: Array<{ num: string; title: string; description: string; badge: string }>;
    calloutPassengerTitle: string;
    calloutPassengerDesc: string;
    calloutPassengerBtn: string;
    calloutParcelTitle: string;
    calloutParcelDesc: string;
    calloutParcelBtn: string;
  };
  passenger: {
    kicker: string;
    title: string;
    subtitle: string;
    noSignupNote: string;
    searchInAppBtn: string;
    tripsHeading: string;
    sampleNote: string;
    doorToDoor: string;
    oneSeatLeft: string;
    seatsLeftSuffix: string;
    selectedLabel: string;
    tapToSelectLabel: string;
    salonKicker: string;
    salonTitle: string;
    legendMale: string;
    legendFemale: string;
    legendEmpty: string;
    legendYours: string;
    driverLabel: string;
    frontLabel: string;
    selectedSeatLabel: string;
    notSelected: string;
    fareLabel: string;
    viewTicketBtn: string;
    seatTakenMaleAlert: string;
    seatTakenFemaleAlert: string;
    seatTitlePrefix: string;
  };
  parcel: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    features: Array<{ title: string; description: string }>;
    openTrackingBtn: string;
    sendParcelBtn: string;
    cardKicker: string;
    cardTitle: string;
    statusInTransit: string;
    parcelTypeLabel: string;
    parcelTypeValue: string;
    recipientLabel: string;
    etaLabel: string;
    etaValue: string;
    openFullscreenBtn: string;
    checkpoints: Array<{ title: string; time?: string; status: 'completed' | 'current' | 'upcoming'; description: string }>;
  };
  driver: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    mascotBadge: string;
    mascotDesc: string;
    minivanBadge: string;
    minivanTypes: string;
    benefits: Array<{ title: string; description: string }>;
    howTitle: string;
    howSubtitle: string;
    tabFlow: string;
    tabTransfer: string;
    tabSignup: string;
    flowSteps: Array<{ step: string; title: string; description: string }>;
    transferTitle: string;
    transferDesc: string;
    signupSteps: Array<{ title: string; description: string }>;
    osNote: string;
    downloadBtn: string;
  };
  screens: {
    kicker: string;
    title: string;
    subtitle: string;
    tabUser: string;
    tabDriver: string;
    selectScreenLabel: string;
    navItems: [string, string, string, string];
    items: Array<{ id: string; title: string; tag: string; description: string; appType: 'user' | 'driver' }>;
    simTripsTitle: string;
    simSeatTitle: string;
    simSeatPicked: string;
    simCabinSplit: string;
    simOtpNote: string;
    simTicketTitle: string;
    simParcelTitle: string;
    simParcelStatus: string;
    simParcelApproaching: string;
    simParcelCode: string;
    simDriverPostTitle: string;
    simDriverRoute: string;
    simDriverTime: string;
    simDriverSeats: string;
    simDriverSeatsVal: string;
    simDriverCreateBtn: string;
    simDriverNotifTitle: string;
    simDriverNotifBooked: string;
    simDriverNotifPassenger: string;
    simDriverNotifTime: string;
    simDriverTransferTitle: string;
    simDriverTransferNear: string;
    simDriverTransferDist: string;
    simDriverTransferBtn: string;
  };
  arMeasure: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    highlights: Array<{ title: string; description: string }>;
    btnScanning: string;
    btnStart: string;
    camStatusScanning: string;
    camStatusReady: string;
    dimLength: string;
    dimWidth: string;
    dimHeight: string;
    estVolumeLabel: string;
    estVolumeValue: string;
    camHint: string;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{ id: string; question: string; answer: string }>;
  };
  finalCta: {
    verticalBadge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    appStoreBtn: string;
    googlePlayBtn: string;
    smsPrompt: string;
    smsSentBtn: string;
    smsSendBtn: string;
    smsSuccessMsg: string;
    qrTitle: string;
    qrDesc: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    privacy: string;
    deleteAccount: string;
    terms: string;
  };
  downloadModal: {
    badge: string;
    titleUser: string;
    titleDriver: string;
    subtitle: string;
    tabUser: string;
    tabDriver: string;
    downloadLabel: string;
    getLabel: string;
    iosSoonAlert: string;
    androidSoonAlert: string;
    qrTitle: string;
    qrDesc: string;
    smsLabel: string;
    smsSendBtn: string;
    smsSentBtn: string;
    smsSuccess: string;
    closeAria: string;
  };
  ticketModal: {
    departureLabel: string;
    destinationLabel: string;
    passengerLabel: string;
    seatTypeLabel: string;
    seatTypeValue: string;
    dateLabel: string;
    dateValue: string;
    timeLabel: string;
    confirmedLabel: string;
    footerNote: string;
    closeAria: string;
  };
  trackingModal: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    checkBtn: string;
    codeLabel: string;
    statusLabel: string;
    statusValue: string;
    senderLabel: string;
    recipientLabel: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    timelineTitle: string;
    codeNote: string;
    codeBadge: string;
    closeAria: string;
  };
  cookie: {
    text: string;
    accept: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  az: {
    nav: {
      howItWorks: 'Necə işləyir',
      passengers: 'Sərnişinlər',
      parcels: 'Bağlamalar',
      drivers: 'Sürücülər',
      faq: 'Sual-cavab',
      downloadApp: 'Tətbiqi yüklə',
      languageLabel: 'Dil seçimi:',
      changeLanguageAria: 'Dili dəyiş',
      menuAria: 'Menyu',
      homeAria: 'UYOL Ana Səhifə',
    },
    hero: {
      kickerMain: 'Şəhərlərarası Sərnişin & Bağlama Platforması',
      kickerCountry: 'Azərbaycan',
      titleBefore: 'Şəhərlər arası yolu',
      titleAccent: 'özün seç',
      subtitle:
        'İstiqaməti, çıxış vaxtını, avtomobili və sürücünü sərbəst seç. Yerini qabaqcadan bron et, bağlamanı isə qapıdan-qapıya canlı izləmə ilə çatdır.',
      appStoreBtn: 'App Store-dan yüklə',
      googlePlayBtn: 'Google Play-dən əldə et',
      qrTitle: 'QR kod ilə tez yüklə',
      bullet1: 'Qeydiyyatsız sərbəst axtarış',
      bullet2: 'Kişi və Qadın yer seçimi',
      bullet3: 'Avtomatik təkrar təyinat zəmanəti',
      mockupDateTrips: '12 Noyabr · 4 gediş',
      mockupPassengerCount: '1 sərnişin',
      mockupDuration: '4 saat 30 dəq',
      mockupDoorToDoor: 'Qapıdan-Qapıya',
      mockupOneSeatLeft: '1 yer qalıb',
      mockupSelectSeatBtn: 'Yer seç və bron et',
      mockupTicketLabel: 'UYOL BİLET',
      mockupPassengerLabel: 'Sərnişin:',
      mockupSeatLabel: 'Oturacaq:',
      mockupSeatValue: '4 (Kişi yeri)',
      mockupStatusLabel: 'Status:',
      mockupStatusValue: 'Təsdiqləndi',
      mockupViewTicketBtn: 'Biletə tam baxış',
    },
    values: [
      {
        title: 'Sürücünü Özün Seç',
        description: 'Avtomobil modelinə, reytinqinə və çıxış saatına sərbəst baxaraq qərar ver.',
      },
      {
        title: 'Qapıdan-Qapıya',
        description: 'Avtovağzalda gözləmədən, təyin etdiyin ünvandan rahat minik və düşmə.',
      },
      {
        title: 'Canlı İzləmə',
        description: 'Həm sərnişin gedişini, həm də göndərdiyin bağlamanı xəritədə anbaan gör.',
      },
      {
        title: 'Dəqiq Bildirişlər',
        description: 'Sürücü əvvəlki ünvandan çıxanda, 15 dəq və 5 dəq qalanda bildiriş al.',
      },
    ],
    howItWorks: {
      kicker: 'Sadə və Şəffaf Proses',
      title: 'UYOL necə işləyir?',
      subtitle:
        'Taksi çağırmaq deyil — şəhərlərarası gedişlər üçün planlı, rahat və etibarlı nəqliyyat sistemidir.',
      tabPassenger: 'Sərnişin kimi gediş',
      tabParcel: 'Bağlama göndərmək',
      passengerSteps: [
        {
          num: '01',
          title: 'İstiqamət və tarixi seç',
          description: 'Çıxış şəhərini və təyinat məntəqəsini daxil edin. Qeydiyyatsız bütün mövcud gedişləri nəzərdən keçirin.',
          badge: 'Qeydiyyatsız baxış',
        },
        {
          num: '02',
          title: 'Gedişi və sürücünü seç',
          description: 'Avtomobil modelinə (sedan və ya mikroavtobus), sürücünün reytinqinə və dəqiq çıxış saatına görə ən uyğun reysi seçin.',
          badge: 'Sərbəst seçim',
        },
        {
          num: '03',
          title: 'Yer seç və təhlükəsiz ödə',
          description: 'Salonda kişi və qadın yerlərini görərək istədiyiniz oturacağı bron edin. Birbaşa OTP kod ilə daxil olub ödəniş edin.',
          badge: 'OTP ilə giriş',
        },
        {
          num: '04',
          title: 'Canlı izlə və yola çıx',
          description: 'Gediş günü sürücü 15 dəq və 5 dəq qalanda bildiriş alın. Biletiniz tətbiqdə həmişə əlinizin altındadır.',
          badge: 'Dəqiq bildirişlər',
        },
      ],
      parcelSteps: [
        {
          num: '01',
          title: 'Ünvan və bağlamanı qeyd et',
          description: 'Bağlamanın təhvil veriləcəyi və çatdırılacağı ünvanları qeyd edin. Göndərən və alıcının əlaqə nömrəsini daxil edin.',
          badge: 'Yalnız bağlama',
        },
        {
          num: '02',
          title: 'Həmin istiqamətdə gediş seç',
          description: 'Şəhərlərarası marşrutda gedən uyğun sürücünü seçin. Sürücü sifariş qovmur, yalnız razılaşdırılmış təhvil alır.',
          badge: 'Planlı gediş',
        },
        {
          num: '03',
          title: 'Təhvil ver və canlı izlə',
          description: 'Həm göndərən, həm də alıcı tətbiqdə və SMS link vasitəsilə sürücünün xəritədəki hərəkətini real vaxtda izləyir.',
          badge: 'İkitərəfli izləmə',
        },
        {
          num: '04',
          title: 'Təhlükəsiz "Çatdırıldı" təsdiqi',
          description: 'Alıcıya çatdırılma kodu təqdim edilir. Sürücü təhvil verərək "Çatdırıldı" düyməsini sıxır və proses tamamlanır.',
          badge: 'Avto-təyinat zəmanəti',
        },
      ],
      calloutPassengerTitle: 'Qeydiyyatsız dərhal axtarışa başlaya bilərsiniz',
      calloutPassengerDesc:
        'Gedişləri görmək üçün heç bir profil yaratmağa ehtiyac yoxdur. Giriş yalnız bron zamanı tələb olunur.',
      calloutPassengerBtn: 'Gedişləri nəzərdən keçir',
      calloutParcelTitle: 'Seçilmiş sürücü ləğv edərsə, sistem avtomatik yeni sürücü təyin edir',
      calloutParcelDesc:
        'Bağlamanız heç vaxt yolda qalmır, tətbiq dərhal ən yaxın uyğun reysi aktivləşdirir.',
      calloutParcelBtn: 'Canlı bağlama izlə',
    },
    passenger: {
      kicker: 'Sərnişinlər Üçün',
      title: 'Yolunu və yerini tam özün seç',
      subtitle:
        'Təsadüfə yer yoxdur. Sürücünün profilini, maşın növünü, çıxış saatını və hətta yanındakı oturacağın kim tərəfindən tutulduğunu əvvəlcədən bilirsən.',
      noSignupNote: 'Qeydiyyatsız baxış mümkündür',
      searchInAppBtn: 'Tətbiqdə axtar',
      tripsHeading: 'Gedişlər (Reyslər)',
      sampleNote: 'İstiqamət üzrə nümunələr',
      doorToDoor: 'Qapıdan-Qapıya',
      oneSeatLeft: 'Yalnız 1 yer qalıb',
      seatsLeftSuffix: 'boş yer',
      selectedLabel: 'Seçildi',
      tapToSelectLabel: 'Seçmək üçün toxun',
      salonKicker: 'İnteraktiv Salon',
      salonTitle: 'Yer Seçimi',
      legendMale: 'Kişi yeri',
      legendFemale: 'Qadın yeri',
      legendEmpty: 'Boş yer',
      legendYours: 'Sizin yeriniz',
      driverLabel: 'Sürücü',
      frontLabel: 'Ön tərəf',
      selectedSeatLabel: 'Seçilmiş yer:',
      notSelected: 'Seçilməyib',
      fareLabel: 'Gediş haqqı:',
      viewTicketBtn: 'Bilet kartını nəzərdən keçir',
      seatTakenMaleAlert: 'Bu yer artıq Kişi sərnişin tərəfindən bron edilib.',
      seatTakenFemaleAlert: 'Bu yer artıq Qadın sərnişin tərəfindən bron edilib.',
      seatTitlePrefix: 'Oturacaq №',
    },
    parcel: {
      kicker: 'Şəhərlərarası Çatdırılma',
      titleLine1: 'Yalnız bağlama.',
      titleLine2: 'Hər addımda canlı nəzarət.',
      subtitle:
        'Karqo gözləmədən, şəxsi bağlamalarınızı və sənədlərinizi şəhərlər arasında hərəkət edən etibarlı sürücülərlə birbaşa göndərin. Həm göndərən, həm də alıcı tərəf canlı xəritədə bağlamanın yerini izləyir.',
      features: [
        {
          title: 'Avtomatik Yeni Sürücü Təyinatı',
          description:
            'Əgər seçilmiş sürücü gözlənilmədən gedişi ləğv edərsə, sistemimiz bağlamanızı dərhal növbəti uyğun reysə yönləndirir. Yolda qalmaq yoxdur.',
        },
        {
          title: 'Vaxtında SMS və Tətbiq Bildirişləri',
          description:
            'Sürücü əvvəlki ünvandan çıxanda, təyinat məntəqəsinə 15 dəqiqə və 5 dəqiqə qalanda alıcıya avtomatik dəqiq xəbərdarlıq çatır.',
        },
        {
          title: '"Çatdırıldı" Təhlükəsizlik Təsdiqi',
          description:
            'Sürücü bağlamanı təhvil verərkən alıcının təsdiq kodu ilə "Çatdırıldı" düyməsini sıxır və proses rəsmi başa çatır.',
        },
      ],
      openTrackingBtn: 'İzləmə nümunəsini aç',
      sendParcelBtn: 'Bağlama göndər',
      cardKicker: 'Canlı Xəritə İzləməsi',
      cardTitle: 'Bakı → Qəbələ Bağlaması',
      statusInTransit: 'Yoldadır',
      parcelTypeLabel: 'Bağlama növü:',
      parcelTypeValue: 'Sənədlər və kiçik bağlama',
      recipientLabel: 'Təhvil alan:',
      etaLabel: 'Təxmini çatdırılma:',
      etaValue: '14:05 (5 dəqiqə qaldı)',
      openFullscreenBtn: 'İzləmə pəncərəsini tam ekranda aç',
      checkpoints: [
        {
          title: 'Bağlama qəbul edildi',
          time: '10:15',
          status: 'completed',
          description: 'Sürücü bağlamanı Bakı, Nərimanov ünvanında göndərəndən təhvil aldı.',
        },
        {
          title: 'Əvvəlki ünvandan çıxdı',
          time: '11:40',
          status: 'completed',
          description: 'Avtomobil magistral yola daxil oldu və hərəkət edir.',
        },
        {
          title: 'Ünvana 15 dəqiqə qaldı',
          time: '13:45',
          status: 'completed',
          description: 'Qəbul edən şəxsə avtomatik SMS və tətbiq bildirişi göndərildi.',
        },
        {
          title: 'Ünvana 5 dəqiqə qaldı',
          time: '13:55',
          status: 'current',
          description: 'Sürücü təyin olunmuş təhvil məntəqəsinə yaxınlaşır.',
        },
        {
          title: 'Çatdırıldı təsdiqi',
          time: 'Təxmini 14:05',
          status: 'upcoming',
          description: 'Alıcı kodu təqdim edir, sürücü "Çatdırıldı" düyməsini sıxaraq təsdiqləyir.',
        },
      ],
    },
    driver: {
      kicker: 'UYOL Driver',
      titleLine1: 'Sifariş qovmursan —',
      titleLine2: 'öz gedişini elan edirsən',
      subtitle:
        'UYOL Driver tətbiqində sizə təsadüfi sifariş təklifləri gəlmir. Şəhərlərarası gedişinizi əvvəlcədən təyin edirsiniz, yalnız yer və ya bağlama bron edildikdə sakit bildiriş alırsınız.',
      mascotBadge: 'UYOL SÜRÜCÜSÜ',
      mascotDesc: 'Öz vaxtının və marşrutunun sahibi. Sərbəst qrafik və şəffaf gəlir.',
      minivanBadge: 'Gediş modeli',
      minivanTypes: 'Sedan, Minivan və Mikroavtobuslar',
      benefits: [
        {
          title: 'Sakit Bildirişlər',
          description: 'Sifariş tələsi yoxdur. Yalnız yer və ya bağlama bron olunduqda bildiriş alırsınız.',
        },
        {
          title: 'Sərnişin Ötürmə',
          description:
            'Fors-major halında sərnişini və ya bağlamanı eyni marşrutdakı digər UYOL sürücüsünə rəsmi ötürə bilərsiniz.',
        },
        {
          title: 'Sürətli Təsdiq',
          description:
            'Sənədlərinizi və avtomobil şəkillərini tətbiq daxilində rahat yükləyin və təsdiq alın.',
        },
      ],
      howTitle: 'UYOL Driver tətbiqi necə işləyir?',
      howSubtitle: 'Sürücü üçün nəzərdə tutulmuş xüsusi funksiyalar və sadələşdirilmiş idarəetmə.',
      tabFlow: 'Gediş Elanı',
      tabTransfer: 'Sərnişin Ötürmə',
      tabSignup: 'Qeydiyyat Mərhələləri',
      flowSteps: [
        {
          step: 'ADDIM 1',
          title: 'Gedişini qeyd et',
          description: 'Çıxış şəhərini, təyinat məntəqəsini, tarixi, çıxış saatını və boş oturacaq sayını daxil edin.',
        },
        {
          step: 'ADDIM 2',
          title: 'Bron bildirişi al',
          description: 'Sərnişin yer seçib bilet aldıqda və ya bağlama qeydiyyatdan keçdikdə dərhal bildiriş ekranınıza gəlir.',
        },
        {
          step: 'ADDIM 3',
          title: 'Yola çıx və tamamla',
          description: 'Tətbiq sərnişinlərə avtomatik yaxınlaşma bildirişləri göndərir. Çatdıqda "Çatdırıldı" ilə gedişi bağlayın.',
        },
      ],
      transferTitle: 'Sürücülər Arasında Rəsmi Sərnişin və Bağlama Transferi',
      transferDesc:
        'Yolda avtomobilinizdə nasazlıq yarandıqda və ya hər hansı təxirəsalınmaz maneə olduqda, sərnişinləriniz və ya bağlamalarınız çətin vəziyyətdə qalmır. UYOL Driver tətbiqində "Ötürmə" bölməsindən həmin istiqamətdə yaxınlıqda hərəkət edən digər UYOL sürücüsünü seçərək sərnişin və ya bağlamanı rəsmi şəkildə ötürə bilərsiniz.',
      signupSteps: [
        { title: '1. Şəxsi Məlumat', description: 'Şəxsiyyət vəsiqəsi və əlaqə nömrəsi.' },
        { title: '2. Sürücülük Vəsiqəsi', description: 'Kateqoriyaya uyğun sürücülük vəsiqəsi fotosu.' },
        { title: '3. Avtomobil Sənədləri', description: 'Texniki pasport və sığorta şəhadətnaməsi.' },
        { title: '4. Avtomobil Şəkilləri', description: 'Avtomobilin xarici və salon şəkilləri.' },
      ],
      osNote: 'Sürücü tətbiqi iOS və Android cihazlar üçün tam optimallaşdırılıb.',
      downloadBtn: 'UYOL Driver-i yüklə',
    },
    screens: {
      kicker: 'İnterfeys Dizaynı',
      title: 'Tətbiq Ekranları ilə Tanış Olun',
      subtitle: 'Həm sərnişin, həm də sürücü üçün xüsusi hazırlanmış intuitiv, müasir və sürətli mobil interfeys.',
      tabUser: 'User App (Sərnişin & Bağlama)',
      tabDriver: 'Driver App (Sürücü)',
      selectScreenLabel: 'Ekranı Seçin',
      navItems: ['Əsas', 'Gedişlər', 'Biletlərim', 'Profil'],
      items: [
        {
          id: 'screen-1',
          title: 'Gedişləri Axtar və Seç',
          tag: 'Gedişlər Ekranı',
          description: 'Şəhərlərarası marşrutları, çıxış saatlarını və sürücüləri filtrləyərək ən uyğun reysi asanlıqla tapın.',
          appType: 'user',
        },
        {
          id: 'screen-2',
          title: 'Kişi və Qadın Yer Seçimi',
          tag: 'Tərcihlər & Yerlər',
          description: 'Avtomobilin salon xəritəsində oturacaqları nəzərdən keçirin, cinsiyyət bölgüsünü görün və rahat yerinizi seçin.',
          appType: 'user',
        },
        {
          id: 'screen-3',
          title: 'Perforasiyalı Rəqəmsal Bilet',
          tag: 'Biletlərim',
          description: 'Təhlükəsiz QR kodlu biletiniz həmişə cibinizdə. Çıxış vaxtı, sürücü nömrəsi və avtomobil məlumatları bir yerdə.',
          appType: 'user',
        },
        {
          id: 'screen-4',
          title: 'Bağlama Canlı İzləməsi',
          tag: 'Qapıdan-Qapıya Yük',
          description: 'Göndərən və alıcı üçün dəqiq xəritə izləməsi və vaxtında xəbərdarlıq bildirişləri.',
          appType: 'user',
        },
        {
          id: 'screen-5',
          title: 'Gediş Elan Etmə Paneli',
          tag: 'Driver Reyslər',
          description: 'Sürücülər gedəcəkləri şəhəri, vaxtı və oturacaq qiymətini bir neçə toxunuşla sistemə daxil edir.',
          appType: 'driver',
        },
        {
          id: 'screen-6',
          title: 'Yalnız Bron Olduqda Bildiriş',
          tag: 'Sakit Sürücü Rejimi',
          description: 'Sürücü lazımsız sifariş siqnalları ilə narahat edilmir — yalnız sərnişin və ya bağlama bron ediləndə bildiriş alır.',
          appType: 'driver',
        },
        {
          id: 'screen-7',
          title: 'Sərnişin Ötürmə Sistemi',
          tag: 'Sürücü Həmrəyliyi',
          description: 'Gözlənilməz hal olduqda sərnişini və ya bağlamanı eyni istiqamətdəki digər UYOL avtomobilinə rahat ötürün.',
          appType: 'driver',
        },
      ],
      simTripsTitle: 'Gedişlər',
      simSeatTitle: 'Yer Seç',
      simSeatPicked: 'Oturacaq № 04 seçildi',
      simCabinSplit: 'Salon Bölgüsü',
      simOtpNote: 'Birbaşa OTP kod ilə bron tamamlanır',
      simTicketTitle: 'Bilet № 04',
      simParcelTitle: 'Bağlama İzləmə',
      simParcelStatus: '5 dəqiqə qaldı',
      simParcelApproaching: 'Sürücü ünvana yaxınlaşır',
      simParcelCode: 'Təsdiq kodu alıcıya göndərilib:',
      simDriverPostTitle: 'Gediş Elan Et',
      simDriverRoute: 'Marşrut',
      simDriverTime: 'Çıxış Saatı',
      simDriverSeats: 'Boş Oturacaq',
      simDriverSeatsVal: '4 yer',
      simDriverCreateBtn: 'Gedişi Yarat',
      simDriverNotifTitle: 'Yeni Bron Bildirişi',
      simDriverNotifBooked: 'Oturacaq № 04 Bron Olundu',
      simDriverNotifPassenger: 'Sərnişin: Nicat Ə. (Kişi yeri)',
      simDriverNotifTime: 'Gediş vaxtı: 10:00 · 20 Yanvar',
      simDriverTransferTitle: 'Sərnişin Ötürmə',
      simDriverTransferNear: 'Yaxınlıqdakı UYOL Avtomobili',
      simDriverTransferDist: 'Məsafə: 1.2 km · 3 boş yer',
      simDriverTransferBtn: 'Ötürməni Təsdiqlə',
    },
    arMeasure: {
      badge: 'Tezliklə',
      titleLine1: 'Kamera ilə bağlama ölçüsü:',
      titleLine2: 'Xətkeşsiz və dərhal',
      subtitle:
        'Telefonunuzun kamerasını bağlamaya tutaraq ölçüləri (uzunluq, en, hündürlük) avtomatik təyin edin. Nə qədər yer tutacağını və dəqiq daşınma haqqını saniyələr içində öyrənin.',
      highlights: [
        { title: 'AR Texnologiyası', description: 'Cihazın kamerası ilə dəqiq 3D bucaq təyini.' },
        { title: 'Avtomatik Həcm', description: 'Avtomobil baqajında tutacağı yerin hesablanması.' },
        { title: 'Şəffaf Təklif', description: 'Sürücü ilə mübahisəsiz, standartlaşdırılmış həcm.' },
      ],
      btnScanning: 'Kamera skan edir...',
      btnStart: 'Simulyasiyanı sına',
      camStatusScanning: 'Analiz olunur',
      camStatusReady: 'Hazır',
      dimLength: 'Uzunluq: 38 sm',
      dimWidth: 'En: 25 sm',
      dimHeight: 'H: 20 sm',
      estVolumeLabel: 'Təxmini Həcm',
      estVolumeValue: '19.0 Litr (Orta Bağlama)',
      camHint: 'Kameranı bağlamanın dörd küncünə yönəldin',
    },
    faq: {
      kicker: 'Tez-tez Verilən Suallar',
      title: 'Ağlınızda sual qalmasın',
      subtitle: 'UYOL haqqında ən çox maraqlanılan sualların cavabları ilə tanış olun.',
      items: [
        {
          id: 'faq-1',
          question: 'UYOL ilə adi taksi və ya avtovağzal arasındakı əsas fərq nədir?',
          answer:
            'UYOL-da siz təsadüfi sürücü təyinatı gözləmirsiniz. Bütün gedişləri, avtomobil modelini, sürücünün reytinqini və dəqiq çıxış saatını əvvəlcədən görürsünüz. Oturacağınızı özünüz seçir və biletinizi onlayn bron edirsiniz. Sürücülər isə sifariş qovmur — yalnız yer və ya bağlama bron olunduqda bildiriş alırlar.',
        },
        {
          id: 'faq-2',
          question: 'Gedişləri nəzərdən keçirmək üçün qeydiyyat tələb olunurmu?',
          answer:
            'Xeyr! UYOL tətbiqində bütün istiqamətlərə, reyslərə, avtomobillərə və qiymətlərə tam sərbəst, qeydiyyatsız baxa bilərsiniz. Yalnız son addımda — yeri bron edib bilet alarkən mobil nömrənizə gələn təhlükəsiz birbaşa OTP kod ilə daxil olursunuz.',
        },
        {
          id: 'faq-3',
          question: 'Oturacaq seçərkən kişi və qadın yerlərini necə ayırd edirəm?',
          answer:
            'Tətbiqdə yer seçimi ekranında artıq bron edilmiş yerlər cinsiyyətə uyğun olaraq aydın rənglərlə göstərilir. Siz özünüzə uyğun olan boş yeri seçərək həm tək, həm də ailənizlə tam rahat və arxayın səyahət edə bilərsiniz.',
        },
        {
          id: 'faq-4',
          question: 'Bağlama göndərərkən həm göndərən, həm də alıcı izləyə bilərmi?',
          answer:
            'Bəli. Bağlama qeydiyyatdan keçdikdən sonra həm göndərənə, həm də alıcıya canlı izləmə linki və status bildirişləri göndərilir. Sürücü əvvəlki ünvandan çıxanda, ünvana 15 dəqiqə və 5 dəqiqə qalanda hər iki tərəf avtomatik xəbərdar edilir.',
        },
        {
          id: 'faq-5',
          question: 'Seçilmiş sürücü gedişi ləğv edərsə bağlama nə olur?',
          answer:
            'UYOL-un avtomatlaşdırılmış zəmanət sistemi mövcuddur. Əgər hər hansı fors-major səbəbindən seçilmiş sürücü gedişi ləğv edərsə, sistem avtomatik olaraq həmin istiqamətdə ən uyğun növbəti sürücünü təyin edir və bağlamanız yolda qalmır.',
        },
        {
          id: 'faq-6',
          question: 'Sürücü tərəfində gedişlər necə idarə olunur?',
          answer:
            'Sürücü tətbiqində "sifariş" deyil, "gediş" anlayışı işlənir. Sürücü gedəcəyi şəhəri, saatı və boş yer sayını elan edir. Ona qəfil sifariş təklifləri gəlmir; yalnız sərnişin və ya bağlama yeri bron olunduqda səssiz bildiriş gəlir.',
        },
        {
          id: 'faq-7',
          question: 'Sürücü sərnişini başqa maşına necə və nə vaxt ötürə bilər?',
          answer:
            'Texniki nasazlıq və ya digər gözlənilməz hal yarandıqda, sürücü UYOL Driver tətbiqi daxilində eyni marşrut üzrə hərəkət edən digər təsdiqlənmiş UYOL sürücüsünə sərnişini və ya bağlamanı rəsmi transfer sistemi ilə təhlükəsiz şəkildə ötürə bilər.',
        },
      ],
    },
    finalCta: {
      verticalBadge: 'Şəhərlərarası Yol',
      titleLine1: 'Yolunuz açıq,',
      titleLine2: 'gedişiniz rahat olsun',
      subtitle:
        'UYOL mobil tətbiqini indi yükləyin. Şəhərlərarası gedişlərinizi və bağlamalarınızı vaxtında, etibarlı və şəffaf şəkildə idarə edin.',
      appStoreBtn: 'App Store-dan yüklə',
      googlePlayBtn: 'Google Play-dən əldə et',
      smsPrompt: 'Nömrənizi qeyd edin, birbaşa yükləmə linkini göndərək:',
      smsSentBtn: 'Göndərildi',
      smsSendBtn: 'Göndər',
      smsSuccessMsg: 'Link SMS vasitəsilə göndərildi!',
      qrTitle: 'QR Kodu Oxudun',
      qrDesc: 'Kameranızı tuşlayaraq tətbiqi dərhal quraşdırın.',
    },
    footer: {
      tagline: 'Şəhərlərarası sərnişin və bağlama daşıma platforması',
      copyright: 'UYOL. Bütün hüquqlar qorunur.',
      privacy: 'Məxfilik siyasəti',
      deleteAccount: 'Hesabı silmək',
      terms: 'İstifadə şərtləri',
    },
    downloadModal: {
      badge: 'Rəsmi Tətbiq',
      titleUser: 'UYOL Sərnişin Tətbiqini Yüklə',
      titleDriver: 'UYOL Driver Tətbiqini Yüklə',
      subtitle: 'Şəhərlərarası rahat gedişlər və etibarlı bağlama daşınması cibinizdə.',
      tabUser: 'Sərnişin & Bağlama',
      tabDriver: 'Sürücü (Driver)',
      downloadLabel: 'Yükləyin',
      getLabel: 'Əldə edin',
      iosSoonAlert: 'UYOL iOS tətbiqi App Store-da tezliklə aktiv olacaq. TestFlight üçün nömrənizi qeyd edin.',
      androidSoonAlert: 'UYOL Android tətbiqi Google Play-də tezliklə aktiv olacaq. Erkən giriş üçün nömrənizi qeyd edin.',
      qrTitle: 'Kameranızla oxudun',
      qrDesc: 'Mobil telefonunuzun kamerasını QR koda tutaraq dərhal yükləmə səhifəsinə keçin.',
      smsLabel: 'Və ya telefon nömrənizi yazın, linki göndərək:',
      smsSendBtn: 'Göndər',
      smsSentBtn: 'Göndərildi',
      smsSuccess: 'Yükləmə linki nömrənizə göndərildi!',
      closeAria: 'Bağla',
    },
    ticketModal: {
      departureLabel: 'Çıxış',
      destinationLabel: 'Təyinat',
      passengerLabel: 'Sərnişin',
      seatTypeLabel: 'Oturacaq & Növ',
      seatTypeValue: '№ 04 (Kişi yeri)',
      dateLabel: 'Tarix',
      dateValue: '12 Noyabr 2026',
      timeLabel: 'Çıxış saatı',
      confirmedLabel: 'Təsdiqlənib',
      footerNote: 'Gediş günü sürücü ilə əlaqə və canlı xəritə UYOL tətbiqində aktiv olacaq.',
      closeAria: 'Bağla',
    },
    trackingModal: {
      badge: 'Canlı İzləmə',
      title: 'Bağlamanı İzlə',
      subtitle: 'Həm göndərən, həm də alıcı eyni anda real vaxt rejimində bağlamanın harada olduğunu izləyir.',
      placeholder: 'İzləmə kodu (məs: UY-84920)',
      checkBtn: 'Yoxla',
      codeLabel: 'İzləmə Kodu',
      statusLabel: 'Cari Status',
      statusValue: 'Ünvana 5 dəqiqə qaldı',
      senderLabel: 'Göndərən',
      recipientLabel: 'Qəbul edən',
      guaranteeTitle: 'Avtomatik Yenidən Təyinat Zəmanəti',
      guaranteeDesc:
        'Sürücü ləğv edərsə, sistemimiz bağlama üçün avtomatik olaraq eyni istiqamətdəki yeni sürücünü təyin edir. Bağlama heç vaxt yolda qalmır.',
      timelineTitle: 'Hərəkət Tarixçəsi və Bildirişlər',
      codeNote: 'Təhvil alarkən alıcıya təhlükəsizlik kodu təqdim olunur.',
      codeBadge: 'Təsdiq Kodu: 492',
      closeAria: 'Bağla',
    },
    cookie: {
      text: 'Tətbiq təcrübənizi yaxşılaşdırmaq və naviqasiyanı təmin etmək üçün zəruri kukilərdən istifadə edirik.',
      accept: 'Qəbul et',
    },
  },

  en: {
    nav: {
      howItWorks: 'How it works',
      passengers: 'Passengers',
      parcels: 'Parcels',
      drivers: 'Drivers',
      faq: 'FAQ',
      downloadApp: 'Download app',
      languageLabel: 'Language:',
      changeLanguageAria: 'Change language',
      menuAria: 'Menu',
      homeAria: 'UYOL Home',
    },
    hero: {
      kickerMain: 'Intercity Passenger & Parcel Platform',
      kickerCountry: 'Azerbaijan',
      titleBefore: 'Choose your intercity ride',
      titleAccent: 'your way',
      subtitle:
        'Freely choose your route, departure time, vehicle, and driver. Book your seat in advance and send parcels with door-to-door live tracking.',
      appStoreBtn: 'Download on App Store',
      googlePlayBtn: 'Get it on Google Play',
      qrTitle: 'Quick download via QR code',
      bullet1: 'Browse without registration',
      bullet2: 'Male & Female seat choice',
      bullet3: 'Automatic driver reassignment',
      mockupDateTrips: 'Nov 12 · 4 trips',
      mockupPassengerCount: '1 passenger',
      mockupDuration: '4h 30m',
      mockupDoorToDoor: 'Door-to-Door',
      mockupOneSeatLeft: '1 seat left',
      mockupSelectSeatBtn: 'Select seat & book',
      mockupTicketLabel: 'UYOL TICKET',
      mockupPassengerLabel: 'Passenger:',
      mockupSeatLabel: 'Seat:',
      mockupSeatValue: '4 (Male seat)',
      mockupStatusLabel: 'Status:',
      mockupStatusValue: 'Confirmed',
      mockupViewTicketBtn: 'View full ticket',
    },
    values: [
      {
        title: 'Choose Your Driver',
        description: 'Inspect vehicle model, driver rating, and exact departure time before deciding.',
      },
      {
        title: 'Door-to-Door',
        description: 'Skip bus terminal queues with convenient pickup and drop-off at your chosen addresses.',
      },
      {
        title: 'Live Tracking',
        description: 'Follow both passenger trips and dispatched parcels on the live map in real time.',
      },
      {
        title: 'Timely Alerts',
        description: 'Get notified when the driver leaves the previous stop, and 15 min & 5 min before arrival.',
      },
    ],
    howItWorks: {
      kicker: 'Simple & Transparent',
      title: 'How does UYOL work?',
      subtitle:
        'Not an on-demand taxi hail — a planned, reliable, and transparent intercity transport system.',
      tabPassenger: 'Travel as a Passenger',
      tabParcel: 'Send a Parcel',
      passengerSteps: [
        {
          num: '01',
          title: 'Choose route and date',
          description: 'Enter your departure city and destination. Browse all available trips without signing up.',
          badge: 'No signup needed',
        },
        {
          num: '02',
          title: 'Pick trip and driver',
          description: 'Select the best trip by vehicle type (sedan or minivan), driver rating, and departure time.',
          badge: 'Free choice',
        },
        {
          num: '03',
          title: 'Select seat and pay safely',
          description: 'View male and female occupied seats in the cabin and book yours. Sign in with OTP to pay.',
          badge: 'OTP login',
        },
        {
          num: '04',
          title: 'Track live and travel',
          description: 'Receive alerts 15 min and 5 min before pickup. Your digital ticket is always in the app.',
          badge: 'Smart alerts',
        },
      ],
      parcelSteps: [
        {
          num: '01',
          title: 'Enter addresses and parcel',
          description: 'Set pickup and delivery addresses along with sender and recipient phone numbers.',
          badge: 'Parcels only',
        },
        {
          num: '02',
          title: 'Select a matching trip',
          description: 'Pick an intercity driver traveling that route. Drivers never chase random orders.',
          badge: 'Planned trip',
        },
        {
          num: '03',
          title: 'Hand over and track live',
          description: 'Both sender and recipient watch the driver on the live map via app or SMS tracking link.',
          badge: 'Two-way tracking',
        },
        {
          num: '04',
          title: '"Delivered" confirmation',
          description: 'The recipient shares a verification code and the driver taps "Delivered" to complete.',
          badge: 'Auto-reassign cover',
        },
      ],
      calloutPassengerTitle: 'Start searching immediately without an account',
      calloutPassengerDesc:
        'You do not need to create a profile to browse trips. Login is only required when booking.',
      calloutPassengerBtn: 'Browse available trips',
      calloutParcelTitle: 'Automatic driver reassignment if a trip is canceled',
      calloutParcelDesc:
        'Your parcel is never stranded — the system automatically assigns the next suitable driver on the route.',
      calloutParcelBtn: 'Track live parcel demo',
    },
    passenger: {
      kicker: 'For Passengers',
      title: 'Pick your route and exact seat',
      subtitle:
        'Leave nothing to chance. Know the driver profile, car model, departure time, and who is seated next to you in advance.',
      noSignupNote: 'Browse without registration',
      searchInAppBtn: 'Search in app',
      tripsHeading: 'Available Trips',
      sampleNote: 'Sample routes',
      doorToDoor: 'Door-to-Door',
      oneSeatLeft: 'Only 1 seat left',
      seatsLeftSuffix: 'seats left',
      selectedLabel: 'Selected',
      tapToSelectLabel: 'Tap to select',
      salonKicker: 'Interactive Cabin',
      salonTitle: 'Seat Selection',
      legendMale: 'Male seat',
      legendFemale: 'Female seat',
      legendEmpty: 'Available',
      legendYours: 'Your seat',
      driverLabel: 'Driver',
      frontLabel: 'Front',
      selectedSeatLabel: 'Selected seat:',
      notSelected: 'None',
      fareLabel: 'Fare:',
      viewTicketBtn: 'Preview ticket card',
      seatTakenMaleAlert: 'This seat is already booked by a male passenger.',
      seatTakenFemaleAlert: 'This seat is already booked by a female passenger.',
      seatTitlePrefix: 'Seat #',
    },
    parcel: {
      kicker: 'Intercity Delivery',
      titleLine1: 'Parcels only.',
      titleLine2: 'Live visibility at every step.',
      subtitle:
        'Send personal parcels and documents directly with verified intercity drivers without waiting for slow cargo hubs. Both sender and recipient track in real time.',
      features: [
        {
          title: 'Automatic Driver Reassignment',
          description:
            'If your chosen driver unexpectedly cancels, UYOL automatically reassigns your parcel to the next suitable trip on that route.',
        },
        {
          title: 'Timely SMS & App Notifications',
          description:
            'Receive automatic alerts when the driver departs the previous stop, and 15 minutes and 5 minutes before arrival.',
        },
        {
          title: '"Delivered" Security Confirmation',
          description:
            'Upon handover, the recipient provides a confirmation code and the driver taps "Delivered" to close the delivery.',
        },
      ],
      openTrackingBtn: 'Open tracking demo',
      sendParcelBtn: 'Send a parcel',
      cardKicker: 'Live Map Tracking',
      cardTitle: 'Baku → Gabala Parcel',
      statusInTransit: 'In transit',
      parcelTypeLabel: 'Parcel type:',
      parcelTypeValue: 'Documents & small box',
      recipientLabel: 'Recipient:',
      etaLabel: 'Estimated arrival:',
      etaValue: '14:05 (5 mins away)',
      openFullscreenBtn: 'Open full tracking view',
      checkpoints: [
        {
          title: 'Parcel picked up',
          time: '10:15',
          status: 'completed',
          description: 'Driver picked up the parcel from the sender in Narimanov, Baku.',
        },
        {
          title: 'Departed previous stop',
          time: '11:40',
          status: 'completed',
          description: 'Vehicle entered the intercity highway and is en route.',
        },
        {
          title: '15 minutes away',
          time: '13:45',
          status: 'completed',
          description: 'Automatic SMS and push alert sent to the recipient.',
        },
        {
          title: '5 minutes away',
          time: '13:55',
          status: 'current',
          description: 'Driver is approaching the designated drop-off point.',
        },
        {
          title: 'Delivered confirmation',
          time: 'Est. 14:05',
          status: 'upcoming',
          description: 'Recipient provides the code and driver confirms with "Delivered".',
        },
      ],
    },
    driver: {
      kicker: 'UYOL Driver',
      titleLine1: 'Don’t chase orders —',
      titleLine2: 'publish your own trip',
      subtitle:
        'In the UYOL Driver app you never receive random order pings. You post your planned intercity trip and only get notified when a seat or parcel is booked.',
      mascotBadge: 'UYOL DRIVER',
      mascotDesc: 'In control of your own schedule and route. Transparent earnings.',
      minivanBadge: 'Trip model',
      minivanTypes: 'Sedans, Minivans & Shuttles',
      benefits: [
        {
          title: 'Quiet Notifications',
          description: 'No noisy dispatch traps. Get notified only when a seat or parcel is booked.',
        },
        {
          title: 'Passenger Transfer',
          description:
            'In case of force majeure, officially transfer passengers or parcels to another UYOL driver on the same route.',
        },
        {
          title: 'Fast Verification',
          description: 'Upload driver documents and vehicle photos right inside the app for approval.',
        },
      ],
      howTitle: 'How does UYOL Driver work?',
      howSubtitle: 'Purpose-built controls and streamlined workflows designed for intercity drivers.',
      tabFlow: 'Publish Trip',
      tabTransfer: 'Passenger Transfer',
      tabSignup: 'Signup Steps',
      flowSteps: [
        {
          step: 'STEP 1',
          title: 'Post your trip',
          description: 'Set departure city, destination, date, departure time, and available seats.',
        },
        {
          step: 'STEP 2',
          title: 'Get booking alerts',
          description: 'Receive instant confirmation when a passenger books a seat or reserves parcel space.',
        },
        {
          step: 'STEP 3',
          title: 'Drive & complete',
          description: 'The app automatically sends arrival alerts. Tap "Delivered" upon handover.',
        },
      ],
      transferTitle: 'Official Passenger & Parcel Transfer Between Drivers',
      transferDesc:
        'If your vehicle faces a breakdown or unexpected delay, your passengers and parcels are never left stranded. From the "Transfer" menu in UYOL Driver, select another verified UYOL driver heading the same way and transfer seamlessly.',
      signupSteps: [
        { title: '1. Personal Info', description: 'National ID card and verified phone number.' },
        { title: '2. Driver License', description: 'Clear photo of your valid driving license.' },
        { title: '3. Vehicle Docs', description: 'Vehicle registration certificate and insurance.' },
        { title: '4. Vehicle Photos', description: 'Exterior and interior cabin photos.' },
      ],
      osNote: 'Fully optimized for both iOS and Android devices.',
      downloadBtn: 'Download UYOL Driver',
    },
    screens: {
      kicker: 'Interface Design',
      title: 'Explore the App Screens',
      subtitle: 'Intuitive, clean, and fast mobile experiences crafted for both passengers and drivers.',
      tabUser: 'User App (Passenger & Parcel)',
      tabDriver: 'Driver App (Driver)',
      selectScreenLabel: 'Select Screen',
      navItems: ['Home', 'Trips', 'Tickets', 'Profile'],
      items: [
        {
          id: 'screen-1',
          title: 'Search & Pick Trips',
          tag: 'Trips Screen',
          description: 'Filter intercity routes, departure times, and drivers to pick the best ride.',
          appType: 'user',
        },
        {
          id: 'screen-2',
          title: 'Male & Female Seat Map',
          tag: 'Preferences & Seats',
          description: 'Inspect the cabin map, see gender seat distribution, and choose your preferred seat.',
          appType: 'user',
        },
        {
          id: 'screen-3',
          title: 'Perforated Digital Ticket',
          tag: 'My Tickets',
          description: 'Your QR-coded ticket always at hand with departure time, driver, and car details.',
          appType: 'user',
        },
        {
          id: 'screen-4',
          title: 'Live Parcel Tracking',
          tag: 'Door-to-Door Parcel',
          description: 'Accurate live map visibility and timely alerts for both sender and recipient.',
          appType: 'user',
        },
        {
          id: 'screen-5',
          title: 'Trip Publishing Panel',
          tag: 'Driver Trips',
          description: 'Drivers enter destination, departure time, and seat price in just a few taps.',
          appType: 'driver',
        },
        {
          id: 'screen-6',
          title: 'Booking-Only Alerts',
          tag: 'Calm Driver Mode',
          description: 'No spam order pings — notifications arrive only when a seat or parcel is booked.',
          appType: 'driver',
        },
        {
          id: 'screen-7',
          title: 'Passenger Transfer System',
          tag: 'Driver Support',
          description: 'Smoothly hand off passengers or parcels to another UYOL car on the same route if needed.',
          appType: 'driver',
        },
      ],
      simTripsTitle: 'Trips',
      simSeatTitle: 'Select Seat',
      simSeatPicked: 'Seat #04 selected',
      simCabinSplit: 'Cabin Layout',
      simOtpNote: 'Booking completes with instant OTP verification',
      simTicketTitle: 'Ticket #04',
      simParcelTitle: 'Parcel Tracking',
      simParcelStatus: '5 mins away',
      simParcelApproaching: 'Driver is approaching destination',
      simParcelCode: 'Verification code sent to recipient:',
      simDriverPostTitle: 'Publish Trip',
      simDriverRoute: 'Route',
      simDriverTime: 'Departure',
      simDriverSeats: 'Open Seats',
      simDriverSeatsVal: '4 seats',
      simDriverCreateBtn: 'Create Trip',
      simDriverNotifTitle: 'New Booking Alert',
      simDriverNotifBooked: 'Seat #04 Booked',
      simDriverNotifPassenger: 'Passenger: Nicat A. (Male seat)',
      simDriverNotifTime: 'Departure: 10:00 · 20 Yanvar',
      simDriverTransferTitle: 'Passenger Transfer',
      simDriverTransferNear: 'Nearby UYOL Vehicle',
      simDriverTransferDist: 'Distance: 1.2 km · 3 open seats',
      simDriverTransferBtn: 'Confirm Transfer',
    },
    arMeasure: {
      badge: 'Coming Soon',
      titleLine1: 'Camera parcel sizing:',
      titleLine2: 'No ruler needed, instant',
      subtitle:
        'Point your phone camera at any parcel to automatically detect dimensions (length, width, height) and trunk space needed within seconds.',
      highlights: [
        { title: 'AR Technology', description: 'Accurate 3D edge detection using your phone camera.' },
        { title: 'Auto Volume', description: 'Instant calculation of luggage trunk space.' },
        { title: 'Clear Sizing', description: 'Standardized dimensions with zero guesswork.' },
      ],
      btnScanning: 'Camera scanning...',
      btnStart: 'Try simulation',
      camStatusScanning: 'Analyzing',
      camStatusReady: 'Ready',
      dimLength: 'Length: 38 cm',
      dimWidth: 'Width: 25 cm',
      dimHeight: 'H: 20 cm',
      estVolumeLabel: 'Estimated Volume',
      estVolumeValue: '19.0 Liters (Medium Box)',
      camHint: 'Point camera at all four corners of the parcel',
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Everything you need to know',
      subtitle: 'Find clear answers to the most common questions about UYOL.',
      items: [
        {
          id: 'faq-1',
          question: 'How is UYOL different from a regular taxi or bus terminal?',
          answer:
            'With UYOL you never wait for a random driver assignment. You see all scheduled trips, vehicle models, driver ratings, and exact departure times in advance, pick your own seat, and book online. Drivers only receive notifications when a seat or parcel is booked.',
        },
        {
          id: 'faq-2',
          question: 'Do I need to sign up just to browse trips?',
          answer:
            'No! You can browse all destinations, trips, vehicles, and seat availability freely without creating an account. Registration via quick OTP code is only requested when you book a seat or parcel.',
        },
        {
          id: 'faq-3',
          question: 'How does male and female seat selection work?',
          answer:
            'On the cabin selection screen, already booked seats clearly show male or female occupancy colors so you can choose a comfortable seat for yourself or your family.',
        },
        {
          id: 'faq-4',
          question: 'Can both sender and recipient track a parcel?',
          answer:
            'Yes. Once booked, both sender and recipient receive live tracking and status alerts: when the driver departs the previous stop, and 15 minutes and 5 minutes before arrival.',
        },
        {
          id: 'faq-5',
          question: 'What happens to a parcel if the selected driver cancels?',
          answer:
            'UYOL includes an automatic reassignment guarantee. If your selected driver cancels due to unforeseen circumstances, the system automatically assigns the next suitable driver on that route.',
        },
        {
          id: 'faq-6',
          question: 'How do drivers manage trips on UYOL Driver?',
          answer:
            'Driver terminology centers on scheduled trips ("gediş"), not random orders. Drivers publish their route, time, and seats and receive quiet notifications only upon bookings.',
        },
        {
          id: 'faq-7',
          question: 'How can a driver transfer passengers to another car?',
          answer:
            'In case of a mechanical issue or unexpected delay, the driver can use the official transfer feature in UYOL Driver to safely hand over passengers or parcels to another verified UYOL driver on the same route.',
        },
      ],
    },
    finalCta: {
      verticalBadge: 'Intercity Road',
      titleLine1: 'Smooth roads,',
      titleLine2: 'comfortable journeys',
      subtitle:
        'Download the UYOL mobile app today to book intercity seats and send parcels with full live visibility.',
      appStoreBtn: 'Download on App Store',
      googlePlayBtn: 'Get it on Google Play',
      smsPrompt: 'Enter your phone number to receive a direct download link:',
      smsSentBtn: 'Sent',
      smsSendBtn: 'Send',
      smsSuccessMsg: 'Download link sent via SMS!',
      qrTitle: 'Scan QR Code',
      qrDesc: 'Point your camera to install the app right away.',
    },
    footer: {
      tagline: 'Intercity passenger and parcel transport platform',
      copyright: 'UYOL. All rights reserved.',
      privacy: 'Privacy Policy',
      deleteAccount: 'Delete Account',
      terms: 'Terms of Service',
    },
    downloadModal: {
      badge: 'Official App',
      titleUser: 'Download UYOL Passenger App',
      titleDriver: 'Download UYOL Driver App',
      subtitle: 'Comfortable intercity rides and reliable parcel delivery in your pocket.',
      tabUser: 'Passenger & Parcel',
      tabDriver: 'Driver App',
      downloadLabel: 'Download on',
      getLabel: 'Get it on',
      iosSoonAlert: 'UYOL iOS app will be live on App Store soon. Leave your number for TestFlight.',
      androidSoonAlert: 'UYOL Android app will be live on Google Play soon. Leave your number for early access.',
      qrTitle: 'Scan with camera',
      qrDesc: 'Point your phone camera at the QR code to open the download page immediately.',
      smsLabel: 'Or enter your phone number to get the link:',
      smsSendBtn: 'Send',
      smsSentBtn: 'Sent',
      smsSuccess: 'Download link has been sent to your phone!',
      closeAria: 'Close',
    },
    ticketModal: {
      departureLabel: 'Departure',
      destinationLabel: 'Destination',
      passengerLabel: 'Passenger',
      seatTypeLabel: 'Seat & Type',
      seatTypeValue: '#04 (Male seat)',
      dateLabel: 'Date',
      dateValue: 'Nov 12, 2026',
      timeLabel: 'Departure time',
      confirmedLabel: 'Confirmed',
      footerNote: 'Driver contact and live map become active in the UYOL app on trip day.',
      closeAria: 'Close',
    },
    trackingModal: {
      badge: 'Live Tracking',
      title: 'Track Parcel',
      subtitle: 'Both sender and recipient follow the exact parcel location in real time.',
      placeholder: 'Tracking code (e.g., UY-84920)',
      checkBtn: 'Check',
      codeLabel: 'Tracking Code',
      statusLabel: 'Current Status',
      statusValue: '5 minutes away',
      senderLabel: 'Sender',
      recipientLabel: 'Recipient',
      guaranteeTitle: 'Automatic Reassignment Guarantee',
      guaranteeDesc:
        'If a driver cancels, our system automatically assigns a new driver on the same route so your parcel is never delayed.',
      timelineTitle: 'Movement History & Alerts',
      codeNote: 'A security confirmation code is provided to the recipient on delivery.',
      codeBadge: 'Confirm Code: 492',
      closeAria: 'Close',
    },
    cookie: {
      text: 'We use essential cookies to improve your app experience and ensure smooth navigation.',
      accept: 'Accept',
    },
  },

  ru: {
    nav: {
      howItWorks: 'Как работает',
      passengers: 'Пассажиры',
      parcels: 'Посылки',
      drivers: 'Водители',
      faq: 'Вопросы',
      downloadApp: 'Скачать',
      languageLabel: 'Язык:',
      changeLanguageAria: 'Сменить язык',
      menuAria: 'Меню',
      homeAria: 'Главная UYOL',
    },
    hero: {
      kickerMain: 'Междугородние поездки и доставка посылок',
      kickerCountry: 'Азербайджан',
      titleBefore: 'Междугородний путь —',
      titleAccent: 'выбирай сам',
      subtitle:
        'Свободно выбирайте направление, время выезда, автомобиль и водителя. Бронируйте место заранее и отслеживайте посылку от двери до двери в реальном времени.',
      appStoreBtn: 'Скачать в App Store',
      googlePlayBtn: 'Доступно в Google Play',
      qrTitle: 'Быстрая загрузка по QR-коду',
      bullet1: 'Поиск рейсов без регистрации',
      bullet2: 'Выбор мужских и женских мест',
      bullet3: 'Автопереназначение водителя для посылок',
      mockupDateTrips: '12 ноя · 4 рейса',
      mockupPassengerCount: '1 пассажир',
      mockupDuration: '4 ч 30 мин',
      mockupDoorToDoor: 'От двери до двери',
      mockupOneSeatLeft: 'Осталось 1 место',
      mockupSelectSeatBtn: 'Выбрать место и бронь',
      mockupTicketLabel: 'БИЛЕТ UYOL',
      mockupPassengerLabel: 'Пассажир:',
      mockupSeatLabel: 'Место:',
      mockupSeatValue: '4 (Мужское)',
      mockupStatusLabel: 'Статус:',
      mockupStatusValue: 'Подтверждено',
      mockupViewTicketBtn: 'Открыть билет',
    },
    values: [
      {
        title: 'Выбирай водителя сам',
        description: 'Изучайте модель авто, рейтинг водителя и точное время выезда до бронирования.',
      },
      {
        title: 'От двери до двери',
        description: 'Без ожидания на автовокзале: посадка и высадка по указанному вами адресу.',
      },
      {
        title: 'Живое отслеживание',
        description: 'Следите за поездкой и отправленной посылкой на карте в режиме реального времени.',
      },
      {
        title: 'Точные уведомления',
        description: 'Уведомления о выезде с предыдущего адреса, за 15 и 5 минут до прибытия.',
      },
    ],
    howItWorks: {
      kicker: 'Просто и прозрачно',
      title: 'Как работает UYOL?',
      subtitle:
        'Это не вызов случайного такси — это плановая, удобная и надежная система междугородних поездок.',
      tabPassenger: 'Поездка пассажиром',
      tabParcel: 'Отправка посылки',
      passengerSteps: [
        {
          num: '01',
          title: 'Выберите маршрут и дату',
          description: 'Укажите город отправления и назначения. Смотрите все доступные рейсы без регистрации.',
          badge: 'Без регистрации',
        },
        {
          num: '02',
          title: 'Выберите рейс и водителя',
          description: 'Подберите подходящий рейс по автомобилю (седан или минивэн), рейтингу и времени выезда.',
          badge: 'Свободный выбор',
        },
        {
          num: '03',
          title: 'Выберите место и оплатите',
          description: 'На схеме салона видны мужские и женские места. Быстрый вход по OTP-коду на этапе брони.',
          badge: 'Вход по OTP',
        },
        {
          num: '04',
          title: 'Отслеживайте и в путь',
          description: 'Получайте уведомления за 15 и 5 минут до подачи. Электронный билет всегда в приложении.',
          badge: 'Умные уведомления',
        },
      ],
      parcelSteps: [
        {
          num: '01',
          title: 'Укажите адреса и посылку',
          description: 'Заполните адреса забора и вручения, а также контакты отправителя и получателя.',
          badge: 'Только посылки',
        },
        {
          num: '02',
          title: 'Выберите попутный рейс',
          description: 'Выберите проверенного водителя по нужному маршруту. Водители не гоняются за заказами.',
          badge: 'Плановый рейс',
        },
        {
          num: '03',
          title: 'Передайте и отслеживайте',
          description: 'И отправитель, и получатель видят движение водителя на карте в приложении или по SMS-ссылке.',
          badge: 'Двойной контроль',
        },
        {
          num: '04',
          title: 'Подтверждение «Доставлено»',
          description: 'Получатель называет код, водитель нажимает кнопку «Доставлено» для завершения.',
          badge: 'Гарантия замены',
        },
      ],
      calloutPassengerTitle: 'Начните поиск рейсов сразу без регистрации',
      calloutPassengerDesc:
        'Создавать профиль для просмотра расписания не нужно. Вход требуется только при бронировании.',
      calloutPassengerBtn: 'Смотреть рейсы',
      calloutParcelTitle: 'Автоназначение нового водителя при отмене рейса',
      calloutParcelDesc:
        'Ваша посылка не останется в пути — система автоматически подберет ближайший подходящий рейс.',
      calloutParcelBtn: 'Открыть демо трекинга',
    },
    passenger: {
      kicker: 'Для пассажиров',
      title: 'Выбирайте дорогу и место сами',
      subtitle:
        'Никаких случайностей. Вы заранее знаете автомобиль, водителя, точное время выезда и кто сидит на соседнем месте.',
      noSignupNote: 'Просмотр без регистрации',
      searchInAppBtn: 'Найти в приложении',
      tripsHeading: 'Доступные рейсы',
      sampleNote: 'Примеры маршрутов',
      doorToDoor: 'От двери до двери',
      oneSeatLeft: 'Осталось 1 место',
      seatsLeftSuffix: 'свободных мест',
      selectedLabel: 'Выбрано',
      tapToSelectLabel: 'Нажмите для выбора',
      salonKicker: 'Интерактивный салон',
      salonTitle: 'Выбор места',
      legendMale: 'Мужское',
      legendFemale: 'Женское',
      legendEmpty: 'Свободно',
      legendYours: 'Ваше место',
      driverLabel: 'Водитель',
      frontLabel: 'Перед',
      selectedSeatLabel: 'Выбранное место:',
      notSelected: 'Не выбрано',
      fareLabel: 'Стоимость:',
      viewTicketBtn: 'Посмотреть образец билета',
      seatTakenMaleAlert: 'Это место уже занято пассажиром-мужчиной.',
      seatTakenFemaleAlert: 'Это место уже занято пассажиром-женщиной.',
      seatTitlePrefix: 'Место №',
    },
    parcel: {
      kicker: 'Междугородняя доставка',
      titleLine1: 'Только посылки.',
      titleLine2: 'Живой контроль на каждом этапе.',
      subtitle:
        'Отправляйте личные посылки и документы напрямую с проверенными водителями без долгого ожидания карго. Отправитель и получатель видят всё в реальном времени.',
      features: [
        {
          title: 'Автоматическая замена водителя',
          description:
            'Если выбранный водитель отменит поездку, система автоматически перенаправит посылку на следующий подходящий рейс.',
        },
        {
          title: 'Своевременные SMS и push-уведомления',
          description:
            'Получатель автоматически оповещается при выезде с предыдущего адреса, а также за 15 и 5 минут до прибытия.',
        },
        {
          title: 'Подтверждение вручения «Доставлено»',
          description:
            'При передаче посылки получатель предоставляет код подтверждения, и водитель нажимает «Доставлено».',
        },
      ],
      openTrackingBtn: 'Открыть пример трекинга',
      sendParcelBtn: 'Отправить посылку',
      cardKicker: 'Отслеживание на карте',
      cardTitle: 'Посылка Баку → Габала',
      statusInTransit: 'В пути',
      parcelTypeLabel: 'Тип посылки:',
      parcelTypeValue: 'Документы и малая коробка',
      recipientLabel: 'Получатель:',
      etaLabel: 'Прибытие:',
      etaValue: '14:05 (осталось 5 мин)',
      openFullscreenBtn: 'Открыть окно отслеживания',
      checkpoints: [
        {
          title: 'Посылка принята',
          time: '10:15',
          status: 'completed',
          description: 'Водитель забрал посылку у отправителя в Баку (Нариманов).',
        },
        {
          title: 'Выехал с предыдущего адреса',
          time: '11:40',
          status: 'completed',
          description: 'Автомобиль вышел на междугороднюю трассу и движется по маршруту.',
        },
        {
          title: 'Осталось 15 минут',
          time: '13:45',
          status: 'completed',
          description: 'Получателю отправлено автоматическое SMS и уведомление.',
        },
        {
          title: 'Осталось 5 минут',
          time: '13:55',
          status: 'current',
          description: 'Водитель подъезжает к точке передачи посылки.',
        },
        {
          title: 'Подтверждение доставки',
          time: 'Ожидается 14:05',
          status: 'upcoming',
          description: 'Получатель называет код, водитель подтверждает кнопкой «Доставлено».',
        },
      ],
    },
    driver: {
      kicker: 'UYOL Driver',
      titleLine1: 'Не гоняетесь за заказами —',
      titleLine2: 'сами объявляете свой рейс',
      subtitle:
        'В приложении UYOL Driver нет назойливых предложений заказов. Вы публикуете свой междугородний рейс и получаете тихое уведомление только при бронировании места или посылки.',
      mascotBadge: 'ВОДИТЕЛЬ UYOL',
      mascotDesc: 'Хозяин своего графика и маршрута. Прозрачный доход.',
      minivanBadge: 'Модель рейсов',
      minivanTypes: 'Седаны, минивэны и микроавтобусы',
      benefits: [
        {
          title: 'Тихие уведомления',
          description: 'Никакой суеты диспетчерской. Уведомление приходит только при реальной брони.',
        },
        {
          title: 'Передача пассажира',
          description:
            'В форс-мажорной ситуации можно официально передать пассажира или посылку другому водителю UYOL по пути.',
        },
        {
          title: 'Быстрая проверка',
          description: 'Удобная загрузка документов и фотографий автомобиля прямо в приложении.',
        },
      ],
      howTitle: 'Как работает UYOL Driver?',
      howSubtitle: 'Специальные инструменты и удобное управление рейсами для междугородних водителей.',
      tabFlow: 'Объявление рейса',
      tabTransfer: 'Передача пассажира',
      tabSignup: 'Этапы регистрации',
      flowSteps: [
        {
          step: 'ШАГ 1',
          title: 'Создайте рейс',
          description: 'Укажите город выезда, назначения, дату, время и количество свободных мест.',
        },
        {
          step: 'ШАГ 2',
          title: 'Получите бронь',
          description: 'Как только пассажир выберет место или посылку, вам придет уведомление.',
        },
        {
          step: 'ШАГ 3',
          title: 'Выезжайте и завершайте',
          description: 'Приложение само предупреждает пассажиров о приближении. В конце нажмите «Доставлено».',
        },
      ],
      transferTitle: 'Официальная передача пассажиров и посылок между водителями',
      transferDesc:
        'Если в дороге возникла поломка или непредвиденная задержка, пассажиры и посылки не останутся без помощи. В разделе «Передача» выберите попутного водителя UYOL и безопасно передайте бронь.',
      signupSteps: [
        { title: '1. Личные данные', description: 'Удостоверение личности и номер телефона.' },
        { title: '2. Права', description: 'Фото действующего водительского удостоверения.' },
        { title: '3. Документы на авто', description: 'Техпаспорт и страховой полис.' },
        { title: '4. Фото авто', description: 'Фотографии кузова и салона автомобиля.' },
      ],
      osNote: 'Приложение для водителей полностью оптимизировано под iOS и Android.',
      downloadBtn: 'Скачать UYOL Driver',
    },
    screens: {
      kicker: 'Дизайн интерфейса',
      title: 'Познакомьтесь с экранами приложения',
      subtitle: 'Интуитивный, чистый и быстрый мобильный интерфейс для пассажиров и водителей.',
      tabUser: 'User App (Пассажир и Посылка)',
      tabDriver: 'Driver App (Водитель)',
      selectScreenLabel: 'Выберите экран',
      navItems: ['Главная', 'Рейсы', 'Билеты', 'Профиль'],
      items: [
        {
          id: 'screen-1',
          title: 'Поиск и выбор рейсов',
          tag: 'Экран рейсов',
          description: 'Фильтруйте маршруты, время выезда и водителей, чтобы найти лучший вариант.',
          appType: 'user',
        },
        {
          id: 'screen-2',
          title: 'Выбор мужского и женского места',
          tag: 'Предпочтения',
          description: 'Смотрите схему салона, распределение по полу и выбирайте удобное место.',
          appType: 'user',
        },
        {
          id: 'screen-3',
          title: 'Перфорированный цифровой билет',
          tag: 'Мои билеты',
          description: 'Билет с QR-кодом, временем выезда и данными водителя всегда под рукой.',
          appType: 'user',
        },
        {
          id: 'screen-4',
          title: 'Онлайн-отслеживание посылки',
          tag: 'Посылка от двери до двери',
          description: 'Точная карта и своевременные уведомления для отправителя и получателя.',
          appType: 'user',
        },
        {
          id: 'screen-5',
          title: 'Публикация рейса водителем',
          tag: 'Рейсы водителя',
          description: 'Водитель указывает направление, время выезда и стоимость места в пару нажатий.',
          appType: 'driver',
        },
        {
          id: 'screen-6',
          title: 'Уведомления только по брони',
          tag: 'Спокойный режим',
          description: 'Никакого спама заказами — уведомления приходят лишь при реальной брони.',
          appType: 'driver',
        },
        {
          id: 'screen-7',
          title: 'Система передачи пассажира',
          tag: 'Взаимопомощь',
          description: 'Удобная передача пассажира или посылки попутному водителю UYOL при необходимости.',
          appType: 'driver',
        },
      ],
      simTripsTitle: 'Рейсы',
      simSeatTitle: 'Выбор места',
      simSeatPicked: 'Выбрано место № 04',
      simCabinSplit: 'Схема салона',
      simOtpNote: 'Бронь подтверждается мгновенным OTP-кодом',
      simTicketTitle: 'Билет № 04',
      simParcelTitle: 'Трекинг посылки',
      simParcelStatus: 'Осталось 5 мин',
      simParcelApproaching: 'Водитель подъезжает к адресу',
      simParcelCode: 'Код подтверждения у получателя:',
      simDriverPostTitle: 'Создать рейс',
      simDriverRoute: 'Маршрут',
      simDriverTime: 'Время выезда',
      simDriverSeats: 'Свободно мест',
      simDriverSeatsVal: '4 места',
      simDriverCreateBtn: 'Опубликовать рейс',
      simDriverNotifTitle: 'Новая бронь',
      simDriverNotifBooked: 'Забронировано место № 04',
      simDriverNotifPassenger: 'Пассажир: Ниджат А. (Мужское)',
      simDriverNotifTime: 'Выезд: 10:00 · 20 Января',
      simDriverTransferTitle: 'Передача пассажира',
      simDriverTransferNear: 'Ближайший авто UYOL',
      simDriverTransferDist: 'Дистанция: 1.2 км · 3 места',
      simDriverTransferBtn: 'Подтвердить передачу',
    },
    arMeasure: {
      badge: 'Скоро',
      titleLine1: 'Замер посылки камерой:',
      titleLine2: 'без линейки и мгновенно',
      subtitle:
        'Наведите камеру смартфона на коробку, чтобы автоматически определить длину, ширину, высоту и объем в багажнике за считанные секунды.',
      highlights: [
        { title: 'AR-технология', description: 'Точное 3D-определение граней через камеру телефона.' },
        { title: 'Расчет объема', description: 'Автоматический подсчет места в багажнике авто.' },
        { title: 'Прозрачность', description: 'Стандартизированные габариты без споров.' },
      ],
      btnScanning: 'Идет сканирование...',
      btnStart: 'Запустить симуляцию',
      camStatusScanning: 'Анализ',
      camStatusReady: 'Готово',
      dimLength: 'Длина: 38 см',
      dimWidth: 'Ширина: 25 см',
      dimHeight: 'В: 20 см',
      estVolumeLabel: 'Расчетный объем',
      estVolumeValue: '19.0 Литров (Средняя)',
      camHint: 'Наведите камеру на четыре угла посылки',
    },
    faq: {
      kicker: 'Частые вопросы',
      title: 'Ответы на главные вопросы',
      subtitle: 'Узнайте всё о том, как устроена платформа UYOL.',
      items: [
        {
          id: 'faq-1',
          question: 'Чем UYOL отличается от обычного такси или автовокзала?',
          answer:
            'В UYOL вы не ждете случайного назначения машины. Вы заранее видите все рейсы, модель авто, рейтинг водителя и точное время выезда, сами выбираете место и бронируете онлайн. Водители получают уведомления только при бронировании.',
        },
        {
          id: 'faq-2',
          question: 'Нужна ли регистрация для просмотра рейсов?',
          answer:
            'Нет! Вы можете свободно просматривать направления, рейсы, автомобили и свободные места без регистрации. Вход по OTP-коду нужен только на этапе бронирования.',
        },
        {
          id: 'faq-3',
          question: 'Как работает выбор мужских и женских мест?',
          answer:
            'На схеме салона уже занятые места отмечены соответствующими цветами, чтобы вы могли выбрать комфортное место для себя или семьи.',
        },
        {
          id: 'faq-4',
          question: 'Могут ли отправитель и получатель вместе отслеживать посылку?',
          answer:
            'Да. После оформления обе стороны получают отслеживание и уведомления: о выезде с предыдущего адреса, а также за 15 и 5 минут до прибытия.',
        },
        {
          id: 'faq-5',
          question: 'Что будет с посылкой, если водитель отменит рейс?',
          answer:
            'Действует гарантия автопереназначения: при отмене рейса система автоматически подбирает следующего подходящего водителя по тому же направлению.',
        },
        {
          id: 'faq-6',
          question: 'Как устроена работа для водителей?',
          answer:
            'У водителей используется понятие «рейс» («gediş»), а не случайные заказы. Водитель публикует маршрут и время и получает уведомления только при бронировании мест или посылок.',
        },
        {
          id: 'faq-7',
          question: 'Как водитель может передать пассажира другому авто?',
          answer:
            'При поломке или непредвиденной ситуации водитель может через официальный раздел передачи в UYOL Driver перевести пассажира или посылку к попутному проверенному водителю UYOL.',
        },
      ],
    },
    finalCta: {
      verticalBadge: 'Междугородний путь',
      titleLine1: 'Счастливого пути,',
      titleLine2: 'комфортной поездки',
      subtitle:
        'Скачайте приложение UYOL прямо сейчас и управляйте междугородними поездками и посылками просто и прозрачно.',
      appStoreBtn: 'Скачать в App Store',
      googlePlayBtn: 'Доступно в Google Play',
      smsPrompt: 'Укажите номер телефона, и мы отправим прямую ссылку:',
      smsSentBtn: 'Отправлено',
      smsSendBtn: 'Отправить',
      smsSuccessMsg: 'Ссылка отправлена по SMS!',
      qrTitle: 'Сканируйте QR-код',
      qrDesc: 'Наведите камеру смартфона, чтобы сразу перейти к установке.',
    },
    footer: {
      tagline: 'Платформа междугородних пассажирских и посылочных перевозок',
      copyright: 'UYOL. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      deleteAccount: 'Удалить аккаунт',
      terms: 'Условия использования',
    },
    downloadModal: {
      badge: 'Официальное приложение',
      titleUser: 'Скачать UYOL Пассажир',
      titleDriver: 'Скачать UYOL Driver',
      subtitle: 'Удобные междугородние поездки и надежная доставка посылок в вашем смартфоне.',
      tabUser: 'Пассажир и Посылка',
      tabDriver: 'Водитель (Driver)',
      downloadLabel: 'Загрузите в',
      getLabel: 'Доступно в',
      iosSoonAlert: 'Приложение UYOL для iOS скоро появится в App Store. Оставьте номер для TestFlight.',
      androidSoonAlert: 'Приложение UYOL для Android скоро появится в Google Play. Оставьте номер для раннего доступа.',
      qrTitle: 'Сканируйте камерой',
      qrDesc: 'Наведите камеру телефона на QR-код для мгновенного перехода к загрузке.',
      smsLabel: 'Или введите номер телефона для получения ссылки:',
      smsSendBtn: 'Отправить',
      smsSentBtn: 'Отправлено',
      smsSuccess: 'Ссылка для загрузки отправлена на ваш номер!',
      closeAria: 'Закрыть',
    },
    ticketModal: {
      departureLabel: 'Выезд',
      destinationLabel: 'Назначение',
      passengerLabel: 'Пассажир',
      seatTypeLabel: 'Место и тип',
      seatTypeValue: '№ 04 (Мужское место)',
      dateLabel: 'Дата',
      dateValue: '12 ноября 2026',
      timeLabel: 'Время выезда',
      confirmedLabel: 'Подтверждено',
      footerNote: 'Связь с водителем и карта откроются в приложении UYOL в день поездки.',
      closeAria: 'Закрыть',
    },
    trackingModal: {
      badge: 'Живой трекинг',
      title: 'Отследить посылку',
      subtitle: 'Отправитель и получатель одновременно следят за посылкой в реальном времени.',
      placeholder: 'Код отслеживания (напр. UY-84920)',
      checkBtn: 'Проверить',
      codeLabel: 'Код отслеживания',
      statusLabel: 'Текущий статус',
      statusValue: 'Осталось 5 минут',
      senderLabel: 'Отправитель',
      recipientLabel: 'Получатель',
      guaranteeTitle: 'Гарантия автоматической замены',
      guaranteeDesc:
        'Если водитель отменит рейс, система автоматически назначит нового водителя по тому же направлению.',
      timelineTitle: 'История движения и уведомления',
      codeNote: 'При вручении получатель предъявляет защитный код.',
      codeBadge: 'Код подтверждения: 492',
      closeAria: 'Закрыть',
    },
    cookie: {
      text: 'Мы используем необходимые файлы cookie для стабильной работы и удобной навигации.',
      accept: 'Принять',
    },
  },

  tr: {
    nav: {
      howItWorks: 'Nasıl çalışır',
      passengers: 'Yolcular',
      parcels: 'Paketler',
      drivers: 'Sürücüler',
      faq: 'SSS',
      downloadApp: 'Uygulamayı indir',
      languageLabel: 'Dil seçimi:',
      changeLanguageAria: 'Dili değiştir',
      menuAria: 'Menü',
      homeAria: 'UYOL Ana Sayfa',
    },
    hero: {
      kickerMain: 'Şehirler Arası Yolcu & Paket Platformu',
      kickerCountry: 'Azerbaycan',
      titleBefore: 'Şehirler arası yolunu',
      titleAccent: 'kendin seç',
      subtitle:
        'Güzergahı, kalkış saatini, aracı ve sürücüyü özgürce seç. Koltuğunu önceden ayırt, paketini kapıdan kapıya canlı takip ile güvenle ulaştır.',
      appStoreBtn: "App Store'dan indir",
      googlePlayBtn: "Google Play'den edin",
      qrTitle: 'QR kod ile hızlı indir',
      bullet1: 'Üyeliksiz serbest arama',
      bullet2: 'Kadın ve Erkek koltuk seçimi',
      bullet3: 'Otomatik sürücü yenileme garantisi',
      mockupDateTrips: '12 Kasım · 4 sefer',
      mockupPassengerCount: '1 yolcu',
      mockupDuration: '4 sa 30 dk',
      mockupDoorToDoor: 'Kapıdan Kapıya',
      mockupOneSeatLeft: '1 koltuk kaldı',
      mockupSelectSeatBtn: 'Koltuk seç ve ayırt',
      mockupTicketLabel: 'UYOL BİLET',
      mockupPassengerLabel: 'Yolcu:',
      mockupSeatLabel: 'Koltuk:',
      mockupSeatValue: '4 (Erkek koltuğu)',
      mockupStatusLabel: 'Durum:',
      mockupStatusValue: 'Onaylandı',
      mockupViewTicketBtn: 'Biletin tamamını gör',
    },
    values: [
      {
        title: 'Sürücünü Kendin Seç',
        description: 'Araç modeline, sürücü puanına ve kalkış saatine bakarak özgürce karar ver.',
      },
      {
        title: 'Kapıdan Kapıya',
        description: 'Otogarda beklemeden, belirlediğin adresten rahat biniş ve iniş imkanı.',
      },
      {
        title: 'Canlı Takip',
        description: 'Hem yolcu seferini hem de gönderdiğin paketi harita üzerinden anbean izle.',
      },
      {
        title: 'Zamanında Bildirim',
        description: 'Sürücü önceki adresten çıktığında, 15 dk ve 5 dk kala anında bildirim al.',
      },
    ],
    howItWorks: {
      kicker: 'Basit ve Şeffaf Süreç',
      title: 'UYOL nasıl çalışır?',
      subtitle:
        'Rastgele taksi çağırmak değil — şehirler arası yolculuklar için planlı, konforlu ve güvenilir ulaşım sistemi.',
      tabPassenger: 'Yolcu olarak seyahat',
      tabParcel: 'Paket gönderimi',
      passengerSteps: [
        {
          num: '01',
          title: 'Güzergah ve tarih seç',
          description: 'Kalkış ve varış şehrini girin. Üyelik gerekmeden tüm mevcut seferleri inceleyin.',
          badge: 'Üyeliksiz inceleme',
        },
        {
          num: '02',
          title: 'Seferi ve sürücüyü seç',
          description: 'Araç modeline (sedan veya minibüs), sürücü puanına ve kalkış saatine göre en uygun seferi seçin.',
          badge: 'Özgür seçim',
        },
        {
          num: '03',
          title: 'Koltuk seç ve güvenle öde',
          description: 'Kabin planında kadın/erkek koltuklarını görerek yerinizi ayırtın. OTP koduyla giriş yapıp ödeyin.',
          badge: 'OTP ile giriş',
        },
        {
          num: '04',
          title: 'Canlı izle ve yola çık',
          description: 'Yolculuk günü 15 dk ve 5 dk kala bildirim alın. Dijital biletiniz her zaman uygulamada.',
          badge: 'Akıllı bildirimler',
        },
      ],
      parcelSteps: [
        {
          num: '01',
          title: 'Adres ve paketi belirt',
          description: 'Teslim alınacak ve teslim edilecek adresleri, gönderici ve alıcı numaralarını girin.',
          badge: 'Yalnızca paket',
        },
        {
          num: '02',
          title: 'Uygun seferi seç',
          description: 'Aynı güzergahta giden güvenilir sürücüyü seçin. Sürücüler rastgele sipariş kovalamaz.',
          badge: 'Planlı sefer',
        },
        {
          num: '03',
          title: 'Teslim et ve canlı izle',
          description: 'Hem gönderici hem alıcı uygulama ve SMS bağlantısı üzerinden sürücüyü canlı haritada izler.',
          badge: 'Çift taraflı takip',
        },
        {
          num: '04',
          title: '"Teslim Edildi" onayı',
          description: 'Alıcı doğrulama kodunu paylaşır, sürücü "Teslim Edildi" butonuna basarak işlemi tamamlar.',
          badge: 'Otomatik atama',
        },
      ],
      calloutPassengerTitle: 'Kayıt olmadan hemen aramaya başlayabilirsiniz',
      calloutPassengerDesc:
        'Seferleri görmek için hesap oluşturmanız gerekmez. Giriş yalnızca rezervasyon anında istenir.',
      calloutPassengerBtn: 'Seferleri incele',
      calloutParcelTitle: 'Seçilen sürücü iptal ederse sistem otomatik yeni sürücü atar',
      calloutParcelDesc:
        'Paketiniz asla yolda kalmaz, sistem anında aynı yöndeki en uygun seferi devreye alır.',
      calloutParcelBtn: 'Canlı takip örneğini aç',
    },
    passenger: {
      kicker: 'Yolcular İçin',
      title: 'Yolunu ve koltuğunu kendin belirle',
      subtitle:
        'Tesadüfe yer yok. Sürücü profilini, araç türünü, kalkış saatini ve yanındaki koltuğun durumunu önceden bilirsin.',
      noSignupNote: 'Kayıt olmadan inceleme mümkün',
      searchInAppBtn: 'Uygulamada ara',
      tripsHeading: 'Seferler',
      sampleNote: 'Örnek güzergahlar',
      doorToDoor: 'Kapıdan Kapıya',
      oneSeatLeft: 'Yalnızca 1 koltuk kaldı',
      seatsLeftSuffix: 'boş koltuk',
      selectedLabel: 'Seçildi',
      tapToSelectLabel: 'Seçmek için dokun',
      salonKicker: 'İnteraktif Kabin',
      salonTitle: 'Koltuk Seçimi',
      legendMale: 'Erkek koltuğu',
      legendFemale: 'Kadın koltuğu',
      legendEmpty: 'Boş koltuk',
      legendYours: 'Sizin koltuğunuz',
      driverLabel: 'Sürücü',
      frontLabel: 'Ön taraf',
      selectedSeatLabel: 'Seçilen koltuk:',
      notSelected: 'Seçilmedi',
      fareLabel: 'Ücret:',
      viewTicketBtn: 'Bilet kartını önizle',
      seatTakenMaleAlert: 'Bu koltuk bir erkek yolcu tarafından zaten rezerve edilmiş.',
      seatTakenFemaleAlert: 'Bu koltuk bir kadın yolcu tarafından zaten rezerve edilmiş.',
      seatTitlePrefix: 'Koltuk №',
    },
    parcel: {
      kicker: 'Şehirler Arası Teslimat',
      titleLine1: 'Yalnızca paket.',
      titleLine2: 'Her adımda canlı kontrol.',
      subtitle:
        'Kargo şubelerinde beklemeden kişisel paket ve belgelerinizi şehirler arası sefer yapan güvenilir sürücülerle gönderin. Gönderici ve alıcı haritada anlık izler.',
      features: [
        {
          title: 'Otomatik Yeni Sürücü Ataması',
          description:
            'Seçilen sürücü beklenmedik şekilde seferi iptal ederse, sistemimiz paketinizi anında bir sonraki uygun sefere yönlendirir.',
        },
        {
          title: 'Zamanında SMS ve Uygulama Bildirimleri',
          description:
            'Sürücü önceki adresten çıktığında, varış noktasına 15 dakika ve 5 dakika kala alıcıya otomatik uyarı gider.',
        },
        {
          title: '"Teslim Edildi" Güvenlik Onayı',
          description:
            'Sürücü paketi teslim ederken alıcının onay kodu ile "Teslim Edildi" butonuna basar ve süreç tamamlanır.',
        },
      ],
      openTrackingBtn: 'Takip örneğini aç',
      sendParcelBtn: 'Paket gönder',
      cardKicker: 'Canlı Harita Takibi',
      cardTitle: 'Bakü → Gebele Paketi',
      statusInTransit: 'Yolda',
      parcelTypeLabel: 'Paket türü:',
      parcelTypeValue: 'Belgeler ve küçük paket',
      recipientLabel: 'Teslim alan:',
      etaLabel: 'Tahmini varış:',
      etaValue: '14:05 (5 dakika kaldı)',
      openFullscreenBtn: 'Takip ekranını tam boyutta aç',
      checkpoints: [
        {
          title: 'Paket teslim alındı',
          time: '10:15',
          status: 'completed',
          description: 'Sürücü paketi Bakü, Nerimanov adresinden göndericiden teslim aldı.',
        },
        {
          title: 'Önceki adresten ayrıldı',
          time: '11:40',
          status: 'completed',
          description: 'Araç şehirler arası otoyola çıktı ve ilerliyor.',
        },
        {
          title: 'Adrese 15 dakika kaldı',
          time: '13:45',
          status: 'completed',
          description: 'Alıcıya otomatik SMS ve uygulama bildirimi gönderildi.',
        },
        {
          title: 'Adrese 5 dakika kaldı',
          time: '13:55',
          status: 'current',
          description: 'Sürücü belirlenen teslim noktasına yaklaşıyor.',
        },
        {
          title: 'Teslim edildi onayı',
          time: 'Tahmini 14:05',
          status: 'upcoming',
          description: 'Alıcı kodu paylaşır, sürücü "Teslim Edildi" butonuna basarak onaylar.',
        },
      ],
    },
    driver: {
      kicker: 'UYOL Driver',
      titleLine1: 'Sipariş kovalamazsın —',
      titleLine2: 'kendi seferini ilan edersin',
      subtitle:
        'UYOL Driver uygulamasında rastgele sipariş çağrıları almazsınız. Şehirler arası seferinizi önceden tanımlarsınız, yalnızca koltuk veya paket ayırtıldığında sakin bir bildirim alırsınız.',
      mascotBadge: 'UYOL SÜRÜCÜSÜ',
      mascotDesc: 'Kendi zamanının ve rotasının sahibi. Esnek program ve şeffaf kazanç.',
      minivanBadge: 'Sefer modeli',
      minivanTypes: 'Sedan, Minivan ve Minibüsler',
      benefits: [
        {
          title: 'Sakin Bildirimler',
          description: 'Gürültülü çağrı karmaşası yok. Yalnızca koltuk veya paket rezerve edildiğinde bildirim alın.',
        },
        {
          title: 'Yolcu Aktarımı',
          description:
            'Mücbir sebep halinde yolcuyu veya paketi aynı yöndeki başka bir UYOL sürücüsüne resmi olarak aktarabilirsiniz.',
        },
        {
          title: 'Hızlı Onay',
          description: 'Belgelerinizi ve araç fotoğraflarınızı uygulama içinden kolayca yükleyip onay alın.',
        },
      ],
      howTitle: 'UYOL Driver nasıl çalışır?',
      howSubtitle: 'Sürücüler için özel tasarlanmış pratik özellikler ve sade sefer yönetimi.',
      tabFlow: 'Sefer İlanı',
      tabTransfer: 'Yolcu Aktarımı',
      tabSignup: 'Kayıt Adımları',
      flowSteps: [
        {
          step: 'ADIM 1',
          title: 'Seferini oluştur',
          description: 'Kalkış şehrini, varış noktasını, tarihi, saati ve boş koltuk sayısını girin.',
        },
        {
          step: 'ADIM 2',
          title: 'Rezervasyon bildirimi al',
          description: 'Yolcu koltuk seçtiğinde veya paket eklediğinde anında bildirim ekranınıza düşer.',
        },
        {
          step: 'ADIM 3',
          title: 'Yola çık ve tamamla',
          description: 'Uygulama yolculara otomatik yaklaşma bildirimleri gönderir. Teslimde işlemi kapatın.',
        },
      ],
      transferTitle: 'Sürücüler Arası Resmi Yolcu ve Paket Aktarımı',
      transferDesc:
        'Yolda aracınızda arıza çıktığında veya beklenmedik bir engel oluştuğunda yolcularınız ve paketleriniz mağdur olmaz. UYOL Driver içindeki "Aktarım" menüsünden aynı yöndeki başka bir onaylı UYOL sürücüsüne aktarım yapabilirsiniz.',
      signupSteps: [
        { title: '1. Kişisel Bilgiler', description: 'Kimlik belgesi ve iletişim numarası.' },
        { title: '2. Ehliyet', description: 'Geçerli sürücü belgesi fotoğrafı.' },
        { title: '3. Araç Belgeleri', description: 'Ruhsat ve sigorta poliçesi.' },
        { title: '4. Araç Fotoğrafları', description: 'Aracın dış ve iç kabin fotoğrafları.' },
      ],
      osNote: 'Sürücü uygulaması iOS ve Android cihazlar için tam optimize edilmiştir.',
      downloadBtn: "UYOL Driver'ı indir",
    },
    screens: {
      kicker: 'Arayüz Tasarımı',
      title: 'Uygulama Ekranlarını Keşfedin',
      subtitle: 'Hem yolcular hem sürücüler için özenle tasarlanmış sezgisel, modern ve hızlı mobil arayüz.',
      tabUser: 'User App (Yolcu & Paket)',
      tabDriver: 'Driver App (Sürücü)',
      selectScreenLabel: 'Ekran Seçin',
      navItems: ['Ana Sayfa', 'Seferler', 'Biletlerim', 'Profil'],
      items: [
        {
          id: 'screen-1',
          title: 'Sefer Ara ve Seç',
          tag: 'Seferler Ekranı',
          description: 'Şehirler arası rotaları, kalkış saatlerini ve sürücüleri filtreleyerek en uygun seferi bulun.',
          appType: 'user',
        },
        {
          id: 'screen-2',
          title: 'Kadın & Erkek Koltuk Seçimi',
          tag: 'Tercihler & Koltuklar',
          description: 'Kabin haritasında koltuk dağılımını görün ve rahat edeceğiniz yeri seçin.',
          appType: 'user',
        },
        {
          id: 'screen-3',
          title: 'Perforasyonlu Dijital Bilet',
          tag: 'Biletlerim',
          description: 'QR kodlu biletiniz, kalkış saati ve araç bilgileri her zaman cebinizde.',
          appType: 'user',
        },
        {
          id: 'screen-4',
          title: 'Canlı Paket Takibi',
          tag: 'Kapıdan Kapıya Paket',
          description: 'Gönderici ve alıcı için hassas harita takibi ve zamanında uyarı bildirimleri.',
          appType: 'user',
        },
        {
          id: 'screen-5',
          title: 'Sefer Yayınlama Paneli',
          tag: 'Sürücü Seferleri',
          description: 'Sürücüler gidecekleri şehri, saati ve koltuk fiyatını birkaç dokunuşla yayınlar.',
          appType: 'driver',
        },
        {
          id: 'screen-6',
          title: 'Yalnızca Rezervasyonda Bildirim',
          tag: 'Sakin Sürücü Modu',
          description: 'Gereksiz çağrı bildirimleri yok — sadece koltuk veya paket ayırtıldığında uyarı gelir.',
          appType: 'driver',
        },
        {
          id: 'screen-7',
          title: 'Yolcu Aktarım Sistemi',
          tag: 'Sürücü Desteği',
          description: 'Beklenmedik durumlarda yolcuyu veya paketi aynı yöndeki başka bir UYOL aracına aktarın.',
          appType: 'driver',
        },
      ],
      simTripsTitle: 'Seferler',
      simSeatTitle: 'Koltuk Seç',
      simSeatPicked: 'Koltuk № 04 seçildi',
      simCabinSplit: 'Kabin Dağılımı',
      simOtpNote: 'Anlık OTP doğrulama koduyla rezervasyon tamamlanır',
      simTicketTitle: 'Bilet № 04',
      simParcelTitle: 'Paket Takibi',
      simParcelStatus: '5 dakika kaldı',
      simParcelApproaching: 'Sürücü adrese yaklaşıyor',
      simParcelCode: 'Alıcıya gönderilen onay kodu:',
      simDriverPostTitle: 'Sefer İlan Et',
      simDriverRoute: 'Güzergah',
      simDriverTime: 'Kalkış Saati',
      simDriverSeats: 'Boş Koltuk',
      simDriverSeatsVal: '4 koltuk',
      simDriverCreateBtn: 'Seferi Oluştur',
      simDriverNotifTitle: 'Yeni Rezervasyon',
      simDriverNotifBooked: 'Koltuk № 04 Ayırtıldı',
      simDriverNotifPassenger: 'Yolcu: Nicat A. (Erkek koltuğu)',
      simDriverNotifTime: 'Kalkış: 10:00 · 20 Yanvar',
      simDriverTransferTitle: 'Yolcu Aktarımı',
      simDriverTransferNear: 'Yakındaki UYOL Aracı',
      simDriverTransferDist: 'Mesafe: 1.2 km · 3 boş koltuk',
      simDriverTransferBtn: 'Aktarımı Onayla',
    },
    arMeasure: {
      badge: 'Yakında',
      titleLine1: 'Kamera ile paket ölçümü:',
      titleLine2: 'Cetvelsiz ve anında',
      subtitle:
        'Telefon kamerasını pakete doğrultarak en, boy ve yüksekliği otomatik tespit edin; bagajda kaplayacağı alanı saniyeler içinde öğrenin.',
      highlights: [
        { title: 'AR Teknolojisi', description: 'Cihaz kamerası ile hassas 3D köşe algılama.' },
        { title: 'Otomatik Hacim', description: 'Bagaj alanındaki yer ihtiyacının hesaplanması.' },
        { title: 'Şeffaf Ölçü', description: 'Tahmine yer bırakmayan standart ölçüm.' },
      ],
      btnScanning: 'Kamera tarıyor...',
      btnStart: 'Simülasyonu dene',
      camStatusScanning: 'Analiz ediliyor',
      camStatusReady: 'Hazır',
      dimLength: 'Uzunluk: 38 cm',
      dimWidth: 'En: 25 cm',
      dimHeight: 'Y: 20 cm',
      estVolumeLabel: 'Tahmini Hacim',
      estVolumeValue: '19.0 Litre (Orta Paket)',
      camHint: 'Kamerayı paketin dört köşesine yöneltin',
    },
    faq: {
      kicker: 'Sıkça Sorulan Sorular',
      title: 'Aklınızda soru kalmasın',
      subtitle: 'UYOL hakkında en çok merak edilen soruların yanıtlarını inceleyin.',
      items: [
        {
          id: 'faq-1',
          question: 'UYOL ile normal taksi veya otogar arasındaki temel fark nedir?',
          answer:
            'UYOL’da rastgele sürücü ataması beklemezsiniz. Tüm seferleri, araç modelini, sürücü puanını ve kalkış saatini önceden görürsünüz. Koltuğunuzu kendiniz seçer, online ayırtırsınız.',
        },
        {
          id: 'faq-2',
          question: 'Seferlere bakmak için kayıt olmak gerekiyor mu?',
          answer:
            'Hayır! Tüm güzergahları, seferleri ve araçları üyeliksiz inceleyebilirsiniz. Sadece koltuk ayırtma aşamasında hızlı OTP koduyla giriş yapılır.',
        },
        {
          id: 'faq-3',
          question: 'Koltuk seçerken kadın ve erkek yerlerini nasıl görürüm?',
          answer:
            'Koltuk seçimi ekranında dolu koltuklar cinsiyete uygun renklerle net şekilde gösterilir; kendiniz veya aileniz için rahat koltuğu seçebilirsiniz.',
        },
        {
          id: 'faq-4',
          question: 'Paket gönderirken hem gönderici hem alıcı takip edebilir mi?',
          answer:
            'Evet. Her iki tarafa da canlı takip ve durum bildirimleri gider: sürücü önceki adresten çıktığında, 15 dk ve 5 dk kala otomatik uyarı verilir.',
        },
        {
          id: 'faq-5',
          question: 'Seçilen sürücü seferi iptal ederse paket ne olur?',
          answer:
            'Otomatik yeniden atama garantisi vardır. Sürücü iptal ettiğinde sistem aynı yöndeki en uygun sonraki sürücüyü otomatik olarak atar.',
        },
        {
          id: 'faq-6',
          question: 'Sürücü tarafında seferler nasıl yönetilir?',
          answer:
            'Sürücü uygulamasında rastgele "sipariş" yerine planlı "sefer" modeli işler. Sürücü rotasını paylaşır ve yalnızca rezervasyon geldiğinde bildirim alır.',
        },
        {
          id: 'faq-7',
          question: 'Sürücü yolcuyu başka araca ne zaman aktarabilir?',
          answer:
            'Teknik arıza veya beklenmeyen bir durumda sürücü, UYOL Driver içindeki resmi aktarım sistemiyle yolcu veya paketi aynı yöndeki başka bir onaylı UYOL sürücüsüne devredebilir.',
        },
      ],
    },
    finalCta: {
      verticalBadge: 'Şehirler Arası Yol',
      titleLine1: 'Yolunuz açık,',
      titleLine2: 'yolculuğunuz rahat olsun',
      subtitle:
        'UYOL mobil uygulamasını hemen indirin; şehirler arası seferlerinizi ve paketlerinizi zamanında ve şeffaf yönetin.',
      appStoreBtn: "App Store'dan indir",
      googlePlayBtn: "Google Play'den edin",
      smsPrompt: 'Numaranızı girin, doğrudan indirme bağlantısını gönderelim:',
      smsSentBtn: 'Gönderildi',
      smsSendBtn: 'Gönder',
      smsSuccessMsg: 'Bağlantı SMS ile gönderildi!',
      qrTitle: 'QR Kodu Okutun',
      qrDesc: 'Kameranızı doğrultarak uygulamayı hemen yükleyin.',
    },
    footer: {
      tagline: 'Şehirler arası yolcu ve paket taşıma platformu',
      copyright: 'UYOL. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      deleteAccount: 'Hesabı Sil',
      terms: 'Kullanım Koşulları',
    },
    downloadModal: {
      badge: 'Resmi Uygulama',
      titleUser: 'UYOL Yolcu Uygulamasını İndir',
      titleDriver: 'UYOL Driver Uygulamasını İndir',
      subtitle: 'Konforlu şehirler arası yolculuklar ve güvenli paket teslimatı cebinizde.',
      tabUser: 'Yolcu & Paket',
      tabDriver: 'Sürücü (Driver)',
      downloadLabel: 'İndirin',
      getLabel: 'Edinin',
      iosSoonAlert: "UYOL iOS uygulaması yakında App Store'da aktif olacak. TestFlight için numaranızı bırakın.",
      androidSoonAlert: "UYOL Android uygulaması yakında Google Play'de aktif olacak. Erken erişim için numaranızı bırakın.",
      qrTitle: 'Kameranızla okutun',
      qrDesc: 'Telefon kameranızı QR koda tutarak hemen indirme sayfasına geçin.',
      smsLabel: 'Veya telefon numaranızı yazın, bağlantıyı gönderelim:',
      smsSendBtn: 'Gönder',
      smsSentBtn: 'Gönderildi',
      smsSuccess: 'İndirme bağlantısı numaranıza gönderildi!',
      closeAria: 'Kapat',
    },
    ticketModal: {
      departureLabel: 'Kalkış',
      destinationLabel: 'Varış',
      passengerLabel: 'Yolcu',
      seatTypeLabel: 'Koltuk & Tür',
      seatTypeValue: '№ 04 (Erkek koltuğu)',
      dateLabel: 'Tarih',
      dateValue: '12 Kasım 2026',
      timeLabel: 'Kalkış saati',
      confirmedLabel: 'Onaylandı',
      footerNote: 'Sefer günü sürücü iletişimi ve canlı harita UYOL uygulamasında aktif olacaktır.',
      closeAria: 'Kapat',
    },
    trackingModal: {
      badge: 'Canlı Takip',
      title: 'Paketi Takip Et',
      subtitle: 'Gönderici ve alıcı paketin nerede olduğunu gerçek zamanlı olarak izler.',
      placeholder: 'Takip kodu (ör: UY-84920)',
      checkBtn: 'Kontrol et',
      codeLabel: 'Takip Kodu',
      statusLabel: 'Güncel Durum',
      statusValue: 'Adrese 5 dakika kaldı',
      senderLabel: 'Gönderici',
      recipientLabel: 'Alıcı',
      guaranteeTitle: 'Otomatik Yeniden Atama Garantisi',
      guaranteeDesc:
        'Sürücü iptal ederse sistem aynı yöndeki yeni bir sürücüyü otomatik atar; paketiniz yolda kalmaz.',
      timelineTitle: 'Hareket Geçmişi ve Bildirimler',
      codeNote: 'Teslim sırasında alıcıya güvenlik onay kodu iletilir.',
      codeBadge: 'Onay Kodu: 492',
      closeAria: 'Kapat',
    },
    cookie: {
      text: 'Uygulama deneyiminizi iyileştirmek ve kesintisiz gezinme sağlamak için zorunlu çerezler kullanıyoruz.',
      accept: 'Kabul et',
    },
  },

  uz: {
    nav: {
      howItWorks: 'Qanday ishlaydi',
      passengers: 'Yo‘lovchilar',
      parcels: 'Jo‘natmalar',
      drivers: 'Haydovchilar',
      faq: 'Savollar',
      downloadApp: 'Ilovani yuklab olish',
      languageLabel: 'Til tanlovi:',
      changeLanguageAria: 'Tilni o‘zgartirish',
      menuAria: 'Menyu',
      homeAria: 'UYOL Bosh sahifa',
    },
    hero: {
      kickerMain: 'Shaharlararo Yo‘lovchi va Jo‘natma Platformasi',
      kickerCountry: 'Ozarbayjon',
      titleBefore: 'Shaharlararo yo‘lingni',
      titleAccent: 'o‘zing tanla',
      subtitle:
        'Yo‘nalish, jo‘nash vaqti, avtomobil va haydovchini erkin tanlang. Joyingizni oldindan band qiling, jo‘natmani esa eshikdan-eshikkacha jonli kuzatuv bilan yetkazing.',
      appStoreBtn: 'App Store’dan yuklab olish',
      googlePlayBtn: 'Google Play’dan olish',
      qrTitle: 'QR-kod orqali tez yuklab olish',
      bullet1: 'Ro‘yxatdan o‘tmasdan qidiruv',
      bullet2: 'Erkak va Ayol o‘rindiq tanlovi',
      bullet3: 'Avtomatik qayta tayinlash kafolati',
      mockupDateTrips: '12-noy · 4 safar',
      mockupPassengerCount: '1 yo‘lovchi',
      mockupDuration: '4 s 30 daq',
      mockupDoorToDoor: 'Eshikdan-eshikka',
      mockupOneSeatLeft: '1 joy qoldi',
      mockupSelectSeatBtn: 'Joy tanlash va band qilish',
      mockupTicketLabel: 'UYOL CHIPTA',
      mockupPassengerLabel: 'Yo‘lovchi:',
      mockupSeatLabel: 'O‘rindiq:',
      mockupSeatValue: '4 (Erkak joyi)',
      mockupStatusLabel: 'Holat:',
      mockupStatusValue: 'Tasdiqlandi',
      mockupViewTicketBtn: 'Chiptani to‘liq ko‘rish',
    },
    values: [
      {
        title: 'Haydovchini O‘zing Tanla',
        description: 'Avtomobil modeli, haydovchi reytingi va aniq jo‘nash vaqtini ko‘rib qaror qil.',
      },
      {
        title: 'Eshikdan-Eshikka',
        description: 'Avtovokzalda kutmasdan, belgilangan manzilingdan qulay chiqish va tushish.',
      },
      {
        title: 'Jonli Kuzatuv',
        description: 'Yo‘lovchi safarini ham, yuborgan jo‘natmangni ham xaritada onlayn kuzat.',
      },
      {
        title: 'Aniq Bildirishnomalar',
        description: 'Haydovchi avvalgi manzildan chiqqanda, 15 daq va 5 daq qolganda xabar ol.',
      },
    ],
    howItWorks: {
      kicker: 'Oddiy va Shaffof Jarayon',
      title: 'UYOL qanday ishlaydi?',
      subtitle:
        'Tasodifiy taksi chaqirish emas — shaharlararo safarlar uchun rejalashtirilgan, qulay va ishonchli transport tizimi.',
      tabPassenger: 'Yo‘lovchi sifatida safar',
      tabParcel: 'Jo‘natma yuborish',
      passengerSteps: [
        {
          num: '01',
          title: 'Yo‘nalish va sanani tanla',
          description: 'Chiqish va borish shahrini kiriting. Ro‘yxatdan o‘tmasdan barcha mavjud safarlarni ko‘ring.',
          badge: 'Ro‘yxatsiz ko‘rish',
        },
        {
          num: '02',
          title: 'Safar va haydovchini tanla',
          description: 'Avtomobil (sedan yoki mikroavtobus), reyting va jo‘nash vaqtiga qarab eng qulay reysni tanlang.',
          badge: 'Erkin tanlov',
        },
        {
          num: '03',
          title: 'Joy tanla va xavfsiz to‘la',
          description: 'Salon xaritasida erkak/ayol joylarini ko‘rib band qiling. OTP kod orqali kirib to‘lov qiling.',
          badge: 'OTP bilan kirish',
        },
        {
          num: '04',
          title: 'Jonli kuzat va yo‘lga chiq',
          description: 'Safar kuni 15 daq va 5 daq qolganda bildirishnoma oling. Raqamli chiptangiz doim ilovada.',
          badge: 'Aniq xabarlar',
        },
      ],
      parcelSteps: [
        {
          num: '01',
          title: 'Manzil va jo‘natmani kirit',
          description: 'Olib ketish va yetkazish manzillarini, yuboruvchi va qabul qiluvchi raqamlarini kiriting.',
          badge: 'Faqat jo‘natma',
        },
        {
          num: '02',
          title: 'Shu yo‘nalishda safar tanla',
          description: 'Shaharlararo yo‘nalishda ketayotgan mos haydovchini tanlang. Haydovchi buyurtma quvmaydi.',
          badge: 'Rejali safar',
        },
        {
          num: '03',
          title: 'Topshir va jonli kuzat',
          description: 'Yuboruvchi ham, qabul qiluvchi ham ilova va SMS havola orqali xaritada jonli kuzatadi.',
          badge: 'Ikki tomonlama kuzatuv',
        },
        {
          num: '04',
          title: '"Yetkazildi" tasdig‘i',
          description: 'Qabul qiluvchi kodni beradi, haydovchi "Yetkazildi" tugmasini bosib jarayonni yakunlaydi.',
          badge: 'Avto-tayinlash',
        },
      ],
      calloutPassengerTitle: 'Ro‘yxatdan o‘tmasdan darhol qidirishni boshlang',
      calloutPassengerDesc:
        'Safarlarni ko‘rish uchun profil yaratish shart emas. Kirish faqat band qilish bosqichida so‘raladi.',
      calloutPassengerBtn: 'Safarlarni ko‘rish',
      calloutParcelTitle: 'Tanlangan haydovchi bekor qilsa, tizim avtomatik yangi haydovchi tayinlaydi',
      calloutParcelDesc:
        'Jo‘natmangiz hech qachon yo‘lda qolmaydi — ilova darhol eng mos keyingi reysni faollashtiradi.',
      calloutParcelBtn: 'Jonli kuzatuvni ochish',
    },
    passenger: {
      kicker: 'Yo‘lovchilar Uchun',
      title: 'Yo‘lingni va o‘rindig‘ingni o‘zing tanla',
      subtitle:
        'Tasodifga o‘rin yo‘q. Haydovchi profili, avtomobil turi, jo‘nash vaqti va yoningizdagi joy holatini oldindan bilasiz.',
      noSignupNote: 'Ro‘yxatsiz ko‘rish mumkin',
      searchInAppBtn: 'Ilovada qidirish',
      tripsHeading: 'Safarlar (Reyslar)',
      sampleNote: 'Namuna yo‘nalishlar',
      doorToDoor: 'Eshikdan-Eshikka',
      oneSeatLeft: 'Faqat 1 joy qoldi',
      seatsLeftSuffix: 'bo‘sh joy',
      selectedLabel: 'Tanlandi',
      tapToSelectLabel: 'Tanlash uchun bosing',
      salonKicker: 'Interaktiv Salon',
      salonTitle: 'O‘rindiq Tanlash',
      legendMale: 'Erkak joyi',
      legendFemale: 'Ayol joyi',
      legendEmpty: 'Bo‘sh joy',
      legendYours: 'Sizning joyingiz',
      driverLabel: 'Haydovchi',
      frontLabel: 'Old tomon',
      selectedSeatLabel: 'Tanlangan joy:',
      notSelected: 'Tanlanmagan',
      fareLabel: 'Safar narxi:',
      viewTicketBtn: 'Chipta kartasini ko‘rish',
      seatTakenMaleAlert: 'Bu o‘rindiq allaqachon erkak yo‘lovchi tomonidan band qilingan.',
      seatTakenFemaleAlert: 'Bu o‘rindiq allaqachon ayol yo‘lovchi tomonidan band qilingan.',
      seatTitlePrefix: 'O‘rindiq №',
    },
    parcel: {
      kicker: 'Shaharlararo Yetkazish',
      titleLine1: 'Faqat jo‘natma.',
      titleLine2: 'Har bir qadamda jonli nazorat.',
      subtitle:
        'Kargo kutmasdan, shaxsiy jo‘natma va hujjatlaringizni shaharlararo harakatlanuvchi ishonchli haydovchilar bilan yuboring. Yuboruvchi va qabul qiluvchi xaritada jonli kuzatadi.',
      features: [
        {
          title: 'Avtomatik Yangi Haydovchi Tayinlash',
          description:
            'Tanlangan haydovchi kutilmaganda safarni bekor qilsa, tizim jo‘natmangizni darhol keyingi mos reysga yo‘naltiradi.',
        },
        {
          title: 'O‘z Vaqtida SMS va Ilova Xabarlari',
          description:
            'Haydovchi avvalgi manzildan chiqqanda, yetkazish joyiga 15 daqiqa va 5 daqiqa qolganda qabul qiluvchiga xabar boradi.',
        },
        {
          title: '"Yetkazildi" Xavfsizlik Tasdig‘i',
          description:
            'Haydovchi jo‘natmani topshirganda qabul qiluvchining tasdiq kodi bilan "Yetkazildi" tugmasini bosadi.',
        },
      ],
      openTrackingBtn: 'Kuzatuv namunasini ochish',
      sendParcelBtn: 'Jo‘natma yuborish',
      cardKicker: 'Jonli Xarita Kuzatuvi',
      cardTitle: 'Boku → Gabala Jo‘natmasi',
      statusInTransit: 'Yo‘lda',
      parcelTypeLabel: 'Jo‘natma turi:',
      parcelTypeValue: 'Hujjatlar va kichik quti',
      recipientLabel: 'Qabul qiluvchi:',
      etaLabel: 'Taxminiy yetib kelish:',
      etaValue: '14:05 (5 daqiqa qoldi)',
      openFullscreenBtn: 'Kuzatuv oynasini to‘liq ochish',
      checkpoints: [
        {
          title: 'Jo‘natma qabul qilindi',
          time: '10:15',
          status: 'completed',
          description: 'Haydovchi jo‘natmani Boku, Narimanov manzilida yuboruvchidan oldi.',
        },
        {
          title: 'Avvalgi manzildan chiqdi',
          time: '11:40',
          status: 'completed',
          description: 'Avtomobil magistral yo‘lga chiqdi va harakatlanmoqda.',
        },
        {
          title: 'Manzilga 15 daqiqa qoldi',
          time: '13:45',
          status: 'completed',
          description: 'Qabul qiluvchiga avtomatik SMS va ilova xabari yuborildi.',
        },
        {
          title: 'Manzilga 5 daqiqa qoldi',
          time: '13:55',
          status: 'current',
          description: 'Haydovchi belgilangan topshirish nuqtasiga yaqinlashmoqda.',
        },
        {
          title: 'Yetkazildi tasdig‘i',
          time: 'Taxminan 14:05',
          status: 'upcoming',
          description: 'Qabul qiluvchi kodni aytadi, haydovchi "Yetkazildi" tugmasini bosib tasdiqlaydi.',
        },
      ],
    },
    driver: {
      kicker: 'UYOL Driver',
      titleLine1: 'Buyurtma quvmaysan —',
      titleLine2: 'o‘z safaringni e’lon qilasan',
      subtitle:
        'UYOL Driver ilovasida tasodifiy buyurtma signallari kelmaydi. Shaharlararo safaringizni oldindan belgilaysiz, faqat joy yoki jo‘natma band qilinganda sokin bildirishnoma olasiz.',
      mascotBadge: 'UYOL HAYDOVCHISI',
      mascotDesc: 'O‘z vaqti va yo‘nalishining egasi. Erkin jadval va shaffof daromad.',
      minivanBadge: 'Safar modeli',
      minivanTypes: 'Sedan, Miniven va Mikroavtobuslar',
      benefits: [
        {
          title: 'Sokin Bildirishnomalar',
          description: 'Ortiqcha bezovtalik yo‘q. Faqat joy yoki jo‘natma band qilinganda xabar olasiz.',
        },
        {
          title: 'Yo‘lovchini O‘tkazish',
          description:
            'Fors-major holatida yo‘lovchi yoki jo‘natmani shu yo‘nalishdagi boshqa UYOL haydovchisiga rasmiy o‘tkaza olasiz.',
        },
        {
          title: 'Tez Tasdiqlash',
          description: 'Hujjatlar va avtomobil suratlarini ilova ichida qulay yuklang va tasdiq oling.',
        },
      ],
      howTitle: 'UYOL Driver ilovasi qanday ishlaydi?',
      howSubtitle: 'Haydovchilar uchun maxsus ishlab chiqilgan qulay boshqaruv va imkoniyatlar.',
      tabFlow: 'Safar E’loni',
      tabTransfer: 'Yo‘lovchi O‘tkazish',
      tabSignup: 'Ro‘yxat Bosqichlari',
      flowSteps: [
        {
          step: '1-QADAM',
          title: 'Safarni kiriting',
          description: 'Chiqish shahri, borish manzili, sana, vaqt va bo‘sh o‘rindiqlar sonini belgilang.',
        },
        {
          step: '2-QADAM',
          title: 'Band bildirishnomasini oling',
          description: 'Yo‘lovchi joy tanlasa yoki jo‘natma qo‘shsa, darhol ekranda xabar paydo bo‘ladi.',
        },
        {
          step: '3-QADAM',
          title: 'Yo‘lga chiqing va yakunlang',
          description: 'Ilova yo‘lovchilarga avtomatik yaqinlashish xabarini yuboradi. Yetganda "Yetkazildi" bilan yakunlang.',
        },
      ],
      transferTitle: 'Haydovchilar O‘rtasida Rasmiy Yo‘lovchi va Jo‘natma O‘tkazish',
      transferDesc:
        'Yo‘lda avtomobilda nosozlik yuz bersa yoki kutilmagan to‘siq chiqsa, yo‘lovchi va jo‘natmalar qiyin ahvolda qolmaydi. UYOL Driver ilovasidagi "O‘tkazish" bo‘limidan shu yo‘nalishdagi boshqa tasdiqlangan UYOL haydovchisiga o‘tkazing.',
      signupSteps: [
        { title: '1. Shaxsiy Ma’lumot', description: 'Shaxsiy guvohnoma va telefon raqami.' },
        { title: '2. Haydovchilik Guvohnomasi', description: 'Amaldagi haydovchilik guvohnomasi surati.' },
        { title: '3. Avtomobil Hujjatlari', description: 'Texnik pasport va sug‘urta polisi.' },
        { title: '4. Avtomobil Suratlari', description: 'Avtomobilning tashqi va salon suratlari.' },
      ],
      osNote: 'Haydovchi ilovasi iOS va Android qurilmalari uchun to‘liq moslashtirilgan.',
      downloadBtn: 'UYOL Driver’ni yuklab olish',
    },
    screens: {
      kicker: 'Interfeys Dizayni',
      title: 'Ilova Ekranlari bilan Tanishing',
      subtitle: 'Yo‘lovchi va haydovchilar uchun maxsus yaratilgan tushunarli, zamonaviy va tezkor mobil interfeys.',
      tabUser: 'User App (Yo‘lovchi & Jo‘natma)',
      tabDriver: 'Driver App (Haydovchi)',
      selectScreenLabel: 'Ekranni Tanlang',
      navItems: ['Asosiy', 'Safarlar', 'Chiptalarim', 'Profil'],
      items: [
        {
          id: 'screen-1',
          title: 'Safarlarni Qidirish va Tanlash',
          tag: 'Safarlar Ekrani',
          description: 'Shaharlararo yo‘nalishlar, jo‘nash vaqti va haydovchilarni filtrlab eng qulay reysni toping.',
          appType: 'user',
        },
        {
          id: 'screen-2',
          title: 'Erkak va Ayol O‘rindiq Tanlovi',
          tag: 'Afzalliklar & Joylar',
          description: 'Avtomobil saloni xaritasida o‘rindiqlar taqsimotini ko‘ring va qulay joyingizni tanlang.',
          appType: 'user',
        },
        {
          id: 'screen-3',
          title: 'Perforatsiyali Raqamli Chipta',
          tag: 'Chiptalarim',
          description: 'QR-kodli chiptangiz doim yoningizda. Jo‘nash vaqti va haydovchi ma’lumotlari bir joyda.',
          appType: 'user',
        },
        {
          id: 'screen-4',
          title: 'Jo‘natmani Jonli Kuzatish',
          tag: 'Eshikdan-Eshikka Yuk',
          description: 'Yuboruvchi va qabul qiluvchi uchun aniq xarita kuzatuvi hamda o‘z vaqtida ogohlantirishlar.',
          appType: 'user',
        },
        {
          id: 'screen-5',
          title: 'Safar E’lon Qilish Paneli',
          tag: 'Driver Reyslar',
          description: 'Haydovchilar borar shahri, vaqti va o‘rindiq narxini bir necha bosishda tizimga kiritadi.',
          appType: 'driver',
        },
        {
          id: 'screen-6',
          title: 'Faqat Band Qilinganda Xabar',
          tag: 'Sokin Haydovchi Rejimi',
          description: 'Ortiqcha buyurtma signallari bezovta qilmaydi — faqat joy yoki jo‘natma band bo‘lganda xabar keladi.',
          appType: 'driver',
        },
        {
          id: 'screen-7',
          title: 'Yo‘lovchi O‘tkazish Tizimi',
          tag: 'Haydovchilar Hamkorligi',
          description: 'Zarur bo‘lganda yo‘lovchi yoki jo‘natmani shu yo‘nalishdagi boshqa UYOL mashinasiga o‘tkazing.',
          appType: 'driver',
        },
      ],
      simTripsTitle: 'Safarlar',
      simSeatTitle: 'Joy Tanlash',
      simSeatPicked: 'O‘rindiq № 04 tanlandi',
      simCabinSplit: 'Salon Taqsimoti',
      simOtpNote: 'Band qilish tezkor OTP kod orqali tasdiqlanadi',
      simTicketTitle: 'Chipta № 04',
      simParcelTitle: 'Jo‘natma Kuzatuvi',
      simParcelStatus: '5 daqiqa qoldi',
      simParcelApproaching: 'Haydovchi manzilga yaqinlashmoqda',
      simParcelCode: 'Qabul qiluvchiga yuborilgan kod:',
      simDriverPostTitle: 'Safar E’lon Qilish',
      simDriverRoute: 'Yo‘nalish',
      simDriverTime: 'Jo‘nash Vaqti',
      simDriverSeats: 'Bo‘sh O‘rindiq',
      simDriverSeatsVal: '4 joy',
      simDriverCreateBtn: 'Safarni Yaratish',
      simDriverNotifTitle: 'Yangi Band Xabari',
      simDriverNotifBooked: 'O‘rindiq № 04 Band Qilindi',
      simDriverNotifPassenger: 'Yo‘lovchi: Nicat A. (Erkak joyi)',
      simDriverNotifTime: 'Jo‘nash: 10:00 · 20 Yanvar',
      simDriverTransferTitle: 'Yo‘lovchi O‘tkazish',
      simDriverTransferNear: 'Yaqindagi UYOL Mashinasi',
      simDriverTransferDist: 'Masofa: 1.2 km · 3 bo‘sh joy',
      simDriverTransferBtn: 'O‘tkazishni Tasdiqlash',
    },
    arMeasure: {
      badge: 'Tez kunda',
      titleLine1: 'Kamera bilan jo‘natma o‘lchami:',
      titleLine2: 'Chizg‘ichsiz va bir zumda',
      subtitle:
        'Telefon kamerasini jo‘natmaga tutib uzunlik, en va balandlikni avtomatik aniqlang; yukxonada qancha joy egallashini soniyalar ichida biling.',
      highlights: [
        { title: 'AR Texnologiyasi', description: 'Qurilma kamerasi orqali aniq 3D burchak aniqlash.' },
        { title: 'Avtomatik Hajm', description: 'Avtomobil yukxonasidagi joyni hisoblash.' },
        { title: 'Shaffof O‘lcham', description: 'Tortishuvsiz, standartlashtirilgan hajm.' },
      ],
      btnScanning: 'Kamera skanerlamoqda...',
      btnStart: 'Simulyatsiyani sinash',
      camStatusScanning: 'Tahlil qilinmoqda',
      camStatusReady: 'Tayyor',
      dimLength: 'Uzunlik: 38 sm',
      dimWidth: 'En: 25 sm',
      dimHeight: 'B: 20 sm',
      estVolumeLabel: 'Taxminiy Hajm',
      estVolumeValue: '19.0 Litr (O‘rta Quti)',
      camHint: 'Kamerani jo‘natmaning to‘rt burchagiga qarating',
    },
    faq: {
      kicker: 'Ko‘p Beriladigan Savollar',
      title: 'Savollaringizga aniq javoblar',
      subtitle: 'UYOL haqida eng ko‘p beriladigan savollarning javoblari bilan tanishing.',
      items: [
        {
          id: 'faq-1',
          question: 'UYOL oddiy taksi yoki avtovokzaldan nimasi bilan farq qiladi?',
          answer:
            'UYOL’da tasodifiy haydovchi tayinlanishini kutmaysiz. Barcha safarlar, avtomobil modeli, haydovchi reytingi va aniq jo‘nash vaqtini oldindan ko‘rib, o‘rindig‘ingizni o‘zingiz tanlaysiz.',
        },
        {
          id: 'faq-2',
          question: 'Safarlarni ko‘rish uchun ro‘yxatdan o‘tish shartmi?',
          answer:
            'Yo‘q! Barcha yo‘nalishlar va reyslarni ro‘yxatdan o‘tmasdan bemalol ko‘rishingiz mumkin. OTP kod orqali kirish faqat joy band qilish bosqichida so‘raladi.',
        },
        {
          id: 'faq-3',
          question: 'Erkak va ayol o‘rindiqlarini qanday ajrataman?',
          answer:
            'O‘rindiq tanlash ekranida band qilingan joylar jinsga mos ranglarda aniq ko‘rsatiladi — o‘zingiz yoki oilangiz uchun qulay joyni tanlaysiz.',
        },
        {
          id: 'faq-4',
          question: 'Jo‘natma yuborganda yuboruvchi ham, qabul qiluvchi ham kuzata oladimi?',
          answer:
            'Ha. Har ikki tomon jonli xarita va xabarlar oladi: haydovchi avvalgi manzildan chiqqanda, 15 daqiqa va 5 daqiqa qolganda ogohlantirish keladi.',
        },
        {
          id: 'faq-5',
          question: 'Tanlangan haydovchi safarni bekor qilsa jo‘natma nima bo‘ladi?',
          answer:
            'Avtomatik qayta tayinlash kafolati mavjud. Haydovchi bekor qilgan taqdirda tizim avtomatik ravishda shu yo‘nalishdagi keyingi mos haydovchini biriktiradi.',
        },
        {
          id: 'faq-6',
          question: 'Haydovchi tomonida safarlar qanday boshqariladi?',
          answer:
            'Haydovchi ilovasida tasodifiy "buyurtma" emas, rejali "safar" tushunchasi ishlaydi. Haydovchi yo‘nalishini e’lon qiladi va faqat band bo‘lganda bildirishnoma oladi.',
        },
        {
          id: 'faq-7',
          question: 'Haydovchi yo‘lovchini boshqa mashinaga qachon o‘tkaza oladi?',
          answer:
            'Texnik nosozlik yoki kutilmagan holatda haydovchi UYOL Driver ilovasidagi rasmiy o‘tkazish tizimi orqali yo‘lovchi yoki jo‘natmani shu yo‘nalishdagi boshqa UYOL haydovchisiga o‘tkazishi mumkin.',
        },
      ],
    },
    finalCta: {
      verticalBadge: 'Shaharlararo Yo‘l',
      titleLine1: 'Yo‘lingiz ochiq,',
      titleLine2: 'safaringiz qulay bo‘lsin',
      subtitle:
        'UYOL mobil ilovasini hoziroq yuklab oling. Shaharlararo safarlar va jo‘natmalaringizni o‘z vaqtida, ishonchli va shaffof boshqaring.',
      appStoreBtn: 'App Store’dan yuklab olish',
      googlePlayBtn: 'Google Play’dan olish',
      smsPrompt: 'Raqamingizni kiriting, to‘g‘ridan-to‘g‘ri yuklash havolasini yuboramiz:',
      smsSentBtn: 'Yuborildi',
      smsSendBtn: 'Yuborish',
      smsSuccessMsg: 'Havola SMS orqali yuborildi!',
      qrTitle: 'QR-kodni Skanerlang',
      qrDesc: 'Kamerangizni tutib ilovani darhol o‘rnating.',
    },
    footer: {
      tagline: 'Shaharlararo yo‘lovchi va jo‘natma tashish platformasi',
      copyright: 'UYOL. Barcha huquqlar himoyalangan.',
      privacy: 'Maxfiylik siyosati',
      deleteAccount: 'Hisobni o‘chirish',
      terms: 'Foydalanish shartlari',
    },
    downloadModal: {
      badge: 'Rasmiy Ilova',
      titleUser: 'UYOL Yo‘lovchi Ilovasini Yuklash',
      titleDriver: 'UYOL Driver Ilovasini Yuklash',
      subtitle: 'Qulay shaharlararo safarlar va ishonchli jo‘natma yetkazish cho‘ntagingizda.',
      tabUser: 'Yo‘lovchi & Jo‘natma',
      tabDriver: 'Haydovchi (Driver)',
      downloadLabel: 'Yuklab oling',
      getLabel: 'Oling',
      iosSoonAlert: 'UYOL iOS ilovasi tez orada App Store’da faol bo‘ladi. TestFlight uchun raqamingizni qoldiring.',
      androidSoonAlert: 'UYOL Android ilovasi tez orada Google Play’da faol bo‘ladi. Erta kirish uchun raqamingizni qoldiring.',
      qrTitle: 'Kamera bilan skanerlang',
      qrDesc: 'Telefon kamerasini QR-kodga tutib darhol yuklab olish sahifasiga o‘ting.',
      smsLabel: 'Yoki telefon raqamingizni yozing, havolani yuboramiz:',
      smsSendBtn: 'Yuborish',
      smsSentBtn: 'Yuborildi',
      smsSuccess: 'Yuklab olish havolasi raqamingizga yuborildi!',
      closeAria: 'Yopish',
    },
    ticketModal: {
      departureLabel: 'Chiqish',
      destinationLabel: 'Manzil',
      passengerLabel: 'Yo‘lovchi',
      seatTypeLabel: 'O‘rindiq & Turi',
      seatTypeValue: '№ 04 (Erkak joyi)',
      dateLabel: 'Sana',
      dateValue: '12-noyabr 2026',
      timeLabel: 'Chiqish vaqti',
      confirmedLabel: 'Tasdiqlandi',
      footerNote: 'Safar kuni haydovchi bilan aloqa va jonli xarita UYOL ilovasida faol bo‘ladi.',
      closeAria: 'Yopish',
    },
    trackingModal: {
      badge: 'Jonli Kuzatuv',
      title: 'Jo‘natmani Kuzatish',
      subtitle: 'Yuboruvchi ham, qabul qiluvchi ham real vaqt rejimida jo‘natma joyini kuzatadi.',
      placeholder: 'Kuzatuv kodi (mas: UY-84920)',
      checkBtn: 'Tekshirish',
      codeLabel: 'Kuzatuv Kodi',
      statusLabel: 'Joriy Holat',
      statusValue: 'Manzilga 5 daqiqa qoldi',
      senderLabel: 'Yuboruvchi',
      recipientLabel: 'Qabul qiluvchi',
      guaranteeTitle: 'Avtomatik Qayta Tayinlash Kafolati',
      guaranteeDesc:
        'Haydovchi bekor qilsa, tizim shu yo‘nalishdagi yangi haydovchini avtomatik tayinlaydi. Jo‘natma yo‘lda qolmaydi.',
      timelineTitle: 'Harakat Tarixi va Bildirishnomalar',
      codeNote: 'Topshirishda qabul qiluvchiga xavfsizlik kodi taqdim etiladi.',
      codeBadge: 'Tasdiq Kodi: 492',
      closeAria: 'Yopish',
    },
    cookie: {
      text: 'Ilova tajribangizni yaxshilash va qulay navigatsiyani ta’minlash uchun zarur cookie-fayllardan foydalanamiz.',
      accept: 'Qabul qilish',
    },
  },
};
