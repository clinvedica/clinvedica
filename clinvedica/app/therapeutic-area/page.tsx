'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';
import { therapeuticAreas } from '@/lib/therapeutic-areas';

export default function TherapeuticArea() {
  const router = useRouter();

  return (
    <div className="bg-white">
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {therapeuticAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => router.push(`/therapeutic-area/${area.slug}`)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} mb-4 flex items-center justify-center text-white font-bold text-xl`}
                >
                  {area.shortTitle.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{area.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Samples:</p>
                  <ul className="space-y-1">
                    {area.samples.map((sample) => (
                      <li key={sample} className="text-xs text-gray-600 flex items-center">
                        <span className="text-primary-600 mr-2">•</span>
                        {sample}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center text-sm text-primary-600 font-semibold mt-auto">
                  Explore {area.shortTitle}
                  <FiArrowRight className="ml-2" size={16} />
                </span>
              </motion.div>
            ))}
          </div>

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

          <div className="mt-12 text-center">
            <Link
              href="/feasibility-request"
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
