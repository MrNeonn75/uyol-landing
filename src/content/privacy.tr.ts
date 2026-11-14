import type { PrivacyContent } from './privacy.az.ts';

export const privacyTr: PrivacyContent = {
  lang: 'tr',
  title: 'UYOL – Gizlilik Politikası',
  lastUpdatedLabel: 'Son güncelleme:',
  lastUpdatedDate: '14 Kasım 2026',
  intro:
    'UYOL ("biz"), yolcular ve sürücüler için şehirler arası yolculukların ve paket gönderimlerinin düzenlenmesini sağlayan bir platformdur. Bu politika, UYOL mobil uygulamalarını (Yolcu ve Sürücü) ve uyol.app web sitesini kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar.',
  contactEmail: 'support@uyol.app',
  contactWeb: 'https://uyol.app',
  sections: [
    {
      id: 'tr-1',
      title: '1. Topladığımız Veriler',
      items: [
        {
          label: 'Hesap bilgileri:',
          text: 'ad, soyad, telefon numarası, e-posta [YOXLA: uygulama e-posta topluyor mu], profil fotoğrafı.',
        },
        {
          label: 'Sürücüler için ek bilgiler:',
          text: 'araç bilgileri (marka, yıl, plaka), araç fotoğrafları, yaş [YOXLA: hangi alanlar toplanıyor].',
        },
        {
          label: 'Üçüncü taraf bilgileri:',
          text: 'sürücünün yolculuğa eklediği yolcunun adı, telefon numarası ve cinsiyeti. Bu bilgiyi ekleyen kişi, gerekli izne sahip olmaktan sorumludur.',
        },
        {
          label: 'Konum (jeolokasyon) verisi:',
          text: 'biniş ve iniş adreslerinin seçilmesi, rotanın haritada gösterilmesi ve sürücünün canlı takibi için kesin ve yaklaşık konum. [YOXLA: uygulama arka planda konum verisi topluyor mu? Topluyorsa bunu açıkça belirtin.]',
        },
        {
          label: 'Bilet ve paket bilgileri:',
          text: 'yolculuk, bilet, koltuk seçimi, paketin gönderici ve alıcı bilgileri, gönderi açıklaması ve yüklediğiniz fotoğraflar.',
        },
        {
          label: 'Mesajlar:',
          text: 'yolcu ve sürücü arasındaki uygulama içi yazışmalar.',
        },
        {
          label: 'Ödeme bilgileri:',
          text: 'ödeme durumu ve tutarı. Kart bilgileri UYOL tarafından saklanmaz; ödemeyi [YOXLA: ödeme sağlayıcısı adı] işler.',
        },
        {
          label: 'Cihaz ve kullanım bilgileri:',
          text: 'cihaz modeli, işletim sistemi, anlık bildirim (push) belirteci, hata raporları [YOXLA: analitik/çökme araçları].',
        },
        {
          label: 'Kamera ve fotoğraflar:',
          text: 'yalnızca paket fotoğrafı yüklediğinizde veya profil fotoğrafı seçtiğinizde, izin verdiğiniz takdirde.',
        },
      ],
    },
    {
      id: 'tr-2',
      title: '2. Verilerin Kullanım Amaçları',
      items: [
        { text: 'yolculukların ve paket teslimatlarının düzenlenmesi, rezervasyon ve teslimat;' },
        { text: 'sürücü ve yolcu arasında iletişim (arama, mesaj);' },
        { text: 'yolculuğun harita üzerinde takibi ve bildirimlerin gönderilmesi;' },
        { text: 'hesap ve ödeme güvenliği, dolandırıcılığın önlenmesi;' },
        { text: 'müşteri desteği ve hizmetin iyileştirilmesi;' },
        { text: 'yasal yükümlülüklerin yerine getirilmesi.' },
      ],
    },
    {
      id: 'tr-3',
      title: '3. Verilerin Paylaşılması',
      paragraphs: [
        'Kişisel verilerinizi reklam amacıyla satmıyoruz. Veriler yalnızca şu taraflarla paylaşılır:',
      ],
      items: [
        {
          text: 'yolculuğa katılan diğer taraf (ör. sürücüyle yolcunun adı ve biniş adresi; yolcuyla sürücünün adı ve araç bilgileri);',
        },
        {
          text: 'hizmet sağlayıcılar: harita ve navigasyon [YOXLA: Google Maps vb.], ödeme [YOXLA], bildirim ve barındırma [YOXLA: Firebase vb.], yalnızca hizmeti sunmak için gereken ölçüde;',
        },
        {
          text: 'kanunen zorunlu olduğunda yetkili resmi makamlar.',
        },
      ],
      afterParagraphs: [
        'Haritadaki "Waze ile aç" özelliğini kullandığınızda adres bilgisi Waze’e aktarılır ve ilgili hizmetin kendi gizlilik politikası uygulanır.',
      ],
    },
    {
      id: 'tr-4',
      title: '4. Güvenlik',
      paragraphs: [
        'Veri aktarımı HTTPS/TLS ile korunmaktadır. Erişim yetkileri sınırlandırılmıştır. Hiçbir sistem %100 güvenli olmadığından mutlak güvenlik garantisi veremeyiz.',
      ],
    },
    {
      id: 'tr-5',
      title: '5. Saklama Süresi',
      paragraphs: [
        'Veriler hesabınız aktif olduğu sürece ve hizmeti sunmak için gereken süre boyunca saklanır. Hesap silindiğinde kişisel veriler [YOXLA: N gün] içinde silinir. Kanunen saklanması gereken veriler (ör. ödeme kayıtları) istisnadır. [YOXLA: kesin süreler]',
      ],
    },
    {
      id: 'tr-6',
      title: '6. Haklarınız',
      paragraphs: [
        'Verilerinize erişme, düzeltme, silme, işlenmesine itiraz etme ve verinin bir kopyasını talep etme hakkına sahipsiniz. Hesabı ve verileri silmek için: [YOXLA: uygulamada varsa "Profil → ... → Hesabı sil" yolunu yazın], /delete-account sayfasındaki adımları izleyin veya support@uyol.app adresine yazın.',
      ],
    },
    {
      id: 'tr-7',
      title: '7. Çocuklar',
      paragraphs: [
        'UYOL 18 yaşın altındaki kişiler için tasarlanmamıştır ve bilerek onlardan veri toplamayız. [YOXLA: yaş sınırı uygulama kurallarıyla uyumlu mu]',
      ],
    },
    {
      id: 'tr-8',
      title: '8. Politikadaki Değişiklikler',
      paragraphs: [
        'Değişiklik yapıldığında bu sayfadaki güncelleme tarihi yenilenecektir. Önemli değişiklikler hakkında uygulama içinden bilgilendirme yapılacaktır.',
      ],
    },
    {
      id: 'tr-9',
      title: '9. İletişim',
      paragraphs: [
        'E-posta: support@uyol.app',
        'Web: https://uyol.app',
      ],
    },
  ],
};
