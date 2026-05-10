import Stars from "../ui/Stars";

export default function TestimonialCard({ review }) {
  return (
    <div
      className="
      relative

      overflow-hidden

      rounded-[3rem]

      border
      border-white/10

      bg-white/[0.03]

      backdrop-blur-xl

      p-10

      min-h-[320px]
    "
    >
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,rgba(160,255,160,0.06),transparent_60%)]
      "
      />

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-8">
          <img
            src={review.avatar}
            alt={review.name}
            className="
            w-16
            h-16

            rounded-full
            object-cover
          "
          />

          <div>
            <p className="text-white text-4xl font-semibold">
              {review.name}
            </p>

            <Stars rating={review.rating} />
          </div>
        </div>

        <p
          className="
          text-[#d4d4d4]

          text-2xl

          leading-relaxed
        "
        >
          {review.text}
        </p>
      </div>
    </div>
  );
}