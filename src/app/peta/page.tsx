"use client"; // ⚠️ WAJIB ADA DI BARIS PERTAMA

import dynamic from "next/dynamic";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PengepulCard } from "@/components/pengepul/PengepulCard";
import { pengepul } from "@/data/pengepul";

// Load peta secara dinamis agar tidak berat saat pertama kali load
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

export default function PetaPage() {
  // Ambil 4-8 pengepul acak/teratas untuk ditampilkan di bawah peta
  const featuredPengepul = pengepul.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Header Section */}
      <section className="bg-white pb-8 pt-12 border-b border-gray-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto px-4">
            <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53] mb-4">
              Peta Digital
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-3">
              Sebaran Usaha Rotan Leuwilaja
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Jelajahi lokasi seluruh pengepul dan pengrajin rotan secara interaktif langsung dari peta desa.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Map Section (Dibuat lebih immersive & rounded) */}
      <section className="py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <MapPengepul />
          </div>
          
          {/* Hint untuk scroll ke bawah (hanya muncul di mobile) */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-sm text-gray-500 animate-bounce">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Geser ke bawah untuk lihat daftar</span>
          </div>
        </div>
      </section>

      {/* 3. Featured List Section (Biar gak boring!) */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container>
          <div className="flex items-center justify-between mb-6 px-4 md:px-0">
            <div>
              <h2 className="text-2xl font-bold text-[#2F2F2F]">Jelajahi Pengepul</h2>
              <p className="text-sm text-gray-500 mt-1">Beberapa usaha rotan unggulan di desa kami</p>
            </div>
            <Link 
              href="/pengepul" 
              className="hidden md:inline-flex text-sm font-semibold text-[#6B8F71] hover:text-[#4E6B53] transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>

          {/* Grid 2 kolom di HP, 4 kolom di Laptop (Sesuai request mobile UI sebelumnya) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 px-4 md:px-0">
            {featuredPengepul.map((p) => (
              <PengepulCard key={p.id} data={p} />
            ))}
          </div>

          {/* Tombol Lihat Semua (Khusus Mobile, muncul di bawah) */}
          <div className="mt-8 text-center md:hidden">
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