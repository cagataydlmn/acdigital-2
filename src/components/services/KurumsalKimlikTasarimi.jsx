import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function KurumsalKimlikTasarimi() {
  const [activeTab, setActiveTab] = useState(0);

  const brandingServices = [
    {
      icon: "🎨",
      title: "Logo Tasarımı",
      description: "Markanızı en iyi temsil eden, özgün ve akılda kalıcı logo tasarımları"
    },
    {
      icon: "📋",
      title: "Kurumsal Kimlik Kılavuzu",
      description: "Marka kullanım standartları, renkler, tipografi ve uygulama örnekleri"
    },
    {
      icon: "📄",
      title: "Kırtasiye Tasarımı",
      description: "Kartvizit, antetli kağıt, zarf, klasör ve tüm ofis malzemeleri"
    },
    {
      icon: "🎯",
      title: "Marka Rehberi",
      description: "Logo kullanımı, renk paleti, font seçimi ve görsel dil standartları"
    },
    {
      icon: "🖼️",
      title: "Sosyal Medya Kimlikleri",
      description: "Profil görselleri, kapak fotoğrafları ve post şablonları"
    },
    {
      icon: "📦",
      title: "Ambalaj Tasarımı",
      description: "Ürün ambalajı, etiket ve paket tasarım çözümleri"
    }
  ];

  const portfolioCategories = [
    { id: 0, name: "Tümü" },
    { id: 1, name: "Logo" },
    { id: 2, name: "Kırtasiye" },
    { id: 3, name: "Marka Kimligi" }
  ];

  const brandElements = [
    {
      category: "Logo & Sembol",
      items: [
        "Ana Logo Tasarımı",
        "Logo Varyasyonları",
        "Sembol/İkon Tasarımı",
        "Favicon",
        "Mühür/Damga"
      ]
    },
    {
      category: "Renk & Tipografi",
      items: [
        "Kurumsal Renk Paleti",
        "Yardımcı Renkler",
        "Tipografi Seçimi",
        "Font Hiyerarşisi",
        "Renk Kullanım Kuralları"
      ]
    },
    {
      category: "Kırtasiye & Dokümanlar",
      items: [
        "Kartvizit Tasarımı",
        "Antetli Kağıt",
        "Zarf Tasarımı",
        "Klasör & Dosya",
        "Teklif Dosyası"
      ]
    },
    {
      category: "Dijital Kimlik",
      items: [
        "Web Sitesi Kimligi",
        "Sosyal Medya Görselleri",
        "E-posta İmzası",
        "Dijital Kartvizit",
        "Prezentasyon Şablonu"
      ]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Keşif & Analiz",
      description: "Markanızı, sektörünüzü ve hedef kitlenizi derinlemesine analiz ediyoruz",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Konsept Geliştirme",
      description: "Farklı konseptler ve yaratıcı fikirler sunuyoruz",
      icon: "💡"
    },
    {
      step: "03",
      title: "Tasarım & Uygulama",
      description: "Seçilen konsepti detaylı şekilde tasarlıyoruz",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Kılavuz & Teslim",
      description: "Kullanım kılavuzu ile birlikte tüm dosyaları teslim ediyoruz",
      icon: "📦"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kurumsal Kimlik Tasarımı | A&C Digital - Logo ve Marka Tasarımı</title>
        <meta
          name="description"
          content="Kurumsal kimlik tasarımı hizmetleri. Logo tasarımı, kurumsal kimlik kılavuzu, kırtasiye tasarımı ve marka kimliği çözümleri."
        />
        <meta
          name="keywords"
          content="kurumsal kimlik tasarımı, logo tasarımı, marka kimliği, kurumsal kimlik kılavuzu, kırtasiye tasarımı, Sakarya tasarım ajansı"
        />
        <meta property="og:title" content="Kurumsal Kimlik Tasarımı | A&C Digital" />
        <meta property="og:description" content="Markanıza güçlü bir kimlik kazandırın. Logo ve kurumsal kimlik tasarımı." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hizmetler/kurumsal-kimlik" />
        <link rel="canonical" href="https://acdigital.com.tr/hizmetler/kurumsal-kimlik" />
      </Helmet>
      <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/kurumsal/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-500 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-4 border-purple-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-pink-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-full border border-blue-500/30">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-400">Kurumsal Kimlik Tasarımı</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin mb-8 leading-tight px-4">
            Markanıza
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold bg-clip-text text-transparent">
              Kimlik Kazandırın
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Logo tasarımından kurumsal kimlik kılavuzuna, kırtasiye tasarımından dijital kimliklere kadar 
            markanızı güçlendirecek profesyonel tasarım hizmetleri
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="#hizmetler" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Hizmetlerimizi İnceleyin
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Portföyümüzü Görün
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="hizmetler" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Kurumsal Kimlik Hizmetlerimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Markanızı güçlendirecek kapsamlı kimlik tasarım çözümleri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Kurumsal Kimlik Paketinde Neler Var?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Kapsamlı kimlik tasarımı ile markanızı her alanda temsil edin
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandElements.map((element, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {element.category}
                </h3>
                <ul className="space-y-3">
                  {element.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Tasarım Sürecimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              4 adımda profesyonel kurumsal kimlik tasarımı
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((process, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">{process.icon}</div>
                  <div className="text-4xl font-bold mb-2 text-blue-400">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Kimlik Tasarım Portföyümüz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Başarılı kurumsal kimlik projelerinden örnekler
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-blue-500/20 to-purple-500/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎨</div>
                    <p className="text-lg font-semibold">Marka {item}</p>
                    <p className="text-sm text-gray-400 mt-2">Görsel Eklenecek</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Kurumsal Kimlik</h4>
                    <p className="text-sm text-gray-300">Logo & Kimlik Tasarımı</p>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Neden Bizimle Çalışmalısınız?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Stratejik Yaklaşım",
                description: "Sektör analizi ve hedef kitle araştırması ile stratejik tasarım"
              },
              {
                icon: "✨",
                title: "Özgün Tasarım",
                description: "Markanıza özel, benzersiz ve akılda kalıcı kimlik çözümleri"
              },
              {
                icon: "📐",
                title: "Profesyonel Standartlar",
                description: "Vektörel, yüksek çözünürlüklü ve baskıya hazır dosyalar"
              },
              {
                icon: "📖",
                title: "Detaylı Kılavuz",
                description: "Kapsamlı kullanım kılavuzu ve uygulama örnekleri"
              },
              {
                icon: "🔄",
                title: "Sınırsız Revizyon",
                description: "Memnun kalana kadar ücretsiz revizyon hakkı"
              },
              {
                icon: "🎁",
                title: "Ek Dosyalar",
                description: "Tüm format seçenekleri ve kaynak dosyalar dahil"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 border border-blue-500/20 hover:scale-105"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Markanıza Güçlü Bir Kimlik Kazandırın
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ücretsiz danışmanlık ve kurumsal kimlik teklifi için bizimle iletişime geçin. 
                Markanızı birlikte inşa edelim!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/iletisim" 
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Ücretsiz Teklif Alın
                </a>
                <a 
                  href="tel:+905XXXXXXXXX" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  📞 Hemen Arayın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

