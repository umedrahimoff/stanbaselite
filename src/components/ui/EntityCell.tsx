import Link from "next/link";

interface EntityCellProps {
  href: string;
  name: string;
}

export function EntityCell({ href, name }: EntityCellProps) {
  return (
    <Link href={href} className="flex items-center gap-3 hover:text-[var(--accent)]">
      <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0" />
      <span className="font-medium text-gray-900">{name}</span>
    </Link>
  );
}
