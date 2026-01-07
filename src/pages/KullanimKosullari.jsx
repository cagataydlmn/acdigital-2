import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function KullanimKosullari() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kullanım Koşulları | A&C Digital</title>
        <meta
          name="description"
          content="A&C Digital web sitesi kullanım koşulları. Site kullanımına ilişkin şartlar ve koşullar."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://acdigital.com.tr/kullanim-kosullari" />
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
              Kullanım Koşulları
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Genel Hükümler</h2>
              <p className="text-gray-400 leading-relaxed">
                Bu web sitesi AC Digital tarafından işletilmektedir. Sitemizi ziyaret ederek ve 
                kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul 
                etmiyorsanız, lütfen sitemizi kullanmayınız.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. Hizmet Kapsamı</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                AC Digital aşağıdaki dijital pazarlama ve tasarım hizmetlerini sunmaktadır:
              </p>
              <ul className="space-y-3">
                {[
                  "Web Tasarım ve Yazılım Hizmetleri",
                  "Kurumsal Kimlik Tasarımı",
                  "E-Ticaret Çözümleri",
                  "SEO ve Dijital Pazarlama",
                  "Google Ads ve Meta Ads Yönetimi",
                  "Sosyal Medya Yönetimi"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Sitemizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
              </p>
              <ul className="space-y-3">
                {[
                  "Yanlış, yanıltıcı veya hukuka aykırı bilgi vermemek",
                  "Siteye zarar verebilecek virüs, kod veya zararlı yazılım yüklememek",
                  "Başkalarının fikri mülkiyet haklarını ihlal etmemek",
                  "Site güvenliğini tehlikeye atacak eylemlerden kaçınmak",
                  "Yasalara ve ahlak kurallarına uygun davranmak"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Fikri Mülkiyet Hakları</h2>
              <p className="text-gray-400 leading-relaxed">
                Bu web sitesinde yer alan tüm içerik (metin, grafik, logo, ikon, görsel, ses, video, 
                yazılım vb.) AC Digital'in veya lisans verenlerinin mülkiyetindedir ve telif hakkı 
                yasaları ile korunmaktadır. İçeriğin izinsiz kopyalanması, çoğaltılması, dağıtılması 
                veya kullanılması yasaktır.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. Ödeme ve Faturalama</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Hizmet bedelleri, sözleşmede belirlenen şartlar doğrultusunda tahsil edilir. 
                Ödemeler aşağıdaki yöntemlerle yapılabilir:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Banka havalesi / EFT",
                  "Kredi kartı",
                  "Nakit (şirket adresinde)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#4DB8FF] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Tüm ödemeler için yasal fatura düzenlenir ve e-Fatura sistemi üzerinden gönderilir.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. Gizlilik ve Veri Koruma</h2>
              <p className="text-gray-400 leading-relaxed">
                Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için 
                <Link to="/gizlilik-politikasi" className="text-[#4DB8FF] hover:text-[#80D4FF] font-semibold ml-1 underline">
                  Gizlilik Politikamızı
                </Link> inceleyiniz.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">7. Çerezler (Cookies)</h2>
              <p className="text-gray-400 leading-relaxed">
                Sitemizde çerez kullanımı hakkında bilgi almak için 
                <Link to="/cerez-politikasi" className="text-[#4DB8FF] hover:text-[#80D4FF] font-semibold ml-1 underline">
                  Çerez Politikamızı
                </Link> inceleyiniz.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">8. İletişim Bilgileri</h2>
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#80D4FF]/10 backdrop-blur-sm rounded-xl p-6 border border-[#4DB8FF]/30">
                <div className="space-y-3">
                  <p className="text-gray-300"><strong className="text-white">Adres:</strong> Sakarya, Türkiye</p>
                  <p className="text-gray-300"><strong className="text-white">E-posta:</strong> info@acdigital.tech</p>
                  <p className="text-gray-300"><strong className="text-white">Telefon:</strong> +90 (532) 264 58 27</p>
                  <p className="text-gray-300"><strong className="text-white">Telefon:</strong> +90 (532) 529 90 96</p>
                </div>
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
