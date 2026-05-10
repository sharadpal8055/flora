import BtnOutline from "../ui/BtnOutline";
import IconBtn from "../ui/IconBtn";
import { ShoppingBag } from "lucide-react";

export default function TrendingCard({ plant }) {
  return (
    <div
      className={`
      relative

      overflow-hidden

      rounded-[4rem]

      border
      border-white/10

      bg-white/[0.03]

      backdrop-blur-xl

      min-h-[420px]

      px-14
      py-10

      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-10

      mb-14
    `}
    >
      {/* glow */}
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,rgba(160,255,160,0.08),transparent_60%)]

        z-0
      "
      />

      {/* image */}
      <div className="relative z-10 flex-1 flex justify-center">
        <img
          src={plant.img}
          alt={plant.name}
          className="
          w-[360px]
          md:w-[430px]

          object-contain

          drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]
        "
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex-1">
        <h3
          className="
          text-white

          font-bold

          text-5xl

          leading-tight

          mb-6
        "
        >
          {plant.name}
        </h3>

        <p
          className="
          text-[#d2d2d2]

          text-2xl

          leading-relaxed

          mb-8

          max-w-[650px]
        "
        >
          {plant.desc}
        </p>

        <h4
          className="
          text-white

          text-6xl

          font-bold

          mb-8
        "
        >
          {plant.price}
        </h4>

        <div className="flex items-center gap-5">
          <BtnOutline className="h-[74px] px-12 text-2xl">
            Explore
          </BtnOutline>

          <IconBtn className="w-[74px] h-[74px]">
            <ShoppingBag size={28} />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}