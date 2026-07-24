import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Blood — Plasma & Serum',
  description:
    'Animal plasma and serum biospecimens from Clin Vedica Life Sciences for preclinical and veterinary research.',
};

export default function AnimalBloodBiofluidsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
