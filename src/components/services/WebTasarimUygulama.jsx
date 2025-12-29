import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WebTasarimUygulama() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Profesyonel Web Tasarım & Yazılım Hizmetleri</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kurumsal Web Tasarım
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text font-bold text-transparent">
              ve Yazılım Çözümleri
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Markanızı dijital dünyada zirveye taşıyacak, SEO uyumlu, hızlı ve güvenli web siteleri ile 
            kurumsal yazılım çözümleri geliştiriyoruz. Modern teknolojiler ve 10+ yıllık deneyimimizle 
            işinizi büyütmeye odaklanıyoruz.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/iletisim"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              Ücretsiz Teklif Alın
            </Link>
            <a
              href="#hizmetlerimiz"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Hizmetlerimizi Keşfedin
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Introduction Section - SEO Rich Content */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neden Profesyonel Web Tasarım?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Dijital çağda güçlü bir web varlığı, işletmenizin başarısı için kritik öneme sahiptir. 
              Profesyonel web tasarım hizmetlerimiz ile markanızı rakiplerinizden ayırın ve 
              müşterilerinize unutulmaz bir dijital deneyim sunun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "95%",
                title: "Müşteri Memnuniyeti",
                desc: "Tamamladığımız projelerde yüksek memnuniyet oranı"
              },
              {
                number: "200+",
                title: "Tamamlanan Proje",
                desc: "Farklı sektörlerden başarılı web projeleri"
              },
              {
                number: "10+",
                title: "Yıllık Deneyim",
                desc: "Web tasarım ve yazılım geliştirmede uzmanlık"
              },
              {
                number: "7/24",
                title: "Destek Hizmeti",
                desc: "Kesintisiz teknik destek ve bakım"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Features - 3 Column */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Modern ve Responsive Tasarım",
              desc: "Her ekran boyutunda kusursuz görünüm sağlayan, kullanıcı dostu ve estetik web tasarımları. Mobile-first yaklaşımla geliştirilen responsive arayüzler, tüm cihazlarda mükemmel performans gösterir.",
              icon: "💡",
              features: ["Mobil Uyumlu", "Retina Ready", "Cross-Browser Uyumlu"]
            },
            {
              title: "Performans ve Hız Optimizasyonu",
              desc: "React, Next.js ve modern JavaScript framework'leri ile ultra hızlı yükleme süreleri. Core Web Vitals optimizasyonu ile Google'ın performans kriterlerini karşılayan, Lightning-fast web siteleri.",
              icon: "⚙️",
              features: ["Hızlı Yükleme", "Optimize Kod", "CDN Entegrasyonu"]
            },
            {
              title: "SEO ve Dijital Pazarlama",
              desc: "Arama motorlarında üst sıralarda yer almanızı sağlayan SEO uyumlu kodlama. Schema markup, meta etiketler ve semantik HTML ile Google'da daha görünür olun.",
              icon: "🚀",
              features: ["On-Page SEO", "Schema Markup", "Google Analytics"]
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/60 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-cyan-400 text-sm">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Services Section */}
        <motion.section
          id="hizmetlerimiz"
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Kapsamlı Web Tasarım Hizmetlerimiz
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            İşletmenizin ihtiyaçlarına özel, profesyonel web çözümleri sunuyoruz. 
            Her proje, sektörünüze özel stratejiler ve modern teknolojilerle hayata geçirilir.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Kurumsal Web Site Tasarımı",
                desc: "Şirketinizin profesyonel imajını yansıtan, güven veren ve dönüşüm odaklı kurumsal web siteleri. CMS entegrasyonu ile kolay içerik yönetimi.",
                features: [
                  "Özel Kurumsal Tasarım",
                  "İçerik Yönetim Sistemi (CMS)",
                  "Çoklu Dil Desteği",
                  "Entegre İletişim Formları",
                  "Yönetim Paneli"
                ],
                icon: "🏢"
              },
              {
                title: "E-Ticaret Web Sitesi",
                desc: "Online satışlarınızı artıracak, güvenli ödeme sistemleri ile entegre, kullanıcı dostu e-ticaret platformları. WooCommerce, Shopify veya özel e-ticaret çözümleri.",
                features: [
                  "Ürün Yönetim Sistemi",
                  "Güvenli Ödeme Entegrasyonu",
                  "Stok ve Sipariş Takibi",
                  "Kargo Entegrasyonu",
                  "Müşteri Hesap Yönetimi"
                ],
                icon: "🛒"
              },
              {
                title: "Landing Page Tasarımı",
                desc: "Kampanyalarınız için özel tasarlanmış, yüksek dönüşüm oranına sahip, hızlı yüklenen iniş sayfaları. A/B test destekli, analitik takip imkanı.",
                features: [
                  "Dönüşüm Odaklı Tasarım",
                  "Call-to-Action Optimizasyonu",
                  "Hızlı Yükleme Süresi",
                  "A/B Test Desteği",
                  "Lead Form Entegrasyonu"
                ],
                icon: "📄"
              },
              {
                title: "Web Uygulaması Geliştirme",
                desc: "İş süreçlerinizi dijitalleştiren, özel web tabanlı yazılım çözümleri. React, Vue.js veya Angular ile modern, ölçeklenebilir uygulamalar.",
                features: [
                  "Özel Yazılım Geliştirme",
                  "API Entegrasyonu",
                  "Veritabanı Yönetimi",
                  "Kullanıcı Yetkilendirme",
                  "Raporlama ve Dashboard"
                ],
                icon: "⚡"
              },
              {
                title: "Mobil Uyumlu Tasarım",
                desc: "Mobile-first yaklaşımla tasarlanan, tüm cihazlarda mükemmel görünüm ve kullanıcı deneyimi sunan responsive web siteleri.",
                features: [
                  "Responsive Design",
                  "Touch-Friendly Arayüz",
                  "Hızlı Mobil Performans",
                  "Progressive Web App (PWA)",
                  "App-Like Deneyim"
                ],
                icon: "📱"
              },
              {
                title: "SEO ve Web Optimizasyonu",
                desc: "Arama motorlarında üst sıralarda yer almanız için teknik SEO, içerik optimizasyonu ve performans iyileştirme hizmetleri.",
                features: [
                  "Teknik SEO Analizi",
                  "Anahtar Kelime Optimizasyonu",
                  "Site Hızı Optimizasyonu",
                  "Schema Markup",
                  "Google Search Console Kurulumu"
                ],
                icon: "📊"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-16">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <span className="text-cyan-400 mr-3">→</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Kullandığımız Teknolojiler
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Modern, güncel ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz. 
            Her teknoloji, performans, güvenlik ve ölçeklenebilirlik göz önünde bulundurularak seçilir.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "React", desc: "Modern UI Framework" },
              { name: "Next.js", desc: "SSR & SSG" },
              { name: "Vue.js", desc: "Progressive Framework" },
              { name: "Node.js", desc: "Backend Development" },
              { name: "WordPress", desc: "CMS Platform" },
              { name: "Tailwind CSS", desc: "Utility-First CSS" },
              { name: "MongoDB", desc: "NoSQL Database" },
              { name: "MySQL", desc: "Relational Database" },
              { name: "AWS", desc: "Cloud Hosting" },
              { name: "Vercel", desc: "Deployment Platform" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-gray-800/40 border border-white/10 rounded-xl hover:border-cyan-400 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Web Tasarım Sürecimiz
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Profesyonel ve şeffaf bir çalışma süreciyle projelerinizi zamanında ve beklentilerinizi aşacak şekilde teslim ediyoruz.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Keşif ve Planlama",
                desc: "İhtiyaç analizi, hedef kitle belirleme, rakip analizi ve proje kapsamının belirlenmesi. Detaylı teknik şartname hazırlanır."
              },
              {
                step: "02",
                title: "Tasarım ve Prototip",
                desc: "Wireframe çalışması, UI/UX tasarımı ve interaktif prototip oluşturma. Figma veya Adobe XD ile görsel tasarımlar hazırlanır."
              },
              {
                step: "03",
                title: "Geliştirme ve Kodlama",
                desc: "Frontend ve backend geliştirme, API entegrasyonları, veritabanı kurulumu ve özel özellik geliştirmeleri yapılır."
              },
              {
                step: "04",
                title: "Test ve Optimizasyon",
                desc: "Cross-browser testler, mobil uyumluluk kontrolleri, hız optimizasyonu, SEO kontrolleri ve güvenlik testleri yapılır."
              },
              {
                step: "05",
                title: "Yayınlama ve Eğitim",
                desc: "Canlı sunucu kurulumu, domain bağlantısı, SSL sertifikası ve yönetici eğitimi verilerek proje teslim edilir."
              },
              {
                step: "06",
                title: "Destek ve Bakım",
                desc: "Sürekli teknik destek, güvenlik güncellemeleri, performans takibi ve içerik güncellemeleri sağlanır."
              }
            ].map((process, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start bg-gradient-to-r from-gray-800/60 to-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-cyan-400 min-w-[60px]">{process.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-300">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Image + Content Section */}
        <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl hover:shadow-cyan-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
              <img 
                src="/anasayfa.png" 
                alt="Web Tasarım ve Uygulama Geliştirme" 
                className="w-full h-auto object-cover relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Web Siteniz, Markanızın Dijital Vitrinidir
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              İlk izlenim saniyeler içinde oluşur. Ziyaretçiler web sitenize girdikleri anda markanız hakkında bir kanıya varırlar. 
              Profesyonel tasarım, güven verir ve kullanıcıları harekete geçirir.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              UI/UX prensiplerine uygun, ziyaretçileri yönlendiren ve dönüşüm odaklı arayüzler tasarlıyoruz.
              Her piksel bir amaca hizmet eder — kullanıcı deneyimini geliştirmek ve müşteri kazanmak.
            </p>
            <ul className="space-y-3">
              {[
                "Kullanıcı Araştırması ve Persona Analizi",
                "Conversion Rate Optimization (CRO)",
                "A/B Testing ve Heat Map Analizi",
                "Accessibility Standards (WCAG Uyumlu)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-cyan-400">
                  <span className="mr-3 text-2xl">✓</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Web tasarım ve geliştirme hizmetlerimiz hakkında merak edilenleri yanıtlıyoruz.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Web sitesi tasarımı ne kadar sürer?",
                a: "Proje kapsamına göre değişmekle birlikte, ortalama bir kurumsal web sitesi 4-6 hafta, e-ticaret siteleri 6-10 hafta sürmektedir. Landing page gibi basit projeler 2-3 haftada tamamlanabilir."
              },
              {
                q: "Web sitesi maliyeti nasıl belirlenir?",
                a: "Maliyet; sayfa sayısı, özel tasarım gereksinimleri, işlevsellik özellikleri, e-ticaret entegrasyonları ve içerik yönetim sistemi gibi faktörlere göre belirlenir. Ücretsiz teklif için bizimle iletişime geçebilirsiniz."
              },
              {
                q: "Mobil uyumlu web tasarım yapıyor musunuz?",
                a: "Evet, tüm projelerimiz mobile-first yaklaşımla tasarlanır. Responsive design ile her cihazda (telefon, tablet, masaüstü) mükemmel görünüm ve kullanıcı deneyimi sağlarız."
              },
              {
                q: "SEO hizmetleri dahil mi?",
                a: "Evet, tüm web sitelerimiz temel SEO optimizasyonu ile teslim edilir. İsteğe bağlı olarak kapsamlı SEO paketleri ve devam eden SEO danışmanlığı hizmeti de sunuyoruz."
              },
              {
                q: "Web sitemi kendim güncelleyebilir miyim?",
                a: "Evet, WordPress veya özel CMS ile teslim edilen sitelerde kullanıcı dostu yönetim paneli ile içeriklerinizi kolayca güncelleyebilirsiniz. Detaylı kullanım eğitimi de sağlıyoruz."
              },
              {
                q: "Hosting ve domain hizmeti veriyor musunuz?",
                a: "Evet, güvenilir hosting sağlayıcıları ile çalışıyoruz. Domain tescil, hosting kurulumu, SSL sertifikası ve e-posta hesapları dahil olmak üzere tüm altyapı hizmetlerini sunuyoruz."
              },
              {
                q: "Proje teslim sonrası destek var mı?",
                a: "Kesinlikle. Tüm projelerimizde belirli süre ücretsiz destek, ardından opsiyonel bakım paketleri sunuyoruz. 7/24 teknik destek, güvenlik güncellemeleri ve içerik güncellemeleri sağlıyoruz."
              },
              {
                q: "Hangi sektörlere hizmet veriyorsunuz?",
                a: "E-ticaret, sağlık, eğitim, inşaat, turizm, hukuk, finans, teknoloji ve daha birçok sektörde 200+ başarılı proje tamamladık. Her sektöre özel deneyimimiz vardır."
              }
            ].map((faq, i) => (
              <motion.details
                key={i}
                className="bg-gray-800/60 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 border border-cyan-400/30 rounded-3xl p-12 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Modern, hızlı ve dönüşüm odaklı bir web sitesiyle markanızı dijitalde güçlendirmek için bugün bize ulaşın.
          </p>
          <p className="text-cyan-400 mb-8 text-xl font-semibold">
            İlk danışmanlık tamamen ücretsizdir! 🎉
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/iletisim"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300 text-lg"
            >
              Ücretsiz Teklif Alın
            </Link>
            <Link
              to="/portfoy"
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold py-4 px-10 rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg"
            >
              Projelerimizi İnceleyin
            </Link>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            ⭐ 200+ Mutlu Müşteri | 🚀 10+ Yıllık Deneyim | 💯 %95 Müşteri Memnuniyeti
          </p>
        </motion.div>
      </main>
    </div>
  );
}

