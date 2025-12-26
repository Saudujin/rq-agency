import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const works = [
  {
    id: 1,
    title: "Almeswak",
    category: "Outdoors",
    image: "/images/work-1.webp",
    videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U?autoplay=1",
  },
  {
    id: 2,
    title: "Kyan train",
    category: "Making The Trend",
    image: "/images/work-2.webp",
    videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE?autoplay=1",
  },
  {
    id: 3,
    title: "Tekkawy",
    category: "Making The Trend",
    image: "/images/work-3.webp",
    videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM?autoplay=1",
  },
  {
    id: 4,
    title: "Krispy cream",
    category: "Making The Trend",
    image: "/images/work-4.webp",
    videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc?autoplay=1",
  },
  {
    id: 5,
    title: "Al kabsa al moda5ana",
    category: "Making The Trend",
    image: "/images/work-5.webp",
    videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE?autoplay=1",
  },
  {
    id: 6,
    title: "Create Stories",
    category: "Making The Trend",
    image: "/images/work-6.webp",
    videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE?autoplay=1",
  },
  {
    id: 7,
    title: "Sukuk Capital",
    category: "Making The Trend",
    image: "/images/work-7.webp",
    videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY?autoplay=1",
  }
];

export default function Work() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
            Selected Works
          </h2>
          <h3 className="text-4xl font-bold text-white">
            Brand Stories
          </h3>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
          {works.map((work) => (
            <Dialog key={work.id}>
              <DialogTrigger asChild>
                <div className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 cursor-pointer overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary transition-colors duration-500">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-24 h-24 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-10 h-10 text-black fill-black ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary font-mono text-sm mb-2 block">{work.category}</span>
                    <h4 className="text-3xl font-bold text-white">{work.title}</h4>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[90vw] h-[80vh] p-0 bg-black border-white/10">
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
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
