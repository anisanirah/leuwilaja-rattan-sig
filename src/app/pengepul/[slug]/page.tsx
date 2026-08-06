"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";

interface PengepulDetail {
  id: number;
  slug: string;
  nama: string;
  rt: number;
  alamat: string;
  deskripsi: string;
  produk: string[];
  harga: string;
  telepon?: string;
  koordinat_lat: number;
  koordinat_lng: number;
  foto_depan: string;
  foto_galeri: string[];
}

export default function PengepulDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<PengepulDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("pengepul")
        .select("*")
        .eq("slug", params.slug)
        .single();

      if (data) {
        const allImages = [data.foto_depan, ...(data.foto_galeri || [])].filter(Boolean);
        setActiveImage(allImages[0] || "");
        setData(data);
      }
      setLoading(false);
    }

    fetchData();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat detail...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Data tidak ditemukan</p>
          <Link href="/pengepul" className="text-emerald-600 hover:underline mt-2 inline-block">
            ← Kembali ke Daftar Pengepul
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [data.foto_depan, ...(data.foto_galeri || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header - Hanya Tombol Kembali */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-700 transition-colors bg-gray-50 hover:bg-emerald-50 px-4 py-2 rounded-lg"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Pengepul
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* KOLOM KIRI: Foto & Galeri */}
          <div>
            {/* Foto Utama */}
            <div className="relative w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-lg">
              <Image
                src={activeImage}
                alt={data.nama}
                fill
                className="object-cover transition-all duration-300"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full font-medium">
                {activeIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Thumbnail Galeri */}
            <div className="grid grid-cols-5 gap-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImage(img);
                    setActiveIndex(idx);
                  }}
                  className={`relative w-full h-20 rounded-lg overflow-hidden bg-gray-100 transition-all duration-200 ${
                    activeIndex === idx
                      ? "ring-2 ring-emerald-600 ring-offset-2 scale-95"
                      : "hover:ring-2 hover:ring-emerald-300 hover:ring-offset-1"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${data.nama} - ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: Info */}
          <div className="space-y-4">
            {/* Badge RT + Nama */}
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                RT {data.rt.toString().padStart(2, "0")}
              </span>
              <h1 className="text-4xl font-bold text-gray-900">{data.nama}</h1>
              <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{data.alamat}</span>
              </div>
            </div>

            {/* Card: Tentang Usaha */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Tentang Usaha</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {data.deskripsi || `Usaha milik ${data.nama} yang berlokasi di ${data.alamat}.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Produk */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Produk yang Dihasilkan</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.produk && data.produk.length > 0 ? (
                      data.produk.map((prod, idx) => (
                        <span
                          key={idx}
                          className="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium border border-emerald-100"
                        >
                          {prod}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">Belum ada data produk</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Harga */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Kisaran Harga</h3>
                  <p className="text-2xl font-bold text-emerald-700">
                    {data.harga && data.harga !== "-" ? data.harga : "Hubungi langsung"}
                    {data.harga && data.harga !== "-" && (
                      <span className="text-sm font-normal text-gray-500 ml-2">per unit</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">*Harga dapat berubah sesuai jenis dan ukuran produk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Informasi Usaha */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Informasi Usaha
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Nama Usaha</p>
                <p className="font-medium text-gray-900">{data.nama}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Jenis Usaha</p>
                <p className="font-medium text-gray-900">Pengepul & Produsen Rotan</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Skala Usaha</p>
                <p className="font-medium text-gray-900">Rumahan</p>
              </div>
              {data.telepon && (
                <div>
                  <p className="text-gray-500 text-xs">Kontak</p>
                  <p className="font-medium text-gray-900">{data.telepon}</p>
                </div>
              )}
            </div>
          </div>

          {/* Kapasitas Produksi */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Kapasitas Produksi
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Estimasi</p>
                <p className="font-medium text-gray-900">100 - 300 unit/hari</p>
                <p className="text-xs text-gray-500">(tergantung jenis produk)</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Area Layanan</p>
                <p className="font-medium text-gray-900">Desa Leuwilaja dan sekitarnya</p>
                <p className="text-xs text-gray-500">(Majalengka, Cirebon, Kuningan)</p>
              </div>
            </div>
          </div>

          {/* Lokasi + Mini Map */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lokasi
            </h4>
            <div className="relative w-full h-28 rounded-lg overflow-hidden bg-gray-100 mb-3">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.koordinat_lng - 0.002}%2C${data.koordinat_lat - 0.002}%2C${data.koordinat_lng + 0.002}%2C${data.koordinat_lat + 0.002}&layer=mapnik&marker=${data.koordinat_lat}%2C${data.koordinat_lng}`}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
            <Link
              href={`/peta`}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 py-2 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Lihat di Peta
            </Link>
          </div>

          {/* Koordinat & Catatan */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Koordinat
            </h4>
            <div className="space-y-2 text-sm mb-4">
              <div>
                <p className="text-gray-500 text-xs">Latitude</p>
                <p className="font-mono font-medium text-gray-900">{data.koordinat_lat}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Longitude</p>
                <p className="font-mono font-medium text-gray-900">{data.koordinat_lng}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <h5 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Catatan
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Silakan hubungi langsung saat berkunjung untuk informasi lebih lanjut.
              </p>
            </div>
          </div>
        </div>

        {/* Tombol Navigasi Full Width */}
        <div className="mt-8 pb-8">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${data.koordinat_lat},${data.koordinat_lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Navigasi ke Lokasi
          </a>
        </div>
      </main>
    </div>
  );
}