"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tight mb-2">Shauryaveer Narwal</h3>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shaurya10n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shauryaveer-narwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/shaurya.narwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:shauryan@umich.edu"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
