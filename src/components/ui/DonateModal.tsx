'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Heart } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type DonateModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const t = useTranslations('DonateModal');
  
  const [mounted, setMounted] = useState(false);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState<string>('');

  // Hydration check for Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val) {
      setAmount(null);
    } else {
      setAmount(25); // Default back if empty
    }
  };

  const finalAmount = customAmount ? customAmount : amount;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#120803]/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - absolute top right */}
        <button 
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 bg-white/80 md:bg-gray-100/80 hover:bg-white text-gray-500 hover:text-[#2A1308] rounded-full p-2 transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Image & Inspiration (Hidden on very small screens) */}
        <div className="hidden md:flex md:w-5/12 relative bg-[#F3E8D3] flex-col justify-end p-8 overflow-hidden">
          <Image 
            src="/images/hero/hero_bg.png" /* Placeholder */
            alt="Comunidad"
            fill
            className="object-cover opacity-90"
          />
          {/* Dark gradient overlay at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120803] via-[#120803]/40 to-transparent"></div>
          
          <div className="relative z-10 mt-auto">
            <Heart className="w-8 h-8 text-[#F2A900] mb-4" />
            <h3 className="font-heading text-3xl text-white leading-tight mb-3" dangerouslySetInnerHTML={{ __html: `${t('leftTitle1')}<br />${t('leftTitle2')}` }} />
            <p className="text-white/80 font-sans text-sm leading-relaxed">
              {t('leftDesc')}
            </p>
          </div>
        </div>

        {/* Right Side: Donation Form */}
        <div className="w-full md:w-7/12 flex flex-col p-6 sm:p-8 lg:p-10 overflow-y-auto">
          
          <div className="mb-8">
            <h2 className="font-heading text-3xl text-[#2A1308] mb-2">{t('rightTitle')}</h2>
            <p className="text-gray-500 text-sm">{t('rightDesc')}</p>
          </div>

          <div className="flex flex-col gap-8">
            
            {/* 1. Frequency Section */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('freqLabel')}</label>
              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-3 text-sm font-bold rounded-md transition-all duration-300 ${frequency === 'once' ? 'bg-white shadow-sm text-[#2A1308] scale-[1.02]' : 'text-gray-500 hover:text-[#2A1308]'}`}
                >
                  {t('freqOnce')}
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-3 text-sm font-bold rounded-md transition-all duration-300 ${frequency === 'monthly' ? 'bg-white shadow-sm text-[#2A1308] scale-[1.02]' : 'text-gray-500 hover:text-[#2A1308]'}`}
                >
                  {t('freqMonthly')}
                </button>
              </div>
            </div>

            {/* 2. Amount Section */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('amountLabel')}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAmountClick(val)}
                    className={`py-3 rounded-lg font-bold text-lg border-2 transition-all duration-300 ${
                      amount === val 
                        ? 'border-[#F2A900] bg-[#F2A900]/10 text-[#2A1308] scale-105' 
                        : 'border-gray-200 text-gray-500 hover:border-[#F2A900]/40 hover:bg-[#F2A900]/5'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">$</span>
                </div>
                <input
                  type="number"
                  placeholder={t('customAmountPlaceholder')}
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  min="1"
                  className={`w-full pl-8 pr-12 py-4 rounded-lg font-bold text-lg border-2 outline-none transition-all ${
                    customAmount ? 'border-[#F2A900] bg-[#F2A900]/5 text-[#2A1308]' : 'border-gray-200 focus:border-[#F2A900] bg-gray-50 focus:bg-white'
                  }`}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-sm font-semibold">USD</span>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="mt-4 pt-6 border-t border-gray-100">
              <button 
                onClick={onClose} 
                className="w-full bg-[#2A1308] hover:bg-[#F2A900] hover:text-[#120803] text-white font-bold uppercase tracking-widest py-5 rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>{t('donateBtn')} {finalAmount ? `$${finalAmount}` : ''} {frequency === 'monthly' ? t('donateMonthlySuffix') : ''}</span>
                <Heart className="w-5 h-5 text-[#F2A900] group-hover:text-[#120803] transition-colors" />
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                {t('secureTransaction')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
