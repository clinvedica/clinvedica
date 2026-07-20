import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us in Jalandhar, Punjab',
  description:
    'Contact Clin Vedica Life Sciences at C-2, Sunshine Valley, Suchi Pind, Jalandhar, Punjab 144007, India. Call +91-7009810865 or email for biospecimen and feasibility inquiries.',
  keywords: [
    'Clin Vedica contact',
    'biospecimen company Jalandhar',
    'life sciences Punjab contact',
    'biospecimen supplier India',
    'Suchi Pind Jalandhar',
  ],
  openGraph: {
    title: 'Contact Clin Vedica Life Sciences | Jalandhar, Punjab, India',
    description:
      'Reach our Jalandhar, Punjab team for ethical biospecimen solutions and feasibility requests.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
