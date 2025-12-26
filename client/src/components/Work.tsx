import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Work Data
const works = [
  {
    id: 1,
    title: "Almeswak",
    category: "Outdoors",
    image: "/images/work-1.webp",
    videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U?autoplay=1",
    type: "video"
  },
  {
    id: 2,
    title: "Kyan train",
    category: "Making The Trend",
    image: "/images/work-2.webp",
    videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE?autoplay=1",
    type: "video"
  },
  {
    id: 3,
    title: "Tekkawy",
    category: "Making The Trend",
    image: "/images/work-3.webp",
    videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM?autoplay=1",
    type: "video"
  },
  {
    id: 4,
    title: "Krispy cream",
    category: "Making The Trend",
    image: "/images/work-4.webp",
    videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc?autoplay=1",
    type: "video"
  },
  {
    id: 5,
    title: "Al kabsa al moda5ana",
    category: "Making The Trend",
    image: "/images/work-5.webp",
    videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE?autoplay=1",
    type: "video"
  },
  {
    id: 6,
    title: "Create Stories",
    category: "Making The Trend",
    image: "/images/work-6.webp",
    videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE?autoplay=1",
    type: "video"
  },
  {
    id: 7,
    title: "Sukuk Capital",
    category: "Making The Trend",
    image: "/images/work-7.webp",
    videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY?autoplay=1",
    type: "video"
  }
];

const categories = ["ALL", "Outdoors", "Making The Trend"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredWorks = activeCategory === "ALL" 
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
          <div className="flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-none border-2 transition-all duration-300 whitespace-nowrap font-bold uppercase tracking-wider ${
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

        {/* Works Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={work.id}
                className="group relative aspect-video bg-zinc-900 cursor-pointer border border-white/10 hover:border-primary transition-colors duration-300"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full relative group">
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                          <Play className="fill-black text-black ml-1 w-8 h-8" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">
                          {work.category}
                        </span>
                        <h4 className="text-xl font-bold text-white">{work.title}</h4>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] p-0 bg-black border-white/10 overflow-hidden">
                    <div className="aspect-video w-full">
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
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
