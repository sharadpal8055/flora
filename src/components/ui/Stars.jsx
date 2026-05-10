export default function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-[#F5B731] text-xs tracking-wide">
      {"★".repeat(full)}
      {half ? "½" : ""}
    </span>
  );
}