import Link from "next/link";
import { Button, Input, Card, AvatarPlaceholder } from "@/components/ui";
import { stats, partners, companies, investors, news, events } from "@/data/mock";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find investors faster
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The most comprehensive database of startups and investors in Central Asia and the Caucasus
          </p>
          <form action="/companies" method="get" className="flex gap-2 max-w-2xl mx-auto mb-12">
            <Input
              type="search"
              name="q"
              placeholder="Search for startups, companies, investors, news..."
              className="flex-1 w-auto"
            />
            <Button type="submit" className="px-8 py-3">
              Find
            </Button>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">{stats.companies}+</p>
              <p className="text-gray-500 text-sm">Total companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">{stats.investors}+</p>
              <p className="text-gray-500 text-sm">Total investors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">{stats.funded}+</p>
              <p className="text-gray-500 text-sm">Funded companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">{stats.funding}+</p>
              <p className="text-gray-500 text-sm">Total funding raised</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--accent)]">{stats.countries}+</p>
              <p className="text-gray-500 text-sm">Countries covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-gray-500 text-sm font-medium mb-8">
            Trusted by ecosystem leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((p) => (
              <div key={p} className="w-24 h-10 flex items-center justify-center bg-gray-100 rounded text-gray-500 text-xs font-medium">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Companies</h2>
              <p className="text-gray-500 text-sm mt-1">Discover promising projects</p>
            </div>
            <Link href="/companies" className="text-[var(--accent)] hover:underline text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.slice(0, 6).map((c) => (
              <Card key={c.slug} href={`/companies/${c.slug}`} className="flex gap-4">
                <AvatarPlaceholder text={c.name} size="lg" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{c.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{c.industries.join(", ")}</p>
                  <p className="text-sm text-gray-500 mb-2">{c.location}</p>
                  <span className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded text-xs font-medium">
                    {c.stage}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Investors</h2>
              <p className="text-gray-500 text-sm mt-1">Find the right investor for your project</p>
            </div>
            <Link href="/investors" className="text-[var(--accent)] hover:underline text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.slice(0, 6).map((inv) => (
              <Card key={inv.slug} href={`/investors/${inv.slug}`} className="flex gap-4">
                <AvatarPlaceholder text={inv.name} size="lg" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{inv.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{inv.type}</p>
                  <p className="text-sm text-gray-500">{inv.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">News</h2>
              <p className="text-gray-500 text-sm mt-1">Stay updated on ecosystem events</p>
            </div>
            <Link href="/news" className="text-[var(--accent)] hover:underline text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 6).map((n) => (
              <Card key={n.slug} href={`/news/${n.slug}`}>
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{n.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{n.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {n.views}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Events</h2>
              <p className="text-gray-500 text-sm mt-1">Participate in key ecosystem events</p>
            </div>
            <Link href="/events" className="text-[var(--accent)] hover:underline text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <Card key={e.id} href={`/events/${e.id}`}>
                <h3 className="font-semibold text-gray-900 mb-2">{e.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{e.date}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium">
                    {e.format}
                  </span>
                  <span className="text-sm text-gray-500">{e.location}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
