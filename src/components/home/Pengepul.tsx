import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PengepulCard } from "@/components/pengepul/PengepulCard";
import { pengepul } from "@/data/pengepul";

export function Pengepul() {
  const preview = pengepul.slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53]">
            Pengepul Rotan
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[#2F2F2F]">
            Pelaku Usaha Rotan Desa Leuwilaja
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Kenali para pengepul dan pengrajin rotan yang telah lama menjadi 
            tulang punggung ekonomi Desa Leuwilaja. Setiap usaha memiliki 
            cerita, keahlian, dan produk unggulan tersendiri.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {preview.map((p) => (
            <PengepulCard key={p.id} data={p} />
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="mt-12 text-center">
          <Link
            href="/pengepul"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#6B8F71] bg-white px-8 py-3.5 text-base font-semibold text-[#6B8F71] transition-all duration-300 hover:bg-[#6B8F71] hover:text-white hover:shadow-lg"
          >
            Lihat Semua Pengepul
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}