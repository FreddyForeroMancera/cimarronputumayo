import Image from 'next/image';
import { ShieldCheck, Users, Fingerprint, Flame } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EsenciaSection() {
  const t = useTranslations('EsenciaSection');

  const valores = [
    {
      title: t('items.1.title'),
      desc: t('items.1.text'),
      icon: <ShieldCheck className="w-6 h-6 text-[#120803]" strokeWidth={2} />
    },
    {
      title: t('items.2.title'),
      desc: t('items.2.text'),
      icon: <Users className="w-6 h-6 text-[#120803]" strokeWidth={2} />
    },
    {
      title: t('items.3.title'),
      desc: t('items.3.text'),
      icon: <Fingerprint className="w-6 h-6 text-[#120803]" strokeWidth={2} />
    },
    {
      title: t('items.4.title'),
      desc: t('items.4.text'),
      icon: <Flame className="w-6 h-6 text-[#120803]" strokeWidth={2} />
    }
  ];

  return (
    <section className="w-full bg-[#E8DCC8] py-20 lg:py-28 flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Images / Collage */}
        <div className="relative w-full h-[500px] hidden lg:block">
          <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded shadow-xl overflow-hidden z-10 border-4 border-[#E8DCC8]">
            <Image src="/images/hero/hero_bg.png" alt="Cultura Afroputumayense" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded shadow-2xl overflow-hidden z-20 border-4 border-[#E8DCC8]">
            <Image src="/images/hero/hero_bg.png" alt="Comunidad Putumayo" fill className="object-cover" />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#F2A900]/30 rounded-full z-0"></div>
          <div className="absolute bottom-20 -right-8 w-24 h-24 bg-[#F2A900]/20 rounded-full z-0"></div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F2A900]"></div>
            <span className="font-sans text-[#2A1308]/60 font-bold tracking-widest uppercase text-sm">
              {t('subtitle')}
            </span>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl text-[#2A1308] uppercase tracking-wide mb-12">
            {t('title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valores.map((val, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#F2A900] flex items-center justify-center mb-4 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="font-heading text-xl text-[#2A1308] uppercase mb-2">
                  {val.title}
                </h3>
                <p className="font-sans text-[#2A1308]/75 text-[14px] leading-relaxed pr-4">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
