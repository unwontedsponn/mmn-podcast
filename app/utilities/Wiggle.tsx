"use client"
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WiggleProps {
  children: ReactNode;
  className?: string;
}

export default function Wiggle({ children, className }: WiggleProps) {
  // Define the wiggle animation as a variant
  const wiggleAnimation = {
    wiggle: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 2 },
    },
    initial: {
      rotate: 0,
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${className}`}
      variants={wiggleAnimation}
      initial="initial"
      whileHover="wiggle"
    >
      {children}
    </motion.div>
  );
}; 