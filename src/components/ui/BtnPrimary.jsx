export default function BtnPrimary({
  children,
  className = "",
}) {
  return (
    <button
      className={`bg-[#E8EDE8] text-[#0D1B0F]
      px-5 py-2.5 rounded-full
      font-semibold transition-all
      hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}