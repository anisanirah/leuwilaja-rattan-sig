export interface Produk {
  id: number;
  nama: string;
  kategori: string;
  deskripsi: string;
  icon: string;
  produsen?: string;
}

export const produkList: Produk[] = [
  {
    id: 1,
    nama: "Biholma",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang kotak besar dengan anyaman rapat, produk unggulan yang telah diekspor ke berbagai negara. Cocok untuk penyimpanan dan dekorasi.",
    icon: "📦",
    produsen: "H. Emon Suherman"
  },
  {
    id: 2,
    nama: "Trumis",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang persegi empat dengan anyaman halus dan rapi. Ukuran bervariasi sesuai pesanan, banyak diminati pasar internasional.",
    icon: "🧺",
    produsen: "H. Emon Suherman"
  },
  {
    id: 3,
    nama: "Ester",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang bulat dengan pegangan, desain klasik yang timeless. Tersedia dalam berbagai ukuran dari kecil hingga besar.",
    icon: "",
    produsen: "H. Emon Suherman"
  },
  {
    id: 4,
    nama: "Setebel",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang bulat tinggi dengan bentuk ramping. Cocok untuk penyimpanan buah, sayuran, atau sebagai dekorasi ruangan.",
    icon: "🗑️",
    produsen: "H. Emon Suherman"
  },
  {
    id: 5,
    nama: "Laci Penyimpanan",
    kategori: "Furniture",
    deskripsi: "Laci anyaman rotan dengan desain modern dan fungsional. Tersedia berbagai ukuran untuk kebutuhan penyimpanan rumah tangga.",
    icon: "🗄️",
    produsen: "Asep Priyanto"
  },
  {
    id: 6,
    nama: "Keranjang Rotan",
    kategori: "Keranjang",
    deskripsi: "Produk paling umum yang diproduksi oleh hampir seluruh pengepul di Desa Leuwilaja. Berbagai model dan ukuran tersedia.",
    icon: "🧺",
  },
  {
    id: 7,
    nama: "Potato Kotak",
    kategori: "Keranjang",
    deskripsi: "Keranjang berbentuk kotak yang digunakan untuk penyimpanan. Bahan baku rotan direndam selama satu bulan untuk kualitas terbaik.",
    icon: "📦",
    produsen: "Bapak Engkos"
  },
  {
    id: 8,
    nama: "Kursi Rotan",
    kategori: "Furniture",
    deskripsi: "Kursi anyaman rotan yang nyaman dan tahan lama. Desain tradisional yang tetap relevan dengan interior modern.",
    icon: "🪑",
    produsen: "Lili"
  },
  {
    id: 9,
    nama: "Meja Rotan",
    kategori: "Furniture",
    deskripsi: "Meja anyaman rotan dengan berbagai ukuran. Cocok untuk ruang tamu, teras, atau cafe dengan nuansa alami.",
    icon: "🪵",
    produsen: "Lili"
  },
  {
    id: 10,
    nama: "Basket Rotan",
    kategori: "Keranjang",
    deskripsi: "Keranjang anyaman dengan berbagai motif dan ukuran. Produk ini dipasarkan hingga ke wilayah Cirebon dan luar daerah.",
    icon: "🛍️",
    produsen: "Bapak Endang Suhendang"
  },
  {
    id: 11,
    nama: "Kubu Grey",
    kategori: "Keranjang",
    deskripsi: "Keranjang dengan finishing warna grey yang modern. Produk ini menjadi salah satu unggulan dengan harga Rp10.000-Rp300.000.",
    icon: "🎨",
    produsen: "Bapak Endang Suhendang"
  },
  {
    id: 12,
    nama: "Keranjang Sepeda",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang khusus untuk sepeda yang diproduksi berdasarkan pesanan pabrik. Telah diekspor hingga ke luar negeri.",
    icon: "🚲",
    produsen: "H. Sudanto"
  },
  {
    id: 13,
    nama: "Ember Anyaman Rotan",
    kategori: "Keranjang",
    deskripsi: "Ember dengan anyaman rotan berbagai ukuran. Diproduksi berdasarkan pesanan dari wilayah Cirebon.",
    icon: "🪣",
    produsen: "Asmad"
  },
  {
    id: 14,
    nama: "Laundry Basket",
    kategori: "Keranjang",
    deskripsi: "Keranjang laundry dengan desain modern dan fungsional. Produk ini disetorkan ke pabrik untuk distribusi lebih lanjut.",
    icon: "👕",
    produsen: "Bapak Nana"
  },
  {
    id: 15,
    nama: "Keranjang Parcel",
    kategori: "Keranjang",
    deskripsi: "Keranjang khusus untuk hampers dan parcel. Desain elegan cocok untuk hadiah dan souvenir.",
    icon: "🎁",
    produsen: "Bapak Nana"
  },
  {
    id: 16,
    nama: "Nodrik",
    kategori: "Produk Ekspor",
    deskripsi: "Produk kerajinan rotan dengan standar ekspor. Variasi model dengan harga Rp90.000-Rp400.000.",
    icon: "✨",
    produsen: "Bapak Arif"
  },
  {
    id: 17,
    nama: "Payung Bulat",
    kategori: "Dekorasi",
    deskripsi: "Payung dekoratif berbentuk bulat dari anyaman rotan. Cocok untuk dekorasi interior dan exterior.",
    icon: "☂️",
    produsen: "Bapak Arif"
  },
  {
    id: 18,
    nama: "Payung Kotak",
    kategori: "Dekorasi",
    deskripsi: "Payung dekoratif berbentuk kotak dengan anyaman rotan halus. Produk unik untuk dekorasi ruangan.",
    icon: "",
    produsen: "Bapak Arif"
  },
  {
    id: 19,
    nama: "Potato Tiger",
    kategori: "Keranjang",
    deskripsi: "Keranjang potato dengan motif tiger yang khas. Produk ekspor dengan kualitas premium.",
    icon: "🐯",
    produsen: "Bapak Arif"
  },
  {
    id: 20,
    nama: "Rangka Rotan",
    kategori: "Bahan Baku",
    deskripsi: "Komponen dasar untuk pembuatan berbagai jenis kerajinan rotan. Diproduksi sejak 1985.",
    icon: "🔧",
    produsen: "Bapak Jengki"
  },
  {
    id: 21,
    nama: "Drey",
    kategori: "Produk Ekspor",
    deskripsi: "Produk kerajinan rotan dengan desain modern untuk pasar ekspor. Kualitas terjamin dengan harga kompetitif.",
    icon: "🎯",
    produsen: "H. Emon Suherman"
  },
  {
    id: 22,
    nama: "Tok Ning",
    kategori: "Produk Ekspor",
    deskripsi: "Produk kerajinan rotan khas yang diproduksi untuk pasar internasional. Anyaman halus dengan finishing rapi.",
    icon: "🌟",
    produsen: "H. Emon Suherman"
  },
  {
    id: 23,
    nama: "Ban",
    kategori: "Produk Ekspor",
    deskripsi: "Produk kerajinan rotan berbentuk ban/ring untuk berbagai keperluan. Diproduksi massal untuk ekspor.",
    icon: "⭕",
    produsen: "H. Emon Suherman"
  },
  {
    id: 24,
    nama: "Keranjang Piknik",
    kategori: "Keranjang",
    deskripsi: "Keranjang khusus untuk piknik dengan desain praktis dan elegan. Diproduksi berdasarkan pesanan pabrik.",
    icon: "🧺",
    produsen: "H. Sudanto"
  },
  {
    id: 25,
    nama: "Pot Bunga",
    kategori: "Dekorasi",
    deskripsi: "Pot bunga dari anyaman rotan dengan berbagai ukuran. Cocok untuk dekorasi taman dan interior.",
    icon: "",
    produsen: "H. Sudanto"
  },
  {
    id: 26,
    nama: "Keranjang Serbaguna",
    kategori: "Keranjang",
    deskripsi: "Keranjang multifungsi yang bisa digunakan untuk berbagai keperluan. Harga terjangkau Rp20.000-Rp70.000.",
    icon: "🛒",
    produsen: "Eme Atma"
  },
  {
    id: 27,
    nama: "Souvenir Custom",
    kategori: "Kerajinan",
    deskripsi: "Produk souvenir rotan yang bisa di-custom sesuai pesanan. Cocok untuk hadiah, wedding, atau corporate gift.",
    icon: "",
    produsen: "Asep Priyanto"
  },
  {
    id: 28,
    nama: "Keranjang Ekspor",
    kategori: "Produk Ekspor",
    deskripsi: "Keranjang rotan berkualitas tinggi untuk pasar ekspor. Bahan baku dari Kalimantan dengan finishing premium.",
    icon: "🌍",
    produsen: "Pepen"
  },
];

// Helper untuk mendapatkan kategori unik
export const getKategoriProduk = () => {
  const kategori = [...new Set(produkList.map((p) => p.kategori))];
  return kategori;
};

// Helper untuk filter berdasarkan kategori
export const getProdukByKategori = (kategori: string) => {
  if (kategori === "all") return produkList;
  return produkList.filter((p) => p.kategori === kategori);
};