import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';

export default function BlogDetail() {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog yazısı bulunamadı</h1>
          <Link to="/blog" className="text-[#4DB8FF] hover:underline">Blog sayfasına dön</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // SEO için structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "A&C Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "A&C Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://acdigital.com.tr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://acdigital.com.tr/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | A&C Digital Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://acdigital.com.tr/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="A&C Digital" />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Canonical */}
        <link rel="canonical" href={`https://acdigital.com.tr/blog/${post.slug}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen text-white pt-24">
        
        {/* Content */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-white truncate">{post.category}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#4DB8FF]/20 text-[#4DB8FF] rounded-full border border-[#4DB8FF]/30">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-sm text-gray-400">{post.date}</time>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{post.readTime} okuma</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#4DB8FF]
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-[#80D4FF]
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
              prose-ul:text-gray-300 prose-ul:my-6 prose-ul:space-y-2
              prose-ol:text-gray-300 prose-ol:my-6 prose-ol:space-y-2
              prose-li:my-2 prose-li:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-[#4DB8FF] prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
              prose-blockquote:border-l-4 prose-blockquote:border-[#4DB8FF] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
              prose-a:text-[#4DB8FF] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Etiketler</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-[#4DB8FF]/50 transition-all cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] flex items-center justify-center font-bold text-2xl flex-shrink-0 text-gray-900">
                A&C
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">A&C Digital</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Web tasarım, yazılım geliştirme ve dijital pazarlama alanlarında uzman ekip. 
                  React, Next.js, SEO, Google Ads ve Meta Ads konularında güncel içerikler üretiyoruz.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8">Benzer Makaleler</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#4DB8FF]/50 transition-all"
                >
                  <article>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-[#4DB8FF]/20 text-[#4DB8FF] rounded-full border border-[#4DB8FF]/30">
                        {related.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <time dateTime={related.date}>{related.date}</time>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#4DB8FF] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                      {related.excerpt}
                    </p>
                    
                    <span className="text-sm text-[#4DB8FF] group-hover:underline flex items-center gap-2">
                      Devamını Oku
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-[#4DB8FF]/20 to-[#80D4FF]/20"></div>
            <div className="absolute inset-0 backdrop-blur-xl"></div>
            
            <div className="relative p-12 text-center border border-white/10">
              <h2 className="text-3xl font-bold mb-4">
                Projeniz için profesyonel destek mi arıyorsunuz?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Web tasarım, yazılım geliştirme, SEO ve dijital pazarlama hizmetlerimiz hakkında 
                detaylı bilgi almak için bizimle iletişime geçin.
              </p>
              <Link 
                to="/iletisim"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#80D4FF] text-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-[#4DB8FF]/50 transition-all hover:scale-105"
              >
                Ücretsiz Teklif Alın
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            Tüm Makalelere Dön
          </Link>
        </div>
      </div>
    </>
  );
}
