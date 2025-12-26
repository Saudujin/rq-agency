import { motion } from "framer-motion";

export default function Habba() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/habba-banner.png" 
          alt="Habba Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/60 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            “Habba” means extraordinary and put of norms, and as the new pioneers in the marketing game
          </p>
        </motion.div>
      </div>
    </section>
  );
}
