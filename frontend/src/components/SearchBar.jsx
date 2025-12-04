import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-2xl mx-auto mt-10 relative z-20"
    >
      <div className={`
        relative flex items-center p-2 rounded-2xl border transition-all duration-500 group
        ${isFocused 
          ? 'bg-background/80 border-primary/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] backdrop-blur-xl' 
          : 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg'}
      `}>
        
        {/* Animated Glow Border */}
        {isFocused && (
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-xl transition-all duration-500"></div>
        )}

        <div className="pl-4 pr-3 text-gray-400 group-hover:text-primary transition-colors">
          <Search className={`w-6 h-6 ${isFocused ? 'text-primary' : ''}`} />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask Veritas anything about Indian Law..."
          className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-500 font-light h-12 min-w-0"
        />

        {/* Command Hint / Action Button */}
        <div className="flex items-center gap-2 pr-2">
          <AnimatePresence mode="wait">
            {query.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                 <Button size="sm" className="bg-primary hover:bg-cyan-600 text-black font-semibold rounded-xl h-10 px-4">
                   Ask AI <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-500 font-mono"
              >
                <Command className="w-3 h-3" />
                <span>K</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Suggested Prompts */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 10, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="absolute w-full bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl mt-2"
          >
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Suggested Queries</div>
              {['Draft a strict NDA for a SaaS vendor', 'Summarize DPDP Act compliance for startups', 'Analyze this contract for liability risks'].map((item, i) => (
                <button key={i} className="w-full text-left flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors group">
                  <Sparkles className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                  <span className="text-sm">{item}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBar;
