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

  const resetPage = () => setPage(1);

  const columns = [
    {
      key: "investor",
      header: "Investor",
      render: (inv: (typeof investors)[0]) => (
        <EntityCell href={`/investors/${inv.slug}`} name={inv.name} />
      ),
    },
    { key: "investments", header: "Number of Investments", render: (inv: (typeof investors)[0]) => inv.investments },
    { key: "location", header: "Location", render: (inv: (typeof investors)[0]) => inv.location },
    { key: "type", header: "Investor Type", render: (inv: (typeof investors)[0]) => inv.type },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Investors</PageTitle>

      <FilterBar
        searchPlaceholder="Investor name..."
        searchValue={search}
        onSearchChange={(v) => { setSearch(v); resetPage(); }}
        onSearch={resetPage}
        onExport={() => {}}
      >
        <Select
          value={country}
          onChange={(e) => { setCountry(e.target.value); resetPage(); }}
          placeholder="Country"
          options={investorCountries}
        />
        <Select
          value={type}
          onChange={(e) => { setType(e.target.value); resetPage(); }}
          placeholder="Type"
          options={investorTypes}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        data={paginated}
        getRowKey={(inv) => inv.slug}
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
