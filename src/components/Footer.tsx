import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Stanbase ® 2025 All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
              About
            </Link>
            <Link href="/public-offer" className="text-gray-600 hover:text-gray-900 text-sm">
              Public Offer
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
