import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Metadata} from 'next';
import {Bebas_Neue, Inter} from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'Cimarrón Putumayo', template: '%s | Cimarrón Putumayo' },
  description: 'Asociación Cimarrón Putumayo: Raíz, identidad y propósito en defensa de las comunidades afroputumayenses.',
};

const fontHeading = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${fontSans.variable} ${fontHeading.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-grow pt-[100px]">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
