"use client";

import { useState } from "react";
import {
  PageTitle,
  FilterBar,
  Select,
  DataTable,
  Pagination,
  EntityCell,
} from "@/components/ui";
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

  const resetPage = () => setPage(1);

  const columns = [
    {
      key: "company",
      header: "Company",
      render: (c: (typeof companies)[0]) => (
        <EntityCell href={`/companies/${c.slug}`} name={c.name} />
      ),
    },
    { key: "industries", header: "Industries", render: (c: (typeof companies)[0]) => c.industries.join(", ") },
    { key: "stage", header: "Stage", render: (c: (typeof companies)[0]) => c.stage },
    { key: "location", header: "Location", render: (c: (typeof companies)[0]) => c.location },
    { key: "lastRound", header: "Last round", render: (c: (typeof companies)[0]) => c.lastRound },
    { key: "totalFunding", header: "Total funding", render: (c: (typeof companies)[0]) => c.totalFunding },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Companies</PageTitle>

      <FilterBar
        searchPlaceholder="Company name..."
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
          value={stage}
          onChange={(e) => { setStage(e.target.value); resetPage(); }}
          placeholder="All stages"
          options={stages}
        />
        <Select
          value={industry}
          onChange={(e) => { setIndustry(e.target.value); resetPage(); }}
          placeholder="All industries"
          options={industries}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        data={paginated}
        getRowKey={(c) => c.slug}
      />

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
