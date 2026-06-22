import Image from 'next/image';
import { Sprout } from 'lucide-react';

export default function ProjectsLandscape() {
  return (
    <section className="w-full flex justify-center py-12 px-4 lg:px-8 overflow-hidden">
      <div className="w-full max-w-6xl relative">
        {/* The oval image container */}
        <div className="relative w-full aspect-[21/9] rounded-[200px] overflow-hidden bg-gray-200">
          <Image 
            src="/images/proyectos_paisaje.jpg"
            alt="Paisaje de los proyectos de Cimarrón Putumayo"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Decorative Icon replacing the pink circle */}
        <div className="absolute -bottom-6 left-10 md:left-24 w-28 h-28 md:w-36 md:h-36 bg-[#F3E8D3] rounded-full flex items-center justify-center z-20 shadow-sm">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-[#F2A900] shadow-inner border border-[#2A1308]/5">
            <Sprout className="w-10 h-10 md:w-14 md:h-14 text-[#2A1308]" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
