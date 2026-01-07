import { motion } from "framer-motion";
import {
  Target,
  Wallet,
  Activity,
  MapPin,
  Phone,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MetaAds() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Sakarya Meta Ads ajansı olarak hangi hizmetleri sunuyorsunuz?",
      a: "Sakarya’daki işletmeler için Facebook ve Instagram reklam yönetimi, dönüşüm optimizasyonu, hedef kitle analizi ve performans raporlaması hizmetleri sunuyoruz."
    },
    {
      q: "Meta Ads reklamları ne kadar sürede sonuç verir?",
      a: "İlk performans verileri genellikle 7–10 gün içinde gelir. Stabil ve ölçeklenebilir sonuçlar için 30 günlük optimizasyon süreci gereklidir."
    },
    {
      q: "Sakarya’daki küçük işletmeler için Meta Ads uygun mu?",
      a: "Evet. Küçük bütçelerle test kampanyaları kurarak Sakarya’daki potansiyel müşterilere doğrudan ulaşmanızı sağlıyoruz."
    },
    {
      q: "Reklam bütçesi ve hesap kontrolü kimde olur?",
      a: "Tüm reklam hesapları müşteriye aittir. Şeffaf raporlama ve tam kontrol prensibiyle çalışırız."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sakarya Meta Ads Yönetimi | A&C Digital - Facebook ve Instagram Reklamları</title>
        <meta
          name="description"
          content="Sakarya Meta Ads yönetimi. Facebook ve Instagram reklamları ile hedef kitlenize ulaşın. Dönüşüm odaklı Meta reklam kampanyaları."
        />
        <meta
          name="keywords"
          content="Sakarya Meta Ads, Facebook reklamları, Instagram reklamları, Meta reklam yönetimi, sosyal medya reklamları Sakarya"
        />
        <meta property="og:title" content="Sakarya Meta Ads Yönetimi | A&C Digital" />
        <meta property="og:description" content="Facebook ve Instagram reklamları ile hedef kitlenize ulaşın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/Meta-ads" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/Meta-ads" />
      </Helmet>
      <div className="min-h-screen text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-thin mb-8 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sakarya Meta Ads Yönetimi ile
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-bold">
              Satışlarınızı Ölçekleyin
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sakarya merkezli işletmeler için Facebook ve Instagram reklam
            yönetimi hizmeti sunuyoruz. Performans odaklı Meta Ads
            stratejilerimizle reklam bütçenizi ölçülebilir satış ve
            kaliteli lead sonuçlarına dönüştürüyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/iletisim"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold hover:scale-105 transition-all"
            >
              Ücretsiz Reklam Analizi Al
            </a>
            <a
              href="tel:+902645000000"
              className="px-10 py-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-28 space-y-32">
        {/* LOKAL AJANS */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sakarya Meta Ads Ajansı
          </h2>
          <p className="text-lg text-gray-400 max-w-5xl leading-relaxed">
            Sakarya’da faaliyet gösteren işletmeler için Meta Ads yönetimi,
            yerel rekabet ve hedef kitle davranışlarına göre planlanır.
            Facebook ve Instagram reklamları sayesinde Sakarya’daki
            potansiyel müşterilerinize doğrudan ulaşmanızı sağlıyoruz.
          </p>
        </section>

        {/* META ADS NEDİR */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meta Ads Nedir, Neden Önemlidir?
          </h2>
          <p className="text-lg text-gray-400 max-w-5xl leading-relaxed mb-6">
            Meta Ads; Facebook, Instagram, Messenger ve Audience Network
            platformlarında yayınlanan dijital reklamlardır. Gelişmiş
            hedefleme algoritması sayesinde reklamlarınız satın almaya
            en yakın kullanıcılara gösterilir.
          </p>
          <p className="text-lg text-gray-400 max-w-5xl leading-relaxed">
            Sakarya Meta Ads kampanyalarında doğru kurgu ile daha düşük
            tıklama maliyeti, daha yüksek dönüşüm oranı ve sürdürülebilir
            büyüme elde edilir.
          </p>
        </section>

        {/* AVANTAJLAR */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Performans Odaklı Meta Ads Avantajları
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <Target className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                İleri Düzey Hedefleme
              </h3>
              <p className="text-gray-400">
                Sakarya lokasyonlu hedefleme, Custom Audience ve Lookalike
                Audience ile doğru kullanıcıya ulaşıyoruz.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <Wallet className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Akıllı Bütçe Yönetimi
              </h3>
              <p className="text-gray-400">
                Cost Cap ve ROAS odaklı teklif stratejileriyle reklam
                harcamalarınızı kontrol altında tutuyoruz.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <Activity className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Sürekli Optimizasyon
              </h3>
              <p className="text-gray-400">
                Kampanyalar günlük olarak izlenir, performans verilerine
                göre anlık optimize edilir.
              </p>
            </div>
          </div>
        </section>

        {/* SOSYAL KANIT */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Sakarya Meta Ads Performans Sonuçlarımız
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "%63 Daha Düşük Tıklama Maliyeti",
              "%48 Daha Yüksek Dönüşüm Oranı",
              "2x ROAS Artışı",
              "%127 Lead Kalitesi İyileşmesi"
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Sakarya Meta Ads – Sıkça Sorulan Sorular
          </h2>

          {faqs.map((f, i) => (
            <div
              key={i}
              className="mb-4 bg-white/5 border border-white/10 rounded-2xl"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center"
              >
                <span className="font-semibold text-left">{f.q}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="p-16 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sakarya Meta Ads Danışmanlığı ile Büyüyün
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10">
            Reklam bütçenizi boşa harcamayın. Sakarya’daki işletmeniz için
            Facebook ve Instagram reklamlarını profesyonel şekilde yöneten
            Meta Ads ajansımızla hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold hover:scale-105 transition-all"
            >
              Ücretsiz Analiz Al
            </a>
            <a
              href="tel:+902645000000"
              className="px-12 py-4 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
            >
              Hemen Ara
            </a>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
