export default function IconBtn({ children, className = "", ...props }) {
  return (
    <button
      className={`
        flex items-center justify-center
        w-[68px] h-[68px]
        rounded-full
        border border-white/40
        bg-white/5
        backdrop-blur-md
        text-white/80
        transition-all duration-300
        hover:bg-white hover:text-black hover:border-white
        active:scale-[0.96]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}