import Stars from "../ui/Stars";

export default function TestimonialCard({ review }) {
  return (
    <div className="
      relative overflow-hidden
      rounded-[2.5rem]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      p-9
      min-h-[300px]
      flex flex-col
      transition-all duration-300
      hover:bg-white/[0.07]
      hover:border-white/20
      hover:-translate-y-1
    ">
      {/* subtle inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(120,200,120,0.06),transparent_60%)]" />

      <div className="relative z-10 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-center gap-5 mb-7">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-[72px] h-[72px] rounded-full object-cover ring-2 ring-white/10"
          />
          <div>
            <p className="text-white text-[1.7rem] font-semibold leading-tight">
              {review.name}
            </p>
            <div className="mt-1">
              <Stars rating={review.rating} size="text-[1.3rem]" />
            </div>
          </div>
        </div>

        {/* REVIEW TEXT */}
        <p className="text-[#d4d4d4] text-[1.15rem] leading-[1.75] flex-1">
          {review.text}
        </p>
      </div>
    </div>
  );
}
