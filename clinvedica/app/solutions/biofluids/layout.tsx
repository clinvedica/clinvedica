import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biofluids',
  description:
    'Urine, saliva, CSF, synovial fluid, ascites. Non-invasive and minimally invasive biospecimens for metabolomics and liquid biopsy.',
};

export default function BiofluidsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
