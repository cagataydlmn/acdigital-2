import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Smartphone,
  Database,
  Server,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useMemo, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function OzelYazilim() {
  const [openFaq, setOpenFaq] = useState(0);

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python/Django", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Firebase", category: "Cloud" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
  ];

  const services = [
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Web Uygulama Geliştirme",
      description:
        "Modern, responsive ve yüksek performanslı web uygulamaları geliştiriyoruz. Kurumsal web platformlar, yönetim panelleri ve müşteri portalları için ölçeklenebilir altyapılar kurguluyoruz.",
      features: ["SEO Uyumlu", "Yüksek Performans", "Cross-browser Uyumluluk", "PWA Desteği"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobil Uygulama Geliştirme",
      description:
        "iOS ve Android için native veya cross-platform mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimi odaklı arayüzler ve sürdürülebilir mimariyle uzun vadeli çözümler sunuyoruz.",
      features: ["iOS & Android", "Offline Çalışma", "Push Bildirim", "Store Yayınlama"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Backend & API Geliştirme",
      description:
        "Güvenli, ölçeklenebilir ve yüksek performanslı backend sistemleri. RESTful ve GraphQL API çözümleriyle uygulamalarınızı güçlü bir çekirdek altyapı üzerine kuruyoruz.",
      features: ["Mikroservis Mimari", "API Güvenliği", "Yüksek Erişilebilirlik", "Otomatik Ölçekleme"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Veritabanı Optimizasyonu",
      description:
        "Veri güvenliği ve performans odaklı veritabanı tasarımı. Büyük veri yönetimi, yedekleme stratejileri ve yüksek erişilebilirlik çözümleriyle sürdürülebilir sistemler kuruyoruz.",
      features: ["Veri Güvenliği", "Yedekleme Sistemleri", "Performans Optimizasyonu", "Real-time Sync"],
      color: "from-amber-500 to-orange-500",
    },
  ];

  const processSteps = [
    { step: "01", title: "İhtiyaç Analizi", description: "İş analizi, hedefler ve teknik gereksinimler netleştirilir." },
    { step: "02", title: "Tasarım & Mimari", description: "Mimari yapı, UI/UX planlaması ve teknoloji seçimi yapılır." },
    { step: "03", title: "Geliştirme", description: "Agile metodolojiyle iteratif geliştirme ve sprint yönetimi yürütülür." },
    { step: "04", title: "Test & Kalite", description: "Kapsamlı test süreçleri, güvenlik kontrolleri ve kalite standartları sağlanır." },
    { step: "05", title: "Yayınlama & Destek", description: "Canlıya alma, izleme, bakım ve teknik destek süreçleri yönetilir." },
  ];

  const faqs = useMemo(
    () => [
      {
        q: "Özel yazılım geliştirme süresi ne kadar sürer?",
        a: "Projenin kapsamına göre değişir. MVP projeler genellikle 4–8 hafta, daha büyük ölçekli sistemler 2–6 ay arası sürebilir. İhtiyaç analizi sonrası net bir takvim oluştururuz.",
      },
      {
        q: "Fiyatlandırma nasıl belirleniyor?",
        a: "Fiyatlandırma; kapsam, entegrasyon ihtiyaçları, kullanıcı sayısı, güvenlik gereksinimleri ve geliştirme süresine göre belirlenir. Proje değerlendirmesi sonrası şeffaf bir teklif sunarız.",
      },
      {
        q: "Proje bitince destek sağlıyor musunuz?",
        a: "Evet. Bakım, güvenlik güncellemeleri ve yeni özellik geliştirmeleri için destek paketleri sunuyoruz. Sisteminizin sürdürülebilirliği için düzenli iyileştirme yapabiliriz.",
      },
      {
        q: "Kod ve kaynaklar bize mi ait olacak?",
        a: "Evet. Proje sonunda tüm kaynak kodlar, dokümantasyon ve altyapı bilgileri size teslim edilir. Bu sayede tam sahiplik ve şeffaflık sağlanır.",
      },
      {
        q: "Mevcut sistemlerimize entegrasyon yapıyor musunuz?",
        a: "Evet. ERP, CRM, ödeme sistemleri, muhasebe yazılımları, kargo, SMS/e-posta servisleri ve özel API entegrasyonları dahil birçok sistemle entegrasyon yapabiliriz.",
      },
      {
        q: "Sakarya merkezli çalışıyor musunuz?",
        a: "Evet. Sakarya merkezli olmakla birlikte Türkiye genelinde uzaktan veya hibrit modelde yazılım geliştirme hizmeti sunuyoruz.",
      },
    ],
    []
  );

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

  return (
    <>
      <Helmet>
        <title>Özel Yazılım Geliştirme | A&C Digital - Web ve Mobil Uygulama</title>
        <meta
          name="description"
          content="Özel yazılım geliştirme hizmetleri. Web uygulama, mobil uygulama, backend/API geliştirme ve veritabanı optimizasyonu. Sakarya merkezli yazılım ajansı."
        />
        <meta
          name="keywords"
          content="özel yazılım geliştirme, web uygulama geliştirme, mobil uygulama, backend geliştirme, API geliştirme, Sakarya yazılım ajansı"
        />
        <meta property="og:title" content="Özel Yazılım Geliştirme | A&C Digital" />
        <meta property="og:description" content="İşinize özel yazılım çözümleri ile dijital dönüşümünüzü hızlandırın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/ozel-yazilim" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/ozel-yazilim" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[url('/images/yazilim/hero-bg.jpg')] bg-cover bg-center opacity-25" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <Zap className="w-4 h-4 text-purple-200" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">
              Özel Yazılım Hizmetleri
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            İşinize Özel
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-bold text-transparent">
              Yazılım Geliştirme
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white font-semibold">Ölçeklenebilir, güvenli ve bakımı kolay</span> yazılım çözümleriyle dijital dönüşümünüzü hızlandırın.
            Modern teknoloji stack’i ve <span className="text-white font-semibold">Agile</span> metodoloji ile web, mobil ve backend projelerinizi uçtan uca geliştiriyoruz.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#teklif"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Ücretsiz Teklif Al
            </a>
            <a
              href="#hizmetler"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
            >
              Hizmetleri İncele
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-300">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Kurumsal Uygulamalar</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Mobil & Web</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">✅ Ölçeklenebilir Mimari</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 150, suffix: "+", label: "Tamamlanan Proje", color: "text-purple-400" },
            { value: 98, suffix: "%", label: "Müşteri Memnuniyeti", color: "text-pink-400" },
            { value: 24, suffix: "/7", label: "Teknik Destek", color: "text-cyan-400" },
            { value: 3, suffix: "x", label: "Verimlilik Artışı", color: "text-green-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Özel Yazılım Nedir?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Özel yazılım, işletmenizin ihtiyaçlarına göre sıfırdan tasarlanan ve geliştirilen yazılım çözümleridir.
              Hazır sistemlerin kısıtlarına takılmadan, süreçlerinize birebir uyumlu bir altyapı kurmanıza olanak tanır.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Kurumsal web uygulamalarından mobil uygulamalara, entegrasyonlardan otomasyon sistemlerine kadar
              farklı iş modelleri için sürdürülebilir, güvenli ve ölçeklenebilir çözümler geliştiriyoruz.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Neden Bizimle Çalışmalısınız?</h2>
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                İş hedeflerinize uygun mimari ve teknoloji seçimi yaparız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Agile metodoloji ile şeffaf süreç ve düzenli ilerleme raporları sunarız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Güvenlik, performans ve sürdürülebilirliği geliştirme sürecinin merkezine alırız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Proje sonrasında bakım & geliştirme desteği ile uzun vadeli çözüm sunarız.
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
              Yazılım Hizmetlerimiz
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Web uygulama, mobil uygulama, backend/API geliştirme ve veritabanı optimizasyonu dahil uçtan uca yazılım geliştirme hizmeti sunuyoruz.
              Kurumsal sistemler için sürdürülebilir mimari ile uzun vadeli değer üretiriz.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500" />
                <div className="relative bg-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 transition-all duration-500">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Modern Teknoloji Stack’imiz
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Güncel teknolojiler ve best-practice yaklaşımlarıyla geleceğe hazır yazılım çözümleri geliştiriyoruz.
              Performans, güvenlik ve ölçeklenebilirlik standartlarımızın temelidir.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-gray-400 text-xs">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              5 Aşamalı Geliştirme Süreci
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              İhtiyaç analizinden canlıya almaya kadar her aşamada ölçülebilir bir süreç yönetimi sunarız.
              Bu sayede proje risklerini minimize eder, zaman ve kaynak yönetimini güçlendiririz.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
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
              Özel yazılım geliştirme süreçleri ve fiyatlandırma hakkında en çok sorulan soruları yanıtladık.
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
      <section id="teklif" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600" />
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Projenizi Konuşalım
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Ücretsiz analiz ve teklif için bizimle iletişime geçin. İhtiyaçlarınıza uygun teknik mimariyi belirleyip,
                48 saat içinde proje planınızı ve bütçe tahmininizi paylaşalım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/referanslar"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Referans Projelerimiz
                </motion.a>
              </div>

              <p className="mt-6 text-sm text-white/80">
                📍 Sakarya Merkez • Özel Yazılım • Web & Mobil • Kurumsal Uygulamalar • Bakım & Destek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Microcopy */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm leading-relaxed">
          Sakarya’da <strong className="text-gray-200">özel yazılım geliştirme</strong>,{" "}
          <strong className="text-gray-200">web uygulama geliştirme</strong> ve{" "}
          <strong className="text-gray-200">mobil uygulama geliştirme</strong> hizmeti arıyorsanız bizimle iletişime geçebilirsiniz.
          İşinize özel yazılım çözümleriyle süreçlerinizi dijitalleştiriyor, ölçeklenebilir altyapılarla sürdürülebilir büyüme sağlıyoruz.
        </div>
      </section>
    </div>
    </>
  );
}
