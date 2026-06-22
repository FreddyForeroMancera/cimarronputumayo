import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Casa Afro',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CasaAfroPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('CasaAfroPage');
  
  return (
    <main className="flex flex-col w-full">
      <section className="w-full bg-[#120803] pt-32 pb-20 px-4 md:px-8 border-y border-[#F2A900]/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-[#F2A900] uppercase mb-6">
            {t('title1')}
          </h1>
          <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">
            {t('subtitle1')}
          </h2>
          <p className="text-white/80 font-sans max-w-2xl mx-auto">
            {t('desc1')}
          </p>
        </div>
      </section>

      <section className="w-full bg-[#E8DCC8] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video w-full rounded shadow-xl overflow-hidden">
            <Image 
              src="/images/hero/hero_bg.png" /* Placeholder */
              alt="Casa Afro"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl text-[#2A1308] uppercase mb-6">{t('title2')}</h2>
            <p className="font-sans text-[#2A1308]/80 mb-4">
              {t('desc2_1')}
            </p>
            <p className="font-sans text-[#2A1308]/80 mb-8">
              {t('desc2_2')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
