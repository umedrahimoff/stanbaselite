"use client";

import { useState } from "react";
import { PageTitle, FilterBar, Select, Button } from "@/components/ui";
import { countries, salaryRanges } from "@/data/mock";

export default function VacanciesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All countries");
  const [salary, setSalary] = useState("Any salary");

  const hasFilters = search || country !== "All countries" || salary !== "Any salary";
  const showEmpty = true; // No vacancies in mock

  const resetFilters = () => {
    setSearch("");
    setCountry("All countries");
    setSalary("Any salary");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageTitle>Vacancies</PageTitle>

      <FilterBar
        searchPlaceholder="Search for a vacancy or company"
        searchValue={search}
        onSearchChange={setSearch}
        onSearch={() => {}}
      >
        <Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="All countries"
          options={countries}
        />
        <Select
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Any salary"
          options={salaryRanges.slice(1)}
        />
      </FilterBar>

      {showEmpty ? (
        <div className="text-center py-16">
          <p className="text-gray-900 font-medium mb-2">Vacancies not found</p>
          <p className="text-gray-500 text-sm mb-6">Try changing the filter parameters</p>
          {hasFilters && (
            <Button variant="secondary" onClick={resetFilters}>
              Reset filters
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
