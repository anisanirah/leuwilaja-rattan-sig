import { Hero } from "@/components/home/Hero";
import { Pengepul } from "@/components/home/Pengepul";
import { Galeri } from "@/components/home/Galeri";
import { WhySection } from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Stats dihapus */}
      <Pengepul />
      <Galeri />
      <WhySection />
    </>
  );
}