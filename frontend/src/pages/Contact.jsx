import React from 'react';
import HeroPremium from '../components/HeroPremium';

export default function Contact() {
  return (
    <div>
      <HeroPremium headline={"Contact our team"} intro={"Request a demo, security brief, or legal assessment. We will respond within 1 business day."} ctaPrimary={"Request Demo"} ctaSecondary={"Learn about Security"} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-white mb-4">Get in touch</h2>
        <form className="grid gap-4 max-w-2xl">
          <input className="rounded-md p-3 bg-card/30 border border-white/5 text-white" placeholder="Your name" />
          <input className="rounded-md p-3 bg-card/30 border border-white/5 text-white" placeholder="Work email" />
          <textarea className="rounded-md p-3 bg-card/30 border border-white/5 text-white" rows="6" placeholder="Tell us about your use case" />
          <div>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#6AE3FF]/90 to-[#70E1C5]/85 px-5 py-3 text-sm font-semibold text-black">Send request</button>
          </div>
        </form>
      </section>
    </div>
  );
}
