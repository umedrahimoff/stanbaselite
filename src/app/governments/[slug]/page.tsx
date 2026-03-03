import { notFound } from "next/navigation";
import { governments } from "@/data/mock";
import { PageTitle, DetailSection } from "@/components/ui";

export async function generateStaticParams() {
  return governments.map((g) => ({ slug: g.slug }));
}

export default async function GovernmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gov = governments.find((g) => g.slug === slug);
  if (!gov) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageTitle>{gov.name}</PageTitle>
      <p className="text-gray-500 mb-8">{gov.location} | {gov.type}</p>
      <DetailSection title="About">
        <p className="text-gray-600 text-sm">Government office profile. More details coming soon.</p>
      </DetailSection>
    </div>
  );
}
