'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

export default function MatchedSets() {
  const benefits = [
    {
      title: 'Enhanced Statistical Power',
      description: 'Samples from the same donor eliminate inter-individual variability, increasing the statistical power of your research.',
    },
    {
      title: 'Consistency Across Studies',
      description: 'Matched sets ensure consistency across different sample types, enabling more reliable comparative analyses.',
    },
    {
      title: 'Comprehensive Data',
      description: 'Access to complete clinical, pathological, and demographic data for all samples from the same donor.',
    },
    {
      title: 'Research Efficiency',
      description: 'Streamlined procurement process for multiple sample types from a single source, saving time and resources.',
    },
  ];

  const sampleCombinations = [
    {
      title: 'Tissue + Blood',
      description: 'Matched tissue and blood samples from the same donor for comprehensive biomarker studies.',
    },
    {
      title: 'Tissue + Biofluids',
      description: 'Tissue samples paired with relevant biofluids for multi-analyte research applications.',
    },
    {
      title: 'Blood + Biofluids',
      description: 'Blood derivatives matched with biofluid samples for systemic biomarker discovery.',
    },
    {
      title: 'Multi-Tissue Sets',
      description: 'Multiple tissue types from the same donor for comprehensive tissue-specific studies.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/solutions"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Matched Set Biospecimens
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Obtain tissue, blood, and other biospecimens from the same donor — boosting statistical power and consistency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Matched Sets?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Matched set biospecimens provide researchers with multiple sample types from the same donor, 
              enabling more powerful and consistent research outcomes. This approach eliminates inter-individual 
              variability and allows for comprehensive multi-analyte studies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Combinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sampleCombinations.map((combo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{combo.title}</h3>
                  <p className="text-gray-600">{combo.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <FiCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Donor Verification</h3>
                  <p className="text-gray-600">
                    Rigorous verification ensures all samples in a matched set are from the same verified donor.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sample Integrity</h3>
                  <p className="text-gray-600">
                    Each sample type is handled with appropriate protocols to maintain integrity and quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Documentation</h3>
                  <p className="text-gray-600">
                    Complete documentation linking all samples in a matched set with full traceability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Consistency</h3>
                  <p className="text-gray-600">
                    Consistent clinical and demographic data across all samples in the matched set.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Request Matched Sets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
