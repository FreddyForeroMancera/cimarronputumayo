import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight, Users, Shield, Lightbulb, Droplets, BookOpen } from 'lucide-react';

export default function ProjectsSection() {
  const t = useTranslations('ProjectsSection');
  
  const projects = [
    {
      id: 1,
      title: t('items.1.title'),
      description: t('items.1.text'),
      image: '/images/uramba_cimarron.png',
      slug: 'uramba-cimarron',
      Icon: Users,
    },
    {
      id: 2,
      title: t('items.2.title'),
      description: t('items.2.text'),
      image: '/images/etnodesarrollo_afroputumayo.png',
      slug: 'etnodesarrollo-afroputumayo',
      Icon: Shield,
    },
    {
      id: 3,
      title: t('items.3.title'),
      description: t('items.3.text'),
      image: '/images/talento_afro_innovador.png',
      slug: 'talento-afro-innovador',
      Icon: Lightbulb,
    },
    {
      id: 4,
      title: t('items.4.title'),
      description: t('items.4.text'),
      image: '/images/guardianes_de_los_rios_amazonicos.png',
      slug: 'guardianes-rios',
      Icon: Droplets,
    },
    {
      id: 5,
      title: t('items.5.title'),
      description: t('items.5.text'),
      image: '/images/formacion_en_derecho_y_liderazgo.png',
      slug: 'formacion-derechos',
      Icon: BookOpen,
    },
  ];

  return (
    <section className="w-full bg-[#E8DCC8] py-20 lg:py-24 flex justify-center">
      <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#2A1308] uppercase tracking-widest mb-4 text-center">
          {t('title')}
        </h2>
        <div className="w-16 h-[3px] bg-[#F2A900] mb-16"></div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 w-full">
          
          {projects.map((project) => (
            <Link href={`/proyectos/${project.slug}`} key={project.id} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] mb-8">
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Gold Icon overlapping */}
                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff9f0d] shadow-sm">
                    <project.Icon className="w-5 h-5 text-[#120803]" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col px-2">
                <h3 className="font-heading text-lg text-[#2A1308] uppercase tracking-wide mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-[#2A1308]/80 text-[13px] leading-snug font-sans">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}

          {/* Ver todos los proyectos */}
          <Link 
            href="/proyectos" 
            className="flex flex-col items-center justify-center bg-[#120803] group hover:bg-[#1B0D05] transition-colors aspect-[4/3] lg:aspect-auto lg:h-full min-h-[250px]"
          >
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-4 group-hover:border-[#F2A900] transition-colors">
              <ArrowRight className="w-5 h-5 text-white group-hover:text-[#F2A900] transition-colors" />
            </div>
            <span 
              className="font-heading text-sm text-white uppercase tracking-widest text-center px-4 leading-tight group-hover:text-[#F2A900] transition-colors"
              dangerouslySetInnerHTML={{ __html: t('btnAll') }}
            />
          </Link>

        </div>
      </div>
    </section>
  );
}
