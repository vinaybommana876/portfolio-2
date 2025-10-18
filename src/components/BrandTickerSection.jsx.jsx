import { motion } from "framer-motion";
import Brand1 from "../assets/skill-icons/react.png";
import Brand2 from "../assets/skill-icons/figma.png";
import Brand3 from "../assets/skill-icons/canva.png";
import Brand4 from "../assets/skill-icons/php.png";
import Brand5 from "../assets/skill-icons/python.png";
import Brand6 from "../assets/skill-icons/Firebase.png";
import Brand7 from "../assets/skill-icons/react.png";
import Brand8 from "../assets/skill-icons/Git.png";
// import Brand5 from "../assets/brand5.png";

export default function BrandTickerSection() {
  const brands = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
  ];

  // Repeat brands array to make the scrolling seamless
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="w-full flex items-center justify-between py-10 px-16 bg-gray-100">
      {/* Left Text */}
      <div className="w-1/4 pr-4">
        <h2 className="text-3xl font-bold">What I Bring with me</h2>
        <p className="text-gray-600 mt-2">
          Crafting seamless digital experiences, From code to
          design, I blend logic with creativity to make things happen.
        </p>
      </div>

      {/* Right Ticker */}
      <div className="w-3/4 overflow-hidden relative">
        <motion.div
          className="flex gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {repeatedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-16">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
