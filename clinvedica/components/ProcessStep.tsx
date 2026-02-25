'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({ number, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex items-start space-x-4"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>
        {number < 5 && (
          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-300 to-teal-300 hidden md:block" />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
