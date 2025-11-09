import React from 'react';
import Spline from '@splinetool/react-spline';

const GradientOverlay = () => (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1100px] blur-3xl opacity-30 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-emerald-400" />
    <div className="absolute bottom-0 right-0 w-80 h-80 blur-2xl opacity-30 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <GradientOverlay />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 bg-white/10 backdrop-blur rounded-full px-3 py-1 border border-white/10">
            Gen-Z Studio • Model • Jewelry • Wedding • Product
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Capture the vibe.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">Create the moment.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We craft scroll-stopping visuals for brands and humans. From sleek product stories to cinematic wedding narratives, our lens turns ideas into culture.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Book a shoot</a>
            <a href="#services" className="px-5 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition">See services</a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
          {[
            'Models',
            'Jewelry',
            'Weddings',
            'Products',
          ].map((tag) => (
            <div key={tag} className="border border-white/10 rounded-xl px-3 py-2 bg-black/30 backdrop-blur">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
