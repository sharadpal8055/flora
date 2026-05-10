import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import BtnOutline from "../components/ui/BtnOutline";
import IconBtn from "../components/ui/IconBtn";
import Dots from "../components/ui/Dots";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function O2Section() {
  const [page, setPage] = useState(1);
  const MAX = 4;

  const next = () => setPage((p) => (p < MAX ? p + 1 : 1));
  const prev = () => setPage((p) => (p > 1 ? p - 1 : MAX));

  return (
    <section id="o2" className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <SectionTitle>Our Best o2</SectionTitle>

      <div className="bg-[#162118] border border-[#243226] rounded-[1.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Plant image */}
        <div className="flex-shrink-0 w-52 md:w-64">
          <img
            src="https://images.unsplash.com/photo-1612540139150-4c54d9b36db1?w=400&q=80"
            alt="O2 plant"
            className="w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#E8EDE8] mb-4 leading-snug">
            We Have Small And Best O2 Plants Collection's
          </h3>
          <p className="text-[#7A9E7A] text-sm leading-relaxed mb-3">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p className="text-[#7A9E7A] text-sm leading-relaxed mb-6">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <BtnOutline>Explore</BtnOutline>

            {/* Pagination */}
            <div className="flex items-center gap-3 ml-auto">
              <IconBtn onClick={prev} aria-label="Previous">
                <ChevronLeft size={14} />
              </IconBtn>
              <span className="text-[#7A9E7A] text-xs">
                0{page}
                <span className="text-[#2D4A2F]">/0{MAX}</span>
              </span>
              <IconBtn
                onClick={next}
                aria-label="Next"
                className="border-[#A8C5A0] text-[#A8C5A0]"
              >
                <ChevronRight size={14} />
              </IconBtn>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6">
        <Dots count={3} active={0} />
      </div>
    </section>
  );
}