import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Github, Linkedin, Mail, User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  id: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "001",
    name: "Jade Hendrix M. Badon",
    role: "Project Leader",
    image: "https://lh3.googleusercontent.com/d/1KUPvmVx1BBhMTjxnbdhXjuzhfcY6_ELj"
  },
  {
    id: "002",
    name: "Carls Joseph A. Demain",
    role: "Asst. Project Leader / Web Developer & Designer",
    image: "https://lh3.googleusercontent.com/d/15V1jo31AeQnrDTZHVZPHpNbB1cS4YhCW"
  },
  {
    id: "003",
    name: "Angelyn D. Acorda",
    role: "Web Developer & Designer",
    image: "https://lh3.googleusercontent.com/d/1p97qpHrq8naqQoFUrjc0ROU7HmcqraRU"
  },
  {
    id: "004",
    name: "Sophia Bianca A. Angeles",
    role: "Content Writer",
    image: "https://lh3.googleusercontent.com/d/1Rgaqr0Mg9WLjwXwqV0ITJacUtneF2m4d"
  },
  {
    id: "005",
    name: "Dylan Hailey E. Dela Peña",
    role: "Content Writer",
    image: "https://lh3.googleusercontent.com/d/1-yolb72YDjHNlHw3xlCi6aDzttYglIWn"
  },
  {
    id: "006",
    name: "Charles Bernard G. Fabia",
    role: "Web Developer & Designer",
    image: "" // Link pending
  },
  {
    id: "007",
    name: "Noella Mae M. Pernia",
    role: "Content Writer",
    image: "https://lh3.googleusercontent.com/d/1YqQ8Supv5jXBnD7p7WXgY9nedN1XCozW"
  },
  {
    id: "008",
    name: "Kheira Chloe S. Tamundong",
    role: "Content Writer",
    image: "https://lh3.googleusercontent.com/d/1yFRM5LoVRdLI35xHtusLtiepGfnG6O8p"
  }
];

interface TeamPageProps {
  onBack: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background HUD Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-12">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={onBack}
            className="group flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors mb-6 uppercase text-[9px] font-black tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Return to Hub
          </motion.button>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-red-600" />
            <span className="text-red-500 font-black tracking-[0.3em] uppercase text-[10px]">Personnel Directory</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
            THE<br />
            <span className="text-red-600 drop-shadow-lg">COMPASS TEAM</span>
          </h1>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="group relative bg-[#0a0a0a] border border-white/10 hover:border-red-600/50 transition-all duration-500"
            >
              {/* Top Status Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest">Active_Personnel</span>
                </div>
                <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">
                  REF_{member.id}
                </div>
              </div>

              <div className="aspect-[4/5] relative overflow-hidden bg-white/5">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                    <User className="w-12 h-12 text-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Image_Pending</span>
                    </div>
                  </div>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Technical Overlay */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                   <div className="w-4 h-0.5 bg-red-600/50" />
                   <div className="w-2 h-0.5 bg-red-600/50 ml-auto" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-black uppercase italic tracking-tighter leading-tight mb-1 group-hover:text-red-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                
                <div className="flex gap-2 pt-3 border-t border-white/5">
                   <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer">
                      <Github className="w-2.5 h-2.5" />
                   </div>
                   <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer">
                      <Linkedin className="w-2.5 h-2.5" />
                   </div>
                   <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer">
                      <Mail className="w-2.5 h-2.5" />
                   </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-red-600/50 transition-colors" />
            </motion.div>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/5 pt-10 text-center">
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[1em]">
            CREDITS // KALAMIDAD_COMPASS_INITIATIVE
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TeamPage;
