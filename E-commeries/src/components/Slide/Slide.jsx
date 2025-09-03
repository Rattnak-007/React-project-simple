import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Headphones,
  Monitor,
  Gamepad2,
  Keyboard,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    title: "Ultimate Gaming Setup",
    subtitle: "Mechanical Keyboards & Gaming Mice",
    description: "Precision-engineered peripherals for competitive edge",
    button: "Explore Gaming Gear",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "from-purple-600 to-pink-600",
    price: "Starting at $89",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1600&q=80",
    title: "Professional Workspace",
    subtitle: "4K Monitors & Ergonomic Solutions",
    description: "Transform your productivity with premium displays",
    button: "Shop Monitors",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    price: "From $299",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1600&q=80",
    title: "Audiophile Experience",
    subtitle: "Premium Headsets & Studio Microphones",
    description: "Crystal-clear audio for gaming and content creation",
    button: "Discover Audio",
    icon: <Headphones className="w-8 h-8" />,
    color: "from-orange-600 to-red-600",
    price: "Starting $149",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1600&q=80",
    title: "RGB Lighting Ecosystem",
    subtitle: "Smart LED Strips & Custom Lighting",
    description: "Create the perfect ambiance for your battlestation",
    button: "Light It Up",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600",
    price: "From $59",
  },
];

export default function PCAccessorySlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto slide with progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[670px] overflow-hidden shadow-2xl bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.1, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Enhanced Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slides[current].color} opacity-80`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12">
            {/* Icon Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"
            >
              {slides[current].icon}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            >
              {slides[current].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-2xl mb-3 md:mb-4 font-semibold text-gray-100"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm md:text-lg mb-4 md:mb-6 text-gray-200 max-w-2xl"
            >
              {slides[current].description}
            </motion.p>

            {/* Price */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 bg-yellow-500 text-black rounded-full font-bold"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{slides[current].price}</span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:bg-gray-100 border-2 border-white/20 backdrop-blur-sm"
            >
              {slides[current].button}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 md:p-5 rounded-2xl transition-all duration-300 shadow-lg border border-white/20 group"
      >
        <ChevronLeft
          size={32}
          className="group-hover:-translate-x-1 transition-transform"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 md:p-5 rounded-2xl transition-all duration-300 shadow-lg border border-white/20 group"
      >
        <ChevronRight
          size={32}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
      >
        {isPlaying ? (
          <div className="w-4 h-4 flex gap-1">
            <div className="w-1.5 h-4 bg-white rounded-full"></div>
            <div className="w-1.5 h-4 bg-white rounded-full"></div>
          </div>
        ) : (
          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        )}
      </button>

      {/* Enhanced Dot Indicators with Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
            {current === index && (
              <div
                className="absolute inset-0 rounded-full bg-white/30 scale-150"
                style={{
                  background: `conic-gradient(white ${
                    progress * 3.6
                  }deg, transparent 0deg)`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-white/20">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
