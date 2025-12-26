import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Play } from "lucide-react";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const works = [
    {
      title: "Almeswak",
      category: "Outdoors",
      videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U",
      thumbnail: "https://img.youtube.com/vi/F2rPrkKS22U/maxresdefault.jpg"
    },
    {
      title: "Kyan train",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE",
      thumbnail: "https://img.youtube.com/vi/hlTnwOEKWjE/maxresdefault.jpg"
    },
    {
      title: "Tekkawy",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM",
      thumbnail: "https://img.youtube.com/vi/d7zU0CvOuZM/maxresdefault.jpg"
    },
    {
      title: "Krispy cream",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc",
      thumbnail: "https://img.youtube.com/vi/DNIbkF_pDrc/maxresdefault.jpg"
    },
    {
      title: "Al kabsa al moda5ana",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE",
      thumbnail: "https://img.youtube.com/vi/AV37MTMW9YE/maxresdefault.jpg"
    },
    {
      title: "Create Stories",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE",
      thumbnail: "https://img.youtube.com/vi/Yxt0Zio9EXE/maxresdefault.jpg"
    },
    {
      title: "Sukuk Capital",
      category: "Making The Trend",
      videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY",
      thumbnail: "https://img.youtube.com/vi/_gYStnGbVLY/maxresdefault.jpg"
    }
  ];

  const filteredWorks = activeFilter === "All" 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8">
              OUR <span className="text-primary">WORK</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              A showcase of our most impactful campaigns, creative stories, and strategic successes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 border-t border-white/5">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {["All", "Outdoors", "Making The Trend"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-background scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10"
              >
                {playingVideo === work.videoUrl ? (
                  <iframe
                    src={`${work.videoUrl}?autoplay=1&rel=0`}
                    title={work.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setPlayingVideo(work.videoUrl)}
                  >
                    <img 
                      src={work.thumbnail} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary/20">
                        <Play className="w-8 h-8 text-background fill-background ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <span className="text-primary text-sm font-bold tracking-wider mb-2 block">
                        {work.category.toUpperCase()}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
