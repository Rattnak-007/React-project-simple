import {
  Headphones,
  Monitor,
  Server,
  Settings,
  Shield,
  Truck,
  Award,
  Zap,
  Users,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Settings size={36} className="text-blue-500" />,
    title: "Custom PC Solutions",
    desc: "Tailored builds for gaming, business, and creative professionals. Get expert advice and assembly.",
  },
  {
    icon: <Server size={36} className="text-purple-500" />,
    title: "Enterprise IT Services",
    desc: "Server setup, cloud migration, and managed IT for businesses of all sizes.",
  },
  {
    icon: <Shield size={36} className="text-green-500" />,
    title: "Warranty & Protection",
    desc: "Extended warranty, accidental damage protection, and on-site support for peace of mind.",
  },
  {
    icon: <Truck size={36} className="text-orange-500" />,
    title: "Fast Delivery",
    desc: "Same-day and next-day delivery options available in major cities.",
  },
  {
    icon: <Award size={36} className="text-yellow-500" />,
    title: "Certified Technicians",
    desc: "All repairs and upgrades handled by certified professionals using genuine parts.",
  },
  {
    icon: <Zap size={36} className="text-pink-500" />,
    title: "Smart Home Integration",
    desc: "Setup and support for smart lighting, security, and automation devices.",
  },
  {
    icon: <Monitor size={36} className="text-indigo-500" />,
    title: "Display Calibration",
    desc: "Professional color calibration for monitors and TVs for accurate visuals.",
  },
  {
    icon: <Headphones size={36} className="text-red-500" />,
    title: "Audio Tuning",
    desc: "Optimize your audio setup for gaming, music, or content creation.",
  },
  {
    icon: <Users size={36} className="text-emerald-500" />,
    title: "Business Consultation",
    desc: "IT consulting and solutions for startups, SMEs, and enterprises.",
  },
];

export default function ServicesSolutions() {
  return (
    <section className="relative bg-white max-w-7xl mx-auto px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Services & <span className="text-blue-600">Solutions</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We offer a full suite of services to help you get the most out of your
          technology—whether you’re a gamer, creator, business, or home user.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="mb-5 p-4 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100">
              {service.icon}
            </div>
            <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
