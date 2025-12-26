import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 tracking-tighter">
              WHO <span className="text-primary">WE ARE</span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-md md:max-w-none">
              We are a Saudi marketing and media agency that believes in the power of stories. We don't just create content; we create movements.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm md:text-base">
              READ MORE <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/images/pasted_file_tvkPOi_image.png" 
                alt="About RQ" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
