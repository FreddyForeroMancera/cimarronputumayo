'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';
import Image from 'next/image';
import DonateModal from '@/components/ui/DonateModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const currentLocale = useLocale();

  const isActive = (path: string) => pathname === path || (path !== '/' && pathname.startsWith(path));

  const flags = [
    { code: 'es', src: 'https://flagcdn.com/w40/es.png', alt: 'Español' },
    { code: 'en', src: 'https://flagcdn.com/w40/us.png', alt: 'English' },
    { code: 'fr', src: 'https://flagcdn.com/w40/fr.png', alt: 'Français' },
    { code: 'de', src: 'https://flagcdn.com/w40/de.png', alt: 'Deutsch' },
    { code: 'it', src: 'https://flagcdn.com/w40/it.png', alt: 'Italiano' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-[#120803]/80 backdrop-blur-md text-cream-light border-b border-white/5">
      <div className="w-full h-[100px] flex items-center justify-center">
        
        {/* Unified Alignment Box */}
        <div className="w-full max-w-6xl px-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logos/logo-cimarron-putumayo.png" 
              alt="Logo Cimarrón Putumayo" 
              width={276}
              height={92}
              className="w-auto h-14 lg:h-20 object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-3 xl:gap-6 text-[10px] xl:text-[11px] uppercase tracking-wider font-bold mt-2 mx-4">
            <Link href="/" className={`hover:text-gold transition-colors py-2 ${isActive('/') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('home')}</Link>
            <Link href="/quienes-somos" className={`hover:text-gold transition-colors py-2 ${isActive('/quienes-somos') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('about')}</Link>
            <Link href="/proyectos" className={`hover:text-gold transition-colors py-2 ${isActive('/proyectos') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('projects')}</Link>
            <Link href="/historias" className={`hover:text-gold transition-colors py-2 ${isActive('/historias') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('stories')}</Link>
            <Link href="/donaciones" className={`hover:text-gold transition-colors py-2 text-center leading-tight whitespace-nowrap xl:whitespace-normal ${isActive('/donaciones') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('donations')}</Link>
            <Link href="/contacto" className={`hover:text-gold transition-colors py-2 ${isActive('/contacto') ? 'text-gold border-b border-gold' : 'text-white'}`}>{t('contact')}</Link>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="flex items-center shrink-0 gap-4 lg:gap-6">
            
            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center gap-2 border-r border-white/20 pr-6">
              {flags.map((flag) => (
                <Link 
                  key={flag.code} 
                  href={pathname} 
                  locale={flag.code} 
                  className={`block transition-all hover:scale-110 rounded-sm ${currentLocale === flag.code ? 'ring-2 ring-[#F2A900] ring-offset-1 ring-offset-[#120803] opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={flag.src} alt={flag.alt} className="w-5 h-auto rounded-sm shadow-sm block" />
                </Link>
              ))}
            </div>

            <button 
              onClick={() => setIsDonateModalOpen(true)}
              className="bg-gold hover:bg-gold-dark text-[#2A1308] font-black uppercase tracking-wider px-5 py-3 rounded-sm text-[10px] xl:text-[11px] transition-colors hidden lg:block shadow-[0_0_15px_rgba(242,169,0,0.2)] whitespace-nowrap"
            >
              {t('donateNow')}
            </button>

            {/* Mobile Menu & Flags Toggle (Lógica inicial para celular) */}
            <div className="flex lg:hidden items-center gap-4">
              {/* Mostramos la bandera del idioma actual en mobile, al tocarla podría abrir un submenú de idiomas */}
              <div className="flex items-center gap-2 border border-white/20 rounded-sm px-2 py-1">
                <img src={flags.find(f => f.code === currentLocale)?.src} alt="Current Language" className="w-5 h-auto rounded-sm" />
                <span className="text-[10px] text-white font-bold uppercase">{currentLocale}</span>
              </div>
              
              {/* Hamburger Icon */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div 
        className={`fixed inset-0 top-[100px] bg-[#120803]/98 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col items-center justify-start pt-10 px-6 gap-8 overflow-y-auto pb-10 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
      >
        <nav className="flex flex-col items-center gap-6 text-sm uppercase tracking-widest font-bold w-full">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/') ? 'text-gold' : 'text-white'}`}>{t('home')}</Link>
          <Link href="/quienes-somos" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/quienes-somos') ? 'text-gold' : 'text-white'}`}>{t('about')}</Link>
          <Link href="/proyectos" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/proyectos') ? 'text-gold' : 'text-white'}`}>{t('projects')}</Link>
          <Link href="/historias" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/historias') ? 'text-gold' : 'text-white'}`}>{t('stories')}</Link>
          <Link href="/donaciones" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/donaciones') ? 'text-gold' : 'text-white'}`}>{t('donations')}</Link>
          <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className={`hover:text-gold transition-colors ${isActive('/contacto') ? 'text-gold' : 'text-white'}`}>{t('contact')}</Link>
        </nav>

        <button 
          onClick={() => { setIsDonateModalOpen(true); setIsMenuOpen(false); }}
          className="bg-gold hover:bg-gold-dark text-[#2A1308] font-black uppercase tracking-wider px-8 py-4 rounded-sm text-sm transition-colors shadow-[0_0_15px_rgba(242,169,0,0.2)] w-full text-center mt-2"
        >
          {t('donateNow')}
        </button>

        <div className="w-16 h-[1px] bg-white/20 my-2"></div>

        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-[10px] text-white/50 uppercase tracking-widest">Cambiar Idioma</span>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-2">
            {flags.map((flag) => (
              <Link 
                key={flag.code} 
                href={pathname} 
                locale={flag.code}
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-all hover:scale-110 rounded-sm ${currentLocale === flag.code ? 'ring-2 ring-[#F2A900] ring-offset-4 ring-offset-[#120803] opacity-100 scale-110' : 'opacity-50'}`}
              >
                <img src={flag.src} alt={flag.alt} className="w-7 h-auto rounded-sm shadow-sm block" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Donate Modal */}
      <DonateModal isOpen={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
    </header>
  );
}
