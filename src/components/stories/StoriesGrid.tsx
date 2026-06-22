import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function StoriesGrid() {
  const t = useTranslations('StoriesGrid');

  // Construir las historias a partir de las traducciones
  const stories = [
    {
      id: 1,
      title: t('stories.1.title'),
      excerpt: t('stories.1.excerpt'),
      author: t('stories.1.author'),
      date: t('stories.1.date'),
      categories: [t('stories.1.categories.0'), t('stories.1.categories.1')],
      imageUrl: '/images/hero/hero_bg.png', // Placeholder
    },
    {
      id: 2,
      title: t('stories.2.title'),
      excerpt: t('stories.2.excerpt'),
      author: t('stories.2.author'),
      date: t('stories.2.date'),
      categories: [t('stories.2.categories.0'), t('stories.2.categories.1')],
      imageUrl: '/images/hero/hero_bg.png',
    },
    {
      id: 3,
      title: t('stories.3.title'),
      excerpt: t('stories.3.excerpt'),
      author: t('stories.3.author'),
      date: t('stories.3.date'),
      categories: [t('stories.3.categories.0'), t('stories.3.categories.1')],
      imageUrl: '/images/hero/hero_bg.png',
    }
  ];

  return (
    <section className="w-full bg-[#F9F6F0] py-16 px-4 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {stories.map((story) => (
          <Link href="/historias" key={story.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            
            {/* Image Container with Floating Categories */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <Image 
                src={story.imageUrl} 
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Categories */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {story.categories.map((cat, idx) => (
                  <span key={idx} className="bg-white/80 backdrop-blur-sm text-[#2A1308] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
              <h3 className="font-heading text-2xl lg:text-3xl text-[#2A1308] leading-tight mb-4 group-hover:text-[#F2A900] transition-colors">
                {story.title}
              </h3>
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                {story.excerpt}
              </p>
              
              {/* Meta info at the bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm font-sans text-gray-500">
                <span className="font-medium text-[#2A1308]">{t('by')} {story.author}</span>
                <span>{story.date}</span>
              </div>
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}
