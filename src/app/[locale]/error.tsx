'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#120803] flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="font-heading text-5xl md:text-6xl text-[#F2A900] uppercase mb-4">Algo salió mal</h1>
        <p className="text-white/80 font-sans mb-8">Ha ocurrido un error inesperado. Por favor, intenta de nuevo.</p>
        <button
          onClick={() => reset()}
          className="inline-block bg-[#F2A900] text-[#2A1308] px-8 py-3 font-heading text-xl uppercase tracking-wider hover:bg-white transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
