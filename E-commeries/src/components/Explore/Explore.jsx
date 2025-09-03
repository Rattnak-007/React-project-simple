import {
  Monitor,
  Tablet,
  Tag,
  Server,
  Headphones,
  Settings,
  User,
  Laptop,
} from "lucide-react";

const exploreItems = [
  {
    title: "PCs & Tablets",
    icon: <Tablet size={32} />,
  },
  {
    title: "PC Accessories & Electronics",
    icon: <Tag size={32} />,
  },
  {
    title: "Monitors",
    icon: <Monitor size={32} />,
  },
  {
    title: "Servers & Storage",
    icon: <Server size={32} />,
  },
  {
    title: "Solutions & Services",
    icon: <Settings size={32} />,
  },
  {
    title: "Support",
    icon: <Headphones size={32} />,
  },
  {
    title: "About",
    icon: <Laptop size={32} />,
  },
];

export default function Explore() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
        Explore
      </h2>
      <div className="flex flex-nowrap overflow-x-auto gap-4 sm:gap-8 md:gap-12 justify-start sm:justify-center pb-2">
        {exploreItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[110px] sm:min-w-[128px] w-[110px] sm:w-32"
          >
            <div className="bg-gray-100 rounded-full flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
              {item.icon}
            </div>
            <span className="text-xs sm:text-base md:text-lg font-medium text-gray-900 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
