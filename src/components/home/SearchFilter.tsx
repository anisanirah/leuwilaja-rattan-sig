"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

interface SearchFilterProps {
  onSearch?: (query: string) => void;
  onFilterRt?: (rt: string) => void;
}

export function SearchFilter({ onSearch, onFilterRt }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRt, setSelectedRt] = useState("Semua RT");

  const rts = ["Semua RT", ...Array.from({ length: 16 }, (_, i) => `RT ${String(i + 1).padStart(2, "0")}`)].filter(
    (rt) => rt !== "RT 06" // RT 06 tidak ada
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleRtChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rt = e.target.value;
    setSelectedRt(rt);
    onFilterRt?.(rt);
  };

  return (
    <div className="border-y border-stone-200 bg-white">
      <Container>
        <div className="py-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari nama pengepul atau produk..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
          <div className="relative sm:w-48">
            <select
              value={selectedRt}
              onChange={handleRtChange}
              className="w-full px-4 py-3 pr-10 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
            >
              {rts.map((rt) => (
                <option key={rt} value={rt}>
                  {rt}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}