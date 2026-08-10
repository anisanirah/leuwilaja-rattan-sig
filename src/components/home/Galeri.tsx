import Image from "next/image";
import { Container } from "@/components/ui/Container";

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "Dokumentasi Produk 1" },
  { src: "/images/gallery/2.jpg", alt: "Dokumentasi Produk 2" },
  { src: "/images/gallery/3.jpg", alt: "Dokumentasi Produk 3" },
  { src: "/images/gallery/4.jpg", alt: "Dokumentasi Produk 4" },
  { src: "/images/gallery/5.jpg", alt: "Dokumentasi Produk 5" },
  { src: "/images/gallery/6.jpg", alt: "Dokumentasi Produk 6" },
  { src: "/images/gallery/7.jpg", alt: "Dokumentasi Produk 7" },
  { src: "/images/gallery/8.jpg", alt: "Dokumentasi Produk 8" },
];

export function Galeri() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <Container>
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53]">
            Galeri
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[#2F2F2F]">
            Dokumentasi Produk
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Beberapa contoh produk kerajinan rotan unggulan Desa Leuwilaja.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}