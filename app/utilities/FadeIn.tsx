"use client"
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0.5, className }: FadeInProps) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  };

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}