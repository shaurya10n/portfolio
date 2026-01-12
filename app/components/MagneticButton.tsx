"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      ref.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    x.set(distance.x * 0.35);
    y.set(distance.y * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseX, y: mouseY }}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}
