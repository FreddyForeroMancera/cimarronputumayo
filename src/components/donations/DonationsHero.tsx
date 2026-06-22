import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DonationsHero() {
  const t = useTranslations('DonationsHero');
  return (
    <section className="w-full bg-[#F3E8D3] flex justify-center py-16 lg:py-24 px-4 pt-32 lg:pt-40">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 
            className="font-heading text-5xl sm:text-7xl lg:text-[72px] xl:text-[84px] leading-[1.05] text-[#2A1308] mb-8 lg:mb-10 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
          <p className="font-sans text-[#2A1308] text-[15px] md:text-[17px] mb-6 leading-relaxed text-justify">
            {t('p1')}
          </p>
          <p className="font-sans text-[#2A1308] text-[15px] md:text-[17px] leading-relaxed text-justify">
            {t('p2')}
          </p>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/4.5] overflow-hidden shadow-lg">
          <Image 
            src="/images/hero/hero_bg.png" /* Placeholder until we get the actual image */
            alt="Familia afroputumayense sonriendo"
            fill
            className="object-cover"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}
