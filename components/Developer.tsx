import React from 'react';

const Developer: React.FC = () => {
  return (
    <section id="developer" className="py-20 bg-darker">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mastermind</span></h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
                    <div className="relative w-72 h-72 md:w-80 md:h-80 group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img src="https://files.catbox.moe/qj1z48.png" 
                             alt="I.G.Ishan Madusanke" 
                             className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
                
                <div className="md:w-1/2" data-aos="fade-left">
                    <h3 className="text-2xl font-bold mb-6 text-white">Who is behind this?</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        I'm <span className="text-primary font-semibold">I.G Ishan Madusanke</span>, a passionate Full Stack Developer and the creator of ISHAN-X BETA. 
                        My mission is to simplify communication through advanced automation technology, making it accessible to everyone.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                         <a href="https://wa.me/message/PDS7DAO342DCG1" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-600">
                             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                 <i className="fa-brands fa-whatsapp text-xl"></i>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-200">WhatsApp</h4>
                                 <p className="text-xs text-slate-500">Contact directly</p>
                             </div>
                         </a>
                         
                         <a href="https://chat.whatsapp.com/C5jE3Tk7U0RBGcR6kwRSUi" className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-600">
                             <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                 <i className="fa-solid fa-users text-xl"></i>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-200">Support Group</h4>
                                 <p className="text-xs text-slate-500">Join community</p>
                             </div>
                         </a>
                    </div>
                    
                    <div className="flex space-x-4">
                        <a href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Developer;
