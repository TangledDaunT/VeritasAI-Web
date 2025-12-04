import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary/20 top-[-100px] left-[-100px] rounded-full blur-3xl"></div>
      <div className="orb w-[600px] h-[600px] bg-purple-900/20 bottom-[-100px] right-[-100px] rounded-full blur-3xl"></div>
      
      {/* Central Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Global Tech. Desi Soul.</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white">
            Veritas <span className="text-gradient">AI™</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Redefining Human–AI Communication Orchestration. A next-generation conversational automation stack engineered to replicate your unique communication DNA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mt-8"
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-semibold shadow-lg shadow-white/10 transition-all hover:scale-105">
            Launch Demo
          </Button>
          <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm transition-all hover:bg-white/5">
            Request Access <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
        
        {/* Floating Abstract UI Element */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="mt-20 relative w-full max-w-4xl aspect-video rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-primary/20 overflow-hidden group"
        >
            {/* Fake UI Internal */}
            <div className="absolute top-0 left-0 w-full h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
            </div>
            <div className="p-10 pt-20 grid grid-cols-2 gap-8 h-full">
                <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-4 w-full bg-white/5 rounded"></div>
                    <div className="h-4 w-5/6 bg-white/5 rounded"></div>
                    <div className="h-32 w-full bg-primary/5 border border-primary/20 rounded-lg mt-4 p-4 relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                     <div className="w-40 h-40 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
                        <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
                        <span className="text-2xl font-bold text-white">98.4%</span>
                     </div>
                </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
