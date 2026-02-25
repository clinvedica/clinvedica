'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function QualityCompliancePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-wide text-primary-600 uppercase mb-3">
              Quality & Compliance
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Regulatory-Grade Biospecimen Operations, Built for Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Clin Vedica Life Sciences embeds ethics, quality, and regulatory alignment into every stage of biospecimen
              procurement, handling, and data management—so your studies are supported by samples you can stand behind.
            </p>
            <p className="text-sm text-gray-600">
              From ethics approvals and informed consent to biosafety and documentation, our framework is designed to
              meet the expectations of sponsors, investigators, and regulatory bodies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                A Structured Framework for Ethical, High-Quality Biospecimens
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Our quality and compliance framework brings together national ethical guidance, international best
                practices, and robust internal SOPs. Every project is evaluated not only for scientific feasibility but
                also for ethical, regulatory, and operational fit.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We collaborate closely with investigators, institutional ethics committees, and sponsors to ensure that
                biospecimen procurement respects donor rights, maintains biosafety, and supports audit-ready
                documentation.
              </p>
            </div>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Key Outcomes of Our Framework
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ethically sourced human biospecimens with informed consent.</li>
                <li>• Traceable sample lifecycles from collection through shipment.</li>
                <li>• Robust documentation for audits and regulatory submissions.</li>
                <li>• Reduced pre-analytical variability through standardized SOPs.</li>
                <li>• Protection of donor privacy and data confidentiality.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Governance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ethics, Governance & Donor Protection
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Respect for donors is central to every Clin Vedica engagement. Our processes are grounded in national
                ethical guidelines for biomedical and health research, and aligned with globally recognized principles
                for research involving human participants.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Ethics committee (IRB/IEC) approvals obtained for prospective collections where required.</li>
                <li>• Informed consent processes conducted by qualified site staff using approved documents.</li>
                <li>• Use of de-identified or coded samples, with restricted access to re-identification keys.</li>
                <li>• Clear definition of permitted research uses within consent and site agreements.</li>
                <li>• Governance mechanisms for handling withdrawals, complaints, or protocol deviations.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Compliance Touchpoints for Every Project
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Ethics and regulatory review of the project outline.</li>
                <li>Verification of site capabilities, approvals, and SOPs.</li>
                <li>Training and alignment calls with site personnel as needed.</li>
                <li>Ongoing oversight for protocol adherence and documentation.</li>
                <li>Formal close-out with document archival and data retention controls.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management & SOPs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Quality Management, SOPs & Pre-Analytical Control
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Pre-analytical variability is one of the biggest risks to biospecimen-driven research. Clin Vedica
                mitigates this risk through standardized procedures and continuous quality oversight.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Documented SOPs for collection, processing, aliquoting, storage, and shipment.</li>
                <li>• Defined ranges for processing times, temperatures, and storage conditions.</li>
                <li>• Use of calibrated equipment and validated materials where applicable.</li>
                <li>• Visual inspection and, where appropriate, pathologist review of samples.</li>
                <li>• Deviations recorded, investigated, and communicated to sponsors.</li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                Where study requirements demand, we work with sites to customize SOPs while preserving documentation and
                traceability, ensuring that bespoke workflows still remain quality-controlled.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Sample & Data Documentation Package
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Each shipment is accompanied by a documentation package designed to support your internal QA and
                downstream analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Sample inventory with IDs, matrices, and storage conditions.</li>
                <li>• Relevant clinical and pathological data fields, as agreed in advance.</li>
                <li>• Shipping manifests and temperature log information where applicable.</li>
                <li>• Copies of key approvals or certifications, if required by the study.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Biosafety & Data Privacy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Biosafety, Handling & Logistics
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We prioritize biosafety at every step, from sample collection environments to packaging and transport.
                Our aim is to protect both personnel and sample integrity.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use of appropriate PPE and biosafety practices at collection and processing sites.</li>
                <li>• Validated primary and secondary packaging solutions for different matrices.</li>
                <li>• Temperature-controlled logistics partners selected based on performance.</li>
                <li>• Clear labelling, hazard communication, and documentation for all consignments.</li>
                <li>• Incident and excursion reporting processes for any transport deviations.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Data Privacy & Confidentiality
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Donor privacy and data security are integral to our operations. We limit access to identifiable
                information and ensure that only the minimum necessary data are shared for research.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use of coded identifiers instead of direct personal identifiers in research datasets.</li>
                <li>• Role-based access controls for sensitive information at sites and central coordination.</li>
                <li>• Secure data transfer channels and password-protected files where appropriate.</li>
                <li>• Alignment with applicable data protection expectations in the jurisdictions we operate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need an Audit-Ready Biospecimen Partner?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Talk to our team about your protocol, regulatory expectations, and documentation needs. We will align a
              biospecimen strategy that supports both your science and your compliance obligations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Requirements
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

