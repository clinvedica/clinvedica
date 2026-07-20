'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { TherapeuticAreaContent } from '@/lib/therapeutic-areas';

export default function TherapeuticAreaDetail({ area }: { area: TherapeuticAreaContent }) {
  return (
    <div className="bg-white">
      <section className="py-20 bg-linear-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-wide text-primary-600 uppercase mb-3">
              Therapeutic Area
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {area.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-700">{area.heroDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {area.indicationsTitle}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{area.indicationsIntro}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {area.indications.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 border border-primary-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Highlights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {area.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sample Types Available</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{area.sampleTypesIntro}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {area.sampleTypes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data & Logistics Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {area.dataSupport.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-primary-600 to-teal-600 rounded-2xl px-6 py-10 md:px-10 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{area.ctaTitle}</h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-primary-50">
              {area.ctaDescription}
            </p>
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {area.ctaLabel}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
