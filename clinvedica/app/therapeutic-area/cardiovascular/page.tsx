'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CardiovascularTherapeuticAreaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
              Cardiovascular Biospecimens for Translational Research
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              At Clin Vedica Life Sciences, we provide high-quality, ethically sourced biospecimens to support
              cardiovascular research through our network of hospitals and collection centers. We offer both prospective
              and retrospective sample collection tailored to your study protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Supported Indications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Supported Cardiology Indications
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We support a broad spectrum of cardiovascular and cerebrovascular conditions, enabling both exploratory
                and late-stage studies.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Acute Myocardial Infarction (AMI)</li>
                <li>• Coronary Artery Disease (CAD)</li>
                <li>• Congestive Heart Failure (CHF)</li>
                <li>• Arrhythmias (e.g., Atrial Fibrillation)</li>
                <li>• Hypertension</li>
                <li>• Dyslipidemia</li>
                <li>• Cardiomyopathy</li>
                <li>• Stroke / Ischemic Events</li>
                <li>• Peripheral Artery Disease (PAD)</li>
                <li>• Additional cardiovascular conditions per protocol</li>
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
                <li>• Access to acute and chronic cardiovascular cohorts.</li>
                <li>• Support for longitudinal and cross-sectional study designs.</li>
                <li>• De-identified clinical data aligned to your endpoints.</li>
                <li>• Prospective recruitment aligned to inclusion/exclusion criteria.</li>
              </ul>
            </motion.div>
          </div>

          {/* Sample Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sample Types Available</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We provide cardiovascular-focused biospecimens collected under controlled pre-analytical conditions to
                support multi-omics, biomarker discovery, and diagnostic development.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Whole Blood, Serum, Plasma</li>
                <li>• PBMCs and Buffy Coat</li>
                <li>• Isolated DNA / RNA</li>
                <li>• FFPE and Fresh Frozen Cardiac Tissue (Subject to availability and routine clinical practice)</li>
                <li>• Matched healthy controls where feasible</li>
                <li>• Additional biospecimen types based on protocol needs</li>
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
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Beyond biospecimens, we provide the data and operational backbone needed for robust cardiovascular
                studies.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Relevant clinical, imaging, and risk-factor data fields.</li>
                <li>• Clearly defined timepoints and visit schedules where applicable.</li>
                <li>• Temperature-controlled logistics and global shipment support.</li>
                <li>• Documentation aligned with audit and regulatory expectations.</li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-primary-600 to-teal-600 rounded-2xl px-6 py-10 md:px-10 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Plan Your Cardiovascular Biospecimen Program
            </h2>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto text-primary-50">
              We provide matched controls, detailed clinical data, and global logistics support to help you execute
              reliable, compliant cardiovascular research—from early discovery through late-stage validation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Cardiovascular Study
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

