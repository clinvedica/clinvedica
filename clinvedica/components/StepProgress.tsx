'use client';

import { motion } from 'framer-motion';

interface StepProgressProps {
  steps: string[];
  currentStep: number;
}

export default function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={label} className="flex-1 flex items-center">
            <div className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive || isCompleted ? 'rgb(5 122 85)' : 'rgba(148, 163, 184, 1)',
                  borderColor: isActive ? 'rgb(5 122 85)' : 'rgba(148, 163, 184, 1)',
                  color: '#ffffff',
                }}
                className={`flex items-center justify-center w-9 h-9 rounded-full border text-sm font-semibold ${
                  isActive || isCompleted ? 'text-white' : 'text-slate-500 bg-white'
                }`}
              >
                {index + 1}
              </motion.div>
              <div className="ml-3">
                <p className={`text-xs font-medium uppercase tracking-wide ${isActive ? 'text-primary-600' : 'text-slate-500'}`}>
                  Step {index + 1}
                </p>
                <p className="text-sm font-semibold text-slate-900">{label}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-1 h-0.5 mx-4 bg-slate-200 relative">
                <motion.div
                  initial={false}
                  animate={{
                    width: isCompleted ? '100%' : isActive ? '50%' : '0%',
                  }}
                  className="h-0.5 bg-emerald-500 absolute left-0 top-0"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

