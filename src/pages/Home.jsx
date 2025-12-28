import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Kurumsal Kimlik Tasarımı",
      description: "Markanıza özgün ve profesyonel kimlik kazandırıyoruz. Logo, kurumsal kılavuz ve görsel dil tasarımı.",
      path: "/hizmetler/kurumsal-kimlik-tasarimi",
      gradient: "from-blue-500 to-cyan-500",
      color: "blue"
    },
    {
      title: "Web Tasarım & Yazılım",
      description: "Modern, kullanıcı dostu ve mobil uyumlu web siteleri ve uygulamalar geliştiriyoruz.",
      path: "/hizmetler/web-tasarim-uygulama",
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      title: "Sosyal Medya Yönetimi",
      description: "İçerik üretimi, reklam kampanyaları ve sosyal medya stratejileri ile markanızı büyütüyoruz.",
      path: "/hizmetler/sosyal-medya-calismalari",
      gradient: "from-pink-500 to-rose-500",
      color: "pink"
    },
    {
      title: "Tanıtım Filmi Çekimi",
      description: "Profesyonel video prodüksiyon, kurumsal tanıtım filmleri ve reklam çekimleri.",
      path: "/hizmetler/tanitim-filmi-cekimleri",
      gradient: "from-orange-500 to-red-500",
      color: "orange"
    },
    {
      title: "Grafik Tasarım",
      description: "Broşür, katalog, afiş, sosyal medya görselleri ve tüm görsel ihtiyaçlarınız için yaratıcı çözümler.",
      path: "/hizmetler/tasarim-hizmetleri",
      gradient: "from-teal-500 to-green-500",
      color: "teal"
    },
    {
      title: "Baskı Hizmetleri",
      description: "Kartvizit, katalog, broşür, afiş ve tüm tanıtım materyalleriniz için profesyonel baskı çözümleri.",
      path: "/hizmetler/baski-hizmetleri",
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

  return (
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
          <div className="mb-6 flex justify-center">
            <img 
              src="/A&C@3x-8.png" 
              alt="A&C Digital" 
              className="h-16 sm:h-20 md:h-24 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
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
           <br/>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FARK YARATIN
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hizmetler" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Hizmetlerimizi Keşfedin</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Creative Process Banner */}
      <section className="py-8 px-4 sm:px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
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
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl whitespace-nowrap"
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Renkli Hizmetlerimiz
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Her hizmetimiz, markanıza değer katan bir sanat eseri
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

      {/* Portfolio Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black/70 from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full border border-pink-500/30">
              <span className="text-sm uppercase tracking-wider text-pink-300">Portföyümüz</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Renkli Hikayeler
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Her proje bir başarı hikayesi, her tasarım bir yolculuk
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioItems.map((item, idx) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-pink-500 to-rose-500',
                'from-orange-500 to-yellow-500'
              ];
              return (
                <div 
                  key={item.id}
                  className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  {/* Placeholder for Project Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx]}/30 flex items-center justify-center`}>
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4 opacity-50 group-hover:scale-110 transition-transform">📸</div>
                      <p className="text-sm text-gray-400">Görsel Eklenecek</p>
                      <p className="text-xs text-gray-500 mt-2">{item.image}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className={`text-xs mb-2 uppercase tracking-wider bg-gradient-to-r ${gradients[idx]} bg-clip-text text-transparent font-bold`}>
                        {item.category}
                      </p>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link 
              to="/portfoy" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              Tüm Projeleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-full border border-teal-500/30">
              <span className="text-sm uppercase tracking-wider text-teal-300">Neden Biz?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                MFO Creative Farkı
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Yaratıcılık, profesyonellik ve sonuç odaklılık bir arada
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Hızlı & Profesyonel", desc: "Zamanında teslimat ve kaliteli hizmet garantisi. Projelerinizi eksiksiz ve zamanında teslim ediyoruz.", gradient: "from-blue-500 to-purple-500" },
              { icon: "🎯", title: "Stratejik Yaklaşım", desc: "Her proje için özel strateji geliştiriyoruz. Sektör analizi ve hedef kitle araştırması ile sonuç odaklı çalışıyoruz.", gradient: "from-purple-500 to-pink-500" },
              { icon: "✨", title: "Yaratıcı Çözümler", desc: "Özgün, yenilikçi ve markanıza özel tasarımlar. Sıradanlıktan uzak, akılda kalıcı projeler üretiyoruz.", gradient: "from-pink-500 to-rose-500" },
              { icon: "🤝", title: "Güvenilir İş Ortağı", desc: "150'den fazla mutlu müşterimizle uzun soluklu iş birliklerinizi sürdürüyoruz. Güven ve şeffaflık önceliğimiz.", gradient: "from-orange-500 to-red-500" },
              { icon: "🔄", title: "Sınırsız Revizyon", desc: "Memnun kalana kadar çalışmalarınızı düzeltiyoruz. Müşteri memnuniyeti bizim için en önemli başarı kriteri.", gradient: "from-teal-500 to-green-500" },
              { icon: "💬", title: "7/24 Destek", desc: "Her zaman yanınızdayız. Sorularınıza hızlı yanıt veriyor, projelerinizde sürekli destek sağlıyoruz.", gradient: "from-indigo-500 to-blue-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black/70 from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <span className="text-sm uppercase tracking-wider text-yellow-300">Referanslar</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Müşterilerimizden
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Birlikte ürettiğimiz başarı hikayeleri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const gradients = [
                'from-blue-500 to-purple-500',
                'from-purple-500 to-pink-500',
                'from-pink-500 to-orange-500'
              ];
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            <div className="relative p-12 md:p-16 text-center">
              <div className="text-6xl mb-6 animate-bounce">🚀</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fikirleriniz Hayata Geçmeyi Bekliyor
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ücretsiz danışmanlık ve proje teklifi için bizimle iletişime geçin. 
                <br />
                <span className="font-bold">Markanızı birlikte renklendirin!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/iletisim" 
                  className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-2xl"
                >
                  Hemen İletişime Geçin 🎨
                </Link>
                <Link 
                  to="/hakkimizda" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Bizi Tanıyın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 px-4 sm:px-6 bg-black/70 from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Güvenilen İş Ortağınız
              </span>
            </h3>
            <p className="text-gray-400">
              Farklı sektörlerden markalarla rengarenk projeler üretiyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: 1, gradient: 'from-blue-500 to-cyan-500' },
              { num: 2, gradient: 'from-purple-500 to-pink-500' },
              { num: 3, gradient: 'from-pink-500 to-rose-500' },
              { num: 4, gradient: 'from-orange-500 to-red-500' },
              { num: 5, gradient: 'from-teal-500 to-green-500' },
              { num: 6, gradient: 'from-indigo-500 to-blue-500' }
            ].map((item) => (
              <div 
                key={item.num}
                className="group aspect-square bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">🏢</div>
                  <p className="text-xs text-gray-500">Logo {item.num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
