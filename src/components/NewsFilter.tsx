'use client';

import { useState } from "react";

type Props = {
  onFilter: (category: string) => void;
};

const categories = [
  { value: "", label: "Todas" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

export default function NewsFilter({ onFilter }: Props) {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(category);
  };

  return (
    <div className="flex justify-center pt-10 pb-6 px-4 sm:px-0">
      {/* Mobile Form (visible only below sm) */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 p-6 bg-white shadow-lg rounded-xl border border-gray-200 sm:hidden"
      >
        <label className="text-sm text-gray-700 mb-2 font-semibold">
          Categoría
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white border border-gray-300 rounded-md px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-7 py-3 rounded-md text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition duration-300"
        >
          Filtrar
        </button>
      </form>

      {/* Desktop Form (visible from sm upwards) */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl hidden sm:flex flex-row gap-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200 items-center"
      >
        <div className="flex flex-col flex-grow min-w-[180px]">
          <label className="text-sm text-gray-700 mb-2 font-semibold">
            Categoría
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-4 py-3.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex sm:flex-shrink-0 justify-center sm:justify-start w-full sm:w-auto mt-4 sm:mt-0">
          <button
            type="submit"
            className="bg-blue-600 text-white px-7 py-3 mt-6 rounded-md text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition duration-300"
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}
