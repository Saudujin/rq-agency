import { motion } from "framer-motion";

export default function Habba() {
  return (
    <section className="py-32 bg-background relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="relative">
              <p className="text-2xl md:text-4xl font-medium leading-tight text-white">
                <span className="text-primary text-6xl md:text-8xl font-black block mb-4">“Habba”</span>
                means extraordinary and put of norms, and as the new pioneers in the marketing game
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <img 
                src="/images/habba-logo.webp" 
                alt="Habba Logo" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
