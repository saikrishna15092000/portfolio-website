"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div 
        className={`w-full bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
          isOpen ? "h-[100dvh] md:h-20" : "h-20"
        }`}
        onMouseEnter={() => {
          if (typeof window !== "undefined" && window.innerWidth >= 768) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (typeof window !== "undefined" && window.innerWidth >= 768) setIsOpen(false);
        }}
      >
        {/* Top Bar - explicitly stretches to edges */}
        <div className="flex shrink-0 h-20 items-center justify-between px-6 md:px-12 w-full">
          {/* Logo aligned to absolute left */}
          <Link href="/" className="text-3xl font-black tracking-tight text-black z-10" onClick={() => setIsOpen(false)}>
            KRISHNA
          </Link>

          {/* Desktop Links + Menu Icon aligned to absolute right */}
          <div className="flex items-center gap-8 z-10">
            {/* Desktop Navigation (Slides in from right) */}
            <nav 
              className={`hidden md:flex items-center gap-8 overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] pr-2 ${
                isOpen ? "max-w-[500px] opacity-100 translate-x-0" : "max-w-0 opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <Link href="#work" className="text-lg font-semibold text-black hover:opacity-50 whitespace-nowrap transition-opacity">Work</Link>
              <Link href="#about" className="text-lg font-semibold text-black hover:opacity-50 whitespace-nowrap transition-opacity">About</Link>
              <Link href="/resume.pdf" target="_blank" className="text-lg font-semibold text-black hover:opacity-50 whitespace-nowrap transition-opacity">Resume</Link>
            </nav>
            
            {/* Toggle Button */}
            <button 
              className="text-black outline-none focus:outline-none flex-shrink-0 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <LayoutGrid className={`h-8 w-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'rotate-90 scale-90 opacity-70' : 'rotate-0 scale-100 opacity-100'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown (Centered & Stacked like reference image) */}
        <div className={`md:hidden flex-1 flex flex-col items-center justify-center gap-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pb-20 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}>
          <Link href="#work" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black hover:opacity-50 transition-opacity">Work</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black hover:opacity-50 transition-opacity">About</Link>
          <Link href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black hover:opacity-50 transition-opacity">Resume</Link>
        </div>
      </div>
    </header>
  );
}
