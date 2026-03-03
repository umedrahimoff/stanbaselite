"use client";

import { useState } from "react";
import { PageTitle, Select, Card, Input } from "@/components/ui";
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageTitle>Events</PageTitle>

      <div className="flex flex-wrap items-center gap-3 mb-6">
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
        <Input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filtered.map((e) => (
          <Card key={e.id} href={`/events/${e.id}`}>
            <h3 className="font-semibold text-gray-900 mb-2">{e.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{e.date}</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium">
                {e.format}
              </span>
              <span className="text-sm text-gray-500">{e.location}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
