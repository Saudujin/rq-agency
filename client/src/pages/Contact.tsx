import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                GET IN <span className="text-primary">TOUCH</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                Ready to elevate your brand? Let's create something extraordinary together. Reach out to us directly or fill out the form.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-2xl font-bold">0550587977</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-2xl font-bold">info@rq.com.sa</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-2xl font-bold">Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-8">Start a Project</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wider">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Company</label>
                  <input 
                    type="text" 
                    placeholder="Enter your company name"
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-background font-bold text-xl py-5 rounded-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
