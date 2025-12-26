import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Title Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                Who We Are
              </h2>
              <h3 className="text-5xl font-bold text-white leading-tight">
                About RQ
              </h3>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-gray-300 font-light leading-relaxed border-l-2 border-primary/20 pl-8"
            >
              <p>
                RQ is a full-service marketing and media agency based in Saudi Arabia. We combine creativity, strategy, and technology to help brands connect with people in meaningful and authentic ways.
              </p>
              <p>
                Our multidisciplinary team works across branding, media production, and digital marketing to craft ideas that inspire and deliver results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
