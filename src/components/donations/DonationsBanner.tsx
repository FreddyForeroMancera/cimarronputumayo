import Image from 'next/image';

export default function DonationsBanner() {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/fondo_donaciones.png"
          alt="Paisaje del Putumayo al atardecer"
          fill
          className="object-cover"
        />
        {/* Overlay para oscurecer un poco y permitir que el texto sea legible */}
        <div className="absolute inset-0 bg-[#2A1308]/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-4">
        <h2 className="font-sans font-bold text-2xl md:text-4xl lg:text-[48px] text-white drop-shadow-md leading-tight tracking-wide">
          Bríndanos tu apoyo para defender la vida, la memoria y la dignidad<br className="hidden lg:block" />
          <span className="lg:mt-2 inline-block">de la comunidad y el territorio</span>
        </h2>
      </div>
    </section>
  );
}
