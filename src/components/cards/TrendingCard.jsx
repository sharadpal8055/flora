import BtnOutline from "../ui/BtnOutline";
import IconBtn from "../ui/IconBtn";
import { ShoppingBag } from "lucide-react";

export default function TrendingCard({ plant }) {
  return (
    <div className="
      relative overflow-hidden
      rounded-[3.5rem]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      min-h-[400px]
      px-10 md:px-16 py-12
      flex flex-col md:flex-row
      items-center justify-between
      gap-10
      mb-10
      transition-all duration-500
      hover:bg-white/[0.07]
      hover:border-white/20
      group
    ">
      {/* INNER GLOW */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(120,200,120,0.07),transparent_65%)]" />

      {/* PLANT IMAGE */}
      <div className={`relative z-10 flex-1 flex justify-center ${plant.reverse ? "md:order-2" : ""}`}>
        <img
          src={plant.img}
          alt={plant.name}
          className="
            w-[280px] md:w-[380px] lg:w-[420px]
            object-contain
            drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)]
            transition-all duration-500
            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* CONTENT */}
      <div className={`relative z-10 flex-1 ${plant.reverse ? "md:order-1" : ""}`}>
        <h3 className="text-white font-bold text-[2.4rem] md:text-[3rem] leading-tight mb-5">
          {plant.name}
        </h3>
        <p className="text-[#d2d2d2] text-[1.15rem] md:text-[1.3rem] leading-relaxed mb-7 max-w-[520px]">
          {plant.desc}
        </p>
        <h4 className="text-white text-[2.8rem] md:text-[3.5rem] font-bold mb-8 tracking-[-1px]">
          {plant.price}
        </h4>
        <div className="flex items-center gap-5">
          <BtnOutline className="h-[68px] px-10 text-[1.15rem]">
            Explore
          </BtnOutline>
          <IconBtn>
            <ShoppingBag size={26} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}
