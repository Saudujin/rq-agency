import { motion } from "framer-motion";

const clients = [
  "/images/Rq-client-1.webp",
  "/images/Rq-client-2.webp",
  "/images/Rq-client-3.webp",
  "/images/Rq-client-4.webp",
  "/images/Rq-client-7.webp",
  "/images/Rq-client-8.webp",
  "/images/Rq-client-9.webp",
  "/images/Rq-client-10.webp",
  "/images/Rq-client-11.webp",
  "/images/rq-3.webp",
  "/images/rq-4.webp",
  "/images/rq-5.webp",
  "/images/rq-6.webp",
  "/images/rq-7.webp",
  "/images/rq-8.webp",
  "/images/rq-9.webp",
  "/images/rq-10.webp",
  "/images/rq-11.webp",
  "/images/rq-12.webp",
  "/images/rq3-1.webp",
  "/images/rq4-1.webp",
  "/images/rq5-1.webp",
  "/images/client-extra.png"
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-background border-t border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Our Clients
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Driven by trust
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full h-24 flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <img 
                src={client} 
                alt={`Client ${index + 1}`} 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
