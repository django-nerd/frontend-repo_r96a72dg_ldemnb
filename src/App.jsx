import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import ContactCTA from './components/ContactCTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;
