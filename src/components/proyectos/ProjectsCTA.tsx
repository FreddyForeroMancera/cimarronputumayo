'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ProjectProposalModal from '@/components/ui/ProjectProposalModal';

export default function ProjectsCTA() {
  const t = useTranslations('ProjectsCTA');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full flex justify-center py-20 px-4 lg:px-8 bg-[#D9D9D9]/50">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24">
        {/* Title */}
        <h2 
          className="font-heading text-5xl md:text-6xl lg:text-[76px] leading-[0.9] text-[#080604] lg:w-1/2"
          dangerouslySetInnerHTML={{ __html: t('title') }}
        />
        
        {/* Content */}
        <div className="flex flex-col items-start lg:w-1/2">
          <p className="font-sans text-[#080604]/80 text-base md:text-lg mb-10 leading-relaxed">
            {t('p')}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-white px-8 py-4 font-heading text-sm uppercase tracking-widest text-[#080604] hover:bg-[#F2A900] hover:text-white transition-colors shadow-sm"
          >
            {t('btn')}
          </button>
          
          <ProjectProposalModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>
    </section>
  );
}
