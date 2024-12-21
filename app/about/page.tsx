// app/about/page.tsx
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-800 text-dark-900 dark:text-light-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">About AloveBond</h1>
        <p className="text-center text-light-500 dark:text-light-300 mb-10 max-w-2xl mx-auto">
          AloveBond is your emotional well-being companion, providing tools like
          journaling, mood tracking, and expert guidance to support your
          personal growth and resilience. Our mission is to create a supportive
          platform where you can embrace your emotional journey and build a
          stronger connection with yourself and others.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="bg-white dark:bg-dark-700 shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p>
              To empower individuals to prioritize mental health and foster
              personal growth through accessible tools and community support.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-700 shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
            <h2 className="text-xl font-bold mb-4">Our Vision</h2>
            <p>
              To be the go-to platform for emotional well-being and mental health
              awareness worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
