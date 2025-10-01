import React from 'react';
import { Heart } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sonia Ineza</h3>
            <p className="text-gray-400 mt-1">Software Developer</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex space-x-4">
              <a href="https://github.com/soniaineza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub profile">
                GitHub
              </a>
              <a href="https://linkedin.com/in/soniaineza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn profile">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sonia Ineza. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1" /> in
            Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>;
}