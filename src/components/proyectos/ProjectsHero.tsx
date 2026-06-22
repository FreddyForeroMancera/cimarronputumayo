import React from 'react';
import { useTranslations } from 'next-intl';

export default function ProjectsHero() {
  const t = useTranslations('ProjectsHero');
  return (
    <section className="w-full flex justify-center pt-16 lg:pt-24 pb-12 px-4 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col">
        {/* Top Separator Line */}
        <div className="w-full lg:w-[60%] h-px bg-[#2A1308] mb-10" />
        
        {/* Top Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Title */}
          <h1 
            className="font-heading text-6xl md:text-7xl lg:text-[100px] leading-[0.9] text-[#2A1308] lg:w-[60%]"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
          {/* Description */}
          <p className="font-sans text-[#2A1308]/80 text-lg md:text-xl lg:w-[40%] leading-relaxed pt-2">
            {t('p1')}
          </p>
        </div>
        
        {/* Bottom Text */}
        <p className="font-sans text-[#2A1308]/80 text-base md:text-lg max-w-5xl leading-relaxed">
          {t('p2')}
        </p>
      </div>
    </section>
  );
}
