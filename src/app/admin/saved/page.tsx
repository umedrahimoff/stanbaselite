"use client";

import { useState } from "react";

const savedOrgs = [
  { name: "Astana Hub", type: "Investor", location: "Kazakhstan, Astana", lastUpdated: "19.02.2026" },
];

export default function AdminSavedPage() {
  const [items, setItems] = useState(savedOrgs);

  const handleUnsave = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved organizations</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 font-medium">No saved organizations</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 font-medium text-gray-500">Company name</th>
                <th className="py-3 pr-4 font-medium text-gray-500">Organization type</th>
                <th className="py-3 pr-4 font-medium text-gray-500">Country/City</th>
                <th className="py-3 pr-4 font-medium text-gray-500">Last updated</th>
                <th className="py-3 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((org, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">{org.name}</td>
                  <td className="py-3 pr-4 text-gray-600">{org.type}</td>
                  <td className="py-3 pr-4 text-gray-600">{org.location}</td>
                  <td className="py-3 pr-4 text-gray-600">{org.lastUpdated}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleUnsave(org.name)}
                      className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50"
                    >
                      Unsave
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
