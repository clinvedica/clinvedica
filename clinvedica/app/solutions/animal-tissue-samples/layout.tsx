import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Tissue Samples',
  description:
    'Animal tissue biospecimens from Clin Vedica Life Sciences — frozen tissue and FFPE blocks & slides from research species for preclinical and veterinary studies.',
};

export default function AnimalTissueSamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
