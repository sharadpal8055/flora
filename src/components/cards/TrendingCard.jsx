import BtnOutline from "../ui/BtnOutline";
import IconBtn from "../ui/IconBtn";
import { ShoppingBag } from "lucide-react";

export default function TrendingCard({ plant }) {
  return (
    <div
      className={`bg-[#162118] border border-[#243226] rounded-[1.25rem] flex ${
        plant.reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } items-center gap-6 p-6 md:p-8 mb-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]`}
    >
      <div className="w-44 h-44 flex-shrink-0 flex items-center justify-center">
        <img
          src={plant.img}
          alt={plant.name}
          className="w-40 h-40 object-contain drop-shadow-xl"
        />
      </div>
      <div className={plant.reverse ? "text-left" : "text-left"}>
        <h3 className="font-serif text-xl font-bold text-[#E8EDE8] mb-2">{plant.name}</h3>
        <p className="text-[#7A9E7A] text-sm leading-relaxed mb-4 max-w-md">{plant.desc}</p>
        <p className="text-[#E8EDE8] font-semibold text-lg mb-4">{plant.price}</p>
        <div className="flex gap-3">
          <BtnOutline>Explore</BtnOutline>
          <IconBtn aria-label="Add to cart">
            <ShoppingBag size={14} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}