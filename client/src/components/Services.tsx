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
    <section id="services" className="py-16 md:py-24 bg-background relative z-10 border-y border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 text-left">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-primary font-medium">
              Ideas that deliver
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 md:pb-0 gap-4 md:grid md:grid-cols-3 md:gap-8 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] md:min-w-0 snap-center group relative bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center text-center min-h-[180px] md:min-h-[200px]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
