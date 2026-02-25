import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import FooterContactForm from './FooterContactForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <FooterContactForm />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Clin Vedica</h3>
            <p className="text-sm text-gray-300">
              Powering Discovery with Ethical, Compliant, and Tailored Biospecimen Solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-area" className="hover:text-primary-400 transition-colors">
                  Therapeutic Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/tissue-samples" className="hover:text-primary-400 transition-colors">
                  Tissue Samples
                </Link>
              </li>
              <li>
                <Link href="/solutions/blood-derivatives" className="hover:text-primary-400 transition-colors">
                  Blood & Derivatives
                </Link>
              </li>
              <li>
                <Link href="/solutions/biofluids" className="hover:text-primary-400 transition-colors">
                  Biofluids
                </Link>
              </li>
              <li>
                <Link href="/solutions/matched-sets" className="hover:text-primary-400 transition-colors">
                  Matched Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-primary-400" size={18} />
                <span className="text-gray-300">
                  C-2, Sunshine Valley, Suchi Pind,
                  <br />
                  Jalandhar, Punjab - 144007, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" size={18} />
                <a href="tel:+917009810865" className="hover:text-primary-400 transition-colors">
                  +91-7009810865
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400" size={18} />
                <a href="mailto:pankaj@clinvedicalifesciences.com" className="hover:text-primary-400 transition-colors">
                  pankaj@clinvedicalifesciences.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clin Vedica Life Sciences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
