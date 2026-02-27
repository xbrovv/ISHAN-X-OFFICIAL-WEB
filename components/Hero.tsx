import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Auto Reply Bot", "Cloud Hosted", "24/7 Online", "Privacy Pro"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [currentWord, isDeleting]);

  const tick = () => {
    let i = textIndex % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1);

    setCurrentWord(updatedText);

    if (isDeleting) {
      setDelta(40);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); 
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setTextIndex(textIndex + 1);
      setDelta(100);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
        
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-4 text-center z-10">
            
            {/* Version Badge */}
            <div data-aos="fade-down" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-indigo-500/30 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all cursor-default animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">Cloud System Online</span>
            </div>

            {/* Main Glitch Title */}
            <div data-aos="zoom-in" className="mb-6 relative z-20">
                 <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                    King <span className="glitch text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" data-text="RANUX Pro">RANUX Pro</span>
                </h1>
            </div>

            {/* Dynamic Typewriter Text */}
            <div data-aos="fade-up" data-aos-delay="200" className="h-10 mb-8">
                <p className="text-xl md:text-3xl text-slate-300 font-light">
                    The Ultimate <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{currentWord}</span>
                    <span className="text-cyan-400 animate-pulse font-bold">|</span>
                </p>
            </div>

            {/* Description - UPDATED FOR AUTO DEPLOY */}
            <p data-aos="fade-up" data-aos-delay="300" className="max-w-2xl mx-auto text-slate-400 mb-10 leading-relaxed text-base md:text-lg">
                No GitHub. No Heroku. No Servers needed. Just pair your device and experience the <span className="text-white font-semibold">ISHAN-X BETA Auto-Cloud</span> revolution. Your bot deploys automatically in 60 seconds.
            </p>

            {/* Buttons with Glow Effects */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-30">
                <a href="#deploy" className="w-full sm:w-auto group">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all transform group-hover:-translate-y-1 relative overflow-hidden border border-white/10">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <i className="fa-solid fa-bolt text-xl animate-pulse"></i> Link & Deploy
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </a>
                <a href="https://whatsapp.com/channel/0029Vb7eEOGLY6dBNzl2IH0O" className="w-full sm:w-auto group">
                    <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#121b2e] border border-green-500/30 text-white font-bold hover:bg-green-500/10 hover:border-green-500/60 transition-all backdrop-blur-md flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                        <i className="fa-brands fa-whatsapp text-green-400 text-2xl group-hover:rotate-[360deg] transition-transform duration-700"></i> Join Channel
                    </button>
                </a>
            </div>

            {/* Floating 3D Image Card with Rings */}
            <div className="mt-24 flex justify-center relative" data-aos="fade-up" data-aos-delay="500">
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float z-10">
                     
                     {/* Rotating Rings */}
                     <div className="absolute -inset-10 rounded-full border border-indigo-500/20 border-t-indigo-500 animate-spin-slow"></div>
                     <div className="absolute -inset-20 rounded-full border border-purple-500/10 border-b-purple-500 animate-[spin_15s_linear_infinite_reverse]"></div>

                     {/* Glass Card Container */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] transform rotate-6 scale-105 backdrop-blur-sm border border-white/10 shadow-2xl"></div>
                     
                     {/* Main Image */}
                     <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-indigo-500/30 bg-[#0f172a] group">
                         <img 
                            src="https://files.catbox.moe/65rem4.png" 
                            alt="Bot Profile" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                     </div>
                     
                     {/* Floating Badge */}
                     <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-slate-900/90 backdrop-blur border border-green-500/50 rounded-lg shadow-xl animate-bounce">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-green-400">AUTO ACTIVE</span>
                        </div>
                     </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Hero;
