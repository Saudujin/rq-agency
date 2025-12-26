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
    <section id="clients" className="py-32 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mb-16 text-center">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
          Our Clients
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Driven by trust
        </h3>
      </div>

      <div className="relative flex w-full overflow-hidden py-12 bg-white/5">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="w-48 h-24 flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={client} 
                alt="Client Logo" 
                className="max-w-full max-h-full object-contain invert brightness-0 filter"
                style={{ filter: "brightness(0) invert(1)" }} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
