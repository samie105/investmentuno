import CountupDisc from "@/components/main/home/countup_discover/CountupDisc";
import GettingStarted from "@/components/main/home/gettingstarted/GS";
import HeroSectionBg from "@/components/main/home/hero/Hero-section-bg";
import TickerTV from "@/components/main/home/hero/TickerTV";

export default function Home() {
  return (
    <main className="bg-[#0D1117] text-white">
      <HeroSectionBg />
      <TickerTV />
      <CountupDisc />
      <GettingStarted />
    </main>
  );
}
