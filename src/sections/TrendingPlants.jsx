import SectionTitle from "../components/ui/SectionTitle";
import TrendingCard from "../components/cards/TrendingCard";
import { TRENDING } from "../data/trending";

export default function TrendingPlants() {
  return (
    <section className="px-6 md:px-10 py-16 max-w-6xl mx-auto" id="trending">
      <SectionTitle>Our Trendy plants</SectionTitle>
      {TRENDING.map((p) => (
        <TrendingCard key={p.id} plant={p} />
      ))}
    </section>
  );
}