import { notFound } from "next/navigation";
import Link from "next/link";
import { investors, rounds, news } from "@/data/mock";
import {
  DetailSection,
  Button,
  AvatarPlaceholder,
  SimilarInvestorCard,
} from "@/components/ui";

export async function generateStaticParams() {
  return investors.map((inv) => ({ slug: inv.slug }));
}

export default async function InvestorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const investor = investors.find((inv) => inv.slug === slug);
  if (!investor) notFound();

  const inv = investor as typeof investor & {
    founded?: string;
    employees?: string;
    website?: string;
    description?: string;
    fullDescription?: string;
    legalName?: string;
    email?: string;
    linkedin?: string;
    subtype?: string;
    team?: { name: string; role: string; linkedin?: string }[];
  };

  const investorRounds = rounds.filter(
    (r) => (r as typeof r & { investorSlug?: string }).investorSlug === slug || r.investors === investor.name
  );
  const investorNews = news.filter(
    (n) => (n as typeof n & { investorSlug?: string }).investorSlug === slug
  );
  const similar = investors.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex gap-6 flex-wrap">
              <AvatarPlaceholder text={investor.name} size="xl" variant="circle" />
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{investor.name}</h1>
                {inv.description && (
                  <p className="text-gray-600 text-sm mb-4">{inv.description}</p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  {inv.founded && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Founded {inv.founded}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {investor.location}
                  </span>
                  {inv.employees && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {inv.employees}
                    </span>
                  )}
                  {inv.website && (
                    <a href={`https://${inv.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--accent)] hover:underline">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      {inv.website}
                    </a>
                  )}
                  {inv.linkedin && (
                    <a href={inv.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <Button>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Save
                  </span>
                </Button>
              </div>
            </div>
            {inv.subtype && (
              <Button variant="ghost" className="mt-4">
                {inv.subtype}
              </Button>
            )}
          </div>

          {/* Number of Rounds */}
          {investorRounds.length > 0 && (
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Number of Rounds</p>
              <p className="text-2xl font-bold text-gray-900">{investorRounds.length}</p>
            </div>
          )}

          {/* About investor */}
          <DetailSection title="About investor">
            {inv.legalName && (
              <p className="text-sm text-gray-600 mb-2"><strong>Legal name:</strong> {inv.legalName}</p>
            )}
            <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">
              {inv.fullDescription || inv.description || "Full description available with Pro access."}
            </p>
            {inv.email && (
              <p className="text-sm text-gray-600">
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${inv.email}`} className="text-[var(--accent)] hover:underline">{inv.email}</a>
              </p>
            )}
          </DetailSection>

          {/* Rounds */}
          {investorRounds.length > 0 && (
            <DetailSection title="Rounds">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-2 pr-4 font-medium text-gray-500">Company</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Date</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Investment</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Valuation</th>
                      <th className="py-2 font-medium text-gray-500">Investor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investorRounds.map((r) => (
                      <tr key={r.id} className="border-b border-gray-100">
                        <td className="py-3 pr-4">
                          <Link href={`/companies/${r.companySlug}`} className="text-[var(--accent)] hover:underline">
                            {r.company}
                          </Link>
                        </td>
                        <td className="py-3 pr-4 text-gray-600">{r.date}</td>
                        <td className="py-3 pr-4 text-gray-600">{r.amount}</td>
                        <td className="py-3 pr-4 text-gray-600">{r.valuation}</td>
                        <td className="py-3 text-gray-600">{r.investors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DetailSection>
          )}

          {/* Team */}
          <DetailSection title="Team">
            {inv.team && inv.team.length > 0 ? (
              <div className="space-y-3">
                {inv.team.map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{member.name} — {member.role}</span>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text-gray-500 text-sm mb-4">Unlock Pro access to view team information</p>
                <Link href="/admin/profile" className="text-[var(--accent)] hover:underline text-sm font-medium">
                  Subscribe Now
                </Link>
              </>
            )}
          </DetailSection>

          {/* News */}
          <DetailSection title="News">
            {investorNews.length > 0 ? (
              <div className="space-y-3">
                {investorNews.slice(0, 5).map((n) => (
                  <Link
                    key={n.slug}
                    href={`/news/${n.slug}`}
                    className="block text-gray-900 hover:text-[var(--accent)]"
                  >
                    <p className="font-medium">{n.title}</p>
                    <p className="text-sm text-gray-500">
                      {n.date}
                      {(n as typeof n & { source?: string }).source && (
                        <span>, Source: {(n as typeof n & { source?: string }).source}</span>
                      )}
                    </p>
                  </Link>
                ))}
                <Link href={`/news?investor=${slug}`} className="text-[var(--accent)] hover:underline text-sm font-medium">
                  Show all news
                </Link>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No news yet</p>
            )}
          </DetailSection>
        </div>

        {/* Sidebar - Similar investors */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-semibold text-gray-900 mb-4">Similar investors</h2>
            {similar.length > 0 ? (
              <div className="space-y-3">
                {similar.map((s) => (
                  <SimilarInvestorCard
                    key={s.slug}
                    slug={s.slug}
                    name={s.name}
                    type={s.type}
                    location={s.location}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No similar investors</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
