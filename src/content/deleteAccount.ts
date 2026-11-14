export interface DeleteAccountLocale {
  title: string;
  lastUpdated: string;
  intro: string;
  stepsTitle: string;
  steps: string[];
  emailGuideTitle: string;
  emailGuide: string[];
  deletedTitle: string;
  deletedItems: string[];
  retainedTitle: string;
  retainedItems: string[];
  timeframeTitle: string;
  timeframeText: string;
}

export type DeleteAccountContent = Record<'az' | 'en' | 'ru' | 'tr' | 'uz', DeleteAccountLocale>;

export const deleteAccountContent: DeleteAccountContent = {
  az: {
    title: 'UYOL – Hesabı və Məlumatları Silmək',
    lastUpdated: 'Son yenilənmə: 14 Noyabr 2026',
    intro:
      'UYOL hesabınızı (Sərnişin və ya Sürücü) və onunla əlaqəli şəxsi məlumatları aşağıdakı addımlarla silə bilərsiniz.',
    stepsTitle: '1. Tətbiq daxilindən və ya e-poçtla sorğu göndərmək',
    steps: [
      'Tətbiq daxilində: [YOXLA: tətbiqdə həqiqətən varsa "Profil → Ayarlar → Hesabı sil" yolunu təsdiqlə] bölməsinə keçərək silmə əməliyyatını təsdiqləyin.',
      'Və ya qeydiyyatda olan telefon nömrənizlə support@uyol.app ünvanına e-poçt göndərin.',
    ],
    emailGuideTitle: '2. E-poçt müraciətində nə yazılmalıdır?',
    emailGuide: [
      'Mövzu (Subject): "Hesabın silinməsi sorğusu"',
      'Tətbiqdə qeydiyyatda olan telefon nömrəniz (+994...)',
      'Ad və soyadınız (təsdiq üçün)',
      'Hansı tətbiq hesabının silinəcəyi (UYOL Sərnişin və ya UYOL Sürücü)',
    ],
    deletedTitle: '3. Hansı məlumatlar silinir?',
    deletedItems: [
      'Ad, soyad, telefon nömrəsi, e-poçt və profil şəkli',
      'Sürücü üçün avtomobil məlumatları və avtomobil şəkilləri',
      'Push bildiriş tokenləri və tətbiq daxili seçimlər',
      'Gələcək gediş elanları və aktiv olmayan axtarış məlumatları',
    ],
    retainedTitle: '4. Hansı məlumatlar saxlanılır və niyə?',
    retainedItems: [
      'Qanunvericiliklə tələb olunan ödəniş və maliyyə qeydləri',
      'Aktiv mübahisələr, təhlükəsizlik və saxtakarlığın qarşısının alınması ilə bağlı əməliyyat jurnalları',
    ],
    timeframeTitle: '5. Silinmə müddəti',
    timeframeText:
      'Sorğunuz təsdiqləndikdən sonra şəxsi məlumatlarınız [YOXLA: N gün / məsələn 30 gün] ərzində sistemlərimizdən silinir.',
  },
  en: {
    title: 'UYOL – Delete Account and Data',
    lastUpdated: 'Last updated: November 14, 2026',
    intro:
      'You can request deletion of your UYOL account (Passenger or Driver) and associated personal data using the steps below.',
    stepsTitle: '1. In-App Deletion or Email Request',
    steps: [
      'In the app: [YOXLA: confirm exact path if available, e.g., "Profile → Settings → Delete account"] and confirm your deletion request.',
      'Or send an email to support@uyol.app from your email address with your registered phone number.',
    ],
    emailGuideTitle: '2. What to Include in Your Email Request',
    emailGuide: [
      'Subject: "Account Deletion Request"',
      'Your registered phone number in the app (+994...)',
      'Your full name (for verification)',
      'Which app account you want deleted (UYOL Passenger or UYOL Driver)',
    ],
    deletedTitle: '3. Data That Will Be Deleted',
    deletedItems: [
      'First name, last name, phone number, email, and profile photo',
      'Driver vehicle information and vehicle photos',
      'Push notification tokens and in-app preferences',
      'Upcoming trip listings and inactive search data',
    ],
    retainedTitle: '4. Data Retained and Why',
    retainedItems: [
      'Payment and financial transaction records required by applicable law',
      'Logs related to active disputes, safety incidents, and fraud prevention',
    ],
    timeframeTitle: '5. Deletion Timeframe',
    timeframeText:
      'Once your request is verified, your personal data is deleted from our systems within [YOXLA: N days / e.g. 30 days].',
  },
  ru: {
    title: 'UYOL – Удаление аккаунта и данных',
    lastUpdated: 'Последнее обновление: 14 ноября 2026',
    intro:
      'Вы можете удалить свой аккаунт UYOL (Пассажир или Водитель) и связанные с ним персональные данные, выполнив следующие шаги.',
    stepsTitle: '1. Удаление в приложении или запрос по эл. почте',
    steps: [
      'В приложении: [YOXLA: подтвердите точный путь, если доступно, например «Профиль → Настройки → Удалить аккаунт»] и подтвердите удаление.',
      'Или отправьте письмо на support@uyol.app с указанием зарегистрированного номера телефона.',
    ],
    emailGuideTitle: '2. Что указать в письме',
    emailGuide: [
      'Тема: «Запрос на удаление аккаунта»',
      'Зарегистрированный в приложении номер телефона (+994...)',
      'Имя и фамилия (для подтверждения)',
      'Какой аккаунт необходимо удалить (UYOL Пассажир или UYOL Водитель)',
    ],
    deletedTitle: '3. Какие данные удаляются',
    deletedItems: [
      'Имя, фамилия, номер телефона, электронная почта и фото профиля',
      'Данные об автомобиле и фотографии автомобиля водителя',
      'Токены push-уведомлений и настройки приложения',
      'Предстоящие объявления о поездках и неактивные поисковые данные',
    ],
    retainedTitle: '4. Какие данные сохраняются и почему',
    retainedItems: [
      'Платежные и финансовые записи, хранение которых требуется по закону',
      'Журналы операций, связанные с активными спорами, безопасностью и предотвращением мошенничества',
    ],
    timeframeTitle: '5. Срок удаления',
    timeframeText:
      'После подтверждения запроса ваши персональные данные удаляются из наших систем в течение [YOXLA: N дней / например 30 дней].',
  },
  tr: {
    title: 'UYOL – Hesabı ve Verileri Silme',
    lastUpdated: 'Son güncelleme: 14 Kasım 2026',
    intro:
      'UYOL hesabınızı (Yolcu veya Sürücü) ve ilişkili kişisel verilerinizi aşağıdaki adımları izleyerek silebilirsiniz.',
    stepsTitle: '1. Uygulama İçi Silme veya E-posta Talebi',
    steps: [
      'Uygulama içinde: [YOXLA: uygulamada varsa kesin yolu doğrulayın, ör. "Profil → Ayarlar → Hesabı sil"] bölümüne giderek silme işlemini onaylayın.',
      'Veya kayıtlı telefon numaranızla birlikte support@uyol.app adresine e-posta gönderin.',
    ],
    emailGuideTitle: '2. E-posta Talebinde Neler Yer Almalıdır?',
    emailGuide: [
      'Konu (Subject): "Hesap Silme Talebi"',
      'Uygulamada kayıtlı telefon numaranız (+994...)',
      'Adınız ve soyadınız (doğrulama için)',
      'Hangi uygulama hesabının silineceği (UYOL Yolcu veya UYOL Sürücü)',
    ],
    deletedTitle: '3. Hangi Veriler Silinir?',
    deletedItems: [
      'Ad, soyad, telefon numarası, e-posta ve profil fotoğrafı',
      'Sürücü araç bilgileri ve araç fotoğrafları',
      'Anlık bildirim (push) belirteçleri ve uygulama içi tercihler',
      'Gelecek yolculuk ilanları ve aktif olmayan arama verileri',
    ],
    retainedTitle: '4. Hangi Veriler Neden Saklanır?',
    retainedItems: [
      'Yürürlükteki yasaların gerektirdiği ödeme ve mali işlem kayıtları',
      'Aktif anlaşmazlıklar, güvenlik ve dolandırıcılığı önleme ile ilgili işlem günlükleri',
    ],
    timeframeTitle: '5. Silme Süresi',
    timeframeText:
      'Talebiniz doğrulandıktan sonra kişisel verileriniz [YOXLA: N gün / örneğin 30 gün] içinde sistemlerimizden silinir.',
  },
  uz: {
    title: 'UYOL – Hisob va Ma’lumotlarni O‘chirish',
    lastUpdated: 'So‘nggi yangilanish: 14-noyabr 2026',
    intro:
      'Siz UYOL hisobingizni (Yo‘lovchi yoki Haydovchi) va unga bog‘liq shaxsiy ma’lumotlarni quyidagi bosqichlar orqali o‘chirishingiz mumkin.',
    stepsTitle: '1. Ilova ichida o‘chirish yoki e-pochta orqali so‘rov yuborish',
    steps: [
      'Ilova ichida: [YOXLA: ilovada mavjud bo‘lsa aniq yo‘lni tasdiqlang, masalan "Profil → Sozlamalar → Hisobni o‘chirish"] bo‘limiga o‘tib o‘chirishni tasdiqlang.',
      'Yoki ro‘yxatdan o‘tgan telefon raqamingizni ko‘rsatgan holda support@uyol.app manziliga xat yuboring.',
    ],
    emailGuideTitle: '2. E-pochta murojaatida nimalar yozilishi kerak?',
    emailGuide: [
      'Mavzu (Subject): "Hisobni o‘chirish so‘rovi"',
      'Ilovada ro‘yxatdan o‘tgan telefon raqamingiz (+994...)',
      'Ism va familiyangiz (tasdiqlash uchun)',
      'Qaysi ilova hisobi o‘chirilishi kerakligi (UYOL Yo‘lovchi yoki UYOL Haydovchi)',
    ],
    deletedTitle: '3. Qaysi ma’lumotlar o‘chiriladi?',
    deletedItems: [
      'Ism, familiya, telefon raqami, e-pochta va profil surati',
      'Haydovchi uchun avtomobil ma’lumotlari va avtomobil suratlari',
      'Push-bildirishnoma tokenlari va ilova ichidagi sozlamalar',
      'Kelgusi safar e’lonlari va faol bo‘lmagan qidiruv ma’lumotlari',
    ],
    retainedTitle: '4. Qaysi ma’lumotlar saqlanadi va nima uchun?',
    retainedItems: [
      'Qonunchilik bilan talab qilinadigan to‘lov va moliyaviy yozuvlar',
      'Faol nizolar, xavfsizlik va firibgarlikning oldini olish bilan bog‘liq operatsiya jurnallari',
    ],
    timeframeTitle: '5. O‘chirish muddati',
    timeframeText:
      'So‘rovingiz tasdiqlanganidan so‘ng shaxsiy ma’lumotlaringiz [YOXLA: N kun / masalan 30 kun] ichida tizimlarimizdan o‘chiriladi.',
  },
};
