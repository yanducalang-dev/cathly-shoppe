"use client";

import { useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

const categories = ["All", "New Arrival", "Dresses", "T-Shirts", "Shorts"];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-100">
      <section className="relative h-[350px]">
  <img
    src="/gallery-banner.jpg"
    className="absolute inset-0 h-full w-full object-cover"
    alt="Gallery Banner"
  />

  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold">Our Collection</h1>
      <p className="mt-4 text-xl">
        Discover the latest fashion trends.
      </p>
    </div>
  </div>
</section>
    <main className="mx-auto max-w-7xl px-6 py-20">
     

      <input
        type="text"
        placeholder="Search products..."
        className="mb-8 w-full rounded-lg border p-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 ${
              selectedCategory === category
                ? "bg-slate-900 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      </main>
      </main>
  );
}