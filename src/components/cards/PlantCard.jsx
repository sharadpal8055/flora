import { ShoppingBag, ChevronRight } from "lucide-react";

export default function PlantCard({ plant, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      role="button"
      tabIndex={0}
      aria-label={plant.name}
      aria-pressed={selected}
      className="
      relative
      overflow-hidden

      w-[320px]
      h-[520px]

      rounded-[3rem]
      cursor-pointer

      border border-white/10

      bg-[linear-gradient(180deg,#1c261d_0%,#111811_100%)]

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

      group
    "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        z-0

        bg-[radial-gradient(circle_at_top,#3b5b3f_0%,transparent_55%)]

        opacity-60
      "
      />

      {/* GLOW */}
      <div
        className="
        absolute
        -top-24
        left-1/2
        -translate-x-1/2

        w-[420px]
        h-[220px]

        bg-white/20
        blur-[120px]
        rounded-full

        opacity-40

        z-0
      "
      />

      {/* IMAGE */}
      <div
        className="
        relative
        z-20

        flex
        justify-center

        pt-4
      "
      >
        <img
          src={plant.img}
          alt={plant.name}
          className="
          relative
          z-20

          w-[300px]
          h-[300px]

          object-contain

          drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]

          transition-all
          duration-500

          group-hover:scale-105
        "
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div
        className="
        absolute
        bottom-0
        left-0

        z-30

        w-full

        px-8
        pb-10
      "
      >
        {/* SMALL TEXT */}
        <p
          className="
          text-white/70
          text-[20px]
          font-light
          mb-2
        "
        >
          Indoor Plant
        </p>

        {/* TITLE */}
        <div className="flex items-center justify-between gap-4">
          <h2
            className="
            text-white
            text-[42px]
            leading-[1.05]
            font-light
            tracking-[-1.5px]
          "
          >
            Aglaonema plant
          </h2>

          <ChevronRight
            size={42}
            strokeWidth={1.7}
            className="text-white/80 shrink-0"
          />
        </div>

        {/* BUTTON */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Buy Now Clicked");
          }}
          className="
          mt-8

          w-full
          h-[78px]

          rounded-[1.7rem]

          border-2
          border-white/80

          text-white
          text-[30px]
          font-light

          backdrop-blur-md
          bg-white/5

          transition-all
          duration-300

          hover:bg-white
          hover:text-black

          active:scale-[0.98]

          flex
          items-center
          justify-center
          gap-3

          relative
          z-50
        "
        >
          <ShoppingBag size={24} strokeWidth={1.8} />
          Buy Now
        </button>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="w-10 h-2 rounded-full bg-white" />

          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />

          <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
        </div>
      </div>
    </div>
  );
}