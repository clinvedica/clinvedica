'use client';

import { motion } from 'framer-motion';
import { FiActivity, FiDatabase, FiLayers, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

const capabilities = [
  {
    icon: <FiActivity size={28} />,
    title: 'Advanced Laboratory Infrastructure',
    points: [
      'Access to BSL-2 laboratories through a vetted partner network',
      'Standardized pre-analytical processing and handling workflows',
      'Cryogenic storage capabilities for long-term sample integrity',
      'Digital systems to track samples from collection to shipment',
    ],
  },
  {
    icon: <FiLayers size={28} />,
    title: 'Specialized Sample Processing',
    points: [
      'Tissue processing for FFPE, frozen, and matched normal samples',
      'Isolation of PBMCs, BMMNCs, and other cellular fractions',
      'Aliquoting, labeling, and barcoding tailored to your assays',
      'Support for multi-omics-ready sample preparation workflows',
    ],
  },
  {
    icon: <FiDatabase size={28} />,
    title: 'Data Management & Annotation',
    points: [
      'Structured clinical and pathological data collection',
      'Configurable data templates aligned with study endpoints',
      'Quality checks to minimize missing or inconsistent fields',
      'Secure, traceable data transfer suitable for regulated studies',
    ],
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Project & Site Management',
    points: [
      'Central coordination with a single point of contact',
      'Feasibility assessments across a pan-India site network',
      'Defined milestones, reporting cadence, and risk mitigation',
      'Support for audits, documentation requests, and follow-up',
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Our Capabilities
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art infrastructure, specialized processes, and coordinated project management to support
              complex biospecimen-driven research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Integrated Capabilities for Every Stage</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              From sample collection and processing to data management and project oversight, Clin Vedica brings together
              the right capabilities to make your studies run smoothly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(15, 23, 42, 0.08)' }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 flex-1">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/feasibility-request"
                    className="inline-flex items-center text-primary-600 text-sm font-semibold hover:text-teal-600 transition-colors"
                  >
                    Discuss how we can support your project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics / Global Reach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Global Reach & Engagement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              A growing footprint across institutions, regions, and therapeutic areas, enabling robust and diverse
              biospecimen collections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <p className="text-3xl font-extrabold text-primary-600 mb-1">10,000+</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Biospecimens Supplied</p>
              <p className="text-xs text-gray-500">Across multiple matrices and disease indications.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <p className="text-3xl font-extrabold text-primary-600 mb-1">25+</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Partner Institutions</p>
              <p className="text-xs text-gray-500">Hospitals, research centers, and diagnostic networks.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <p className="text-3xl font-extrabold text-primary-600 mb-1">5+</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Therapeutic Areas</p>
              <p className="text-xs text-gray-500">Oncology, infectious, metabolic, autoimmune, and more.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <p className="text-3xl font-extrabold text-primary-600 mb-1">24/7</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">Project Support</p>
              <p className="text-xs text-gray-500">Responsive coordination across time zones and regions.</p>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-600 text-white text-sm font-semibold shadow-md hover:bg-teal-600 transition-colors"
            >
              Initiate a Feasibility Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

