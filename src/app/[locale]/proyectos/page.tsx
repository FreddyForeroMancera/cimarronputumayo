import {setRequestLocale} from 'next-intl/server';
import ProjectsHero from '@/components/proyectos/ProjectsHero';
import ProjectsLandscape from '@/components/proyectos/ProjectsLandscape';
import ProjectsHistory from '@/components/proyectos/ProjectsHistory';
import ProjectsGrid from '@/components/proyectos/ProjectsGrid';
import ProjectsDirection from '@/components/proyectos/ProjectsDirection';
import ProjectsCTA from '@/components/proyectos/ProjectsCTA';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Proyectos',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProyectosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#F3E8D3]">
      <ProjectsHero />
      <ProjectsLandscape />
      <ProjectsHistory />
      <ProjectsGrid />
      <ProjectsDirection />
      <ProjectsCTA />
    </main>
  );
}
