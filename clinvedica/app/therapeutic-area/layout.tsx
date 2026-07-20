import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapeutic Areas | Oncology to Nephrology — Jalandhar, India',
  description:
    'Therapeutic area biospecimen expertise from Clin Vedica in Jalandhar, Punjab, India — oncology, autoimmune, urology, dermatology, infectious diseases, cardiology, respiratory, and nephrology.',
  keywords: [
    'oncology biospecimens India',
    'nephrology biospecimens Punjab',
    'cardiology biospecimens Jalandhar',
    'autoimmune biospecimens India',
    'therapeutic area biospecimens',
  ],
  openGraph: {
    title: 'Therapeutic Areas | Clin Vedica Life Sciences Jalandhar',
    description:
      'Explore disease-area biospecimen programs supported from our Jalandhar, Punjab base.',
  },
  alternates: {
    canonical: '/therapeutic-area',
  },
};

export default function TherapeuticAreaLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
