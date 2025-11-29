import React from 'react';
import FeatureCard from './FeatureCard';
import { FEATURES, MAIN_IMAGE_URL } from '../constants';
import { Sparkles } from 'lucide-react';

const CoreArea: React.FC = () => {
  return (
    <section className="py-8 px-5 space-y-8 bg-tech-dark">
      {/* Main Visual */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-brand-green rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video shadow-2xl">
          <img 
            src={MAIN_IMAGE_URL} 
            alt="Arduino and Edge Impulse Interface" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          {/* Overlay Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
             <Sparkles className="text-brand-neon w-4 h-4" />
             <span className="text-xs font-bold text-white">AI Hardware Demo</span>
          </div>
          
          {/* Speech Bubble Overlay Effect */}
          <div className="absolute top-6 left-6 animate-bounce">
            <div className="bg-white text-slate-900 px-4 py-2 rounded-r-xl rounded-tl-xl font-bold text-sm shadow-lg border-2 border-tech-blue transform -rotate-2">
              Open Light! 💡
            </div>
          </div>
        </div>
      </div>

      {/* Benefits List */}
      <div className="space-y-4">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default CoreArea;