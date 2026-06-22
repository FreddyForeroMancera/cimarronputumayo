'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('NewsletterSection');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simular llamada a API
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="w-full bg-[#F3E8D3] py-20 border-y border-[#2A1308]/5 flex justify-center">
      <div className="w-full max-w-4xl px-4 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        
        {/* Texts */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl text-[#2A1308] uppercase mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-[#2A1308]/70 font-sans text-sm md:text-[15px] leading-relaxed max-w-md mx-auto md:mx-0">
            {t('p')}
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-auto flex-1 flex flex-col items-center md:items-end">
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow"
          >
            <input 
              type="email" 
              placeholder={t('inputPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 bg-white border border-[#2A1308]/10 px-5 py-4 font-sans text-[#2A1308] placeholder:text-[#2A1308]/40 focus:outline-none focus:border-[#F2A900] rounded-t-sm sm:rounded-l-sm sm:rounded-tr-none transition-colors disabled:opacity-70 disabled:bg-gray-50"
            />
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-4 bg-[#120803] text-[#FFF8EA] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#1B0D05] transition-colors rounded-b-sm sm:rounded-r-sm sm:rounded-bl-none disabled:opacity-70 flex justify-center items-center min-w-[140px]"
            >
              {status === 'loading' ? t('btnLoading') : status === 'success' ? t('btnSuccess') : t('btn')}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-[#120803] font-sans text-xs font-bold mt-3 w-full sm:text-right">
              {t('msgSuccess')}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
