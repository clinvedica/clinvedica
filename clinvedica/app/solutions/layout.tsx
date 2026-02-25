import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Biospecimen solutions: tissue samples, blood derivatives, biofluids, and matched sets. Ethically sourced for research and diagnostics.',
};

export default function SolutionsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
