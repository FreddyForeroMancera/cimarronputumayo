'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ProjectProposalModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectProposalModal({ isOpen, onClose }: ProjectProposalModalProps) {
  const t = useTranslations('ProjectProposalModal');
  
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Hydration check for Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form states on open
      setIsSuccess(false);
      setIsSubmitting(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds of success
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#120803]/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl text-[#2A1308]">{t('title')}</h2>
            <p className="text-gray-500 mt-1 text-sm">{t('description')}</p>
          </div>
          <button 
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-gray-400 hover:text-[#2A1308] hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-[#F2A900]/20 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-[#F2A900]" />
              </div>
              <h3 className="font-heading text-2xl text-[#2A1308] mb-2">¡Completado!</h3>
              <p className="text-gray-600 font-sans">{t('successMsg')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nombre */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t('nameLabel')} *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F2A900] outline-none transition-colors bg-gray-50 focus:bg-white text-[#2A1308]"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t('emailLabel')} *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F2A900] outline-none transition-colors bg-gray-50 focus:bg-white text-[#2A1308]"
                  />
                </div>
              </div>

              {/* Organizacion */}
              <div className="space-y-1">
                <label htmlFor="org" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t('orgLabel')}
                </label>
                <input 
                  type="text" 
                  id="org"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F2A900] outline-none transition-colors bg-gray-50 focus:bg-white text-[#2A1308]"
                />
              </div>

              {/* Titulo Propuesta */}
              <div className="space-y-1">
                <label htmlFor="title" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t('projectTitleLabel')} *
                </label>
                <input 
                  type="text" 
                  id="title"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F2A900] outline-none transition-colors bg-gray-50 focus:bg-white text-[#2A1308]"
                />
              </div>

              {/* Descripcion */}
              <div className="space-y-1">
                <label htmlFor="desc" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t('projectDescLabel')} *
                </label>
                <textarea 
                  id="desc"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F2A900] outline-none transition-colors bg-gray-50 focus:bg-white text-[#2A1308] resize-none"
                ></textarea>
              </div>

              {/* Footer Actions */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button 
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-md text-gray-500 hover:text-[#2A1308] hover:bg-gray-100 font-sans font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#F2A900] hover:bg-[#D99700] text-[#120803] font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-[#120803] border-t-transparent rounded-full animate-spin"></span>
                  ) : null}
                  {t('submitBtn')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
