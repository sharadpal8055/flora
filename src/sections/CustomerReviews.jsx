import SectionTitle from "../components/ui/SectionTitle";
import TestimonialCard from "../components/cards/TestimonialCard";
import { REVIEWS } from "../data/reviews";

export default function CustomerReviews() {
  return (
    <section id="reviews" className="px-8 md:px-14 lg:px-20 py-28 max-w-[1700px] mx-auto">
      <SectionTitle>Customer Review</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <TestimonialCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
