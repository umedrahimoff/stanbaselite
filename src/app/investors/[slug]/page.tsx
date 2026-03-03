import { notFound } from "next/navigation";
import Link from "next/link";
import { investors, companies } from "@/data/mock";
import { Card, DetailSection } from "@/components/ui";

export async function generateStaticParams() {
  return investors.map((inv) => ({ slug: inv.slug }));
}

export default async function InvestorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const investor = investors.find((inv) => inv.slug === slug);
  if (!investor) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{investor.name}</h1>
        <p className="text-gray-500">{investor.type} | {investor.location}</p>
        <p className="text-sm text-gray-500 mt-2">Number of investments: {investor.investments}</p>
      </div>

      <DetailSection title="Portfolio">
        <p className="text-gray-500 text-sm mb-4">Unlock Pro access to view portfolio companies</p>
        <Link href="/profile/subscriptions" className="text-[var(--accent)] hover:underline text-sm font-medium">
          Subscribe Now
        </Link>
      </DetailSection>

      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Related companies</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {companies.slice(0, 6).map((c) => (
            <Card key={c.slug} href={`/companies/${c.slug}`} className="p-4">
              <h3 className="font-medium text-gray-900">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.industries.join(", ")} | {c.stage}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
