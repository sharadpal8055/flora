import SectionTitle from "../components/ui/SectionTitle";
import TrendingCard from "../components/cards/TrendingCard";
import { TRENDING } from "../data/trending";

export default function TrendingPlants() {
  return (
    <section className="px-8 md:px-14 lg:px-20 py-28 max-w-[1700px] mx-auto" id="trending">
      <SectionTitle>Our Trendy plants</SectionTitle>
      <div className="flex flex-col gap-6">
        {TRENDING.map((p) => (
          <TrendingCard key={p.id} plant={p} />
        ))}
      </div>
    </section>
  );
}
