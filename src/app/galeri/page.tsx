import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53]">
            Galeri
          </span>
          <h1 className="mt-4 text-4xl font-bold text-[#2F2F2F] sm:text-5xl">
            Dokumentasi Produk Rotan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Koleksi {galleryItems.length} foto produk kerajinan rotan hasil karya 
            masyarakat Desa Leuwilaja, termasuk produk ekspor berkualitas tinggi.
          </p>
        </div>
      </section>

      {/* Gallery Grid - Semua Foto */}
      <section className="py-12">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Counter */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Total <span className="font-bold text-[#6B8F71]">{galleryItems.length}</span> foto dokumentasi
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}