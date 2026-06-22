import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('AboutHero');
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero/hero_bg.png" /* Reemplazar con foto histórica/comunitaria */
          alt="Historia Cimarrón Putumayo" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#120803]/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 lg:px-8 text-center flex flex-col items-center mt-16">
        <div className="w-16 h-[3px] bg-[#F2A900] mb-6"></div>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-[72px] text-[#FFF8EA] uppercase tracking-wide mb-6">
          {t('title')}
        </h1>
        <p className="text-[#F2A900] font-sans font-bold text-sm md:text-base uppercase tracking-widest">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
