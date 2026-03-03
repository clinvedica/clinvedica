'use client';

import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import { 
  FiShield, 
  FiGlobe, 
  FiTarget, 
  FiUsers, 
  FiTruck,
  FiCheckCircle
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <FiShield />,
      title: 'Uncompromised Quality',
      description: 'Rigorous pre-analytical controls, validated handling SOPs, and multi-level QC ensure every biospecimen is fit for its intended assay.',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Ethical and Compliant Sourcing',
      description: 'All collections are conducted under IRB/IEC oversight with informed consent, anonymization, and alignment to national and international guidelines.',
    },
    {
      icon: <FiGlobe />,
      title: 'Global Network, Local Expertise',
      description: 'A pan-India network of hospitals and research centers with global logistics partners to support regional and international studies.',
    },
    {
      icon: <FiTarget />,
      title: 'Tailored Procurement Solutions',
      description: 'Retrospective access, prospective recruitment, and matched donor sets designed around your protocol, inclusion criteria, and timelines.',
    },
    {
      icon: <FiUsers />,
      title: 'Dedicated Project Management',
      description: 'A single point of contact from feasibility through delivery, ensuring transparent updates, risk management, and milestone tracking.',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Specialized Lab & Testing Services',
      description: 'Access to partner labs for specific testing services—from sample processing to assay-ready outputs tailored to your study design.',
    },
    {
      icon: <FiTruck />,
      title: 'Logistical Excellence',
      description: 'Temperature-controlled packaging, real-time tracking, and compliant documentation to protect sample integrity end-to-end.',
    },
    {
      icon: <FiTarget />,
      title: 'Therapeutic Area Focus',
      description: 'Deep experience across oncology, infectious diseases, metabolic/endocrine, and autoimmune indications, with disease-specific cohorts and controls.',
    },
  ];

  const services = [
    {
      title: 'Tissue Samples',
      description: 'FFPE, frozen, normal adjacent, and diseased tissues that support histology, IHC, molecular profiling, and biomarker discovery. Ideal for translational research, companion diagnostics development, and validation of tissue-based assays.',
      href: '/solutions/tissue-samples',
      features: ['FFPE blocks & curls', 'Frozen tissues', 'Normal adjacent & control tissues', 'Tumor subtype-specific collections', 'Use cases: IHC, NGS, biomarker validation'],
    },
    {
      title: 'Blood & Derivatives',
      description: 'Serum, plasma, buffy coat, whole blood, PBMC, and BMMNC collected under controlled pre-analytical conditions. Ideal for biomarker discovery, immunophenotyping, genomics, and longitudinal monitoring studies.',
      href: '/solutions/blood-derivatives',
      features: ['Serum & plasma panels', 'Buffy coat & whole blood', 'PBMC & BMMNC', 'Stabilized and fresh collections', 'Use cases: flow cytometry, NGS, cytokine profiling'],
    },
    {
      title: 'Biofluids',
      description: 'Urine, saliva, CSF, synovial fluid, ascites, aqueous humour, and other matrices to support non-invasive and minimally invasive studies. Ideal for early detection, pharmacodynamic markers, and multi-omics workflows.',
      href: '/solutions/biofluids',
      features: ['Urine & saliva', 'CSF & synovial fluid', 'Ascites & other specialized fluids', 'Aliquoting & storage options', 'Use cases: metabolomics, proteomics, liquid biopsy'],
    },
    {
      title: 'Matched Set Biospecimens',
      description: 'Integrated access to tissue, blood, and other biospecimens from the same donor, strengthening correlations across modalities. Ideal for longitudinal studies, multi-omics projects, and precision medicine programs.',
      href: '/solutions/matched-sets',
      features: ['Same-donor tissue & blood', 'Multiple timepoints where feasible', 'Linked clinical & pathological data', 'Use cases: multi-omics, precision medicine, translational cohorts'],
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'One Point Contact',
      description: "You'll work with a dedicated project manager—your single point of contact for feasibility, timelines, and risk mitigation throughout the project.",
    },
    {
      number: 2,
      title: 'Submit your Request',
      description: 'Send us your specific biospecimen or project requirements, including sample types, quantities, clinical criteria, and timelines.',
    },
    {
      number: 3,
      title: 'Pre-Feasibility & Alignment',
      description: 'We perform a detailed feasibility assessment across our partner network, refine inclusion/exclusion criteria, and align on protocol, logistics, and documentation.',
    },
    {
      number: 4,
      title: 'Receive your Quote',
      description: 'You receive a transparent, itemized quote with clear deliverables, timelines, and quality parameters, along with any recommended options or alternatives.',
    },
    {
      number: 5,
      title: 'Project Initiation & Collection',
      description: 'Upon approval, we initiate biospecimen collection under defined SOPs, with ongoing status updates, deviation management, and continuous quality oversight.',
    },
    {
      number: 6,
      title: 'Delivery, Data & Follow-Up',
      description: 'Samples and associated data are delivered with full documentation, and our team remains available for clarifications, audits, and follow-on requests.',
    },
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* What we do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Delivering Quality Human Biospecimens Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between ambitious research questions and precisely characterized human biospecimens.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                Clin Vedica Life Sciences is a specialist biospecimen partner dedicated to advancing global biomedical research. 
                We recognize that high-quality, deeply annotated human biospecimens are the foundation of robust discovery, validation, and diagnostic development.
              </p>
              <p>
                We work with pharmaceutical and biotechnology companies, diagnostics developers, and academic laboratories to provide retrospective collections, 
                prospective recruitment, and matched donor sets across key therapeutic areas.
              </p>
              <p>
                Every project is executed through a vetted network of hospitals and research centers, combining clinical insight, ethical rigor, and operational excellence 
                to deliver samples and data that you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clin Vedica?
            </h2>
            <p className="text-xl text-gray-600">
              The Clin Vedica Advantage: Precision, Ethics, and Global Reach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
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
              Clin Vedica in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A growing network, expanding inventory, and deepening therapeutic area experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col items-center">
              <p className="text-4xl font-extrabold text-primary-600 mb-2">50+</p>
              <p className="text-gray-700 font-semibold mb-1">Partner Institutions</p>
              <p className="text-gray-500 text-sm">
                Hospitals, clinics, labs, and collection centers across India, with the ability to support regional and
                global projects.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col items-center">
              <p className="text-4xl font-extrabold text-primary-600 mb-2">15+</p>
              <p className="text-gray-700 font-semibold mb-1">Therapeutic Areas</p>
              <p className="text-gray-500 text-sm">
                Oncology, infectious diseases, metabolic/endocrine, autoimmune, and more as our network expands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access a Comprehensive Range of Biospecimens
            </h2>
            <p className="text-xl text-gray-600">
              Our Solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <div className="mt-12 text-center">
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start a Feasibility Request
            </Link>
          </div>
        </div>
      </section>

      {/* Therapeutic Area Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Therapeutic Area Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built biospecimen collections across high-impact disease areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Oncology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Solid and hematologic malignancies with access to tumor tissue, matched normal, blood, and biofluids for biomarker discovery and companion diagnostics.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Infectious Diseases</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specimens from viral, bacterial, and parasitic infections, supporting vaccine research, diagnostic assay development, and immune monitoring.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Metabolic & Endocrine</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cohorts in diabetes, dyslipidemia, obesity, and related conditions, with longitudinal blood and biofluids for translational and real-world studies.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Autoimmune & Inflammatory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Samples from autoimmune and inflammatory disorders to support immune profiling, target validation, and precision medicine programs.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/therapeutic-area"
              className="inline-flex items-center px-8 py-3 rounded-lg border border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              Explore Therapeutic Areas
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined, SOP-driven process designed to protect sample integrity and accelerate your research.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              From first contact to final data delivery, each project is governed by documented SOPs, ethics approvals, and quality checkpoints. 
              We align early on feasibility, logistics, and documentation so that your team can focus on the science, not the operational noise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-300 shadow-md"
            >
              Get Started with Feasibility
            </Link>
          </div>
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quality, Ethics & Compliance at the Core
              </h2>
              <p className="text-gray-200 text-lg mb-4">
                Every Clin Vedica project is built on a foundation of regulatory-grade processes, biosafety, and patient protection.
              </p>
              <ul className="space-y-2 text-gray-200 text-sm md:text-base">
                <li>• Alignment with national ethical guidelines for biomedical and health research.</li>
                <li>• Adherence to ICH-GCP principles and applicable clinical research regulations.</li>
                <li>• IRB/IEC approvals and documented informed consent for prospective collections.</li>
                <li>• Robust biosafety practices and cold-chain management for all specimen types.</li>
                <li>• Anonymization, controlled access, and data privacy safeguards for donor information.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm">
              <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Built for Audit-Ready Projects</h3>
                <p className="text-gray-300 text-sm mb-4">
                  From feasibility to final report, we maintain traceable documentation to support internal QA, partner audits, and regulatory submissions.
                </p>
                <Link
                  href="/quality-compliance"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-500 transition-colors duration-300"
                >
                  Learn more about our quality framework
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Power Your Discovery?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Share your biospecimen requirements and receive a tailored feasibility assessment from our expert team.
            </p>
            <Link
              href="/feasibility-request"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Request Feasibility
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
