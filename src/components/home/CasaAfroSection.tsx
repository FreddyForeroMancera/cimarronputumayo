import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function CasaAfroSection() {
  const t = useTranslations('CasaAfroSection');
  return (
    <section className="w-full bg-[#120803] py-20 lg:py-24 flex justify-center border-t border-[#F2A900]/10">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="flex flex-col order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F2A900]"></div>
            <span className="font-sans text-[#F2A900] font-bold tracking-widest uppercase text-sm">
              {t('subtitle')}
            </span>
          </div>
          
          <h2 
            className="font-heading text-4xl md:text-5xl lg:text-[52px] leading-tight text-[#FFF8EA] uppercase mb-8"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />

          <div className="space-y-6 text-[#FFF8EA]/80 font-sans text-[15px] leading-relaxed mb-10">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>

          <Link 
            href="/casa-afro" 
            className="inline-block self-start bg-transparent border-2 border-[#F2A900] text-[#F2A900] px-8 py-3.5 rounded font-sans font-bold text-[13px] uppercase tracking-widest hover:bg-[#F2A900] hover:text-[#120803] transition-colors duration-300"
          >
            {t('btn')}
          </Link>
        </div>

        {/* Right: Images Composition */}
        <div className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2">
          {/* Main big image */}
          <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-lg overflow-hidden border border-white/10 shadow-2xl z-10">
            <Image 
              src="/images/hero/hero_bg.png" /* Reemplazar con foto real de la Casa Afro */
              alt="Casa Afroputumayense exterior" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Smaller overlapping image */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-lg overflow-hidden border-4 border-[#120803] shadow-xl z-20">
            <Image 
              src="/images/hero/hero_bg.png" /* Reemplazar con foto interior/actividad */
              alt="Actividad en la Casa Afro" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-[#F2A900]/20 rounded-full -z-0"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#F2A900]/10 rounded-full -z-0"></div>
        </div>

      </div>
    </section>
  );
}
