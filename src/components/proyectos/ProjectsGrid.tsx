import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Users, Shield, Lightbulb, BookOpen, Fingerprint, Droplets } from 'lucide-react';

export default function ProjectsGrid() {
  const t = useTranslations('ProjectsGrid');

  const projects = [
    { 
      title: t('items.1.title'), 
      text: t('items.1.text'),
      href: '/proyectos/uramba-cimarron',
      Icon: Users
    },
    { 
      title: t('items.2.title'), 
      text: t('items.2.text'),
      href: '/proyectos/etnodesarrollo-afroputumayo',
      Icon: Shield
    },
    { 
      title: t('items.3.title'), 
      text: t('items.3.text'),
      href: '/proyectos/talento-afro-innovador',
      Icon: Lightbulb
    },
    { 
      title: t('items.4.title'), 
      text: t('items.4.text'),
      href: '/proyectos/formacion-derechos',
      Icon: BookOpen
    },
    { 
      title: t('items.5.title'), 
      text: t('items.5.text'),
      href: '/casa-afro',
      Icon: Fingerprint
    },
    { 
      title: t('items.6.title'), 
      text: t('items.6.text'),
      href: '/proyectos/guardianes-rios',
      Icon: Droplets
    },
  ];

  return (
    <section className="w-full flex justify-center py-16 lg:py-24 px-4 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-[#2A1308] text-center mb-16 leading-tight max-w-3xl">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {projects.map((proj, i) => (
            <div key={i} className="group flex flex-col border border-[#2A1308]/10 bg-white hover:bg-[#FFF8EA] p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#F2A900]/50 relative overflow-hidden">
              {/* Decorative top line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#F2A900] transition-all duration-500 group-hover:w-full" />
              
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#F3E8D3] group-hover:bg-[#F2A900] flex items-center justify-center mb-8 transition-colors duration-300 shadow-sm border border-[#2A1308]/5">
                <proj.Icon className="w-6 h-6 text-[#2A1308] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              </div>

              <h3 className="font-heading text-2xl lg:text-[32px] text-[#2A1308] mb-4 whitespace-pre-line leading-[1.1]">
                {proj.title}
              </h3>
              
              <div className="w-8 h-px bg-[#F2A900] mb-6 transition-all duration-300 group-hover:w-16" />

              <p className="font-sans text-[#2A1308]/80 text-base mb-12 flex-grow leading-relaxed group-hover:text-[#2A1308] transition-colors duration-300">
                {proj.text}
              </p>
              
              <div className="mt-auto">
                <Link 
                  href={proj.href} 
                  className="inline-block bg-[#F2A900] hover:bg-[#D99700] rounded-md px-8 py-3.5 font-sans font-bold text-[13px] uppercase tracking-wider text-[#120803] transition-colors duration-300 shadow-sm"
                >
                  {t('btn')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
