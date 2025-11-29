import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyCTAProps {
  onRegisterClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onRegisterClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent md:hidden z-50 pb-8">
      <button 
        onClick={onRegisterClick}
        className="w-full bg-gradient-to-r from-brand-green to-brand-neon text-slate-900 font-black text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 animate-pulse-fast active:scale-95 transition-transform"
      >
        立即報名
        <ArrowRight className="w-5 h-5" />
      </button>
      <p className="text-center text-[10px] text-slate-400 mt-2">
        剩餘名額：<span className="text-brand-neon font-bold">5</span> 位
      </p>
    </div>
  );
};

export default StickyCTA;