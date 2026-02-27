
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CategoryInfo } from '../types';

interface Props {
  category: CategoryInfo;
  onClick: (cat: CategoryInfo) => void;
  isTransitioning?: boolean;
  isActive?: boolean;
  isAnyActive?: boolean;
}

const CategoryCard: React.FC<Props> = ({ category, onClick, isTransitioning, isActive, isAnyActive }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isTransitioning) return;
    setIsClicked(true);
    onClick(category);
  };

  return (
    <motion.button
      layout
      onClick={handleClick}
      whileHover={!isActive && !isAnyActive ? { scale: 1.02 } : {}}
      animate={isActive ? { 
        scale: 2, 
        zIndex: 50,
        opacity: 0,
        transition: { duration: 0.8, ease: "circIn" }
      } : isAnyActive ? {
        scale: 0.8,
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.4 }
      } : {}}
      className={`group relative h-64 overflow-hidden rounded-sm border border-white/10 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 bg-black ${isClicked ? 'pointer-events-none' : ''}`}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-700"
        style={{ backgroundImage: `url(${category.bgImage})` }}
        animate={isActive ? { scale: 1.5, opacity: 1 } : { scale: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      
      {/* Simulate Label */}
      <div className="absolute top-4 right-4 overflow-hidden">
        <motion.div
          initial={{ x: 100 }}
          whileHover={{ x: 0 }}
          className="bg-red-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 flex items-center gap-1"
        >
          Simulate <span className="text-[8px]">▶</span>
        </motion.div>
      </div>

      <motion.div 
        className="relative h-full flex flex-col items-center justify-center p-6"
        animate={isClicked ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      >
        <div className="mb-4 text-white group-hover:text-red-500 transition-colors duration-300 transform group-hover:scale-110">
          {category.icon}
        </div>
        <h3 className="text-xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors duration-300">
          {category.title}
        </h3>
        <div className="mt-4 w-12 h-1 bg-white/20 group-hover:bg-red-600 group-hover:w-24 transition-all duration-500" />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </motion.button>
  );
};

export default CategoryCard;
