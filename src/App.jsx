import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import BrandTickerSection from "./components/BrandTickerSection.jsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "./assets/1.png";
import Image2 from "./assets/2.png";
import Image3 from "./assets/3.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Example hero items
  const heroItems = [
    {
      titleTop: "Hi, I'm Vinay",
      titleBottom: "UI & UX Designer",
      image: Image,
      topColor: "#2681D1",
      bottomColor: "#888888",
      topTextColor: "#0f132a",
      bottomTextColor: "#f5f5f5ff",
    },
    {
      titleTop: "Hey, I'm Vinay",
      titleBottom: "FullStack Developer",
      image: Image2,
      topColor: "#00C49A",
      bottomColor: "#888888",
      topTextColor: "#193629ff",
      bottomTextColor: "#f0ededff",
    },
    {
      titleTop: "Yo, I'm Vinay",
      titleBottom: "Content Writer",
      image: Image3,
      topColor: "#232222ff", // deep black for top of background
      bottomColor: "#888888", // slightly lighter black/gray at bottom
      topTextColor: "#070707ff", // bright white for contrast on top text
      bottomTextColor: "#dddddd", // soft white/light gray for bottom text
    },
  ];

  // Handlers for arrows
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  };

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar currentIndex={currentIndex} heroItems={heroItems}/>

          <div className="relative h-screen">
            {/* Left Arrow */}
            <div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer "
              onClick={handlePrev}
            >
              <BsChevronLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer "
              onClick={handleNext}
            >
              <BsChevronRight size={30} />
            </div>

            {/* Hero Section */}
            <HeroSection currentIndex={currentIndex} heroItems={heroItems} />
          </div>

          <BrandTickerSection />
        </>
      )}
    </>
  );
}
