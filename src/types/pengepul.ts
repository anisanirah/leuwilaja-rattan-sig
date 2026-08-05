export interface Pengepul {
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
  foto: {
    depan: string;
    galeri: string[];
  };
}

export interface StatistikItem {
  label: string;
  value: string;
  description?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string; // ← Lebih fleksibel, bebas pakai kategori apa saja
}