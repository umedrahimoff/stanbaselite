"use client";

import { useState } from "react";
import Link from "next/link";
import { news } from "@/data/mock";

const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const paginated = news.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">News</h1>

      <div className="space-y-4 mb-8">
        {paginated.map((n) => (
          <Link
            key={n.slug}
            href={`/news/${n.slug}`}
            className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{n.title}</h3>
            <p className="text-sm text-gray-500">{n.date} {n.views}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50"
        >
          Back
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg text-sm ${page === p ? "bg-gray-900 text-white" : "border"}`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50"
        >
          Forward
        </button>
      </div>
    </div>
  );
}
