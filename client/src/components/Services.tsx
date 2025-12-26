import { motion } from "framer-motion";

const services = [
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Our Services
            </h2>
            <p className="text-xl text-primary font-medium">
              Ideas that deliver
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-10 hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center text-center min-h-[200px]"
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
