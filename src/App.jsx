import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HeroBanner from "./sections/HeroBanner";
import TrendingPlants from "./sections/TrendingPlants";
import TopSelling from "./sections/TopSelling";
import CustomerReviews from "./sections/CustomerReviews";
import O2Section from "./sections/O2Section";

export default function App() {
  return (
  <div className="bg-[#0D1B0F] text-[#E8EDE8] min-h-screen">
      <Navbar />
      <HeroBanner />
      <TrendingPlants />
      <TopSelling />
      <CustomerReviews />
      <O2Section />
      <Footer />
    </div>
  );
}