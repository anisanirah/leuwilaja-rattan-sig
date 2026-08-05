import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#064E3B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Branding */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center border-2 border-emerald-600 overflow-hidden">
                <Image
                  src="/logo/footer.png"
                  alt="Leuwilaja Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Leuwilaja</h3>
                <p className="text-xs text-emerald-200">SIG Pengepul Rotan</p>
              </div>
            </div>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Platform digital yang mendokumentasikan dan mempromosikan potensi 
              kerajinan rotan Desa Leuwilaja, Kabupaten Majalengka.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-base font-bold mb-4">Menu</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="text-sm text-emerald-100 hover:text-white transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/peta"
                className="text-sm text-emerald-100 hover:text-white transition-colors"
              >
                Peta
              </Link>
              <Link
                href="/pengepul"
                className="text-sm text-emerald-100 hover:text-white transition-colors"
              >
                Pengepul
              </Link>
              <Link
                href="/galeri"
                className="text-sm text-emerald-100 hover:text-white transition-colors"
              >
                Galeri
              </Link>
              <Link
                href="/tentang"
                className="text-sm text-emerald-100 hover:text-white transition-colors"
              >
                Tentang
              </Link>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="text-base font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Desa Leuwilaja, Kec. Sindangwangi
                  <br />
                  Kabupaten Majalengka, Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-emerald-800 text-center">
          <p className="text-sm text-emerald-200">
            © 2026 KKN Universitas Majalengka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}