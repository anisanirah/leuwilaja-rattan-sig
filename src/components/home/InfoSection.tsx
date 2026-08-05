import { Container } from "@/components/ui/Container";

export function InfoSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50">
      <Container>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">
                  Mengapa Website Ini Dibuat?
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Desa Leuwilaja dikenal sebagai salah satu sentra kerajinan rotan di 
                  Kabupaten Majalengka. Website ini dibuat untuk mendokumentasikan 
                  keberadaan para pengepul rotan sekaligus memperkenalkan potensi 
                  lokal kepada masyarakat, pelaku usaha, maupun calon mitra dari 
                  berbagai daerah.
                </p>
              </div>
            </div>

            {/* Right Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-1">Informasi Lengkap</h4>
                <p className="text-sm text-stone-600">
                  Data usaha, produk, lokasi, dan dokumentasi terkumpul dalam satu tempat.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-1">Mendukung UMKM</h4>
                <p className="text-sm text-stone-600">
                  Membantu promosi dan pengembangan usaha kerajinan rotan desa.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-1">Akses Mudah</h4>
                <p className="text-sm text-stone-600">
                  Peta interaktif, pencarian cepat, dan informasi terupdate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}