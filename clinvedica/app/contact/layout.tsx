import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Clin Vedica Life Sciences. Jalandhar, Punjab. Email, phone, and contact form for biospecimen and feasibility inquiries.',
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
