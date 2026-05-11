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
      className={`
        relative
        w-full
        max-w-[420px]
        mx-auto
        flex flex-col

        rounded-[2rem]
        cursor-pointer
        outline-none

        border
        ${selected ? "border-white/25" : "border-white/10"}

        bg-[linear-gradient(175deg,#1e2d1f_0%,#111811_100%)]

        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)]
        hover:border-white/20

        focus-visible:ring-2 focus-visible:ring-white/40

        overflow-hidden
        group
      `}
    >
      {/* RADIAL TOP GLOW */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,#3b5b3f_0%,transparent_55%)] opacity-60 pointer-events-none" />

      {/* PLANT IMAGE — fills top half, overflows slightly */}
      <div className="relative z-10 flex justify-center items-end pt-6 pb-0 h-[280px]">
        <img
          src={plant.img}
          alt={plant.name}
          loading="lazy"
          className="
            w-auto h-[270px]
            max-w-[90%]
            object-contain
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]
            transition-all duration-500
            group-hover:scale-[1.05]
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-20 px-8 pt-6 pb-8 flex flex-col flex-1">

        {/* NAME */}
        <h2 className="text-white text-[1.7rem] font-normal leading-snug mb-3">
          {plant.name}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/55 text-[1rem] leading-relaxed mb-5 flex-1">
          {plant.desc}
        </p>

        {/* PRICE + CART ROW */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-white text-[1.8rem] font-normal tracking-[-0.5px]">
            {plant.price}
          </span>

          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            aria-label="Add to cart"
            className="
              w-[52px] h-[52px]
              rounded-xl
              border border-white/25
              bg-white/5
              flex items-center justify-center
              text-white/70
              transition-all duration-300
              hover:bg-white hover:text-black hover:border-white
              active:scale-[0.96]
            "
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}