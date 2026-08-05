"use client"; // ⚠️ WAJIB ADA DI BARIS PERTAMA

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";

const MapPengepul = dynamic(
  () => import("@/components/peta/MapPengepul"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8F71] mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat peta...</p>
        </div>
      </div>
    ),
  }
);

export default function PetaPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-100">
        <Container>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53] mb-4">
              Peta Sebaran
            </span>
            <h1 className="text-4xl font-bold text-[#2F2F2F] mb-3">
              Lokasi Usaha dalam Satu Peta
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Visualisasi sebaran seluruh pengepul rotan di Desa Leuwilaja.
            </p>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <Container>
          <MapPengepul />
        </Container>
      </section>
    </div>
  );
}