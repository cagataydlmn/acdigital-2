import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/CTASection';

export default function Hakkimizda() {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>Hakkımızda | A&C Digital - Sakarya Dijital Ajans</title>
        <meta
          name="description"
          content="A&C Digital olarak Sakarya merkezli dijital ajans olarak web tasarım, yazılım geliştirme ve sosyal medya yönetimi alanlarında profesyonel çözümler sunuyoruz."
        />
        <meta
          name="keywords"
          content="Sakarya web tasarım, dijital ajans Sakarya, sosyal medya yönetimi, yazılım geliştirme, A&C Digital, Sakarya dijital pazarlama"
        />
        <meta property="og:title" content="Hakkımızda | A&C Digital" />
        <meta property="og:description" content="Sakarya merkezli dijital ajans. Web tasarım, yazılım geliştirme ve sosyal medya yönetimi alanlarında profesyonel çözümler." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.com.tr/hakkimizda" />
        <link rel="canonical" href="https://acdigital.com.tr/hakkimizda" />
      </Helmet>
      <div className="min-h-screen text-white relative pt-20" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-gray-400">Hakkımızda</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 leading-tight font-light">
            Dijitalde
            <br />
            <span className="bg-gradient-to-r font-bold from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
              Fark Yaratıyoruz
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            A&C Digital olarak, Sakarya merkezli bir dijital ajans olarak markaların dijital 
            dönüşüm yolculuğunda yanlarında yer alıyor, web tasarım, yazılım geliştirme ve 
            sosyal medya yönetimi alanlarında profesyonel çözümler sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#kimiz-biz" 
              className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] text-gray-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#00D4FF]/30 transition-all duration-300 hover:scale-105"
            >
              Daha Fazla Keşfet
            </a>
            <Link 
              to="/iletisim" 
              className="px-8 py-4 bg-white/5 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section id="kimiz-biz" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Kimiz Biz */}
          <div 
            ref={ref1}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32 transition-all duration-1000 ${
              inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-[#4DB8FF]/20 mb-6">
                <span className="text-xs font-medium text-[#4DB8FF] tracking-wider uppercase">Biz Kimiz</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                  Kimiz Biz?
                </span>
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
                <p>
                  A&C Digital, Sakarya'da kurulmuş bir dijital ajans olarak, markaların dijital 
                  varlıklarını güçlendirmek ve sürdürülebilir büyüme sağlamak için çalışıyoruz. 
                  Web tasarım, yazılım geliştirme ve sosyal medya yönetimi alanlarında uzmanlaşmış 
                  bir ekibiz.
                </p>
                <p>
                  Tasarımın gücünü, teknolojinin imkanlarını ve stratejik düşüncenin derinliğini 
                  bir araya getirerek, her markaya özel çözümler üretiyoruz. Amacımız, markaların 
                  dijital dünyada sadece var olmalarını değil, aynı zamanda etkileyici ve 
                  unutulmaz bir iz bırakmalarını sağlamak.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Uzmanlık Alanlarımız</h3>
                <div className="space-y-6">
                  {[
                    { title: "Sakarya Web Tasarım & Geliştirme", desc: "Modern, responsive ve hızlı web siteleri" },
                    { title: "Dijital Pazarlama", desc: "SEO, sosyal medya ve içerik stratejileri" },
                    { title: "Yazılım Çözümleri", desc: "Özel yazılım ve uygulama geliştirme" },
                    { title: "Marka Kimliği", desc: "Logo, kurumsal kimlik ve görsel dil" }
                  ].map((item, index) => (
                    <div key={index} className="group p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5">
                      <h4 className="font-semibold text-white mb-2 text-lg group-hover:text-[#4DB8FF] transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Değerlerimiz */}
          <div 
            ref={ref2}
            className={`mb-20 lg:mb-32 transition-all duration-1000 delay-300 ${
              inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-[#4DB8FF]/20 mb-6">
                <span className="text-xs font-medium text-[#4DB8FF] tracking-wider uppercase">Değerlerimiz</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                  Değerlerimiz
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
                İş yapış şeklimizi belirleyen temel prensipler ve değerler
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Yaratıcı Yaklaşım",
                  description: "Her projeye özgün ve yenilikçi bir bakış açısı getiriyor, standart kalıpların dışına çıkarak markanıza değer katacak çözümler üretiyoruz.",
                  gradient: "from-[#00D4FF] to-[#4DB8FF]"
                },
                {
                  title: "Stratejik Planlama",
                  description: "Detaylı analizler ve hedef kitle araştırmaları yaparak, her adımı özenle planlıyor ve uzun vadeli başarı için sağlam stratejiler geliştiriyoruz.",
                  gradient: "from-[#4DB8FF] to-[#80D4FF]"
                },
                {
                  title: "Teknolojik İnovasyon",
                  description: "Güncel teknolojileri ve modern araçları etkin şekilde kullanarak, kullanıcı dostu ve yüksek performanslı dijital ürünler oluşturuyoruz.",
                  gradient: "from-[#80D4FF] to-[#00D4FF]"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  <div className="relative">
                    <div className={`w-12 h-1 bg-gradient-to-r ${value.gradient} rounded-full mb-6 group-hover:w-20 transition-all duration-500`}></div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00D4FF] group-hover:to-[#80D4FF] group-hover:bg-clip-text transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Misyon & Vizyon */}
          <div 
            ref={ref3}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-600 ${
              inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Misyon */}
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] rounded-full mb-6"></div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#4DB8FF] bg-clip-text text-transparent">
                    Misyonumuz
                  </span>
                </h3>
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-6">
                  Markaların dijital dünyada daha güçlü bir varlık kazanmasını sağlamak, 
                  hedef kitleleriyle anlamlı bağlar kurmalarına yardımcı olmak ve 
                  sürdürülebilir başarı elde etmelerini desteklemek. Her projede 
                  müşteri memnuniyetini ön planda tutarak, kaliteli ve etkili çözümler 
                  sunmak temel görevimizdir.
                </p>
                <div className="flex items-start gap-3 text-sm text-gray-500 bg-white/5 rounded-lg p-4">
                  <div className="w-1 h-full bg-gradient-to-b from-[#00D4FF] to-[#80D4FF] rounded-full mt-1"></div>
                  <span>Dijital dönüşüm yolculuğunda yanınızda olmak</span>
                </div>
              </div>
            </div>

            {/* Vizyon */}
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#4DB8FF]/30 transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="w-12 h-1 bg-gradient-to-r from-[#4DB8FF] to-[#80D4FF] rounded-full mb-6"></div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                    Vizyonumuz
                  </span>
                </h3>
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-6">
                  Türkiye'de ve global ölçekte dijital pazarlamanın geleceğine yön veren, 
                  yenilikçi ve güvenilir bir ajans olmak. Teknoloji ve tasarımın kesişim 
                  noktasında, sektör standartlarını belirleyen, sürekli gelişen ve 
                  müşterilerine değer katan bir referans noktası haline gelmek.
                </p>
                <div className="flex items-start gap-3 text-sm text-gray-500 bg-white/5 rounded-lg p-4">
                  <div className="w-1 h-full bg-gradient-to-b from-[#00D4FF] to-[#80D4FF] rounded-full mt-1"></div>
                  <span>Dijital ajans sektöründe öncü bir marka olmak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Tamamlanan Proje" },
              { number: "150+", label: "Mutlu Müşteri" },
              { number: "7+", label: "Yıllık Deneyim" },
              { number: "24/7", label: "Destek" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-[#4DB8FF]/30 hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-4xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Replace with component */}
      <CTASection 
        title="Projenizi Konuşalım"
        description="Dijital projeniz için profesyonel çözümler sunmak için hazırız. Ücretsiz danışmanlık ve teklif almak için iletişime geçin."
        primaryButtonText="İletişime Geç"
        secondaryButtonText="Hizmetlerimizi Keşfedin"
        secondaryButtonLink="/hizmetler"
      />
    </div>
    </>
  );
}