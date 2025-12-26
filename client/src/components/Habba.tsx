import { motion } from "framer-motion";

export default function Habba() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/habba-banner.png" 
          alt="Habba Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-8 tracking-tighter">
            HABBA
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-2xl md:text-4xl font-light leading-tight text-white">
              “Habba” means extraordinary and out of norms.
            </p>
            
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            
            <p className="text-xl text-gray-400">
              As the new pioneers in the marketing game, we redefine what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
