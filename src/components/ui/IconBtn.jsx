export default function IconBtn({ children, className = "", ...props }) {
  return (
    <button
      className={`w-9 h-9 border border-[#2D4A2F] rounded-full flex items-center justify-center text-[#7A9E7A] transition-all duration-200 hover:border-[#A8C5A0] hover:bg-[#A8C5A0]/10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}