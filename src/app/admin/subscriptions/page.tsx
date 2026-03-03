import { Button } from "@/components/ui";

const plans = [
  { name: "Pro Month", price: "$9.99 / month", desc: "Full access to all Stanbase data and features." },
  { name: "Pro 3 months", price: "$26.99 / month", desc: "Full access to all Stanbase data and features." },
  { name: "Pro 6 months", price: "$49.99 / month", desc: "Full access to all Stanbase data and features." },
  { name: "Pro Year", price: "$89.99 / year", desc: "Full access to all Stanbase data and features." },
];

export default function AdminSubscriptionsPage() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Available subscription plans</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
            <p className="text-lg font-bold text-gray-900 mb-4">{plan.price}</p>
            <Button>Buy subscription</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
