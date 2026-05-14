import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahomka FM",
      location: "Volunteer Partner, Ghana",
      text: "We are proud to stand with SHE HELPING HAND. Their dedication to transparency and real-world impact makes them a standout organization in our region. Together, we are building a better future.",
      image: "/AHOMKA FM.jpeg"
    },
    {
      name: "Cape Coast Teaching Hospital",
      location: "Volunteer Partner, Cape Coast",
      text: "Our partnership with SHE HELPING HAND has significantly improved healthcare accessibility in the region. Their commitment to community support and healthcare outreach is invaluable.",
      image: "/CAPE COAST TEACHING HOSPITAL.jpeg"
    }
  ];

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="heading-md mb-6">Voices of <span className="text-primary italic">Impact</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from the frontlines of our mission. Every partner and volunteer 
            helps us move a step closer to a better world for all.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/40 relative group border border-gray-50"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Quote size={24} />
            </div>
            
            <p className="text-gray-600 italic leading-loose text-lg mb-8 pt-4">"{t.text}"</p>
            
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-display font-bold text-gray-900">{t.name}</h4>
                <p className="text-primary text-xs uppercase font-bold tracking-widest">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
