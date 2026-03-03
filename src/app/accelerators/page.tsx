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
import { accelerators, investorCountries, acceleratorSectors } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export default function AcceleratorsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Country");
  const [sector, setSector] = useState("Sector");
  const [page, setPage] = useState(1);

  const filtered = accelerators.filter((a) => {
    const matchSearch = !search || a.name.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "Country" || a.location.includes(country);
    const matchSector = sector === "Sector";
    return matchSearch && matchCountry && matchSector;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetPage = () => setPage(1);

  const columns = [
    {
      key: "accelerator",
      header: "Accelerator",
      render: (a: (typeof accelerators)[0]) => (
        <EntityCell href={`/investors/${a.slug}`} name={a.name} />
      ),
    },
    { key: "investments", header: "Number of Investments", render: (a: (typeof accelerators)[0]) => a.investments },
    { key: "location", header: "Location", render: (a: (typeof accelerators)[0]) => a.location },
    { key: "type", header: "Type", render: (a: (typeof accelerators)[0]) => a.type },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Accelerators</PageTitle>

      <FilterBar
        searchPlaceholder="Accelerator name..."
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
          value={sector}
          onChange={(e) => { setSector(e.target.value); resetPage(); }}
          placeholder="Sector"
          options={acceleratorSectors}
        />
      </FilterBar>

      <DataTable columns={columns} data={paginated} getRowKey={(a) => a.slug} />

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
