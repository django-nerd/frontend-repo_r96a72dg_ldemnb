import React from 'react';
import { Sparkles, Diamond, Users, ShoppingBag } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, highlights }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
      <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
    </div>
    <div className="flex items-center gap-3">
      <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-white/75 text-sm">{desc}</p>
    <ul className="mt-4 flex flex-wrap gap-2">
      {highlights.map((h) => (
        <li key={h} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">{h}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const data = [
    {
      icon: Users,
      title: 'Model & Editorial',
      desc: 'High-fashion editorials, portfolios and agency-ready digitals with bold, youthful energy.',
      highlights: ['Lookbooks', 'Digitals', 'Creative Direction'],
    },
    {
      icon: Diamond,
      title: 'Jewelry & Luxury',
      desc: 'Macro perfection with sparkling light control for premium, high-contrast luxury pieces.',
      highlights: ['Macro', 'Specular Control', 'Retouching'],
    },
    {
      icon: Sparkles,
      title: 'Weddings',
      desc: 'Cinematic storytelling, candid emotions, and editorial frames that keep the vibe forever.',
      highlights: ['Pre-wed', 'Candid', 'Films'],
    },
    {
      icon: ShoppingBag,
      title: 'Product & E‑Com',
      desc: 'Clean, conversion-first imagery for DTC and marketplaces that makes carts click.',
      highlights: ['Ghost Mannequin', 'Lifestyle', 'Stop-motion'],
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-white/60">What we do</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Services designed for the feed</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex h-10 items-center px-4 rounded-full bg-white text-black text-sm font-medium">Get a quote</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
