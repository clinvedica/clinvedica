'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

export default function TissueSamples() {
  const sampleTypes = [
    {
      title: 'FFPE Blocks',
      description: 'Formalin-Fixed Paraffin-Embedded tissue blocks preserved for long-term storage and analysis.',
      features: ['Long-term preservation', 'Ideal for IHC', 'DNA/RNA extraction', 'Pathology review'],
    },
    {
      title: 'Frozen Tissues',
      description: 'Fresh frozen tissue samples maintained at optimal temperatures to preserve molecular integrity.',
      features: ['Cryopreserved', 'Molecular analysis ready', 'Protein preservation', 'Quality assured'],
    },
    {
      title: 'Normal Adjacent Tissues',
      description: 'Healthy tissue samples adjacent to diseased areas, essential for comparative studies.',
      features: ['Matched pairs available', 'Control samples', 'Comparative analysis', 'Research grade'],
    },
    {
      title: 'Diseased Tissues',
      description: 'Pathologically confirmed diseased tissue samples with comprehensive clinical data.',
      features: ['Pathology confirmed', 'Clinical data included', 'Multiple disease types', 'Research ready'],
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
                Tissue Samples
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              High-quality, ethically sourced tissue samples ideal for a wide range of research applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sampleTypes.map((type, index) => (
              <motion.div
                key={index}
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
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <FiCheckCircle className="text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ethical Sourcing</h3>
                <p className="text-gray-600">
                  All tissue samples are ethically sourced with full regulatory compliance and comprehensive documentation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-gray-600">
                  Rigorous quality control processes ensure every sample meets the highest standards for research excellence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Data</h3>
                <p className="text-gray-600">
                  Access to detailed clinical, pathological, and demographic data to enrich your research.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Procurement</h3>
                <p className="text-gray-600">
                  Tailored procurement solutions designed to meet your specific research requirements and timelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Request Tissue Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
