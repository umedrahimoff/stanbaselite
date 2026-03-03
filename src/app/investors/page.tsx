"use client";

import { useState } from "react";
import Link from "next/link";
import { investors, investorCountries, investorTypes } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export default function InvestorsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Country");
  const [type, setType] = useState("Type");
  const [page, setPage] = useState(1);

  const filtered = investors.filter((inv) => {
    const matchSearch = !search || inv.name.toLowerCase().includes(search.toLowerCase()) || inv.type.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "Country" || inv.location.includes(country);
    const matchType = type === "Type" || inv.type.includes(type);
    return matchSearch && matchCountry && matchType;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Investors</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={country}
          onChange={(e) => { setCountry(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>Country</option>
          {investorCountries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => { setType(e.target.value); setPage(1); }}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>Type</option>
          {investorTypes.map((t) => (
            <option key={t}>{t}</option>
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
        {paginated.map((inv) => (
          <Link
            key={inv.slug}
            href={`/investors/${inv.slug}`}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition"
          >
            <h3 className="font-semibold text-gray-900 mb-1">{inv.name}</h3>
            <p className="text-sm text-gray-500">
              {inv.investments} investments | {inv.location} | {inv.type}
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
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((p) => (
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
