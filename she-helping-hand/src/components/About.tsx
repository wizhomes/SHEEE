import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Users } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      desc: "To provide sustainable humanitarian support and empower individuals to lead dignified lives through community-focused initiatives.",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Our Vision",
      desc: "A world where every vulnerable person especially women and children has access to basic needs, education, and equal opportunities.",
      icon: Eye,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Core Values",
      desc: "Integrity, Compassion, Innovation, and Accountability are the pillars that guide every action we take in the field.",
      icon: ShieldCheck,
      color: "bg-orange-50 text-orange-600",
    }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/ABOUT.jpeg"
                alt="Our activities"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Geometric accents */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-1/2 -right-8 w-32 h-32 bg-green-600 rounded-3xl rotate-12 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Our NGO</span>
            <h2 className="heading-md mb-6">Empowering Communities, <br /><span className="text-primary italic">One Hand</span> At A Time.</h2>
            <p className="text-body mb-8">
              Founded on the belief that everyone deserves a helping hand, SHE HELPING HAND was established to bridge the gap in humanitarian services. We focus on the most underserved populations, providing them with the tools and support they need to thrive.
            </p>
            <p className="text-body mb-10">
              Our journey started with a small group of passionate volunteers and has grown into a structured organization reaching thousands of women, children, and elderly people across various regions.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <Heart className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">5k+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Lives Touched</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <Users className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">50+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Volunteers</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary/20 transition-all cursor-default">
                <ShieldCheck className="text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-display font-bold text-gray-900">5+</span>
                <span className="text-xs text-gray-500 font-medium uppercase tracking-tight">Partners</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Vision Value Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-primary/10 transition-all group"
            >
              <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
