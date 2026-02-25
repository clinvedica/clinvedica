import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matched Set Biospecimens',
  description:
    'Same-donor tissue, blood, and biofluids. Matched sets for multi-omics, precision medicine, and translational research.',
};

export default function MatchedSetsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
