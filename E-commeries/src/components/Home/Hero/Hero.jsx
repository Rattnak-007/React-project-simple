import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Star,
  Truck,
  Shield,
  RotateCw,
  Heart,
  ShoppingCart,
  ZoomIn,
} from "lucide-react";
import Aula1 from "../../../assets/Image/SC620.jpg";
import Aula2 from "../../../assets/Image/SC380pro.jpg";
import Aula3 from "../../../assets/Image/SC525.jpg";
import Aula4 from "../../../assets/Image/SC580.jpg";
import Aula5 from "../../../assets/Image/SC660.jpg";
import Aula6 from "../../../assets/Image/SC800.jpg";
import Aula7 from "../../../assets/Image/SC860.jpg";
import Aula8 from "../../../assets/Image/SC900.jpg";
// Example data for demonstration
const newArrivals = [
  {
    id: 1,
    name: "Aula SC620 Wireless + ...",
    fullName: "Aula SC620 Wireless Mechanical Keyboard",
    image: Aula1,
    price: 25,
    hot: false,
    tags: [],
    description:
      "Experience the ultimate typing with the Aula SC620 wireless mechanical keyboard. Featuring customizable RGB lighting, responsive mechanical switches, and a sleek design that complements any setup.",
    features: [
      "Wireless connectivity",
      "RGB backlighting",
      "Mechanical switches",
      "Ergonomic design",
      "Long battery life",
    ],
    specifications: {
      "Switch Type": "Red Mechanical",
      Connectivity: "2.4GHz Wireless + Bluetooth",
      Battery: "2000mAh",
      Lighting: "16.8 million RGB colors",
      Weight: "850g",
    },
    stock: 15,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Aula SC380 Wireless + Blu...",
    fullName: "Aula SC380 Wireless Bluetooth Headset",
    image: Aula2,
    price: 100,
    hot: false,
    tags: [],
    description:
      "The Aula SC380 wireless headset delivers crystal-clear audio with active noise cancellation. Perfect for gaming, music, and calls with exceptional comfort during extended use.",
    features: [
      "Active noise cancellation",
      "50mm drivers",
      "30-hour battery",
      "Memory foam ear cups",
      "Foldable design",
    ],
    specifications: {
      "Driver Size": "50mm",
      "Battery Life": "30 hours",
      "Noise Cancellation": "Active Hybrid ANC",
      Connectivity: "Bluetooth 5.0",
      Weight: "285g",
    },
    stock: 8,
    rating: 4.7,
    reviews: 92,
  },
  {
    id: 3,
    name: "Aula 525 Wireless + Blu...",
    fullName: "Aula 525 Wireless Gaming Mouse",
    image: Aula3,
    price: 100,
    hot: false,
    tags: [],
    description:
      "Precision gaming mouse with customizable DPI settings and ergonomic design. Features RGB lighting and programmable buttons for the competitive edge.",
    features: [
      "Adjustable DPI up to 16000",
      "6 programmable buttons",
      "RGB lighting",
      "Ergonomic design",
      "1000Hz polling rate",
    ],
    specifications: {
      Sensor: "PixArt PMW3325",
      DPI: "200-16000",
      "Polling Rate": "1000Hz",
      Buttons: "6 programmable",
      Weight: "105g",
    },
    stock: 12,
    rating: 4.3,
    reviews: 76,
  },
  {
    id: 4,
    name: "AulaSC580 Wireless + Bluetooth Headset",
    fullName: "Aula580 Wireless Bluetooth Headset",
    image: Aula4,
    price: 50,
    hot: true,
    tags: ["HOT"],
    description:
      "AulaSC580 wireless Bluetooth headset with crystal-clear sound and comfortable fit. Ideal for gaming, calls, and music with long battery life.",
    features: [
      "Wireless connectivity",
      "30m range",
      "Plug-and-play",
      "Ergonomic design",
      "Battery indicator",
    ],
    specifications: {
      Range: "30 meters",
      Connectivity: "2.4GHz wireless",
      Battery: "AAA x 2 (12 months life)",
      Compatibility: "Windows, macOS, Chrome OS",
      Weight: "45g",
    },
    stock: 20,
    rating: 4.8,
    reviews: 215,
  },
  {
    id: 5,
    name: "Aula SC660 Wireless + Bluetooth Headset",
    fullName: "Aula SC660 Wireless Bluetooth Headset",
    image: Aula5,
    price: 55,
    hot: false,
    tags: [],
    description:
      "Aula SC660 wireless Bluetooth headset with crystal-clear sound and comfortable fit. Ideal for gaming, calls, and music with long battery life.",
    features: [
      "Cardioid pickup pattern",
      "RGB lighting",
      "Plug-and-play",
      "Volume control",
      "Mute button",
    ],
    specifications: {
      Type: "Condenser",
      Pattern: "Cardioid",
      "Sample Rate": "48kHz/16bit",
      Connectivity: "USB-C",
      Weight: "650g",
    },
    stock: 10,
    rating: 4.6,
    reviews: 143,
  },
  {
    id: 6,
    name: "Aula SC800 Wireless + Bluetooth Headset",
    fullName: "Aula SC800 Wireless Bluetooth Headset",
    image: Aula6,
    price: 10,
    hot: false,
    tags: [],
    description:
      "Aula SC800 wireless Bluetooth headset with crystal-clear sound and comfortable fit. Ideal for gaming, calls, and music with long battery life.",
    features: [
      "Wireless connectivity",
      "30m range",
      "Plug-and-play",
      "Ergonomic design",
      "LED indicators",
    ],
    specifications: {
      Compatibility: "Logitech G903, G703, G502",
      Power: "5W",
      Connection: "USB 2.0",
      Dimensions: "240mm x 240mm",
      Weight: "180g",
    },
    stock: 25,
    rating: 4.4,
    reviews: 87,
  },
];

const discounts = [
  {
    id: 101,
    name: "Keychron K2 V2",
    fullName: "Keychron K2 V2 Wireless Mechanical Keyboard",
    image: "https://i.imgur.com/7.png",
    price: 100,
    originalPrice: 157,
    discount: 57,
    hot: true,
    description:
      "Compact 75% layout mechanical keyboard with Bluetooth connectivity. Perfect for both Mac and Windows users with hot-swappable options.",
    features: [
      "75% layout",
      "Bluetooth 5.1",
      "RGB backlight",
      "Hot-swappable",
      "Mac/Windows compatible",
    ],
    specifications: {
      Layout: "75% (84 keys)",
      "Switch Type": "Gateron (Hot-swappable)",
      Battery: "4000mAh",
      Connectivity: "Bluetooth 5.1 + USB-C",
      Weight: "710g",
    },
    stock: 12,
    rating: 4.9,
    reviews: 327,
  },
  {
    id: 102,
    name: "Royal Kludge RK68",
    fullName: "Royal Kludge RK68 Wireless Mechanical Keyboard",
    image: "https://i.imgur.com/8.png",
    price: 79,
    originalPrice: 100,
    discount: 21,
    hot: false,
    description:
      "65% compact mechanical keyboard with triple mode connectivity. Features hot-swappable sockets and vibrant RGB lighting.",
    features: [
      "65% layout",
      "Triple mode connectivity",
      "Hot-swappable",
      "RGB lighting",
      "Type-C connection",
    ],
    specifications: {
      Layout: "65% (68 keys)",
      "Switch Type": "RK Red/Blue/Brown",
      Battery: "1800mAh",
      Connectivity: "2.4G/Bluetooth/USB-C",
      Weight: "600g",
    },
    stock: 7,
    rating: 4.5,
    reviews: 189,
  },
  {
    id: 103,
    name: "VXE Wireless Mouse",
    fullName: "VXE Wireless Gaming Mouse",
    image: "https://i.imgur.com/9.png",
    price: 35,
    originalPrice: 64,
    discount: 29,
    hot: false,
    description:
      "Lightweight wireless gaming mouse with high precision sensor and long battery life. Designed for competitive gaming.",
    features: [
      "Lightweight design",
      "High precision sensor",
      "1000Hz polling rate",
      "Omron switches",
      "RGB lighting",
    ],
    specifications: {
      Sensor: "PAW3335",
      DPI: "100-16000",
      "Polling Rate": "1000Hz",
      Battery: "500mAh (70 hours)",
      Weight: "75g",
    },
    stock: 18,
    rating: 4.6,
    reviews: 204,
  },
  {
    id: 104,
    name: "Blue Yeti Microphone",
    fullName: "Blue Yeti USB Microphone",
    image: "https://i.imgur.com/10.png",
    price: 62,
    originalPrice: 100,
    discount: 38,
    hot: false,
    description:
      "Professional USB microphone for recording, streaming, and podcasting. Features multiple pattern selection and studio-quality sound.",
    features: [
      "Tri-capsule array",
      "4 pattern selection",
      "Plug-and-play",
      "Gain control",
      "Mute button",
    ],
    specifications: {
      Type: "Condenser",
      Patterns: "Cardioid, Bidirectional, Omnidirectional, Stereo",
      "Sample Rate": "48kHz/16bit",
      Connectivity: "USB",
      Weight: "1.2kg",
    },
    stock: 9,
    rating: 4.7,
    reviews: 512,
  },
  {
    id: 105,
    name: "Logitech K380",
    fullName: "Logitech K380 Multi-Device Bluetooth Keyboard",
    image: "https://i.imgur.com/11.png",
    price: 45,
    originalPrice: 65,
    discount: 20,
    hot: false,
    description:
      "Compact multi-device Bluetooth keyboard that easily switches between devices. Perfect for home, office, or on the go.",
    features: [
      "Multi-device pairing",
      "Compact design",
      "Long battery life",
      "Easy-switch keys",
      "Compatible with all systems",
    ],
    specifications: {
      Layout: "Full-size with numeric pad",
      Battery: "2x AAA (24 months)",
      Connectivity: "Bluetooth 3.0",
      Compatibility: "Windows, macOS, Chrome OS, Android, iOS",
      Weight: "423g",
    },
    stock: 22,
    rating: 4.8,
    reviews: 428,
  },
  {
    id: 106,
    name: "Aula L99 Wireless",
    fullName: "Aula L99 Wireless Mechanical Keyboard",
    image: "https://i.imgur.com/12.png",
    price: 88,
    originalPrice: 100,
    discount: 12,
    hot: false,
    description:
      "Sleek wireless mechanical keyboard with customizable RGB lighting and responsive keys for both work and play.",
    features: [
      "Wireless connectivity",
      "RGB backlighting",
      "Mechanical switches",
      "Ergonomic design",
      "Long battery life",
    ],
    specifications: {
      "Switch Type": "Outemu Blue",
      Connectivity: "2.4GHz Wireless + USB-C",
      Battery: "3000mAh",
      Lighting: "RGB rainbow effects",
      Weight: "980g",
    },
    stock: 14,
    rating: 4.4,
    reviews: 96,
  },
];

// Product Detail Modal Component
function ProductDetailModal({ product, isOpen, onClose, discount = false }) {
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen || !product) return null;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key={fullStars}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={fullStars + i + 1} size={16} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 p-6">
            <div className="sticky top-6">
              <div
                className="relative w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`max-h-60 object-contain transition-transform duration-300 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                  />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2">
                  <ZoomIn size={16} />
                </div>
              </div>

              {/* Single image indicator */}
              <div className="flex justify-center mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 border-l md:border-l-gray-200">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {product.fullName || product.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              {discount && product.discount ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-red-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md font-semibold">
                    Save {product.discount}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md"
                >
                  -
                </button>
                <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md"
                >
                  +
                </button>
                <span className="ml-4 text-sm text-gray-600">
                  {product.stock} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors">
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Product Specifications */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <div key={index} className="flex">
                      <div className="w-2/5 text-gray-500">{key}</div>
                      <div className="w-3/5 text-gray-800 font-medium">
                        {value}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-around border-t border-gray-200 pt-6">
              <div className="flex flex-col items-center">
                <Truck size={24} className="text-blue-500 mb-1" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <RotateCw size={24} className="text-blue-500 mb-1" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield size={24} className="text-blue-500 mb-1" />
                <span className="text-sm text-gray-600">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Carousel component with enhanced scrolling
function Carousel({ title, items, discount = false }) {
  const ref = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setCurrentScrollPosition(scrollLeft);
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize scroll position check and add event listener
  useEffect(() => {
    checkScrollPosition();
    const carousel = ref.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition);
      return () => carousel.removeEventListener("scroll", checkScrollPosition);
    }
  }, [items]);

  const scroll = (dir) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToPosition = (position) => {
    if (ref.current) {
      ref.current.scrollTo({ left: position, behavior: "smooth" });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Calculate scroll indicators
  const calculateScrollIndicators = () => {
    if (!ref.current) return [];

    const { scrollWidth, clientWidth } = ref.current;
    const indicatorCount = Math.ceil(scrollWidth / clientWidth);
    const currentIndicator = Math.floor(currentScrollPosition / clientWidth);

    return Array.from(
      { length: indicatorCount },
      (_, i) => i === currentIndicator
    );
  };

  const scrollIndicators = calculateScrollIndicators();

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            className={`bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-all duration-300 ${
              showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className={`bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-all duration-300 ${
              showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll(1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative group">
        {/* Scroll indicators */}
        {scrollIndicators.length > 1 && (
          <div className="flex justify-center gap-1 mb-4">
            {scrollIndicators.map((isActive, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-red-500 w-6" : "bg-gray-300"
                }`}
                onClick={() =>
                  scrollToPosition(index * ref.current.clientWidth)
                }
                aria-label={`Scroll to position ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[220px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center p-5 relative cursor-pointer hover:shadow-md transition-all duration-300 snap-start"
              onClick={() => handleProductClick(item)}
            >
              <div className="mb-4 relative w-full h-40 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}

                {/* Badges */}
                <div className="absolute top-0 left-0 flex flex-col gap-1">
                  {item.hot && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                      HOT
                    </span>
                  )}
                  {discount && item.discount && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                      -{item.discount}%
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-sm text-gray-700 mb-2 line-clamp-2 h-10">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {discount && item.discount ? (
                      <>
                        <span className="font-bold text-lg text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-lg text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg p-2 transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fade effects for scroll indication */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        discount={discount}
      />
    </section>
  );
}

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tech Accessories Store
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the latest tech accessories with premium quality and
          competitive prices. Free shipping on all orders over $50.
        </p>
      </div>

      <Carousel title="NEW ARRIVALS" items={newArrivals} />

      <div className="my-12 border-t border-gray-200"></div>

      <Carousel title="HOT DISCOUNTS" items={discounts} discount />

      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>© 2023 TechGadget Store. All rights reserved.</p>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}
