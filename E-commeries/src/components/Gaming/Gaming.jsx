import React, { useState } from "react";

const categories = [
  {
    name: "Keyboards",
    items: [
      {
        id: 1,
        name: "Corsair K95 RGB Platinum XT",
        image:
          "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400&q=80",
        price: "$199.99",
        detail:
          "Mechanical gaming keyboard with RGB lighting, macro keys, and Cherry MX Speed switches for ultra-fast response times.",
      },
      {
        id: 2,
        name: "Razer Huntsman Elite",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
        price: "$179.99",
        detail:
          "Opto-mechanical switches with light-based actuation, plush wrist rest, and Chroma RGB lighting.",
      },
      {
        id: 3,
        name: "SteelSeries Apex Pro",
        image:
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
        price: "$159.99",
        detail:
          "Adjustable actuation mechanical switches, OLED smart display, and aircraft-grade aluminum frame.",
      },
      {
        id: 4,
        name: "Logitech G915 TKL",
        image:
          "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=400&q=80",
        price: "$189.99",
        detail:
          "Wireless tenkeyless design with low-profile GL switches and 40-hour battery life.",
      },
    ],
  },
  {
    name: "Mice",
    items: [
      {
        id: 5,
        name: "Logitech G Pro X Superlight",
        image:
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80",
        price: "$129.99",
        detail:
          "Ultra-lightweight 63g wireless gaming mouse with HERO 25K sensor and 70-hour battery life.",
      },
      {
        id: 6,
        name: "Razer DeathAdder V3 Pro",
        image:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
        price: "$149.99",
        detail:
          "Focus Pro 30K sensor, 63g lightweight design, 90-hour battery, and ergonomic right-handed shape.",
      },
      {
        id: 7,
        name: "SteelSeries Rival 650",
        image:
          "https://images.unsplash.com/photo-1563297007-0686b6ed3bdb?auto=format&fit=crop&w=400&q=80",
        price: "$89.99",
        detail:
          "Dual sensor system with lift-off detection, customizable weight system, and 256 RGB zones.",
      },
      {
        id: 8,
        name: "Corsair M65 RGB Elite",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
        price: "$79.99",
        detail:
          "18,000 DPI optical sensor, aircraft-grade aluminum frame, and customizable RGB backlighting.",
      },
    ],
  },
  {
    name: "Headsets",
    items: [
      {
        id: 9,
        name: "SteelSeries Arctis 7P",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
        price: "$149.99",
        detail:
          "Wireless gaming headset with 24-hour battery, ClearCast noise-canceling microphone, and DTS 7.1 surround.",
      },
      {
        id: 10,
        name: "HyperX Cloud II",
        image:
          "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80",
        price: "$99.99",
        detail:
          "7.1 virtual surround sound, memory foam ear cushions, detachable noise-cancelling microphone.",
      },
      {
        id: 11,
        name: "Razer BlackShark V2 Pro",
        image:
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
        price: "$179.99",
        detail:
          "Wireless esports headset with THX 7.1 surround, titanium drivers, and advanced passive noise cancellation.",
      },
      {
        id: 12,
        name: "Corsair HS80 RGB Wireless",
        image:
          "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=400&q=80",
        price: "$139.99",
        detail:
          "Premium wireless gaming headset with Dolby Atmos, broadcast-grade microphone, and 20-hour battery.",
      },
    ],
  },
  {
    name: "Monitors",
    items: [
      {
        id: 13,
        name: "ASUS ROG Swift PG279QZ",
        image:
          "https://images.unsplash.com/photo-1593640408182-31174390f5d0?auto=format&fit=crop&w=400&q=80",
        price: "$599.99",
        detail:
          "27'' 1440p IPS gaming monitor with 165Hz refresh rate, G-SYNC compatibility, and 1ms response time.",
      },
      {
        id: 14,
        name: "Alienware AW3423DWF",
        image:
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
        price: "$899.99",
        detail:
          "34'' ultrawide QD-OLED curved monitor with 165Hz, HDR400, and infinite contrast ratio.",
      },
      {
        id: 15,
        name: "LG 27GP850-B",
        image:
          "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=400&q=80",
        price: "$449.99",
        detail:
          "27'' 1440p Nano IPS gaming monitor with 180Hz refresh rate and HDR10 support.",
      },
      {
        id: 16,
        name: "Samsung Odyssey G7",
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80",
        price: "$529.99",
        detail:
          "32'' curved 1440p QLED monitor with 240Hz, 1ms response time, and 1000R curvature.",
      },
    ],
  },
  {
    name: "Mouse Pads",
    items: [
      {
        id: 17,
        name: "Corsair MM800 RGB Polaris",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
        price: "$59.99",
        detail:
          "Hard surface RGB mouse pad with 15 RGB zones, wireless charging zone, and micro-textured surface.",
      },
      {
        id: 18,
        name: "Razer Goliathus Extended",
        image:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
        price: "$39.99",
        detail:
          "Extended gaming mouse pad with optimized surface texture and anti-slip rubber base.",
      },
      {
        id: 19,
        name: "SteelSeries QcK Heavy",
        image:
          "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80",
        price: "$24.99",
        detail:
          "Thick cloth gaming mouse pad with consistent surface texture and durable stitched edges.",
      },
      {
        id: 20,
        name: "Logitech G840 XL",
        image:
          "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=400&q=80",
        price: "$49.99",
        detail:
          "Extra-large gaming surface with moderate surface friction for precise control and comfort.",
      },
    ],
  },
  {
    name: "Speakers",
    items: [
      {
        id: 21,
        name: "Logitech G560 LIGHTSYNC",
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80",
        price: "$199.99",
        detail:
          "2.1 gaming speakers with RGB lighting that syncs with games, 240W peak power, and DTS:X Ultra.",
      },
      {
        id: 22,
        name: "Razer Nommo Pro",
        image:
          "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80",
        price: "$499.99",
        detail:
          "2.1 THX certified gaming speakers with dedicated subwoofer, Dolby Virtual Surround Sound.",
      },
      {
        id: 23,
        name: "Creative Pebble V3",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        price: "$59.99",
        detail:
          "Minimalist 2.0 USB-C desktop speakers with RGB lighting and 8W RMS total output.",
      },
      {
        id: 24,
        name: "Klipsch ProMedia 2.1",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
        price: "$149.99",
        detail:
          "THX-certified 2.1 computer speakers with 200W subwoofer and satellite control pod.",
      },
    ],
  },
  {
    name: "Webcams",
    items: [
      {
        id: 25,
        name: "Logitech StreamCam",
        image:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=400&q=80",
        price: "$149.99",
        detail:
          "1080p60 streaming webcam with auto-focus, smart exposure, and USB-C connectivity.",
      },
      {
        id: 26,
        name: "Razer Kiyo Pro",
        image:
          "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&q=80",
        price: "$199.99",
        detail:
          "4K Pro webcam with adaptive light sensor, HDR, and wide-angle lens with auto-focus.",
      },
      {
        id: 27,
        name: "Elgato Facecam",
        image:
          "https://images.unsplash.com/photo-1628191081676-f3c36f6b9edb?auto=format&fit=crop&w=400&q=80",
        price: "$179.99",
        detail:
          "Professional 1080p60 webcam with Sony sensor, fixed focus lens, and uncompressed video.",
      },
      {
        id: 28,
        name: "OBSBOT Tiny 4K",
        image:
          "https://images.unsplash.com/photo-1605648916319-cf5b7331e3a5?auto=format&fit=crop&w=400&q=80",
        price: "$189.99",
        detail:
          "AI-powered 4K webcam with auto-tracking, gesture control, and gimbal stabilization.",
      },
    ],
  },
  {
    name: "Controllers",
    items: [
      {
        id: 29,
        name: "Xbox Wireless Controller",
        image:
          "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=400&q=80",
        price: "$59.99",
        detail:
          "Latest Xbox controller with enhanced D-pad, textured grips, and Bluetooth connectivity.",
      },
      {
        id: 30,
        name: "PlayStation DualSense",
        image:
          "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=80",
        price: "$69.99",
        detail:
          "PS5 controller with haptic feedback, adaptive triggers, and built-in microphone.",
      },
      {
        id: 31,
        name: "Razer Wolverine V2",
        image:
          "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=400&q=80",
        price: "$99.99",
        detail:
          "Pro gaming controller with remappable buttons, trigger stops, and Mecha-Tactile switches.",
      },
      {
        id: 32,
        name: "8BitDo SN30 Pro+",
        image:
          "https://images.unsplash.com/photo-1551954810-43cd6aef5b1f?auto=format&fit=crop&w=400&q=80",
        price: "$49.99",
        detail:
          "Retro-styled wireless controller with motion controls, rumble, and 20-hour battery life.",
      },
    ],
  },
];

export default function GamingAccessoriesStore() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = selectedCategory.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-scree bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Gaming PC Accessories
          </h1>
          <p className="text-gray-600 text-lg">
            Elevate your gaming experience with premium peripherals
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search accessories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-lg bg-white border border-blue-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedItem(null);
                setSearchTerm("");
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory.name === cat.name
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 p-6 cursor-pointer group hover:scale-105 shadow"
              onClick={() => setSelectedItem(item)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-lg text-blue-900 mb-2 line-clamp-2">
                {item.name}
              </h3>
              <div className="text-blue-500 font-bold text-xl mb-3">
                {item.price}
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-blue-400 text-xl">
              No items found matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-blue-200 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
              <button
                className="absolute top-4 right-4 text-blue-400 hover:text-blue-600 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-50 transition-all duration-200"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>

              <div className="text-center">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <h3 className="font-bold text-2xl text-blue-900 mb-3">
                  {selectedItem.name}
                </h3>

                <div className="text-blue-500 font-bold text-3xl mb-4">
                  {selectedItem.price}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedItem.detail}
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    onClick={() => setSelectedItem(null)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="px-6 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
