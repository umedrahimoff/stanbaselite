import { Button, AvatarPlaceholder } from "@/components/ui";

export default function AdminOrganizationPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <AvatarPlaceholder text="Alipos" size="lg" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Alipos</h1>
            <p className="text-gray-500">Pre-Seed | Uzbekistan, Samarkand</p>
            <p className="text-sm text-gray-500">Founded 2023</p>
          </div>
        </div>
        <Button>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </span>
        </Button>
      </div>

      <section className="mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">Company information</h2>
        <p className="text-gray-600 text-sm mb-4">
          We are developing AliPos - a SaaS platform for the complete automation of restaurants, cafes, bars, coffee shops, and delivery services. In one product we combine cash register, warehouse, finance, analytics, personnel management, and mobile tools for waiters. Our goal is to make the management of an establishment transparent, convenient, and fully digital.
        </p>
        <p className="text-gray-600 text-sm">
          The company was founded in 2023 in Samarkand. We began as a self-funded project and today AliPos is used by hundreds of establishments across Uzbekistan. We continue to scale across Central Asia, offering a locally customized and comprehensive solution for the restaurant business.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-gray-900 mb-4">Additional information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Website</p>
              <a href="https://alipos.uz/ru" className="text-[var(--accent)] hover:underline">https://alipos.uz/ru</a>
            </div>
            <div>
              <p className="text-sm text-gray-500">Development stage</p>
              <p className="font-medium">Pre-Seed</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Social networks</p>
              <a href="#" className="inline-flex text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Industry</p>
              <p className="font-medium">SaaS</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">TIN</p>
              <p className="font-medium">311857629</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
