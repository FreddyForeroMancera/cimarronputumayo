import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  return (
    <section className="w-full bg-[#E8DCC8] py-16 lg:py-20 flex justify-center">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Left Text Column */}
        <div className="lg:col-span-5 flex flex-col justify-between py-1 lg:py-2">
          <div>
            <h2 
              className="font-heading text-5xl lg:text-6xl xl:text-[68px] leading-[0.95] text-[#2A1308] mb-6 uppercase tracking-tight"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
            <div className="w-16 h-[3px] bg-[#F2A900]"></div>
          </div>
          <p className="text-[#2A1308]/85 text-sm lg:text-[15px] leading-snug font-sans pr-4 lg:pr-8 mt-6 lg:mt-0">
            {t('p')}
          </p>
        </div>

        {/* Right Images Column */}
        <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 gap-3 h-[400px] lg:h-[480px]">
          <div className="relative w-full h-full overflow-hidden row-span-2 rounded-lg shadow-md">
            <Image 
              src="/images/tambores_inicio_cimarron_putumayo.png"
              alt="Tambor africano" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/rio_cimarron_putumayo.png"
              alt="Río Putumayo" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/images/hombre_afro_putumayo.png"
              alt="Hombre afroputumayense" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
