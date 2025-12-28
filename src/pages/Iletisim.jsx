import { useState } from 'react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    setFormStatus('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setTimeout(() => setFormStatus(''), 5000);
    // Form temizle
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Adres",
      info: "Serdivan, Sakarya",
      detail: "Türkiye",
      link: "https://maps.google.com/?q=Serdivan,Sakarya"
    },
    {
      icon: "📧",
      title: "E-Posta",
      info: "info@mfocreative.com",
      detail: "destek@mfocreative.com",
      link: "mailto:info@mfocreative.com"
    },
    {
      icon: "📞",
      title: "Telefon",
      info: "+90 (XXX) XXX XX XX",
      detail: "Hafta içi 09:00 - 18:00",
      link: "tel:+905XXXXXXXXX"
    },
    {
      icon: "🕐",
      title: "Çalışma Saatleri",
      info: "Pazartesi - Cuma",
      detail: "09:00 - 18:00",
      link: null
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Facebook", icon: "👍", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" }
  ];

  return (
    <div className="min-h-screen text-white relative" style={{ zIndex: 1, position: 'relative' }}>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-300">İletişim</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hadi <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Konuşalım</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Projeniz hakkında konuşmak, sorularınızı yanıtlamak veya size nasıl yardımcı olabileceğimizi öğrenmek için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-400 mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-xl font-semibold text-white hover:text-blue-400 transition-colors block mb-1"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-white mb-1">{item.info}</p>
                )}
                <p className="text-sm text-gray-400">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Mesaj Gönderin</h2>
                <p className="text-gray-400 mb-8">
                  Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapalım.
                </p>

                {formStatus && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300">
                    {formStatus}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                        placeholder="+90 XXX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      E-Posta Adresi *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                      placeholder="Projeniz hakkında kısa bilgi"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Mesajı Gönder 📩
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="relative rounded-3xl overflow-hidden h-[400px] bg-white/5 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-xl font-semibold mb-2">Serdivan, Sakarya</p>
                    <a 
                      href="https://maps.google.com/?q=Serdivan,Sakarya" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      Haritada Göster →
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hızlı Yanıt</h4>
                      <p className="text-sm text-gray-400">Mesajlarınıza ortalama 2 saat içinde yanıt veriyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ücretsiz Danışmanlık</h4>
                      <p className="text-sm text-gray-400">İlk görüşme ve fiyat teklifi tamamen ücretsiz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Profesyonel Ekip</h4>
                      <p className="text-sm text-gray-400">Uzman ekibimiz projeniz için hazır</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Sosyal Medya</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-semibold group-hover:text-blue-400 transition-colors">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-400">İletişime geçmeden önce merak ettikleriniz</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Proje için fiyat teklifi nasıl alabilirim?",
                a: "Yukarıdaki formu doldurarak veya telefon/e-posta ile iletişime geçerek ücretsiz fiyat teklifi alabilirsiniz."
              },
              {
                q: "Ortalama yanıt süreniz ne kadar?",
                a: "Mesajlarınıza genellikle 2-4 saat içinde yanıt veriyoruz. Acil projeler için telefon ile arayabilirsiniz."
              },
              {
                q: "Teslimat süresi ne kadar?",
                a: "Proje kapsamına göre değişmekle birlikte, ortalama 1-4 hafta arasında teslimat yapıyoruz."
              },
              {
                q: "Revizyon hakkı var mı?",
                a: "Evet, tüm projelerimizde sınırsız revizyon hakkı sunuyoruz."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2 flex items-start gap-3">
                  <span className="text-blue-400">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
