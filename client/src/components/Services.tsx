import { motion } from "framer-motion";

const services = [
  {
    title: "Ideas that deliver",
  },
  {
    title: "Influencers Marketing",
  },
  {
    title: "Social Media management",
  },
  {
    title: "Outdoors Services",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative z-10 border-y border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-8 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
