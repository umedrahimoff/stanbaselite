"use client";

import { useState } from "react";
import { PageTitle, FilterBar, Select, Card } from "@/components/ui";
import { events } from "@/data/mock";

export default function EventsPage() {
  const [country, setCountry] = useState("All countries");
  const [format, setFormat] = useState("All formats");
  const [days, setDays] = useState("All days");
  const [search, setSearch] = useState("");

  const filtered = events.filter((e) => {
    const matchCountry = country === "All countries" || e.location.includes(country);
    const matchFormat = format === "All formats" || e.format === format;
    const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase());
    return matchCountry && matchFormat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageTitle>Events</PageTitle>

      <FilterBar
        searchPlaceholder="Event name..."
        searchValue={search}
        onSearchChange={setSearch}
        onSearch={() => {}}
      >
        <Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="All countries"
          options={["Uzbekistan", "Kazakhstan"]}
        />
        <Select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          placeholder="All formats"
          options={["Offline", "Online"]}
        />
        <Select
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="All days"
          options={["Today", "Tomorrow", "This week", "Next week", "This month"]}
        />
      </FilterBar>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((e) => (
          <Card key={e.id} href={`/events/${e.id}`}>
            <h3 className="font-semibold text-gray-900 mb-2">{e.title}</h3>
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {e.date}
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium">
                {e.format}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {e.location}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
