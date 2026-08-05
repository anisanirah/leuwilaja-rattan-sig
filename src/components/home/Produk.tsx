const produk = [
  {
    nama: "Keranjang Rotan",
    kategori: "Keranjang",
    icon: "🧺",
  },
  {
    nama: "Kursi Rotan",
    kategori: "Furniture",
    icon: "🪑",
  },
  {
    nama: "Meja Rotan",
    kategori: "Furniture",
    icon: "🪵",
  },
  {
    nama: "Tas Rotan",
    kategori: "Fashion",
    icon: "👜",
  },
  {
    nama: "Rak Rotan",
    kategori: "Dekorasi",
    icon: "🪜",
  },
  {
    nama: "Anyaman Rotan",
    kategori: "Kerajinan",
    icon: "🎍",
  },
];

export default function Produk() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-[#E8F3E8] px-4 py-2 text-sm font-semibold text-[#4E6B53]">
            Produk UMKM
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#2F2F2F]">
            Produk Unggulan Rotan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Berbagai produk kerajinan rotan hasil karya masyarakat Desa
            Leuwilaja yang siap dipasarkan secara lebih luas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {produk.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-gray-100 bg-[#FAF8F5] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.nama}
              </h3>

              <p className="mt-2 text-[#6B8F71] font-medium">
                {item.kategori}
              </p>

              <button className="mt-8 rounded-full bg-[#6B8F71] px-6 py-3 text-white font-semibold hover:bg-[#55755B]">
                Lihat Produk →
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}