'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { sendEmail } from '@/lib/emailjs';
import StepProgress from '@/components/StepProgress';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

const steps = [
  'Contact Information',
  'Project Overview',
  'Sample Requirements',
  'Services & Timeline',
  'Review & Submit',
];

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  designation: '',
  projectTitle: '',
  objectives: '',
  indications: '',
  sampleTypes: '',
  sampleQuantity: '',
  inclusionCriteria: '',
  exclusionCriteria: '',
  servicesNeeded: '',
  timeline: '',
  regions: '',
  regulatoryStatus: '',
  budgetRange: '',
  additionalInfo: '',
};

export default function FeasibilityRequestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validateStep = () => {
    if (currentStep === 0) {
      if (!formData.name.trim()) return 'Please enter your full name.';
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        return 'Please enter a valid email address.';
      }
      if (!formData.company.trim()) return 'Please enter your company or organization.';
    }
    if (currentStep === 1) {
      if (!formData.projectTitle.trim()) return 'Please provide a project title or name.';
      if (!formData.objectives.trim()) return 'Please describe your study objectives.';
    }
    if (currentStep === 2) {
      if (!formData.sampleTypes.trim()) return 'Please specify required sample types.';
      if (!formData.sampleQuantity.trim()) return 'Please indicate approximate sample quantities or cohort size.';
      if (!formData.indications.trim()) return 'Please describe the target indications or disease areas.';
    }
    if (currentStep === 3) {
      if (!formData.servicesNeeded.trim()) return 'Please outline the services you require.';
      if (!formData.timeline.trim()) return 'Please share your desired timelines or key milestones.';
    }
    return null;
  };

  const handleNext = () => {
    const error = validateStep();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      return;
    }
    setSubmitStatus({ type: null, message: '' });
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setSubmitStatus({ type: null, message: '' });
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateStep();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const payload = new FormData();
      const composedSubject = formData.projectTitle || 'New Feasibility Request';
      const composedMessage = `
Feasibility Request Details

Contact Information
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company/Organization: ${formData.company}
- Position/Title: ${formData.designation}

Project Overview
- Project Title: ${formData.projectTitle}
- Study Objectives: ${formData.objectives}

Sample Requirements
- Target Indications / Disease Areas: ${formData.indications}
- Required Sample Types: ${formData.sampleTypes}
- Approximate Sample Quantities / Cohort Size: ${formData.sampleQuantity}
- Key Inclusion Criteria: ${formData.inclusionCriteria}
- Key Exclusion Criteria: ${formData.exclusionCriteria}

Services & Timeline
- Services Required: ${formData.servicesNeeded}
- Desired Timelines & Milestones: ${formData.timeline}
- Preferred Regions / Sites: ${formData.regions}
- Regulatory/Ethics Status: ${formData.regulatoryStatus}
- Budget Range (if available): ${formData.budgetRange}

Additional Information
${formData.additionalInfo}
      `.trim();

      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('subject', composedSubject);
      payload.append('message', composedMessage);

      const result = await sendEmail(payload, '/api/feasibility-request');

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setIsSubmitted(true);
        setFormData(initialFormState);
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred while submitting your request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
            <FiCheckCircle className="text-primary-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Thank you for your request</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Our team will review your feasibility requirements and get back to you with a detailed assessment and next
            steps shortly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold shadow-md hover:bg-primary-500 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      );
    }

    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="step-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="your.email@organization.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="Your organization name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-slate-700 mb-2">
                  Position / Title
                </label>
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="e.g., Clinical Project Manager"
                />
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="projectTitle" className="block text-sm font-medium text-slate-700 mb-2">
                Project Title / Study Name <span className="text-red-500">*</span>
              </label>
              <input
                id="projectTitle"
                name="projectTitle"
                type="text"
                value={formData.projectTitle}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                placeholder="Working title of your study or program"
                required
              />
            </div>
            <div>
              <label htmlFor="objectives" className="block text-sm font-medium text-slate-700 mb-2">
                Study Objectives <span className="text-red-500">*</span>
              </label>
              <textarea
                id="objectives"
                name="objectives"
                value={formData.objectives}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="Briefly describe the research questions, endpoints, or hypotheses you are aiming to address."
                required
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="indications" className="block text-sm font-medium text-slate-700 mb-2">
                Target Indications / Disease Areas <span className="text-red-500">*</span>
              </label>
              <input
                id="indications"
                name="indications"
                type="text"
                value={formData.indications}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                placeholder="e.g., Breast cancer, TB, NASH"
                required
              />
            </div>
            <div>
              <label htmlFor="sampleTypes" className="block text-sm font-medium text-slate-700 mb-2">
                Required Sample Types <span className="text-red-500">*</span>
              </label>
              <textarea
                id="sampleTypes"
                name="sampleTypes"
                value={formData.sampleTypes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="e.g., FFPE tumor tissue, matched normal tissue, serum, plasma, PBMC, CSF, etc."
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sampleQuantity" className="block text-sm font-medium text-slate-700 mb-2">
                  Approximate Sample Quantities / Cohort Size <span className="text-red-500">*</span>
                </label>
                <input
                  id="sampleQuantity"
                  name="sampleQuantity"
                  type="text"
                  value={formData.sampleQuantity}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="e.g., 100 FFPE blocks, 200 plasma samples"
                  required
                />
              </div>
              <div>
                <label htmlFor="inclusionCriteria" className="block text-sm font-medium text-slate-700 mb-2">
                  Key Inclusion Criteria
                </label>
                <textarea
                  id="inclusionCriteria"
                  name="inclusionCriteria"
                  value={formData.inclusionCriteria}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                  placeholder="Age range, disease stage, treatment status, biomarkers, etc."
                />
              </div>
            </div>
            <div>
              <label htmlFor="exclusionCriteria" className="block text-sm font-medium text-slate-700 mb-2">
                Key Exclusion Criteria
              </label>
              <textarea
                id="exclusionCriteria"
                name="exclusionCriteria"
                value={formData.exclusionCriteria}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="Any specific conditions or factors to exclude from recruitment."
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="servicesNeeded" className="block text-sm font-medium text-slate-700 mb-2">
                Services Required <span className="text-red-500">*</span>
              </label>
              <textarea
                id="servicesNeeded"
                name="servicesNeeded"
                value={formData.servicesNeeded}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="e.g., retrospective collections, prospective recruitment, sample processing, logistics, data management, etc."
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                  Desired Timelines & Key Milestones <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                  placeholder="Target start date, enrollment period, delivery windows, etc."
                  required
                />
              </div>
              <div>
                <label htmlFor="regions" className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Regions / Sites
                </label>
                <textarea
                  id="regions"
                  name="regions"
                  value={formData.regions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                  placeholder="Geographies, site types, or specific partner preferences."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="regulatoryStatus" className="block text-sm font-medium text-slate-700 mb-2">
                  Regulatory / Ethics Status
                </label>
                <input
                  id="regulatoryStatus"
                  name="regulatoryStatus"
                  type="text"
                  value={formData.regulatoryStatus}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="e.g., Protocol drafted, IEC submission planned, approvals in place."
                />
              </div>
              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700 mb-2">
                  Estimated Budget Range (optional)
                </label>
                <input
                  id="budgetRange"
                  name="budgetRange"
                  type="text"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="e.g., USD 50k–100k"
                />
              </div>
            </div>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-gray-900"
                placeholder="Any other details, documents already available, or specific considerations."
              />
            </div>
          </motion.div>
        );
      case 4:
      default:
        return (
          <motion.div
            key="step-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-slate-900">Review Your Feasibility Request</h2>
            <p className="text-sm text-slate-600">
              Please review the details below before submitting. Our team will use this information to prepare a tailored
              feasibility assessment and quote.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Contact Information</h3>
                  <p className="text-slate-600">
                    <strong>Name:</strong> {formData.name || '—'}
                    <br />
                    <strong>Email:</strong> {formData.email || '—'}
                    <br />
                    <strong>Phone:</strong> {formData.phone || '—'}
                    <br />
                    <strong>Company:</strong> {formData.company || '—'}
                    <br />
                    <strong>Title:</strong> {formData.designation || '—'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Project Overview</h3>
                  <p className="text-slate-600">
                    <strong>Title:</strong> {formData.projectTitle || '—'}
                    <br />
                    <strong>Objectives:</strong> {formData.objectives || '—'}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb1">Sample Requirements</h3>
                  <p className="text-slate-600">
                    <strong>Indications:</strong> {formData.indications || '—'}
                    <br />
                    <strong>Sample Types:</strong> {formData.sampleTypes || '—'}
                    <br />
                    <strong>Quantities / Cohort Size:</strong> {formData.sampleQuantity || '—'}
                    <br />
                    <strong>Inclusion Criteria:</strong> {formData.inclusionCriteria || '—'}
                    <br />
                    <strong>Exclusion Criteria:</strong> {formData.exclusionCriteria || '—'}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Services & Timeline</h3>
                  <p className="text-slate-600">
                    <strong>Services Needed:</strong> {formData.servicesNeeded || '—'}
                    <br />
                    <strong>Timelines & Milestones:</strong> {formData.timeline || '—'}
                    <br />
                    <strong>Regions / Sites:</strong> {formData.regions || '—'}
                    <br />
                    <strong>Regulatory Status:</strong> {formData.regulatoryStatus || '—'}
                    <br />
                    <strong>Budget Range:</strong> {formData.budgetRange || '—'}
                    <br />
                    <strong>Additional Info:</strong> {formData.additionalInfo || '—'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                Feasibility Request
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Share your biospecimen requirements for a tailored, data-driven feasibility assessment from our expert
              team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Wizard */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepProgress steps={steps} currentStep={isSubmitted ? steps.length - 1 : currentStep} />

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8"
          >
            <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

            {submitStatus.type && !isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 flex items-center space-x-2 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-primary-50 text-primary-800 border border-primary-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <FiCheckCircle size={20} />
                ) : (
                  <FiAlertCircle size={20} />
                )}
                <span className="text-sm font-medium">{submitStatus.message}</span>
              </motion.div>
            )}

            {!isSubmitted && (
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0 || isSubmitting}
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiArrowLeft className="mr-2" size={18} />
                  Previous
                </button>
                <div className="flex-1" />
                {currentStep < steps.length - 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-semibold shadow-md hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <FiArrowRight className="ml-2" size={18} />
                  </button>
                )}
                {currentStep === steps.length - 1 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-semibold shadow-md hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="animate-spin mr-2" size={18} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <FiCheckCircle className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}

