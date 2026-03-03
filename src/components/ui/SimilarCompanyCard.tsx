import Link from "next/link";
import { Tag } from "./Tag";

interface SimilarCompanyCardProps {
  slug: string;
  name: string;
  industries: string[];
  location: string;
  stage: string;
  logoText?: string;
}

export function SimilarCompanyCard({ slug, name, industries, location, stage, logoText }: SimilarCompanyCardProps) {
  const initials = logoText || name.slice(0, 2).toUpperCase();
  return (
    <Link
      href={`/companies/${slug}`}
      className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition"
    >
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{industries.join(", ")}</p>
          <p className="text-xs text-gray-500 truncate">{location}</p>
          <Tag variant="stage" className="mt-2">
            {stage}
          </Tag>
        </div>
      </div>
    </Link>
  );
}
