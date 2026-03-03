"use client";

import { useState } from "react";
import { PageTitle, Card, Pagination } from "@/components/ui";
import { news } from "@/data/mock";

const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const paginated = news.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PageTitle>News</PageTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginated.map((n) => (
          <Card key={n.slug} href={`/news/${n.slug}`}>
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{n.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {n.date}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {n.views}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={news.length}
        onPageChange={setPage}
      />
    </div>
  );
}
