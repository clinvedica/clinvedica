import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biospecimen Solutions from Jalandhar, Punjab',
  description:
    'Human and animal biospecimen solutions from Clin Vedica Life Sciences in Jalandhar, Punjab, India: tissue samples, blood derivatives, biofluids, matched sets, and animal research matrices — ethically sourced for research and diagnostics.',
  keywords: [
    'biospecimen solutions India',
    'tissue samples Punjab',
    'blood derivatives Jalandhar',
    'biofluids India',
    'matched set biospecimens',
    'animal biospecimens India',
    'animal tissue samples',
  ],
  openGraph: {
    title: 'Biospecimen Solutions | Clin Vedica Life Sciences Jalandhar',
    description:
      'Human and animal tissue, blood, biofluids, and matched sets from our Jalandhar, Punjab network for global research.',
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
