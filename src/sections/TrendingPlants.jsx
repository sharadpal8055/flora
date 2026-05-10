import SectionTitle from "../components/ui/SectionTitle";
import TrendingCard from "../components/cards/TrendingCard";
import { TRENDING } from "../data/trending";

export default function TrendingPlants() {
  return (
   <section className="px-8 md:px-16 py-32 max-w-[1700px] mx-auto" id="trending">
      <SectionTitle>Our Trendy plants</SectionTitle>
      {TRENDING.map((p) => (
        <TrendingCard key={p.id} plant={p} />
      ))}
    </section>
  );
}