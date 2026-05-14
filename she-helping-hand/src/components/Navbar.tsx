import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-1 bg-white rounded-lg group-hover:scale-110 transition-transform shadow-sm">
            <img src="/logo.png" alt="SHE HELPING HAND Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className={`text-xl font-display font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            SHE HELPING HAND
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-gray-600' : 'text-white/90 underline-offset-4 hover:underline'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95 ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donate"
                className="w-full text-center bg-primary text-white py-4 rounded-xl font-bold shadow-md active:scale-[0.98] transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
