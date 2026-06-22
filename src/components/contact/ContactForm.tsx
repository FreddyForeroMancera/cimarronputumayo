'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactSchema = z.object({
    name: z.string().min(2, t('errName')),
    email: z.string().email(t('errEmail')),
    message: z.string().min(10, t('errMessage')),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    // Simulating API call for now (Phase 1)
    setTimeout(() => {
      console.log('Form data:', data);
      setStatus('success');
      reset();
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#2A1308] p-8 rounded text-center">
        <h3 className="font-heading text-3xl text-[#F2A900] uppercase mb-4">{t('successTitle')}</h3>
        <p className="text-white/80 font-sans mb-6">{t('successText')}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-[#F2A900] text-[#2A1308] px-6 py-2 font-heading text-xl uppercase tracking-wider hover:bg-white transition-colors"
        >
          {t('btnAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#2A1308] p-8 rounded flex flex-col gap-6">
      <h3 className="font-heading text-3xl text-[#F2A900] uppercase">{t('title')}</h3>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white font-sans text-sm">{t('nameLabel')}</label>
        <input 
          id="name"
          {...register('name')}
          className="bg-transparent border border-white/20 p-3 text-white focus:outline-none focus:border-[#F2A900] transition-colors"
          placeholder={t('namePlaceholder')}
        />
        {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white font-sans text-sm">{t('emailLabel')}</label>
        <input 
          id="email"
          type="email"
          {...register('email')}
          className="bg-transparent border border-white/20 p-3 text-white focus:outline-none focus:border-[#F2A900] transition-colors"
          placeholder={t('emailPlaceholder')}
        />
        {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white font-sans text-sm">{t('messageLabel')}</label>
        <textarea 
          id="message"
          {...register('message')}
          rows={5}
          className="bg-transparent border border-white/20 p-3 text-white focus:outline-none focus:border-[#F2A900] transition-colors resize-none"
          placeholder={t('messagePlaceholder')}
        ></textarea>
        {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
      </div>

      <button 
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#F2A900] text-[#2A1308] px-8 py-3 font-heading text-xl uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 mt-2"
      >
        {status === 'loading' ? t('btnSending') : t('btnSend')}
      </button>
    </form>
  );
}
