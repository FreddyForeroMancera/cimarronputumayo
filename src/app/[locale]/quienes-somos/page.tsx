import {setRequestLocale} from 'next-intl/server';
import AboutHero from '@/components/about/AboutHero';
import DefendemosSection from '@/components/about/DefendemosSection';
import HistoriaSection from '@/components/about/HistoriaSection';
import EsenciaSection from '@/components/about/EsenciaSection';
import MisionVisionSection from '@/components/about/MisionVisionSection';
import LineasAccionSection from '@/components/about/LineasAccionSection';
import BaseInstitucionalSection from '@/components/about/BaseInstitucionalSection';
import UneteCausaSection from '@/components/about/UneteCausaSection';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function QuienesSomosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#E8DCC8]">
      <AboutHero />
      <DefendemosSection />
      <HistoriaSection />
      <EsenciaSection />
      <MisionVisionSection />
      <LineasAccionSection />
      <BaseInstitucionalSection />
      <UneteCausaSection />
    </main>
  );
}
