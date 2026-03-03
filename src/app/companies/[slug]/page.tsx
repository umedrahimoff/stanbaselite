import { notFound } from "next/navigation";
import Link from "next/link";
import { companies } from "@/data/mock";

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const similar = companies.filter((c) => c.slug !== slug).slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
        {company.description && (
          <p className="text-gray-600 mb-4">{company.description}</p>
        )}
        <p className="text-gray-500 text-sm">{company.location}</p>
        {company.employees && (
          <p className="text-gray-500 text-sm">{company.employees} employees</p>
        )}
        {company.website && (
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
            {company.website.replace(/^https?:\/\//, "")}
          </a>
        )}
        <div className="flex gap-2 mt-2">
          <span className="bg-gray-100 px-2 py-1 rounded text-sm">{company.industries.join(", ")}</span>
          <span className="bg-gray-100 px-2 py-1 rounded text-sm">{company.stage}</span>
        </div>
      </div>

      <section className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="font-semibold text-gray-900 mb-4">About company</h2>
        <p className="text-gray-600 text-sm mb-4">
          {company.description || "Full description available with Pro access."}
        </p>
        <p className="text-sm text-gray-500">Stage: {company.stage}</p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="font-semibold text-gray-900 mb-4">Team</h2>
        <p className="text-gray-500 text-sm mb-4">Unlock Pro access to view more information</p>
        <Link href="/profile/subscriptions" className="text-blue-600 hover:underline text-sm font-medium">
          Subscribe Now
        </Link>
      </section>

      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Similar companies</h2>
        <div className="space-y-3">
          {similar.map((c) => (
            <Link
              key={c.slug}
              href={`/companies/${c.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300"
            >
              <h3 className="font-medium text-gray-900">{c.name}</h3>
              <p className="text-sm text-gray-500">
                {c.industries.join(", ")} | {c.location} | {c.stage}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
