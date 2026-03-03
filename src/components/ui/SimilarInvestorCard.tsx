import Link from "next/link";
import { AvatarPlaceholder } from "./AvatarPlaceholder";

interface SimilarInvestorCardProps {
  slug: string;
  name: string;
  type: string;
  location: string;
}

export function SimilarInvestorCard({ slug, name, type, location }: SimilarInvestorCardProps) {
  return (
    <Link
      href={`/investors/${slug}`}
      className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition"
    >
      <div className="flex gap-3">
        <AvatarPlaceholder text={name} size="md" variant="circle" />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{type}</p>
          <p className="text-xs text-gray-500 truncate">{location}</p>
        </div>
      </div>
    </Link>
  );
}
