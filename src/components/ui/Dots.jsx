export default function Dots({ count, active }) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i === active
              ? "w-10 h-[7px] bg-white"
              : "w-[7px] h-[7px] bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}