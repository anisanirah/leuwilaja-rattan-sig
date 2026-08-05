import { Hero } from "@/components/home/Hero";
import { Pengepul } from "@/components/home/Pengepul";
import { Gallery } from "@/components/home/Gallery";
import { WhySection } from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Stats dihapus */}
      <Pengepul />
      <Gallery />
      <WhySection />
    </>
  );
}