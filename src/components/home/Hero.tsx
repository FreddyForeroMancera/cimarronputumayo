import Image from 'next/image';
import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative w-full min-h-screen bg-[#1B0D05] flex items-center overflow-hidden">
      {/* Hero Image on the Right */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/hero_group.png"
            alt="Comunidad y familia Afroputumayense"
            fill
            className="object-cover object-center translate-x-[20px]"
            priority
          />
          {/* Viñeta radial para enfocar a la señora de blanco (ubicada hacia la derecha y abajo) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_75%,transparent_10%,rgba(27,13,5,0.8)_85%)] pointer-events-none"></div>
          
          {/* Degradado lineal izquierdo: Fusión suave con el fondo que llega solo hasta la mitad de la imagen */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1B0D05] via-[#1B0D05]/60 to-transparent pointer-events-none"></div>
          
          {/* Degradado inferior para mezclar con la siguiente sección */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1B0D05] to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="w-full flex justify-center relative z-20 h-full">
        <div className="w-full max-w-6xl px-4 lg:px-8 flex flex-col justify-center h-full">
          <div className="max-w-4xl">
            {/* Typography block */}
          <div className="flex flex-col mb-8">
            <h1 className="font-heading uppercase flex flex-col items-start tracking-normal leading-[0.85]">
              <span className="text-gold font-sans font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-2">{t('brand')}</span>
              <span className="text-[130px] sm:text-[180px] lg:text-[220px] drop-shadow-2xl text-worn -ml-[6px]">{t('word1')}</span>
              <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-6 -mt-4 lg:-mt-8 w-full">
                <span className="text-[130px] sm:text-[180px] lg:text-[220px] drop-shadow-2xl text-worn">{t('word2')}</span>
                <div className="flex flex-col text-white font-heading text-4xl sm:text-5xl lg:text-6xl leading-[0.9] pb-4 lg:pb-8 tracking-wide">
                  <span>{t('line1')}</span>
                  <span>{t('line2')}</span>
                </div>
              </div>
            </h1>
          </div>

          <p className="text-cream-light/80 text-lg lg:text-xl max-w-lg mb-12 leading-relaxed font-sans">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/proyectos" className="bg-gold hover:bg-gold-dark text-black font-bold font-sans uppercase tracking-widest px-8 py-4 rounded-sm text-xs transition-all text-center flex items-center justify-center">
              {t('projectsBtn')}
            </Link>
            <Link href="/donaciones" className="border border-white/30 hover:border-gold hover:text-gold text-cream font-bold font-sans uppercase tracking-widest px-8 py-4 rounded-sm text-xs transition-all text-center flex items-center justify-center bg-black/20 backdrop-blur-sm">
              {t('supportBtn')}
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Right side keywords - Hidden on mobile */}
      <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-4 z-20 font-heading text-[3.5rem] uppercase tracking-widest text-white opacity-[0.03] text-right pointer-events-none leading-none">
        <span>HERENCIA</span>
        <span>TERRITORIO</span>
        <span>MEMORIA</span>
        <span>COMUNIDAD</span>
        <span>CULTURA</span>
        <span>FUTURO</span>
        <span>URAMBA</span>
        <span>DIGNIDAD</span>
      </div>

      {/* Social Icons Sidebar */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30 items-center">
        <div className="w-[1px] h-16 bg-gold/50 mb-2"></div>
        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
        <div className="w-[1px] h-16 bg-gold/50 mt-2"></div>
      </div>
    </section>
  );
}
