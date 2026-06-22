import { setRequestLocale } from 'next-intl/server';
import DonationsHero from '@/components/donations/DonationsHero';
import DonationsBanner from '@/components/donations/DonationsBanner';
import DonationsMicro from '@/components/donations/DonationsMicro';
import DonationsCorporate from '@/components/donations/DonationsCorporate';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Donaciones',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DonacionesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-white">
      <DonationsHero />
      <DonationsBanner />
      <DonationsMicro />
      <DonationsCorporate />
    </main>
  );
}
