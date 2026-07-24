'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import AnimalSpeciesGrid from '@/components/AnimalSpeciesGrid';

export default function AnimalBloodBiofluids() {
  const sampleTypes = [
    {
      title: 'Plasma',
      description:
        'Processed animal plasma for biomarker, PK/PD, and immunoassay development.',
      features: ['Controlled processing', 'Aliquoted samples', 'Quality verified', 'Assay-ready formats'],
    },
    {
      title: 'Serum',
      description:
        'Processed animal serum panels supporting preclinical and veterinary research workflows.',
      features: ['Controlled processing', 'Aliquoted samples', 'Quality verified', 'Assay-ready formats'],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/solutions?category=animal"
            className="inline-flex items-center text-primary-600 hover:text-teal-600 mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Solutions
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">
              Animal Biospecimens
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Animal Blood
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Plasma and serum across a wide range of research species and strains
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <AnimalSpeciesGrid
              subtitle="Plasma and serum collections available across these species and strains. All collections follow ethical guidelines."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {sampleTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <FiCheckCircle className="text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Collection</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Share species or strain, matrix (plasma or serum), volume, and processing requirements —
              we will confirm feasibility and support animal blood collections sourced in accordance
              with ethical guidelines.
            </p>
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a Feasibility Request
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
