import { Button } from "@/components/ui";

export default function AdminVacanciesPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vacancies</h1>
          <p className="text-gray-500 text-sm mt-1">Open positions in the company.</p>
        </div>
        <Button>+ Add vacancy</Button>
      </div>

      <div className="text-center py-16">
        <p className="text-gray-500 font-medium">No vacancies</p>
      </div>
    </div>
  );
}
