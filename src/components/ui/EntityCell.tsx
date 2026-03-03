import Link from "next/link";
import { AvatarPlaceholder } from "./AvatarPlaceholder";

interface EntityCellProps {
  href: string;
  name: string;
}

export function EntityCell({ href, name }: EntityCellProps) {
  return (
    <Link href={href} className="flex items-center gap-3 hover:text-[var(--accent)]">
      <AvatarPlaceholder text={name} size="sm" />
      <span className="font-medium text-gray-900">{name}</span>
    </Link>
  );
}
