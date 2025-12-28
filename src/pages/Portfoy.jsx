import { useState } from 'react';

export default function Portfoy() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Kurumsal Kimlik Tasarımı',
      category: 'Branding',
      client: 'Tech Innovations Ltd.',
      description: 'Teknoloji sektöründe faaliyet gösteren firmaya modern ve dinamik bir kurumsal kimlik tasarımı. Logo, kartvizit, antetli kağıt ve tüm kurumsal materyallerin tasarımı.',
      icon: '🎨',
      tags: ['Logo', 'Branding', 'Corporate Identity'],
      year: '2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'E-Ticaret Web Sitesi',
      category: 'Web Design',
      client: 'Fashion Store',
      description: 'Modern ve kullanıcı dostu arayüze sahip, tam responsive e-ticaret platformu. Ödeme entegrasyonu, ürün yönetimi ve admin paneli.',
      icon: '🛒',
      tags: ['Web Design', 'E-Commerce', 'UI/UX'],
      year: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Sosyal Medya Kampanyası',
      category: 'Digital Media',
      client: 'Restoran Zinciri',
      description: 'Kapsamlı sosyal medya stratejisi ve içerik üretimi. Instagram, Facebook ve TikTok için özel tasarlanmış görseller ve videolar.',
      icon: '📱',
      tags: ['Social Media', 'Video', 'Content'],
      year: '2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Katalog Tasarımı',
      category: 'Print',
      client: 'Mobilya Üreticisi',
      description: '120 sayfalık lüks mobilya kataloğu. Ürün fotoğrafları, layout tasarımı ve ofset baskı. Premium kağıt ve cilt seçenekleri.',
      icon: '📚',
      tags: ['Print', 'Editorial', 'Typography'],
      year: '2023',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Tanıtım Filmi',
      category: 'Video',
      client: 'Eğitim Kurumu',
      description: '3 dakikalık profesyonel tanıtım filmi. Drone çekimi, kurumsal röportajlar ve motion graphics efektleri.',
      icon: '🎬',
      tags: ['Video', 'Production', 'Drone'],
      year: '2024',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Ürün Ambalaj Tasarımı',
      category: 'Packaging',
      client: 'Organik Gıda Markası',
      description: 'Çevre dostu, minimalist ambalaj tasarımı. 15 farklı ürün için özel tasarım ve baskı çözümleri.',
      icon: '📦',
      tags: ['Packaging', 'Product Design', 'Retail'],
      year: '2024',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Dergi Tasarımı',
      category: 'Print',
      client: 'Lifestyle Dergisi',
      description: 'Aylık lifestyle dergisi için tam sayfa layout tasarımı. Kapak, iç sayfa düzeni ve tipografi çalışması.',
      icon: '📖',
      tags: ['Print', 'Editorial', 'Layout'],
      year: '2023',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 8,
      title: 'Mobil Uygulama Tasarımı',
      category: 'App Design',
      client: 'Fitness App Startup',
      description: 'iOS ve Android için kullanıcı dostu fitness uygulaması. Antrenman takibi, beslenme planı ve sosyal özellikler.',
      icon: '📲',
      tags: ['App Design', 'Mobile', 'UI/UX'],
      year: '2024',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 9,
      title: 'Marka Yenileme Projesi',
      category: 'Branding',
      client: 'Otomotiv Servisi',
      description: 'Eski markanın modernize edilmesi. Yeni logo, renk paleti ve tüm kurumsal iletişim materyallerinin yenilenmesi.',
      icon: '✨',
      tags: ['Logo', 'Branding', 'Identity'],
      year: '2023',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 10,
      title: 'Kurumsal Web Sitesi',
      category: 'Web Design',
      client: 'Hukuk Bürosu',
      description: 'Profesyonel ve güvenilir görünen kurumsal web sitesi. Responsive tasarım, blog sistemi ve iletişim formları.',
      icon: '💻',
      tags: ['Web Design', 'Development', 'UI/UX'],
      year: '2024',
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 11,
      title: 'Video İçerik Üretimi',
      category: 'Digital Media',
      client: 'Kozmetik Markası',
      description: 'Ürün tanıtım videoları, influencer işbirlikleri ve sosyal medya reels içerikleri. Aylık 20+ video üretimi.',
      icon: '🎥',
      tags: ['Video', 'Content', 'Social Media'],
      year: '2024',
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      id: 12,
      title: 'Broşür & Flyer Tasarımı',
      category: 'Print',
      client: 'Gayrimenkul Firması',
      description: 'Konut projeleri için çift katlı broşürler ve A5 flyer tasarımları. Premium baskı ve lakeli bitim.',
      icon: '📄',
      tags: ['Print', 'Design', 'Layout'],
      year: '2023',
      color: 'from-emerald-500 to-green-500'
    },
  ];

  const categories = ['Tümü', 'Branding', 'Web Design', 'Digital Media', 'Print', 'Video', 'Packaging', 'App Design'];

  const filteredProjects = selectedCategory === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Portföy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Başarılı
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projelerimiz
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Yılların deneyimi ve tutkuyla hazırladığımız projelerle müşterilerimizin başarısına katkıda bulunuyoruz. 
            Her proje bizim için yeni bir hikaye, yeni bir başarı.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 sticky top-20 z-30 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-white text-black scale-105 shadow-lg'
                    : 'bg-white/5 text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Count */}
          <div className="mb-8 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              {filteredProjects.length} proje bulundu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              >
                {/* Project Image/Icon */}
                <div
                  className={`h-48 sm:h-56 md:h-64 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl transition-transform duration-500 group-hover:scale-110 relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative z-10">{project.icon}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white text-sm font-semibold">Detayları Gör →</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-400 mb-3">
                    {project.client}
                  </p>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Rakamlarla Başarılarımız</h2>
            <p className="text-sm sm:text-base text-gray-400">Her proje bizim için bir başarı hikayesi</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '500+', label: 'Tamamlanan Proje', icon: '✅' },
              { number: '150+', label: 'Mutlu Müşteri', icon: '😊' },
              { number: '50+', label: 'Ödül & Başarı', icon: '🏆' },
              { number: '10+', label: 'Yıllık Deneyim', icon: '⭐' }
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl text-center transition-all hover:scale-105 group"
                style={{
                  backdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            
            <div className="relative p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Sizin Projeniz de Burada Olsun
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Hayallerinizdeki projeyi birlikte hayata geçirelim. Profesyonel ekibimiz sizin için hazır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/iletisim" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                >
                  Proje Başlat
                </a>
                <a 
                  href="/hizmetler" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                >
                  Hizmetlerimizi Keşfet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl"
            style={{
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(20, 20, 20, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              ✕
            </button>

            {/* Modal content */}
            <div className="p-6 sm:p-8 md:p-12">
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${selectedProject.color} text-white text-xs sm:text-sm font-semibold mb-4`}>
                {selectedProject.category}
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{selectedProject.title}</h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                <span>👤 {selectedProject.client}</span>
                <span>📅 {selectedProject.year}</span>
              </div>

              <div className={`h-64 sm:h-80 md:h-96 rounded-2xl flex items-center justify-center text-8xl sm:text-9xl mb-8 bg-gradient-to-br ${selectedProject.color} opacity-30`}>
                {selectedProject.icon}
              </div>

              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Kullanılan Teknolojiler & Hizmetler</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/iletisim" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all text-center text-sm sm:text-base"
                >
                  Benzer Bir Proje İstiyorum
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 text-sm sm:text-base"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

