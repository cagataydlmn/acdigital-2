import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hizmetler() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      title: "Web Tasarımı ve geliştirme",
      path: "/hizmetler/web-tasarim",
      icon: "🌐",
      description: "Modern, hızlı ve kullanıcı dostu web siteleriyle dijital varlığınızı güçlendiriyoruz.",
      tags: ["Web", "Yazılım"],
      gradient: "from-blue-500 to-cyan-500",
      category: "Dijital"
    },
    {
      title: "E-ticaret Çözümleri",
      path: "/hizmetler/eticaret-cozumleri",
      icon: "🛒",
      description: "Satışlarınızı katlayacak, güvenli ve ölçeklenebilir e-ticaret platformları geliştiriyoruz.",
      tags: ["Dijital", "Sosyal Medya"],
      gradient: "from-pink-500 to-rose-500",
      category: "digital"
    },
    {
      title: "SEO Hizmetleri",
      path: "/hizmetler/seo",
      icon: "🔍",
      description: "Arama motorlarında üst sıralara çıkarak organik trafiğinizi ve görünürlüğünüzü artırıyoruz.",
      tags: ["Tasarım", "Kreatif"],
      gradient: "from-purple-500 to-indigo-500",
      category: "Dijital"
    },
    {
      title: "Sosyal Medya Yönetimi",
      path: "/hizmetler/sosyal-medya",
      icon: "🧑‍🧑‍🧒",
      description: "Sosyal medyada etkileşimi artıran stratejilerle marka bilinirliğinizi yükseltiyoruz.",
      tags: ["Video", "Prodüksiyon"],
      gradient: "from-orange-500 to-red-500",
      category: "media"
    },
    {
      title: "Meta ADS Yönetimi",
      path: "/hizmetler/meta-ads",
      icon: "📈",
      description: "Facebook ve Instagram reklamları ile hedef kitlenize ulaşarak dönüşümlerinizi optimize ediyoruz.",
      tags: ["Branding", "Kimlik"],
      gradient: "from-teal-500 to-green-500",
      category: "design"
    },
    {
      title: "Google ADS Yönetimi",
      path: "/hizmetler/GoogleAds",
      icon: "📊",
      description: "Google ağında etkili reklam kampanyalarıyla potansiyel müşterilerinize doğrudan ulaşın.",
      tags: ["Reklam", "Marketing"],
      gradient: "from-yellow-500 to-orange-500",
      category: "digital"
    },
    {
      title: "Özel Yazılım Geliştirme",
      path: "/hizmetler/ozel-yazilim",
      icon: "💻",
      description: "İş süreçlerinize özel yazılım çözümleriyle verimliliğinizi ve rekabet gücünüzü artırıyoruz.",
      tags: ["Web", "Yazılım"],
      gradient: "from-blue-600 to-purple-600",
      category: "digital"
    },
    {
      title: "Kurumsal Kimilik ve Marka Tasarımı",
      path: "/hizmetler/kurumsal-kimlik",
      icon: "🏢",
      description: "Markanızın kişiliğini yansıtan özgün ve etkileyici kurumsal kimlik tasarımları sunuyoruz.",
      tags: ["Branding", "Tasarım"],
      gradient: "from-pink-600 to-red-600",
      category: "design"
    },
    
  ];

  const categories = [
    { id: 'all', name: 'Tümü', icon: '🎯' },
    { id: 'design', name: 'Tasarım', icon: '🎨' },
    { id: 'digital', name: 'Dijital', icon: '📱' },
    { id: 'print', name: 'Baskı', icon: '🖨️' },
    { id: 'media', name: 'Medya', icon: '🎬' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const stats = [
    { number: "500+", label: "Tamamlanan Proje", icon: "✓" },
    { number: "150+", label: "Mutlu Müşteri", icon: "😊" },
    { number: "7+", label: "Hizmet Alanı", icon: "🎯" },
    { number: "24/7", label: "Destek", icon: "💬" }
  ];

  return (
    <div className="min-h-screen text-white relative pt-20" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
     
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="inline-block mb-4 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Hizmetlerimiz</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl  mb-4 sm:mb-8 leading-tight px-4 font-thin">
            Hayallerinizi
            <br />
            <span className="bg-gradient-to-r font-bold from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gerçeğe Dönüştürün
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Sakarya web tasarım, yazılım ve sosyal medya yönetimi ajansı olarak strateji, tasarım ve teknolojiyi bir araya getirerek markanızın dijital dünyada fark yaratmasını sağlıyoruz. Her hizmet, benzersiz ihtiyaçlarınıza özel olarak kurgulanır.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a 
              href="#hizmetler" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Hizmetleri Keşfet
            </a>
            <a 
              href="/iletisim" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Teklif Al
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="mr-1 sm:mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden min-h-[280px] sm:min-h-[320px]">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center text-3xl sm:text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-white/10">
                        {service.icon}
                      </div>

                      <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {service.title}
                        </h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-400 group-hover:bg-white/10 group-hover:border-white/20 transition-all"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                      <span className="text-sm sm:text-base font-semibold group-hover:text-blue-400 transition-colors">
                        Detayları İncele
                      </span>
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                        <span className="text-white text-lg">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">Nasıl Çalışıyoruz?</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              4 basit adımda hayalinizdeki projeye ulaşın
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { step: "01", title: "İletişim", desc: "Projenizi anlatın", icon: "📞" },
              { step: "02", title: "Planlama", desc: "Strateji oluşturalım", icon: "📋" },
              { step: "03", title: "Üretim", desc: "Projeyi hayata geçirelim", icon: "⚡" },
              { step: "04", title: "Teslimat", desc: "Sonuçtan memnun kalın", icon: "🎉" }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group text-center"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                )}
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">{item.icon}</div>
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gray-600">{item.step}</div>
                  <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">Neden Bizi Seçmelisiniz?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                icon: "⚡",
                title: "Hızlı & Güvenilir",
                desc: "Zamanında teslimat ve kaliteli hizmet garantisi"
              },
              {
                icon: "🎯",
                title: "Uzman Ekip",
                desc: "Alanında deneyimli profesyonel ekibimiz"
              },
              {
                icon: "💎",
                title: "Uygun Fiyat",
                desc: "En kaliteli hizmeti en uygun fiyata sunuyoruz"
              },
              {
                icon: "🔄",
                title: "Sınırsız Revizyon",
                desc: "Memnun kalana kadar çalışmalarımızı düzeltiyoruz"
              },
              {
                icon: "🎨",
                title: "Yaratıcı Çözümler",
                desc: "Her projeye özel, özgün tasarım ve stratejiler"
              },
              {
                icon: "📞",
                title: "7/24 Destek",
                desc: "Her zaman ulaşabileceğiniz müşteri desteği"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Projenize Bugün Başlayalım
              </h2>
              <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Ücretsiz danışmanlık için bizimle iletişime geçin. 
                Size özel çözümler üretmek için sabırsızlanıyoruz!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/iletisim" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Hemen İletişime Geç
                </a>
                <a 
                  href="/portfoy" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  Çalışmalarımızı Gör
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

