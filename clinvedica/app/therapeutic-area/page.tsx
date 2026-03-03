'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';

export default function TherapeuticArea() {
  const router = useRouter();

  const areas = [
    {
      title: 'Oncology',
      description:
        'Comprehensive biospecimen solutions for cancer research, including tumor tissues, matched normal samples, and associated biofluids.',
      samples: ['Tumor Tissues', 'Matched Normal', 'Blood Samples', 'Biofluids'],
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Cardiovascular',
      description:
        'Specialized samples for cardiovascular disease research, including blood and its derivatives.',
      samples: ['Blood Samples', 'Serum & Plasma', 'PBMC', 'Buffy Coat'],
      color: 'from-red-600 to-rose-600',
      href: '/therapeutic-area/cardiovascular',
    },
    {
      title: 'Neurological',
      description: 'Biospecimens for neurological research including brain tissues, CSF, and related samples.',
      samples: ['Brain Tissues', 'CSF', 'Blood Samples', 'Matched Sets'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Autoimmune',
      description: 'Samples for autoimmune disease research including synovial fluid, blood, and tissue samples.',
      samples: ['Synovial Fluid', 'Blood Samples', 'Tissue Samples', 'PBMC'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Metabolic Disorders',
      description: 'Biospecimens for metabolic disease research including various tissue and biofluid samples.',
      samples: ['Tissue Samples', 'Blood Samples', 'Urine', 'Serum'],
      color: 'from-primary-500 to-teal-500',
    },
    {
      title: 'Infectious Diseases',
      description: 'Samples for infectious disease research with comprehensive clinical data and pathogen information.',
      samples: ['Blood Samples', 'Tissue Samples', 'Biofluids', 'PBMC'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Respiratory',
      description:
        'Specialized biospecimens for respiratory disease research including lung tissues and related samples.',
      samples: ['Lung Tissues', 'Blood Samples', 'BAL Fluid', 'Serum'],
      color: 'from-teal-600 to-teal-400',
    },
    {
      title: 'Rare Diseases',
      description: 'Hard-to-find biospecimens for rare disease research with comprehensive clinical documentation.',
      samples: ['Tissue Samples', 'Blood Samples', 'Biofluids', 'Matched Sets'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Therapeutic Areas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Specialized Biospecimen Solutions Across Multiple Therapeutic Areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => {
                  if (area.href) {
                    router.push(area.href);
                  }
                }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col ${
                  area.href ? 'cursor-pointer' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} mb-4 flex items-center justify-center text-white font-bold text-xl`}
                >
                  {area.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{area.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Samples:</p>
                  <ul className="space-y-1">
                    {area.samples.map((sample, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        {sample}
                      </li>
                    ))}
                  </ul>
                </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm text-primary-600 font-semibold hover:text-teal-600 transition-colors mt-auto"
            >
                  Request Samples
                  <FiArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Comprehensive Therapeutic Area Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Deep understanding of specific therapeutic areas and their unique biospecimen requirements.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Data</h3>
                <p className="text-gray-600 text-sm">
                  Access to detailed clinical, pathological, and demographic data relevant to each therapeutic area.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Tailored procurement strategies designed to meet the specific needs of your therapeutic area research.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Therapeutic Area Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
