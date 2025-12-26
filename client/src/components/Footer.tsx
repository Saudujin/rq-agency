import { Link } from "wouter";
import { Twitter, Instagram, Linkedin } from "lucide-react";

// Custom TikTok Icon since Lucide doesn't have it yet
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/images/logo.svg" 
              alt="RQ Agency" 
              className="h-12 w-auto invert brightness-0 filter" 
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-xl font-bold leading-tight">
              We create stories that move people.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              A full-service marketing and media agency helping brands grow through creativity, strategy, and innovation.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Important Links</h3>
            <ul className="space-y-4">
              {["About", "Services", "Work", "Clients"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform duration-300 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:info@rq.com.sa" className="hover:text-white transition-colors">
                  info@rq.com.sa
                </a>
              </li>
              <li>Riyadh, Saudi Arabia</li>
              <li>
                <a href="tel:0550587977" className="hover:text-white transition-colors">
                  0550587977
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://x.com/rqmarketing_?s=21&t=zqo9xIkDYvxTWGPc23v41Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/rqmarketing_?igsh=ZWs0cjd4cHF5YnQy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@rqmarketing?_t=ZS-8wVqhknj6UE&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <TikTokIcon />
              </a>
              <a 
                href="https://www.linkedin.com/company/rq-agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RQ Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
