import { notFound } from "next/navigation";
import Link from "next/link";
import { companies, rounds } from "@/data/mock";
import {
  DetailSection,
  Tag,
  SimilarCompanyCard,
  Button,
  AvatarPlaceholder,
} from "@/components/ui";

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const companyRounds = rounds.filter((r) => r.companySlug === slug);
  const similar = companies.filter((c) => c.slug !== slug).slice(0, 3);

  const c = company as typeof company & {
    tagline?: string;
    founded?: string;
    legalName?: string;
    tin?: string;
    phone?: string;
    email?: string;
    instagram?: string;
    team?: { name: string; role: string; instagram?: string }[];
  };

  const totalFunding = company.totalFunding !== "N/A" ? company.totalFunding : null;
  const roundsCount = companyRounds.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview card */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex gap-6 flex-wrap">
              <AvatarPlaceholder text={company.name} size="xl" />
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{company.name}</h1>
                {(c.tagline || company.description) && (
                  <p className="text-gray-600 text-sm mb-4">
                    {c.tagline || company.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  {c.founded && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Founded {c.founded}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {company.location}
                  </span>
                  {company.employees && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {company.employees} employees
                    </span>
                  )}
                  {company.website && (
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--accent)] hover:underline">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      {company.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  )}
                  {c.instagram && (
                    <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.industries.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                  <Tag variant="stage">{company.stage}</Tag>
                </div>
                <Button>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    Save
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Funding summary */}
          {(totalFunding || roundsCount > 0) && (
            <div className="bg-white p-6 rounded-xl border border-gray-200 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Funding</p>
                <p className="text-2xl font-bold text-gray-900">{totalFunding || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Rounds</p>
                <p className="text-2xl font-bold text-gray-900">{roundsCount}</p>
              </div>
            </div>
          )}

          {/* About company */}
          <DetailSection title="About company">
            {(c.legalName || c.tin) && (
              <div className="mb-4 space-y-1">
                {c.legalName && <p className="text-sm text-gray-600"><strong>Legal name:</strong> {c.legalName}</p>}
                {c.tin && <p className="text-sm text-gray-600"><strong>TIN:</strong> {c.tin}</p>}
              </div>
            )}
            <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">
              {company.description || "Full description available with Pro access."}
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p><strong>Stage:</strong> {company.stage}</p>
              {c.phone && <p><strong>Phone:</strong> <a href={`tel:${c.phone}`} className="text-[var(--accent)] hover:underline">{c.phone}</a></p>}
              {c.email && <p><strong>Email:</strong> <a href={`mailto:${c.email}`} className="text-[var(--accent)] hover:underline">{c.email}</a></p>}
            </div>
          </DetailSection>

          {/* Rounds */}
          {companyRounds.length > 0 && (
            <DetailSection title="Rounds">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-2 pr-4 font-medium text-gray-500">Company</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Date</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Investment</th>
                      <th className="py-2 pr-4 font-medium text-gray-500">Valuation</th>
                      <th className="py-2 font-medium text-gray-500">Investors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyRounds.map((r) => (
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
            {c.team && c.team.length > 0 ? (
              <div className="space-y-3">
                {c.team.map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{member.name} — {member.role}</span>
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.766 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text-gray-500 text-sm mb-4">Unlock Pro access to view more information</p>
                <Link href="/profile/subscriptions" className="text-[var(--accent)] hover:underline text-sm font-medium">
                  Subscribe Now
                </Link>
              </>
            )}
          </DetailSection>
        </div>

        {/* Sidebar - Similar companies */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-semibold text-gray-900 mb-4">Similar companies</h2>
            <div className="space-y-3">
              {similar.map((s) => (
                <SimilarCompanyCard
                  key={s.slug}
                  slug={s.slug}
                  name={s.name}
                  industries={s.industries}
                  location={s.location}
                  stage={s.stage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
