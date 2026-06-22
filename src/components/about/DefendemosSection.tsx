import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function DefendemosSection() {
  const t = useTranslations('DefendemosSection');
  return (
    <section className="w-full bg-[#2A1308] py-20 lg:py-24 flex justify-center text-center px-4">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F2A900] uppercase tracking-wide mb-8">
          {t('title')}
        </h2>
        <p className="text-[#FFF8EA]/90 font-sans text-base md:text-lg leading-relaxed mb-12">
          {t('p')}
        </p>
        <Link 
          href="/proyectos" 
          className="inline-block bg-[#F2A900] hover:bg-[#D99700] text-[#120803] px-8 py-4 font-sans font-bold text-[13px] uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          {t('btn')}
        </Link>
      </div>
    </section>
  );
}
