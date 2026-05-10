import BtnPrimary from "../components/ui/BtnPrimary";
import BtnOutline from "../components/ui/BtnOutline";
import { Play } from "lucide-react";
import Stars from "../components/ui/Stars";
import Dots from "../components/ui/Dots";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28"
      style={{
        background: "radial-gradient(ellipse at 35% 60%, #1a3a1c 0%, #0D1B0F 65%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: copy */}
        <div className="flex-1 min-w-0">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#E8EDE8] mb-5">
            Earth's<br />Exhale
          </h1>
          <p className="text-[#7A9E7A] text-sm md:text-base max-w-sm mb-8 leading-relaxed">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>
          <div className="flex flex-wrap gap-3">
            <BtnPrimary>Buy Now</BtnPrimary>
            <BtnOutline>
              <Play size={14} fill="currentColor" />
              Live Demo...
            </BtnOutline>
          </div>

          {/* Review badge */}
          <div className="mt-10 inline-flex items-start gap-3 bg-[#162118] border border-[#2D4A2F] rounded-2xl p-3 pr-5">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt="Ronnie Hamill"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-xs font-semibold text-[#E8EDE8]">Ronnie Hamill</p>
              <Stars rating={5} />
              <p className="text-[#7A9E7A] text-xs max-w-[180px] leading-snug mt-1">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>
        </div>

        {/* Right: hero image + floating card */}
        <div className="relative flex-1 hidden md:flex justify-center items-center min-w-[280px]">
          <img
            src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&q=80"
            alt="Hero plant"
            className="w-64 h-64 object-contain drop-shadow-2xl relative z-10"
          />

          {/* Floating product card */}
          <div className="absolute top-0 right-0 bg-[#162118] border border-[#2D4A2F] rounded-2xl p-4 w-44 shadow-2xl z-20">
            <img
              src="https://images.unsplash.com/photo-1602923668104-8f9e03a0e6a8?w=300&q=80"
              alt="Aglaonema plant"
              className="w-full h-24 object-contain mb-2"
            />
            <p className="text-[#7A9E7A] text-[10px] mb-0.5">Indoor Plant</p>
            <p className="text-[#E8EDE8] text-xs font-semibold mb-2">Aglaonema plant</p>
            <BtnPrimary className="w-full justify-center text-xs py-1.5 !px-0">
              Buy Now
            </BtnPrimary>
            <div className="mt-2 flex justify-center">
              <Dots count={3} active={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}