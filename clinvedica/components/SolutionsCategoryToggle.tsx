'use client';

import { motion } from 'framer-motion';

export type SolutionsCategory = 'human' | 'animal';

interface SolutionsCategoryToggleProps {
  value: SolutionsCategory;
  onChange: (value: SolutionsCategory) => void;
}

export default function SolutionsCategoryToggle({
  value,
  onChange,
}: SolutionsCategoryToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center rounded-full bg-gray-100 p-1 border border-gray-200 shadow-sm"
      role="group"
      aria-label="Biospecimen category"
    >
      {(['human', 'animal'] as const).map((option) => {
        const isActive = value === option;
        return (
          <motion.button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            whileTap={{ scale: 0.96 }}
            className={`relative min-w-[6.5rem] px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId="solutions-category-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-teal-600 shadow-md"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">
              {option === 'human' ? 'Human' : 'Animal'}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
