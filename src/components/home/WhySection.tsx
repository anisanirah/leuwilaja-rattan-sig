import { Container } from "@/components/ui/Container";

export function WhySection() {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <Container>
        <div className="rounded-3xl bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            
            {/* Left: Icon + Text */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#6B8F71] flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2F2F2F]">
                  Mengapa Website Ini Dibuat?
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Desa Leuwilaja dikenal sebagai salah satu sentra kerajinan rotan di 
                  Kabupaten Majalengka. Website ini dibuat untuk mendokumentasikan 
                  keberadaan para pengepul rotan sekaligus memperkenalkan potensi 
                  lokal kepada masyarakat, pelaku usaha, maupun calon mitra dari 
                  berbagai daerah.
                </p>
              </div>
            </div>

            {/* Right: 3 Feature Boxes */}
            <div className="grid grid-cols-3 gap-4">
              {/* Feature 1 */}
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E8F3E8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6B8F71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#2F2F2F] text-sm">Informasi Lengkap</h4>
                <p className="mt-2 text-xs text-gray-600">
                  Data usaha, produk, lokasi, dan dokumentasi terkumpul dalam satu tempat.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E8F3E8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6B8F71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#2F2F2F] text-sm">Mendukung UMKM</h4>
                <p className="mt-2 text-xs text-gray-600">
                  Membantu promosi dan pengembangan usaha kerajinan rotan desa.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E8F3E8] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6B8F71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#2F2F2F] text-sm">Akses Mudah</h4>
                <p className="mt-2 text-xs text-gray-600">
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