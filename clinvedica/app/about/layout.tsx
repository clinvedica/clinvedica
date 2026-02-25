import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Clin Vedica Life Sciences mission, vision, and values. Ethical biospecimen procurement for global research and drug discovery.',
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
