import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function StoriesInfographic() {
  const t = useTranslations('StoriesInfographic');

  return (
    <section className="w-full bg-[#120803] py-20 lg:py-28 flex flex-col items-center border-t border-[#F2A900]/10">
      <div className="w-full max-w-7xl px-4 lg:px-8 flex flex-col items-center">
        
        {/* Encabezado de la Infografía */}
        <div className="mb-12 text-center max-w-3xl">
          <span className="text-[#F2A900] font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('subtitle')}
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl text-[#FFF8EA] uppercase tracking-wider leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* Infographic Image */}
        <div className="w-full relative rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-white">
          <Image 
            src="/images/stories/historia-afro-en-colombia-resumen.png" 
            alt={t('imageAlt')}
            unoptimized={true}
            width={1200}
            height={600}
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
          />
        </div>

      </div>
    </section>
  );
}
