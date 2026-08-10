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
        
        {/* Grid Statistik - 2 kolom di HP, 4 kolom di laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {statistikDesa.map((stat) => (
            <Card key={stat.label} className="p-4 lg:p-8 text-center flex flex-col items-center justify-center">
              {/* Value */}
              <p className="text-2xl lg:text-4xl font-bold text-emerald-600">
                {stat.value}
              </p>
              
              {/* Label */}
              <p className="mt-2 font-semibold text-stone-900 text-xs lg:text-sm">
                {stat.label}
              </p>
              
              {/* Description */}
              {stat.description && (
                <p className="mt-1 text-[10px] lg:text-xs text-stone-500 text-center leading-tight">
                  {stat.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}