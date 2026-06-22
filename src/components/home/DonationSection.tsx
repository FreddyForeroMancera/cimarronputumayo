import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function DonationSection() {
  const t = useTranslations('DonationSection');
  return (
    <section className="relative w-full py-24 lg:py-32 flex justify-center bg-[#2A1308] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero/hero_bg.png" /* Reemplazar con imagen comunitaria cálida */
          alt="Fondo de donación" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120803]/90 to-[#2A1308]/80 mix-blend-multiply"></div>
      </div>

      <div className="w-full max-w-5xl px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="w-16 h-16 bg-[#F2A900] rounded-full flex items-center justify-center mb-8 shadow-lg">
          <Heart className="w-8 h-8 text-[#120803]" fill="currentColor" />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-[#F2A900]"></div>
          <span className="font-sans text-[#F2A900] font-bold tracking-widest uppercase text-sm">
            {t('subtitle')}
          </span>
          <div className="w-12 h-[2px] bg-[#F2A900]"></div>
        </div>
        
        <h2 
          className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#FFF8EA] uppercase mb-8 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: t('title') }}
        />

        <div className="space-y-4 text-[#FFF8EA]/90 font-sans text-base lg:text-lg max-w-2xl mb-12">
          <p>{t('p1')}</p>
          <p className="font-bold text-[#F2A900]">{t('p2')}</p>
        </div>

        <Link 
          href="/donaciones" 
          className="inline-block bg-[#F2A900] hover:bg-[#D99700] rounded px-10 py-4 font-sans font-bold text-sm uppercase tracking-widest text-[#120803] transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          {t('btn')}
        </Link>
      </div>
    </section>
  );
}
