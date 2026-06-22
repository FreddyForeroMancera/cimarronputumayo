import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Terms');
  
  const sections = t.raw('sections') as Array<{ title: string; content: string }>;

  return (
    <main className="flex flex-col w-full bg-[#E8DCC8] min-h-screen">
      <section className="w-full bg-[#120803] pt-32 pb-20 px-4 md:px-8 border-y border-[#F2A900]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#F2A900] uppercase mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-white/80 font-sans max-w-2xl mx-auto uppercase tracking-wide text-sm md:text-base">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded shadow-sm border border-[#2A1308]/10 text-[#2A1308] font-sans space-y-8">
          
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-heading text-3xl uppercase text-[#F2A900] mb-4">
                {section.title}
              </h2>
              <p className="leading-relaxed opacity-90 text-justify">
                {section.content}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
