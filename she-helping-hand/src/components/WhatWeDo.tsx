import { motion } from 'motion/react';
import { Users, BookOpen, HeartPulse, GraduationCap, HandHeart, Briefcase } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: "Community Support",
      desc: "Providing basic essentials, housing support, and relief services to families in need locally and beyond.",
      icon: Users,
      color: "border-blue-100 bg-blue-50/50",
    },
    {
      title: "Women Empowerment",
      desc: "Equipping women with vocational skills, financial literacy, and entrepreneurial tools to build independence.",
      icon: HandHeart,
      color: "border-green-100 bg-green-50/50",
    },
    {
      title: "Youth Development",
      desc: "Mentorship programs and leadership workshops designed to inspire the next generation of changemakers.",
      icon: GraduationCap,
      color: "border-purple-100 bg-purple-50/50",
    },
    {
      title: "Educational Assistance",
      desc: "Scholarships, school supplies, and educational infrastructure support for children in remote areas.",
      icon: BookOpen,
      color: "border-orange-100 bg-orange-50/50",
    },
    {
      title: "Healthcare Outreach",
      desc: "Mobile clinics, health awareness campaigns, and medical supply donations to rural communities.",
      icon: HeartPulse,
      color: "border-red-100 bg-red-50/50",
    },
    {
      title: "Charity Programs",
      desc: "Regular food drives and seasonal donation events to ensure no one goes hungry during difficult times.",
      icon: Briefcase,
      color: "border-yellow-100 bg-yellow-50/50",
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Impact Areas</span>
          <h2 className="heading-md mb-6">What We <span className="text-primary italic">Do</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our initiatives are designed to create lasting change. We handle each project with 
            compassion and a commitment to long-term community growth.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className={`p-10 rounded-3xl border ${service.color} group hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all cursor-default relative overflow-hidden`}
          >
            <div className="bg-white p-4 rounded-2xl w-fit mb-8 shadow-sm group-hover:scale-110 transition-transform text-primary">
              <service.icon size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
            
            {/* Visual accent */}
            <div className="absolute top-0 right-0 p-8 transform translate-x-12 -translate-y-12 bg-primary/5 rounded-full group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
