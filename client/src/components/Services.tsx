import { motion } from "framer-motion";
import { Lightbulb, Users, Share2, Monitor } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Ideas that deliver",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Influencers Marketing",
    icon: Users,
  },
  {
    id: "03",
    title: "Social Media management",
    icon: Share2,
  },
  {
    id: "04",
    title: "Outdoors Services",
    icon: Monitor,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background/50 relative border-y border-white/5">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            What We Do
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 group hover:bg-primary hover:text-black transition-all duration-300 border border-white/10 hover:border-primary flex flex-col items-center text-center"
            >
              <div className="mb-6 text-primary group-hover:text-black transition-colors duration-300">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-xl font-bold group-hover:text-black transition-colors text-white">
                {service.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
