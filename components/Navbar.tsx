import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-[#0f1021]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                
                {/* Logo Area */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-[1px]">
                        <div className="w-full h-full bg-[#0f1021] rounded-lg flex items-center justify-center">
                           <img 
                                src="https://files.catbox.moe/65rem4.png" 
                                className="w-8 h-8 rounded-md" 
                                alt="Logo" 
                            />
                        </div>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        ISHAN-X BETA <span className="text-blue-500">MD</span>
                    </span>
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {['Home', 'Features', 'Deploy', 'Downloads'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                        >
                            {item}
                        </a>
                    ))}
                    
                    <a 
                        href="https://github.com/ishanxmd/ISHAN-X-BETA-MD" 
                        target="_blank"
                        className="ml-4 px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                    >
                        GitHub
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
                >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                </button>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 bg-[#181b33] rounded-xl border border-white/5 p-2 shadow-2xl">
                     {['Home', 'Features', 'Deploy', 'Downloads', 'Contact'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;
