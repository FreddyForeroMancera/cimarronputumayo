import { Play } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function StoriesHero() {
  const t = useTranslations('StoriesHero');

  return (
    <section className="w-full bg-[#E8DCC8] pt-24 lg:pt-28 pb-16 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col -mt-4 lg:-mt-10">
        
        {/* Header Title */}
        <div className="w-full mb-8">
          <h1 
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-none text-[#2A1308]"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-[#F3E8D3] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
          <Image 
            src="/images/hero/hero_bg.png" 
            alt="Video cover"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Dark Overlay for better button visibility */}
          <div className="absolute inset-0 bg-[#120803]/20 group-hover:bg-[#120803]/10 transition-colors duration-500"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.15)] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-[#2A1308] ml-2" fill="currentColor" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
