import Stars from "../ui/Stars";

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-[#162118] border border-[#1e2e20] rounded-[1.25rem] p-5">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-[#E8EDE8] text-sm font-semibold">{review.name}</p>
          <Stars rating={review.rating} />
        </div>
      </div>
      <p className="text-[#7A9E7A] text-sm leading-relaxed">{review.text}</p>
    </div>
  );
}