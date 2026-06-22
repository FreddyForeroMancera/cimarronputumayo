import { Scale, FileCheck, Building, BadgeCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BaseInstitucionalSection() {
  const t = useTranslations('BaseInstitucionalSection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-28 flex justify-center border-t border-[#F2A900]/10">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Context */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F2A900]"></div>
            <span className="font-sans text-[#F2A900] font-bold tracking-widest uppercase text-sm">
              {t('subtitle')}
            </span>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl text-[#FFF8EA] uppercase tracking-wide mb-8">
            {t('title')}
          </h2>

          <p className="text-[#FFF8EA]/80 font-sans text-[15px] leading-relaxed">
            {t('p1')}
          </p>
        </div>

        {/* Right Column: Key Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
            <Scale className="w-8 h-8 text-[#F2A900] mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg text-[#F2A900] uppercase mb-1">{t('items.1.title')}</h3>
            <p className="text-white/70 font-sans text-sm">{t('items.1.text')}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
            <FileCheck className="w-8 h-8 text-[#F2A900] mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg text-[#F2A900] uppercase mb-1">{t('items.2.title')}</h3>
            <p className="text-white/70 font-sans text-sm">{t('items.2.text')}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
            <Building className="w-8 h-8 text-[#F2A900] mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg text-[#F2A900] uppercase mb-1">{t('items.3.title')}</h3>
            <p className="text-white/70 font-sans text-sm">{t('items.3.text')}</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 transition-colors">
            <BadgeCheck className="w-8 h-8 text-[#F2A900] mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg text-[#F2A900] uppercase mb-1">{t('items.4.title')}</h3>
            <p className="text-white/70 font-sans text-sm">{t('items.4.text')}</p>
          </div>

        </div>

      </div>
    </section>
  );
}
