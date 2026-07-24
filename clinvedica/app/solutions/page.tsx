'use client';

import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import SolutionsCategoryToggle, {
  type SolutionsCategory,
} from '@/components/SolutionsCategoryToggle';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';
import { animalServices, humanServices } from '@/lib/solutions';
import AnimalSpeciesGrid from '@/components/AnimalSpeciesGrid';

function SolutionsContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<SolutionsCategory>('human');

  useEffect(() => {
    const param = searchParams.get('category');
    if (param === 'animal' || param === 'human') {
      setCategory(param);
    }
  }, [searchParams]);

  const services = category === 'human' ? humanServices : animalServices;

  const handleCategoryChange = (value: SolutionsCategory) => {
    setCategory(value);
    const url = new URL(window.location.href);
    if (value === 'animal') {
      url.searchParams.set('category', 'animal');
    } else {
      url.searchParams.delete('category');
    }
    window.history.replaceState({}, '', url.pathname + url.search);
  };

  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8"
            >
              Access a Comprehensive Range of Biospecimens for Your Research Needs
            </motion.p>
            <SolutionsCategoryToggle value={category} onChange={handleCategoryChange} />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
                category === 'animal' ? 'max-w-4xl mx-auto' : ''
              }`}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={`${category}-${service.href}`}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  features={service.features}
                  delay={index * 0.08}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {category === 'human' ? (
              <motion.div
                key="human-data"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Associated Data Services
                </h2>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
                  Access comprehensive, de-identified clinical, pathological, and demographic data to
                  enrich your biospecimen research. Our data services provide valuable insights that
                  enhance the value and utility of your samples.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Clinical Data',
                      body: 'Comprehensive clinical information including diagnosis, treatment history, and outcomes.',
                    },
                    {
                      title: 'Pathological Data',
                      body: 'Detailed pathological reports and histological findings for tissue samples.',
                    },
                    {
                      title: 'Demographic Data',
                      body: 'Age, gender, ethnicity, and other relevant demographic information.',
                    },
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-lg p-6 shadow-md"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm">{card.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="animal-support"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="space-y-10"
              >
                <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12">
                  <AnimalSpeciesGrid />
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ethical Guidelines & Research Support
                  </h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    All animal biospecimens are sourced in accordance with ethical guidelines and
                    applicable institutional and regulatory standards. We support preclinical
                    toxicology, translational, and veterinary research programs — tell us your
                    species, matrix, and study needs for a rapid feasibility assessment.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Request Samples Now
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function Solutions() {
  return (
    <Suspense
      fallback={
        <div className="bg-white py-20 text-center text-gray-600">Loading solutions…</div>
      }
    >
      <SolutionsContent />
    </Suspense>
  );
}
