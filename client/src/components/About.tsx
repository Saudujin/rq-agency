import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Who We Are
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              About RQ
            </h3>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                RQ is a full-service marketing and media agency based in Saudi Arabia. We combine creativity, strategy, and technology to help brands connect with people in meaningful and authentic ways.
              </p>
              <p>
                Our multidisciplinary team works across branding, media production, and digital marketing to craft ideas that inspire and deliver results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative z-10 overflow-hidden rounded-none border border-white/10">
              <img 
                src="/images/habba-banner.png" 
                alt="RQ Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
