'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { 
      href: '/solutions', 
      label: 'Solutions',
      submenu: [
        { href: '/solutions/tissue-samples', label: 'Tissue Samples' },
        { href: '/solutions/blood-derivatives', label: 'Blood & Derivatives' },
        { href: '/solutions/biofluids', label: 'Biofluids' },
        { href: '/solutions/matched-sets', label: 'Matched Set Biospecimens' },
      ]
    },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/feasibility-request', label: 'Feasibility Request' },
    { href: '/therapeutic-area', label: 'Therapeutic Area' },
    { href: '/quality-compliance', label: 'Quality & Compliance' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 -ml-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
              Clin Vedica
            </span>
            <span className="text-sm text-gray-600 hidden sm:inline">Life Sciences</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                    <div className="py-2">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.submenu.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
