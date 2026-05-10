export default function Dots({ count, active }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active
              ? "w-5 bg-[#A8C5A0]"
              : "w-2 bg-[#2D4A2F]"
          }`}
        />
      ))}
    </div>
  );
}