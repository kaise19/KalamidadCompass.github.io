import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES, DISASTER_FACTS } from '../constants';
import { HOTLINES } from './EmergencyHotlines';
import { DisasterType } from '../types';

interface Props {
  onBack: () => void;
}

const ReferencesPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center grayscale pointer-events-none"
        style={{ backgroundImage: "url('https://cdn.britannica.com/29/93629-050-BE1D6ED7/landslide-part-town-earthquake-San-Salvador-El-2001.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />
      
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
            <span className="text-red-500 font-black tracking-[0.3em] uppercase text-[10px]">Documentation & Sources</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
            SYSTEM<br />
            <span className="text-red-600 drop-shadow-lg">REFERENCES</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visual Assets Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
              <h2 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Visual_Assets_Manifest</h2>
            </div>
            
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="group p-3 bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all">
                  <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Asset_ID: {cat.id.toUpperCase()}</div>
                  <div className="text-[10px] font-black uppercase text-white/60 mb-2">{cat.title} Background</div>
                  <a 
                    href={cat.bgImage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] font-mono text-red-600/60 hover:text-red-500 break-all transition-colors block truncate"
                  >
                    {cat.bgImage}
                  </a>
                </div>
              ))}
              
              <div className="group p-3 bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all">
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Asset_ID: HUB_MAIN</div>
                <div className="text-[10px] font-black uppercase text-white/60 mb-2">Primary Hub Background</div>
                <a 
                  href="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25332741/GettyImages_2031349416.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] font-mono text-red-600/60 hover:text-red-500 break-all transition-colors block truncate"
                >
                  https://platform.vox.com/.../GettyImages_2031349416.jpg
                </a>
              </div>

              <div className="group p-3 bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all">
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Asset_ID: REF_BG</div>
                <div className="text-[10px] font-black uppercase text-white/60 mb-2">Reference Page Background</div>
                <a 
                  href="https://cdn.britannica.com/29/93629-050-BE1D6ED7/landslide-part-town-earthquake-San-Salvador-El-2001.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[9px] font-mono text-red-600/60 hover:text-red-500 break-all transition-colors block truncate"
                >
                  https://cdn.britannica.com/.../landslide-part-town-earthquake-San-Salvador-El-2001.jpg
                </a>
              </div>
            </div>
          </div>

          {/* Educational Data Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
              <h2 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Intelligence_Data_Sources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(DISASTER_FACTS) as DisasterType[]).map((disaster) => {
                const data = DISASTER_FACTS[disaster];
                return (
                  <div key={disaster} className="p-4 bg-white/[0.01] border border-white/5 border-l-2 border-l-red-600/40">
                    <h3 className="text-xs font-black uppercase italic text-white/80 mb-4 tracking-wider">{disaster} Intelligence</h3>
                    <div className="space-y-3">
                      {data.references.map((ref, idx) => (
                        <div key={idx} className="group">
                          <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">{ref.title}</div>
                          <a 
                            href={ref.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] text-white/40 hover:text-red-500 transition-colors block truncate font-mono"
                          >
                            {ref.url}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency Hotlines Section */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse" />
            <h2 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Emergency_Response_Hotlines</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HOTLINES.map((hotline, idx) => (
              <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 hover:border-red-600/30 transition-all">
                <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Agency_ID: {hotline.name.toUpperCase().replace(/\s+/g, '_')}</div>
                <div className="text-[10px] font-black uppercase text-white/60 mb-1">{hotline.name}</div>
                <div className="text-[9px] font-mono text-red-600/80">{hotline.numbers.join(' // ')}</div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-20 border-t border-white/5 pt-10 text-center">
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[1em]">
            END_OF_DOCUMENTATION // EDUCATIONAL_USE_ONLY
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ReferencesPage;
