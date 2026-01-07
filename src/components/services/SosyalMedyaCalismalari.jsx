import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
    Megaphone, Users, BarChart, Heart, Share2, CalendarCheck, TrendingUp, 
    Instagram, Facebook, Linkedin, Twitter, Youtube, MessageCircle, 
    Target, Award, Camera, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

function AnimatedNumber({ value, duration = 2, suffix = "" }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const increment = value / (duration * 60);
        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function SosyalMedya() {
    const platforms = [
        {
            name: "Instagram",
            icon: Instagram,
            color: "from-purple-500 to-pink-500",
            description: "Görsel odaklı içeriklerle genç ve dinamik kitlelere ulaşın. Story, Reels ve IGTV ile etkileşimi maksimize edin."
        },
        {
            name: "Facebook",
            icon: Facebook,
            color: "from-blue-600 to-blue-400",
            description: "Geniş kullanıcı tabanıyla her yaş grubuna ulaşın. Topluluk oluşturun ve hedefli reklamlarla satışları artırın."
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            color: "from-blue-700 to-blue-500",
            description: "B2B pazarlama ve profesyonel ağ oluşturma için ideal. Sektörünüzde otorite olun ve iş bağlantıları kurun."
        },
        {
            name: "Twitter / X",
            icon: Twitter,
            color: "from-sky-500 to-blue-400",
            description: "Anlık gündem ve hızlı etkileşim. Marka sesini duyurun, trend konulara dahil olun ve topluluğunuzu büyütün."
        },
        {
            name: "YouTube",
            icon: Youtube,
            color: "from-red-600 to-red-400",
            description: "Video içerikle derin bağ kurun. Eğitici, eğlenceli ve tanıtım videoları ile uzun süreli etkileşim sağlayın."
        },
        {
            name: "TikTok",
            icon: MessageCircle,
            color: "from-pink-500 to-cyan-500",
            description: "Viral içeriklerle Z kuşağına ulaşın. Kısa, eğlenceli ve yaratıcı videolarla hızla büyüyün."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Sosyal Medya Yönetimi | A&C Digital - Sakarya Sosyal Medya Ajansı</title>
                <meta
                    name="description"
                    content="Sakarya sosyal medya yönetimi hizmetleri. Instagram, Facebook, LinkedIn ve diğer platformlarda profesyonel içerik üretimi ve topluluk yönetimi."
                />
                <meta
                    name="keywords"
                    content="Sakarya sosyal medya yönetimi, Instagram yönetimi, Facebook yönetimi, sosyal medya ajansı Sakarya, içerik üretimi"
                />
                <meta property="og:title" content="Sosyal Medya Yönetimi | A&C Digital" />
                <meta property="og:description" content="Profesyonel sosyal medya yönetimi ile markanızı güçlendirin." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://acdigital.com.tr/hizmetler/sosyal-medya" />
                <link rel="canonical" href="https://acdigital.com.tr/hizmetler/sosyal-medya" />
            </Helmet>
            <div className="min-h-screen text-white relative overflow-hidden" style={{ zIndex: 1, position: 'relative' }}>
            {/* ========================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================= */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-10">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
                
                <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300">Sosyal Medya Yönetimi</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin mb-6 leading-tight px-4">
                            Sosyal Medya
                            <br />
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-bold bg-clip-text text-transparent">
                                Yönetimi
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                            Sosyal medya, markanızın dijital dünyadaki sesi ve itibarıdır. AC Dijital olarak, strateji, içerik ve performans odaklı çalışmalarımızla
                            <span className="text-white font-semibold"> takipçi kazanmakla kalmayıp, bağlı ve sadık bir topluluk</span> oluşturmanıza yardımcı oluyoruz.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <Link
                                to="/iletisim"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                            >
                                Ücretsiz Analiz Al
                            </Link>

                            <a
                                href="#surec"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
                            >
                                Nasıl Çalışır?
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FEATURE CARDS */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Marka Bilinirliği",
                                desc: "Sosyal medya, markanızın bilinirliğini artırır. Etkili içerik ve reklam stratejileriyle hedef kitlenize doğrudan ulaşır ve sektörde öne çıkmanızı sağlar.",
                                gradient: "from-pink-500 to-rose-500",
                            },
                            {
                                icon: Share2,
                                title: "Etkileşim & Topluluk",
                                desc: "Takipçilerle aktif etkileşim, markanızın samimi ve güvenilir görünmesini sağlar. Yorumlar, DM'ler ve paylaşımlar üzerinden güçlü bir topluluk inşa ederiz.",
                                gradient: "from-indigo-500 to-purple-500",
                            },
                            {
                                icon: TrendingUp,
                                title: "Dönüşüm Odaklı Strateji",
                                desc: "Sosyal medya, sadece marka görünürlüğü için değil, satış ve lead üretimi için de kritik bir araçtır. Her paylaşım veri odaklı olarak optimize edilir.",
                                gradient: "from-green-500 to-emerald-500",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 shadow-2xl transition-all hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/10"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.55 }}
                                viewport={{ once: true }}
                            >
                                {/* Gradient glow on hover */}
                                <div className={`pointer-events-none absolute -top-32 -right-32 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${card.gradient} p-[1px] mb-4 sm:mb-6`}>
                                    <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur-sm flex items-center justify-center">
                                        <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                                    {card.title}
                                </h3>

                                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    {card.desc}
                                </p>

                                {/* Animated underline */}
                                <div className={`mt-4 sm:mt-6 h-[2px] w-12 bg-gradient-to-r ${card.gradient} group-hover:w-24 transition-all duration-300 rounded-full`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* PLATFORMS GRID */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                                Yönettiğimiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Platformlar</span>
                            </h2>
                            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                                Her platformun kendine özgü dinamiklerini bilerek, markanıza en uygun stratejileri uyguluyoruz
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {platforms.map((platform, index) => (
                                <motion.div
                                    key={platform.name}
                                    className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:border-white/20 hover:-translate-y-1"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <platform.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{platform.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* PROCESS TIMELINE */}
            {/* ========================================================= */}
            <section id="surec" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
                                Sosyal Medya Yönetim Sürecimiz
                            </h2>
                            <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                                Başarılı sosyal medya yönetimi için izlediğimiz 4 aşamalı profesyonel süreç
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connection line - desktop only */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-pink-500/20" />
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                                {[
                                    { 
                                        step: "01", 
                                        title: "Strateji & Planlama", 
                                        desc: "Markanızı analiz eder, hedef kitlenizi değerlendiririz. Platforma özel içerik takvimi oluşturuyoruz.",
                                        color: "from-blue-500 to-indigo-500"
                                    },
                                    { 
                                        step: "02", 
                                        title: "İçerik Üretimi", 
                                        desc: "Profesyonel görsel ve metin içerikler üreterek markanızı en iyi şekilde temsil ederiz.",
                                        color: "from-pink-500 to-rose-500"
                                    },
                                    { 
                                        step: "03", 
                                        title: "Topluluk Yönetimi", 
                                        desc: "Yorumları ve mesajları hızlı yönetiriz. Etkileşimleri artırır, güven oluştururuz.",
                                        color: "from-green-500 to-emerald-500"
                                    },
                                    { 
                                        step: "04", 
                                        title: "Analiz & Raporlama", 
                                        desc: "Performans ölçümü ve detaylü analizlerle sürekli iyileştirme sağlarız.",
                                        color: "from-yellow-500 to-orange-500"
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="relative"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.15 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Step number badge */}
                                        <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-xl`} />
                                            <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
                                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                                    <span className="text-xl sm:text-2xl font-bold text-white">{item.step}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                                            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* STATS SECTION */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid md:grid-cols-4 gap-6 sm:gap-8 text-center">
                            {[
                                { icon: Target, value: 500, suffix: "+", label: "Başarılı Kampanya", color: "text-indigo-400" },
                                { icon: Users, value: 25000, suffix: "+", label: "Yeni Takipçi Kazandırıldı", color: "text-green-400" },
                                { icon: TrendingUp, value: 180, suffix: "%", label: "Ortalama Etkileşim Artışı", color: "text-pink-400" },
                                { icon: Award, value: 95, suffix: "%", label: "Müşteri Memnuniyeti", color: "text-yellow-400" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-105 transition-transform"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                                    <h3 className={`text-4xl font-bold ${stat.color} mb-2`}>
                                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                    </h3>
                                    <p className="text-gray-300 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FAQ SECTION */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                                Sık Sorulan Sorular
                            </h2>
                            <p className="text-neutral-400 text-sm sm:text-base px-4">
                                Sosyal medya yönetimi hakkında merak edilenler
                            </p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            {[
                                {
                                    q: "Sosyal medya yönetimi neden önemlidir?",
                                    a: "Sosyal medya, markanızın potansiyel müşterilerle doğrudan iletişim kurduğu en etkili kanaldır. Sakarya'daki işletmeler için özellikle yerel kitlelere ulaşmak, marka bilinirliğini artırmak ve müşteri sadakati oluşturmak açısından kritik önem taşır."
                                },
                                {
                                    q: "Hangi sosyal medya platformlarında hizmet veriyorsunuz?",
                                    a: "Instagram, Facebook, LinkedIn, Twitter (X), YouTube, TikTok ve Pinterest gibi tüm popüler sosyal medya platformlarında profesyonel yönetim hizmeti sunuyoruz. Markanızın hedef kitlesine göre en uygun platformları belirleyip stratejiler geliştiriyoruz."
                                },
                                {
                                    q: "İçerikleri siz mi hazırlıyorsunuz?",
                                    a: "Evet, tüm içerikler profesyonel tasarımcı ve içerik yazarlarımız tarafından markanıza özel olarak hazırlanır. Görsel tasarımlar, videolar, reels, story'ler ve metin içeriklerinin tamamı marka kimliğinizle uyumlu şekilde üretilir."
                                },
                                {
                                    q: "Sosyal medyada sonuç almak ne kadar sürer?",
                                    a: "Sosyal medya organik bir büyüme sürecidir. İlk 1-2 ay içinde içerik düzenini oluştururuz. 3-6 ay içinde takipçi artışı, etkileşim oranlarında yükseliş ve marka bilinirliğinde belirgin iyileşmeler görülür."
                                },
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold text-sm sm:text-lg">
                                        {faq.q}
                                        <span className="ml-4 text-indigo-400 group-open:rotate-45 transition-transform text-xl sm:text-2xl leading-none flex-shrink-0">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-neutral-300 text-xs sm:text-base leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* FINAL CTA */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                        
                        {/* Animated background gradients */}
                        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />

                        {/* Content */}
                        <div className="relative p-8 sm:p-12 md:p-16 text-center">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                                    Sosyal Medyada Güçlü Bir Marka Olun
                                </h2>
                            </motion.div>
                            
                            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                                Her beğeni, her paylaşım bir fırsattır. Stratejik sosyal medya yönetimimizle markanızı doğru kitleye ulaştıralım.
                                <span className="block mt-2 text-indigo-200 font-semibold">İlk sosyal medya analizi ücretsizdir.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                                <Link
                                    to="/iletisim"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                                >
                                    Ücretsiz Analiz Al
                                </Link>

                                <a
                                    href="tel:+905XXXXXXXXX"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm sm:text-base"
                                >
                                    📞 Hemen Ara
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span>Profesyonel içerik</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                    <span>Tüm platformlar</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                    <span>Veri odaklı strateji</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                                    <span>7/24 destek</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
        </>
    );
}

