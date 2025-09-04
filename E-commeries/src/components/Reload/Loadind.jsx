import { useState, useEffect } from "react";
import { Cpu, Sparkles } from "lucide-react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (Math.random() * 10 + 1);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="relative flex flex-col items-center bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-purple-500/30 max-w-md w-full overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
          <div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Animated Icon */}
        <div className="relative mb-6">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20"></div>
            <Cpu className="text-purple-300" size={40} />
            <Sparkles
              className="absolute -top-1 -right-1 text-yellow-300 animate-ping"
              size={16}
            />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
          Loading Premium Gear
        </h2>

        <p className="text-gray-300 text-sm mb-6 text-center">
          Preparing the ultimate gaming experience for you
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 overflow-hidden">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/30"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <div className="flex justify-between text-sm text-gray-400 w-full">
          <span>Initializing...</span>
          <span className="font-semibold">
            {Math.min(100, Math.round(progress))}%
          </span>
        </div>

        {/* RGB accent at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
      </div>

      {/* Pulsing circles in background */}
      <div className="fixed -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full animate-pulse"></div>
      <div
        className="fixed -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default Loading;
