import { Heart, Mail, Twitter, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        <div className="space-y-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1 bg-white rounded-lg group-hover:scale-110 transition-transform">
              <img src="/logo.png" alt="SHE HELPING HAND Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              SHE HELPING HAND
            </span>
          </a>
          <p className="text-lg leading-relaxed">
            Extending Hope, Empowering Lives, Building Communities. A dedicated platform 
            for sustainable humanitarian initiatives globally.
          </p>
          <div className="flex gap-5">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/thesheshowchatroom" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <social.Icon size={18} />
              </a>
            ))}
            <a 
              href="https://www.tiktok.com/@the_she_show?_r=1&_t=ZS-96KXYn9pMG5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              title="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold text-xl mb-8">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-primary transition-colors">Our Mission</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">What We Do</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">Visual Stories</a></li>
            <li><a href="#team" className="hover:text-primary transition-colors">The Team</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Get In Touch</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold text-xl mb-8">Newsletter</h4>
          <p className="mb-6 text-sm">Subscribe to receive updates on our latest projects and impact.</p>
          <div className="relative">
            <input type="email" placeholder="email@example.com" className="w-full bg-gray-800 border-none rounded-xl py-4 pl-6 pr-14 focus:ring-2 focus:ring-primary transition-all text-white" />
            <button className="absolute right-2 top-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-6 text-sm">
        <p>© 2026 SHE HELPING HAND NGO. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-dark transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
