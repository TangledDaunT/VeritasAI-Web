import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  offscreen: { y: 36, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function FeatureCard({ title, desc, icon }) {
  // Respect user's reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <motion.div
      variants={cardVariant}
      initial={prefersReducedMotion ? false : "offscreen"}
      whileInView={prefersReducedMotion ? false : "onscreen"}
      viewport={{ once: true, amount: 0.18 }}
      className="group relative transform-gpu overflow-hidden rounded-2xl border border-slate-700 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0.01))] p-6 shadow"
      whileHover={prefersReducedMotion ? {} : { translateY: -8, scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#6AE3FF] to-[#70E1C5]">
          {icon || <div className="h-5 w-5 rounded bg-white/90" />}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{desc}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 rotate-[25deg] opacity-10 blur-sm">
        <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#6AE3FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#70E1C5" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path fill="url(#g)" d="M44.9,-40.8C56.3,-30.3,65.6,-16.6,65.9,-1.4C66.2,13.8,57.5,27.6,46.1,36.2C34.7,44.8,20.5,48.2,6.7,45.9C-7.1,43.6,-21.9,35.6,-31.6,25.3C-41.3,15,-46.1,2.3,-44.3,-9.1C-42.6,-20.5,-34.3,-30.5,-23.4,-41.3C-12.5,-52.1,0.6,-63.8,12.6,-62.9C24.6,-62,36.5,-48.5,44.9,-40.8Z" transform="translate(100 100)" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function FeaturesGrid({ features = [] }) {
  const showSkeletons = !features || features.length === 0;
  const skeletonCount = 6;
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showSkeletons
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <div key={i} className="rounded-2xl p-6 bg-card/30 border border-white/5">
                  <div className="mb-4 h-12 w-12 rounded-lg bg-white/6 skeleton" />
                  <div className="h-4 w-3/4 mb-3 skeleton" />
                  <div className="h-3 w-full skeleton" style={{ marginTop: 8 }} />
                </div>
              ))
            : features.map((f, idx) => <FeatureCard key={idx} {...f} />)}
        </div>
      </div>
    </section>
  );
}
