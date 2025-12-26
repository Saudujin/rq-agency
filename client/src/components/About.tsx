import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Who We Are
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
              About RQ
            </h3>
            <div className="space-y-6 text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              <p>
                RQ is a full-service marketing and media agency based in Saudi Arabia. We combine creativity, strategy, and technology to help brands connect with people in meaningful and authentic ways.
              </p>
              <p>
                Our multidisciplinary team works across branding, media production, and digital marketing to craft ideas that inspire and deliver results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
