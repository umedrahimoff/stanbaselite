"use client";

import { useState } from "react";
import Link from "next/link";
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Events</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All countries</option>
          <option>Uzbekistan</option>
          <option>Kazakhstan</option>
        </select>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All formats</option>
          <option>Offline</option>
          <option>Online</option>
        </select>
        <select
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option>All days</option>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>This week</option>
          <option>Next week</option>
          <option>This month</option>
        </select>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        />
      </div>

      <div className="space-y-4">
        {filtered.map((e) => (
          <Link
            key={e.id}
            href={`/events/${e.id}`}
            className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{e.title}</h3>
            <p className="text-sm text-gray-500">
              {e.date} | {e.format} | {e.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
