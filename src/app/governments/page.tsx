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
import { governments, investorCountries, acceleratorSectors } from "@/data/mock";

const ITEMS_PER_PAGE = 20;

export default function GovernmentsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Country");
  const [sector, setSector] = useState("Sector");
  const [page, setPage] = useState(1);

  const filtered = governments.filter((g) => {
    const matchSearch = !search || g.name.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "Country" || g.location.includes(country);
    const matchSector = sector === "Sector";
    return matchSearch && matchCountry && matchSector;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const resetPage = () => setPage(1);

  const columns = [
    {
      key: "government",
      header: "Government",
      render: (g: (typeof governments)[0]) => (
        <EntityCell href={`/governments/${g.slug}`} name={g.name} />
      ),
    },
    { key: "investments", header: "Number of Investments", render: (g: (typeof governments)[0]) => g.investments },
    { key: "location", header: "Location", render: (g: (typeof governments)[0]) => g.location },
    { key: "type", header: "Type", render: (g: (typeof governments)[0]) => g.type },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Governments</PageTitle>

      <FilterBar
        searchPlaceholder="Government..."
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

      <DataTable columns={columns} data={paginated} getRowKey={(g) => g.slug} />

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
