import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import PillarsSection from '@/components/home/PillarsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import FeaturedStorySection from '@/components/home/FeaturedStorySection';
import CasaAfroSection from '@/components/home/CasaAfroSection';
import DonationSection from '@/components/home/DonationSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <PillarsSection />
      <ProjectsSection />
      <FeaturedStorySection />
      <CasaAfroSection />
      <DonationSection />
      <NewsletterSection />
    </main>
  );
}
