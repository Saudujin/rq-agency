import { motion } from "framer-motion";
import { Lightbulb, Users, Share2, Monitor, Megaphone, Layers } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Ideas that deliver",
    icon: Lightbulb,
    description: "Creative concepts that cut through the noise and achieve business goals."
  },
  {
    id: "02",
    title: "Influencers",
    icon: Users,
    description: "Connecting your brand with authentic voices that resonate with your audience."
  },
  {
    id: "03",
    title: "Marketing",
    icon: Megaphone,
    description: "Strategic planning and execution across all relevant channels."
  },
  {
    id: "04",
    title: "Social Media",
    icon: Share2,
    description: "Comprehensive management of your digital presence and community engagement."
  },
  {
    id: "05",
    title: "Management",
    icon: Layers,
    description: "End-to-end project and campaign management ensuring seamless delivery."
  },
  {
    id: "06",
    title: "Outdoors",
    icon: Monitor,
    description: "Impactful out-of-home advertising that captures attention in the physical world."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            What We Do
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-10 group hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 text-4xl font-bold font-mono text-white/20 group-hover:text-primary/50 transition-colors">
                {service.id}
              </div>
              
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
