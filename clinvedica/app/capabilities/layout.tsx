import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Laboratory infrastructure, sample processing, data and informatics, and project management for biospecimen research.',
};

export default function CapabilitiesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
