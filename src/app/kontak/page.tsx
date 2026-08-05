import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Kontak | SIG Pengepul Rotan Desa Leuwilaja",
  description: "Informasi kontak untuk SIG Pengepul Rotan Desa Leuwilaja.",
};

export default function KontakPage() {
  return (
    <section className="py-16">
      <Container className="max-w-4xl">
        <SectionTitle
          eyebrow="Kontak"
          title="Hubungi Kami"
          subtitle="Informasi kontak dan alamat Desa Leuwilaja."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8">
            <h3 className="text-lg font-bold text-stone-900 mb-4">Alamat</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-stone-500">Desa</dt>
                <dd className="font-medium text-stone-900">Leuwilaja</dd>
              </div>
              <div>
                <dt className="text-stone-500">Kecamatan</dt>
                <dd className="font-medium text-stone-900">Leuwisadeng</dd>
              </div>
              <div>
                <dt className="text-stone-500">Kabupaten</dt>
                <dd className="font-medium text-stone-900">Bogor</dd>
              </div>
              <div>
                <dt className="text-stone-500">Provinsi</dt>
                <dd className="font-medium text-stone-900">Jawa Barat</dd>
              </div>
            </dl>
          </Card>

          <Card className="p-8">
            <h3 className="text-lg font-bold text-stone-900 mb-4">Informasi</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Untuk informasi lebih lanjut mengenai platform ini, silakan
              menghubungi perangkat desa setempat. Untuk keperluan transaksi,
              silakan hubungi langsung pengepul terkait melalui halaman detail masing-masing.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}