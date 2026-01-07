import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/**
 * Google Ads Landing Page (SEO Odaklı + Kurumsal + FAQ + JSON-LD Schema)
 * - H1/H2/H3 hiyerarşisi doğru
 * - Sakarya lokal SEO kelimeleri doğal geçiyor
 * - FAQ Accordion + FAQPage Schema ekli
 */

export default function GoogleAds() {
  const [openFaq, setOpenFaq] = useState(0);

  // FAQ verileri
  const faqs = useMemo(
    () => [
      {
        q: "Sakarya’da Google Ads reklamları ne kadar sürede sonuç verir?",
        a: "Google Ads kampanyalarında ilk 7–14 gün içinde veri toplama ve öğrenme süreci tamamlanır. 30 gün içerisinde düzenli optimizasyon ile daha stabil performans elde edilir. Sonuçlar; sektör rekabeti, bütçe ve teklif stratejisine göre değişir.",
      },
      {
        q: "Google Ads bütçesi ne olmalı?",
        a: "Bütçe; sektör, hedef (satış/lead/arama), rekabet seviyesi ve hedeflenen lokasyonlara göre belirlenir. Sakarya merkezli yerel hedefleme ile daha optimize bütçelerle verim alınabilir. Önemli olan bütçeyi doğru kampanya türlerine dağıtmaktır.",
      },
      {
        q: "Reklam hesabı bana mı ait olacak?",
        a: "Evet. Reklam hesabı tamamen size ait olur. Biz ajans olarak kampanya kurulumu, optimizasyon ve raporlama süreçlerini yönetiriz. Böylece hem şeffaflık hem de veri sahipliği sizde kalır.",
      },
      {
        q: "Dönüşüm izleme kurulumu yapıyor musunuz?",
        a: "Evet. GA4 ve Google Tag Manager ile form doldurma, telefon araması, WhatsApp tıklaması gibi dönüşümleri ölçümleyerek performansı veri odaklı optimize ederiz.",
      },
      {
        q: "SEO mu Google Ads mi daha iyi?",
        a: "Google Ads hızlı sonuç verir, SEO ise uzun vadeli organik görünürlük sağlar. En iyi strateji genellikle SEO + Google Ads’i birlikte yürüterek hem kısa hem uzun vadeli büyüme sağlamaktır.",
      },
      {
        q: "Google Ads yönetimi aylık mı çalışılır?",
        a: "Evet. Google Ads sürekli analiz ve optimizasyon gerektirir. Aylık yönetim, düzenli iyileştirme, test ve raporlama süreçlerini kapsar. Böylece reklam bütçesi daha verimli kullanılır.",
      },
    ],
    []
  );

  // FAQ Schema (JSON-LD)
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };
  }, [faqs]);

  const services = [
    {
      title: "Arama Ağı Reklamları (Search)",
      desc: "Potansiyel müşterileriniz Google’da ürün veya hizmetinizi aradığı anda en üstte görünmenizi sağlıyoruz. Doğru anahtar kelime stratejisi ile yüksek niyetli kullanıcıları hedefleyerek dönüşüm odaklı kampanyalar oluşturuyoruz.",
      bullets: [
        "Anahtar kelime & rakip analizi",
        "Reklam metni optimizasyonu (CTR artırma)",
        "Negatif anahtar kelime ile bütçe koruma",
        "Dönüşüm izleme (GA4 / GTM) kurulumu",
      ],
    },
    {
      title: "Görüntülü Reklam Ağı (Display) & Remarketing",
      desc: "Marka bilinirliğinizi artırmak ve web sitenizi ziyaret eden kullanıcıları yeniden kazanmak için remarketing kampanyaları kuruyoruz. Doğru hedefleme ile görünürlüğü sürdürülebilir hale getiriyoruz.",
      bullets: [
        "Banner/creative önerileri",
        "Segment bazlı retargeting kurgusu",
        "Frekans kontrolü ile reklam yorgunluğu önleme",
        "Konum hedefleme (Sakarya ve ilçeler)",
      ],
    },
    {
      title: "YouTube Reklamları",
      desc: "Video reklamlar ile hedef kitlenize güçlü bir hikâye anlatımıyla ulaşın. YouTube reklamlarıyla marka bilinirliği, trafik ve lead hedeflerine yönelik stratejiler geliştiriyoruz.",
      bullets: [
        "TrueView / In-stream reklam kurguları",
        "İlgi alanı, demografi ve özel hedefleme",
        "Video açılış sayfası optimizasyon önerileri",
        "Ölçümlenebilir etkileşim & raporlama",
      ],
    },
    {
      title: "Shopping Reklamları (E-Ticaret)",
      desc: "E-ticaret siteleri için ürünlerinizi doğrudan Google’da öne çıkarıyoruz. Merchant Center kurulumundan feed optimizasyonuna kadar tüm süreci yönetiyoruz.",
      bullets: [
        "Merchant Center kurulumu ve doğrulama",
        "Ürün feed optimizasyonu",
        "ROAS odaklı teklif stratejileri",
        "Kategori bazlı performans iyileştirme",
      ],
    },
    {
      title: "Performance Max (PMax)",
      desc: "Google’ın yapay zekâ destekli Performance Max kampanyalarıyla Search, Display, YouTube ve Gmail kanallarında birleşik hedefleme sağlıyor; bütçeyi en iyi performansa yönlendiriyoruz.",
      bullets: [
        "Asset grupları & mesaj stratejisi",
        "Audience signal kurgusu",
        "Dönüşüm odaklı otomasyon",
        "Şeffaf raporlama ve optimizasyon",
      ],
    },
  ];

  const kpis = [
    { title: "Dönüşüm Başı Maliyet (CPA)", desc: "Maliyet/verim dengesini iyileştiririz." },
    { title: "Tıklama Başı Maliyet (CPC)", desc: "Gereksiz harcamaları azaltırız." },
    { title: "Dönüşüm Oranı (CVR)", desc: "Açılış sayfası & reklam uyumunu güçlendiririz." },
    { title: "ROAS / ROI", desc: "Reklam harcamasının geri dönüşünü takip ederiz." },
    { title: "Lead Kalitesi", desc: "Form/arama/WhatsApp kalitesini artırırız." },
    { title: "Yerel Performans", desc: "Sakarya merkezli lokasyon verilerini analiz ederiz." },
  ];

  return (
    <>
      <Helmet>
        <title>Sakarya Google Ads Yönetimi | A&C Digital - Google Reklam Ajansı</title>
        <meta
          name="description"
          content="Sakarya Google Ads yönetimi hizmetleri. Arama ağı, görüntülü reklam, YouTube ve Shopping kampanyaları ile ölçülebilir büyüme sağlayın."
        />
        <meta
          name="keywords"
          content="Sakarya Google Ads, Google reklam yönetimi, Google Ads ajansı Sakarya, arama reklamları, görüntülü reklam, YouTube reklamları"
        />
        <meta property="og:title" content="Sakarya Google Ads Yönetimi | A&C Digital" />
        <meta property="og:description" content="Google Ads kampanyalarınızı profesyonel yönetim ile ölçülebilir büyümeye dönüştürün." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/GoogleAds" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/GoogleAds" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: "relative" }}>
        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/googleads/hero-bg.jpg')] bg-cover bg-center opacity-25" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">
              Sakarya Google Ads Hizmeti
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4">
            Google Ads Yönetimi ile
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text font-bold text-transparent">
              Ölçülebilir Büyüme
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Sakarya merkezli ekibimizle Google Ads kampanyalarınızı uçtan uca yönetiyoruz.
            Arama Ağı, Görüntülü Reklam Ağı, YouTube ve Shopping kampanyalarıyla doğru kitleye doğru anda ulaşarak
            <span className="text-white font-semibold"> daha fazla talep, daha fazla satış ve daha yüksek dönüşüm</span> sağlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#analiz"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Ücretsiz Analiz Al
            </a>
            <a
              href="#hizmetler"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
            >
              Hizmetleri İncele
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-300">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Şeffaf Raporlama</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Dönüşüm Odaklı Optimizasyon</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Sakarya & Yerel Hedefleme</span>
          </div>
        </div>
      </section>

      {/* INTRO / SEO CONTENT */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Google Ads Nedir? İşletmelere Ne Kazandırır?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Google Ads, işletmelerin Google arama sonuçlarında, YouTube’da ve Google iş ortağı sitelerde reklam göstererek
              hedef kitlesine ulaşmasını sağlayan performans odaklı bir dijital reklam platformudur.
              Doğru stratejiyle yönetildiğinde Google Ads; form doldurma, telefon araması, WhatsApp mesajı ve satış gibi dönüşümleri artırır.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Özellikle <span className="text-white font-semibold">Sakarya</span> ve çevresinde yerel hedeflemeyle
              doğru kullanıcıya odaklanarak bütçeyi verimli kullanır, hızlı sonuç almanıza yardımcı olur.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sakarya’da Google Ads Yönetiminde Neden Biz?</h2>
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Veri odaklı stratejiyle kampanya planı oluştururuz.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Dönüşüm izleme kurulumlarıyla (GA4/GTM) ölçümleme yaparız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Reklam bütçenizi harcamak için değil, kârlı büyütmek için optimize ederiz.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Haftalık / aylık raporlama ile tam şeffaflık sağlarız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Sakarya merkezli hedefleme ile yerel müşteri kazanımını güçlendiririz.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Google Ads Hizmetlerimiz
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Arama, Görüntülü, YouTube, Shopping ve Performance Max kampanyalarıyla Google ekosisteminde 360° reklam yönetimi sunuyoruz.
              Hedefiniz ne olursa olsun (lead, satış, trafik) stratejiyi iş modelinize göre kurgularız.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((item, idx) => (
              <article
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2 text-gray-300">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-400 font-bold">➜</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Google Ads Yönetim Sürecimiz
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Her marka için aynı yöntemi uygulamıyoruz. Önce hedefi belirler, ölçümleme altyapısını kurar ve sürekli optimizasyonla performansı büyütürüz.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Keşif & Hedef", desc: "Hedef kitle ve dönüşüm hedeflerini belirleriz." },
              { step: "02", title: "Strateji", desc: "Sektör & rakip analiziyle plan çıkarırız." },
              { step: "03", title: "Kurulum", desc: "GA4/GTM, kampanya yapısı ve ölçümleme." },
              { step: "04", title: "Optimizasyon", desc: "A/B test, bütçe dağılımı ve iyileştirme." },
              { step: "05", title: "Raporlama", desc: "KPI bazlı şeffaf rapor ve aksiyon planı." },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Başarıyı Nasıl Ölçüyoruz? (KPI’lar)
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kampanyalar yalnızca tıklama almak için değil, iş hedeflerinize gerçek katkı sağlamak için yönetilir.
              Bu nedenle performansı net KPI’larla takip ederiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((k, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{k.title}</h3>
                <p className="text-gray-300 leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sıkça Sorulan Sorular (FAQ)
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Google Ads reklam yönetimi ile ilgili en çok merak edilen soruları sizin için yanıtladık.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/10 transition"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white text-base sm:text-lg">{f.q}</span>
                    <span className="text-gray-300 text-2xl leading-none">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className={`${isOpen ? "block" : "hidden"} px-6 pb-6`}>
                    <p className="text-gray-300 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="analiz" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600" />
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Ücretsiz Google Ads Analizi İster Misiniz?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Mevcut reklam performansınızı analiz edip, bütçenizin nerede kaybolduğunu ve hangi adımlarla daha iyi sonuç alabileceğinizi
                ücretsiz raporlayalım. Sakarya’da işletmenizi büyütmek için veriye dayalı bir yol haritası çıkaralım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/iletisim"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                >
                  Ücretsiz Analiz Talep Et
                </a>
                <a
                  href="tel:+905XXXXXXXXX"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                >
                  📞 Hemen Ara
                </a>
              </div>

              <p className="mt-6 text-sm text-white/80">
                📍 Sakarya Merkez • Google Reklam Yönetimi • Şeffaf Raporlama • Dönüşüm Odaklı Optimizasyon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Microcopy */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm leading-relaxed">
          Sakarya’da <strong className="text-gray-200">Google Ads yönetimi</strong>, <strong className="text-gray-200">Google reklam danışmanlığı</strong> ve{" "}
          <strong className="text-gray-200">Sakarya Google reklam ajansı</strong> hizmeti arıyorsanız bizimle iletişime geçebilirsiniz.
          Kampanyalarınızı hedeflerinize göre planlayarak maksimum verim almanızı sağlıyoruz.
        </div>
      </section>
    </div>
    </>
  );
}
