'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <section className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Embrace Your Emotional Journey with AloveBond
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          A supportive space for emotional well-being, self-expression, and growth. Join a vibrant community dedicated to helping you thrive.
        </p>
        <div className="cta-buttons flex flex-wrap justify-center space-x-6">
          <button
            className="btn bg-white text-indigo-700 font-semibold hover:bg-gray-200 px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => router.push('/signup')}
          >
            Start Your Journey
          </button>
          <button
            className="btn-secondary bg-indigo-700 text-white font-semibold hover:bg-indigo-600 px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => router.push('/about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
