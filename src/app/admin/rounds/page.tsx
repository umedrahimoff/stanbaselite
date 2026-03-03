import { Button } from "@/components/ui";

const roundsData = [
  { date: "14.11.2025", company: "Alipos", industry: "SaaS", investors: "Umidjon Ishmuhamedov, Jahongir Ortiqxo'jayev", roundType: "-", amount: "$100,000", valuation: "N/A", country: "Uzbekistan" },
  { date: "07.04.2025", company: "Alipos", industry: "SaaS", investors: "AloqaVentures", roundType: "-", amount: "$80,000", valuation: "$1,200,000", country: "Uzbekistan" },
];

export default function AdminRoundsPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rounds</h1>
          <p className="text-gray-500 text-sm mt-1">History of rounds</p>
        </div>
        <Button>+ Add round</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 pr-4 font-medium text-gray-500">Date</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Company</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Industry</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Investors</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Round type</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Amount</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Valuation</th>
              <th className="py-3 pr-4 font-medium text-gray-500">Country</th>
              <th className="py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roundsData.map((r, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-3 pr-4 text-gray-600">{r.date}</td>
                <td className="py-3 pr-4 font-medium text-gray-900">{r.company}</td>
                <td className="py-3 pr-4 text-gray-600">{r.industry}</td>
                <td className="py-3 pr-4 text-gray-600">{r.investors}</td>
                <td className="py-3 pr-4 text-gray-600">{r.roundType}</td>
                <td className="py-3 pr-4 text-gray-600">{r.amount}</td>
                <td className="py-3 pr-4 text-gray-600">{r.valuation}</td>
                <td className="py-3 pr-4 text-gray-600">{r.country}</td>
                <td className="py-3">
                  <button className="text-gray-500 hover:text-gray-700 p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
