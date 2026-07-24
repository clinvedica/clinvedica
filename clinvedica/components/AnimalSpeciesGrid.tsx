'use client';

import { motion } from 'framer-motion';
import { animalSpeciesGroups } from '@/lib/animal-species';

interface AnimalSpeciesGridProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function AnimalSpeciesGrid({
  title = 'Species Available',
  subtitle = 'All animal biospecimens are sourced in accordance with ethical guidelines and applicable institutional and regulatory standards.',
  compact = false,
}: AnimalSpeciesGridProps) {
  return (
    <div className={compact ? '' : 'mb-12'}>
      <div className="text-center mb-8">
        <h2
          className={`font-bold text-gray-900 mb-3 ${
            compact ? 'text-2xl' : 'text-3xl'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {animalSpeciesGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{group.name}</h3>
            <ul className="space-y-1.5">
              {group.strains.map((strain) => (
                <li key={strain} className="text-sm text-gray-600 flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  {strain}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
