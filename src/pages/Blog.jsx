export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor Sit Amet',
      category: 'Haberler',
      date: '15 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      icon: '📰',
      tags: ['Tasarım', 'Haberler', 'Güncel'],
    },
    {
      id: 2,
      title: 'Consectetur Adipiscing Elit',
      category: 'Blog',
      date: '12 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      icon: '✍️',
      tags: ['Yazılım', 'Teknoloji', 'İnovasyon'],
    },
    {
      id: 3,
      title: 'Sed Do Eiusmod Tempor',
      category: 'Haberler',
      date: '10 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      icon: '🎨',
      tags: ['Tasarım', 'Kreatif', 'Trend'],
    },
    {
      id: 4,
      title: 'Incididunt Ut Labore Et',
      category: 'Blog',
      date: '8 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      icon: '💡',
      tags: ['Fikirler', 'İpuçları', 'Rehber'],
    },
    {
      id: 5,
      title: 'Dolore Magna Aliqua Ut',
      category: 'Haberler',
      date: '5 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
      icon: '🚀',
      tags: ['Gelişmeler', 'Yenilikler', 'Güncellemeler'],
    },
    {
      id: 6,
      title: 'Enim Ad Minim Veniam',
      category: 'Blog',
      date: '3 Ocak 2024',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      icon: '📱',
      tags: ['Mobil', 'Dijital', 'Medya'],
    },
  ];

  const categories = ['Tümü', 'Haberler', 'Blog'];

  return (
    <div className="min-h-screen text-white relative" style={{ zIndex: 1, position: 'relative', paddingTop: '80px' }}>
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
            Blog / Haberler
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Blog & Haberler
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 text-sm font-medium rounded-full transition-all hover:scale-105"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  backgroundColor: index === 0 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden transition-all hover:scale-105 cursor-pointer"
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              >
                {/* Post Icon */}
                <div
                  className="h-48 flex items-center justify-center text-6xl transition-transform group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(82, 39, 255, 0.2) 0%, rgba(255, 159, 252, 0.2) 100%)',
                  }}
                >
                  {post.icon}
                </div>

                {/* Post Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:gap-4 transition-all">
                    Devamını Oku
                    <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

