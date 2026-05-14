import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, Heart } from 'lucide-react';

export default function Hero() {
  const bgImages = [
    "/HOMEPAGE 1.jpeg",
    "/HOMEPAGE 2.jpeg",
    "/HOMEPAGE 3.jpeg",
    "/HOMEPAGE 4.jpeg",
    "/HOMEPAGE 5.jpeg",
    "/HOMEPAGE 6.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Changed every 5 seconds as requested

    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark overlay for readability */}
            <img
              src={bgImages[currentIndex]}
              alt={`Background ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white bg-primary rounded-full border border-primary/20 uppercase">
              SHE HELPING HAND NGO
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Extending Hope, <br />
              <span className="text-primary italic">Empowering</span> Lives
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              We are dedicated to building stronger communities through humanitarian support, 
              education, and healthcare outreach for vulnerable groups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#donate"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Donate Now
              <Heart size={20} fill="currentColor" />
            </a>
            <a
              href="#join"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95"
            >
              Join Our Mission
              <Users size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute bottom-12 right-24 bg-white p-6 rounded-3xl shadow-2xl items-center gap-4 border border-gray-100"
      >
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary">
          <Heart size={24} fill="currentColor" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Active Projects</p>
          <p className="text-xl font-display font-bold text-gray-900">12+ Communities</p>
        </div>
      </motion.div>
    </section>
  );
}
