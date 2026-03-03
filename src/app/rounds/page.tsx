"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PageTitle,
  FilterBar,
  Select,
  DataTable,
  Pagination,
} from "@/components/ui";
import { rounds, countries, roundTypes } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export default function RoundsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All countries");
  const [roundType, setRoundType] = useState("All round types");
  const [page, setPage] = useState(1);

  const filtered = rounds.filter((r) => {
    const matchSearch =
      !search ||
      r.company.toLowerCase().includes(search.toLowerCase()) ||
      r.investors.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "All countries" || r.country === country;
    const matchRoundType = roundType === "All round types" || r.roundType === roundType;
    return matchSearch && matchCountry && matchRoundType;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetPage = () => setPage(1);

  const columns = [
    { key: "date", header: "Date", render: (r: (typeof rounds)[0]) => r.date },
    {
      key: "company",
      header: "Company",
      render: (r: (typeof rounds)[0]) => (
        <Link href={`/companies/${r.companySlug}`} className="font-medium text-gray-900 hover:text-[var(--accent)]">
          {r.company}
        </Link>
      ),
    },
    { key: "roundType", header: "Round type", render: (r: (typeof rounds)[0]) => r.roundType },
    { key: "investors", header: "Investors", render: (r: (typeof rounds)[0]) => r.investors },
    { key: "amount", header: "Amount", render: (r: (typeof rounds)[0]) => r.amount },
    { key: "valuation", header: "Valuation", render: (r: (typeof rounds)[0]) => r.valuation },
    { key: "country", header: "Country", render: (r: (typeof rounds)[0]) => r.country },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Rounds</PageTitle>

      <FilterBar
        searchPlaceholder="Company or investor name..."
        searchValue={search}
        onSearchChange={(v) => { setSearch(v); resetPage(); }}
        onSearch={resetPage}
        onExport={() => {}}
      >
        <Select
          value={country}
          onChange={(e) => { setCountry(e.target.value); resetPage(); }}
          placeholder="All countries"
          options={countries}
        />
        <Select
          value={roundType}
          onChange={(e) => { setRoundType(e.target.value); resetPage(); }}
          placeholder="All round types"
          options={roundTypes}
        />
      </FilterBar>

      <DataTable columns={columns} data={paginated} getRowKey={(r) => r.id} />

      <Pagination
        page={page}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={filtered.length}
        onPageChange={setPage}
      />
    </div>
  );
}
