import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection({ currentIndex, heroItems }) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], ["0%", "-20%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "-10%"]);

  const {
    titleTop,
    titleBottom,
    image,
    topColor,
    bottomColor,
    topTextColor,
    bottomTextColor,
  } = heroItems[currentIndex];

  const bgStyle = {
    background: `linear-gradient(to bottom, ${topColor} 0%, ${bottomColor} 100%)`,
    transition: "background 0.5s ease",
  };

  return (
    <div
      className="h-screen relative flex flex-col justify-center items-center gap-4 sm:gap-6 text-center overflow-hidden px-4"
      style={bgStyle}
    >
      {/* Top Text */}
      <motion.h1
        key={titleTop}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-[Poppins] font-extrabold z-1 relative leading-tight"
        style={{ y: textY, color: topTextColor }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {titleTop}
      </motion.h1>

      {/* Hero Image */}
      <motion.img
        key={image}
        src={image}
        alt="Hero"
        className="absolute z-2 w-76 sm:w-68 md:w-76 lg:w-90 max-w-[90%]"
        style={{
          y: imageY,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
        initial={{ y: "20%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Bottom Text */}
      <motion.h1
        key={titleBottom}
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-[Poppins] font-extrabold z-3 relative leading-tight"
        style={{
          y: textY,
          background: `linear-gradient(90deg, ${bottomTextColor}, ${bottomColor})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {titleBottom}
      </motion.h1>
    </div>
  );
}
