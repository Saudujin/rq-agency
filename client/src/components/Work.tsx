import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    title: "Almeswak",
    category: "Outdoors",
    videoUrl: "https://www.youtube.com/embed/F2rPrkKS22U",
  },
  {
    id: 2,
    title: "Kyan train",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/hlTnwOEKWjE",
  },
  {
    id: 3,
    title: "Tekkawy",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/d7zU0CvOuZM",
  },
  {
    id: 4,
    title: "Krispy cream",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/DNIbkF_pDrc",
  },
  {
    id: 5,
    title: "Al kabsa al moda5ana",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/AV37MTMW9YE",
  },
  {
    id: 6,
    title: "Create Stories",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/Yxt0Zio9EXE",
  },
  {
    id: 7,
    title: "Sukuk Capital",
    category: "Making The Trend",
    videoUrl: "https://www.youtube.com/embed/_gYStnGbVLY",
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Recent Works
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Brand Stories
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-video w-full bg-zinc-900 border border-white/10 overflow-hidden mb-4">
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
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">
                  {work.category}
                </span>
                <h4 className="text-xl font-bold text-white">{work.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
