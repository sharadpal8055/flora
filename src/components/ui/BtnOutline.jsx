export default function BtnOutline({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        bg-white/5 text-white
        font-medium text-[1.1rem]
        px-9 py-4
        rounded-full
        border border-white/50
        backdrop-blur-md
        transition-all duration-300
        hover:bg-white hover:text-black hover:border-white
        active:scale-[0.97]
        ${className}
      `}
    >
      {children}
    </button>
  );
}