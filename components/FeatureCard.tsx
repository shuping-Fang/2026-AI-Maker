import React from 'react';
import { FeatureItemProps } from '../types';

const FeatureCard: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-tech-cyan/50 transition-colors duration-300">
      <div className="flex-shrink-0 bg-slate-900 p-3 rounded-lg border border-slate-700 text-brand-neon shadow-lg">
        <Icon size={28} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;