import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]">
        <div className="relative flex flex-col items-center">
            
            {/* Spinning Ring */}
            <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary/50 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-secondary/50 animate-spin" style={{animationDirection: 'reverse', animationDuration: '2s'}}></div>
                
                {/* Center Logo */}
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl shadow-indigo-500/20">
                     <img 
                        src="https://files.catbox.moe/65rem4.png" 
                        alt="Logo" 
                        className="w-full h-full object-cover animate-pulse"
                    />
                </div>
            </div>
            
            {/* Glitch Text Title */}
            <div className="mb-2">
                <h1 className="text-3xl font-bold text-white tracking-[0.2em] font-sans glitch" data-text="KING RANUX">
                    ISHAN-X BETA
                </h1>
            </div>
            
            <p className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Initializing System...</p>
            
            {/* Smooth Loading Bar */}
            <div className="w-40 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-[shine_2s_infinite] w-full origin-left"></div>
            </div>
        </div>
    </div>
  );
};

export default Preloader;
