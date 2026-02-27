
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { CATEGORIES } from './constants';
import { CategoryInfo } from './types';
import CategoryCard from './components/CategoryCard';
import QuizGame from './components/QuizGame';
import ReferencesPage from './components/ReferencesPage';
import EmergencyHotlines from './components/EmergencyHotlines';
import TeamPage from './components/TeamPage';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);
  const [showReferences, setShowReferences] = useState(false);
  const [showHotlines, setShowHotlines] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCategorySelect = (cat: CategoryInfo) => {
    setIsTransitioning(true);
    setActiveId(cat.id);
    // Small delay to allow the card zoom animation to play before switching views
    setTimeout(() => {
      setSelectedCategory(cat);
      setIsTransitioning(false);
      setActiveId(null);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {selectedCategory ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <QuizGame 
              category={selectedCategory} 
              onExit={() => setSelectedCategory(null)} 
            />
          </motion.div>
        ) : showReferences ? (
          <motion.div
            key="references"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <ReferencesPage onBack={() => setShowReferences(false)} />
          </motion.div>
        ) : showHotlines ? (
          <motion.div
            key="hotlines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <EmergencyHotlines onBack={() => setShowHotlines(false)} />
          </motion.div>
        ) : showTeam ? (
          <motion.div
            key="team"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <TeamPage onBack={() => setShowTeam(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
              <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Live System</span>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowHotlines(true)}
                    className="px-4 py-2 border border-red-600/50 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all cursor-pointer flex items-center gap-2"
                  >
                    Emergency Hotlines
                  </button>
                  <button 
                    onClick={() => setShowReferences(true)}
                    className="px-4 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-red-600 hover:text-red-500 transition-all cursor-pointer"
                  >
                    References
                  </button>
                  <button 
                    onClick={() => setShowTeam(true)}
                    className="px-4 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-red-600 hover:text-red-500 transition-all cursor-pointer"
                  >
                    Team
                  </button>
                </div>
              </div>
            </nav>

            {/* Dynamic Background */}
            <motion.div 
              animate={isTransitioning ? { opacity: 0, scale: 1.1 } : { opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url('https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25332741/GettyImages_2031349416.jpg?quality=90&strip=all&crop=16.67%2C0%2C66.66%2C100&w=2400')` }}
            />
            <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
              <header className="mb-20">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="w-12 h-0.5 bg-red-600" />
                  <span className="text-red-500 font-black tracking-[0.3em] uppercase text-sm">Crisis Awareness Module</span>
                </motion.div>
                
                <div className="relative inline-block">
                  <div className="absolute -top-16 left-1/3 opacity-10 pointer-events-none transform -rotate-12 hidden md:block">
                     <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                     </svg>
                  </div>

                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8"
                  >
                    KALAMIDAD<br />
                    <span className="text-red-600 drop-shadow-lg inline-block mt-2">COMPASS</span>
                  </motion.h1>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-4xl text-lg text-white/80 font-medium leading-relaxed border border-white/10 border-l-4 border-l-red-600 p-8 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ff0000_1px,transparent_1px)] bg-[size:20px_20px]" />
                  
                  <span className="relative z-10">
                    Welcome to Kalamidad Compass, an interactive disaster simulation platform where you can immerse yourself in realistic disaster scenarios, test your decision-making skills, and strengthen your knowledge in Disaster Risk Reduction and Management (DRRM). Ready to test your instincts against the world's most extreme natural phenomena? Select your chosen crisis below to begin the simulation.
                  </span>
                </motion.div>
              </header>

              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {CATEGORIES.map((cat, idx) => (
                  <CategoryCard 
                    key={cat.id} 
                    category={cat} 
                    onClick={handleCategorySelect}
                    isTransitioning={isTransitioning}
                    isActive={activeId === cat.id}
                    isAnyActive={activeId !== null}
                  />
                ))}
              </motion.div>

              <footer className="mt-20 flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/5 pt-10">
                <div className="text-xs font-black tracking-widest text-white/30 uppercase italic">
                  &copy; 2025 Kalamidad Compass // V.1.0.4
                </div>
                <div className="flex gap-4">
                   <div className="px-4 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-red-600 transition-colors cursor-default">
                      System Status: Online
                   </div>
                   <div className="px-4 py-2 border border-red-600/50 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors cursor-default">
                      High Priority Access
                   </div>
                </div>
              </footer>
            </div>

            {/* Side HUD Element */}
            <div className="fixed top-1/2 -right-12 rotate-90 hidden lg:block pointer-events-none">
              <span className="text-[10px] font-black tracking-[1em] text-white/10 uppercase">
                PROTOCOL_ALPHA_7729_INIT
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Technical Scroll Indicator */}
      <div className="fixed right-0 top-0 bottom-0 w-[2px] bg-white/5 z-[100] hidden lg:block">
        <motion.div 
          className="w-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] origin-top"
          style={{ height: '100%', scaleY }}
        />
        {/* HUD Markers */}
        <div className="absolute top-1/4 right-0 w-2 h-[1px] bg-white/20" />
        <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-red-600/40" />
        <div className="absolute top-3/4 right-0 w-2 h-[1px] bg-white/20" />
      </div>
    </div>
  );
};

export default App;
