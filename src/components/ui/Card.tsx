import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ href, children, className = "" }: CardProps) {
  const baseClass = "block bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition";
  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${baseClass} ${className}`}>{children}</div>;
}
