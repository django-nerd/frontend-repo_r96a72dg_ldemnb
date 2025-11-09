import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative grid place-items-center w-9 h-9 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 animate-pulse"></span>
          <span className="font-semibold tracking-tight text-white text-lg">
            Neon Lens
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:opacity-90 transition-opacity">Book a Shoot</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white/90">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
