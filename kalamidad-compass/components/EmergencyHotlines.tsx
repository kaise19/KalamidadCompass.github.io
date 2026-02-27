import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowLeft, ShieldAlert, LifeBuoy, Flame, Siren, CloudRain, HeartHandshake, Activity } from 'lucide-react';

export interface Hotline {
  name: string;
  numbers: string[];
  logo?: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const HOTLINES: Hotline[] = [
  {
    name: "National Emergency",
    numbers: ["911"],
    icon: <Siren className="w-6 h-6" />,
    color: "bg-red-600",
    description: "All-purpose emergency response for immediate assistance."
  },
  {
    name: "NDRRMC",
    numbers: ["(02) 8911-5061 to 65", "(02) 8911-1406", "(02) 8912-2665"],
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/NDRRMC_logo.svg/1280px-NDRRMC_logo.svg.png",
    icon: <ShieldAlert className="w-6 h-6" />,
    color: "bg-blue-700",
    description: "National Disaster Risk Reduction and Management Council."
  },
  {
    name: "Philippine Red Cross",
    numbers: ["143", "(02) 8527-8385 to 95", "0915-583-9829"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Philippine_Red_Cross_Emblem.svg/1280px-Philippine_Red_Cross_Emblem.svg.png",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-red-500",
    description: "Emergency blood, disaster relief, and health services."
  },
  {
    name: "Philippine Coast Guard",
    numbers: ["(02) 8527-3877", "(02) 527-8481 to 89", "0917-724-3682"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Philippine_Coast_Guard_%28PCG%29.svg/250px-Philippine_Coast_Guard_%28PCG%29.svg.png",
    icon: <LifeBuoy className="w-6 h-6" />,
    color: "bg-blue-900",
    description: "Maritime search and rescue and safety operations."
  },
  {
    name: "Bureau of Fire Protection",
    numbers: ["(02) 8426-0219", "(02) 8426-0246"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Bureau_of_Fire_Protection.png",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-orange-600",
    description: "Fire prevention and suppression services."
  },
  {
    name: "Philippine National Police",
    numbers: ["117", "0917-847-5757"],
    logo: "https://logos-world.net/wp-content/uploads/2022/11/PNP-Symbol.png",
    icon: <Siren className="w-6 h-6" />,
    color: "bg-blue-600",
    description: "Law enforcement and public safety."
  },
  {
    name: "MMDA",
    numbers: ["136", "(02) 882-0925 (Flood Control)", "(02) 882-4151 to 77"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Metro_Manila_Development_Authority_%28MMDA%29.svg/1280px-Metro_Manila_Development_Authority_%28MMDA%29.svg.png",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-yellow-600",
    description: "Metro Manila traffic and flood management."
  },
  {
    name: "PAGASA",
    numbers: ["(02) 8284-0800", "(02) 824-0800"],
    logo: "https://pubfiles.pagasa.dost.gov.ph/pagasaweb/images/pagasa-logo.png",
    icon: <CloudRain className="w-6 h-6" />,
    color: "bg-sky-600",
    description: "Weather updates and flood warnings."
  },
  {
    name: "DSWD",
    numbers: ["(02) 8931-8101 to 07", "0918-912-2813"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Seal_of_the_Department_of_Social_Welfare_and_Development.svg",
    icon: <HeartHandshake className="w-6 h-6" />,
    color: "bg-blue-500",
    description: "Relief assistance and social welfare services."
  },
  {
    name: "PHIVOLCS",
    numbers: ["(02) 8426-1468 to 79", "0905-313-4077"],
    logo: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/PHIVOLCS_logo.png?itok=kKidsdim",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-emerald-700",
    description: "Earthquake and volcanic activity monitoring."
  }
];

interface EmergencyHotlinesProps {
  onBack: () => void;
}

const EmergencyHotlines: React.FC<EmergencyHotlinesProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={onBack}
              className="group flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors mb-8 uppercase text-[10px] font-black tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Hub
            </motion.button>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-0.5 bg-red-600" />
              <span className="text-red-500 font-black tracking-[0.3em] uppercase text-sm">Emergency Protocols</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]"
            >
              HOTLINES<br />
              <span className="text-red-600 drop-shadow-lg">& CONTACTS</span>
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-right hidden md:block"
          >
            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-2">System Priority</div>
            <div className="text-2xl font-black text-red-600 italic">CRITICAL_COMMS_ACTIVE</div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTLINES.map((hotline, idx) => (
            <motion.div
              key={hotline.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="group relative bg-[#050505] border border-white/10 flex flex-col hover:border-red-600/40 transition-all duration-500"
            >
              {/* Top Status Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                  <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest">Channel_Active</span>
                </div>
                <div className="text-[7px] font-mono text-white/20 uppercase tracking-widest">
                  ID: {idx.toString().padStart(3, '0')}
                </div>
              </div>

              <div className="p-6 flex-grow">
                {/* Logo & Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 ${hotline.color} blur-2xl opacity-10 group-hover:opacity-30 transition-opacity`} />
                    <div className={`relative w-12 h-12 ${hotline.color} flex items-center justify-center border border-white/10 shadow-2xl skew-x-[-6deg]`}>
                      {React.cloneElement(hotline.icon as React.ReactElement, { className: "w-6 h-6 text-white skew-x-[6deg]" })}
                    </div>
                  </div>

                  {hotline.logo && (
                    <div className="h-12 flex items-center">
                      <img 
                        src={hotline.logo} 
                        alt={`${hotline.name} logo`} 
                        className="h-10 w-auto object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter leading-[0.85] group-hover:text-red-500 transition-colors">
                    {hotline.name}
                  </h3>
                  
                  <div className="h-px w-8 bg-red-600/50 group-hover:w-full transition-all duration-700" />
                  
                  <p className="text-[10px] text-white/50 font-medium leading-relaxed">
                    {hotline.description}
                  </p>
                </div>

                {/* Numbers Section */}
                <div className="mt-6 space-y-2">
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Direct Access</div>
                  {hotline.numbers.map((num, nIdx) => (
                    <a
                      key={nIdx}
                      href={`tel:${num.replace(/[^\d+]/g, '')}`}
                      className="group/link flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 hover:border-red-600/40 hover:bg-red-600/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-black border border-white/10 group-hover/link:border-red-600/40 transition-colors">
                          <Phone className="w-3 h-3 text-red-600" />
                        </div>
                        <span className="text-xs font-black tracking-wider text-white/80 group-hover/link:text-white">
                          {num}
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 border-r border-t border-white/20 group-hover/link:border-red-600 group-hover/link:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Technical Footer */}
              <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-1 h-2 ${i < 2 ? 'bg-red-600/40' : 'bg-white/5'}`} />
                  ))}
                </div>
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                  Secure_Link
                </div>
              </div>

              {/* Hover Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent h-20 -translate-y-full animate-[scanline_3s_linear_infinite]" />
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/5 pt-10 text-center">
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[1em]">
            END_OF_TRANSMISSION // STAY_SAFE
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EmergencyHotlines;
