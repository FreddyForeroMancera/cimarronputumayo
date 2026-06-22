import { Link } from '@/i18n/routing';
import { HeartHandshake } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function UneteCausaSection() {
  const t = useTranslations('UneteCausaSection');
  return (
    <section className="w-full bg-[#F2A900] py-12 flex justify-center">
      <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Side: Call to action text */}
        <div className="flex items-center gap-6 w-full lg:w-auto">
          <HeartHandshake className="w-12 h-12 lg:w-16 lg:h-16 text-[#2A1308] shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col">
            <h2 className="font-heading text-2xl lg:text-3xl text-[#2A1308] uppercase tracking-wide mb-1">
              {t('title')}
            </h2>
            <p 
              className="text-[#2A1308]/80 font-sans text-sm"
              dangerouslySetInnerHTML={{ __html: t('subtitle') }}
            />
          </div>
        </div>

        {/* Right Side: Button and additional text */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-end">
          <Link 
            href="/donaciones" 
            className="bg-[#120803] hover:bg-black text-[#F2A900] font-black uppercase tracking-wider px-10 py-4 rounded-sm text-[13px] transition-colors whitespace-nowrap shadow-lg w-full sm:w-auto text-center"
          >
            {t('btn')}
          </Link>
          <p className="text-[#2A1308]/80 font-sans text-xs max-w-[200px] text-center sm:text-left leading-tight hidden md:block">
            {t('info')}
          </p>
        </div>

      </div>
    </section>
  );
}
