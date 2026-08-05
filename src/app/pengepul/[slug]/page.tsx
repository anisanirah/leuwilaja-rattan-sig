import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pengepul, getPengepulBySlug } from "@/data/pengepul";
import type { Metadata } from "next";

// Generate metadata untuk SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getPengepulBySlug(slug);
  
  if (!data) {
    return {
      title: "Pengepul Tidak Ditemukan",
    };
  }

  return {
    title: `${data.nama} - RT ${data.rt.toString().padStart(2, "0")} | SIG Rotan Leuwilaja`,
    description: data.deskripsi,
  };
}

// Generate static params untuk semua slug
export async function generateStaticParams() {
  return pengepul.map((p) => ({
    slug: p.slug,
  }));
}

// Main Page Component
export default async function PengepulDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getPengepulBySlug(slug);

  if (!data) {
    notFound();
  }

  // URL Google Maps dengan koordinat
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${data.koordinat.lat},${data.koordinat.lng}`;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Back Button & Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/pengepul"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#6B8F71]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Pengepul
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* LEFT: Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
              <Image
                src={data.foto.depan}
                alt={data.nama}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            {data.foto.galeri.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {data.foto.galeri.slice(0, 4).map((foto, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-200"
                  >
                    <Image
                      src={foto}
                      alt={`${data.nama} - Foto ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Information */}
          <div className="space-y-8">
            {/* Header Info */}
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#E8F3E8] px-4 py-1.5 text-sm font-bold text-[#4E6B53]">
                  RT {data.rt.toString().padStart(2, "0")}
                </span>
                {data.telepon && data.telepon !== "-" && (
                  <a
                    href={`tel:${data.telepon}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B8F71] hover:underline"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {data.telepon}
                  </a>
                )}
              </div>

              <h1 className="mt-4 text-4xl font-bold text-[#2F2F2F]">
                {data.nama}
              </h1>

              <div className="mt-3 flex items-start gap-2 text-gray-600">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg">{data.alamat}</p>
              </div>
            </div>

            {/* Description */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F2F2F]">Tentang Usaha</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                {data.deskripsi}
              </p>
            </div>

            {/* Products */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-[#2F2F2F]">Produk yang Dihasilkan</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.produk.map((produk, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#F0F7F0] px-4 py-2 text-sm font-medium text-[#4E6B53] border border-[#D5E8D5]"
                  >
                    {produk}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            {data.harga && data.harga !== "-" && (
              <div className="rounded-2xl bg-[#6B8F71] p-6 text-white shadow-lg">
                <h2 className="text-lg font-semibold opacity-90">Kisaran Harga</h2>
                <p className="mt-2 text-2xl font-bold">{data.harga}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Google Maps Button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-full bg-[#4285F4] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3367D6] hover:shadow-xl"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 10a2 2 0 110 4 2 2 0 010-4zm0-6a6 6 0 100 12 6 6 0 000-12z"/>
                </svg>
                Petunjuk Arah
              </a>

              {/* Coordinates Info */}
              <div className="flex-1 rounded-2xl bg-white p-4 text-sm border border-gray-200">
                <p className="font-semibold text-gray-700">Koordinat GPS:</p>
                <p className="mt-1 text-gray-600">
                  Lat: {data.koordinat.lat}<br />
                  Lng: {data.koordinat.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}