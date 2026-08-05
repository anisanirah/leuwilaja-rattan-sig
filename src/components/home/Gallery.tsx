import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";

// Ambil 6 foto pertama untuk preview
const previewItems = galleryItems.slice(0, 6);

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53]">
            Galeri
          </span>
          <h2 className="mt-5 text-4xl font-bold text-[#2F2F2F]">
            Dokumentasi Produk
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Beberapa contoh produk kerajinan rotan unggulan Desa Leuwilaja.
          </p>
        </div>

        {/* Gallery Grid - 6 Foto Preview */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-stone-100 aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="mt-10 text-center">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#6B8F71] bg-white px-8 py-3.5 text-base font-semibold text-[#6B8F71] transition-all duration-300 hover:bg-[#6B8F71] hover:text-white hover:shadow-lg"
          >
            Lihat Semua Foto
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}