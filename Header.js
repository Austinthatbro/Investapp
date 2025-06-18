import React from "react";
import { FaChartBar } from "react-icons/fa";

export default function Header({ total }) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <FaChartBar className="text-blue-600" /> My Properties
      </h1>
      <p className="text-lg text-gray-700 mt-1">
        Total Investment: ${total.toLocaleString()}
      </p>
    </div>
  );
}
