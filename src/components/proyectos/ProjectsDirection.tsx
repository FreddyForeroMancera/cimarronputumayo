import { useTranslations } from 'next-intl';

export default function ProjectsDirection() {
  const t = useTranslations('ProjectsDirection');
  return (
    <section className="w-full flex justify-center pb-16 lg:pb-24 px-4 lg:px-8">
      <div className="w-full max-w-5xl flex flex-col items-center text-center">
        <h3 className="font-heading text-lg lg:text-xl text-[#2A1308] uppercase tracking-[0.2em] mb-6">
          {t('title')}
        </h3>
        <p className="font-sans text-[#2A1308]/80 text-base md:text-lg leading-relaxed">
          {t('p')}
        </p>
      </div>
    </section>
  );
}
