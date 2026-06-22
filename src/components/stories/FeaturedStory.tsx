import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function FeaturedStory() {
  const t = useTranslations('FeaturedStory');

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Big Title & Excerpt */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#2A1308] leading-tight mb-8">
            {t('title')}
          </h2>
          <p className="font-sans text-gray-600 text-base lg:text-lg leading-relaxed mb-8 text-justify">
            {t('excerpt')}
          </p>
          <Link 
            href="/historias" 
            className="inline-block border-2 border-[#2A1308] text-[#2A1308] font-bold uppercase tracking-widest px-8 py-3 rounded hover:bg-[#2A1308] hover:text-white transition-colors w-max"
          >
            {t('readMore')}
          </Link>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="w-full md:w-1/2 aspect-[4/5] bg-[#F3E8D3] rounded-xl overflow-hidden relative shadow-lg">
           {/* Here we would put an actual <Image> when available, for now just a colored box with a hint */}
           <div className="absolute inset-0 flex items-center justify-center text-[#2A1308]/30 font-heading text-2xl text-center px-4">
              {t('photoPlaceholder')}
           </div>
        </div>

      </div>
    </section>
  );
}
