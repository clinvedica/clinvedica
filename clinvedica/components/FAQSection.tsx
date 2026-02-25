'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What types of biospecimens can Clin Vedica provide?',
    answer:
      'We support a broad range of human biospecimens including FFPE and frozen tissues, whole blood and derivatives (serum, plasma, PBMCs, BMMNCs), and multiple biofluids such as urine, saliva, CSF, synovial fluid, and ascites, among others.',
  },
  {
    question: 'How long does a typical feasibility assessment take?',
    answer:
      'Timelines depend on the complexity of your request, but most feasibility assessments are completed within 5–10 business days once we have all necessary study details.',
  },
  {
    question: 'Do you support both retrospective and prospective collections?',
    answer:
      'Yes. We can source from existing inventories (retrospective) and also coordinate new patient recruitment and collections (prospective) through our partner network, depending on your protocol and timelines.',
  },
  {
    question: 'How do you ensure ethical compliance and data privacy?',
    answer:
      'All collections are conducted under IRB/IEC oversight where required, with informed consent, anonymization or coding of donor data, and adherence to applicable national ethical guidelines and data protection expectations.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Find quick answers to common questions about our biospecimen procurement and feasibility process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <span className="text-sm md:text-base font-medium text-gray-900">{faq.question}</span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-3 text-gray-500"
                  >
                    <FiChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-4 text-sm text-gray-700 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

