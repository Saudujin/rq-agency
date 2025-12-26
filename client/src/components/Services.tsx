import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Ideas that deliver",
    description: "Creative concepts that cut through the noise.",
  },
  {
    id: "02",
    title: "Influencers Marketing",
    description: "Connecting brands with authentic voices.",
  },
  {
    id: "03",
    title: "Social Media management",
    description: "Comprehensive digital presence management.",
  },
  {
    id: "04",
    title: "Outdoors Services",
    description: "Impactful out-of-home advertising.",
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-background relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
            OUR<br />SERVICES
          </h2>
          <p className="text-xl text-gray-400 max-w-md mt-8 md:mt-0">
            We provide comprehensive solutions to elevate your brand in the digital and physical world.
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-white/10 py-16 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-baseline justify-between relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                <span className="text-sm font-mono text-primary mb-4 md:mb-0">
                  {service.id}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm uppercase tracking-widest text-white">Explore</span>
                  <ArrowUpRight className="text-primary" />
                </div>
              </div>

              {/* Hover Background Effect */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="absolute inset-0 bg-white/5 origin-bottom -z-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
