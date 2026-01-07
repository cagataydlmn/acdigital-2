import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/CTASection';

export default function Portfoy() {
  const websites = [
    {
      id: 1,
      title: 'Matmazel Kuaför',
      url: 'https://matmazelizmit.com/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/matmazelHome.png',
      category: 'Kurumsal',
      color: 'from-blue-600 to-cyan-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
    {
      id: 2,
      title: 'NarÇit',
      url: 'https://narcitsistemleri.com/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/narcit.png',
      category: 'Kurumsal',
      color: 'from-purple-600 to-pink-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
    {
      id: 3,
      title: 'NartTaş',
      url: 'https://nartasyapi.com/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/nartasyapi.png',
      category: 'Kurumsal',
      color: 'from-orange-600 to-red-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
    {
      id: 4,
      title: 'Araslar Yapı',
      url: 'https://xn--araslaryap-6ub.com/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/araslaryapi.png',
      category: 'Kurumsal',
      color: 'from-green-600 to-emerald-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
    {
      id: 5,
      title: 'MFÖ Creative',
      url: 'https://www.mfocreative.com.tr/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/mfocreative.png',
      category: 'Kurumsal',
      color: 'from-indigo-600 to-purple-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },{
      id: 6,
      title: 'Arel Çelik',
      url: 'https://arelcelik.com.tr/',
      description: 'Kurumsal web sitesi ve dijital dönüşüm projesi',
      image: '/webler/arelsite.png',
      category: 'Kurumsal',
      color: 'from-blue-600 to-red-500',
      tags: ['Web Tasarım', 'UI/UX', 'Responsive']
    },
   
  ];


  return (
    <>
      <Helmet>
        <title>Portföy | A&C Digital - Başarılı Projelerimiz</title>
        <meta
          name="description"
          content="A&C Digital'in tamamladığı başarılı web tasarım, e-ticaret ve dijital pazarlama projeleri. Sakarya merkezli referanslarımızı inceleyin."
        />
        <meta
          name="keywords"
          content="Sakarya web tasarım projeleri, referanslar, portföy, başarılı projeler, web sitesi örnekleri, A&C Digital portföy"
        />
        <meta property="og:title" content="Portföy | A&C Digital" />
        <meta property="og:description" content="Başarılı web tasarım ve dijital pazarlama projelerimizi inceleyin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/portfoy" />
        <link rel="canonical" href="https://acdigital.com.tr/portfoy" />
      </Helmet>
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
     

      {/* Projects Grid */}
      <section className="relative py-12 px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((site, index) => (
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

         
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Sizin Projeniz Bir Sonraki Olsun"
        description="Portfolyomuz sürekli büyüyor. Bir sonraki başarı hikayesi sizinki olabilir!"
        primaryButtonText="Hemen Başlayalım"
      />
      </div>

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
    </>
  );
}

