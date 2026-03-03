import { Button } from "./Button";

interface PaginationProps {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

export function Pagination({
  page,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationProps) {
  const start = (page - 1) * itemsPerPage + 1;
  const end = Math.min(page * itemsPerPage, totalItems);
  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPages) },
    (_, i) => i + 1
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
      <p className="text-sm text-gray-500">
        Shown {start}-{end} of {totalItems} records
      </p>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Back
        </Button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-4 py-2 rounded-lg text-sm ${
              page === p
                ? "bg-[var(--accent)] text-white"
                : "border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        ))}
        <Button
          variant="ghost"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          Forward
        </Button>
      </div>
    </div>
  );
}
