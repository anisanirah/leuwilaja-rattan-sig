import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Kenali Lebih Dekat Potensi Desa Kami
            </h2>
            <p className="mt-4 text-lg text-emerald-50 max-w-2xl mx-auto">
              Jelajahi profil, produk, dan lokasi usaha seluruh pengepul rotan di Desa Leuwilaja.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/pengepul">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-stone-100">
                  Jelajahi Pengepul
                </Button>
              </Link>
              <Link href="/kontak">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}