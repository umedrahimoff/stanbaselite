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

      <div className="space-y-4 mb-8">
        {paginated.map((n) => (
          <Card key={n.slug} href={`/news/${n.slug}`}>
            <h3 className="font-semibold text-gray-900 mb-2">{n.title}</h3>
            <p className="text-sm text-gray-500">{n.date} {n.views}</p>
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
