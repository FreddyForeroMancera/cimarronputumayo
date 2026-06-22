import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ProjectDetailViewProps {
  slug: string;
  title: string;
  content: string;
  mainImage: string;
}

export default function ProjectDetailView({ slug, title, content, mainImage }: ProjectDetailViewProps) {
  const t = useTranslations('ProjectDetails');

  return (
    <div className="w-full bg-[#F3E8D3] min-h-screen pb-20">
      {/* Hero interno del proyecto */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#2A1308]">
        <Image 
          src={mainImage} 
          alt={title} 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white text-center px-4 tracking-wider uppercase drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-lg border-t-4 border-[#F2A900]">
          <h2 className="font-heading text-2xl text-[#2A1308] uppercase mb-6 tracking-wide">
            {t('title')}
          </h2>
          <div className="w-12 h-1 bg-[#F2A900] mb-8"></div>
          
          <div 
            className="text-[#2A1308]/80 text-lg leading-relaxed font-sans mb-12 space-y-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Galería Simulada */}
          <div>
            <h2 className="font-heading text-2xl text-[#2A1308] uppercase mb-8 tracking-wide">
              {t('galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/images/hero/hero_bg.png" 
                    alt={`Actividad ${item}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
