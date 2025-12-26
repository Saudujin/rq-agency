import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Almeswak",
    category: "Outdoors",
    videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/F2rPrkKS22U/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Kyan train",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/hlTnwOEKWjE/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Tekkawy",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/d7zU0CvOuZM/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Krispy cream",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/DNIbkF_pDrc/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Al kabsa al moda5ana",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/AV37MTMW9YE/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "Create Stories",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/Yxt0Zio9EXE/maxresdefault.jpg"
  },
  {
    id: 7,
    title: "Sukuk Capital",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/_gYStnGbVLY/maxresdefault.jpg"
  }
];

const categories = ["All", "Outdoors", "Making The Trend"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Recent Works
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Brand Stories
            </h3>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setPlayingVideo(null);
                }}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
                  activeCategory === category
                    ? "bg-primary border-primary text-black"
                    : "border-white/20 text-gray-400 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={work.id}
                className="group"
              >
                <div className="aspect-video w-full bg-zinc-900 border border-white/10 overflow-hidden mb-4 relative rounded-lg">
                  {playingVideo === work.id ? (
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={work.videoUrl} 
                      title={work.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <div 
                      className="w-full h-full relative cursor-pointer group"
                      onClick={() => setPlayingVideo(work.id)}
                    >
                      <img 
                        src={work.thumbnail} 
                        alt={work.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-6 h-6 text-black fill-black ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">
                    {work.category}
                  </span>
                  <h4 className="text-xl font-bold text-white">{work.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
