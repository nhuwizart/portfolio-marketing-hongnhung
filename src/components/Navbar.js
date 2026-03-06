// 


"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  

  const getLinkClass = (path) => {
    if (pathname === path) {
      return "text-gr700 font-bold";
    }
    return "text-gr700 font-medium hover:text-gr700"; 
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1180px] m-auto w-full p-6 flex items-center justify-between">
        
        <div className="font-platypi text-xl font-bold flex flex-row items-center justify-center gap-x-[4px] text-gr700">
          <img src='/port-logo.png' alt="Logo" className="" />
          Hong Nhung
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex text-xl space-x-6">
          <Link href="/" className={`${getLinkClass('/')} font-mont transition-colors`}>
            Home
          </Link>
          <Link href="/about" className={`${getLinkClass('/about')} font-mont transition-colors`}>
            About Me
          </Link>
          <Link href="/work-1" className={`${getLinkClass('/work-1')} font-mont transition-colors`}>
            Work
          </Link>
          <Link href="#contact" className={`${getLinkClass('#contact')} font-mont transition-colors`}>
            Contact
          </Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILE*/}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0  w-full bg-white  shadow-lg flex flex-col items-center pb-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className={`${getLinkClass('/')} text-xl py-2`}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={`${getLinkClass('/about')} text-xl py-2`}>
            About Me
          </Link>
          <Link href="/work-1" onClick={() => setIsOpen(false)} className={`${getLinkClass('/work-1')} text-xl py-2`}>
            Work
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className={`${getLinkClass('#contact')} text-xl py-2`}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}