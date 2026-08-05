import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { statistikDesa } from "@/data/statistik";

export function Stats() {
  return (
    <section className="py-20 bg-stone-50">
      <Container>
        <SectionTitle
          eyebrow="Statistik Desa"
          title="Potensi dalam Angka"
          subtitle="Data ringkas potensi pengepul rotan yang tersebar di Desa Leuwilaja."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistikDesa.map((stat) => (
            <Card key={stat.label} className="p-8 text-center">
              <p className="text-4xl sm:text-5xl font-bold text-emerald-600">{stat.value}</p>
              <p className="mt-2 font-semibold text-stone-900">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-stone-500">{stat.description}</p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}