import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function DonationsCorporate() {
  const t = useTranslations('DonationsCorporate');
  return (
    <section className="w-full bg-[#F9F6F0] py-16 lg:py-24 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* 3 Column Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1fr] gap-8 lg:gap-16 items-center">
          
          {/* Column 1: Title */}
          <div>
            <h2 
              className="font-heading text-4xl md:text-5xl lg:text-[44px] leading-[1.1] text-[#2A1308]"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
          </div>
          
          {/* Column 2: Text */}
          <div>
            <p className="font-sans text-[#2A1308]/80 text-base md:text-lg leading-relaxed text-justify lg:text-left">
              {t('p')}
            </p>
          </div>
          
          {/* Column 3: Button */}
          <div className="flex justify-start lg:justify-end">
            <Link 
              href="/contacto" 
              className="inline-block bg-[#080604] hover:bg-[#F2A900] rounded px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-widest text-white hover:text-[#120803] transition-colors duration-300 shadow-sm"
            >
              {t('btn')}
            </Link>
          </div>
          
        </div>
        
        {/* Bottom Line separator for future content */}
        <div className="w-full h-px bg-[#2A1308]/10 mt-16 lg:mt-24" />
      </div>
    </section>
  );
}
