import { useState, useEffect } from "react";
import {
  Filter,
  Grid,
  List,
  ChevronDown,
  Star,
  Heart,
  ShoppingCart,
  Eye,
  Zap,
  Shield,
  Truck,
  Award,
  X,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Keyboard,
  Mouse,
  Headphones,
  Monitor,
  Gamepad2,
  Webcam,
  Speaker,
  Usb,
  Mic,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Corsair K95 RGB Platinum XT",
    category: "Gaming Keyboards",
    categoryIcon: <Keyboard size={16} />,
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 2547,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=400&q=80",
    brand: "Corsair",
    inStock: true,
    discount: 20,
    badges: ["Bestseller", "Gaming"],
    features: [
      "Cherry MX Speed",
      "RGB Backlit",
      "Macro Keys",
      "USB Passthrough",
    ],
    specs: {
      switches: "Cherry MX Speed Silver",
      backlight: "Per-key RGB",
      connectivity: "USB-C",
      warranty: "2 years",
    },
  },
  {
    id: 2,
    name: "Logitech MX Master 3S",
    category: "Professional Mice",
    categoryIcon: <Mouse size={16} />,
    price: 99.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 1832,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80",
    brand: "Logitech",
    inStock: true,
    discount: 17,
    badges: ["Professional", "Ergonomic"],
    features: ["8000 DPI", "Multi-device", "Quick Charging", "Silent Clicks"],
    specs: {
      sensor: "Darkfield High Precision",
      dpi: "8000 DPI",
      battery: "70 days",
      connectivity: "Bluetooth/USB",
    },
  },
  {
    id: 3,
    name: "SteelSeries Arctis 7P",
    category: "Gaming Headsets",
    categoryIcon: <Headphones size={16} />,
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 3241,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
    brand: "SteelSeries",
    inStock: true,
    discount: 17,
    badges: ["Wireless", "Gaming"],
    features: [
      "2.4GHz Wireless",
      "24hr Battery",
      "ClearCast Mic",
      "DTS Headphone:X",
    ],
    specs: {
      driver: "40mm Neodymium",
      frequency: "20-20,000 Hz",
      battery: "24 hours",
      weight: "312g",
    },
  },
  {
    id: 4,
    name: "Dell UltraSharp U2723QE",
    category: "4K Monitors",
    categoryIcon: <Monitor size={16} />,
    price: 549.99,
    originalPrice: 649.99,
    rating: 4.5,
    reviews: 892,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    brand: "Dell",
    inStock: true,
    discount: 15,
    badges: ["Professional", "4K"],
    features: [
      '27" 4K IPS',
      "USB-C Hub",
      "Height Adjustable",
      "3-Year Warranty",
    ],
    specs: {
      size: "27 inches",
      resolution: "3840x2160",
      panel: "IPS",
      refreshRate: "60Hz",
    },
  },
  {
    id: 5,
    name: "Razer DeathAdder V3 Pro",
    category: "Gaming Mice",
    categoryIcon: <Mouse size={16} />,
    price: 149.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 1547,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
    brand: "Razer",
    inStock: false,
    discount: 6,
    badges: ["Pro Gaming", "Lightweight"],
    features: ["Focus Pro 30K", "90hr Battery", "63g Weight", "Wireless"],
    specs: {
      sensor: "Focus Pro 30K",
      dpi: "30,000 DPI",
      weight: "63g",
      battery: "90 hours",
    },
  },
  {
    id: 6,
    name: "Blue Yeti USB Microphone",
    category: "Microphones",
    categoryIcon: <Mic size={16} />,
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.4,
    reviews: 5673,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80",
    brand: "Blue",
    inStock: true,
    discount: 18,
    badges: ["Content Creation", "Studio Quality"],
    features: [
      "4 Pickup Patterns",
      "Real-time Monitoring",
      "Plug & Play",
      "Mute Button",
    ],
    specs: {
      patterns: "4 (Cardioid, Omnidirectional, Bidirectional, Stereo)",
      frequency: "20Hz-20kHz",
      connectivity: "USB",
      weight: "550g",
    },
  },
];

const categories = [
  {
    name: "Gaming Keyboards",
    icon: <Keyboard size={20} />,
    count: 156,
    color: "text-purple-500",
  },
  {
    name: "Gaming Mice",
    icon: <Mouse size={20} />,
    count: 89,
    color: "text-blue-500",
  },
  {
    name: "Professional Mice",
    icon: <Mouse size={20} />,
    count: 67,
    color: "text-green-500",
  },
  {
    name: "Gaming Headsets",
    icon: <Headphones size={20} />,
    count: 134,
    color: "text-red-500",
  },
  {
    name: "4K Monitors",
    icon: <Monitor size={20} />,
    count: 78,
    color: "text-indigo-500",
  },
  {
    name: "Microphones",
    icon: <Mic size={20} />,
    count: 45,
    color: "text-orange-500",
  },
  {
    name: "Webcams",
    icon: <Webcam size={20} />,
    count: 32,
    color: "text-pink-500",
  },
  {
    name: "Speakers",
    icon: <Speaker size={20} />,
    count: 56,
    color: "text-cyan-500",
  },
  {
    name: "USB Hubs",
    icon: <Usb size={20} />,
    count: 23,
    color: "text-yellow-500",
  },
  {
    name: "Controllers",
    icon: <Gamepad2 size={20} />,
    count: 41,
    color: "text-emerald-500",
  },
];

const brands = [
  "Corsair",
  "Logitech",
  "Razer",
  "SteelSeries",
  "Dell",
  "ASUS",
  "HyperX",
  "Blue",
  "Audio-Technica",
];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Customer Rating", value: "rating" },
  { label: "Newest First", value: "newest" },
  { label: "Best Selling", value: "bestselling" },
];

export default function PCAccessoriesCatalog() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000],
    inStock: false,
    rating: 0,
    discount: false,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    // Price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= filters.rating);
    }

    // Discount filter
    if (filters.discount) {
      filtered = filtered.filter((product) => product.discount > 0);
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, sortBy, searchTerm]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 1000],
      inStock: false,
      rating: 0,
      discount: false,
    });
    setSearchTerm("");
  };

  const ProductCard = ({ product, isListView = false }) => (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 overflow-hidden ${
        isListView ? "flex items-center p-4" : "flex flex-col"
      }`}
    >
      {/* Product Image */}
      <div
        className={`relative ${
          isListView ? "w-32 h-32 flex-shrink-0 mr-4" : "aspect-square"
        } overflow-hidden ${!isListView && "rounded-t-2xl"}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              -{product.discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Out of Stock
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors">
            <Heart size={16} className="hover:text-red-500 transition-colors" />
          </button>
          <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors">
            <Eye size={16} className="hover:text-blue-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div
        className={`${
          isListView ? "flex-1" : "p-4"
        } flex flex-col justify-between h-full`}
      >
        <div>
          {/* Category & Brand */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              {product.categoryIcon}
              <span>{product.category}</span>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {product.brand}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Features */}
          {!isListView && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Truck size={12} />
              <span>Free shipping</span>
            </div>
          </div>

          <button
            disabled={!product.inStock}
            className={`p-3 rounded-xl transition-all ${
              product.inStock
                ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  // Responsive filter drawer for mobile
  const FilterDrawer = () => (
    <div
      className={`fixed inset-0 z-50 bg-black/40 flex lg:hidden ${
        showFilters ? "visible" : "invisible"
      }`}
      onClick={() => setShowFilters(false)}
    >
      <div
        className={`bg-white w-full max-w-xs h-full p-4 overflow-y-auto shadow-2xl transition-transform duration-300 ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Filter size={20} />
            Filters
          </h2>
          <button
            onClick={() => setShowFilters(false)}
            className="text-gray-400 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={() => toggleFilter("categories", category.name)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className={`${category.color}`}>{category.icon}</div>
                  <span className="text-sm text-gray-700 flex-1">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({category.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: [
                        parseInt(e.target.value) || 0,
                        prev.priceRange[1],
                      ],
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: [
                        prev.priceRange[0],
                        parseInt(e.target.value) || 1000,
                      ],
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-sm text-gray-600">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </div>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => toggleFilter("brands", brand)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => setFilters((prev) => ({ ...prev, rating }))}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-700 ml-2">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Other Filters */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Other Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      inStock: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">In Stock Only</span>
              </label>
              <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={filters.discount}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      discount: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">On Sale</span>
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={clearFilters}
          className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                PC Accessories
              </h1>
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            {/* Controls */}
            <div className="flex flex-col gap-3 w-full md:flex-row md:gap-4 md:w-auto">
              {/* Search */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-300 shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl border border-gray-300 shadow text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-xl overflow-hidden shadow bg-white w-full md:w-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition ${
                    viewMode === "grid"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition ${
                    viewMode === "list"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition w-full md:w-auto"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters (desktop only) */}
          <div
            className={`hidden lg:block w-full lg:w-80 bg-white rounded-2xl p-6 h-fit sticky top-24 shadow-lg`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Filter size={20} />
                Filters
              </h2>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category.name)}
                        onChange={() =>
                          toggleFilter("categories", category.name)
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className={`${category.color}`}>{category.icon}</div>
                      <span className="text-sm text-gray-700 flex-1">
                        {category.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceRange[0]}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          priceRange: [
                            parseInt(e.target.value) || 0,
                            prev.priceRange[1],
                          ],
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          priceRange: [
                            prev.priceRange[0],
                            parseInt(e.target.value) || 1000,
                          ],
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map((brand, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={() => toggleFilter("brands", brand)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() =>
                          setFilters((prev) => ({ ...prev, rating }))
                        }
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-700 ml-2">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Other Filters
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          inStock: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">In Stock Only</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={filters.discount}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          discount: e.target.checked,
                        }))
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">On Sale</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isListView={viewMode === "list"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
