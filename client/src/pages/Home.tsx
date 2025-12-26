import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Habba from "@/components/Habba";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Habba />
        <Work />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
