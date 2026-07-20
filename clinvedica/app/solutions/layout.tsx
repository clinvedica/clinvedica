import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biospecimen Solutions from Jalandhar, Punjab',
  description:
    'Biospecimen solutions from Clin Vedica Life Sciences in Jalandhar, Punjab, India: tissue samples, blood derivatives, biofluids, and matched sets — ethically sourced for research and diagnostics.',
  keywords: [
    'biospecimen solutions India',
    'tissue samples Punjab',
    'blood derivatives Jalandhar',
    'biofluids India',
    'matched set biospecimens',
  ],
  openGraph: {
    title: 'Biospecimen Solutions | Clin Vedica Jalandhar',
    description:
      'Tissue, blood, biofluids, and matched sets from our Jalandhar, Punjab network for global research.',
  },
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
