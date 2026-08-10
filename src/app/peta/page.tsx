"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { pengepul } from "@/data/pengepul";

const MapPengepul = dynamic(
  () => import("@/components/peta/MapPengepul"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8F71] mb-4"></div>
        <p className="text-gray-600 font-medium">Memuat peta sebaran...</p>
      </div>
    ),
  }
);

// Warna RT sesuai dengan legenda peta
const rtColors: Record<number, string> = {
  1: "bg-red-500",
  2: "bg-orange-500",
  3: "bg-amber-500",
  4: "bg-green-500",
  5: "bg-teal-500",
  7: "bg-blue-500",
  8: "bg-indigo-500",
  9: "bg-purple-500",
  10: "bg-violet-500",
  11: "bg-pink-500",
  12: "bg-rose-500",
  13: "bg-red-400",
  14: "bg-orange-400",
  15: "bg-amber-400",
  16: "bg-yellow-500",
};

export default function PetaPage() {
  const [showInfo, setShowInfo] = useState(false);

  // Kelompokkan pengepul berdasarkan RT
  const pengepulByRt = pengepul.reduce((acc, p) => {
    if (!acc[p.rt]) acc[p.rt] = [];
    acc[p.rt].push(p);
    return acc;
  }, {} as Record<number, typeof pengepul>);

  const sortedRts = Object.keys(pengepulByRt)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Header dengan Accordion */}
      <section className="bg-white pb-8 pt-12 border-b border-gray-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto px-4">
            <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53] mb-4">
              Peta Digital
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-3">
              Sebaran Usaha Rotan Leuwilaja
            </h1>

            {/* Tombol Toggle Info */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E8F3E8] px-5 py-2 text-sm font-semibold text-[#4E6B53] hover:bg-[#D4E8D4] transition-colors"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showInfo ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {showInfo ? "Sembunyikan Info" : "Tampilkan Info Peta"}
            </button>

            {/* Info yang muncul saat diklik */}
            {showInfo && (
              <div className="mt-6 p-6 bg-[#FAF8F5] rounded-2xl border border-gray-200 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                <h3 className="font-bold text-[#2F2F2F] mb-3">Tentang Peta Ini</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Peta ini menampilkan lokasi sebaran <strong>22 pengepul rotan</strong> di Desa Leuwilaja berdasarkan RT masing-masing. Setiap warna marker mewakili RT yang berbeda.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {sortedRts.map((rt) => (
                    <div key={rt} className="flex items-center gap-2 text-xs">
                      <div className={`w-3 h-3 rounded-full ${rtColors[rt] || "bg-gray-400"}`}></div>
                      <span className="text-gray-700">RT {rt.toString().padStart(2, "0")}</span>
                      <span className="text-gray-400">({pengepulByRt[rt].length})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 2. Map Section */}
      <section className="py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <MapPengepul />
          </div>

          {/* Hint scroll untuk mobile */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-sm text-gray-500 animate-bounce">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Geser ke bawah untuk lihat daftar per RT</span>
          </div>
        </div>
      </section>

      {/* 3. Section: Pengepul per RT dengan warna sesuai peta */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container>
          <div className="mb-8 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F2F2F]">
              Jelajahi Pengepul per RT
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Warna badge sesuai dengan marker di peta
            </p>
          </div>

          {/* Grid per RT */}
          <div className="space-y-8 px-4 md:px-0">
            {sortedRts.map((rt) => (
              <div key={rt} className="border border-gray-100 rounded-2xl p-5 md:p-6 bg-[#FAF8F5]">
                {/* Header RT */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${rtColors[rt] || "bg-gray-400"}`}></div>
                  <h3 className="text-lg font-bold text-[#2F2F2F]">
                    RT {rt.toString().padStart(2, "0")}
                  </h3>
                  <span className="text-xs text-gray-500">
                    ({pengepulByRt[rt].length} usaha)
                  </span>
                </div>

                {/* Grid Pengepul di RT ini */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {pengepulByRt[rt].map((p) => (
                    <Link
                      key={p.id}
                      href={`/pengepul/${p.slug}`}
                      className="group block rounded-xl bg-white border border-gray-200 p-4 hover:shadow-md hover:border-[#6B8F71]/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${rtColors[rt] || "bg-gray-400"}`}></div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-sm text-[#2F2F2F] group-hover:text-[#6B8F71] transition-colors line-clamp-1">
                            {p.nama}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {p.produk.slice(0, 2).join(", ")}
                          </p>
                          {p.harga && p.harga !== "-" && (
                            <p className="text-xs font-semibold text-[#6B8F71] mt-2">
                              {p.harga}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Lihat Semua (Mobile) */}
          <div className="mt-10 text-center md:hidden px-4">
            <Link
              href="/pengepul"
              className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-[#6B8F71] px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-[#5a7a60] transition-all"
            >
              Lihat Semua Daftar Pengepul
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}