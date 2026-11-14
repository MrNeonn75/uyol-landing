export interface TermsSection {
  title: string;
  paragraphs: string[];
}

export interface TermsLocale {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
}

export type TermsContent = Record<'az' | 'en' | 'ru' | 'tr' | 'uz', TermsLocale>;

export const termsContent: TermsContent = {
  az: {
    title: 'UYOL – İstifadə Şərtləri',
    lastUpdated: 'Son yenilənmə: 14 Noyabr 2026',
    intro:
      'Bu İstifadə Şərtləri UYOL mobil tətbiqlərindən (Sərnişin və Sürücü) və uyol.app veb-saytından istifadə qaydalarını müəyyən edir.',
    sections: [
      {
        title: '1. Xidmətin Mahiyyəti',
        paragraphs: [
          'UYOL sərnişinlər və sürücülər arasında şəhərlərarası gedişlərin və bağlama daşınmasının planlaşdırılması və bron edilməsi üçün rəqəmsal platformadır.',
        ],
      },
      {
        title: '2. İstifadəçi Hesabı və Məsuliyyət',
        paragraphs: [
          'İstifadəçilər qeydiyyat və bron mərhələsində düzgün telefon nömrəsi və şəxsi məlumatlar təqdim etməlidirlər. 18 yaşdan kiçik şəxslər platformada müstəqil hesab yarada bilməzlər.',
        ],
      },
      {
        title: '3. Gedişlər, Biletlər və Bağlamalar',
        paragraphs: [
          'Sərnişinlər mövcud gedişlər arasından sürücünü və yeri özləri seçir. Bağlama daşınması yalnız qanunla qadağan olunmamış şəxsi bağlama və sənədlərə şamil edilir.',
        ],
      },
      {
        title: '4. Ləğvetmə və Ötürmə',
        paragraphs: [
          'Sürücü gedişi ləğv etdikdə bağlama üçün sistem avtomatik yeni sürücü təyin edə bilər. Texniki və ya fors-major hallarda sürücü sərnişini eyni istiqamətdəki digər UYOL sürücüsünə rəsmi sistemlə ötürə bilər.',
        ],
      },
      {
        title: '5. Əlaqə',
        paragraphs: [
          'Şərtlərlə bağlı suallar üçün: support@uyol.app · https://uyol.app',
        ],
      },
    ],
  },
  en: {
    title: 'UYOL – Terms of Service',
    lastUpdated: 'Last updated: November 14, 2026',
    intro:
      'These Terms of Service govern the use of the UYOL mobile applications (Passenger and Driver) and the uyol.app website.',
    sections: [
      {
        title: '1. Nature of the Service',
        paragraphs: [
          'UYOL is a digital platform enabling passengers and drivers to schedule, book, and coordinate intercity rides and parcel deliveries.',
        ],
      },
      {
        title: '2. Accounts and Responsibility',
        paragraphs: [
          'Users must provide an accurate phone number and personal details during registration and booking. Persons under 18 years of age may not create independent accounts.',
        ],
      },
      {
        title: '3. Rides, Tickets, and Parcels',
        paragraphs: [
          'Passengers freely select their driver, trip, and seat. Parcel transport applies strictly to lawful personal parcels and documents.',
        ],
      },
      {
        title: '4. Cancellations and Transfers',
        paragraphs: [
          'If a driver cancels a trip, the system may automatically reassign a parcel to another available driver. In technical or force majeure situations, a driver may transfer a passenger to another UYOL driver on the same route.',
        ],
      },
      {
        title: '5. Contact',
        paragraphs: [
          'For questions regarding these terms: support@uyol.app · https://uyol.app',
        ],
      },
    ],
  },
  ru: {
    title: 'UYOL – Условия использования',
    lastUpdated: 'Последнее обновление: 14 ноября 2026',
    intro:
      'Настоящие Условия использования регулируют порядок пользования мобильными приложениями UYOL (Пассажир и Водитель) и сайтом uyol.app.',
    sections: [
      {
        title: '1. Суть сервиса',
        paragraphs: [
          'UYOL — цифровая платформа, позволяющая пассажирам и водителям планировать, бронировать и координировать междугородние поездки и доставку посылок.',
        ],
      },
      {
        title: '2. Аккаунт и ответственность',
        paragraphs: [
          'Пользователи обязаны указывать достоверный номер телефона и персональные данные при регистрации и бронировании. Лица младше 18 лет не могут создавать самостоятельные аккаунты.',
        ],
      },
      {
        title: '3. Поездки, билеты и посылки',
        paragraphs: [
          'Пассажиры самостоятельно выбирают водителя, рейс и место. Перевозка посылок распространяется исключительно на законные личные посылки и документы.',
        ],
      },
      {
        title: '4. Отмена и передача пассажира',
        paragraphs: [
          'Если водитель отменяет поездку, система может автоматически назначить другого доступного водителя для посылки. В технических или форс-мажорных ситуациях водитель может официально передать пассажира другому водителю UYOL по тому же маршруту.',
        ],
      },
      {
        title: '5. Контакты',
        paragraphs: [
          'По вопросам, связанным с данными условиями: support@uyol.app · https://uyol.app',
        ],
      },
    ],
  },
  tr: {
    title: 'UYOL – Kullanım Koşulları',
    lastUpdated: 'Son güncelleme: 14 Kasım 2026',
    intro:
      'Bu Kullanım Koşulları, UYOL mobil uygulamalarının (Yolcu ve Sürücü) ve uyol.app web sitesinin kullanım kurallarını belirler.',
    sections: [
      {
        title: '1. Hizmetin Niteliği',
        paragraphs: [
          'UYOL, yolcular ve sürücüler arasında şehirler arası yolculukların ve paket teslimatlarının planlanması ve rezerve edilmesi için dijital bir platformdur.',
        ],
      },
      {
        title: '2. Kullanıcı Hesabı ve Sorumluluk',
        paragraphs: [
          'Kullanıcılar kayıt ve rezervasyon aşamasında doğru telefon numarası ve kişisel bilgiler sunmalıdır. 18 yaşından küçük kişiler platformda bağımsız hesap oluşturamaz.',
        ],
      },
      {
        title: '3. Yolculuklar, Biletler ve Paketler',
        paragraphs: [
          'Yolcular mevcut seferler arasından sürücüyü ve koltuğu kendileri seçer. Paket taşımacılığı yalnızca yasalara aykırı olmayan kişisel paket ve belgeler için geçerlidir.',
        ],
      },
      {
        title: '4. İptal ve Aktarım',
        paragraphs: [
          'Sürücü yolculuğu iptal ettiğinde sistem paket için otomatik olarak yeni bir sürücü atayabilir. Teknik veya mücbir sebep durumlarında sürücü, yolcuyu aynı yöndeki başka bir UYOL sürücüsüne resmi sistem üzerinden aktarabilir.',
        ],
      },
      {
        title: '5. İletişim',
        paragraphs: [
          'Koşullarla ilgili sorular için: support@uyol.app · https://uyol.app',
        ],
      },
    ],
  },
  uz: {
    title: 'UYOL – Foydalanish Shartlari',
    lastUpdated: 'So‘nggi yangilanish: 14-noyabr 2026',
    intro:
      'Ushbu Foydalanish Shartlari UYOL mobil ilovalaridan (Yo‘lovchi va Haydovchi) va uyol.app veb-saytidan foydalanish qoidalarini belgilaydi.',
    sections: [
      {
        title: '1. Xizmatning Mazmuni',
        paragraphs: [
          'UYOL — yo‘lovchilar va haydovchilar o‘rtasida shaharlararo safarlar va jo‘natmalarni rejalashtirish hamda band qilish uchun raqamli platformadir.',
        ],
      },
      {
        title: '2. Foydalanuvchi Hisobi va Mas’uliyat',
        paragraphs: [
          'Foydalanuvchilar ro‘yxatdan o‘tish va band qilish bosqichida to‘g‘ri telefon raqami va shaxsiy ma’lumotlarni taqdim etishlari shart. 18 yoshga to‘lmagan shaxslar platformada mustaqil hisob yarata olmaydilar.',
        ],
      },
      {
        title: '3. Safarlar, Chiptalar va Jo‘natmalar',
        paragraphs: [
          'Yo‘lovchilar mavjud safarlar orasidan haydovchi va o‘rindiqni o‘zlari tanlaydilar. Jo‘natma tashish faqat qonunchilik bilan taqiqlanmagan shaxsiy jo‘natma va hujjatlarga nisbatan qo‘llaniladi.',
        ],
      },
      {
        title: '4. Bekor Qilish va O‘tkazish',
        paragraphs: [
          'Haydovchi safarni bekor qilganda tizim jo‘natma uchun avtomatik ravishda yangi haydovchi tayinlashi mumkin. Texnik yoki fors-major holatlarda haydovchi yo‘lovchini shu yo‘nalishdagi boshqa UYOL haydovchisiga rasmiy tizim orqali o‘tkazishi mumkin.',
        ],
      },
      {
        title: '5. Aloqa',
        paragraphs: [
          'Shartlar yuzasidan savollar uchun: support@uyol.app · https://uyol.app',
        ],
      },
    ],
  },
};
