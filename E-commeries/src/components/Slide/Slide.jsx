import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Headphones,
  Monitor,
  Gamepad2,
  Play,
  Pause,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=600&fit=crop",
    title: "Ultimate Gaming Setup",
    subtitle: "Mechanical Keyboards & Gaming Mice",
    description: "Precision-engineered peripherals for competitive edge",
    button: "Explore Gaming Gear",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    rating: "4.9",
    price: "$299.99",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/f1/e7/fb/f1e7fbe7e3631d2c37292f2ec0447cd7.jpg",
    title: "Professional Workspace",
    subtitle: "4K Monitors & Ergonomic Solutions",
    description: "Transform your productivity with premium displays",
    button: "Shop Monitors",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-600",
    rating: "4.8",
    price: "$899.99",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/37/d5/d2/37d5d2809d8d76f0d377829209034eb1.jpg",
    title: "Audiophile Experience",
    subtitle: "Premium Headsets & Studio Microphones",
    description: "Crystal-clear audio for gaming and content creation",
    button: "Discover Audio",
    icon: <Headphones className="w-6 h-6" />,
    color: "from-orange-600 to-red-600",
    rating: "4.7",
    price: "$449.99",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/1200x/07/94/9c/07949cea7a2a88895efc604fe6ca222c.jpg",
    title: "RGB Lighting Ecosystem",
    subtitle: "Smart LED Strips & Custom Lighting",
    description: "Create the perfect ambiance for your battlestation",
    button: "Light It Up",
    icon: <Zap className="w-6 h-6" />,
    color: "from-green-600 to-emerald-600",
    rating: "4.6",
    price: "$159.99",
  },
];

export default function ModernPCAccessorySlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const slideInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
        setIsVisible(true);
        setProgress(0);
      }, 150);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isPlaying, slides.length]);

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsVisible(true);
    }, 150);
    setProgress(0);
  };

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsVisible(true);
    }, 150);
    setProgress(0);
  };

  const goToSlide = (index) => {
    if (index === current) return;
    setIsVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setIsVisible(true);
    }, 150);
    setProgress(0);
  };

  return (
    <div className="relative w-full mt-4 max-w-7xl mx-auto h-[630px] overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        style={{
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slides[current].color} opacity-90 mix-blend-overlay transition-all duration-700`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div
            className={`text-white space-y-6 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-8 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              {slides[current].icon}
              <span className="font-medium">{slides[current].subtitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <p className="text-lg text-gray-200 max-w-md">
              {slides[current].description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">
                  {slides[current].rating}
                </span>
              </div>
              <div className="text-lg font-semibold">
                {slides[current].price}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl flex items-center gap-2 group hover:scale-105 transition-transform duration-200">
                <ShoppingCart className="w-5 h-5" />
                {slides[current].button}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-xl border border-white/20 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Image content */}
          <div
            className={`relative hidden lg:block transition-all duration-700 ${
              isVisible
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-90 -rotate-3"
            }`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20 z-20 group"
      >
        <ChevronLeft
          size={24}
          className="group-hover:-translate-x-1 transition-transform"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20 z-20 group"
      >
        <ChevronRight
          size={24}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
            {current === index && (
              <div className="absolute -inset-1.5 rounded-full border border-white/50" />
            )}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className={`h-full transition-all duration-100 ${
            current % 2 === 0 ? "bg-white" : "bg-cyan-300"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full font-medium border border-white/20 z-20">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
