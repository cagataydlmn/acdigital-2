import { Helmet } from 'react-helmet-async';
import CTASection from '../components/CTASection';

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ShieldCheck,
  Send,
  MessageCircle
} from 'lucide-react';

export default function Iletisim() {
  const mailToLink = `mailto:info@acdigital.tech?subject=${encodeURIComponent(
    "A&C Digital - İletişim"
  )}&body=${encodeURIComponent(
    `Merhaba A&C Digital ekibi,

Projem hakkında görüşmek istiyorum.

Ad Soyad:
Telefon:
Web Sitesi (varsa):

Mesaj:
`
  )}`;

  const whatsappLink = `https://wa.me/905322645827?text=${encodeURIComponent(
    "Merhaba A&C Digital, proje hakkında bilgi almak istiyorum."
  )}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      info: 'Sakarya',
      detail: 'Türkiye',
      link: 'https://maps.google.com/?q=Sakarya,Turkey'
    },
    {
      icon: Mail,
      title: 'E-Posta',
      info: 'info@acdigital.tech',
      link: 'mailto:info@acdigital.tech'
    },
    {
      icon: Phone,
      title: 'Telefon',
      phones: [
        { label: '+90 (532) 264 58 27', link: 'tel:+905322645827' },
        { label: '+90 (532) 529 90 96', link: 'tel:+905325299096' }
      ]
    },
    
    
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      info: 'Pazartesi - Cuma',
      detail: '09:00 - 18:00',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/acdigitaltech/' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61584376175845' }
  ];

  return (
    <>
      <Helmet>
        <title>İletişim | A&C Digital - Sakarya Dijital Ajans</title>
        <meta
          name="description"
          content="A&C Digital ile iletişime geçin. Sakarya merkezli dijital ajans. Web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri için ücretsiz teklif alın."
        />
        <meta
          name="keywords"
          content="A&C Digital iletişim, Sakarya dijital ajans iletişim, web tasarım teklifi, ücretsiz danışmanlık, Sakarya web tasarım"
        />
        <meta property="og:title" content="İletişim | A&C Digital" />
        <meta
          property="og:description"
          content="Projeniz için ücretsiz teklif alın. Web tasarım, yazılım ve dijital pazarlama hizmetleri."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acdigital.tech/iletisim" />
        <link rel="canonical" href="https://acdigital.tech/iletisim" />
      </Helmet>

      <div className="min-h-screen text-white relative">
        {/* HERO */}
        <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-15" />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-blue-200" />
              <span className="text-sm uppercase tracking-[0.3em] text-gray-300">
                İletişim
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Hadi{' '}
              <span className="bg-gradient-to-r from-[#80D4FF] via-[#4DB8FF] to-[#00D4FF] bg-clip-text text-transparent">
                Konuşalım
              </span>
            </h1>

           

            {/* HERO CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={mailToLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#80D4FF] via-[#4DB8FF] to-[#00D4FF] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Mail Gönder
              </a>

            
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
  const Icon = item.icon;
  return (
    <div
      key={index}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-blue-200" />
      </div>

      <h3 className="text-sm font-bold text-gray-400 mb-2 tracking-wider uppercase">
        {item.title}
      </h3>

      {/* ✅ Eğer phones varsa iki telefonu göster */}
      {item.phones ? (
        <div className="space-y-2">
          {item.phones.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="block text-lg font-semibold text-white hover:text-blue-300 transition-colors"
            >
              {p.label}
            </a>
          ))}
        </div>
      ) : item.link ? (
        <a href={item.link} className="block">
          <p className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
            {item.info}
          </p>
          {item.detail && (
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {item.detail}
            </p>
          )}
        </a>
      ) : (
        <>
          <p className="text-lg font-semibold text-white">{item.info}</p>
          {item.detail && <p className="text-sm text-gray-400">{item.detail}</p>}
        </>
      )}
    </div>
  );
})}

            </div>

            {/* MAP + SOCIAL */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* MAP */}
              <div className="relative rounded-3xl overflow-hidden h-[420px] bg-white/5 border border-white/10">
                <iframe
                  title="A&C Digital Konum"
                  src="https://www.google.com/maps?q=Serdivan,Sakarya&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* SOCIAL + QUICK CTA */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
                  <p className="text-gray-400 mb-6">
                    Projeler için hızlı geri dönüş almanız için mail her zaman aktif.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={mailToLink}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-blue-200" />
                      info@acdigital.tech
                    </a>

                  
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/15 via-blue-600/15 to-blue-600/15 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Sosyal Medya</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-200 group-hover:text-blue-300 transition-colors" />
                          </div>
                          <span className="font-semibold group-hover:text-blue-300 transition-colors">
                            {social.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Hala Karar Veremediniz mi?"
          description="Projeniz hakkında detaylı bilgi almak için ücretsiz danışmanlık hizmetimizden yararlanın."
          primaryButtonText="Ücretsiz Danışmanlık Al"
          secondaryButtonText="Portfolyomuza Göz Atın"
        />
      </div>
    </>
  );
}
