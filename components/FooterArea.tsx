import React from 'react';
import { Calendar, MapPin, Users, DollarSign, ExternalLink } from 'lucide-react';
import { WORKSHOP_DETAILS, QR_CODE_URL } from '../constants';

interface FooterAreaProps {
  onRegisterClick: () => void;
}

const FooterArea: React.FC<FooterAreaProps> = ({ onRegisterClick }) => {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800 pb-28 md:pb-8">
      {/* Info Box */}
      <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 shadow-xl mb-8">
        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-green pl-3">
          課程資訊
        </h3>
        <ul className="space-y-4 text-slate-300 text-sm">
          <li className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-tech-cyan mt-0.5 flex-shrink-0" />
            <div>
              <span className="block font-bold text-white">時間</span>
              {WORKSHOP_DETAILS.date} <br /> {WORKSHOP_DETAILS.time}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-tech-cyan mt-0.5 flex-shrink-0" />
            <div>
              <span className="block font-bold text-white">地點</span>
              {WORKSHOP_DETAILS.location}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Users className="w-5 h-5 text-tech-cyan mt-0.5 flex-shrink-0" />
            <div>
              <span className="block font-bold text-white">對象</span>
              {WORKSHOP_DETAILS.targetAudience}
            </div>
          </li>
          <li className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-brand-neon mt-0.5 flex-shrink-0" />
            <div>
              <span className="block font-bold text-white">費用</span>
              {WORKSHOP_DETAILS.price}
            </div>
          </li>
        </ul>
      </div>

      {/* Bottom Layout: QR + CTA Text */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
            <div className="p-2 bg-white rounded-xl shadow-lg">
                <img src={QR_CODE_URL} alt="Scan to Register" className="w-32 h-32 object-contain" />
            </div>
            <p className="text-xs text-slate-400">掃描查看完整課表與報名</p>
        </div>
        
        <div className="text-center">
            <p className="text-xs text-slate-600">主辦單位：未來科技教育實驗室 | 聯絡電話：02-1234-5678</p>
        </div>
      </div>
      
      {/* Sticky Mobile CTA is handled in App.tsx, but here is a button for desktop view */}
      <div className="hidden md:block mt-8 text-center">
        <button 
            onClick={onRegisterClick}
            className="bg-brand-green hover:bg-brand-neon text-slate-900 font-black text-xl py-4 px-12 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
            名額有限，立即搶位！
            <ExternalLink className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default FooterArea;