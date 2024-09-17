// components/MovingText.js
import React from 'react';

const MovingText = () => {
  return (
    <div className="bg-gradient-to-r from-black to-black text-white py-2 overflow-hidden shadow-md">
      <div className="relative">
        <div className="whitespace-nowrap animate-marquee text-lg font-semibold tracking-wide">
          <span className="mx-16">✨ Registrations are open! ✨</span>
          <span className="mx-16">🎉 Events are going to start soon! 🎉</span>
          <span className="mx-16">🚀 Don't miss the latest updates! 🚀</span>
        </div>
      </div>
    </div>
  );
};

export default MovingText;
