"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function MotionSection({ children, className = '', ...props }: { children: ReactNode; className?: string; [key: string]: any }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
