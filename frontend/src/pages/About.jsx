import React from 'react';
import HeroPremium from '../components/HeroPremium';

export default function About() {
  return (
    <div>
      <HeroPremium headline={"About VeritasAI — Built for legal certainty"} intro={"We build defensible AI products for legal teams, with traceability, verifiability, and enterprise integrations."} ctaPrimary={"Speak to Sales"} ctaSecondary={"Back to Home"} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-white mb-4">Our mission</h2>
        <p className="text-slate-300 max-w-3xl">VeritasAI is focused on building AI systems that respect legal process, preserve evidentiary integrity, and provide explicit, auditable reasoning. Our engineering and legal teams collaborate to ensure outputs are verifiable and legally defensible.</p>
      </section>
    </div>
  );
}
