import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowUpRight, 
  Music2, 
  Users, 
  Ghost, 
  Camera, 
  Smartphone, 
  TrendingUp, 
  Map 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Tiktok Campaigns",
      desc: "TikTok That Talks, Buzz worthy campaigns with the perfect-fit creators.",
      icon: <Music2 className="w-12 h-12" />
    },
    {
      title: "HABBAT",
      desc: "Powerful Collaborations, Trusted voices. Meaningful impact. Real results.",
      icon: <Users className="w-12 h-12" />
    },
    {
      title: "Express Influencers",
      desc: "Snapchat Domination, Reach Saudi’s most active users fast and real.",
      icon: <Ghost className="w-12 h-12" />
    },
    {
      title: "Outdoors Content Creation",
      desc: "Powerful content, For digital & offline — always on brand, always on point.",
      icon: <Camera className="w-12 h-12" />
    },
    {
      title: "Accounts management",
      desc: "Strategic socials, We create, engage, and grow real communities.",
      icon: <Smartphone className="w-12 h-12" />
    },
    {
      title: "Media Buying",
      desc: "Smart media, Insight-driven plans that get you seen and remembered.",
      icon: <TrendingUp className="w-12 h-12" />
    },
    {
      title: "Bold Outdoors",
      desc: "Billboard campaigns that stop people — and stick in their minds.",
      icon: <Map className="w-12 h-12" />
    }
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
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              OUR <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Comprehensive marketing solutions designed to elevate your brand and connect with your audience in meaningful ways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500"
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-primary w-6 h-6" />
                </div>
                
                <div className="mb-6 text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-500 origin-left">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
