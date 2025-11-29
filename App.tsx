import React, { useState } from 'react';
import HeaderArea from './components/HeaderArea';
import CoreArea from './components/CoreArea';
import FooterArea from './components/FooterArea';
import StickyCTA from './components/StickyCTA';
import RegisterModal from './components/RegisterModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center">
      {/* 
        This container mimics a vertical poster or mobile screen.
        On desktop, it's centered with a max-width.
        On mobile, it takes full width.
      */}
      <main className="w-full max-w-lg bg-slate-900 shadow-2xl min-h-screen flex flex-col relative overflow-hidden ring-1 ring-slate-800">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-tech-blue/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-brand-green/5 rounded-full blur-[80px] translate-y-1/3 pointer-events-none"></div>

        {/* Content Sections */}
        <div className="relative z-10 flex flex-col h-full">
          <HeaderArea />
          <CoreArea />
          <FooterArea onRegisterClick={handleRegisterClick} />
        </div>

        {/* Sticky Mobile CTA */}
        <StickyCTA onRegisterClick={handleRegisterClick} />

        {/* Registration Modal */}
        <RegisterModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />

      </main>
    </div>
  );
};

export default App;