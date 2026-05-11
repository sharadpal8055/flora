import BtnPrimary from "../components/ui/BtnPrimary";
import BtnOutline from "../components/ui/BtnOutline";
import Stars from "../components/ui/Stars";
import Dots from "../components/ui/Dots";
import { Play, ChevronRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative px-8 md:px-14 lg:px-20 xl:px-28 pt-36 pb-24 min-h-screen flex items-center"
    >
      <div className="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 items-center gap-10 xl:gap-16">

        {/* ── LEFT COLUMN ── */}
        <div className="relative z-20">

          {/* HERO HEADING */}
          <h1 className="
            font-serif
            text-[5rem] md:text-[7rem] xl:text-[8.5rem]
            leading-[0.88]
            font-bold
            tracking-[-4px]
            text-[#EAEAEA]
            mb-8
          ">
            Earth's
            <br />
            Exhale
          </h1>

          {/* SUBTEXT */}
          <p className="
            text-[#A7B9A6]
            text-[1.1rem] md:text-[1.3rem]
            leading-[1.75]
            max-w-[36rem]
            mb-10
          ">
            "Earth Exhale" symbolizes the purity and vitality of the
            Earth's natural environment and its essential role in sustaining life.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-5 flex-wrap mb-14">
            <BtnPrimary>Buy Now</BtnPrimary>
            <BtnOutline>
              <Play size={18} fill="currentColor" />
              Live Demo...
            </BtnOutline>
          </div>

          {/* REVIEW BADGE */}
          <div className="
            inline-block
            max-w-[22rem]
            rounded-[1.8rem]
            border border-white/10
            bg-[#162118]/70
            backdrop-blur-xl
            p-5
            shadow-[0_10px_50px_rgba(0,0,0,0.45)]
          ">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt="Ronnie Hamill"
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-[1.1rem] font-semibold text-white mb-1">
                  Ronnie Hamill
                </h3>
                <Stars rating={5} size="text-[1.1rem]" />
                <p className="mt-2 text-[#B8C4B7] text-[0.9rem] leading-relaxed">
                  I can't express how thrilled I am with my new natural plants!
                  They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="relative hidden md:flex justify-center items-center">

          {/* LARGE BACKGROUND PLANT */}
          <img
            src="/plants/aglaonema.png"
            alt="Hero plant"
            className="
              w-[36rem] xl:w-[44rem]
              object-contain
              drop-shadow-[0_40px_70px_rgba(0,0,0,0.65)]
              relative z-10
              translate-x-12
            "
          />

          {/* FLOATING PRODUCT CARD */}
          <div className="
            absolute right-0 xl:-right-4 top-16
            w-[21rem]
            rounded-[2.5rem]
            border border-white/15
            bg-[#182319]/60
            backdrop-blur-2xl
            p-7
            shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            z-20
          ">
            {/* Plant overflowing top of card */}
            <div className="flex justify-center -mt-28 mb-3">
              <img
                src="/plants/aglaonema.png"
                alt="Aglaonema plant"
                className="w-[16rem] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            </div>

            <p className="text-white/60 text-[1.05rem] mb-1">Indoor Plant</p>

            <div className="flex items-start justify-between gap-3 mb-8">
              <h2 className="text-white text-[2.8rem] leading-[0.95] font-light tracking-[-1.5px]">
                Aglaonema
                <br />
                plant
              </h2>
              <span className="text-4xl text-white/70 mt-1">›</span>
            </div>

            <button className="
              w-full h-[5rem]
              rounded-[1.8rem]
              border-2 border-white/65
              text-[1.8rem] font-light text-white
              bg-white/5
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white hover:text-black
              active:scale-[0.98]
            ">
              Buy Now
            </button>

            <div className="mt-6">
              <Dots count={3} active={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
