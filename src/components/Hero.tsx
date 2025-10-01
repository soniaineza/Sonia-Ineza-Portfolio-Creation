import React from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
export function Hero() {
  return <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Sonia Ineza</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Software Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            A passionate developer specializing in web and mobile development
            with strong skills in JavaScript, Flutter, and smart city solutions.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/soniaineza" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="GitHub profile">
              <div size={20} />
            </a>
            <a href="https://linkedin.com/in/soniaineza" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <a href="mailto:inezasonia124@gmail.com" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Email me">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 flex items-center justify-center text-white text-6xl font-bold">
            SI
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="#about" className="animate-bounce p-2 bg-white rounded-full shadow-md" aria-label="Scroll down">
          <ArrowDown size={24} className="text-indigo-600" />
        </a>
      </div>
    </section>;
}