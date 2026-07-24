import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biofluids',
  description:
    'Urine, saliva, CSF, synovial fluid, ascites, bone marrow, BMMNC. Non-invasive and specialized biospecimens for metabolomics, liquid biopsy, and translational research.',
};

export default function BiofluidsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
