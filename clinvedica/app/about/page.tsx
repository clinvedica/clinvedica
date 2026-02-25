'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiShield } from 'react-icons/fi';

export default function About() {
  const values = [
    {
      icon: <FiTarget />,
      title: 'Mission',
      description: 'To provide researchers worldwide with seamless access to high-quality, ethically sourced biospecimens that drive innovation in diagnostics, therapeutics, and drug discovery.',
    },
    {
      icon: <FiEye />,
      title: 'Vision',
      description: 'To become the global leader in biospecimen procurement, recognized for our unwavering commitment to quality, ethics, and research excellence.',
    },
    {
      icon: <FiHeart />,
      title: 'Values',
      description: 'Integrity, quality, compliance, and customer-centricity guide every aspect of our operations, ensuring trust and excellence in all we do.',
    },
    {
      icon: <FiShield />,
      title: 'Compliance',
      description: 'We maintain strict adherence to international regulatory standards, ensuring all biospecimens are ethically sourced and fully compliant with global research guidelines.',
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
                About Clin Vedica
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Bridging the Gap Between Critical Research Needs and Quality Biospecimens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advancing Global Biomedical Research
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Clin Vedica Life Sciences is a premier biospecimens procurement organization dedicated to advancing global biomedical research. 
                We understand the critical role that high-quality, well-characterized human biospecimens play in the development of new diagnostics, 
                therapeutics and drug discovery.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our mission is to provide researchers in pharma, biotechnology, diagnostics, and life sciences with seamless access to ethically 
                sourced samples, underpinned by comprehensive data and unwavering compliance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a global network of trusted partners and a commitment to excellence, we ensure that every biospecimen meets the highest 
                standards of quality, integrity, and regulatory compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-2xl p-8 md:p-12"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Expertise</h3>
                  <p className="text-gray-700">
                    Years of experience in biospecimen procurement, quality assurance, and regulatory compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-700">
                    Worldwide network ensuring access to diverse populations and sample types.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality First</h3>
                  <p className="text-gray-700">
                    Rigorous quality control processes at every stage of procurement and handling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-primary-600 mb-4 text-4xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clin Vedica?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Every project is assigned a dedicated project manager who serves as your single point of contact, 
                ensuring seamless communication and timely updates throughout the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Data</h3>
              <p className="text-gray-600">
                Access to comprehensive, de-identified clinical, pathological, and demographic data to enrich 
                your biospecimen research and enhance study outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Solutions</h3>
              <p className="text-gray-600">
                Tailored procurement solutions designed to meet your specific research requirements, 
                timelines, and budget constraints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
