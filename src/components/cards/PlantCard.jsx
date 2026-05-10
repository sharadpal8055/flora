import { ShoppingBag } from "lucide-react";

export default function PlantCard({ plant, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={plant.name}
      aria-pressed={selected}
      className={`bg-[#162118] rounded-[1.25rem] border p-4 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#4a6e4c] hover:bg-[#1e2f20] focus:outline-none focus:ring-2 focus:ring-[#A8C5A0] focus:ring-offset-2 focus:ring-offset-[#0D1B0F] ${
        selected
          ? "outline outline-2 outline-[#d97060] outline-offset-2 border-[#d97060]"
          : "border-[#1e2e20]"
      }`}
    >
      <div className="w-28 h-28 flex items-center justify-center mb-3">
        <img
          src={plant.img}
          alt={plant.name}
          className="w-24 h-24 object-contain drop-shadow-lg"
          loading="lazy"
        />
      </div>
      <h3 className="text-[#E8EDE8] text-sm font-semibold mb-1">{plant.name}</h3>
      <p className="text-[#7A9E7A] text-xs leading-snug mb-2 line-clamp-2">{plant.desc}</p>
      <div className="flex items-center justify-between w-full mt-auto pt-2 border-t border-[#2D4A2F]">
        <span className="text-[#E8EDE8] text-sm font-bold">{plant.price}</span>
        <button
          className="w-7 h-7 border border-[#2D4A2F] rounded-full flex items-center justify-center text-[#7A9E7A] transition-all hover:border-[#A8C5A0] hover:bg-[#A8C5A0]/10"
          aria-label="Add to cart"
          onClick={(e) => e.stopPropagation()}
        >
          <ShoppingBag size={12} />
        </button>
      </div>
    </div>
  );
}