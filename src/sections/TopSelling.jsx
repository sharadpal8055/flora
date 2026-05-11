import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import PlantCard from "../components/cards/PlantCard";
import { PLANTS } from "../data/plants";

export default function TopSelling() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="top-selling" className="px-8 md:px-14 lg:px-20 py-28 max-w-[1700px] mx-auto">
      <SectionTitle>Our Top Selling Plants</SectionTitle>

      {/* Extra top padding so plants can overflow upward */}
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
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
