import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function ProjectsHistory() {
  const t = useTranslations('ProjectsHistory');

  const rows = [
    {
      col1: t('rows.1.col1'),
      col2: t('rows.1.col2'),
      col3: t('rows.1.col3'),
      col4: t('rows.1.col4'),
      href: '/proyectos/aulas-casa-cultura-2012'
    },
    {
      col1: t('rows.2.col1'),
      col2: t('rows.2.col2'),
      col3: t('rows.2.col3'),
      col4: t('rows.2.col4'),
      href: '/proyectos/adecuacion-casa-cultura-2019'
    },
    {
      col1: t('rows.3.col1'),
      col2: t('rows.3.col2'),
      col3: t('rows.3.col3'),
      col4: t('rows.3.col4'),
      href: '/proyectos/trabajo-cultural-continuo'
    }
  ];

  return (
    <section className="w-full flex justify-center py-16 lg:py-24 px-4 lg:px-8 bg-[#F3E8D3]">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-xl text-[#2A1308]/80 mb-1">
            {t('titleLine1')}
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-[#2A1308] mb-6">
            {t('titleLine2')}
          </h2>
          <p className="font-sans text-[#2A1308] text-base md:text-lg max-w-4xl">
            {t('desc')}
          </p>
        </div>

        {/* Table line separator */}
        <div className="w-full h-px bg-[#2A1308]/20 mb-8"></div>

        {/* Rows */}
        <div className="flex flex-col">
          {rows.map((row, index) => (
            <Link 
              key={index} 
              href={row.href}
              className="group flex flex-col md:flex-row md:items-center py-8 border-b border-[#2A1308]/10 hover:bg-white/50 transition-colors cursor-pointer px-4 -mx-4 rounded-lg"
            >
              {/* Col 1 */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <p className="font-heading text-lg md:text-xl text-[#2A1308]">
                  {row.col1}
                </p>
              </div>

              {/* Col 2 */}
              <div className="w-full md:w-5/12 mb-4 md:mb-0 md:px-6">
                <p className="font-heading text-lg md:text-xl text-[#2A1308]">
                  {row.col2}
                </p>
              </div>

              {/* Col 3 */}
              <div className="w-full md:w-2/12 mb-4 md:mb-0">
                <p className="font-sans font-bold text-sm text-[#2A1308]">
                  {row.col3}
                </p>
              </div>

              {/* Col 4 */}
              <div className="w-full md:w-1/12 mb-4 md:mb-0">
                <p className={`font-sans text-sm md:text-base ${row.col4 === 'Permanente' || row.col4 === 'Permanent' ? 'text-gray-400 font-bold' : 'text-gray-500'}`}>
                  {row.col4}
                </p>
              </div>

              {/* Arrow */}
              <div className="w-full md:w-1/12 flex md:justify-end mt-2 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-[#2A1308] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
