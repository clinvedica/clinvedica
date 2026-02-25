'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Solutions() {
  const services = [
    {
      title: 'Tissue Samples',
      description: 'FFPE, Frozen, Normal Adjacent, and Diseased Tissues — high-quality, ethically sourced, and ideal for a wide range of research applications.',
      href: '/solutions/tissue-samples',
      features: ['FFPE Blocks', 'Frozen Tissues', 'Normal Adjacent', 'Diseased Tissues', 'Comprehensive Data'],
    },
    {
      title: 'Blood & Derivatives',
      description: 'Serum, Plasma, Buffy Coat, Whole Blood, PBMC, BMMNC — handled with precision to ensure maximum sample integrity.',
      href: '/solutions/blood-derivatives',
      features: ['Serum & Plasma', 'Buffy Coat', 'PBMC', 'BMMNC', 'Whole Blood'],
    },
    {
      title: 'Biofluids',
      description: 'Urine, Saliva, CSF, Synovial Fluid, Ascites, Aqueous Humour, and more — verified and ready to support your specific study needs.',
      href: '/solutions/biofluids',
      features: ['Urine & Saliva', 'CSF', 'Synovial Fluid', 'Ascites', 'Aqueous Humour'],
    },
    {
      title: 'Matched Set Biospecimens',
      description: 'Obtain tissue, blood, and other biospecimens from the same donor — boosting statistical power and consistency across your research.',
      href: '/solutions/matched-sets',
      features: ['Same Donor', 'Multiple Sample Types', 'Comprehensive Data', 'Quality Assured', 'Research Ready'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Access a Comprehensive Range of Biospecimens for Your Research Needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Associated Data Services
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Access comprehensive, de-identified clinical, pathological, and demographic data to enrich your biospecimen research. 
              Our data services provide valuable insights that enhance the value and utility of your samples.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Clinical Data</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive clinical information including diagnosis, treatment history, and outcomes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Pathological Data</h3>
                <p className="text-gray-600 text-sm">
                  Detailed pathological reports and histological findings for tissue samples.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Demographic Data</h3>
                <p className="text-gray-600 text-sm">
                  Age, gender, ethnicity, and other relevant demographic information.
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
              Request Samples Now
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
