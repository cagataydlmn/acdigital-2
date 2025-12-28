import { useState } from 'react';

export default function MetaAds() {
  const services = [
    {
      icon: "🎬",
      title: "Kurumsal Tanıtım Filmi",
      description: "Şirketinizi, ürünlerinizi ve hizmetlerinizi en iyi şekilde anlatan profesyonel tanıtım filmleri"
    },
    {
      icon: "📹",
      title: "Reklam Filmi Çekimi",
      description: "TV, sinema ve dijital platformlar için etkileyici reklam film prodüksiyonu"
    },
    {
      icon: "🎥",
      title: "Ürün Tanıtım Videosu",
      description: "Ürünlerinizi öne çıkaran, detaylı ve profesyonel çekim ve kurgu"
    },
    {
      icon: "🎯",
      title: "Sosyal Medya İçerikleri",
      description: "Instagram, TikTok, YouTube için optimize edilmiş kısa videolar"
    },
    {
      icon: "🏢",
      title: "Etkinlik Çekimi",
      description: "Konferans, seminer, fuar ve organizasyonlarınızın profesyonel kaydı"
    },
    {
      icon: "👔",
      title: "Röportaj & Mülakat",
      description: "Yönetici görüşleri, çalışan röportajları ve testimonial videoları"
    }
  ];

  const productionSteps = [
    {
      number: "01",
      title: "Ön Prodüksiyon",
      items: ["Konsept Geliştirme", "Senaryo Yazımı", "Storyboard Hazırlama", "Lokasyon Keşfi", "Oyuncu Seçimi"],
      icon: "📝"
    },
    {
      number: "02",
      title: "Prodüksiyon",
      items: ["4K Video Çekim", "Profesyonel Ekipman", "Deneyimli Ekip", "Aydınlatma & Ses", "Drone Çekimi"],
      icon: "🎬"
    },
    {
      number: "03",
      title: "Post Prodüksiyon",
      items: ["Video Düzenleme", "Renk Düzeltme", "Ses Düzenleme", "Motion Graphics", "Müzik & Efekt"],
      icon: "✂️"
    },
    {
      number: "04",
      title: "Teslimat",
      items: ["Format Çeşitliliği", "Platform Optimizasyonu", "Revizyon Hakları", "Arşiv Yedekleme", "Teknik Destek"],
      icon: "✓"
    }
  ];

  const equipment = [
    { name: "4K Kamera", icon: "📷" },
    { name: "Drone", icon: "🚁" },
    { name: "Gimbal", icon: "📹" },
    { name: "Profesyonel Aydınlatma", icon: "💡" },
    { name: "Ses Ekipmanları", icon: "🎤" },
    { name: "Editing Suite", icon: "💻" }
  ];

  const portfolioVideos = [
    { title: "Kurumsal Tanıtım", category: "Kurumsal", duration: "2:30" },
    { title: "Ürün Lansmanı", category: "Reklam", duration: "1:45" },
    { title: "Etkinlik Özeti", category: "Etkinlik", duration: "3:15" },
    { title: "Testimonial", category: "Röportaj", duration: "1:20" },
    { title: "Sosyal Medya", category: "Digital", duration: "0:45" },
    { title: "Drone Çekim", category: "Özel", duration: "2:00" }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section with Video Background Feel */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/tanitim/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Film Strip Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-8 px-4 sm:px-6 py-2 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-red-400">● REC Tanıtım Filmi Çekimleri</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight px-4 font-thin">
            Hikayenizi
            <br />
            <span className="bg-gradient-to-r font-bold from-rose-700 via-red-400 to-pink-800 bg-clip-text text-transparent">
              Sinemaya Dönüştürün
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            4K profesyonel kamera ekipmanları, deneyimli prodüksiyon ekibi ve yaratıcı kurgu ile 
            markanızı unutulmaz bir hikaye haline getiriyoruz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-12">
            <a 
              href="#hizmetler" 
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              🎬 Hizmetlerimizi Keşfedin
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
            >
              ▶️ Çalışmalarımızı İzleyin
            </a>
          </div>

          {/* Equipment Badges */}
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-xs sm:text-sm"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="hizmetler" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4">
              Video Prodüksiyon Hizmetlerimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Her türlü video ihtiyacınız için profesyonel çözümler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4">
              Prodüksiyon Sürecimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Fikirden teslimata kadar profesyonel 4 aşamalı süreç
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productionSteps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-500/50 to-orange-500/50"></div>
                )}
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-3xl font-bold mb-2 text-gray-600">{step.number}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-red-400 mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4">
              Video Portföyümüz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 px-4">
              Gerçekleştirdiğimiz bazı başarılı video projeler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioVideos.map((video, index) => (
              <div 
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-red-500/20 to-orange-500/20"
              >
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-4xl">▶️</span>
                    </div>
                    <p className="text-sm text-gray-400">Video Eklenecek</p>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-lg font-bold">{video.title}</h4>
                      <span className="text-sm bg-red-600 px-3 py-1 rounded-full">{video.duration}</span>
                    </div>
                    <p className="text-sm text-gray-300">{video.category}</p>
                  </div>
                </div>

                {/* Play Button Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl ml-1">▶️</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4">
              Neden Bizimle Çalışmalısınız?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎬",
                title: "Profesyonel Ekipman",
                description: "4K kamera, drone, gimbal ve profesyonel stüdyo ekipmanları"
              },
              {
                icon: "👥",
                title: "Deneyimli Ekip",
                description: "Yönetmen, kameraman, kurgucu ve ses teknisyenlerinden oluşan uzman kadro"
              },
              {
                icon: "✨",
                title: "Yaratıcı Konsept",
                description: "Markanıza özel, özgün senaryo ve görsel hikaye anlatımı"
              },
              {
                icon: "⚡",
                title: "Hızlı Teslimat",
                description: "Acil projeler için express prodüksiyon ve kurgu hizmeti"
              },
              {
                icon: "🔄",
                title: "Sınırsız Revizyon",
                description: "Memnun kalana kadar ücretsiz düzeltme ve değişiklik hakkı"
              },
              {
                icon: "💰",
                title: "Uygun Fiyat",
                description: "Bütçenize uygun, şeffaf fiyatlandırma ve paket seçenekleri"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-red-500/30 hover:scale-105"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            {/* Content */}
            <div className="relative p-12 md:p-16 text-center">
              <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
                <span className="text-sm uppercase tracking-[0.3em]">● Kamera Açık</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Haydi, Kameralara Başlayalım!
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Projeniz hakkında konuşmak ve ücretsiz fiyat teklifi almak için 
                hemen bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/iletisim" 
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  📧 Teklif Al
                </a>
                <a 
                  href="tel:+905XXXXXXXXX" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
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

