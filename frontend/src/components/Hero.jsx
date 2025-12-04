import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
// import Aurora from './Aurora';
import SearchBar from './SearchBar';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Fade out the Aurora as user scrolls down
  // Map scroll 0-500px to opacity 1-0
  const auroraOpacity = useTransform(scrollY, [0, 700], [1, 0]);
  
  // Parallax for content
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* Dynamic Aurora Background */}
      <motion.div 
        style={{ opacity: auroraOpacity }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        <Aurora
          colorStops={['#00d2ff', '#3a7bd5', '#0a0b10']} // Cyan to Blue to Deep Black
          speed={0.5}
          amplitude={1.2}
        />
        {/* Gradient Overlay to ensure text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 pointer-events-none"></div>
      </motion.div>
      
      {/* Central Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-medium tracking-widest uppercase text-gray-300">Global Tech. Desi Soul.</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
            Veritas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">AI™</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Redefining Human–AI Communication Orchestration. A next-generation conversational automation stack engineered to replicate your unique communication DNA.
          </p>

          {/* New Search Bar Component */}
          <SearchBar />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mt-12"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
              Launch Demo
            </Button>
            <Button size="lg" variant="outline" className="border-gray-400 text-gray-200 hover:text-white hover:border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm transition-all">
              Request Access <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Floating Abstract UI Element - Moved down and styled to sit nicely below */}
        <motion.div 
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="mt-24 relative w-full max-w-5xl aspect-[21/9] rounded-t-3xl border-x border-t border-white/15 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-primary/10 overflow-hidden group"
        >
            {/* Fake UI Internal */}
            <div className="absolute top-0 left-0 w-full h-12 border-b border-white/10 bg-white/5 flex items-center px-6 gap-2 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="h-6 w-64 bg-white/5 rounded-lg flex items-center px-3">
                    <div className="w-2 h-2 rounded-full bg-primary/50 mr-2"></div>
                    <div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
                </div>
            </div>
            
            <div className="p-8 pt-20 grid grid-cols-3 gap-8 h-full">
                <div className="col-span-2 space-y-6">
                    <div className="flex gap-4">
                         <div className="w-12 h-12 rounded-full bg-white/10"></div>
                         <div className="space-y-2 flex-1">
                             <div className="h-4 w-1/3 bg-white/10 rounded animate-pulse"></div>
                             <div className="h-3 w-1/4 bg-white/5 rounded"></div>
                         </div>
                    </div>
                    <div className="h-32 w-full bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5 p-4">
                        <div className="space-y-3">
                             <div className="h-2 w-full bg-white/5 rounded"></div>
                             <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                             <div className="h-2 w-4/6 bg-white/5 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border-l border-white/5 pl-8 flex flex-col justify-center gap-4">
                     <div className="w-full aspect-square rounded-full border-4 border-primary/20 relative flex items-center justify-center">
                        <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin duration-[3000ms]"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
                        </div>
                     </div>
                </div>
            </div>
            
            {/* Overlay Gradient at bottom to fade into page content */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
