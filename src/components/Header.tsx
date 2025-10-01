import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const navLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-indigo-600">
          Sonia Ineza
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-indigo-600 transition-colors">
                {link.name}
              </a>)}
          </nav>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors" onClick={toggleMenu}>
                {link.name}
              </a>)}
          </nav>
        </div>}
    </header>;
}