import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20">Case Study</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-400">Food & Beverage</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                THE <span className="text-primary">GENIE</span> CAMPAIGN
              </h1>
              
              <div className="flex items-center gap-6 mb-12">
                <img 
                  src="/images/Rq-client-11.webp" 
                  alt="Hardee's Logo" 
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                />
                <div className="h-12 w-[1px] bg-white/20"></div>
                <p className="text-xl text-gray-300 font-light">
                  Hardee’s is known for unbeatable value, like a genie granting wishes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="/images/Clip-path-group-1.webp" 
                alt="Campaign Visual" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-black text-primary mb-2">10X+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Order Increase</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-white mb-2">1 Week</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Trending Duration</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-primary mb-2">High</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">ROI Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-white mb-2">Viral</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Social Reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          
          {/* Challenge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-primary" /> The Challenge
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Promoting “10 items for an affordable price” sounded unbelievable. To overcome that, we named it <span className="text-primary font-bold">“تغنيك العشرة”</span> and brought the concept to life with a genie.
            </p>
          </motion.div>

          {/* Execution */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 relative pl-8 border-l-2 border-white/10"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-background" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-white" /> The Execution
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We created a real-life genie experience inside Hardee’s branches, inviting influencers to film engaging content with the magic lamp setup. This immersive activation turned a simple promotion into a magical moment for customers.
            </p>
          </motion.div>

          {/* Result */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-primary" /> The Result
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The campaign drove a <span className="text-primary font-bold text-2xl">10X+ increase</span> in orders from Hardee’s new menu. It trended for a full week, securing strong placement for the new product and delivering exceptional ROI.
            </p>
            
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <blockquote className="text-lg italic text-gray-400">
                "That inspired our 'Genie Campaign,' one of our most successful ever."
              </blockquote>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for your own success story?</h2>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-background text-xl font-bold rounded-full hover:bg-white transition-colors duration-300"
          >
            Start a Project <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
