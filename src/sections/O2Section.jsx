import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Dots from "../components/ui/Dots";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function O2Section() {
  const [page, setPage] = useState(1);
  const MAX = 4;
  const next = () => setPage((p) => (p < MAX ? p + 1 : 1));
  const prev = () => setPage((p) => (p > 1 ? p - 1 : MAX));

  return (
    <section id="o2" className="px-8 md:px-14 lg:px-20 py-28 max-w-[1700px] mx-auto">
      <SectionTitle>Our Best o2</SectionTitle>

      <div className="
        relative overflow-hidden
        bg-white/[0.03]
        border border-white/10
        rounded-[3.5rem]
        px-10 md:px-14 py-12
        flex flex-col md:flex-row
        items-center gap-10 md:gap-16
        backdrop-blur-xl
      ">
        {/* inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,180,100,0.08),transparent_60%)]" />

        {/* PLANT — large, overflows slightly */}
        <div className="relative z-10 flex-shrink-0 w-full md:w-[360px] lg:w-[420px]">
          <img
            src="/plants/aglaonema.png"
            alt="O2 plant"
            className="w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)] -mt-10"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex-1">
          <h3 className="font-bold text-white text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] mb-7">
            We Have Small And Best O2 Plants Collection's
          </h3>

          <p className="text-[#d4d4d4] text-[1.1rem] md:text-[1.25rem] leading-relaxed mb-5">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>

          <p className="text-[#d4d4d4] text-[1.1rem] md:text-[1.25rem] leading-relaxed mb-10">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            {/* EXPLORE BUTTON */}
            <button className="
              bg-white/10 text-white
              text-[1.1rem] font-medium
              px-10 py-4
              rounded-full
              border border-white/30
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white hover:text-black hover:border-white
            ">
              Explore
            </button>

            {/* PAGINATION */}
            <div className="flex items-center gap-4 ml-auto">
              <button
                onClick={prev}
                aria-label="Previous"
                className="
                  w-11 h-11 rounded-full
                  border border-white/30
                  flex items-center justify-center
                  text-white/70
                  transition-all hover:border-white hover:text-white
                "
              >
                <ChevronLeft size={18} />
              </button>

              <span className="text-white/70 text-[1rem] font-light min-w-[60px] text-center">
                0{page}
                <span className="text-white/30">/0{MAX}</span>
              </span>

              <button
                onClick={next}
                aria-label="Next"
                className="
                  w-11 h-11 rounded-full
                  border border-white/60
                  flex items-center justify-center
                  text-white/90
                  transition-all hover:border-white hover:text-white hover:bg-white/10
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="mt-8">
        <Dots count={3} active={page - 1 < 3 ? page - 1 : 0} />
      </div>
    </section>
  );
}
