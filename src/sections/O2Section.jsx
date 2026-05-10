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
  <section id="o2" className="px-8 md:px-16 py-32 max-w-[1700px] mx-auto">
      <SectionTitle>Our Best o2</SectionTitle>

     <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[4rem] px-14 py-14 flex flex-col md:flex-row items-center gap-14 backdrop-blur-xl">
        {/* Plant image */}
      <div className="flex-shrink-0 w-[420px]">
          <img
            src="/plants/aglaonema.png"
            alt="O2 plant"
            className="w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
         <h3 className="font-bold text-white text-6xl leading-tight mb-8">
            We Have Small And Best O2 Plants Collection's
          </h3>
         <p className="text-[#d4d4d4] text-2xl leading-relaxed mb-6">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p className="text-[#d4d4d4] text-2xl leading-relaxed mb-6">
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