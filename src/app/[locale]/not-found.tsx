import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#120803] flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="font-heading text-6xl md:text-8xl text-[#F2A900] uppercase mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mb-6">Página no encontrada</h2>
        <p className="text-white/80 font-sans mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <Link 
          href="/" 
          className="inline-block bg-[#F2A900] text-[#2A1308] px-8 py-3 font-heading text-xl uppercase tracking-wider hover:bg-white transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
