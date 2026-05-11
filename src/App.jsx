import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroBanner from "./sections/HeroBanner";
import TrendingPlants from "./sections/TrendingPlants";
import TopSelling from "./sections/TopSelling";
import CustomerReviews from "./sections/CustomerReviews";
import O2Section from "./sections/O2Section";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* FIXED BACKGROUND PLANT IMAGE */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.08]"
        style={{
          backgroundImage: "url('/plants/bg-plant.jpg')",
          opacity: 0.45,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 z-0 bg-black/70" />

      {/* LEFT AMBIENT GLOW */}
      <div className="fixed left-[-8%] top-[8%] w-[600px] h-[600px] rounded-full bg-[#2d6b35] blur-[180px] opacity-25 z-0 pointer-events-none" />

      {/* RIGHT AMBIENT GLOW */}
      <div className="fixed right-[-8%] top-[4%] w-[550px] h-[550px] rounded-full bg-[#4a8840] blur-[160px] opacity-20 z-0 pointer-events-none" />

      {/* RADIAL CENTER GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(80,130,85,0.13),transparent_50%)]" />

      {/* VIGNETTE */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.88)_100%)]" />

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
