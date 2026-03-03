"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-[var(--accent)] lowercase">
            stanbase
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/companies"
              className={pathname?.startsWith("/companies") ? "text-[var(--accent)] font-medium" : "text-gray-600 hover:text-gray-900"}
            >
              Companies
            </Link>
            <Link href="/investors" className="text-gray-600 hover:text-gray-900">
              Investors
            </Link>
            <Link
              href="/rounds"
              className={pathname?.startsWith("/rounds") ? "text-[var(--accent)] font-medium" : "text-gray-600 hover:text-gray-900"}
            >
              Rounds
            </Link>
            <Link href="/ranking" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              Ranking
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/more" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span className="text-orange-500 font-bold text-lg">#</span>
              <span className="text-sm">Admin</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
