import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pengepul } from "@/data/pengepul";

export function Hero() {
  const totalRt = new Set(pengepul.map((p) => p.rt)).size;
  const totalPengepul = pengepul.length;
  const totalProduk = new Set(pengepul.flatMap((p) => p.produk)).size;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-emerald-50/30 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full mb-6">
            DIREKTORI
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight">
            Jelajahi Sentra{" "}
            <span className="text-emerald-700">Pengepul Rotan</span>{" "}
            Desa Leuwilaja
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Temukan lokasi pengepul rotan, jenis produk unggulan, dokumentasi
            usaha, serta informasi lengkap setiap pelaku usaha yang menjadi bagian
            dari sentra kerajinan rotan Desa Leuwilaja.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/peta">
              <Button size="lg" className="gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lihat Peta Interaktif
              </Button>
            </Link>
            <Link href="/pengepul">
              <Button variant="secondary" size="lg" className="gap-2 bg-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Jelajahi Produk
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: RT */}
            <div className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-stone-900">{totalRt}</p>
                  <p className="text-xs font-medium text-stone-600">RT Terdokumentasi</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-500">Seluruh wilayah Desa Leuwilaja</p>
            </div>

            {/* Card 2: Pengepul */}
            <div className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-stone-900">{totalPengepul}+</p>
                  <p className="text-xs font-medium text-stone-600">Pengepul Rotan</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-500">Pelaku usaha aktif</p>
            </div>

            {/* Card 3: Produk */}
            <div className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-stone-900">{totalProduk}+</p>
                  <p className="text-xs font-medium text-stone-600">Jenis Produk</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-500">Kerajinan rotan berkualitas</p>
            </div>

            {/* Card 4: Data Lapangan */}
            <div className="p-5 bg-white rounded-2xl border border-stone-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-stone-900">100%</p>
                  <p className="text-xs font-medium text-stone-600">Data Lapangan</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-500">Hasil pendataan langsung</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}