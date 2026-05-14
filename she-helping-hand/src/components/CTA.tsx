import { motion } from 'motion/react';
import { Heart, Users } from 'lucide-react';

export default function CTA() {
  return (
    <section id="donate" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Ready to be the <span className="italic text-green-300">Change</span>?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Your donation, no matter how small, can provide education, healthcare, 
              and empowerment to someone in need today. Join our mission of hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-white text-primary hover:bg-gray-100 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                Support Our Mission
                <Heart size={20} fill="currentColor" />
              </button>
              <button className="px-10 py-5 bg-primary-dark text-white border border-white/20 hover:bg-green-900 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                Volunteer with Us
                <Users size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
