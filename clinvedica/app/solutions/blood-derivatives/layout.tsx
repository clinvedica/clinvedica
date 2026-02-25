import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blood & Derivatives',
  description:
    'Serum, plasma, buffy coat, PBMC, BMMNC. Controlled biospecimen collection for biomarker discovery, flow cytometry, and genomics.',
};

export default function BloodDerivativesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
