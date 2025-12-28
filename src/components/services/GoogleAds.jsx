import { useState } from 'react';

export default function GoogleAds() {
  const [activeCategory, setActiveCategory] = useState(0);

  const designServices = [
    {
      title: "Kitap Tasarımı",
      subtitle: "Profesyonel Kitap & Yayın Tasarımı",
      description: "Roman, hikaye, şiir, ansiklopedi ve her türlü yayın için profesyonel kitap tasarımı. Kapak tasarımı, iç sayfa düzeni, tipografi ve baskıya hazırlık hizmetleri sunuyoruz.",
      items: [
        { name: "Kapak Tasarımı", detail: "Etkileyici, satışa yönelik kapak tasarımları" },
        { name: "İç Sayfa Düzeni", detail: "Okunabilir, estetik sayfa tasarımı" },
        { name: "Tipografi & Mizanpaj", detail: "Profesyonel yazı düzeni ve hizalama" },
        { name: "İllüstrasyon", detail: "Özel çizimler ve görseller" },
        { name: "E-Kitap Tasarımı", detail: "Dijital yayınlar için format" },
        { name: "Baskıya Hazırlık", detail: "PDF, CMYK dönüşüm ve kontrol" }
      ],
      images: [
        "/images/tasarim/kitap-1.jpg",
        "/images/tasarim/kitap-2.jpg",
        "/images/tasarim/kitap-3.jpg"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Dergi Tasarımı",
      subtitle: "Modern Dergi & Katalog Tasarımı",
      description: "Kurumsal dergiler, kataloglar, e-dergiler ve periyodik yayınlar için profesyonel tasarım hizmetleri. Marka kimliğinize uygun, estetik ve işlevsel tasarımlar.",
      items: [
        { name: "Dergi Kapak Tasarımı", detail: "Dikkat çekici kapak konseptleri" },
        { name: "İç Sayfa Layoutu", detail: "Grid sistemi ve sayfa düzeni" },
        { name: "Kurumsal Katalog", detail: "Ürün katalogu ve lookbook" },
        { name: "E-Dergi Tasarımı", detail: "İnteraktif dijital dergiler" },
        { name: "İnfografik", detail: "Veri görselleştirme ve grafikler" },
        { name: "Template Oluşturma", detail: "Yeniden kullanılabilir şablonlar" }
      ],
      images: [
        "/images/tasarim/dergi-1.jpg",
        "/images/tasarim/dergi-2.jpg",
        "/images/tasarim/dergi-3.jpg"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "İlan – Broşür Tasarımı",
      subtitle: "Tanıtım Materyali Tasarımı",
      description: "Broşür, flyer, afiş, katalog ve her türlü tanıtım materyali için yaratıcı tasarım çözümleri. Markanızı etkili şekilde tanıtan, dikkatleri çeken tasarımlar.",
      items: [
        { name: "Broşür Tasarımı", detail: "2-3-4 katlı broşür tasarımları" },
        { name: "Flyer & El İlanı", detail: "A4, A5 tanıtım materyalleri" },
        { name: "Afiş Tasarımı", detail: "Her boyutta poster tasarımı" },
        { name: "Billboard & Raket", detail: "Açık hava reklam tasarımları" },
        { name: "Roll-Up Banner", detail: "Etkinlik ve fuar banner'ları" },
        { name: "Kartvizit", detail: "Özel kesim, premium kartvizit" }
      ],
      images: [
        "/images/tasarim/brosur-1.jpg",
        "/images/tasarim/brosur-2.jpg",
        "/images/tasarim/brosur-3.jpg"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: "🎨",
      title: "Yaratıcı Tasarım",
      description: "Özgün, markanıza özel tasarım konseptleri"
    },
    {
      icon: "📐",
      title: "Profesyonel Düzen",
      description: "Grid sistemi, tipografi ve görsel hiyerarşi"
    },
    {
      icon: "🖨️",
      title: "Baskıya Hazır",
      description: "CMYK, PDF/X-1a formatında teslim"
    },
    {
      icon: "⚡",
      title: "Hızlı Teslimat",
      description: "Acil işler için 24-48 saat içinde teslim"
    },
    {
      icon: "🔄",
      title: "Sınırsız Revizyon",
      description: "Memnun kalana kadar ücretsiz düzeltme"
    },
    {
      icon: "✨",
      title: "Yüksek Kalite",
      description: "300 DPI, vektörel grafik ve kaliteli görseller"
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/tasarim/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Tasarım Hizmetleri</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4">
            Yaratıcı Tasarım
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text font-bold text-transparent">
              Güçlü İletişim
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Kitap tasarımından dergi layoutuna, broşürden ilana kadar 
            tüm yayın ve tanıtım materyalleriniz için profesyonel tasarım hizmetleri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="#hizmetler" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Hizmetleri İncele
            </a>
            <a 
              href="#portfolio" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
            >
              Çalışmalarımızı Gör
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section id="hizmetler" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Tasarım Hizmetlerimiz</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Adobe InDesign, Illustrator ve Photoshop ile profesyonel, baskıya hazır tasarımlar
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12 sm:mb-16 px-4">
            {designServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white scale-105 shadow-lg'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Category Detail */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${designServices[activeCategory].color} text-white text-xs sm:text-sm font-semibold mb-4`}>
                  {designServices[activeCategory].subtitle}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {designServices[activeCategory].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {designServices[activeCategory].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {designServices[activeCategory].items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-2 flex-shrink-0"></div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 break-words">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="/iletisim" 
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Teklif Al
                </a>
                <a 
                  href="#portfolio" 
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-center text-sm sm:text-base"
                >
                  Örnekleri Gör
                </a>
              </div>
            </div>

            {/* Right: Images */}
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {designServices[activeCategory].images.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`relative rounded-xl sm:rounded-2xl overflow-hidden group ${
                      idx === 0 ? 'col-span-2 h-48 sm:h-64 md:h-80' : 'h-40 sm:h-48 md:h-64'
                    }`}
                  >
                    {/* Placeholder */}
                    <div className={`w-full h-full bg-gradient-to-br ${designServices[activeCategory].color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-2">
                          {activeCategory === 0 ? '📚' : activeCategory === 1 ? '📰' : '📄'}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400">Çalışma {idx + 1}</p>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Görsel Eklenecek</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              {/* Decorative Element */}
              <div className={`absolute -z-10 -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br ${designServices[activeCategory].color} rounded-full blur-3xl opacity-20`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Çalışmalarımız</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Başarılı tasarım projelerinden örnekler
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-3">
                      {item % 3 === 1 ? '📚' : item % 3 === 2 ? '📰' : '📄'}
                    </div>
                    <p className="text-base sm:text-lg font-semibold">Proje {item}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Görsel Eklenecek</p>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 sm:p-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Proje Başlığı</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Proje açıklaması buraya gelecek</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">Neden MFO Creative?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105"
              >
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Tasarım Projenize Başlayalım
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Ücretsiz tasarım danışmanlığı için bizimle iletişime geçin. 
                Profesyonel tasarımlarla fark yaratın!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/iletisim" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                >
                  İletişime Geç
                </a>
                <a 
                  href="tel:+905XXXXXXXXX" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                >
                  📞 Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

