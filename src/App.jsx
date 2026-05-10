import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroBanner from "./sections/HeroBanner";
import TrendingPlants from "./sections/TrendingPlants";
import TopSelling from "./sections/TopSelling";
import CustomerReviews from "./sections/CustomerReviews";
import O2Section from "./sections/O2Section";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="
        fixed
        inset-0
        z-0

        bg-[url('/plants/bg-plant.jpg')]
        bg-cover
        bg-center
        bg-no-repeat

        scale-[1.08]

        opacity-40
      "
      />

      {/* DARK LAYER */}
      <div
        className="
        fixed
        inset-0
        z-0

        bg-black/72
      "
      />

      {/* LEFT GREEN AMBIENT */}
      <div
        className="
        fixed
        left-[-10%]
        top-[10%]

        w-[700px]
        h-[700px]

        rounded-full

        bg-[#2d6b35]

        blur-[170px]

        opacity-20

        z-0
      "
      />

      {/* RIGHT GREEN AMBIENT */}
      <div
        className="
        fixed
        right-[-10%]
        top-[5%]

        w-[600px]
        h-[600px]

        rounded-full

        bg-[#4f8c42]

        blur-[160px]

        opacity-20

        z-0
      "
      />

      {/* CENTER GLOW */}
      <div
        className="
        fixed
        inset-0
        z-0

        bg-[radial-gradient(circle_at_center,rgba(85,140,90,0.12),transparent_45%)]
      "
      />

      {/* VIGNETTE */}
      <div
        className="
        fixed
        inset-0
        z-0

        bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.9)_100%)]
      "
      />

      <div className="relative z-10">
        <Navbar />
        <HeroBanner />
        <TrendingPlants />
        <TopSelling />
        <CustomerReviews />
        <O2Section />
        <Footer />
      </div>
    </div>
  );
}