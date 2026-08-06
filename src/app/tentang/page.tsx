import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { galleryItems } from "@/data/gallery";

export default function TentangPage() {
  // Ambil beberapa foto dari gallery untuk ditampilkan
  const galleryPhotos = galleryItems.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              TENTANG KAMI
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Mengenal Desa Leuwilaja
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
              Platform digital pertama yang memetakan potensi pengepul rotan desa. 
              Sentra kerajinan rotan terbesar di Kabupaten Majalengka.
            </p>
          </div>
        </Container>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#E8F3E8] rounded-full text-sm font-semibold text-[#4E6B53] mb-4">
                SEJARAH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-6">
                Warisan Kerajinan Rotan yang Turun-Temurun
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Desa Leuwilaja, yang terletak di Kecamatan Sindangwangi, Kabupaten Majalengka, 
                  Jawa Barat, telah lama dikenal sebagai salah satu <strong>sentra kerajinan rotan 
                  terbesar</strong> di wilayah Priangan Timur. Tradisi pengolahan rotan di desa 
                  ini telah berlangsung sejak puluhan tahun yang lalu, diwariskan dari generasi 
                  ke generasi.
                </p>
                <p>
                  Berawal dari keterampilan sederhana mengolah bahan alam, masyarakat Desa 
                  Leuwilaja perlahan mengembangkan teknik pengolahan rotan menjadi berbagai 
                  produk kerajinan yang bernilai ekonomi tinggi. Dari waktu ke waktu, industri 
                  rumahan ini berkembang pesat dan menjadi <strong>tulang punggung perekonomian 
                  masyarakat desa</strong>.
                </p>
                <p>
                  Hingga kini, tercatat lebih dari <strong>20 pengepul dan pengrajin rotan</strong> yang 
                  tersebar di 16 RT di seluruh wilayah Desa Leuwilaja. Mereka memproduksi 
                  berbagai macam produk, mulai dari keranjang, furniture, hingga produk ekspor 
                  yang telah menembus pasar internasional.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={galleryPhotos[0]?.src || "/images/gallery/1.jpg"}
                      alt="Proses produksi rotan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={galleryPhotos[1]?.src || "/images/gallery/2.jpg"}
                      alt="Kerajinan rotan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={galleryPhotos[2]?.src || "/images/gallery/3.jpg"}
                      alt="Produk rotan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={galleryPhotos[3]?.src || "/images/gallery/4.jpg"}
                      alt="Pengrajin rotan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-gradient-to-br from-[#E8F3E8] to-[#D5E8D5]">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-semibold text-[#4E6B53] mb-4">
              VISI & MISI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F]">
              Mengapa Website Ini Dibuat?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#6B8F71] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi <strong>media informasi digital</strong> yang mendokumentasikan dan 
                  mempromosikan potensi ekonomi Desa Leuwilaja, khususnya dalam bidang kerajinan 
                  rotan. Website ini bertujuan untuk memudahkan akses informasi bagi masyarakat, 
                  pelaku usaha, dan calon mitra dari berbagai daerah mengenai sebaran dan profil 
                  pengepul rotan di desa.
                </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#6B8F71] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4">Misi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8F71] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menyediakan informasi lengkap dan akurat tentang pengepul rotan di desa sebagai media referensi publik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8F71] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Memetakan sebaran usaha dalam bentuk Sistem Informasi Geografis (SIG) untuk kemudahan akses lokasi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8F71] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mempromosikan potensi ekonomi desa kepada masyarakat luas melalui platform digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8F71] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menjadi media dokumentasi digital kegiatan usaha warga yang dapat diakses kapan saja</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8F71] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Memberikan informasi yang jelas bahwa website ini bersifat informatif dan bukan platform transaksi</span>
                  </li>
                </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Potensi Desa */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E8F3E8] rounded-full text-sm font-semibold text-[#4E6B53] mb-4">
              POTENSI DESA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-6">
              Kekayaan Rotan Desa Leuwilaja
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Desa Leuwilaja memiliki keunggulan kompetitif dalam industri kerajinan rotan 
              yang telah terbukti berkontribusi besar terhadap perekonomian masyarakat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-700 mb-2">22+</h3>
              <p className="text-gray-700 font-semibold">Pengepul Aktif</p>
              <p className="text-sm text-gray-500 mt-2">Tersebar di 15 RT se-Desa Leuwilaja</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-700 mb-2">12+</h3>
              <p className="text-gray-700 font-semibold">Jenis Produk</p>
              <p className="text-sm text-gray-500 mt-2">Beragam kerajinan rotan berkualitas</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-700 mb-2">100%</h3>
              <p className="text-gray-700 font-semibold">Data Lapangan</p>
              <p className="text-sm text-gray-500 mt-2">Hasil pendataan langsung ke lokasi</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-700 mb-2">2026</h3>
              <p className="text-gray-700 font-semibold">Platform Digital</p>
              <p className="text-sm text-gray-500 mt-2">Platform digital pertama desa</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Produk Ekspor Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-semibold text-amber-700 mb-4">
              PRODUK 
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-4">
              Produk Unggulan Skala Besar
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Desa Leuwilaja tidak hanya memproduksi untuk pasar lokal, tetapi juga telah 
              menembus pasar internasional dengan produk-produk berkualitas tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Biholma", 
                desc: "Keranjang kotak besar dengan anyaman rotan yang rapi dan kokoh. Cocok untuk penyimpanan berbagai kebutuhan serta menjadi salah satu produk rotan unggulan Desa Leuwilaja.",
                image: "/images/gallery/biholma.jpg", // Foto Biholma
                color: "from-amber-500 to-orange-600"
              },
              { 
                name: "Trumis", 
                desc: "Keranjang rotan berbentuk persegi dengan desain kokoh dan anyaman halus. Ideal digunakan sebagai tempat penyimpanan dengan tampilan yang sederhana dan fungsional.",
                image: "/images/gallery/56.jpg", // Foto Trumis
                color: "from-emerald-500 to-teal-600"
              },
              { 
                name: "Ester", 
                desc: "Keranjang bulat dengan pegangan kokoh, dibuat menggunakan anyaman rotan berkualitas. Tersedia dalam berbagai ukuran, cocok untuk penyimpanan, dekorasi, maupun kebutuhan ekspor.",
                image: "/images/gallery/39.jpg", // Foto Ester
                color: "from-blue-500 to-indigo-600"
              },
              { 
                name: "Setebel", 
                desc: "Keranjang rotan bulat berukuran besar dengan anyaman yang rapi dan kuat. Cocok digunakan sebagai tempat penyimpanan, dekorasi, maupun pelengkap berbagai kebutuhan rumah tangga.",
                image: "/images/gallery/57.jpg", // Foto Setebel
                color: "from-purple-500 to-pink-600"
              },
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Foto Produk sebagai Icon */}
                <div className={`w-full h-32 bg-gradient-to-br ${product.color} rounded-xl mb-4 overflow-hidden relative`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                <h3 className="text-xl font-bold text-[#2F2F2F] mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    Produk Unggulan
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#2F2F2F] mb-2">Produsen Utama</h4>
                <p className="text-gray-600">
                  Produk-produk ekspor ini terutama diproduksi oleh <strong>H. Emon Suherman</strong> yang 
                  memiliki dua gudang besar di RT 10 dan RT 11. Dengan lebih dari 100 pekerja, usaha ini 
                  mampu memproduksi dalam skala besar dengan kualitas terjamin. Harga produk berkisar 
                  antara <strong>Rp 22.000 hingga Rp 142.000</strong> tergantung ukuran dan jenis.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Galeri Foto */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#E8F3E8] rounded-full text-sm font-semibold text-[#4E6B53] mb-4">
              GALERI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2F2F] mb-6">
              Dokumentasi Kegiatan
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Koleksi foto proses produksi, produk jadi, dan suasana usaha kerajinan rotan 
              di Desa Leuwilaja.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-stone-100 ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#6B8F71] bg-white px-8 py-3.5 text-base font-semibold text-[#6B8F71] transition-all duration-300 hover:bg-[#6B8F71] hover:text-white hover:shadow-lg"
            >
              Lihat Semua Foto
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Catatan Penting */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4">Catatan Penting</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-[#2F2F2F]">Website ini bukan marketplace dan bukan platform transaksi.</strong> 
                      Semua informasi yang ditampilkan bertujuan sebagai media informasi publik untuk 
                      memperkenalkan potensi kerajinan rotan Desa Leuwilaja kepada masyarakat luas.
                    </p>
                    <p>
                      Untuk informasi lebih lanjut mengenai produk, harga, dan transaksi pembelian, 
                      silakan menghubungi langsung para pengepul/pengrajin yang tertera di website ini. 
                      Setiap pengepul memiliki kontak yang dapat diakses melalui halaman detail masing-masing.
                    </p>
                    <p>
                      Data dan informasi yang disajikan telah dikumpulkan secara langsung dari para pelaku 
                      usaha di Desa Leuwilaja. Kami berupaya menyajikan informasi yang akurat dan terkini 
                      untuk memudahkan masyarakat yang ingin mengetahui lebih jauh tentang potensi 
                      kerajinan rotan di desa ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Tertarik dengan Produk Rotan Kami?
            </h2>
            <p className="text-xl text-emerald-100 mb-10">
              Jelajahi profil para pengepul, lihat lokasi usaha, dan temukan produk 
              kerajinan rotan unggulan Desa Leuwilaja.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pengepul"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Lihat Daftar Pengepul
              </Link>
              <Link
                href="/peta"
                className="inline-flex items-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-900 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lihat Peta Lokasi
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}