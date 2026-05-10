export default function BtnOutline({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 border border-[#4a6e4c] text-[#E8EDE8] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:border-[#A8C5A0] hover:bg-[#A8C5A0]/10 ${className}`}
    >
      {children}
    </button>
  );
}