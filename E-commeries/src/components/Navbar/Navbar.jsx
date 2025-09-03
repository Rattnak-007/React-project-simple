import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Mic,
  Gamepad2,
  Usb,
  Webcam,
  Speaker,
  Menu,
  X,
  User,
  Heart,
  ShoppingCart,
  Globe,
  Search,
  Bell,
  Zap,
  Tag,
  Gift,
  Truck,
  Shield,
  Star,
  Phone,
  MapPin,
} from "lucide-react";

export default function PremiumNavbar() {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    if (desktopDropdownOpen || searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopDropdownOpen, searchOpen]);

  const categoryData = [
    {
      title: "Gaming Peripherals",
      icon: <Gamepad2 size={20} />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      items: [
        {
          name: "Gaming Keyboards",
          icon: <Keyboard size={16} />,
          badge: "Hot",
        },
        { name: "Gaming Mice", icon: <Mouse size={16} />, badge: "New" },
        { name: "Gaming Headsets", icon: <Headphones size={16} /> },
        { name: "Controllers", icon: <Gamepad2 size={16} /> },
      ],
    },
    {
      title: "Professional Setup",
      icon: <Monitor size={20} />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      items: [
        { name: "4K Monitors", icon: <Monitor size={16} />, badge: "Pro" },
        { name: "Ergonomic Keyboards", icon: <Keyboard size={16} /> },
        { name: "Precision Mice", icon: <Mouse size={16} /> },
        { name: "Studio Speakers", icon: <Speaker size={16} /> },
      ],
    },
    {
      title: "Audio & Video",
      icon: <Headphones size={20} />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      items: [
        { name: "Headphones", icon: <Headphones size={16} /> },
        { name: "Microphones", icon: <Mic size={16} />, badge: "Sale" },
        { name: "Webcams", icon: <Webcam size={16} /> },
        { name: "Audio Interfaces", icon: <Speaker size={16} /> },
      ],
    },
    {
      title: "Connectivity",
      icon: <Usb size={20} />,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      items: [
        { name: "USB Hubs", icon: <Usb size={16} /> },
        { name: "Cables & Adapters", icon: <Zap size={16} /> },
        { name: "Wireless Adapters", icon: <Globe size={16} /> },
        { name: "Charging Stations", icon: <Zap size={16} /> },
      ],
    },
  ];

  const featuredItems = [
    {
      name: "Best Sellers",
      icon: <Star size={16} />,
      color: "text-yellow-500",
    },
    { name: "New Arrivals", icon: <Zap size={16} />, color: "text-blue-500" },
    { name: "Flash Deals", icon: <Tag size={16} />, color: "text-red-500" },
    { name: "Gift Cards", icon: <Gift size={16} />, color: "text-purple-500" },
  ];

  return (
    <>
      {/* Enhanced Top Bar */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-2 text-gray-300 text-sm gap-2 lg:gap-0">
          {/* Left side - Multiple promos */}
          <div className="flex items-center gap-6 text-xs lg:text-sm">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Truck size={16} />
              <span>Free shipping over $99</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-green-400">
              <Shield size={16} />
              <span>2-year warranty</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-purple-400">
              <Phone size={16} />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Right side - Enhanced actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-1 text-gray-400">
              <MapPin size={14} />
              <span className="text-xs">Phnom Penh, KH</span>
            </div>

            <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <User size={16} />
              <span className="hidden sm:inline">Account</span>
            </button>

            <button className="relative flex items-center gap-1 hover:text-red-400 transition-colors group">
              <Heart size={16} />
              <span className="hidden sm:inline">Wishlist</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                3
              </span>
            </button>

            <button className="relative flex items-center gap-1 hover:text-blue-400 transition-colors group">
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                2
              </span>
            </button>

            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
              <Globe size={16} />
              <span>EN</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navbar */}
      <nav
        className={`bg-white text-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-2xl backdrop-blur-md bg-white/95" : ""
        }`}
      >
        <div className="px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Monitor className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PC
                </span>
                <span className="text-gray-800"> Accessory</span>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div
              ref={searchRef}
              className="hidden lg:flex flex-1 max-w-2xl mx-8 relative"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for gaming gear, monitors, keyboards..."
                  className="w-full px-6 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                  onFocus={() => setSearchOpen(true)}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                  <Search size={20} />
                </button>

                {/* Search Dropdown */}
                {searchOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50">
                    <div className="text-sm text-gray-600 mb-3">
                      Popular searches
                    </div>
                    <div className="space-y-2">
                      {[
                        "Gaming keyboard",
                        "4K monitor",
                        "Wireless mouse",
                        "USB-C hub",
                      ].map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Search size={16} className="text-gray-400" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Enhanced Mega Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all group"
                >
                  <span className="font-medium">Categories</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Enhanced Mega Menu */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[70rem] bg-white shadow-2xl border border-gray-200 rounded-2xl z-50 transition-all duration-300 ${
                    desktopDropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-5 gap-8">
                      {/* Categories */}
                      {categoryData.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div
                            className={`flex items-center gap-3 p-3 rounded-xl ${category.bgColor}`}
                          >
                            <div className={category.color}>
                              {category.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900">
                              {category.title}
                            </h3>
                          </div>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href="#"
                                  className="flex items-center justify-between gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                      {item.icon}
                                    </span>
                                    <span className="text-sm group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </span>
                                  </div>
                                  {item.badge && (
                                    <span
                                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                                        item.badge === "Hot"
                                          ? "bg-red-100 text-red-600"
                                          : item.badge === "New"
                                          ? "bg-green-100 text-green-600"
                                          : item.badge === "Pro"
                                          ? "bg-blue-100 text-blue-600"
                                          : "bg-orange-100 text-orange-600"
                                      }`}
                                    >
                                      {item.badge}
                                    </span>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Featured Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                          <Star className="text-yellow-500" size={20} />
                          <h3 className="font-semibold text-gray-900">
                            Featured
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {featuredItems.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors group"
                              >
                                <span
                                  className={`${item.color} group-hover:scale-110 transition-transform`}
                                >
                                  {item.icon}
                                </span>
                                <span className="text-sm group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>

                        {/* Special Offer Banner */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="animate-pulse" size={16} />
                            <span className="font-semibold text-sm">
                              Flash Sale!
                            </span>
                          </div>
                          <p className="text-xs opacity-90">
                            Up to 50% off gaming gear
                          </p>
                          <button className="mt-2 text-xs bg-white text-blue-600 px-3 py-1 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              {[
                { name: "Gaming", badge: "Hot" },
                { name: "Professional", badge: null },
                { name: "Deals", badge: "Sale" },
                { name: "Support", badge: null },
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative flex items-center gap-2 px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all font-medium group"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        link.badge === "Hot"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                Sign in
              </button>

              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-semibold">
                Sign up
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="lg:hidden mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-lg">
                  <Search size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 bg-gray-50 border-t">
            <div className="py-4 space-y-4">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between w-full p-3 hover:bg-white rounded-lg transition-colors"
              >
                <span className="font-medium">Categories</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdownOpen && (
                <div className="pl-4 space-y-2 bg-white rounded-lg p-4">
                  {categoryData.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="font-medium text-gray-700 flex items-center gap-2">
                        {category.icon}
                        <span>{category.title}</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href="#"
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {["Gaming", "Professional", "Deals", "Support"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 hover:bg-white rounded-lg transition-colors font-medium"
                  >
                    {item}
                  </a>
                )
              )}

              <div className="flex gap-4 pt-4 border-t">
                <button className="flex-1 py-3 text-gray-700 bg-white hover:bg-gray-50 rounded-lg transition-colors font-medium">
                  Sign in
                </button>
                <button className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
