import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import PlantCard from "../components/cards/PlantCard";
import { PLANTS } from "../data/plants";

export default function TopSelling() {
  const [selected, setSelected] = useState(1);

  return (
  <section id="top-selling" className="px-8 md:px-16 py-32 max-w-[1700px] mx-auto">
      <SectionTitle>Our Top Selling Plants</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
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