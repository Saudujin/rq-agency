import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function ClientsPage() {
  const clients = [
    "/images/Rq-client-1.webp",
    "/images/Rq-client-2.webp",
    "/images/Rq-client-3.webp",
    "/images/Rq-client-4.webp",

    "/images/Rq-client-11.webp",
    "/images/Rq-client-10.webp",
    "/images/Rq-client-9.webp",
    "/images/Rq-client-8.webp",
    "/images/Rq-client-7.webp",
    "/images/rq3-1.webp",
    "/images/rq4-1.webp",
    "/images/rq5-1.webp",
    "/images/rq-12.webp",
    "/images/rq-10.webp",
    "/images/rq-3.webp",
    "/images/rq-4.webp",
    "/images/rq-5.webp",
    "/images/rq-6.webp",
    "/images/rq-7.webp",
    "/images/rq-8.webp",
    "/images/rq-9.webp",
    "/images/rq-10.webp",
    "/images/rq-11.webp"
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8">
              OUR <span className="text-primary">CLIENTS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Driven by trust. We are proud to partner with visionary brands across the Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-12 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square flex items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-500"
              >
                <img 
                  src={client} 
                  alt={`Client ${index + 1}`} 
                  className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to join our <span className="text-primary">success stories?</span>
            </h2>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-background text-xl font-bold rounded-full hover:bg-white transition-colors duration-300"
            >
              Start a Project <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
