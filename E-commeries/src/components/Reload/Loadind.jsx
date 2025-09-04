import { useState, useEffect } from "react";
import {
  Monitor,
  Cpu,
  Mouse,
  Keyboard,
  Headphones,
  Cable,
  Sparkles,
} from "lucide-react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              backgroundColor: `rgba(${Math.random() * 100 + 155}, ${
                Math.random() * 100 + 155
              }, 255, 0.2)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-md w-full">
        {/* Animated PC Setup */}
        <div className="relative w-72 h-56 mb-8 flex items-end justify-center">
          {/* Desk */}
          <div className="absolute bottom-0 w-64 h-2 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 rounded-t-lg"></div>

          {/* Monitor */}
          <div className="absolute bottom-2 w-40 h-28 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg rounded-b-none border-t-4 border-blue-400/50">
            {/* Screen */}
            <div className="h-20 mt-4 mx-2 bg-gray-900 rounded-sm border border-gray-700/50 flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-600"></div>
          </div>

          {/* Keyboard */}
          <div className="absolute bottom-4 w-32 h-8 bg-gray-800 rounded-md transform perspective-500 rotate-x-10 border border-gray-600/50">
            <div className="h-4 mt-1 mx-2 bg-gray-700 rounded-sm"></div>
          </div>

          {/* Mouse */}
          <div className="absolute bottom-4 right-14 w-8 h-12 bg-gray-800 rounded-md transform perspective-500 rotate-x-10 border border-gray-600/50"></div>

          {/* Animated components floating above */}
          <div className="absolute top-0 left-0 w-full flex justify-between px-6">
            <Cpu
              className="text-blue-400 animate-bounce"
              size={20}
              style={{ animationDelay: "0.1s" }}
            />
            <Mouse
              className="text-purple-400 animate-bounce"
              size={20}
              style={{ animationDelay: "0.3s" }}
            />
            <Keyboard
              className="text-cyan-400 animate-bounce"
              size={20}
              style={{ animationDelay: "0.5s" }}
            />
            <Headphones
              className="text-amber-400 animate-bounce"
              size={20}
              style={{ animationDelay: "0.7s" }}
            />
          </div>
        </div>

        {/* Logo and Progress */}
        <div className="text-center w-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Monitor className="text-blue-400 drop-shadow-lg" size={36} />
              <Sparkles
                className="absolute -top-1 -right-1 text-yellow-400"
                size={14}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              PC Accessory Hub
            </span>
          </div>

          <p className="text-gray-300 text-sm font-medium mb-4">
            Curating premium components for your ultimate setup...
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-4 overflow-hidden">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-gray-400">
            <span>Loading...</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
        </div>
      </div>

      {/* RGB accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse"></div>
    </div>
  );
};

export default Loading;
