import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ProjectDetailView from '@/components/proyectos/ProjectDetailView';
import { Metadata } from 'next';

const validSlugs = [
  'uramba-cimarron',
  'etnodesarrollo-afroputumayo',
  'talento-afro-innovador',
  'guardianes-rios',
  'formacion-derechos',
  'aulas-casa-cultura-2012',
  'adecuacion-casa-cultura-2019',
  'trabajo-cultural-continuo'
];

const imageMap: Record<string, string> = {
  'uramba-cimarron': '/images/uramba_cimarron.png',
  'etnodesarrollo-afroputumayo': '/images/etnodesarrollo_afroputumayo.png',
  'talento-afro-innovador': '/images/talento_afro_innovador.png',
  'guardianes-rios': '/images/guardianes_de_los_rios_amazonicos.png',
  'formacion-derechos': '/images/formacion_en_derecho_y_liderazgo.png',
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  
  if (!validSlugs.includes(slug)) {
    return { title: 'Proyecto no encontrado' };
  }

  const t = await getTranslations({ locale, namespace: `ProjectDetails.${slug}` });
  return {
    title: t('title'),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  
  // Set locale for static generation support
  setRequestLocale(locale);

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: `ProjectDetails.${slug}` });

  return (
    <ProjectDetailView 
      slug={slug}
      title={t('title')}
      content={t.raw('content')}
      mainImage={imageMap[slug] || '/images/hero/hero_bg.png'}
    />
  );
}
