import React, { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { NAV_ITEMS } from '../utils/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <Film size={32} className="text-primary-600" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary-600">Genre</span>
            <span className="text-neutral-800">Predict</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                scrolled ? 'text-neutral-800' : 'text-neutral-700'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#demo" className="btn-primary">
            Try it now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-neutral-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-800 font-medium py-2 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#demo" className="btn-primary text-center mt-4" onClick={() => setIsOpen(false)}>
              Try it now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;