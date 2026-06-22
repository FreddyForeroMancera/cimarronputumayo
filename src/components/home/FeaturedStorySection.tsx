import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FeaturedStorySection() {
  const t = useTranslations('FeaturedStorySection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-24 flex justify-center border-t border-[#F2A900]/10">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Big Image */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
          <Image 
            src="/images/mujeres_rio.png" 
            alt="Mujeres tejedoras de memoria" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay gradient for text readability if needed later, though text is outside */}
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center bg-white p-8 md:p-12 lg:p-16 rounded-lg relative lg:-ml-24 z-10 shadow-xl border border-[#2A1308]/5">
          <div className="inline-block self-start bg-[#F2A900] text-[#120803] px-3 py-1 text-xs font-bold font-sans uppercase tracking-widest mb-6">
            {t('badge')}
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[52px] leading-[1.05] text-[#2A1308] uppercase mb-6">
            {t('title')}
          </h2>
          <p className="text-[#2A1308]/80 text-[15px] leading-relaxed font-sans mb-8">
            {t('p')}
          </p>
          <Link 
            href="/historias" 
            className="inline-flex items-center gap-3 self-start text-[#2A1308] font-sans font-bold text-sm uppercase tracking-widest hover:text-[#F2A900] transition-colors group"
          >
            {t('btn')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
