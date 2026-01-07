import { Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts, categories } from "../data/blogData";
import { Helmet } from "react-helmet-async";
import CTASection from "../components/CTASection";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("tumu");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtreleme
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "tumu" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Blog & Dijital Rehberler | A&C Digital</title>
        <meta
          name="description"
          content="Web tasarım, SEO, dijital pazarlama, sosyal medya ve yazılım geliştirme hakkında güncel blog yazıları ve rehberler."
        />
        <meta
          name="keywords"
          content="dijital pazarlama blog, web tasarım rehberi, SEO ipuçları, Instagram reklamları, Sakarya dijital ajans"
        />
      </Helmet>

      <section className="min-h-screen py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Başlık ve Arama */}
          <div className="mb-16 text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#80D4FF]/20 rounded-full border border-[#4DB8FF]/30">
              <span className="text-sm uppercase tracking-wider text-[#4DB8FF] font-medium">
                Blog & Rehberler
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#197c93] via-[#4DB8FF] to-[#80D4FF] bg-clip-text text-transparent">
                Dijital Dünyada Güncel Kalın
              </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
              Web tasarım, SEO, dijital pazarlama ve yazılım geliştirme hakkında uzman ekibimizin hazırladığı içerikler
            </p>

            {/* Arama Kutusu */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#4DB8FF]/50 transition-all"
              />
              <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Kategoriler */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? "bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] text-gray-900 shadow-lg shadow-[#4DB8FF]/30"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Blog Listesi */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {selectedCategory === "tumu" ? "Tüm Makaleler" : `${selectedCategory} Makaleleri`}
            </h2>
            <p className="text-gray-400 text-sm">
              {filteredPosts.length} makale bulundu
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-400">
                Aradığınız kriterlere uygun blog yazısı bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-[#4DB8FF]/50 transition-all duration-300"
                >
                  {/* Kategori Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-[#4DB8FF]/20 text-[#4DB8FF] rounded-full border border-[#4DB8FF]/30">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Başlık */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#4DB8FF] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Açıklama */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Etiketler */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-500 border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Devamını Oku */}
                  <span className="text-sm text-[#4DB8FF] group-hover:underline flex items-center gap-2 font-medium">
                    Devamını Oku
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* CTA Section - Replace inline with component */}
          <CTASection 
            title="Projeniz İçin Profesyonel Destek"
            description="Web tasarım, SEO, dijital pazarlama ve sosyal medya yönetimi hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin."
            primaryButtonText="Ücretsiz Danışmanlık Alın"
          />
        </div>
      </section>
    </>
  );
}
