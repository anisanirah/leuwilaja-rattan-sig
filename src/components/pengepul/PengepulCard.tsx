import Image from "next/image";
import Link from "next/link";
import type { Pengepul } from "@/types/pengepul";

// Helper untuk handle URL foto (bisa URL Supabase atau path lokal)
function getFotoUrl(path: string | null | undefined): string {
  if (!path) return '/images/placeholder.jpg';
  
  // Kalau URL lengkap dari Supabase Storage
  if (path.startsWith('http')) return path;
  
  // Kalau path lokal dari GitHub
  return path;
}

export function PengepulCard({ data }: { data: Pengepul }) {
  return (
    <Link 
      href={`/pengepul/${data.slug}`}
      className="group block h-full rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#6B8F71]/40"
    >
      {/* === BAGIAN GAMBAR === */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={getFotoUrl(data.foto?.depan)}  // ← PERBAIKAN DI SINI (data.foto.depan)
          alt={data.nama}
          fill
          sizes="25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback otomatis kalau foto gagal load / URL rusak
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
          }}
        />
        
        {/* Badge RT */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#4E6B53] shadow-sm backdrop-blur-sm">
            RT {data.rt.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* === BAGIAN KONTEN === */}
      <div className="p-5">
        {/* Nama Pengepul */}
        <h3 className="text-lg font-bold text-[#2F2F2F] group-hover:text-[#6B8F71] transition-colors line-clamp-1">
          {data.nama}
        </h3>
        
        {/* Alamat */}
        <div className="mt-2 flex items-start gap-2 text-sm text-gray-600">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="line-clamp-2">{data.alamat}</span>
        </div>

        {/* Produk */}
        <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="line-clamp-2">
            {data.produk.slice(0, 2).join(", ")}
            {data.produk.length > 2 && ` +${data.produk.length - 2}`}
          </span>
        </div>

        {/* Harga */}
        {data.harga && data.harga !== "-" && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm font-semibold text-[#6B8F71]">
              {data.harga}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}