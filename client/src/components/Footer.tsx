import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <img 
              src="/images/logo.svg" 
              alt="RQ Agency" 
              className="h-12 w-auto invert brightness-0 filter" 
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <h3 className="text-2xl font-bold text-white leading-tight">
              We create stories that move people.
            </h3>
            <p className="text-gray-400 max-w-md">
              A full-service marketing and media agency helping brands grow through creativity, strategy, and innovation.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Important Links</h4>
            <ul className="space-y-4">
              {["About", "Services", "Portfolio", "Case Studies", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:info@rq.com.sa" className="hover:text-primary transition-colors">
                  info@rq.com.sa
                </a>
              </li>
              <li>Riyadh, Saudi Arabia</li>
              <li>
                <a href="tel:0550587977" className="hover:text-primary transition-colors">
                  0550587977
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-8">
              <a href="https://x.com/rqmarketing_?s=21&t=zqo9xIkDYvxTWGPc23v41Q" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/rqmarketing_?igsh=ZWs0cjd4cHF5YnQy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@rqmarketing?_t=ZS-8wVqhknj6UE&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/rq-agency/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RQ Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
