import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/habba-banner.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 mix-blend-difference">
            WE CREATE
            <br />
            <span className="text-primary block mt-2">STORIES</span>
          </h1>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 border border-primary/30 rounded-full blur-xl hidden md:block"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/10 rounded-full blur-2xl hidden md:block"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-xl md:text-2xl text-gray-400 max-w-2xl font-light tracking-wide"
        >
          Combining creativity, strategy, and technology to help brands connect with people in meaningful ways.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary/80">Scroll</span>
      </motion.div>
    </section>
  );
}
