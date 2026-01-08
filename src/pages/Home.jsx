import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatedBeam } from '../components/ui/AnimatedBeam';
import CTASection from '../components/CTASection';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for AnimatedBeam
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const centerRef = useRef(null);
  const customerRef = useRef(null); // New ref for customer

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const Markalar=[
    {
      id:1,
      src:"/logolar/693998f131df2_296bc54d47c5855a.png",
      alt:"araslar yapı insaat logo",
    },
    { id:2,
      src:"/logolar/logomatmazel.PNG",
      alt:"matmazel kadın kuaförü logo",},
    { id:3,
      src:"/logolar/MFOlogo.png",
      alt:"mfö creative logo",},
    { id:4,
      src:"/logolar/narcitt54.png",
      alt:"narçit logo",},
    { id:5,
      src:"/logolar/nartas.png",
      alt:"nartaş logo",},
      { id:6,
        src:"/logolar/arelceliklogo.png",
        alt:"arel logo",},
    
  ]
  const services = [
    {
      title: "Web Tasarımı ve geliştirme",
      description: "Modern, hızlı ve kullanıcı dostu web siteleriyle dijital varlığınızı güçlendiriyoruz.",
      path: "/hizmetler/sakarya-web-tasarim",
      gradient: "from-blue-500 to-cyan-500",
      color: "blue"
    },
    {
      title: "E-ticaret Çözümleri",
      description: "Satışlarınızı katlayacak, güvenli ve ölçeklenebilir e-ticaret platformları geliştiriyoruz.",
      path: "/hizmetler/eticaret-cozumleri",
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      title: "SEO Hizmetleri",
      description: "Arama motorlarında üst sıralara çıkarak organik trafiğinizi ve görünürlüğünüzü artırıyoruz.",
      path: "/hizmetler/seo",
      gradient: "from-pink-500 to-rose-500",
      color: "pink"
    },
    {
      title: "Sosyal Medya Yönetimi",
      description: "Sosyal medyada etkileşimi artıran stratejilerle marka bilinirliğinizi yükseltiyoruz.",
      path: "/hizmetler/sosyal-medya",
      gradient: "from-orange-500 to-red-500",
      color: "orange"
    },
    {
      title: "Meta ADS Yönetimi",
      description: "Facebook ve Instagram reklamları ile hedef kitlenize ulaşarak dönüşümlerinizi optimize ediyoruz.",
      path: "/hizmetler/meta-ads",
      gradient: "from-teal-500 to-green-500",
      color: "teal"
    },
    {
      title: "Google ADS Yönetimi",
      description: "Google ağında etkili reklam kampanyalarıyla potansiyel müşterilerinize doğrudan ulaşın.",
      path: "/hizmetler/GoogleAds",
      gradient: "from-indigo-500 to-blue-500",
      color: "indigo"
    }
  ];

  const portfolioItems = [
    { id: 1, title: "E-Ticaret Projesi", category: "Web Tasarım", image: "PROJECT_IMAGE_1" },
    { id: 2, title: "Kurumsal Kimlik", category: "Branding", image: "PROJECT_IMAGE_2" },
    { id: 3, title: "Sosyal Medya Kampanyası", category: "Dijital Marketing", image: "PROJECT_IMAGE_3" },
    { id: 4, title: "Tanıtım Filmi", category: "Video Prodüksiyon", image: "PROJECT_IMAGE_4" },
  ];

  const testimonials = [
    {
      text: "MFO Creative ile çalışmak harika bir deneyimdi. Kurumsal kimliğimizi sıfırdan oluşturdular ve beklentilerimizin çok üzerinde bir sonuç aldık.",
      author: "Ahmet Yılmaz",
      company: "TechStart A.Ş.",
      role: "Genel Müdür"
    },
    {
      text: "Web sitemiz modern, hızlı ve kullanıcı dostu. Ekip çok profesyonel ve işini hakkıyla yapıyor. Kesinlikle tavsiye ediyorum.",
      author: "Zeynep Kaya",
      company: "Digital Media",
      role: "Pazarlama Müdürü"
    },
    {
      text: "Sosyal medya yönetimi konusunda harika işler çıkarıyorlar. Etkileşimimiz %200 arttı ve marka bilinirliğimiz katlandı.",
      author: "Mehmet Demir",
      company: "Fashion Brand",
      role: "Kurucu"
    }
  ];

  const colorWords = [
    { text: "Yaratıcı", color: "text-blue-400" },
    { text: "Yenilikçi", color: "text-purple-400" },
    { text: "Renkli", color: "text-pink-400" },
    { text: "Özgün", color: "text-orange-400" },
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % colorWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const trustRef = useRef(null);

  useEffect(() => {
    const container = trustRef.current;
    if (!container) return;
  
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;
  
      container.querySelectorAll(".trust-float").forEach((card) => {
        const depth = card.getAttribute("data-depth");
        card.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>A&C Digital - Sakarya Web Tasarım, Yazılım ve Dijital Pazarlama Ajansı</title>
        <meta
          name="description"
          content="Sakarya merkezli dijital ajans. Web tasarım, yazılım geliştirme, SEO, sosyal medya yönetimi ve dijital pazarlama hizmetleri. Profesyonel çözümlerle dijitalde fark yaratın."
        />
        <meta
          name="keywords"
          content="Sakarya web tasarım, Sakarya dijital ajans, web tasarım Sakarya, yazılım geliştirme, SEO Sakarya, sosyal medya yönetimi, dijital pazarlama, A&C Digital"
        />
        <meta property="og:title" content="A&C Digital - Sakarya Web Tasarım ve Dijital Pazarlama" />
        <meta property="og:description" content="Sakarya merkezli dijital ajans. Web tasarım, yazılım geliştirme, SEO ve sosyal medya yönetimi hizmetleri." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A&C Digital - Sakarya Dijital Ajans" />
        <meta name="twitter:description" content="Web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri" />
        <link rel="canonical" href="https://acdigital.com.tr" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 px-4 sm:px-6">
        {/* Animated Colorful Background */}


        {/* Hero Content */}
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Logo */}

          <div className="flex gap-8 items-center justify-center mb-8">
            {/* <div className="inline-flex items-center gap-3 mb-6 px-6 py-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              Beynin Renkli Tarafı
            </span> 
          </div> */}
            <div className=" flex justify-center mb-[-60px]">
              <img
                src="/A&C@3x-8-2.png"
                alt="A&C Digital"
                className="h-32 sm:h-20 md:h-72 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))' }}
              />
            </div>

          </div>



          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block transition-all duration-500">
              <span>
                DİJİTALDE
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#004250] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
              FARK YARATIN
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hizmetler"
              className="group px-8 py-4 bg-gradient-to-r from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] text-gray-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#00D4FF]/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hizmetlerimizi Keşfedin
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#80D4FF] via-[#4DB8FF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/portfoy"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-purple-400/50"
            >
              Çalışmalarımızı Görün
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Colorful */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-[#004250] via-[#4DB8FF] to-[#80D4FF] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Creative Process Banner */}
      <section className=" px-4 sm:px-6 bg-gradient-to-r">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Yaratıcılık Bizim İşimiz</h3>
                <p className="text-white/90">Markanızı öne çıkaran özgün çözümler üretiyoruz</p>
              </div>
            </div>
            <Link
              to="/iletisim"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Projenize Başlayın →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - More Colorful */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-transparent from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-sm uppercase tracking-wider text-purple-300">Ne Yapıyoruz?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#197c93] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Sakarya web tasarım, yazılım ve sosyal medya yönetimi ajansı olarak markanızı dijital dünyada öne çıkarmak için ihtiyacınız olan tüm hizmetler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative bg-transparent rounded-2xl p-6 border border-neutral-700 hover:border-neutral-500 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                <div className="relative z-10">
                  {/* Color indicator dot */}
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-150 transition-transform duration-300`}></div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-700 group-hover:border-neutral-600 transition-colors duration-300">
                    <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 font-medium">
                      Detaylı İncele
                    </span>
                    <div className="text-neutral-500 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 -inset-x-24 -inset-y-8 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/hizmetler"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md text-white rounded-full font-semibold hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-transparent from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#80D4FF]/20 rounded-full border border-[#4DB8FF]/30">
              <span className="text-sm uppercase tracking-wider text-[#4DB8FF] font-medium">Çalışma Sürecimiz</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#197c93] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                Nasıl Çalışıyoruz?
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Profesyonel ekibimizle her projeyi aşama aşama yönetiyor ve en iyi sonucu almanızı sağlıyoruz
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF]/20 via-[#4DB8FF]/20 to-[#80D4FF]/20 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Keşif & Analiz",
                  description: "İhtiyaçlarınızı analiz ediyor, hedeflerinizi belirliyoruz",
                  icon: "🔍",
                  color: "from-[#00D4FF] to-[#4DB8FF]"
                },
                {
                  step: "02",
                  title: "Tasarım & Planlama",
                  description: "Yaratıcı konseptler ve stratejik planlar geliştiriyoruz",
                  icon: "🎨",
                  color: "from-[#4DB8FF] to-[#80D4FF]"
                },
                {
                  step: "03",
                  title: "Geliştirme",
                  description: "Teknolojik altyapıyı kuruyor, çözümü hayata geçiriyoruz",
                  icon: "💻",
                  color: "from-[#80D4FF] to-[#00D4FF]"
                },
                {
                  step: "04",
                  title: "Test & Teslimat",
                  description: "Kalite kontrolü yapıp, projeyi eksiksiz teslim ediyoruz",
                  icon: "🚀",
                  color: "from-[#4DB8FF] to-[#00D4FF]"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute lg:relative top-0 left-0 w-12 h-12 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl z-10 mb-6 mx-auto lg:mx-0`}>
                    {item.step}
                  </div>

                  <div className="mt-12 lg:mt-0 lg:pt-24 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Animated Beam Section */}
      <section className="py-20 px-4 sm:px-6 bg-transparent from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#80D4FF]/20 rounded-full border border-[#4DB8FF]/30">
              <span className="text-sm uppercase tracking-wider text-[#4DB8FF] font-medium">Entegre Çözümler</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#197c93] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                Tüm Hizmetlerimiz Birbiriyle Entegre
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Dijital pazarlama stratejinizi güçlendiren bütünleşik çözümler sunuyoruz
            </p>
          </div>

          <div ref={containerRef} className="relative flex h-[500px] md:h-[600px] w-full items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm px-6 md:px-16 lg:px-24 py-10">
            {/* Left Side - 5 Services Vertically with spacing */}
            <div className="flex flex-col justify-around h-[80%] gap-4">
              {/* Service 1 - Web Design */}
              <div
                ref={div1Ref}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="Web Tasarım"
              >
                <span className="text-xl md:text-2xl">💻</span>
              </div>

              {/* Service 2 - SEO */}
              <div
                ref={div2Ref}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="SEO"
              >
                <span className="text-xl md:text-2xl">🚀</span>
              </div>

              {/* Service 3 - Social Media */}
              <div
                ref={div3Ref}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="Sosyal Medya"
              >
                <span className="text-xl md:text-2xl">📱</span>
              </div>

              {/* Service 4 - Branding */}
              <div
                ref={div4Ref}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="Branding"
              >
                <span className="text-xl md:text-2xl">🎨</span>
              </div>

              {/* Service 5 - Google Ads */}
              <div
                ref={div5Ref}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-green-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="Google Ads"
              >
                <span className="text-xl md:text-2xl">📊</span>
              </div>
            </div>

            {/* Center - Your Brand (Larger) */}
            <div
              ref={centerRef}
              className="z-10 flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-black from-[#00D4FF] to-[#80D4FF] shadow-2xl shadow-[#4DB8FF]/50 hover:scale-105 transition-transform duration-300"
            >
                <div className="text-2xl md:text-3xl font-bold text-white">  <img
                src="/A&C@3x-8.png"
                alt="A&C Digital"
                className="h-16 sm:h-20 md:h-24 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))' }}
              /></div>
            </div>

            {/* Right Side - Customer (Same size as left services) */}
            <div className="flex items-center justify-center">
              <div
                ref={customerRef}
                className="z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                title="Müşteri"
              >
                <span className="text-xl md:text-2xl">👤</span>
              </div>
            </div>

            {/* Animated Beams - From Left Services to Center Brand */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={centerRef}
              curvature={-60}
              gradientStartColor="#a855f7"
              gradientStopColor="#ec4899"
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={centerRef}
              curvature={-30}
              gradientStartColor="#3b82f6"
              gradientStopColor="#06b6d4"
              duration={3.5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={centerRef}
              curvature={0}
              gradientStartColor="#ec4899"
              gradientStopColor="#f43f5e"
              duration={4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={centerRef}
              curvature={30}
              gradientStartColor="#f97316"
              gradientStopColor="#ef4444"
              duration={3.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={centerRef}
              curvature={60}
              gradientStartColor="#14b8a6"
              gradientStopColor="#22c55e"
              duration={3.8}
            />
            
            {/* Animated Beam - From Center Brand to Right Customer */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={customerRef}
              curvature={0}
              gradientStartColor="#00D4FF"
              gradientStopColor="#10b981"
              duration={4.5}
              reverse
            />
          </div>

          
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden bg-transparent  from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.1),transparent_50%)]"></div>

        <div className="relative text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
            <span className="text-sm uppercase tracking-wider text-cyan-300 font-medium">Referanslarımız</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
              Güvenilen Markalar
            </span>
          </h3>
          <p className="text-gray-400 text-lg">
            Farklı sektörlerden uzun soluklu iş ortaklıkları
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="relative w-full overflow-hidden py-8">
  <div className="flex w-max gap-6 md:gap-12 animate-marquee">
    {/* 1. set */}
    {Markalar.map((marka) => (
      <div
        key={`first-${marka.id}`}
        className="group min-w-[200px] h-[140px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
      >
        <img
          alt={marka.alt}
          src={marka.src}
          className="max-h-20 max-w-full object-contain filter brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}

    {/* 2. set (duplicate) */}
    {Markalar.map((marka) => (
      <div
        key={`second-${marka.id}`}
        className="group min-w-[200px] h-[140px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
      >
        <img
          alt={marka.alt}
          src={marka.src}
          className="max-h-20 max-w-full object-contain filter brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </div>
</div>


        </div>

   
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
    </>
  );
}
