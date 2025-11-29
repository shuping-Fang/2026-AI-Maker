import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { RegistrationStatus } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<RegistrationStatus>(RegistrationStatus.IDLE);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(RegistrationStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setStatus(RegistrationStatus.SUCCESS);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X size={24} />
        </button>

        {status === RegistrationStatus.SUCCESS ? (
          <div className="p-8 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-2">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">報名意願已送出！</h3>
            <p className="text-slate-400">
              我們已收到您的資訊，將會有專人於 24 小時內與您聯繫確認名額。
            </p>
            <button 
              onClick={onClose}
              className="mt-6 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-lg border border-slate-600 transition-colors"
            >
              關閉視窗
            </button>
          </div>
        ) : (
          <div className="p-6">
             <h3 className="text-xl font-bold text-white mb-2">立即搶位</h3>
             <p className="text-slate-400 text-sm mb-6">填寫基本資料，我們將保留您的名額。</p>
             
             <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">姓名</label>
                  <input type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="王小明" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Email</label>
                  <input type="email" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">聯絡電話</label>
                  <input type="tel" required className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green" placeholder="0912-345-678" />
                </div>
                
                <button 
                  type="submit"
                  disabled={status === RegistrationStatus.SUBMITTING}
                  className="w-full bg-gradient-to-r from-brand-green to-brand-neon text-slate-900 font-bold py-4 rounded-lg shadow-lg hover:shadow-brand-green/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {status === RegistrationStatus.SUBMITTING ? '處理中...' : '送出報名'}
                </button>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;