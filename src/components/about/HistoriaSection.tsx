import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HistoriaSection() {
  const t = useTranslations('HistoriaSection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-28 flex justify-center border-t border-[#F2A900]/10 relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 pointer-events-none"></div>

      <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Collage de imágenes */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px]">
          <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-sm overflow-hidden z-10 border-4 border-[#120803] shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/images/historia_1.png" alt="Historia 1" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-sm overflow-hidden z-20 border-4 border-[#120803] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/images/historia_2.png" alt="Historia 2" fill className="object-cover" />
          </div>
          {/* Accent block */}
          <div className="absolute top-1/2 left-[15%] w-20 h-20 bg-[#F2A900] z-0 -translate-y-1/2 rounded-full mix-blend-screen opacity-50 blur-xl"></div>
        </div>

        {/* Right: Textos */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#FFF8EA] uppercase tracking-wide mb-8">
            {t('title')}
          </h2>
          
          <div className="space-y-6 text-[#FFF8EA]/80 font-sans text-[15px] leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#F2A900]"></div>
            <span className="font-heading text-[#F2A900] tracking-widest uppercase">Raíz y Legado</span>
          </div>
        </div>

      </div>
    </section>
  );
}
