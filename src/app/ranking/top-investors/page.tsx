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
import { topInvestors, investorCountries, topInvestorsYears } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export default function TopInvestorsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All countries");
  const [year, setYear] = useState("All years");
  const [page, setPage] = useState(1);

  const filtered = topInvestors.filter((inv) => {
    const matchSearch = !search || inv.name.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "All countries" || inv.country === country;
    const matchYear = year === "All years";
    return matchSearch && matchCountry && matchYear;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetPage = () => setPage(1);

  const columns = [
    { key: "rank", header: "Rank", render: (inv: (typeof topInvestors)[0]) => inv.rank },
    {
      key: "name",
      header: "Name",
      render: (inv: (typeof topInvestors)[0]) => (
        <Link href={`/investors/${inv.slug}`} className="font-medium text-gray-900 hover:text-[var(--accent)]">
          {inv.name}
        </Link>
      ),
    },
    { key: "country", header: "Country", render: (inv: (typeof topInvestors)[0]) => inv.country },
    { key: "rounds", header: "Rounds", render: (inv: (typeof topInvestors)[0]) => inv.rounds },
    { key: "lastActivity", header: "Last Activity", render: (inv: (typeof topInvestors)[0]) => inv.lastActivity },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Top investors by total investment amount</PageTitle>

      <FilterBar
        searchPlaceholder="Investor name..."
        searchValue={search}
        onSearchChange={(v) => { setSearch(v); resetPage(); }}
        onSearch={resetPage}
      >
        <Select
          value={country}
          onChange={(e) => { setCountry(e.target.value); resetPage(); }}
          placeholder="All countries"
          options={investorCountries}
        />
        <Select
          value={year}
          onChange={(e) => { setYear(e.target.value); resetPage(); }}
          placeholder="All years"
          options={topInvestorsYears}
        />
      </FilterBar>

      <DataTable columns={columns} data={paginated} getRowKey={(inv) => inv.slug} />

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
