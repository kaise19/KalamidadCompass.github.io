
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { DisasterType, QuizQuestion, CategoryInfo } from '../types';
import { generateQuizQuestions } from '../services/geminiService';
import { DISASTER_FACTS } from '../constants';
import { HOTLINES } from './EmergencyHotlines';

interface Props {
  category: CategoryInfo;
  onExit: () => void;
}

const QuizGame: React.FC<Props> = ({ category, onExit }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showFacts, setShowFacts] = useState(false);

  useEffect(() => {
    async function loadQuiz() {
      const data = await generateQuizQuestions(category.id);
      setQuestions(data);
      setLoading(false);
    }
    loadQuiz();
  }, [category.id]);

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === questions[currentIndex].correctIndex) {
      setScore(s => s + 1);
    } else {
      setLives(l => Math.max(0, l - 1));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1 && lives > 0) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setGameOver(true);
    }
  };

  const handleRedo = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setGameOver(false);
    setLives(5);
    // Re-fetch questions to shuffle them again
    setLoading(true);
    generateQuizQuestions(category.id).then(qs => {
      setQuestions(qs);
      setLoading(false);
    });
  };

  const disasterData = DISASTER_FACTS[category.id] || { facts: [], references: [] };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-red-500 font-bold tracking-widest animate-pulse uppercase">Simulating Disaster Scenario...</p>
      </div>
    );
  }

  if (gameOver) {
    const isSuccess = lives > 0 && score >= questions.length * 0.6;
    
    // Smart Hotline Integration
    const getRelevantHotlines = () => {
      const id = category.id.toLowerCase();
      if (id.includes('flood')) return ['MMDA', 'PAGASA', 'NDRRMC', 'Philippine Coast Guard'];
      if (id.includes('earthquake')) return ['PHIVOLCS', 'NDRRMC', 'Philippine Red Cross', 'Philippine National Police'];
      if (id.includes('typhoon')) return ['PAGASA', 'NDRRMC', 'Philippine Red Cross', 'DSWD'];
      if (id.includes('volcanic')) return ['PHIVOLCS', 'NDRRMC', 'DSWD', 'Philippine Red Cross'];
      if (id.includes('landslide')) return ['NDRRMC', 'Philippine Red Cross', 'PAGASA', 'MMDA'];
      if (id.includes('tsunami')) return ['PHIVOLCS', 'Philippine Coast Guard', 'NDRRMC', 'Philippine Red Cross'];
      return ['National Emergency', 'NDRRMC', 'Philippine Red Cross'];
    };

    const relevantNames = getRelevantHotlines();
    const relevantHotlines = HOTLINES.filter(h => relevantNames.includes(h.name));

    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-8 text-center z-[100] overflow-y-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-4xl w-full"
        >
          <h2 className="text-5xl md:text-7xl font-black text-red-600 mb-4 italic uppercase tracking-tighter">
            {isSuccess ? "Mission Success" : "Mission Failed"}
          </h2>
          <div className="text-2xl md:text-3xl font-bold mb-6">
            Survival Accuracy: <span className="text-red-500">{Math.round((score / questions.length) * 100)}%</span>
          </div>
          <p className="max-w-2xl mx-auto text-white/70 mb-10 text-lg md:text-xl font-bold leading-tight">
            {isSuccess 
              ? "Great job! You are now better prepared to handle one of the common disasters here in the Philippines." 
              : "Keep taking the tests to improve your skills and become more prepared to survive any disaster."}
          </p>

          {/* Smart Hotlines */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-red-600/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Priority Response Channels</span>
              <div className="w-8 h-px bg-red-600/50" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relevantHotlines.map((hotline, i) => (
                <div key={i} className="p-4 bg-white/[0.03] border border-white/10 rounded-sm flex flex-col items-center text-center group hover:border-red-600/50 transition-all">
                  <div className="text-red-600 mb-3 group-hover:scale-110 transition-transform">
                    {React.cloneElement(hotline.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">{hotline.name}</div>
                  <div className="text-[11px] font-mono text-red-500 font-bold">{hotline.numbers[0]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={onExit}
              className="px-10 py-4 border border-white/20 hover:bg-white/10 text-white font-black tracking-widest transition-all uppercase skew-x-[-10deg] text-sm"
            >
              Return to Hub
            </button>
            {!isSuccess && (
              <button 
                onClick={handleRedo}
                className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black tracking-widest transition-all uppercase skew-x-[-10deg] text-sm"
              >
                Redo Simulation
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  const current = questions[currentIndex];

  return (
    <div className="min-h-screen relative flex flex-col bg-black text-white overflow-x-hidden">
      {/* Life Line HUD */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-12 right-6 z-50 flex flex-col gap-2 items-end bg-black/60 backdrop-blur-md p-4 border border-red-600/20 rounded-xl shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 animate-pulse rounded-full" />
          <span className="text-[10px] font-black tracking-widest text-red-500 uppercase">Survival Status</span>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-12 h-2 border border-white/20 transition-all duration-500 ${i < lives ? 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'bg-transparent opacity-20'}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${category.bgImage})`, backgroundAttachment: 'fixed' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      {/* Fun Facts Side Panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-black border-l border-red-600/30 transform transition-transform duration-500 ease-in-out ${showFacts ? 'translate-x-0' : 'translate-x-full shadow-none'}`}>
        <div className="h-full flex flex-col p-10 overflow-y-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2">Educational Intel</h2>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">{category.title} FACTS</h3>
            </div>
            <button onClick={() => setShowFacts(false)} className="text-white/30 hover:text-white transition-colors p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-10">
            {disasterData.facts.map((fact, i) => (
              <div key={i} className="animate-fadeIn relative pl-6 border-l border-red-600/30" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-600" />
                <h4 className="text-red-600 font-black uppercase tracking-widest text-[11px] mb-3">
                  {fact.section}
                </h4>
                <p className="text-white/80 leading-relaxed italic text-lg font-medium">
                  {fact.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-20">
            <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em] text-center">
              Data_Stream_Active // Intelligence_Verified
            </div>
          </div>
        </div>
      </div>

      {/* Facts Toggle Button */}
      <button
        onClick={() => setShowFacts(true)}
        className="fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-red-600 p-3 shadow-2xl hover:pr-6 transition-all duration-300 group rounded-l-md border-y border-l border-white/20"
      >
        <div className="flex flex-col items-center gap-2">
          <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-widest text-white mt-1">FUN FACTS</span>
        </div>
      </button>

      {/* Header UI */}
      <header className="relative z-10 p-8 flex justify-between items-start bg-gradient-to-b from-black/90 to-transparent sticky top-0 backdrop-blur-sm">
        <div className="flex items-start gap-6">
          <button 
            onClick={onExit}
            className="p-3 hover:bg-red-600 transition-colors border border-white/10 rounded group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-1">Active Scenario</h2>
            <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none">{category.title}</h1>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="text-right">
          <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Progress</div>
          <div className="text-xl font-black italic flex items-center gap-2 justify-end">
            <span className="text-red-600">{currentIndex + 1}</span>
            <span className="text-white/20">/</span>
            <span>{questions.length}</span>
          </div>
          <div className="w-32 h-1 bg-white/10 mt-2 ml-auto overflow-hidden rounded-full">
            <div 
              className="h-full bg-red-600 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <motion.main 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 flex-1 flex flex-col justify-center py-12 px-6 max-w-5xl mx-auto w-full gap-12"
      >
        {/* Scenario Area */}
        <div className="w-full">
          <div className="relative pl-10 border-l-4 border-red-600 py-4">
            <h3 className="text-red-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4">Crisis Intel</h3>
            <p className="text-2xl md:text-5xl font-black leading-[1.1] tracking-tight">
              {current.situation}
            </p>

            {showExplanation && (
              <div className="mt-10 pt-10 border-t border-white/10 animate-fadeIn">
                 <p className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4">Analysis Result</p>
                 {selectedOption !== current.correctIndex && (
                   <div className="mb-4 p-4 bg-red-900/20 border-l-2 border-red-500">
                     <p className="text-red-400 font-bold text-sm uppercase mb-1">Why your choice was incorrect:</p>
                     <p className="text-white/70 italic text-base">{current.optionExplanations?.[selectedOption!] || "This action does not follow standard safety protocols for this disaster."}</p>
                   </div>
                 )}
                 <div className="p-4 bg-green-900/20 border-l-2 border-green-500">
                   <p className="text-green-400 font-bold text-sm uppercase mb-1">Correct Protocol:</p>
                   <p className="text-white/80 italic leading-relaxed text-lg">{current.optionExplanations?.[current.correctIndex] || current.explanation}</p>
                 </div>
                 <button 
                  onClick={handleNext}
                  className="mt-8 px-10 py-3 bg-red-600 text-white font-black uppercase tracking-tighter hover:bg-white hover:text-red-600 transition-all flex items-center gap-2 skew-x-[-10deg]"
                 >
                   {currentIndex === questions.length - 1 || lives <= 0 ? 'Finish Mission' : 'Next Scenario'}
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </button>
              </div>
            )}
          </div>
        </div>

        {/* Options Area */}
        <div className="w-full">
           <h3 className="text-red-600 font-black tracking-[0.3em] text-[10px] uppercase mb-8 text-center">What's your instinct</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.options.map((opt, i) => {
              let btnClass = "p-8 text-left font-black transition-all border skew-x-[-5deg] relative overflow-hidden ";
              if (selectedOption === null) {
                btnClass += "bg-black/70 border-white/10 hover:border-red-600 hover:bg-red-900/10";
              } else if (i === current.correctIndex) {
                btnClass += "bg-green-600/20 border-green-500 text-green-400";
              } else if (i === selectedOption) {
                btnClass += "bg-red-600/20 border-red-500 text-red-400";
              } else {
                btnClass += "bg-black/90 border-white/5 opacity-30";
              }

              return (
                <button
                  key={i}
                  disabled={selectedOption !== null}
                  onClick={() => handleOptionClick(i)}
                  className={btnClass}
                >
                  <span className="text-[9px] text-red-600 mr-2 uppercase font-black tracking-widest">Option 0{i+1}</span>
                  <p className="mt-2 text-lg uppercase tracking-tight">{opt}</p>
                </button>
              );
            })}
          </div>
        </div>
      </motion.main>

      <div className="h-12" />

      <div className="fixed bottom-0 left-0 h-1 bg-red-900 w-full z-20">
        <div 
          className="h-full bg-red-600 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default QuizGame;
