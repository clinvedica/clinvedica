'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMapPin size={24} />,
      title: 'Address',
      content: (
        <>
          C-2, Sunshine Valley, Suchi Pind,
          <br />
          Jalandhar, Punjab - 144007, India
        </>
      ),
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: (
        <a href="tel:+917009810865" className="hover:text-primary-600 transition-colors">
          +91-7009810865
        </a>
      ),
    },
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: (
        <a href="mailto:pankaj@clinvedicalifesciences.com" className="hover:text-primary-600 transition-colors">
          pankaj@clinvedicalifesciences.com
        </a>
      ),
    },
    {
      icon: <FiClock size={24} />,
      title: 'Business Hours',
      content: (
        <>
          Monday - Saturday: 10:00 AM - 6:00 PM IST
        </>
      ),
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
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team to discuss your biospecimen requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <p className="text-lg text-gray-700">
              Whether you have a general question, would like to explore a potential collaboration, or need more
              information about our biospecimen solutions, we are here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-600 flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <div className="text-gray-600">{info.content}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-3">Ready to start a conversation?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                You can reach us via the details above, or use the contact form available at the bottom of every page.
                For detailed feasibility assessments, please submit a request through our dedicated feasibility
                workflow.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
