import { Shield, Heart, GraduationCap, Users, Sprout, Handshake, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function LineasAccionSection() {
  const t = useTranslations('LineasAccionSection');

  const lineas = [
    { num: "1", title: t('items.1.title'), desc: t('items.1.desc'), icon: <Globe className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "2", title: t('items.2.title'), desc: t('items.2.desc'), icon: <Shield className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "3", title: t('items.3.title'), desc: t('items.3.desc'), icon: <Heart className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "4", title: t('items.4.title'), desc: t('items.4.desc'), icon: <GraduationCap className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "5", title: t('items.5.title'), desc: t('items.5.desc'), icon: <Users className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "6", title: t('items.6.title'), desc: t('items.6.desc'), icon: <Sprout className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> },
    { num: "7", title: t('items.7.title'), desc: t('items.7.desc'), icon: <Handshake className="w-8 h-8 text-[#F2A900]" strokeWidth={1.5} /> }
  ];

  return (
    <section className="w-full bg-[#E8DCC8] py-20 lg:py-28 flex justify-center">
      <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col items-center">
        
        <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl text-[#2A1308] uppercase tracking-wide mb-16 text-center">
          {t('title')}
        </h2>
        
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap xl:justify-center gap-6 w-full">
          {lineas.map((linea, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white/30 border border-[#2A1308]/10 rounded-sm p-6 pt-10 relative mt-8 xl:w-[calc(25%-1.2rem)] hover:bg-white/50 transition-colors"
            >
              {/* Icon Circle */}
              <div className="absolute -top-10 w-20 h-20 bg-[#2A1308] rounded-full flex items-center justify-center border-4 border-[#E8DCC8] shadow-sm">
                {linea.icon}
              </div>
              
              <h3 className="font-heading text-[13px] lg:text-sm text-[#2A1308] uppercase tracking-wider mb-4 h-auto xl:h-12 flex items-center justify-center">
                <span className="font-bold mr-1">{linea.num}.</span> {linea.title}
              </h3>
              
              <p className="text-[#2A1308]/75 font-sans text-xs lg:text-[13px] leading-relaxed">
                {linea.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
