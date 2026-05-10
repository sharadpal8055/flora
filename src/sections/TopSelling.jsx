import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import PlantCard from "../components/cards/PlantCard";
import { PLANTS } from "../data/plants";

export default function TopSelling() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="top-selling" className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <SectionTitle>Our Top Selling Plants</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
        {PLANTS.map((p, i) => (
          <PlantCard
            key={p.id}
            plant={p}
            selected={selected === i}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </section>
  );
}