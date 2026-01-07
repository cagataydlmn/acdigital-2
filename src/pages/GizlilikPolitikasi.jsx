import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function GizlilikPolitikasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | A&C Digital - KVKK Uyumlu</title>
        <meta
          name="description"
          content="A&C Digital gizlilik politikası. Kişisel verilerinizin korunması ve KVKK uyumlu veri işleme süreçleri hakkında bilgi."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://acdigital.com.tr/gizlilik-politikasi" />
      </Helmet>
      <div className="min-h-screen text-white relative pt-20" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-gray-400">Yasal</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
              Gizlilik Politikası
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">Son Güncelleme: 29 Aralık 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Giriş</h2>
              <p className="text-gray-400 leading-relaxed">
                AC Digital olarak, kişisel verilerinizin güvenliği bizim için son derece önemlidir. 
                Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
                uyarınca kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve 
                korunduğunu açıklamaktadır.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. Veri Sorumlusu</h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="space-y-3">
                  <p className="text-gray-400"><strong className="text-white">Şirket Unvanı:</strong> AC Digital</p>
                  <p className="text-gray-400"><strong className="text-white">Adres:</strong> İstanbul, Türkiye</p>
                  <p className="text-gray-400"><strong className="text-white">E-posta:</strong> info@acdigital.com</p>
                  <p className="text-gray-400"><strong className="text-white">Telefon:</strong> +90 (555) 123 45 67</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Toplanan Kişisel Veriler</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Hizmetlerimizi sunabilmek için aşağıdaki kişisel verilerinizi toplayabiliriz:
              </p>
              <ul className="space-y-3">
                {[
                  "Kimlik Bilgileri (ad, soyad, T.C. kimlik numarası)",
                  "İletişim Bilgileri (telefon, e-posta, adres)",
                  "Müşteri İşlem Bilgileri (hizmet talepleri, sözleşmeler)",
                  "Finansal Bilgiler (fatura, ödeme bilgileri)",
                  "Pazarlama Bilgileri (tercihler, ilgi alanları)",
                  "İşlem Güvenliği Bilgileri (IP adresi, çerez verileri)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#4DB8FF] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="space-y-3">
                {[
                  "Hizmet sözleşmelerinin kurulması ve ifası",
                  "Müşteri memnuniyetinin sağlanması",
                  "İletişim faaliyetlerinin yürütülmesi",
                  "Pazarlama ve reklam faaliyetlerinin gerçekleştirilmesi",
                  "Yasal yükümlülüklerin yerine getirilmesi",
                  "İş süreçlerinin iyileştirilmesi ve geliştirilmesi",
                  "Bilgi güvenliğinin sağlanması"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#4DB8FF] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. Kişisel Verilerin Aktarılması</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak:
              </p>
              <ul className="space-y-3">
                {[
                  "İş ortaklarımıza (hosting sağlayıcılar, ödeme sistemleri)",
                  "Yasal yükümlülükler gereği kamu kurum ve kuruluşlarına",
                  "Hukuki işlemlerin yürütülmesi için yetkili mercilere",
                  "Açık rızanızın bulunması halinde üçüncü kişilere aktarılabilir"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#4DB8FF] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. KVKK Kapsamındaki Haklarınız</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="space-y-3">
                {[
                  "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                  "İşlenmişse buna ilişkin bilgi talep etme",
                  "İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
                  "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
                  "Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme",
                  "KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
                  "Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme",
                  "İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğması halinde itiraz etme",
                  "Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-[#4DB8FF] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">7. Veri Güvenliği</h2>
              <p className="text-gray-400 leading-relaxed">
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktayız. 
                Bu tedbirler arasında SSL şifreleme, güvenlik duvarları, erişim kontrolleri ve 
                düzenli güvenlik denetimleri bulunmaktadır.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">8. İletişim</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Gizlilik Politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#80D4FF]/10 backdrop-blur-sm rounded-xl p-6 border border-[#4DB8FF]/30">
                <div className="space-y-3">
                  <p className="text-gray-300"><strong className="text-white">E-posta:</strong> info@acdigital.com</p>
                  <p className="text-gray-300"><strong className="text-white">Telefon:</strong> +90 (555) 123 45 67</p>
                  <p className="text-gray-300"><strong className="text-white">Adres:</strong> İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">İletişim Bilgilerimiz</h3>
                  <p className="text-gray-400"><strong className="text-white">Adres:</strong> Sakarya, Türkiye</p>
                  <p className="text-gray-400"><strong className="text-white">E-posta:</strong> info@acdigital.tech</p>
                  <p className="text-gray-400"><strong className="text-white">Telefon:</strong> +90 (532) 264 58 27</p>
                  <p className="text-gray-400"><strong className="text-white">Telefon:</strong> +90 (532) 529 90 96</p>
                </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] text-gray-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>

        </div>
      </section>
    </div>
    </>
  );
}
