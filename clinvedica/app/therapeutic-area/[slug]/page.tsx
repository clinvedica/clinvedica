import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TherapeuticAreaDetail from '@/components/TherapeuticAreaDetail';
import {
  getTherapeuticAreaBySlug,
  therapeuticAreas,
} from '@/lib/therapeutic-areas';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return therapeuticAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getTherapeuticAreaBySlug(slug);
  if (!area) {
    return { title: 'Therapeutic Area' };
  }
  return {
    title: `${area.title} Biospecimens | Jalandhar, Punjab, India`,
    description: `${area.description} Supported by Clin Vedica Life Sciences in Jalandhar, Punjab, India.`,
  };
}

export default async function TherapeuticAreaSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getTherapeuticAreaBySlug(slug);
  if (!area) notFound();
  return <TherapeuticAreaDetail area={area} />;
}
