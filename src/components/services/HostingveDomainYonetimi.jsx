import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Shield,
  Zap,
  Settings,
  Headphones,
  CheckCircle,
  ArrowRight,
  Lock,
  Gauge,
  RefreshCcw,
  Mail,
  Cloud,
} from "lucide-react";
import { useMemo, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
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

export default function HostingveDomainYonetimi() {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      icon: <Server className="w-7 h-7" />,
      title: "Kurumsal Hosting",
      description:
        "Yüksek performanslı ve güvenli hosting altyapısı ile web sitenizi hızlı, stabil ve kesintisiz çalıştırın. SSD tabanlı kaynaklar, optimize sunucu konfigürasyonu ve sürekli izleme ile maksimum verim.",
      features: ["SSD Performans", "7/24 İzleme", "Otomatik Yedek", "Uptime Odaklı"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Domain Yönetimi",
      description:
        "Alan adı tescili, DNS yönetimi, transfer ve yenileme süreçlerini tek panelden yönetin. Kurumsal domain yapılandırmaları, alt alan adları (subdomain) ve kayıt güvenliği için uçtan uca destek.",
      features: ["DNS Yönetimi", "Transfer & Yenileme", "Kurumsal Kayıt", "Subdomain Yönetimi"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "SSL & Güvenlik",
      description:
        "HTTPS geçişi, SSL sertifikası kurulumu, güvenlik sertleştirme (hardening) ve temel DDoS korumalarıyla web varlığınızı koruyun. Güvenli siteler, SEO ve kullanıcı güveni için kritik bir standarttır.",
      features: ["SSL Kurulum", "Güvenlik Sertleştirme", "DDoS Temel Koruma", "Güncelleme Yönetimi"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Sunucu & Panel Yönetimi",
      description:
        "cPanel/Plesk/DirectAdmin gibi yönetim panelleri, e-posta yapılandırmaları, log takibi ve performans optimizasyonu ile sunucu operasyonlarınızı zahmetsiz hale getirin.",
      features: ["Panel Kurulum", "E-posta Yönetimi", "Performans Ayarı", "Log & İzleme"],
      color: "from-amber-500 to-orange-500",
    },
  ];

  const processSteps = [
    { step: "01", title: "İhtiyaç Analizi", description: "Site trafiği, proje hedefleri ve kaynak gereksinimleri belirlenir." },
    { step: "02", title: "Altyapı Seçimi", description: "Hosting türü (paylaşımlı/VPS/Cloud) ve domain planı netleşir." },
    { step: "03", title: "Kurulum & Taşıma", description: "Panel, SSL, e-posta ve site taşıma süreçleri güvenli şekilde yapılır." },
    { step: "04", title: "Optimizasyon", description: "Cache, CDN, güvenlik ve performans iyileştirmeleri uygulanır." },
    { step: "05", title: "İzleme & Destek", description: "Sürekli izleme, bakım, yedekleme ve teknik destek sağlanır." },
  ];

  const faqs = useMemo(
    () => [
      {
        q: "Sakarya’da hosting hizmeti veriyor musunuz?",
        a: "Evet. Sakarya merkezli olarak hosting kurulumu, site taşıma, SSL kurulumu ve sunucu yönetimi hizmetleri sunuyoruz. Türkiye genelinde uzaktan destekle de hizmet veriyoruz.",
      },
      {
        q: "Domain (alan adı) tescil ve transfer işlemlerini yönetiyor musunuz?",
        a: "Evet. Alan adı tescili, transfer, yenileme ve DNS yönetimini uçtan uca yönetiyoruz. Mevcut domaininizi güvenli şekilde transfer edebilir, kayıt bilgilerinizi düzenleyebiliriz.",
      },
      {
        q: "Hosting taşıma (migration) sürecinde kesinti olur mu?",
        a: "Planlı taşıma ile kesintiyi minimuma indiriyoruz. DNS geçişini doğru zamanlayarak çoğu projede kesintisiz veya çok kısa süreli geçiş sağlıyoruz. Taşıma sonrası test ve doğrulama yapıyoruz.",
      },
      {
        q: "SSL sertifikası kurulumu ve HTTPS geçişi yapıyor musunuz?",
        a: "Evet. SSL sertifikası seçimi, kurulum, HTTPS yönlendirmeleri ve güvenlik ayarlarını yapıyoruz. HTTPS, SEO ve kullanıcı güveni için önemli bir standarttır.",
      },
      {
        q: "Kurumsal e-posta (info@, destek@) kurulumunu yapıyor musunuz?",
        a: "Evet. Domain’e bağlı kurumsal e-posta hesaplarını kuruyor, SPF/DKIM/DMARC kayıtlarını yapılandırarak teslim edilebilirliği (deliverability) güçlendiriyoruz.",
      },
      {
        q: "Hangi hosting türü benim için uygun: paylaşımlı, VPS veya cloud?",
        a: "Trafik, bütçe ve proje ihtiyaçlarına göre öneriyoruz. Küçük siteler için paylaşımlı hosting, orta-yüksek trafik ve özel kaynak ihtiyacı için VPS; ölçekleme ve yüksek erişilebilirlik için cloud altyapı idealdir.",
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
        <title>Sakarya Hosting ve Domain Yönetimi | A&C Digital</title>
        <meta
          name="description"
          content="Sakarya hosting ve domain yönetimi hizmetleri. Kurumsal hosting, domain tescil, SSL kurulumu, DNS yönetimi ve sunucu yönetimi."
        />
        <meta
          name="keywords"
          content="Sakarya hosting, domain yönetimi, SSL kurulumu, DNS yönetimi, hosting taşıma, sunucu yönetimi, Sakarya hosting ajansı"
        />
        <meta property="og:title" content="Sakarya Hosting ve Domain Yönetimi | A&C Digital" />
        <meta property="og:description" content="Web sitenizi hızlı, güvenli ve sürdürülebilir bir altyapıyla yayına alın." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/sakarya-hosting-ve-domain-yonetimi" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/sakarya-hosting-ve-domain-yonetimi" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden bg-transparent">
        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
  <section className="relative  min-h-[80vh]flex items-center justify-center pt-32 pb-12">
        {/* GoogleAds gibi background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

        {/* Görsel arka plan (istersen değiştir) */}
        <div
          className="absolute inset-0 bg-[url('/images/hosting/hero-bg.jpg')] bg-cover bg-center opacity-25"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Zap className="w-4 h-4 text-purple-200" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">
              Sakarya Hosting & Domain Yönetimi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4">
            Sakarya
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-bold text-transparent">
              Hosting ve Domain Yönetimi
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Sakarya’da <span className="text-white font-semibold">hosting</span>,{" "}
            <span className="text-white font-semibold">domain yönetimi</span> ve{" "}
            <span className="text-white font-semibold">SSL güvenliği</span> hizmeti arıyorsanız doğru yerdesiniz.
            Web sitenizi hızlı, güvenli ve sürdürülebilir bir altyapıyla yayına alıyor;{" "}
            <span className="text-white font-semibold">DNS, e-posta ve sunucu</span> yönetimini uçtan uca üstleniyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#teklif"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
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
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              ✅ Hosting Taşıma
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              ✅ DNS & SSL
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
              ✅ 7/24 Destek
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 99, suffix: ".9%", label: "Uptime Hedefi", icon: <Gauge className="w-5 h-5" /> },
            { value: 250, suffix: "+", label: "Yönetilen Domain", icon: <Globe className="w-5 h-5" /> },
            { value: 120, suffix: "+", label: "Aktif Hosting", icon: <Server className="w-5 h-5" /> },
            { value: 24, suffix: "/7", label: "Teknik Destek", icon: <Headphones className="w-5 h-5" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
                {stat.icon}
                <span className="text-xs uppercase tracking-[0.2em]">Metric</span>
              </div>
              <div className="text-3xl font-bold mb-2 text-white">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hosting ve Domain Yönetimi Nedir?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-gray-200">Hosting</strong>, web sitenizin dosyalarını barındıran sunucu altyapısıdır.
              <strong className="text-gray-200"> Domain (alan adı)</strong> ise ziyaretçilerinizin sitenize erişmesini sağlayan
              dijital adresinizdir. Bu iki yapı doğru kurgulanmadığında hız, güvenlik ve SEO performansı olumsuz etkilenir.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Sakarya’da hosting ve domain yönetimi hizmetimiz; alan adı tescili, DNS yönetimi, SSL kurulumu, e-posta yapılandırması,
              taşıma (migration) ve performans optimizasyonunu tek bir süreçte birleştirir. Amacımız; hızlı, güvenli ve sürdürülebilir
              bir web altyapısı kurmaktır.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Neden Bizimle Çalışmalısınız?</h2>
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Projenize uygun hosting türünü (paylaşımlı/VPS/Cloud) birlikte seçeriz.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                DNS, SSL, e-posta ve güvenlik ayarlarını tek elden yönetiriz.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Performans ve SEO için cache/CDN optimizasyonu uygularız.
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 font-bold">✔</span>
                7/24 izleme ve hızlı müdahale ile kesintileri minimize ederiz.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="hizmetler" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hosting & Domain Hizmetlerimiz</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sakarya’da kurumsal hosting, domain yönetimi, SSL kurulumu ve sunucu/panel yönetimi dahil uçtan uca hizmet veriyoruz.
              Web altyapınızı performans, güvenlik ve sürdürülebilirlik odaklı optimize ederiz.
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

          {/* Quick Features */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Güvenlik Standartları",
                desc: "SSL, firewall kuralları ve temel saldırı önleme ile güvenli altyapı.",
              },
              {
                icon: <RefreshCcw className="w-6 h-6" />,
                title: "Yedekleme & Geri Dönüş",
                desc: "Otomatik yedek ve ihtiyaç halinde hızlı geri dönüş planı.",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Kurumsal E-posta",
                desc: "SPF/DKIM/DMARC ayarları ile güçlü e-posta teslim edilebilirliği.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3 text-white">
                  <div className="p-2 rounded-2xl bg-white/10 border border-white/10">{item.icon}</div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / INFRA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Altyapı Yaklaşımımız</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Performans ve güvenlik odaklı modern altyapı pratikleriyle web projelerinizi sorunsuz işletiriz.
              Hosting, domain ve sunucu yönetimini tek bir panel mantığıyla şeffaf şekilde yürütürüz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Cloud className="w-5 h-5" />, title: "Cloud Ready", desc: "Ölçeklenebilir ve esnek kaynak planı." },
              { icon: <Zap className="w-5 h-5" />, title: "Hız Optimizasyonu", desc: "Cache/CDN ve sunucu ayarları." },
              { icon: <Shield className="w-5 h-5" />, title: "Güvenlik", desc: "SSL + hardening + izleme." },
              { icon: <Settings className="w-5 h-5" />, title: "Operasyon", desc: "Panel yönetimi ve bakım süreçleri." },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-white mb-2">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/10">{card.icon}</div>
                  <div className="font-semibold">{card.title}</div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">5 Aşamalı Kurulum & Yönetim Süreci</h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sakarya hosting ve domain yönetimi süreçlerini planlı şekilde ilerletiriz. Taşıma, SSL, DNS ve optimizasyon adımları
              ölçülebilir biçimde uygulanır.
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

      {/* FAQ (KESİNLİKLE OLSUN) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Sıkça Sorulan Sorular (FAQ)</h2>
            <p className="text-gray-300 leading-relaxed">
              Sakarya hosting, domain yönetimi, SSL kurulumu ve site taşıma süreçleri hakkında en çok sorulan soruları yanıtladık.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
                >
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

          {/* Extra SEO Paragraph */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-3">Sakarya’da Hosting & Domain Yönetimi</h3>
            <p className="text-gray-300 leading-relaxed">
              Sakarya merkezli hosting ve domain yönetimi hizmetimiz; web sitenizin performansını artırmak, güvenliğini güçlendirmek
              ve operasyonel süreçleri kolaylaştırmak için tasarlandı. Alan adı tescili, DNS kayıtlarının yönetimi, SSL kurulumu,
              kurumsal e-posta yapılandırması ve sunucu bakımı gibi tüm adımları profesyonel şekilde yönetiyoruz.
            </p>
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
                Hosting & Domain Altyapınızı Birlikte Kuralım
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Ücretsiz analiz için bizimle iletişime geçin. Mevcut hosting/domain durumunuzu inceleyip,
                performans + güvenlik + SEO açısından en doğru planı çıkaralım.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ücretsiz Analiz Al
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/hizmetler"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tüm Hizmetler
                </motion.a>
              </div>

              <p className="mt-6 text-sm text-white/80">
                📍 Sakarya Merkez • Hosting • Domain Yönetimi • SSL • Site Taşıma • Sunucu & Panel Yönetimi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Microcopy */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm leading-relaxed">
          Sakarya’da <strong className="text-gray-200">hosting</strong>,{" "}
          <strong className="text-gray-200">domain yönetimi</strong> ve{" "}
          <strong className="text-gray-200">SSL kurulumu</strong> hizmeti arıyorsanız bizimle iletişime geçebilirsiniz.
          Web sitenizi hızlı ve güvenli bir altyapıyla yayına alıyor, DNS ve e-posta yönetimini profesyonel şekilde yürütüyor,
          performans optimizasyonu ile SEO sonuçlarınızı güçlendiriyoruz.
        </div>
      </section>
    </div>
    </>
  );
}
