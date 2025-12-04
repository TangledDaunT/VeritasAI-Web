import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Network, MessageCircle } from 'lucide-react';

const Architecture = () => {
  const layers = [
    { name: "Message Orchestrator", icon: MessageCircle, color: "border-blue-500" },
    { name: "Selective Engagement Engine", icon: Network, color: "border-purple-500" },
    { name: "Contextual Memory Module", icon: Database, color: "border-cyan-500" },
    { name: "LLM Core Engine (Veritas v2)", icon: Cpu, color: "border-primary" },
  ];

  return (
    <section id="architecture" className="py-32 bg-black/40 border-y border-white/5 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-20">
            
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Robust Legal-Grade <br/> <span className="text-gradient-silver">Architecture</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Our stack is designed for high-stakes environments. Unlike generic chatbots, Veritas AI operates on a structured decision tree that prioritizes data sovereignty and logical consistency.
                </p>
                
                <ul className="space-y-4">
                    {['Zero-Retention Mode', 'On-Premise Deployment Option', '256-bit AES Encryption'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:w-1/2 w-full">
                <div className="relative flex flex-col gap-4">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative group bg-gray-900/80 backdrop-blur-xl border-l-4 ${layer.color} border-y border-r border-white/10 p-6 rounded-r-xl transform hover:-translate-x-2 transition-transform duration-300`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/5 rounded-lg text-gray-300 group-hover:text-white transition-colors">
                                        <layer.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-lg text-gray-200">{layer.name}</span>
                                </div>
                                <div className="h-1 w-12 bg-white/10 rounded-full group-hover:bg-primary/50 transition-colors"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
};

export default Architecture;
