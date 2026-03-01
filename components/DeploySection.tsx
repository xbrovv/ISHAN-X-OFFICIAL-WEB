import React from 'react';
import TiltCard from './TiltCard';

const DeploySection: React.FC = () => {
  return (
    <section id="deploy" className="py-24 relative overflow-visible">
        <div className="container mx-auto px-4 relative z-10">
            
            <div className="text-center mb-16" data-aos="fade-down">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Instant <span className="text-gradient-primary">Cloud Deploy</span></h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full opacity-50"></div>
                <p className="text-slate-400 mt-4 max-w-lg mx-auto">
                    Just pair your device. Our Cloud System automatically creates and deploys your bot instance in under 60 seconds.
                </p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-stretch gap-8">
                
                {/* Card 1: Primary Server */}
                <div className="w-full max-w-lg mx-auto" data-aos="fade-right">
                    <div className="animate-float h-full">
                        <TiltCard className="h-full">
                            <div className="glass-card rounded-3xl p-8 md:p-10 text-center relative h-full flex flex-col justify-between overflow-hidden border-indigo-500/30">
                                
                                {/* Ambient background light */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col items-center flex-grow">
                                    
                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10 animate-pulse-slow">
                                        <i className="fa-solid fa-server text-3xl text-indigo-400"></i>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Server 01 (Primary)</h3>
                                    <p className="text-slate-400 text-sm mb-8 leading-relaxed px-4">
                                        High-Speed Auto Deployment. Recommended for most users. 
                                    </p>

                                    <div className="w-full space-y-4 mt-auto">
                                        <a href="https://ishan-x-md-beta-pair-web-3wke.onrender.com" target="_blank" rel="noreferrer" className="block w-full group">
                                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold tracking-wide shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all transform group-hover:-translate-y-1">
                                                <i className="fa-solid fa-link mr-2"></i> Link Device & Deploy
                                            </button>
                                        </a>

                                         <div className="mt-4 py-2 px-5 rounded-full bg-indigo-500/5 border border-indigo-500/20 inline-flex items-center gap-2 w-full justify-center">
                                             <span className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase">Latency: 12ms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </div>

                {/* Card 2: Backup Server */}
                <div className="w-full max-w-lg mx-auto" data-aos="fade-left">
                     <div className="animate-float h-full" style={{ animationDelay: '1s' }}>
                        <TiltCard className="h-full">
                            <div className="glass-card rounded-3xl p-8 md:p-10 text-center relative h-full flex flex-col justify-between overflow-hidden">
                            
                                 {/* Ambient background light */}
                                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col items-center flex-grow">
                                     {/* Icon */}
                                    <div className="w-20 h-20 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/10">
                                         <i className="fa-solid fa-cloud-arrow-up text-3xl text-purple-400"></i>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Server 02 (Backup)</h3>
                                    <p className="text-slate-400 text-sm mb-8 leading-relaxed px-4">
                                        Alternative deployment node. Use this if Server 01 is busy.
                                    </p>

                                    <div className="w-full space-y-4 mt-auto">
                                        <a href="https://ishan-x-md-beta-pair-web-3wke.onrender.com" target="_blank" rel="noreferrer" className="block w-full group">
                                            <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-wide hover:bg-white/10 transition-all shadow-lg hover:shadow-purple-500/20">
                                                <i className="fa-solid fa-link mr-2"></i> Link Device & Deploy
                                            </button>
                                        </a>

                                        <div className="mt-4 py-2 px-5 rounded-full bg-purple-500/5 border border-purple-500/20 inline-flex items-center gap-2 w-full justify-center">
                                             <span className="text-[10px] text-purple-400 font-bold tracking-widest uppercase">Latency: 18ms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </div>

            </div>

            {/* Status Indicator */}
            <div className="mt-16 text-center" data-aos="fade-up">
                 <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#020617] border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-slate-300">
                        Auto-Deploy System: <span className="text-green-400">Operational</span>
                    </span>
                 </div>
            </div>

        </div>
    </section>
  );
};

export default DeploySection;
