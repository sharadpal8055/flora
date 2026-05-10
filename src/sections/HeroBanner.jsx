import BtnPrimary from "../components/ui/BtnPrimary";
import BtnOutline from "../components/ui/BtnOutline";
import { Play } from "lucide-react";
import Stars from "../components/ui/Stars";
import Dots from "../components/ui/Dots";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="
      relative

      px-8
      md:px-16
      xl:px-24

      pt-32
      pb-20

      min-h-screen

      flex
      items-center
    "
    >
      <div
        className="
        w-full
        max-w-[1600px]
        mx-auto

        grid
        md:grid-cols-2

        items-center
        gap-10
      "
      >
        {/* LEFT */}
        <div className="relative z-20">

          <h1
            className="
            font-serif

            text-[5rem]
            md:text-[7rem]
            xl:text-[8rem]

            leading-[0.9]

            font-bold

            tracking-[-4px]

            text-[#EAEAEA]

            mb-8
          "
          >
            Earth’s
            <br />
            Exhale
          </h1>

          <p
            className="
            text-[#A7B9A6]

            text-lg
            md:text-[1.45rem]

            leading-[1.7]

            max-w-[38rem]

            mb-10
          "
          >
            "Earth Exhale" symbolizes the purity and vitality
            of the Earth's natural environment and its
            essential role in sustaining life.
          </p>

          <div className="flex items-center gap-5 mb-14">
            <BtnPrimary>Buy Now</BtnPrimary>

            <BtnOutline>
              <Play size={18} fill="currentColor" />
              Live Demo...
            </BtnOutline>
          </div>

          {/* REVIEW */}
          <div
            className="
            w-[24rem]

            rounded-[2rem]

            border
            border-white/10

            bg-[#162118]/70

            backdrop-blur-xl

            p-5

            shadow-[0_10px_50px_rgba(0,0,0,0.45)]
          "
          >
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/100?img=47"
                alt="Ronnie Hamill"
                className="
                w-14
                h-14

                rounded-full
                object-cover
              "
              />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Ronnie Hamill
                </h3>

                <Stars rating={5} />

                <p
                  className="
                  mt-3

                  text-[#B8C4B7]

                  text-sm
                  leading-relaxed
                "
                >
                  I can't express how thrilled I am with my new
                  natural plants! They bring such a fresh and
                  vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
          relative

          hidden
          md:flex

          justify-center
          items-center
        "
        >
          {/* BIG PLANT */}
          <img
            src="/plants/aglaonema.png"
            alt="Plant"

            className="
            w-[42rem]

            object-contain

            drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]

            relative
            right-[-3rem]
          "
          />

          {/* CARD */}
          <div
            className="
            absolute

            right-[-1rem]
            top-[5rem]

            w-[22rem]

            rounded-[3rem]

            border
            border-white/15

            bg-[#182319]/55

            backdrop-blur-2xl

            p-7

            shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          "
          >
            <div className="flex justify-center -mt-28 mb-2">
              <img
                src="/plants/aglaonema.png"
                alt="Plant"

                className="
                w-[18rem]

                object-contain

                drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]
              "
              />
            </div>

            <p className="text-white/70 text-lg mb-2">
              Indoor Plant
            </p>

            <div className="flex items-center justify-between gap-4">
              <h2
                className="
                text-[3.2rem]

                leading-[0.95]

                font-light

                tracking-[-2px]

                text-white
              "
              >
                Aglaonema
                <br />
                plant
              </h2>

              <span className="text-5xl text-white/80">
                ›
              </span>
            </div>

            <button
              className="
              mt-8

              w-full
              h-[5.5rem]

              rounded-[2rem]

              border-2
              border-white/70

              text-[2.2rem]
              font-light

              text-white

              bg-white/5

              transition-all
              duration-300

              hover:bg-white
              hover:text-black
            "
            >
              Buy Now
            </button>

            <div className="mt-7 flex justify-center">
              <Dots count={3} active={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}