import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from 'react-router-dom';

function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ scale: 1.04 }}
        animate={{ rotate: 2, scale: 1.02 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 60, ease: "linear" }}
        className="absolute left-[-10%] top-[-20%] w-[90vw] h-[90vh] rounded-[40%] blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(122,216,255,0.12) 0%, rgba(112,225,197,0.10) 40%, rgba(106,227,255,0.08) 100%)",
          filter: "saturate(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(6,10,18,0.65)] backdrop-blur-sm" />
    </div>
  );
}

const container = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const word = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroPremium({ headline = "Trustworthy AI for complex legal decisions", intro, ctaPrimary = "Get a demo", ctaSecondary = "About VeritasAI" }) {
  const prefersReducedMotion = useReducedMotion();
  const text = headline;
  return (
    <section className="relative overflow-hidden pb-20 pt-24 lg:pt-36">
      <GradientBackground />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
              <motion.h1 aria-label="Hero" className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {prefersReducedMotion ? (
                  <span>{text}</span>
                ) : (
                  text.split(" ").map((w, i) => (
                    <motion.span key={i} variants={word} className="inline-block" style={{ display: "inline-block", willChange: "transform, opacity" }}>
                      {w}&nbsp;
                    </motion.span>
                  ))
                )}
              </motion.h1>

              <motion.p variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.44 } } }} className="max-w-2xl text-lg text-slate-300">
                {intro || "Enterprise-grade legal AI that augments counsel workflows, rides safely inside your compliance controls, and surfaces decisive context—not guesswork."}
              </motion.p>

              <motion.div className="flex gap-4" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { delayChildren: 0.4, staggerChildren: 0.06 } } }}>
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex rounded-md" style={{ boxShadow: "0 10px 30px rgba(46,196,182,0.12)" }}>
                  <Link to="/contact" className="inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#6AE3FF]/90 to-[#70E1C5]/85 px-5 py-3 text-sm font-semibold text-black">
                    {ctaPrimary}
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex rounded-md">
                  <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200">
                    {ctaSecondary}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div className="relative -mx-4 rounded-2xl p-6 shadow-2xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", backdropFilter: "blur(8px)" }}>
              <div className="rounded-xl bg-[rgba(255,255,255,0.02)] p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#6AE3FF] to-[#70E1C5] p-2" />
                      <div>
                        <div className="text-sm font-semibold text-white">Legal Evidence Summaries</div>
                        <div className="text-xs text-slate-400">Trusted sources, prioritized and cited</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">Trusted • Accurate</div>
                </div>

                <div className="mt-4 text-sm text-slate-300">Example card showing the visual voice—replace with product screenshots or Lottie loops.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
