import React from 'react';

const HeaderArea: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center space-y-4 py-8 px-6 bg-gradient-to-b from-tech-darker to-tech-dark border-b border-slate-800">
      <div className="flex flex-wrap justify-center gap-2 mb-2">
        <span className="bg-tech-blue/20 text-tech-cyan px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-tech-blue/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          學習歷程加分
        </span>
        <span className="bg-brand-green/20 text-brand-neon px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-green/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          無須深奧數學
        </span>
        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-500/30">
          帶回實體作品
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-tech-cyan to-brand-neon tracking-tight leading-tight drop-shadow-lg">
        高中生 AI 實戰
        <br />
        <span className="text-3xl sm:text-4xl text-white mt-2 block">打造你的鋼鐵人賈維斯！</span>
      </h1>

      <h2 className="text-lg sm:text-xl text-slate-400 font-medium">
        Edge Impulse x Arduino 語音識別工作坊
        <br />
        <span className="text-sm text-slate-500 mt-1 block">打造聽得懂人話的硬體專題</span>
      </h2>
    </header>
  );
};

export default HeaderArea;