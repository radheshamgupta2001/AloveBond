// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light-800 dark:bg-dark-700 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-light-400 dark:text-light-500">
          &copy; {new Date().getFullYear()} AloveBond. All rights reserved.
        </p>
        <div className="social-icons mt-4">
          <a href="#" className="text-light-400 dark:text-light-500 mx-4">Facebook</a>
          <a href="#" className="text-light-400 dark:text-light-500 mx-4">Twitter</a>
          <a href="#" className="text-light-400 dark:text-light-500 mx-4">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

