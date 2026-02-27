import React, { useState } from 'react';
import TiltCard from './TiltCard';

interface CommandItemProps {
    item: { cmd: string; desc: string; category: string };
    index: number;
}

const CommandItem: React.FC<CommandItemProps> = ({ item, index }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(item.cmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div data-aos="fade-up" data-aos-delay={index * 50}>
            <TiltCard>
                <div className="glass-card p-5 rounded-xl flex items-center justify-between hover:bg-white/5 transition-all group h-full">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <code className="text-indigo-400 font-bold bg-indigo-500/10 px-2 py-1 rounded text-sm border border-indigo-500/20 group-hover:text-white group-hover:bg-indigo-500 group-hover:border-transparent transition-all select-all">
                                {item.cmd}
                            </code>
                            
                            {/* Copy Button */}
                            <button 
                                onClick={handleCopy}
                                className={`w-6 h-6 flex items-center justify-center rounded transition-all duration-300 ${
                                    copied 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'text-slate-500 hover:text-white hover:bg-white/10'
                                }`}
                                title="Copy command"
                            >
                                <i className={`fa-regular ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                            </button>

                            <span className="text-[10px] text-slate-500 uppercase tracking-wider border border-slate-700 px-1.5 py-0.5 rounded ml-1">
                                {item.category}
                            </span>
                        </div>
                        <span className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</span>
                    </div>
                    <div className="text-slate-600 group-hover:text-indigo-400 transition-colors">
                        <i className="fa-solid fa-chevron-right text-xs"></i>
                    </div>
                </div>
            </TiltCard>
        </div>
    );
};

const Commands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allCommands = [
    { cmd: ".menu", desc: "Show all bot commands", category: "Main" },
    { cmd: ".alive", desc: "Check bot system status", category: "Main" },
    { cmd: ".ping", desc: "Check server latency", category: "Main" },
    { cmd: ".song", desc: "Download YouTube Audio", category: "Download" },
    { cmd: ".video", desc: "Download YouTube Video", category: "Download" },
    { cmd: ".yts", desc: "Search YouTube videos", category: "Search" },
    { cmd: ".movie", desc: "Download Movies (Sinhala Sub)", category: "Download" },
    { cmd: ".anime", desc: "Download Anime Episodes", category: "Download" },
    { cmd: ".tiktok", desc: "Download TikTok (No Watermark)", category: "Download" },
    { cmd: ".fb", desc: "Download Facebook videos", category: "Download" },
    { cmd: ".apk", desc: "Download Android Apps", category: "Download" },
    { cmd: ".fetch", desc: "Universal Downloader", category: "Download" },
    { cmd: ".wall", desc: "Search HD Wallpapers", category: "Search" },
    { cmd: ".vv", desc: "Recover ViewOnce media", category: "Tools" },
    { cmd: ".getpp", desc: "Get user profile picture", category: "Tools" },
    { cmd: ".jid", desc: "Get chat/group JID", category: "Tools" },
    { cmd: ".join", desc: "Join group via link", category: "Tools" },
    { cmd: ".forward", desc: "Forward messages", category: "Tools" },
    { cmd: ".settings", desc: "Bot settings panel", category: "Owner" },
    { cmd: ".setfullpp", desc: "Set bot profile pic", category: "Owner" },
    { cmd: ".logo", desc: "Create text logos", category: "Design" },
    { cmd: ".naruto", desc: "Naruto text effect", category: "Design" },
    { cmd: ".neon", desc: "Neon text effect", category: "Design" },
    { cmd: ".glitch", desc: "Glitch text effect", category: "Design" },
  ];

  const filteredCommands = allCommands.filter(item => 
    item.cmd.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="commands" className="py-20 relative">
        <div className="container mx-auto px-4">
             <div className="text-center mb-10" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bot <span className="text-gradient-primary">Commands</span></h2>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full opacity-50 mb-6"></div>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fa-solid fa-search text-slate-500 group-focus-within:text-indigo-400 transition-colors"></i>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search commands (e.g., song, video, logo)..." 
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder-slate-500 backdrop-blur-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                     <div className="absolute inset-0 -z-10 bg-indigo-500/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCommands.length > 0 ? (
                    filteredCommands.map((item, index) => (
                        <CommandItem key={index} item={item} index={index} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-slate-500 mb-4">
                            <i className="fa-solid fa-ghost text-2xl"></i>
                        </div>
                        <p className="text-slate-400">No commands found for "{searchTerm}"</p>
                    </div>
                )}
            </div>
            
            <div className="text-center mt-12">
                 <a href="https://github.com/ishanxmd/ISHAN-X-BETA-MD" target="_blank" rel="noreferrer">
                     <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:border-indigo-500 hover:text-white transition-all hover:bg-white/5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        View Full Documentation on GitHub
                     </button>
                 </a>
            </div>
        </div>
    </section>
  );
};

export default Commands;
