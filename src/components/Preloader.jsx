import { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-black/80">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-pink-500 to-blue-500 opacity-20"></div>
      </div>

      {/* Gradient text with pop-in animation */}
      <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pop">
        Hi there !!
      </h1>
    </div>
  );
}
