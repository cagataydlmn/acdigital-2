export default function CTASection({ 
  title = "Projenize Bugün Başlayalım",
  description = "Ücretsiz danışmanlık için bizimle iletişime geçin. Size özel çözümler üretmek için sabırsızlanıyoruz!",
  primaryButtonText = "Hemen İletişime Geç",
  primaryButtonLink = "/iletisim",
  secondaryButtonText = "Çalışmalarımızı Gör",
  secondaryButtonLink = "/portfoy"
}) {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background with more transparency */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004250] via-[#4DB8FF] to-[#004250] backdrop-blur-md"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
          
          {/* Content */}
          <div className="relative p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href={primaryButtonLink}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                {primaryButtonText}
              </a>
              <a 
                href={secondaryButtonLink}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
