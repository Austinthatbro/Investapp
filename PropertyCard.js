import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-72 flex-shrink-0">
      <img
        src={property.image}
        alt={property.address}
        className="rounded-t-2xl w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.address}</h2>
        <p className="text-sm text-gray-600">
          Purchased for: ${property.purchasePrice.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          Loan Balance: ${property.loanBalance.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          Purchased On: {property.purchaseDate}
        </p>
        <button className="mt-3 bg-gray-200 text-gray-700 px-4 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
