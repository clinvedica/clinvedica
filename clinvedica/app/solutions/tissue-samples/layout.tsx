import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tissue Samples',
  description:
    'FFPE, frozen, normal adjacent, and diseased tissues. High-quality biospecimens for histology, IHC, NGS, and biomarker research.',
};

export default function TissueSamplesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
