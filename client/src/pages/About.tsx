import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

export default function AboutPage() {
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
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              ABOUT <span className="text-primary">RQ</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 relative">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-8">
                Who We Are
              </h2>
              
              {/* Image with Frame */}
              <motion.div 
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-lg z-0" />
                <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/images/about-image.png" 
                    alt="RQ Team Success" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-8 space-y-8 text-xl md:text-2xl font-light text-gray-300 leading-relaxed pl-0 md:pl-12">
              <p>
                RQ is a full-service marketing and media agency based in Saudi Arabia. We combine creativity, strategy, and technology to help brands connect with people in meaningful and authentic ways.
              </p>
              <p>
                Our multidisciplinary team works across branding, media production, and digital marketing to craft ideas that inspire and deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Message */}
      <section className="py-24 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 border border-white/10 hover:border-primary/50 transition-colors duration-300 bg-background/50"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                To be the first choice in digital marketing by providing high-quality integrated solutions to achieve success and excellence for our clients.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 border border-white/10 hover:border-primary/50 transition-colors duration-300 bg-background/50"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Our Message</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Providing comprehensive and innovative marketing strategies to enable clients to achieve excellence and success with measurable and continuously analyzable goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-32">
        <div className="container">
          <div className="mb-24">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Our Journey
            </h2>
            <h3 className="text-5xl font-bold text-white">
              Our Success Story
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {[
              {
                title: "Our first inspiration",
                desc: "We believed that marketing needed a radical change. Our vision was to provide innovative solutions that would capture attention and achieve goals in a new way."
              },
              {
                title: "Our team",
                desc: "Our team is made up of diverse minds; each member brings a unique touch. We work as one family to achieve shared success."
              },
              {
                title: "Our journey",
                desc: "Every day we face new challenges, and we continuously acquire new skills and experiences. Innovation is the secret to our success, and we always strive for the best."
              },
              {
                title: "Our renewed passion",
                desc: "Our passion is our driving force. We innovate and deliver creative marketing solutions that inspire and achieve results."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l border-primary/30"
              >
                <span className="absolute -top-12 -left-6 text-8xl font-black text-white/5 select-none">
                  0{index + 1}
                </span>
                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <Footer />
    </div>
  );
}
