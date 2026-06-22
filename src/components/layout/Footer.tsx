import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';

export default function Footer() {
  const tNav = useTranslations('Navigation');
  const tFoot = useTranslations('Footer');

  return (
    <footer className="w-full bg-[#120803] text-[#FFF8EA] py-12 lg:py-16 border-t border-white/5 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center mb-6">
            <Image 
              src="/logos/logo-cimarron-putumayo.png" 
              alt="Logo Cimarrón Putumayo" 
              width={400}
              height={120}
              className="w-auto h-24 object-contain"
            />
          </Link>
          <p className="text-sm text-[#FFF8EA] opacity-80 mb-6 pr-4">
            Cimarrón Putumayo: raíz, identidad y propósito.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#F2A900] font-heading text-lg uppercase mb-4 tracking-wider">{tFoot('quickLinks')}</h4>
          <ul className="space-y-2 text-sm text-cream opacity-80">
            <li><Link href="/" className="hover:text-gold transition-colors">{tNav('home')}</Link></li>
            <li><Link href="/quienes-somos" className="hover:text-gold transition-colors">{tNav('about')}</Link></li>
            <li><Link href="/casa-afro" className="hover:text-gold transition-colors">{tNav('casaAfro')}</Link></li>
            <li><Link href="/proyectos" className="hover:text-gold transition-colors">{tNav('projects')}</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-[#F2A900] font-heading text-lg uppercase mb-4 tracking-wider">{tFoot('community')}</h4>
          <ul className="space-y-2 text-sm text-cream opacity-80">
            <li><Link href="/historias" className="hover:text-gold transition-colors">{tNav('stories')}</Link></li>
            <li><Link href="/proyectos" className="hover:text-gold transition-colors">{tNav('calls')}</Link></li>
            <li><Link href="/donaciones" className="hover:text-gold transition-colors">{tNav('donations')}</Link></li>
            <li><Link href="/contacto" className="hover:text-gold transition-colors">{tNav('contact')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#F2A900] font-heading text-lg uppercase mb-4 tracking-wider">{tFoot('contact')}</h4>
          <ul className="space-y-2 text-sm text-cream opacity-80">
            <li>CIMARRON PUTUMAYO</li>
            <li>Carrera 21 No. 31 - 90</li>
            <li>Casa de Cultura Afroputumayense Librada Maturana</li>
            <li>Puerto Asís - Putumayo</li>
            <li className="pt-2">putumayocimarron@gmail.com</li>
            <li>+57 311 3590790</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href="https://facebook.com/cimarronputumayo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#F2A900] flex items-center justify-center hover:bg-[#F2A900] text-[#F2A900] hover:text-[#120803] transition-colors cursor-pointer group">
              <svg className="w-4 h-4 fill-current group-hover:fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
            </a>
            <a href="https://instagram.com/cimarronputumayo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#F2A900] flex items-center justify-center hover:bg-[#F2A900] text-[#F2A900] hover:text-[#120803] transition-colors cursor-pointer group">
              <svg className="w-4 h-4 fill-current group-hover:fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://twitter.com/cimarronputumayo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#F2A900] flex items-center justify-center hover:bg-[#F2A900] text-[#F2A900] hover:text-[#120803] transition-colors cursor-pointer group">
              <svg className="w-5 h-5 fill-current group-hover:fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-6xl px-4 lg:px-8 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FFF8EA] opacity-60">
        <p>© {new Date().getFullYear()} Asociación Cimarrón Putumayo. {tFoot('rights')}</p>
        <div className="flex gap-4">
          <Link href="/privacidad" className="hover:text-gold">{tFoot('privacy')}</Link>
          <Link href="/terminos" className="hover:text-gold">{tFoot('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
