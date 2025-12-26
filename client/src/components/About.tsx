import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 tracking-tighter">
              WHO <span className="text-primary">WE ARE</span>
            </h2>
            <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
              We are a Saudi marketing and media agency that believes in the power of stories. We don't just create content; we create movements.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm md:text-base">
              READ MORE <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
