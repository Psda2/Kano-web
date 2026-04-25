"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Popular Destinations', 'About', 'Contact Us'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-black/10 backdrop-blur-[2px] py-6'}`}>
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative w-32 h-16">
              <Image
                src="/logo.jpg"
                alt="Kano travel & Tours"
                fill
                sizes="(max-width: 768px) 100px, 128px"
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                className={`group relative font-medium transition-colors duration-300 ease-in-out ${isScrolled ? 'text-gray-700 hover:text-[#00838f]' : 'text-white hover:text-[#e0f7fa]'}`}
              >
                {item}
                <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full ${isScrolled ? 'bg-[#00838f]' : 'bg-white'}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00838f] hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
