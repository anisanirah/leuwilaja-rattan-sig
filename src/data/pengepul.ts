import type { Pengepul } from "@/types/pengepul";

// Helper: membuat array path foto dari pola folder
const buildGaleri = (folder: string, count: number, ext = "jpeg") =>
  Array.from({ length: count }, (_, i) => `/images/pengepul/${folder}/${i + 1}.${ext}`);

export const pengepul: Pengepul[] = [
// Update bagian RT 01 dan RT 02 di file src/data/pengepul.ts
  {
    id: 1,
    slug: "engkos",
    nama: "Engkos",
    rt: 1,
    alamat: "RT 01/RW 01, Desa Leuwilaja",
    deskripsi: "Bapak Engkos merupakan salah satu pengepul rotan yang berada di RT 01/RW 01 Desa Leuwilaja. Usaha yang dijalankan berfokus pada produksi potato berbentuk kotak, salah satu produk kerajinan rotan yang banyak digunakan sebagai tempat penyimpanan maupun dekorasi. Dalam proses produksinya, bahan baku rotan terlebih dahulu direndam selama kurang lebih satu bulan agar menghasilkan kualitas yang baik sebelum dianyam menjadi produk jadi. Potato kotak dipasarkan dengan kisaran harga sekitar Rp40.000 per unit, dan hasil produksinya telah dipasarkan hingga ke wilayah Cirebon.",
    produk: ["Potato Kotak"],
    harga: "Rp 40.000",
    telepon: "",
    koordinat: { lat: -6.7782641, lng: 108.3481617 },
    foto: {
      depan: "/images/pengepul/rt2/engkos/depan-rumah-2.jpeg",
      galeri: [
        "/images/pengepul/rt2/engkos/1.jpeg",
        "/images/pengepul/rt2/engkos/2.jpeg",
        "/images/pengepul/rt2/engkos/3.jpeg",
        "/images/pengepul/rt2/engkos/4.jpeg",
        "/images/pengepul/rt2/engkos/5.jpeg",
        "/images/pengepul/rt2/engkos/6.jpeg",
      ],
    },
  },
  {
    id: 2,
    slug: "jengki",
    nama: "Jengki",
    rt: 2,
    alamat: "Blok Jumat, RT 02/RW 01, Desa Leuwilaja",
    deskripsi: "Usaha milik Bapak Jengki berlokasi di Blok Jumat, RT 02/RW 01, Desa Leuwilaja dan telah beroperasi sejak tahun 1985. Selama puluhan tahun beliau memproduksi rangka rotan, yaitu komponen dasar yang digunakan dalam pembuatan berbagai jenis kerajinan rotan. Produk rangka rotan dipasarkan dengan kisaran harga Rp10.000 hingga Rp40.000 per unit. Hingga saat ini usaha tersebut dikelola bersama 1 orang pekerja dan tetap menjadi bagian dari aktivitas industri rotan di Desa Leuwilaja.",
    produk: ["Rangka Rotan"],
    harga: "Rp 10.000 – Rp 40.000",
    telepon: "",
    koordinat: { lat: -6.7809818, lng: 108.3498606 },
    foto: {
      depan: "/images/pengepul/rt2/jengki/depan-rumah-2.jpeg",
      galeri: [
        "/images/pengepul/rt2/jengki/1.jpeg",
        "/images/pengepul/rt2/jengki/2.jpeg",
        "/images/pengepul/rt2/jengki/3.jpeg",
        "/images/pengepul/rt2/jengki/4.jpeg",
        "/images/pengepul/rt2/jengki/5.jpeg",
      ],
    },
  },
  {
    id: 3,
    slug: "endang",
    nama: "Endang Suhendang",
    rt: 3,
    alamat: "Blok Jumat, RT 03/RW 01, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Endang Suhendang berlokasi di Blok Jumat, RT 03/RW 01, Desa Leuwilaja dan telah beroperasi kurang lebih 10-11 tahun. Selama puluhan tahun beliau memproduksi berbagai produk, salah satunya Rotan basket, Kubu grey. Hingga saat ini usaha tersebut dikelola bersama 13 orang pekerja dan tetap menjadi bagian dari aktivitas industri rotan di Desa Leuwilaja.",
    produk: ["Rotan Basket", "Kubu Grey"],
    harga: "Rp 10.000 – Rp 300.000",
    telepon: "-",
    koordinat: { lat: -6.7760797, lng: 108.3482492 },
    foto: {
      depan: "/images/pengepul/rt3/endang/depan-rumah-3.jpg",
      galeri: buildGaleri("rt3/endang", 11, "jpg"),
    },
  },
  {
    id: 4,
    slug: "eme",
    nama: "Eme Atma",
    rt: 4,
    alamat: "Blok Senin, RT 04/RW 02, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Eme Atma telah berjalan sejak tahun 2010 dan berlokasi di Blok Senin, RT 04/RW 02. Produksi difokuskan pada berbagai jenis keranjang rotan dengan kisaran harga Rp20.000 hingga Rp70.000, tergantung ukuran produk. Saat ini usaha tersebut didukung sekitar 20 orang pekerja.",
    produk: ["Keranjang Rotan", "Keranjang Serbaguna"],
    harga: "Rp 20.000 – Rp 70.000",
    telepon: "-",
    koordinat: { lat: -6.7755237, lng: 108.3498466 },
    foto: {
      depan: "/images/pengepul/rt4/eme/depan-rumah-4.jpeg",
      galeri: buildGaleri("rt4/eme", 2),
    },
  },
  {
    id: 5,
    slug: "lili",
    nama: "Lili",
    rt: 4,
    alamat: "Blok Senin, RT 04/RW 02, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Lili berada di Blok Senin, RT 04/RW 02 dan telah berdiri sejak sekitar tahun 1987. Pada awalnya usaha ini memproduksi keranjang, kursi, dan meja rotan, namun saat ini lebih banyak berfokus pada produksi keranjang karena jumlah pengrajin yang semakin terbatas. Produk dipasarkan dengan kisaran harga Rp20.000–Rp21.000 sesuai ukuran dan didukung sekitar 50 orang pekerja.",
    produk: ["Keranjang Rotan", "Kursi Rotan", "Meja Rotan"],
    harga: "Rp 20.000 – Rp 21.000",
    telepon: "-",
    koordinat: { lat: -6.775036, lng: 108.349342 },
    foto: {
      depan: "/images/pengepul/rt4/lili/depan-rumah-4.jpeg",
      galeri: buildGaleri("rt4/lili", 5),
    },
  },
  {
    id: 6,
    slug: "eman",
    nama: "H. Eman (Suherman)",
    rt: 4,
    alamat: "RT 04, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak H. Eman (Suherman) telah berdiri sejak tahun 1992 dan memproduksi berbagai jenis basket rotan serta keranjang rotan. Harga produk disesuaikan dengan ukuran yang dipesan dan proses produksi melibatkan sekitar 7 orang pekerja.",
    produk: ["Basket Rotan", "Keranjang Rotan"],
    harga: "Disesuaikan dengan ukuran",
    telepon: "-",
    koordinat: { lat: -6.773957, lng: 108.349228 },
    foto: {
      depan: "/images/pengepul/rt4/eman/depan-rumah-4.jpeg",
      galeri: buildGaleri("rt4/eman", 3),
    },
  },
  {
    id: 7,
    slug: "subana",
    nama: "Subana",
    rt: 4,
    alamat: "Blok Senin Tagog, RT 04, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Subana berlokasi di Blok Senin Tagog, RT 04. Produksi utamanya berupa keranjang rotan dengan kisaran harga Rp21.000–Rp25.000. Saat ini usaha tersebut didukung sekitar 25 orang pekerja.",
    produk: ["Keranjang Rotan"],
    harga: "Rp 21.000 – Rp 25.000",
    telepon: "-",
    koordinat: { lat: -6.775620, lng: 108.347492 },
    foto: {
      depan: "/images/pengepul/rt4/subana/depan-rumah-4.jpeg",
      galeri: [],
    },
  },
  {
    id: 8,
    slug: "ayud",
    nama: "Ayud",
    rt: 5,
    alamat: "RT 05, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Ayud telah berjalan selama kurang lebih 30–32 tahun. Produksi berfokus pada pembuatan keranjang rotan yang dipasarkan dengan harga sekitar Rp20.000–Rp25.000 per buah. Proses produksi melibatkan sekitar 6 orang pekerja.",
    produk: ["Keranjang Rotan"],
    harga: "Rp 20.000 – Rp 25.000",
    telepon: "-",
    koordinat: { lat: -6.7745091, lng: 108.347437 },
    foto: {
      depan: "/images/pengepul/rt5/ayud/depan-rumah-5.jpeg",
      galeri: buildGaleri("rt5/ayud", 3),
    },
  },
  {
    id: 9,
    slug: "nanang",
    nama: "Bapak Nanang",
    rt: 7,
    alamat: "Blok Rabu, RT 07, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Nanang berada di Blok Rabu, RT 07 dan memproduksi berbagai jenis keranjang rotan. Produk yang dihasilkan telah dipasarkan hingga ke luar daerah. Dalam kegiatan produksinya usaha ini didukung sekitar 15 orang pekerja.",
    produk: ["Keranjang Rotan"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.7717163, lng: 108.3509780 },
    foto: {
      depan: "/images/pengepul/rt7/nanang/depan-rumah-7.jpeg",
      galeri: buildGaleri("rt7/nanang", 10),
    },
  },
  {
    id: 10,
    slug: "sudanto",
    nama: "H. Sudanto",
    rt: 8,
    alamat: "RT 08, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak H. Sudanto beroperasi sejak tahun 2017 dan bekerja sama dengan satu pabrik menggunakan sistem Purchase Order (PO). Produk hanya diproduksi berdasarkan pesanan pabrik dengan jadwal pengiriman rutin setiap hari Jumat. Produk unggulan berupa keranjang sepeda yang telah dipasarkan hingga luar negeri. Selain itu juga memproduksi berbagai jenis keranjang piknik, potato, dan pot bunga.",
    produk: ["Keranjang Sepeda", "Keranjang Piknik", "Potato", "Pot Bunga", "Keranjang Rotan"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.7690601, lng: 108.3492289 },
    foto: {
      depan: "/images/pengepul/rt8/sudanto/depan-rumah-8.jpeg",
      galeri: buildGaleri("rt8/sudanto", 3),
    },
  },
  {
    id: 11,
    slug: "asmad",
    nama: "Asmad",
    rt: 8,
    alamat: "RT 08, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Asmad telah berjalan selama lebih dari 20 tahun. Produksi dilakukan berdasarkan pesanan dari wilayah Cirebon dan bekerja sama dengan satu perusahaan. Salah satu produk yang dihasilkan adalah ember anyaman rotan dengan berbagai ukuran. Harga produk berkisar mulai Rp7.500 hingga Rp30.000 dan didukung sekitar 7 orang pekerja.",
    produk: ["Ember Anyaman Rotan"],
    harga: "Rp 7.500 – Rp 30.000",
    telepon: "-",
    koordinat: { lat: -6.7722943, lng: 108.3512399 },
    foto: {
      depan: "/images/pengepul/rt8/asmad/depan-rumah-8.jpg",
      galeri: buildGaleri("rt8/asmad", 6, "jpg"),
    },
  },
  {
    id: 12,
    slug: "asmar",
    nama: "Asmar",
    rt: 9,
    alamat: "RT 09, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Asmar telah berjalan selama kurang lebih 15 tahun.",
    produk: ["Produk Kerajinan Rotan"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.7713464, lng: 108.3522169 },
    foto: {
      depan: "/images/pengepul/rt9/asmar/depan-rumah-9.jpg",
      galeri: buildGaleri("rt9/asmar", 6, "jpg"),
    },
  },
  {
    id: 13,
    slug: "johar",
    nama: "Johar",
    rt: 9,
    alamat: "Dekat SD, RT 09, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Johar telah berjalan sekitar 25 tahun dan berlokasi di sekitar SD wilayah RT 09. Produk dipasarkan dengan kisaran harga Rp40.000–Rp69.000 dan melibatkan lebih dari 100 pengrajin.",
    produk: ["Produk Kerajinan Rotan"],
    harga: "Rp 40.000 – Rp 69.000",
    telepon: "-",
    koordinat: { lat: -6.7722939, lng: 108.3538906 },
    foto: {
      depan: "/images/pengepul/rt9/johar/depan-rumah-9.jpg",
      galeri: buildGaleri("rt9/johar", 8, "jpg"),
    },
  },
  {
    id: 14,
    slug: "pepen",
    nama: "Pepen",
    rt: 9,
    alamat: "RT 09, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Pepen telah berjalan selama sekitar 35 tahun dan berfokus pada produksi keranjang rotan untuk kebutuhan ekspor. Tahap finishing dilakukan di pabrik, sedangkan bahan baku rotan didatangkan dari Kalimantan. Harga produk berkisar antara Rp30.000 hingga Rp500.000 dengan dukungan sekitar 10 orang pekerja.",
    produk: ["Keranjang Rotan Ekspor"],
    harga: "Rp 30.000 – Rp 500.000",
    telepon: "-",
    koordinat: { lat: -6.7724827, lng: 108.3530303 },
    foto: {
      depan: "/images/pengepul/rt9/pepen/depan-rumah-9.jpg",
      galeri: buildGaleri("rt9/pepen", 5, "jpg"),
    },
  },
  {
    id: 15,
    slug: "emon",
    nama: "H. Emon Suherman (Gudang 1)",
    rt: 10,
    alamat: "Blok Minggu, RT 10/RW 04, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak H. Emon Suherman merupakan salah satu usaha rotan berskala besar di Desa Leuwilaja yang telah berjalan sekitar 15 tahun. Berlokasi di Blok Minggu, RT 10/RW 04, usaha ini memproduksi berbagai jenis kerajinan rotan dengan jumlah pekerja lebih dari 100 orang. Produk unggulannya adalah Biholma, selain itu juga memproduksi Drey, Trumis, Ester, Tok Ning, Ban, Setebel, Laci, dan Kursi dengan kisaran harga mulai Rp22.000 hingga Rp142.000.",
    produk: ["Biholma", "Drey", "Trumis", "Ester", "Tok Ning", "Ban", "Setebel", "Laci", "Kursi Rotan"],
    harga: "Rp 22.000 – Rp 142.000",
    telepon: "-",
    koordinat: { lat: -6.7736263, lng: 108.3556210 },
    foto: {
      depan: "/images/pengepul/rt10/emon/depan-rumah-10.jpeg",
      galeri: buildGaleri("rt10/emon", 10),
    },
  },
  {
    id: 16,
    slug: "emon-gudang-2",
    nama: "H. Emon Suherman (Gudang 2)",
    rt: 11,
    alamat: "Blok Kemis, RT 11/RW 05, Desa Leuwilaja",
    deskripsi:
      "Gudang kedua milik Bapak H. Emon Suherman berlokasi di Blok Kemis, RT 11/RW 05 dan memiliki aktivitas produksi yang sama dengan Gudang 1. Berbagai jenis produk rotan diproduksi untuk memenuhi kebutuhan pasar dengan dukungan lebih dari 100 pekerja.",
    produk: ["Biholma", "Drey", "Trumis", "Ester", "Tok Ning", "Ban", "Setebel", "Laci", "Kursi Rotan"],
    harga: "Rp 22.000 – Rp 142.000",
    telepon: "-",
    koordinat: { lat: -6.7756086, lng: 108.3568233 },
    foto: {
      depan: "/images/pengepul/rt11/emon-gudang-2/depan-rumah-11.jpeg",
      galeri: buildGaleri("rt11/emon-gudang-2", 5),
    },
  },
  {
    id: 17,
    slug: "jaenudin",
    nama: "Bapak Jaenudin",
    rt: 12,
    alamat: "RT 12, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Jaenudin berfokus pada produksi potato. Sistem pembayaran dilakukan berdasarkan hasil pekerjaan atau sistem borongan.",
    produk: ["Potato"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.7773136, lng: 108.3561400 },
    foto: {
      depan: "/images/pengepul/rt12/jaenudin/depan-rumah-12.jpeg",
      galeri: buildGaleri("rt12/jaenudin", 4),
    },
  },
  {
    id: 18,
    slug: "asep",
    nama: "Asep Priyanto",
    rt: 13,
    alamat: "RT 13, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Asep Priyanto menghasilkan berbagai produk kerajinan rotan mulai dari keranjang, laci, hingga souvenir custom. Produk unggulannya adalah laci penyimpanan dengan kisaran harga mulai Rp7.000 hingga Rp350.000. Proses produksi didukung sekitar 20 orang pekerja.",
    produk: ["Keranjang Rotan", "Laci Penyimpanan", "Souvenir Custom"],
    harga: "Rp 7.000 – Rp 350.000",
    telepon: "-",
    koordinat: { lat: -6.7804698, lng: 108.3567891 },
    foto: {
      depan: "/images/pengepul/rt13/asep/depan-rumah-13.jpg",
      galeri: buildGaleri("rt13/asep", 8, "jpg"),
    },
  },
  {
    id: 19,
    slug: "arief",
    nama: "Bapak Arif",
    rt: 14,
    alamat: "RT 14, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Arif telah berdiri sejak tahun 2007 dan menghasilkan berbagai jenis produk rotan yang telah memenuhi standar ekspor. Produk yang diproduksi memiliki variasi model dengan kisaran harga mulai Rp90.000 hingga sekitar Rp400.000.",
    produk: ["Nodrik", "Keranjang Persegi Empat", "Keranjang Persegi Panjang", "Potato Tiger", "Payung Bulat", "Payung Kotak"],
    harga: "Rp 90.000 – Rp 400.000",
    telepon: "-",
    koordinat: { lat: -6.7773136, lng: 108.3561400 },
    foto: {
      depan: "/images/pengepul/rt14/arief/depan-rumah-14.jpeg",
      galeri: buildGaleri("rt14/arief", 11),
    },
  },
  {
    id: 20,
    slug: "nana",
    nama: "Bapak Nana",
    rt: 15,
    alamat: "RT 15, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Nana berfokus sebagai pengepul dengan produk utama berupa laundry basket dan keranjang parcel. Produk yang dihasilkan selanjutnya disetorkan ke pabrik sehingga informasi harga tidak tersedia. Usaha ini mulai berjalan pada awal tahun 2025 dengan dukungan 5 orang pekerja.",
    produk: ["Laundry Basket", "Keranjang Parcel"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.781810, lng: 108.355019 },
    foto: {
      depan: "/images/pengepul/rt15/nana/depan-rumah-15.jpeg",
      galeri: buildGaleri("rt15/nana", 3),
    },
  },
  {
    id: 21,
    slug: "onong",
    nama: "Bapak Onong (Saung Rotan)",
    rt: 16,
    alamat: "RT 16/RW 07 Blok Sabtu, Desa Leuwilaja",
    deskripsi:
      "Usaha milik Bapak Onong, yang dikenal dengan nama Saung Rotan, berlokasi di RT 16/RW 07 Blok Sabtu. Usaha ini didukung oleh 3 orang pekerja dan menjadi salah satu pelaku usaha rotan di wilayah tersebut.",
    produk: ["Kerajinan Rotan"],
    harga: "-",
    telepon: "-",
    koordinat: { lat: -6.7693068, lng: 108.3486224 },
    foto: {
      depan: "/images/pengepul/rt16/onong/depan-rumah-16.jpg",
      galeri: buildGaleri("rt16/onong", 1, "jpg"),
    },
  },
];

export const getPengepulBySlug = (slug: string) =>
  pengepul.find((p) => p.slug === slug);

export const getPengepulByRt = (rt: number) =>
  pengepul.filter((p) => p.rt === rt);

export const getTotalRt = () => {
  const rts = new Set(pengepul.map((p) => p.rt));
  return rts.size;
};

export const getTotalPengepul = () => pengepul.length;

export const getTotalProduk = () => {
  const produk = new Set(pengepul.flatMap((p) => p.produk));
  return produk.size;
};