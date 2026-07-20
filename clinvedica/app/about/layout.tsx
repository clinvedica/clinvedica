import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Biospecimen Partner in Jalandhar, Punjab',
  description:
    'About Clin Vedica Life Sciences — a Jalandhar, Punjab, India based biospecimen partner delivering ethical, compliant human biospecimens for global biomedical research and drug discovery.',
  keywords: [
    'Clin Vedica about',
    'biospecimen company Punjab',
    'life sciences Jalandhar',
    'India biospecimen procurement',
  ],
  openGraph: {
    title: 'About Clin Vedica Life Sciences | Jalandhar, Punjab',
    description:
      'Learn about our mission as a Jalandhar-based biospecimen partner serving global research.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
