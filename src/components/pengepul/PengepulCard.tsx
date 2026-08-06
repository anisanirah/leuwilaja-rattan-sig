import Image from "next/image";
import Link from "next/link";
import type { Pengepul } from "@/types/pengepul";

export function PengepulCard({ data }: { data: Pengepul }) {
  return (
    <Link 
      href={`/pengepul/${data.slug}`}
      className="group block h-full rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#6B8F71]/40"
    >
      {/* === BAGIAN GAMBAR === */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={data.foto.depan}
          alt={data.nama}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badge RT */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold text-[#4E6B53] shadow-sm backdrop-blur-sm">
            RT {data.rt.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* === BAGIAN KONTEN === */}
      <div className="p-3 md:p-4 lg:p-5">
        {/* Nama Pengepul */}
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#2F2F2F] group-hover:text-[#6B8F71] transition-colors line-clamp-1">
          {data.nama}
        </h3>
        
        {/* Alamat */}
        <div className="mt-1.5 md:mt-2 flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
          <svg className="mt-0.5 h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="line-clamp-2">{data.alamat}</span>
        </div>

        {/* Produk */}
        <div className="mt-2 md:mt-3 flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
          <svg className="mt-0.5 h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="line-clamp-2">
            {data.produk.slice(0, 2).join(", ")}
            {data.produk.length > 2 && ` +${data.produk.length - 2}`}
          </span>
        </div>

        {/* Harga (Opsional, hanya muncul jika ada dan bukan "-") */}
        {data.harga && data.harga !== "-" && (
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
            <span className="text-xs md:text-sm font-semibold text-[#6B8F71]">
              {data.harga}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}