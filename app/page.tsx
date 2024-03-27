import GettingStarted from "@/components/main/home/gettingstarted/GS";
import HeroSectionBg from "@/components/main/home/hero/Hero-section-bg";

export default function Home() {
  return (
    <main className="bg-[#0D1117] text-white">
      <HeroSectionBg />
      <GettingStarted />
    </main>
  );
}
