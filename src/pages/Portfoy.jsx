import { useState } from 'react';

export default function Portfoy() {
  const websites = [
    {
      id: 1,
      title: 'Anadolu Sigorta',
      url: 'https://www.anadolusigorta.com.tr',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Kurumsal',
      color: 'from-blue-600 to-cyan-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
    {
      id: 2,
      title: 'E-Ticaret Platformu',
      url: 'https://www.trendyol.com',
      description: 'Tam kapsamlı e-ticaret çözümü ve ödeme entegrasyonu',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      category: 'E-Ticaret',
      color: 'from-purple-600 to-pink-500',
      tags: ['E-Commerce', 'React', 'API']
    },
    {
      id: 3,
      title: 'Restoran Web Sitesi',
      url: 'https://www.nusret.com.tr',
      description: 'Modern restoran menü ve rezervasyon sistemi',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      category: 'Gastronomi',
      color: 'from-orange-600 to-red-500',
      tags: ['Web Tasarım', 'Online Rezervasyon']
    },
    {
      id: 4,
      title: 'Gayrimenkul Portalı',
      url: 'https://www.sahibinden.com',
      description: 'Emlak listeleme ve filtreleme sistemi',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      category: 'Gayrimenkul',
      color: 'from-green-600 to-emerald-500',
      tags: ['Portal', 'Database', 'Search']
    },
    {
      id: 5,
      title: 'Fitness & Wellness',
      url: 'https://www.nike.com/tr',
      description: 'Spor merkezi web sitesi ve online koçluk platformu',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      category: 'Spor & Sağlık',
      color: 'from-indigo-600 to-purple-500',
      tags: ['Web App', 'Membership', 'Dashboard']
    },
    {
      id: 6,
      title: 'Eğitim Platformu',
      url: 'https://www.udemy.com',
      description: 'Online eğitim ve kurs yönetim sistemi',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      category: 'Eğitim',
      color: 'from-yellow-600 to-orange-500',
      tags: ['LMS', 'Video', 'Interactive']
    },
    {
      id: 7,
      title: 'Moda & Butik',
      url: 'https://www.zara.com',
      description: 'Lüks marka web sitesi ve koleksiyon galerisi',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
      category: 'Moda',
      color: 'from-pink-600 to-rose-500',
      tags: ['Fashion', 'E-Commerce', 'Lookbook']
    },
    {
      id: 8,
      title: 'Otel & Konaklama',
      url: 'https://www.booking.com',
      description: 'Otel rezervasyon ve oda yönetim sistemi',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      category: 'Turizm',
      color: 'from-cyan-600 to-blue-500',
      tags: ['Booking System', 'CRM', 'Multi-language']
    },
    {
      id: 9,
      title: 'Teknoloji Firması',
      url: 'https://www.apple.com',
      description: 'Kurumsal teknoloji şirketi web sitesi',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      category: 'Teknoloji',
      color: 'from-slate-600 to-gray-500',
      tags: ['Corporate', 'Modern', 'Minimal']
    },
    {
      id: 10,
      title: 'Sağlık & Klinik',
      url: 'https://www.acibadem.com.tr',
      description: 'Sağlık kuruluşu ve online randevu sistemi',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
      category: 'Sağlık',
      color: 'from-teal-600 to-green-500',
      tags: ['Healthcare', 'Appointment', 'CMS']
    },
    {
      id: 11,
      title: 'Hukuk Bürosu',
      url: 'https://www.example-law.com',
      description: 'Avukatlık bürosu kurumsal web sitesi',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
      category: 'Hukuk',
      color: 'from-amber-600 to-yellow-500',
      tags: ['Professional', 'Blog', 'Contact']
    },
    {
      id: 12,
      title: 'Cafe & Kahve Dükkanı',
      url: 'https://www.starbucks.com.tr',
      description: 'Kafe web sitesi ve online sipariş sistemi',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop',
      category: 'Gastronomi',
      color: 'from-red-600 to-orange-500',
      tags: ['Food', 'Menu', 'Order System']
    }
  ];

  const categories = ['Tümü', 'Kurumsal', 'E-Ticaret', 'Gastronomi', 'Gayrimenkul', 'Spor & Sağlık', 'Eğitim', 'Moda', 'Turizm', 'Teknoloji', 'Sağlık', 'Hukuk'];

  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredWebsites = selectedCategory === 'Tümü' 
    ? websites 
    : websites.filter(site => site.category === selectedCategory);

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
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((site, index) => (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${site.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <svg className="w-16 h-16 mx-auto mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="text-white font-semibold text-lg">Siteyi Ziyaret Et</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${site.color} rounded-full text-white text-sm font-semibold shadow-lg`}>
                    {site.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {site.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${site.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </a>
            ))}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">Bu kategoride henüz proje bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

