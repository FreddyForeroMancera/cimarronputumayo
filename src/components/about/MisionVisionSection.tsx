import { HeartHandshake, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MisionVisionSection() {
  const t = useTranslations('MisionVisionSection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-28 flex justify-center border-y border-[#F2A900]/10 relative">
      {/* Decorative center divider for desktop */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-[#F2A900]/10"></div>
      
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        {/* Misión */}
        <div className="flex flex-col sm:flex-row gap-6 items-start group">
          <div className="shrink-0 relative w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            {/* Decorative golden circle/border */}
            <div className="absolute inset-0 border-2 border-[#F2A900]/30 rounded-full border-dashed animate-[spin_30s_linear_infinite]"></div>
            <HeartHandshake className="w-10 h-10 text-[#F2A900]" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col pt-2">
            <h2 className="font-heading text-2xl lg:text-3xl text-[#F2A900] uppercase tracking-wide mb-4">
              {t('misionTitle')}
            </h2>
            <p className="text-white/85 font-sans text-sm leading-relaxed pr-2">
              {t('misionText')}
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="flex flex-col sm:flex-row gap-6 items-start group">
          <div className="shrink-0 relative w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            {/* Decorative golden circle/border */}
            <div className="absolute inset-0 border-2 border-[#F2A900]/30 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
            <Eye className="w-10 h-10 text-[#F2A900]" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col pt-2">
            <h2 className="font-heading text-2xl lg:text-3xl text-[#F2A900] uppercase tracking-wide mb-4">
              {t('visionTitle')}
            </h2>
            <p className="text-white/85 font-sans text-sm leading-relaxed pr-2">
              {t('visionText')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
