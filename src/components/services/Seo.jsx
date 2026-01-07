import { motion } from "framer-motion";
import { Search, TrendingUp, BarChart, Globe, Rocket, LineChart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Seo() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "SEO ne kadar sürede sonuç verir?",
      answer: "SEO, organik bir büyüme sürecidir ve genellikle 3-6 ay içinde belirgin sonuçlar görülmeye başlar. Ancak sektör, rekabet durumu, mevcut site yapısı gibi faktörlere göre bu süre değişebilir. Sakarya'da yerel SEO çalışmalarında daha hızlı sonuçlar alınabilir. İlk 2-3 ay içinde teknik iyileştirmeler ve içerik optimizasyonları tamamlanır, takip eden aylarda sıralama artışları gözlemlenir."
    },
    {
      question: "Sakarya SEO hizmeti fiyatları nasıl belirlenir?",
      answer: "SEO hizmet fiyatları; web sitenizin mevcut durumu, hedeflediğiniz anahtar kelimeler, rekabet yoğunluğu, sektör ve istenen hizmet kapsamına göre belirlenir. Yerel Sakarya SEO çalışmaları için paketler daha uygundur. Detaylı fiyat teklifi için sitenizi analiz etmemiz gerekir. Ücretsiz ön analiz ve teklif için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Yerel SEO ile genel SEO arasındaki fark nedir?",
      answer: "Yerel SEO, Sakarya ve çevresinde fiziksel olarak hizmet veren işletmeler için özelleştirilmiş bir stratejidir. 'Sakarya kuaför', 'Adapazarı restoran' gibi bölgesel aramalar hedeflenir, Google My Business optimizasyonu yapılır. Genel SEO ise coğrafi kısıtlama olmadan daha geniş kitlelere ulaşmayı hedefler. Sakarya'daki işletmeler için öncelikle yerel SEO stratejisi öneriyoruz."
    },
    {
      question: "SEO garantisi veriliyor mu?",
      answer: "SEO'da kesin sıralama garantisi vermek Google politikalarına aykırıdır ve etik değildir. Ancak, doğru strateji ve sürekli çalışma ile organik trafikte ve sıralamalarda iyileşme garantisi verebiliriz. Aylık raporlarla tüm çalışmaları şeffaf şekilde paylaşıyoruz. Hedeflerimize ulaşmak için sürekli optimizasyon ve A/B testleri yapıyoruz."
    },
    {
      question: "Hangi sektörlere SEO hizmeti veriyorsunuz?",
      answer: "E-ticaret, kurumsal firmalar, sağlık, eğitim, restoran, kuaför, güzellik merkezi, otomotiv, inşaat, hukuk, danışmanlık ve daha birçok sektörde Sakarya merkezli SEO çalışmaları yürütüyoruz. Her sektörün kendine özgü dinamikleri vardır ve stratejilerimizi buna göre özelleştiriyoruz. Sektörünüz ne olursa olsun, size özel bir SEO planı hazırlayabiliriz."
    },
    {
      question: "SEO raporu ne sıklıkla alırım?",
      answer: "Müşterilerimize aylık detaylı SEO performans raporları sunuyoruz. Bu raporlarda; anahtar kelime sıralamaları, organik trafik artışı, teknik iyileştirmeler, yapılan çalışmalar ve bir sonraki ay planlaması yer alır. Ayrıca Google Analytics ve Search Console verilerine erişiminizi sağlıyoruz. İstediğiniz zaman anlık durum hakkında bilgi alabilirsiniz."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sakarya SEO Hizmetleri | A&C Digital - Arama Motoru Optimizasyonu</title>
        <meta
          name="description"
          content="Sakarya SEO hizmetleri. Google arama sonuçlarında üst sıralarda yer alın. Teknik SEO, içerik optimizasyonu, yerel SEO ve performans analizi hizmetleri."
        />
        <meta
          name="keywords"
          content="Sakarya SEO, SEO hizmetleri Sakarya, arama motoru optimizasyonu, yerel SEO, teknik SEO, Google sıralama, organik trafik artışı"
        />
        <meta property="og:title" content="Sakarya SEO Hizmetleri | A&C Digital" />
        <meta property="og:description" content="Google arama sonuçlarında üst sıralarda yer alın. Profesyonel SEO hizmetleri." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/seo" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/seo" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">SEO Hizmetleri</span>
          </div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sakarya SEO
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text font-bold text-transparent">
              Hizmetleri
            </span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Google arama sonuçlarında üst sıralarda yer alın, organik trafiğinizi artırın
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Giriş Paragrafı */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            SEO (Arama Motoru Optimizasyonu), dijital dünyada markanızın görünürlüğünü artırmanın en etkili yollarından biridir.
            Özellikle <span className="text-yellow-400 font-semibold">Sakarya&apos;da hizmet veren işletmeler</span> için,
            doğru SEO stratejisi ile Google arama sonuçlarında üst sıralarda yer almak; daha fazla ziyaretçi,
            daha fazla telefon ve daha fazla satış anlamına gelir.
            Biz, Sakarya merkezli bir dijital ajans olarak{" "}
            <span className="text-yellow-400 font-semibold">
              teknik SEO altyapısından içerik stratejisine, backlink yönetiminden performans analizine
            </span>{" "}
            kadar tüm süreci uçtan uca yöneterek markanızın dijitalde parlamasını sağlıyoruz.
          </p>
        </motion.section>

        {/* Sakarya SEO Ajansı */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sakarya SEO Ajansı AC Dijital
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
            Sakarya SEO alanında, yerel ve bölgesel işletmeler için odaklı çözümler üretiyoruz.
            E-ticaret siteleri, kurumsal web siteleri, kuaför, restoran, butik, sağlık, eğitim ve daha birçok sektörde
            <span className="text-yellow-400 font-medium"> Sakarya merkezli SEO çalışmaları</span> yürütüyoruz.
            Amacımız sadece sıralama kazanmak değil; Sakarya ve çevresinde gerçekten iş getiren, ölçülebilir bir
            dijital görünürlük oluşturmak.
          </p>
        </motion.section>

        {/* Neden SEO Önemli */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Neden SEO Bu Kadar Önemli?
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
            Her gün milyonlarca kullanıcı Google&apos;da ihtiyaçlarına çözüm arıyor.
            Bu aramalarda üst sıralarda yer almak, markanız için{" "}
            <span className="text-yellow-400 font-medium">
              daha fazla görünürlük, güven ve satış potansiyeli
            </span>{" "}
            anlamına gelir. İyi optimize edilmiş bir web sitesi, reklam bütçesine
            bağımlılığı azaltır, uzun vadede sürdürülebilir organik trafik sağlar
            ve kullanıcı deneyimini güçlendirir.
          </p>
        </motion.section>

        {/* Avantajlar Kartları */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Search className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Görünürlük Artışı</h3>
            <p className="text-gray-400 leading-relaxed">
              SEO, web sitenizi Google ve diğer arama motorlarında daha görünür hale getirir.
              Özellikle Sakarya&apos;da hedeflediğiniz kitle arama yaptığında, markanızla karşılaşmalarını sağlar.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Organik Trafik</h3>
            <p className="text-gray-400 leading-relaxed">
              Doğru SEO stratejisiyle sitenize gelen organik trafiği artırır, reklam harcaması yapmadan
              daha fazla kullanıcıya ulaşırsınız. Yerel SEO ile Sakarya ve çevresinden nitelikli ziyaretçi çekebilirsiniz.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BarChart className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Yüksek Dönüşüm Oranı</h3>
            <p className="text-gray-400 leading-relaxed">
              SEO ile hedef kitlenize odaklanır, sitenize gelen ziyaretçilerin satışa dönüşme oranlarını artırırsınız.
              Sakarya&apos;da sunduğunuz ürün veya hizmetlere gerçekten ihtiyaç duyan kullanıcıları çekmek mümkündür.
            </p>
          </motion.div>
        </section>

        {/* SEO Süreci */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            SEO Sürecimiz Nasıl İşliyor?
          </h2>
          <div className="space-y-8 border-l-2 border-white/20 pl-8">
            <motion.div 
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="w-10 h-10 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">1. Analiz &amp; Teknik Denetim</h4>
                <p className="text-gray-400 leading-relaxed">
                  Öncelikle sitenizin mevcut SEO durumunu analiz ederiz. Teknik hatalar, indeksleme sorunları,
                  sayfa hızı ve mobil uyumluluk gibi unsurlar detaylı şekilde incelenir.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-10 h-10 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">2. Strateji &amp; İçerik Planlama</h4>
                <p className="text-gray-400 leading-relaxed">
                  Hedef kitlenizi belirleyip anahtar kelime analizi yaparız. Sakarya SEO çalışmalarında
                  yerel arama terimlerine odaklanarak içerik planlamasını buna göre kurgularız.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <LineChart className="w-10 h-10 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">3. Uygulama &amp; Optimizasyon</h4>
                <p className="text-gray-400 leading-relaxed">
                  Teknik düzeltmeler, meta açıklamaları, içerik optimizasyonu ve bağlantı yapılandırmaları
                  bu aşamada uygulanır.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <BarChart className="w-10 h-10 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">4. Ölçümleme &amp; Raporlama</h4>
                <p className="text-gray-400 leading-relaxed">
                  Tüm çalışmalar düzenli olarak izlenir, performans raporları sunulur ve SEO başarınızı artırmak için
                  sürekli iyileştirmeler yapılır.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Bölümü */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            SEO hizmetlerimiz hakkında merak ettiğiniz soruların cevapları
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Kapanış CTA */}
        <motion.section
          className="p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-md text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sakarya&apos;da Arama Sonuçlarında Zirvede Yer Alın 🚀
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Doğru SEO stratejisiyle Sakarya ve çevresindeki hedef kitlenize en görünür şekilde ulaşalım.
            Biz sadece sıralama kazandırmıyoruz — markanıza bulunduğunuz bölgede sürdürülebilir bir dijital büyüme sağlıyoruz.
          </p>
        </motion.section>
      </main>
    </div>
    </>
  );
}

