'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

export default function Biofluids() {
  const sampleTypes = [
    {
      title: 'Urine',
      description: 'Fresh and preserved urine samples for biomarker discovery and diagnostic research.',
      features: ['Multiple collection methods', 'Preserved samples', 'Biomarker ready', 'Quality tested'],
    },
    {
      title: 'Saliva',
      description: 'Oral fluid samples collected non-invasively for genomics and biomarker studies.',
      features: ['Non-invasive collection', 'Genomic analysis', 'Biomarker studies', 'Research grade'],
    },
    {
      title: 'CSF',
      description: 'Cerebrospinal fluid samples for neurological and biomarker research applications.',
      features: ['Neurological research', 'Biomarker discovery', 'Quality assured', 'Clinical data'],
    },
    {
      title: 'Synovial Fluid',
      description: 'Joint fluid samples for rheumatological and orthopedic research studies.',
      features: ['Rheumatology research', 'Orthopedic studies', 'Quality tested', 'Research ready'],
    },
    {
      title: 'Ascites',
      description: 'Peritoneal fluid samples for oncology and biomarker research applications.',
      features: ['Oncology research', 'Biomarker studies', 'Quality assured', 'Comprehensive data'],
    },
    {
      title: 'Aqueous Humour',
      description: 'Ocular fluid samples for ophthalmological research and biomarker discovery.',
      features: ['Ophthalmology research', 'Biomarker discovery', 'Quality tested', 'Research grade'],
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
                Biofluids
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Verified and ready to support your specific study needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Collection & Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Specialized Collection</h3>
                <p className="text-gray-600">
                  Biofluid samples are collected using specialized protocols to ensure sample integrity and quality.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Proper Preservation</h3>
                <p className="text-gray-600">
                  Appropriate preservation methods are used to maintain molecular stability and prevent degradation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Verification</h3>
                <p className="text-gray-600">
                  All samples undergo quality verification to ensure they meet research-grade standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Research Ready</h3>
                <p className="text-gray-600">
                  Samples are processed and prepared to be immediately ready for your research applications.
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
              Request Biofluid Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
