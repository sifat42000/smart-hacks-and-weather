"use client";
import { motion } from 'framer-motion';

export default function AnimatedWeatherIcon({ type }: { type: string }) {
  // Placeholder: Add sun/cloud/rain animation based on type
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
      <span className="text-5xl">☀️</span>
    </motion.div>
  );
}
