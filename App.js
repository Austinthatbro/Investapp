import React from "react";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";

export default function App() {
  const properties = [
    {
      id: 1,
      address: "123 Main St",
      purchasePrice: 300000,
      loanBalance: 200000,
      purchaseDate: "2020-01-01",
      image: "https://via.placeholder.com/400x240"
    },
    {
      id: 2,
      address: "456 Oak Ave",
      purchasePrice: 400000,
      loanBalance: 250000,
      purchaseDate: "2021-06-15",
      image: "https://via.placeholder.com/400x240?text=Oak+Ave"
    }
  ];

  const totalInvestment = properties.reduce((s, p) => s + p.purchasePrice, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Header total={totalInvestment} />
      <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white text-4xl w-14 h-14 rounded-full shadow-lg">
        +
      </button>
    </div>
  );
}
