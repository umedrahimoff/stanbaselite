"use client";

import { useState } from "react";
import Link from "next/link";
import { companies, countries, stages, industries } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export function CompaniesClient({ initialSearch = "" }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch);
  const [country, setCountry] = useState("All countries");
  const [stage, setStage] = useState("All stages");
  const [industry, setIndustry] = useState("All industries");
  const [page, setPage] = useState(1);

  const filtered = companies.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.industries.some((i) => i.toLowerCase().includes(search.toLowerCase()));
    const matchCountry = country === "All countries" || c.location.includes(country);
    const matchStage = stage === "All stages" || c.stage === stage;
    const matchIndustry = industry === "All industries" || c.industries.includes(industry);
    return matchSearch && matchCountry && matchStage && matchIndustry;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Companies</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={country}
          onChange={(e) => { setCountry(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All countries</option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={stage}
          onChange={(e) => { setStage(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All stages</option>
          {stages.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select
          value={industry}
          onChange={(e) => { setIndustry(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All industries</option>
          {industries.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 max-w-xs"
        />
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
          Export
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginated.map((c) => (
          <Link
            key={c.slug}
            href={`/companies/${c.slug}`}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition"
          >
            <h3 className="font-semibold text-gray-900 mb-1">{c.name}</h3>
            <p className="text-sm text-gray-500">
              {c.industries.join(", ")} | {c.stage} | {c.location} | {c.lastRound} | {c.totalFunding}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Shown {(page - 1) * ITEMS_PER_PAGE + 1}-{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} records
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50"
        >
          Back
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg text-sm ${page === p ? "bg-gray-900 text-white" : "border"}`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50"
        >
          Forward
        </button>
      </div>
    </div>
  );
}
