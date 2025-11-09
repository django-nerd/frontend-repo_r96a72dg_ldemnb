import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10">
          <div className="absolute pointer-events-none -inset-1 rounded-3xl [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.15),transparent_40%)] animate-spin-slow" />
          </div>
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold">Let’s build your next iconic visual</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Tell us the vibe, the moodboard, the deadline — we’ll craft a shoot proposal within 24 hours.</p>

            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <input type="email" placeholder="Email or Instagram" className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <button className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-white text-black font-medium px-5">
                <Mail size={18} /> Get in touch <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-3 text-xs text-white/60">Prefer talking? DM @neonlens.studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
