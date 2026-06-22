import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Contacto',
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('ContactPage');
  
  return (
    <main className="flex flex-col w-full">
      <section className="w-full bg-[#120803] pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-[#F2A900] uppercase mb-6">
            {t('title')}
          </h1>
          <p className="text-white/80 font-sans max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="w-full bg-[#E8DCC8] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl text-[#2A1308] uppercase mb-8">{t('infoTitle')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A1308] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#F2A900] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-[#2A1308] uppercase">{t('addressTitle')}</h3>
                  <p className="font-sans text-[#2A1308]/80">{t('address1')}<br/>{t('address2')}<br/>{t('address3')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A1308] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#F2A900] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-[#2A1308] uppercase">{t('phoneTitle')}</h3>
                  <p className="font-sans text-[#2A1308]/80">+57 311 3590790</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A1308] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#F2A900] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-[#2A1308] uppercase">{t('emailTitle')}</h3>
                  <p className="font-sans text-[#2A1308]/80">putumayocimarron@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
