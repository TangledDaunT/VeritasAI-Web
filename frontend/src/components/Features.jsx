import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Shield, Cpu, MessageSquare, Globe, Lock, Activity } from 'lucide-react';

const features = [
  {
    title: "Proprietary Personality Engine™",
    description: "Decodes and replicates your unique linguistic DNA, ensuring every interaction feels authentically you.",
    icon: Fingerprint,
    cols: "md:col-span-2",
  },
  {
    title: "Multi-Channel Response",
    description: "Unified messaging across WhatsApp, Email, and Slack with context-aware continuity.",
    icon: MessageSquare,
    cols: "md:col-span-1",
  },
  {
    title: "DPDP Act Compliant",
    description: "Built for Indian Legal Standards. Bank-grade encryption with local-first data processing.",
    icon: Shield,
    cols: "md:col-span-1",
    highlight: true, // Special styling for legal trust
  },
  {
    title: "Smart Ignore Framework",
    description: "Intelligently filters noise and spam, prioritizing high-value legal inquiries.",
    icon: Activity,
    cols: "md:col-span-2",
  },
  {
    title: "Context-Aware Engine",
    description: "Remembers case history and client details for seamless, professional conversations.",
    icon: Cpu,
    cols: "md:col-span-3",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligence, <span className="text-gray-500">Codified.</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.cols} group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm p-8 hover:bg-white/5 transition-all duration-500 hover:border-primary/30`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity text-white">
                 <feature.icon className="w-24 h-24 rotate-12 translate-x-8 translate-y-[-8px]" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-300'}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                {feature.highlight && (
                   <div className="mt-6 flex items-center gap-2 text-xs font-mono text-primary/80 border border-primary/20 rounded px-3 py-1 w-fit">
                      <Lock className="w-3 h-3" /> INDIA LEGAL STACK VERIFIED
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
