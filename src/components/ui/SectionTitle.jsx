export default function SectionTitle({ children }) {
  return (
    <div className="flex justify-center mb-20">
      <div
        className="
        relative

        border
        border-[#486248]

        rounded-md

        px-8
        py-2
      "
      >
        <div
          className="
          absolute
          left-[-1px]
          top-[-1px]

          w-8
          h-8

          border-l-[4px]
          border-t-[4px]

          border-[#9f9b35]

          rounded-tl-2xl
        "
        />

        <div
          className="
          absolute
          right-[-1px]
          top-[-1px]

          w-8
          h-8

          border-r-[4px]
          border-t-[4px]

          border-[#9f9b35]

          rounded-tr-2xl
        "
        />

        <h2
          className="
          font-serif

          text-5xl
          md:text-6xl

          font-bold

          text-white
        "
        >
          {children}
        </h2>
      </div>
    </div>
  );
}