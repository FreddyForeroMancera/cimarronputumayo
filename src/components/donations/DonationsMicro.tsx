import { useTranslations } from 'next-intl';

export default function DonationsMicro() {
  const t = useTranslations('DonationsMicro');
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h2 className="font-heading text-5xl md:text-6xl text-[#2A1308] text-center">
          {t('title')}
        </h2>
        {/* Aquí se pueden agregar componentes de pasarela de pago o botones en el futuro */}
      </div>
    </section>
  );
}
