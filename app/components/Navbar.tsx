"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="#home"
          className="text-white text-xl font-bold tracking-tighter"
        >
          SN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-bold tracking-tight hover:text-gray-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
