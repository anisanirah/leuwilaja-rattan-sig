"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PengepulCard } from "@/components/pengepul/PengepulCard";

// Tipe data sesuai dengan format yang diharapkan oleh PengepulCard
interface Pengepul {
  id: number;
  slug: string;
  nama: string;
  rt: number;
  alamat: string;
  deskripsi: string;
  produk: string[];
  harga: string;
  telepon?: string;
  koordinat: { lat: number; lng: number };
  foto: { depan: string; galeri: string[] };
}

export default function PengepulPage() {
  const [pengepulList, setPengepulList] = useState<Pengepul[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Ambil data dari tabel 'pengepul' di Supabase, urutkan berdasarkan RT
      const { data, error } = await supabase
        .from("pengepul")
        .select("*")
        .order("rt", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data:", error);
      } else if (data) {
        // Format ulang data agar sesuai dengan yang diharapkan oleh PengepulCard
        const formattedData = data.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          nama: item.nama,
          rt: item.rt,
          alamat: item.alamat,
          deskripsi: item.deskripsi,
          produk: item.produk || [],
          harga: item.harga,
          telepon: item.telepon,
          koordinat: {
            lat: item.koordinat_lat,
            lng: item.koordinat_lng,
          },
          foto: {
            depan: item.foto_depan || "/images/placeholder.jpg",
            galeri: item.foto_galeri || [],
          },
        }));
        
        setPengepulList(formattedData);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  // Tampilan saat data sedang dimuat
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B8F71] mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data pengepul...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full bg-[#E8F3E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4E6B53]">
            Direktori UMKM
          </span>
          <h1 className="mt-4 text-4xl font-bold text-[#2F2F2F] sm:text-5xl">
            Daftar Pengepul Rotan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Temukan seluruh pengepul dan pengrajin rotan di Desa Leuwilaja. 
            Total {pengepulList.length} usaha terdaftar.
          </p>
        </div>
      </section>

      {/* Grid Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {pengepulList.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada data pengepul.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pengepulList.map((p) => (
                <PengepulCard key={p.id} data={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}