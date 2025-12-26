import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
    { name: "Case Study: Hardee's", href: "/case-study/hardees" },
  ];

  return (
    <footer className="bg-[#050B14] pt-16 md:pt-32 pb-8 md:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/">
              <img 
                src="/images/logo.svg" 
                alt="RQ Agency" 
                className="h-16 w-auto invert brightness-0 filter cursor-pointer opacity-90 hover:opacity-100 transition-opacity" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              We create stories that <br/><span className="text-primary">move people.</span>
            </h3>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
              A full-service marketing and media agency helping brands grow through creativity, strategy, and innovation.
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white font-bold mb-4 md:mb-8 text-lg tracking-wider flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              EXPLORE
            </h4>
            <ul className="space-y-2 md:space-y-4 grid grid-cols-2 md:block gap-x-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300 cursor-pointer block text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 md:mb-8 text-lg tracking-wider flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              CONNECT
            </h4>
            <ul className="flex flex-wrap md:block gap-6 md:gap-0 space-y-0 md:space-y-6 text-gray-400">
              <li className="group w-full md:w-auto">
                <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1 group-hover:text-primary transition-colors">Email</span>
                <a href="mailto:info@rq.com.sa" className="text-lg md:text-xl text-white hover:text-primary transition-colors font-medium">
                  info@rq.com.sa
                </a>
              </li>
              <li className="group w-1/2 md:w-auto">
                <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1 group-hover:text-primary transition-colors">Phone</span>
                <a href="tel:0550587977" className="text-lg md:text-xl text-white hover:text-primary transition-colors font-medium">
                  0550587977
                </a>
              </li>
              <li className="group w-1/2 md:w-auto">
                <span className="block text-xs uppercase tracking-widest text-gray-600 mb-1 group-hover:text-primary transition-colors">Location</span>
                <span className="text-lg md:text-xl text-white font-medium">Riyadh, KSA</span>
              </li>
            </ul>

            <div className="flex justify-center md:justify-start gap-4 mt-8 md:mt-10">
              {[
                { icon: Twitter, href: "https://x.com/rqmarketing_?s=21&t=zqo9xIkDYvxTWGPc23v41Q" },
                { icon: Instagram, href: "https://www.instagram.com/rqmarketing_?igsh=ZWs0cjd4cHF5YnQy" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/rq-agency/" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a 
                href="https://www.tiktok.com/@rqmarketing?_t=ZS-8wVqhknj6UE&_r=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} RQ Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
