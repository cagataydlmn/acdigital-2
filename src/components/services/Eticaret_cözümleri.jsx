import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, CreditCard, TrendingUp, Search, Smartphone, Zap } from "lucide-react";

export default function ETicaret() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Profesyonel E-Ticaret Çözümleri</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4">
              E-Ticaret
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-bold bg-clip-text text-transparent">
                Çözümleri
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Dijital dünyada satış yapmanın gücü, yalnızca ürünlerinizi değil; <span className="text-white font-semibold">deneyiminizi satmaktan</span> geçer.
              AC Dijital olarak, işletmelerin e-ticaret süreçlerini uçtan uca yönetilebilir, ölçeklenebilir ve kullanıcı dostu hale getiriyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/iletisim"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Ücretsiz Teklif Al
              </Link>

              <a
                href="#surec"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
              >
                Nasıl Çalışır?
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURE CARDS */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Etkileyici Mağaza Deneyimi",
                desc: "Kullanıcı dostu arayüzler ve sade alışveriş akışlarıyla müşterilerinizi satın almaya yönlendirin. Her adımda dönüşüm oranlarını artırıyoruz.",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: CreditCard,
                title: "Ödeme ve Lojistik Entegrasyonları",
                desc: "iyzico, Stripe, Trendyol, Hepsiburada, kargo sistemleri ve stok yönetimi gibi tüm servisleri tek platformda buluşturuyoruz.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "Veriye Dayalı Gelişim",
                desc: "Satışlarınızı analiz ediyor, kullanıcı davranışlarını ölçüyor ve size özel büyüme stratejileri geliştiriyoruz.",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 shadow-2xl transition-all hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                viewport={{ once: true }}
              >
                {/* Gradient glow on hover */}
                <div className={`pointer-events-none absolute -top-32 -right-32 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${card.gradient} p-[1px] mb-4 sm:mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur-sm flex items-center justify-center">
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {card.title}
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>

                {/* Animated underline */}
                <div className={`mt-4 sm:mt-6 h-[2px] w-12 bg-gradient-to-r ${card.gradient} group-hover:w-24 transition-all duration-300 rounded-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTENT SECTION */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Satışlarınızı Dijitalde <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Büyütün</span>
                </h2>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                  Profesyonelce hazırlanmış bir e-ticaret sitesi yalnızca satış yapmaz, markanızı büyütür.
                  Biz, performans ve tasarımı dengeleyerek kullanıcıların güvenini kazanmanızı sağlıyoruz.
                </p>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  SEO uyumlu yapılar, yüksek hız, mobil uyumluluk ve ölçülebilir sonuçlar ile satış süreçlerinizi güçlendiriyoruz.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Smartphone, text: "Mobil uyumlu, hızlı ve modern arayüz" },
                  { icon: CreditCard, text: "Ödeme ve kargo entegrasyonları" },
                  { icon: Search, text: "SEO altyapısı + teknik optimizasyon" },
                  { icon: TrendingUp, text: "Analiz ve dönüşüm odaklı iyileştirme" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                    </div>
                    <span className="text-neutral-200 text-sm sm:text-base font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROCESS TIMELINE */}
      {/* ========================================================= */}
      <section id="surec" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
                E-Ticaret Sürecimiz
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                Projenizi baştan sona planlanmış bir süreçle hayata geçiriyoruz
              </p>
            </div>

            <div className="relative">
              {/* Connection line - desktop only */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-pink-500/20" />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { 
                    step: "01", 
                    title: "Analiz", 
                    desc: "İş modelinizi, hedef kitlenizi ve ürünlerinizi detaylı analiz ediyoruz.",
                    color: "from-indigo-500 to-blue-500"
                  },
                  { 
                    step: "02", 
                    title: "Tasarım", 
                    desc: "Markanıza özel modern UI/UX tasarımını oluşturuyoruz.",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    step: "03", 
                    title: "Geliştirme", 
                    desc: "Güvenli ve hızlı altyapıyı React veya Next.js ile kuruyoruz.",
                    color: "from-pink-500 to-rose-500"
                  },
                  { 
                    step: "04", 
                    title: "Yayın & Destek", 
                    desc: "Yayına alıyor, performans ve teknik desteği sürdürüyoruz.",
                    color: "from-rose-500 to-orange-500"
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Step number badge */}
                    <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-xl`} />
                      <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ SECTION */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base px-4">
                Merak ettiklerinizin cevapları
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: "E-ticaret sitesi kaç haftada hazırlanır?",
                  a: "Proje kapsamına göre değişir; ortalama 3-6 hafta içinde yayına alınır. Basit katalog siteleri daha hızlı, karmaşık entegrasyonlu projeler daha uzun sürebilir."
                },
                {
                  q: "Ödeme sistemleri entegre ediliyor mu?",
                  a: "Evet. iyzico, Stripe, PayTR gibi sistemleri entegre ediyoruz. Ayrıca taksit + güvenlik yapılandırması sağlanır."
                },
                {
                  q: "SEO çalışması dahil mi?",
                  a: "Evet. Teknik SEO, hız optimizasyonu ve kategori yapıları SEO uyumlu şekilde kuruluyor. Ürün sayfaları Google'da üst sıralara çıkmak için optimize edilir."
                },
                {
                  q: "Sonradan özellik ekleyebilir miyim?",
                  a: "Tabii ki! Sistemimiz modüler yapıda. İstediğiniz zaman yeni özellikler, ödeme yöntemleri veya entegrasyonlar ekleyebilirsiniz."
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold text-sm sm:text-lg">
                    {faq.q}
                    <span className="ml-4 text-indigo-400 group-open:rotate-45 transition-transform text-xl sm:text-2xl leading-none flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-neutral-300 text-xs sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            {/* Animated background gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  Dijital Mağazanızı Kurmaya Başlayın
                </h2>
              </motion.div>
              
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Markanızı e-ticaret dünyasında öne çıkaracak profesyonel çözümlerle tanışın.
                <span className="block mt-2 text-indigo-200 font-semibold">İlk analiz toplantısı ücretsizdir.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                <Link
                  to="/iletisim"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                >
                  Ücretsiz Teklif Al
                </Link>

                <a
                  href="tel:+905XXXXXXXXX"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                >
                  📞 Hemen Ara
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Hızlı teslim</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Ölçeklenebilir altyapı</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>SEO uyumlu yapı</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400" />
                  <span>Sürekli destek</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
