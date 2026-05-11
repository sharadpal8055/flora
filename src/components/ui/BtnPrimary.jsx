export default function BtnPrimary({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        bg-white text-black
        font-semibold text-[1.1rem] tracking-wide
        px-9 py-4
        rounded-full
        border-2 border-white
        transition-all duration-300
        hover:bg-transparent hover:text-white
        active:scale-[0.97]
        ${className}
      `}
    >
      {children}
    </button>
  );
}
