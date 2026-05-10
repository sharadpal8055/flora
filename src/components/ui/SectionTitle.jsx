export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E8EDE8] mb-10 font-serif">
      <span className="inline-block border border-[#2D4A2F] px-4 py-1 rounded">
        {children}
      </span>
    </h2>
  );
}