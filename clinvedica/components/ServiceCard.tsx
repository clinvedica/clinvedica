'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  features?: string[];
  delay?: number;
}

export default function ServiceCard({ title, description, href, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      {features && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-primary-600 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center text-primary-600 font-semibold hover:text-teal-600 transition-colors group mt-auto"
        aria-label={`Learn more about ${title}`}
      >
        Learn more  about {title}
        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
