import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Example SVGs for payment logos
const paymentMethods = [
  {
    name: "Acleda",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfiInSqA5Y4PzyD1LoFbmmwY14g8r3pODLg&s"
        alt="Acleda"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: "ABA",
    icon: (
      <img
        src="https://www.acledasecurities.com.kh/as/assets/listed_company/ABA/aba-web-top-logo.png"
        alt="ABA"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: "Wing",
    icon: (
      <img
        src="https://play-lh.googleusercontent.com/-deHHbwBUh2I4dzTjq9n4ggBGPqJwKzj9pwvPqyaR-hPxzKN9QVJOBsZP_ShlCDmX60"
        alt="Wing"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: "Visa",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
        alt="Visa"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    name: "Mastercard",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        alt="Mastercard"
        className="w-8 h-8 object-contain"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-200 pt-14 pb-8 mt-10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.5),transparent_60%)] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-bold text-2xl">PC</span>
              </div>
              <span className="text-2xl font-bold text-white">Accessory</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your one-stop shop for gaming and professional PC accessories.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 hover:text-blue-400 transition">
                <Mail size={16} />
                <span>rattnakvisalchun@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone size={16} />
                <span>+855 78841050</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition">
                <MapPin size={16} />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Shop</h3>
            <ul className="space-y-2 text-sm">
              {["Gaming Gear", "Monitors", "Audio", "Accessories", "Deals"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Help Center",
                "Warranty",
                "Shipping",
                "Returns",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social & Payments */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-sky-400 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-pink-500 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-red-500 transition"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-300 mr-2">
              Payment Methods:
            </span>
            <div className="flex gap-2 flex-wrap">
              {paymentMethods.map((pm) => (
                <span
                  key={pm.name}
                  className="flex flex-col items-center justify-center bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition min-w-[70px]"
                  style={{ minHeight: 56 }}
                >
                  <span className="mb-1">{pm.icon}</span>
                  <span className="text-xs text-gray-400 text-center">
                    {pm.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-xs text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} PC Accessory. Made with ❤️ in
            Cambodia.
          </span>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
