import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function CerezPolitikasi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Çerez Politikası | A&C Digital</title>
        <meta
          name="description"
          content="A&C Digital çerez politikası. Web sitemizde kullanılan çerezler ve veri toplama yöntemleri hakkında bilgi."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://acdigital.com.tr/cerez-politikasi" />
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
              Çerez Politikası
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Çerez Nedir?</h2>
              <p className="text-gray-400 leading-relaxed">
                Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla 
                cihazınıza (bilgisayar, tablet, telefon) kaydedilen küçük metin dosyalarıdır. 
                Çerezler, web sitesinin düzgün çalışmasını sağlamak, kullanıcı deneyimini 
                iyileştirmek ve site trafiğini analiz etmek için kullanılır.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. Çerez Türleri</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Zorunlu Çerezler",
                    desc: "Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Güvenlik, ağ yönetimi ve erişilebilirlik gibi amaçlarla kullanılır.",
                    gradient: "from-[#00D4FF]/20 to-[#4DB8FF]/20",
                    border: "[#00D4FF]"
                  },
                  {
                    title: "İşlevsel Çerezler",
                    desc: "Web sitesinin gelişmiş özelliklerini ve kişiselleştirmeyi sağlayan çerezlerdir. Tercihlerinizi hatırlar ve daha kişiselleştirilmiş bir deneyim sunar.",
                    gradient: "from-[#4DB8FF]/20 to-[#80D4FF]/20",
                    border: "[#4DB8FF]"
                  },
                  {
                    title: "Performans ve Analitik Çerezler",
                    desc: "Web sitesinin nasıl kullanıldığını anlamamızı sağlar. Ziyaretçilerin sayısı ve site içinde nasıl gezindikleri gibi bilgileri toplar.",
                    gradient: "from-[#80D4FF]/20 to-[#00D4FF]/20",
                    border: "[#80D4FF]"
                  },
                  {
                    title: "Reklam ve Hedefleme Çerezleri",
                    desc: "Size ve ilgi alanlarınıza uygun reklamlar göstermek için kullanılır. Reklam kampanyalarının etkinliğini ölçmemize yardımcı olur.",
                    gradient: "from-[#4DB8FF]/20 to-[#00D4FF]/20",
                    border: "[#4DB8FF]"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${item.gradient} backdrop-blur-sm rounded-xl p-6 border border-${item.border}/30`}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Çerez Saklama Süreleri</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white font-semibold">Çerez Türü</th>
                      <th className="text-left py-4 px-4 text-white font-semibold">Süre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Oturum Çerezleri", duration: "Tarayıcı kapatılana kadar" },
                      { type: "Kalıcı Çerezler", duration: "Belirtilen tarihe kadar (1-24 ay)" },
                      { type: "Analitik Çerezler", duration: "13-24 ay" },
                      { type: "Reklam Çerezleri", duration: "3-12 ay" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 text-gray-300">{row.type}</td>
                        <td className="py-4 px-4 text-gray-400 text-sm">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Kullandığımız Üçüncü Taraf Çerezler</h2>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Google Analytics",
                    desc: "Site trafiğini ve kullanıcı davranışlarını analiz etmek için kullanılır.",
                    link: "https://policies.google.com/privacy"
                  },
                  {
                    name: "Google Ads",
                    desc: "Reklam kampanyalarını yönetmek ve dönüşümleri takip etmek için kullanılır.",
                    link: "https://policies.google.com/technologies/ads"
                  },
                  {
                    name: "Facebook Pixel",
                    desc: "Facebook reklamlarının etkinliğini ölçmek ve hedef kitle oluşturmak için kullanılır.",
                    link: "https://www.facebook.com/privacy/explanation"
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-[#4DB8FF]/30 transition-all">
                    <h3 className="font-bold text-white mb-2">{tool.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{tool.desc}</p>
                    <a 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#4DB8FF] hover:text-[#80D4FF] font-semibold inline-flex items-center gap-1"
                    >
                      Gizlilik Politikası
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
              
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#80D4FF]/10 backdrop-blur-sm rounded-xl p-6 border border-[#4DB8FF]/30 mb-6">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Tarayıcı Ayarları
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Çoğu tarayıcı, çerezleri kabul etme veya reddetme seçenekleri sunar.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Google Chrome", link: "https://support.google.com/chrome/answer/95647" },
                    { name: "Mozilla Firefox", link: "https://support.mozilla.org/tr/kb/cerezleri-engelleme" },
                    { name: "Safari", link: "https://support.apple.com/tr-tr/HT201265" },
                    { name: "Microsoft Edge", link: "https://support.microsoft.com/tr-tr/microsoft-edge" }
                  ].map((browser, index) => (
                    <a 
                      key={index}
                      href={browser.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#4DB8FF] hover:text-[#80D4FF] text-sm font-semibold hover:underline"
                    >
                      {browser.name} →
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-500/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <h3 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Önemli Uyarı
                </h3>
                <p className="text-gray-300 text-sm">
                  Çerezleri devre dışı bırakırsanız, web sitemizin bazı özellikleri düzgün 
                  çalışmayabilir ve kullanıcı deneyiminiz olumsuz etkilenebilir.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. KVKK ve Kişisel Veriler</h2>
              <p className="text-gray-400 leading-relaxed">
                Çerezler aracılığıyla toplanan kişisel verileriniz, 6698 sayılı Kişisel Verilerin 
                Korunması Kanunu kapsamında işlenmektedir. Detaylı bilgi için 
                <Link to="/gizlilik-politikasi" className="text-[#4DB8FF] hover:text-[#80D4FF] font-semibold ml-1 underline">
                  Gizlilik Politikamızı
                </Link> inceleyebilirsiniz.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">7. İletişim</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Çerez kullanımı hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#80D4FF]/10 backdrop-blur-sm rounded-xl p-6 border border-[#4DB8FF]/30">
                <div className="space-y-3">
                  <p className="text-gray-300"><strong className="text-white">E-posta:</strong> info@acdigital.tech</p>
                  <p className="text-gray-300"><strong className="text-white">Telefon:</strong> +90 (532) 264 58 27</p>
                  <p className="text-gray-300"><strong className="text-white">Telefon:</strong> +90 (532) 529 90 96</p>
                  <p className="text-gray-300"><strong className="text-white">Adres:</strong> Sakarya, Türkiye</p>
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
