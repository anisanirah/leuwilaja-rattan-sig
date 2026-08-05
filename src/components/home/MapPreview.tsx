import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function MapPreview() {
  return (
    <section className="py-20 bg-stone-50">
      <Container>
        <SectionTitle
          eyebrow="Peta Sebaran"
          title="Lokasi Usaha dalam Satu Peta"
          subtitle="Visualisasi sebaran seluruh pengepul rotan di Desa Leuwilaja."
        />

        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] w-full bg-stone-100">
            <iframe
              title="Peta Desa Leuwilaja"
              src="https://www.openstreetmap.org/export/embed.html?bbox=107.50%2C-6.92%2C107.58%2C-6.87&layer=mapnik"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-stone-900">Peta Interaktif</p>
              <p className="text-sm text-stone-500">
                Lihat detail lokasi setiap pengepul di peta interaktif.
              </p>
            </div>
            <Link href="/peta">
              <Button>Buka Peta Lengkap</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  );
}