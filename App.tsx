import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Commands from './components/Commands';
import DeploySection from './components/DeploySection';
import SetupGuide from './components/SetupGuide';
import DownloadsSection from './components/DownloadsSection';
import FAQ from './components/FAQ';
import Developer from './components/Developer';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Initialize AOS typings
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ---------------------------------------------------------
    // AUTO WAKE-UP (Anti-Sleep Mechanism for Render Free Tier)
    // ---------------------------------------------------------
    // Site eka load weddi background eken Server 1 ekata request ekak yanawa.
    // Mekan Render dyno eka sleep wela nam auto wake-up wenawa.
    const pingServer = async () => {
      try {
        // 'no-cors' use karanne CORS errors console eke pennana eka nawaththanna.
        // Request eka server ekata yanawa, response eka read karanna bari unath server eka aherenawa.
        await fetch('https://king-ranux-pair-web.onrender.com', { mode: 'no-cors' });
        console.log('🚀 Server 1 Wake-up Ping Sent!');
      } catch (error) {
        // Silent fail - user ta disturb wenne na
      }
    };
    
    pingServer();

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && window.AOS) {
      setTimeout(() => {
        window.AOS.init({
          duration: 800,
          once: false, // Changed to false to animate every time
          mirror: true, // Changed to true to animate on scroll up
          offset: 80,
          easing: 'ease-out-cubic',
        });
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col min-h-screen relative selection:bg-purple-500/30 selection:text-white">
          <Background />
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <Stats />
            <Features />
            <Commands />
            <DeploySection />
            <SetupGuide />
            <DownloadsSection />
            <FAQ />
            <Developer />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;