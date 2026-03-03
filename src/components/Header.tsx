"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarPlaceholder } from "@/components/ui";

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
            <div className="relative group">
              <Link
                href="/ranking/top-investors"
                className={`flex items-center gap-1 ${pathname?.startsWith("/ranking") ? "text-[var(--accent)] font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                Ranking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[180px]">
                  <Link
                    href="/ranking/top-investors"
                    className={`block px-4 py-2 text-sm ${pathname === "/ranking/top-investors" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    Top Investors
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/news"
                className={`flex items-center gap-1 ${["/news", "/vacancies", "/events", "/accelerators", "/governments"].includes(pathname || "") ? "text-[var(--accent)] font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[180px]">
                  <Link href="/news" className={`block px-4 py-2 text-sm ${pathname === "/news" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}>News</Link>
                  <Link href="/vacancies" className={`block px-4 py-2 text-sm ${pathname === "/vacancies" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}>Vacancies</Link>
                  <Link href="/events" className={`block px-4 py-2 text-sm ${pathname === "/events" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}>Events</Link>
                  <Link href="/accelerators" className={`block px-4 py-2 text-sm ${pathname === "/accelerators" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}>Accelerators</Link>
                  <Link href="/governments" className={`block px-4 py-2 text-sm ${pathname === "/governments" ? "text-[var(--accent)] font-medium bg-[var(--accent)]/5" : "text-gray-600 hover:bg-gray-50"}`}>Governments</Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/admin/profile" className={`flex items-center gap-2 ${pathname?.startsWith("/admin") ? "text-[var(--accent)] font-medium" : "text-gray-600 hover:text-gray-900"}`}>
              <span className="text-orange-500 font-bold text-lg">#</span>
              <span className="text-sm">Admin</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <AvatarPlaceholder text="Admin" size="sm" variant="circle" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
