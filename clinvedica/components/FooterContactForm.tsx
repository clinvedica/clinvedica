'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { sendEmail } from '@/lib/emailjs';

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) return 'Please enter your message.';
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const payload = new FormData();
      const subject = 'New Contact Inquiry';
      const composedMessage = `
General Inquiry

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}

Message:
${formData.message}
      `.trim();

      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', '');
      payload.append('subject', subject);
      payload.append('message', composedMessage);

      const result = await sendEmail(payload, '/api/contact');

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-linear-to-r from-primary-50 to-teal-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Have a question or need to discuss a project?
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              Share a few details and our team will get back to you with the information you need. For detailed
              biospecimen feasibility assessments, please use the dedicated request form.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-xs font-medium text-primary-700 border border-primary-100">
                Ethics-first approach
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-xs font-medium text-primary-700 border border-primary-100">
                Pan-India network
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-xs font-medium text-primary-700 border border-primary-100">
                Audit-ready documentation
              </span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-gray-900"
                placeholder="Company, institute, or affiliation"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none text-gray-900"
                placeholder="How can we help?"
                required
              />
            </div>

            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center space-x-2 p-3 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <FiCheckCircle size={18} />
                ) : (
                  <FiAlertCircle size={18} />
                )}
                <span className="text-xs font-medium">{submitStatus.message}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-teal-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin mr-2" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

