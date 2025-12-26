import { motion } from "framer-motion";

const clients = [
  "/images/client-1.webp",
  "/images/client-2.webp",
  "/images/client-3.webp",
  "/images/client-4.webp",
  "/images/client-7.webp",
  "/images/client-8.webp",
  "/images/client-9.webp",
  "/images/client-10.webp",
  "/images/client-11.webp",
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Our Partners
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted By
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full max-w-[150px] aspect-[3/2] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <img 
                src={client} 
                alt={`Client ${index + 1}`} 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
