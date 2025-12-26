import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Work Data
const works = [
  {
    id: 1,
    title: "Almeswak",
    category: "Outdoors",
    image: "/images/work-1.webp",
    videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U",
    type: "video"
  },
  {
    id: 2,
    title: "Kyan train",
    category: "Making The Trend",
    image: "/images/work-2.webp",
    videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE",
    type: "shorts"
  },
  {
    id: 3,
    title: "Tekkawy",
    category: "Making The Trend",
    image: "/images/work-3.webp",
    videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM",
    type: "shorts"
  },
  {
    id: 4,
    title: "Krispy cream",
    category: "Making The Trend",
    image: "/images/work-4.webp",
    videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc",
    type: "shorts"
  },
  {
    id: 5,
    title: "Al kabsa al moda5ana",
    category: "Making The Trend",
    image: "/images/work-5.webp",
    videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE",
    type: "shorts"
  },
  {
    id: 6,
    title: "Create Stories",
    category: "Making The Trend",
    image: "/images/work-6.webp",
    videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE",
    type: "shorts"
  },
  {
    id: 7,
    title: "Sukuk Capital",
    category: "Making The Trend",
    image: "/images/work-7.webp",
    videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY",
    type: "shorts"
  },
  // Additional works from uploaded images (placeholders for now as no specific links provided)
  {
    id: 8,
    title: "Campaign 8",
    category: "Outdoors",
    image: "/images/work-8.webp",
    videoUrl: "",
    type: "image"
  },
  {
    id: 9,
    title: "Campaign 9",
    category: "Outdoors",
    image: "/images/work-9.webp",
    videoUrl: "",
    type: "image"
  },
  {
    id: 10,
    title: "Campaign 10",
    category: "Outdoors",
    image: "/images/work-10.webp",
    videoUrl: "",
    type: "image"
  },
  {
    id: 11,
    title: "Campaign 11",
    category: "Outdoors",
    image: "/images/work-11.webp",
    videoUrl: "",
    type: "image"
  },
  {
    id: 12,
    title: "Campaign 12",
    category: "Outdoors",
    image: "/images/work-12.webp",
    videoUrl: "",
    type: "image"
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Recent Works
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              Brand Stories
            </h3>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-primary border-primary text-white"
                    : "border-white/20 text-gray-400 hover:border-white hover:text-white"
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
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
              >
                {work.type !== "image" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-full h-full relative">
                        <img 
                          src={work.image} 
                          alt={work.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                            <Play className="fill-white text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                            {work.category}
                          </span>
                          <h4 className="text-2xl font-bold text-white">{work.title}</h4>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 bg-black border-white/10">
                      <div className="aspect-video w-full">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={work.videoUrl} 
                          title={work.title}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="w-full h-full relative">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="text-white w-10 h-10" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                        {work.category}
                      </span>
                      <h4 className="text-2xl font-bold text-white">{work.title}</h4>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
