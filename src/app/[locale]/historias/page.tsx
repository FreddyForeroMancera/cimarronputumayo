import { setRequestLocale } from 'next-intl/server';
import StoriesHero from '@/components/stories/StoriesHero';
import FeaturedStory from '@/components/stories/FeaturedStory';
import StoriesInfographic from '@/components/stories/StoriesInfographic';
import StoriesGrid from '@/components/stories/StoriesGrid';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Historias',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HistoriasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#F9F6F0]">
      <StoriesHero />
      <FeaturedStory />
      <StoriesInfographic />
      <StoriesGrid />
    </main>
  );
}
