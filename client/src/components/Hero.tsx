import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Background Gradient Only - No Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-white">
            WE CREATE
            <br />
            <span className="text-primary block mt-2">STORIES</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-xl md:text-2xl text-gray-400 max-w-2xl font-light tracking-wide"
        >
          Combining creativity, strategy, and technology to help brands connect with people in meaningful ways.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary/80">Scroll</span>
      </motion.div>
    </section>
  );
}
