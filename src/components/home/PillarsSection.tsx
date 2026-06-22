import { Music, Leaf, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PillarsSection() {
  const t = useTranslations('PillarsSection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-24 flex justify-center border-t border-white/5">
      <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#FFF8EA] uppercase tracking-widest mb-4 text-center">
          {t('title')}
        </h2>
        <div className="w-16 h-[3px] bg-[#F2A900] mb-16"></div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Pilar 1: Cultura */}
          <div className="flex gap-4 md:gap-5 px-2 py-8 md:py-0 md:pr-8 lg:pr-10">
            <Music className="w-12 h-12 lg:w-14 lg:h-14 text-[#F2A900] shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <h3 className="font-heading text-lg lg:text-xl text-[#FFF8EA] uppercase tracking-wider mb-3">
                {t('items.1.title')}
              </h3>
              <p className="text-[#FFF8EA]/70 text-sm leading-relaxed font-sans">
                {t('items.1.text')}
              </p>
            </div>
          </div>

          {/* Pilar 2: Territorio */}
          <div className="flex gap-4 md:gap-5 px-2 py-8 md:py-0 md:px-8 lg:px-10">
            <Leaf className="w-12 h-12 lg:w-14 lg:h-14 text-[#F2A900] shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <h3 className="font-heading text-lg lg:text-xl text-[#FFF8EA] uppercase tracking-wider mb-3">
                {t('items.2.title')}
              </h3>
              <p className="text-[#FFF8EA]/70 text-sm leading-relaxed font-sans">
                {t('items.2.text')}
              </p>
            </div>
          </div>

          {/* Pilar 3: Derechos */}
          <div className="flex gap-4 md:gap-5 px-2 py-8 md:py-0 md:pl-8 lg:pl-10">
            <Users className="w-12 h-12 lg:w-14 lg:h-14 text-[#F2A900] shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <h3 className="font-heading text-lg lg:text-xl text-[#FFF8EA] uppercase tracking-wider mb-3">
                {t('items.3.title')}
              </h3>
              <p className="text-[#FFF8EA]/70 text-sm leading-relaxed font-sans">
                {t('items.3.text')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
