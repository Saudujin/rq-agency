import { motion } from "framer-motion";

export default function Habba() {
  return (
    <section className="py-32 bg-background relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 z-0" />

      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <div className="relative inline-block">
              <span className="absolute -top-10 -left-10 text-[120px] text-primary/10 font-serif leading-none select-none">“</span>
              <p className="text-3xl md:text-5xl font-bold leading-tight text-white relative z-10">
                <span className="text-primary">“Habba”</span> means extraordinary and put of norms, and as the new pioneers in the marketing game
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              
              <img 
                src="/images/habba-logo.webp" 
                alt="Habba Logo" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
