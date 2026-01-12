"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              Shauryaveer <br />
              <span className="text-gray-500">Narwal</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-4 text-xl md:text-2xl text-gray-400 font-light"
          >
            <p>Senior CS Student @ UofM</p>
            <div className="relative w-8 h-8">
              <Image
                src="/assets/images/umich.png"
                alt="University of Michigan"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-lg text-gray-400 leading-relaxed"
          >
            I spend hours building automation tools just to save a few minutes of manual work. 
            Big fan of building cool things, AI (where it actually makes sense), and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <MagneticButton className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 text-lg">
              <a href="#projects">View My Work</a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Visual Content - Subtle / Abstract or Image */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Background blob/gradient for atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-64 h-64 md:w-96 md:h-96"
            >
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-4 rounded-full border border-white/5" />
                <div className="relative w-full h-full rounded-full overflow-hidden">
                     <Image
                        src="/assets/images/Headshot.png"
                        alt="Shauryaveer Narwal"
                        fill
                        className="object-cover"
                        priority
                     />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
