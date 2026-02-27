import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-12 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ISHAN-X MD BETA</a>
                    <p className="text-slate-400 mt-2 text-sm">© 2026 ISHAN-MD BETA. All Rights Reserved.</p>
                </div>
                
                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-white transition-transform hover:-translate-y-1">
                        <i className="fa-brands fa-github text-xl"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-blue-500 transition-transform hover:-translate-y-1">
                        <i className="fa-brands fa-facebook text-xl"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-pink-500 transition-transform hover:-translate-y-1">
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-red-500 transition-transform hover:-translate-y-1">
                        <i className="fa-brands fa-youtube text-xl"></i>
                    </a>
                </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
                <p>Designed with <i className="fas fa-heart text-red-500 mx-1"></i> by <span className="text-secondary font-medium">I.G Ishan Madusanke</span></p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
