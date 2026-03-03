import { notFound } from "next/navigation";
import Link from "next/link";
import { investors, companies } from "@/data/mock";

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

      <section className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h2 className="font-semibold text-gray-900 mb-4">Portfolio</h2>
        <p className="text-gray-500 text-sm">Unlock Pro access to view portfolio companies</p>
        <Link href="/profile/subscriptions" className="text-blue-600 hover:underline text-sm font-medium mt-2 inline-block">
          Subscribe Now
        </Link>
      </section>

      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Related companies</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {companies.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/companies/${c.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300"
            >
              <h3 className="font-medium text-gray-900">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.industries.join(", ")} | {c.stage}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
