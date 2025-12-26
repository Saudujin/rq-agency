import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clients = [
  "/images/Rq-client-1.webp",
  "/images/Rq-client-2.webp",
  "/images/Rq-client-3.webp",
  "/images/Rq-client-4.webp",
  "/images/Rq-client-7.webp",
  "/images/Rq-client-8.webp",
  "/images/Rq-client-9.webp",
  "/images/Rq-client-10.webp",
  "/images/Rq-client-11.webp",
  "/images/rq-3.webp",
  "/images/rq-4.webp",
  "/images/rq-5.webp",
  "/images/rq-6.webp",
  "/images/rq-7.webp",
  "/images/rq-8.webp",
  "/images/rq-9.webp",
  "/images/rq-10.webp",
  "/images/rq-11.webp",
  "/images/rq-12.webp",
  "/images/rq3-1.webp",
  "/images/rq4-1.webp",
  "/images/rq5-1.webp",
  "/images/client-extra.png"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-8">
              ABOUT <span className="text-primary">RQ</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative">
              <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-4 md:mb-8">
                Who We Are
              </h2>
              
              {/* Image with Premium Geometric Frame - Hidden on Mobile */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group hidden md:block"
              >
                {/* Gold Border Offset */}
                <div className="absolute -inset-4 border border-primary/30 rounded-sm z-0 group-hover:inset-0 transition-all duration-500 ease-out" />
                
                {/* Image Container */}
                <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 z-20" />
                  <img 
                    src="/images/about-image.png" 
                    alt="RQ Team Success" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-7 space-y-6 md:space-y-8 text-lg md:text-2xl font-light text-gray-300 leading-relaxed pl-0 md:pl-12">
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
      <section className="py-16 md:py-24 bg-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 border border-white/10 hover:border-primary/50 transition-colors duration-300 bg-background/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Vision</h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                To be the first choice in digital marketing by providing high-quality integrated solutions to achieve success and excellence for our clients.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-10 border border-white/10 hover:border-primary/50 transition-colors duration-300 bg-background/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Message</h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Providing comprehensive and innovative marketing strategies to enable clients to achieve excellence and success with measurable and continuously analyzable goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 md:py-32">
        <div className="container">
          <div className="mb-12 md:mb-24">
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-2 md:mb-4">
              Our Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Our Success Story
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24">
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
                className="relative pl-6 md:pl-8 border-l border-primary/30"
              >
                <span className="absolute -top-8 md:-top-12 -left-6 text-6xl md:text-8xl font-black text-white/5 select-none">
                  0{index + 1}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 relative z-10">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section (Custom for About Page) */}
      <section id="clients" className="py-16 md:py-24 bg-background border-t border-white/5">
        <div className="container">
          <div className="text-left md:text-center mb-8 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-2 md:mb-4">
              Our Clients
            </h2>
            <h3 className="text-3xl md:text-6xl font-bold leading-tight text-white">
              Driven by trust
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
            {clients.slice(0, 6).map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="w-full h-20 md:h-24 flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <img 
                  src={client} 
                  alt={`Client ${index + 1}`} 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-16">
            <Link href="/clients" className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-primary hover:text-black rounded-full transition-all font-bold text-sm md:text-base">
              VIEW ALL CLIENTS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
